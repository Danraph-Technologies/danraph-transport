// src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // 1. If the auth status is still being checked, show a loading spinner.
  // This prevents a brief flash of the login page before the user is confirmed.
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="animate-spin h-16 w-16 rounded-full border-b-2 border-t-2 border-blue-600"></div>
      </div>
    );
  }

  // 2. If loading is finished and the user is NOT authenticated, redirect them.
  if (!isAuthenticated) {
    // We pass the page they were trying to access (`location`) in the state.
    // The Login page can use this to redirect them back after a successful login.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3. If loading is finished and the user IS authenticated, show the requested page.
  return children;
};

export default ProtectedRoute;