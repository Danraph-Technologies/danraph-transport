// src/main.jsx (or index.js) - THE CORRECT SETUP

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 1. Import your providers
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from "./contexts/AuthContext"; // Make sure this path is correct

// 2. Create the QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 3. Wrap your App component with ALL the necessary providers */}
    {/* The QueryClientProvider should be one of the outer ones */}
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);