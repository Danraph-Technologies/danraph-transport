import { callBackendApi } from "./api";

/**
 * Authentication API service
 */
export const authApi = {
  /**
   * Login with email and password
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @returns {Promise<Object>} - Response data
   */
  login: async (email, password) => {
    try {
      console.log('Login request with:', { email });
      const response = await callBackendApi("/auth/login", {
        method: "POST",
        body: { email, password }
      });
      console.log('Login response:', response);
      return response;
    } catch (error) {
      console.error('Login error:', error);
      // Make sure the error has a user-friendly message
      if (!error.message || error.message === 'Request failed') {
        error.message = 'Login failed. Please check your credentials and try again.';
      }
      throw error;
    }
  },

  /**
   * Register a new user
   * @param {Object} userData - User registration data
   * @returns {Promise<Object>} - Response data
   */
  register: async (userData) => {
    try {
      const response = await callBackendApi("/auth/register", {
        method: "POST",
        body: userData
      });
      return response;
    } catch (error) {
      console.error('Registration error:', error);
      // Make sure the error has a user-friendly message
      if (!error.message || error.message === 'Request failed') {
        error.message = 'Registration failed. Please try again.';
      }
      throw error;
    }
  },
};

export default authApi;