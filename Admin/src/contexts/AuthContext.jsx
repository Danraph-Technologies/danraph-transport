// src/context/AuthContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api'; // Your configured axios instance

// Create the context that our components will use
const AuthContext = createContext(null);

// Create the Provider component that will wrap our app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // We start in a loading state

  // This effect runs ONCE when the app first loads.
  // Its job is to check if a valid session cookie already exists.
  useEffect(() => {
    const checkLoggedInStatus = async () => {
      try {
        // Use the /v1/users/me endpoint you provided.
        // The cookie is sent automatically by our configured api instance.
        const response = await api.get('/v1/users/me');
        
        // The docs say user data is in response.data, not response.data.data
        if (response.data && response.data.id) {
          setUser(response.data); // Store the user object in state
          console.log("Session restored for user:", response.data.email);
        } else {
          // If we get a response but it's not a user object, treat as logged out
          setUser(null);
        }
      } catch (error) {
        // A 401 error here means the user is not logged in. This is expected.
        console.log('No active session found.');
        setUser(null);
      } finally {
        // We're done checking, so the initial loading is complete.
        setIsLoading(false);
      }
    };

    checkLoggedInStatus();
  }, []); // The empty dependency array `[]` ensures this runs only once.

  // This function will be called from your Login page
  const login = (userData) => {
    setUser(userData);
  };

  // This function can be called from a "Logout" button
  const logout = async () => {
    setUser(null); // Immediately clear the user state for a fast UI update
    try {
      // It's good practice to tell the backend to invalidate the session/cookie
      await api.post('/v1/auth/logout'); 
    } catch (error) {
      console.error("Logout API call failed, but user is logged out on the frontend.", error);
    }
  };

  // The value that will be available to all children components
  const value = {
    user,
    isAuthenticated: !!user, // A handy boolean: true if `user` is an object, false if `null`
    isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// A custom hook to make it easy to access the auth context in any component
export const useAuth = () => {
  return useContext(AuthContext);
};