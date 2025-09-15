import { createContext, useContext } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { callBackendApi } from '../lib/api';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const queryClient = useQueryClient();

  // Function to validate the session using stored token
  const validateSession = async () => {
    console.log('Validating session...');
    
    // Get the stored user data
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('Stored user data:', storedUser);
    
    try {
      // If we have a token, try to use it
      if (storedUser?.access_token) {
        console.log('Found access token, validating session...');
        try {
          const response = await callBackendApi('/auth/session', {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Authorization': `Bearer ${storedUser.access_token}`
            }
          });
          
          console.log('Session validation response:', response);
          
          const userData = response?.data || response;
          if (userData?.user_id) {
            console.log('Session validation successful');
            // Merge with existing user data to preserve the token
            const updatedUser = { ...storedUser, ...userData };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            return updatedUser;
          } else {
            console.warn('Session validation failed - no user_id in response');
          }
        } catch (apiError) {
          console.error('API error during session validation:', apiError);
          throw apiError; // Re-throw to be caught by outer catch
        }
      } else {
        console.warn('No access token found in stored user data');
      }
      
      // If we get here, either no token or invalid session
      const error = new Error('No valid session');
      error.status = 401;
      throw error;
    } catch (error) {
      console.error('Session validation failed:', {
        message: error.message,
        status: error.status,
        data: error.data,
        stack: error.stack
      });
      
      // Always clear invalid session data
      localStorage.removeItem('user');
      throw error;
    }
  };

  // Query to fetch user session
  const {
    data: user,
    isLoading,
    error,
    refetch: refetchUser,
  } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      console.log('Running user query...');
      
      // First, try to get from localStorage
      const savedUser = localStorage.getItem('user');
      
      // If we have a saved user, try to use it
      if (savedUser) {
        try {
          const parsedUser = JSON.parse(savedUser);
          console.log('Found saved user:', { hasUserId: !!parsedUser?.user_id, hasToken: !!parsedUser?.access_token });
          
          if (parsedUser?.user_id) {
            // In the background, try to validate the session
            // This will update the cache if successful
            validateSession()
              .then(validatedUser => {
                console.log('Background session validation successful');
                queryClient.setQueryData(['user'], validatedUser);
              })
              .catch(error => {
                console.warn('Background session validation failed:', error.message);
                // Don't update the cache on failure
              });
              
            // Return the cached user immediately for better UX
            return parsedUser;
          }
        } catch (e) {
          console.error('Error parsing saved user:', e);
          localStorage.removeItem('user');
        }
      }
      
      console.log('No valid cached user, attempting to validate session...');
      // If no saved user or invalid, try to get from API
      return validateSession();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    retryIf: (error) => {
      const shouldRetry = error.status !== 401;
      console.log(`Retrying query: ${shouldRetry ? 'Yes' : 'No'}, status: ${error.status}`);
      return shouldRetry;
    },
  });

  // Login mutation
  const login = async (email, password) => {
    try {
      console.log('Starting login process...');
      
      // First, clear any existing session
      localStorage.removeItem('user');
      queryClient.setQueryData(['user'], null);
      
      // Make the login request
      console.log('Sending login request...');
      const response = await callBackendApi('/auth/login', {
        method: 'POST',
        body: { email, password },
        credentials: 'include',
      });
      
      console.log('Login response received:', response);
      
      // Get user data from response
      const userData = response?.data || response;
      
      if (!userData) {
        throw new Error('No user data received in login response');
      }
      
      // Ensure we have required fields - updated to match actual response structure
      if (!userData.user_id) {
        console.error('Invalid login response - missing user_id:', userData);
        throw new Error('Invalid login response from server');
      }
      
      // Log the successful login response for debugging
      console.log('Login successful, user data:', userData);
      
      // Store the user data with access token
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Update the query cache
      queryClient.setQueryData(['user'], userData);
      
      console.log('Login successful, user data stored');
      return userData;
      
      // After successful login, validate the session to get fresh user data
      try {
        console.log('Attempting to validate session...');
        
        // First, get cookies to see what we're working with
        const cookies = document.cookie;
        console.log('Current cookies:', cookies);
        
        // Make session request with full credentials
        const sessionResponse = await callBackendApi('/auth/session', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });
        
        console.log('Session validation response:', {
          status: 'success',
          hasData: !!sessionResponse,
          response: sessionResponse
        });
        
        const userData = sessionResponse?.data || sessionResponse;
        
        if (userData?.user_id) {
          console.log('Session validation successful, user ID:', userData.user_id);
          localStorage.setItem('user', JSON.stringify(userData));
          queryClient.setQueryData(['user'], userData);
          return userData;
        } else {
          console.warn('Session validation missing user_id:', userData);
        }
      } catch (sessionError) {
        console.error('Session validation after login failed:', {
          message: sessionError.message,
          status: sessionError.status,
          data: sessionError.data,
          stack: sessionError.stack
        });
        
        // Check if we have a valid response from the login that we can use
        if (response?.user_id) {
          console.log('Using login response as fallback');
          const userData = response;
          localStorage.setItem('user', JSON.stringify(userData));
          queryClient.setQueryData(['user'], userData);
          return userData;
        }
      }
      
      // Fallback to original response handling if session validation fails
      if (response?.data?.user_id) {
        const userData = response.data;
        localStorage.setItem('user', JSON.stringify(userData));
        queryClient.setQueryData(['user'], userData);
        return userData;
      } else if (response?.user_id) {
        localStorage.setItem('user', JSON.stringify(response));
        queryClient.setQueryData(['user'], response);
        return response;
      }
      
      throw new Error('Invalid response format from server');
    } catch (error) {
      console.error('Login error details:', error);
      // Clear any partial session data on error
      localStorage.removeItem('user');
      queryClient.setQueryData(['user'], null);
      throw new Error(error.message || 'Login failed. Please check your credentials.');
    }
  };

  // Logout function
  const logout = async () => {
    try {
      // Call logout endpoint if you have one
      await callBackendApi('/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('user');
      queryClient.setQueryData(['user'], null);
      queryClient.clear();
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        error,
        isAuthenticated: !!user?.user_id,
        login,
        logout,
        refetchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};