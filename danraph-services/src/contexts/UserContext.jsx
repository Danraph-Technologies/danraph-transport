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
    
    try {
      // If we have a token, try to use it
      if (storedUser?.access_token) {
        const response = await callBackendApi('/auth/session', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Authorization': `Bearer ${storedUser.access_token}`
          }
        });
        
        const userData = response?.data || response;
        if (userData?.user_id) {
          // Merge with existing user data to preserve the token
          const updatedUser = { ...storedUser, ...userData };
          localStorage.setItem('user', JSON.stringify(updatedUser));
          return updatedUser;
        }
      }
      
      // If we get here, either no token or invalid session
      throw new Error('No valid session');
    } catch (error) {
      console.error('Session validation failed:', error);
      if (error.status === 401 || !storedUser?.access_token) {
        localStorage.removeItem('user');
      }
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
      // First, try to get from localStorage
      const savedUser = localStorage.getItem('user');
      
      // If we have a saved user, try to use it
      if (savedUser) {
        try {
          const parsedUser = JSON.parse(savedUser);
          if (parsedUser?.user_id) {
            // Return the saved user immediately for better UX
            // and validate session in the background
            validateSession().catch(console.error);
            return parsedUser;
          }
        } catch (e) {
          console.error('Error parsing saved user:', e);
        }
      }
      
      // If no saved user or invalid, try to get from API
      return validateSession();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    retryIf: (error) => error.status !== 401, // Don't retry on 401
  });

  // Login mutation
  const login = async (email, password) => {
    try {
      // First, clear any existing session
      localStorage.removeItem('user');
      queryClient.setQueryData(['user'], null);
      
      // Make the login request
      console.log('Login request starting...');
      const response = await callBackendApi('/auth/login', {
        method: 'POST',
        body: { email, password },
        credentials: 'include',
      });
      
      console.log('Login response received:', {
        status: 'success',
        hasData: !!response,
        responseKeys: Object.keys(response || {}),
        response: JSON.parse(JSON.stringify(response || {}))
      });
      
      // Store the user data with access token
      const userData = response?.data || response;
      if (userData?.access_token) {
        localStorage.setItem('user', JSON.stringify(userData));
        queryClient.setQueryData(['user'], userData);
        return userData;
      }
      
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