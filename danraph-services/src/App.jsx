import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SonnerToaster from "./Components/sonner-toast-setup";
import "./App.css";
import Home from "./pages/home";
import Login from "./Components/login";
import Signup from "./Components/signup";
import Users from "./pages/users";
import Ride from "./pages/ride";
import Dashboard from "./pages/dashboard";
import Charter from "./pages/charter";
import Wallet from "./pages/wallet";
import History from "./pages/history";
import Support from "./pages/support";
import Settings from "./pages/settings";
import Comfirm from "./pages/comfirm";
import Success from "./pages/success";
import Charterr from "./pages/charterr";
import ScrollToTop from "./Components/scrolltotop";
import { UserProvider } from "./contexts/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Function to check if user is authenticated
const isAuthenticated = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    return !!user?.user_id;
  } catch (error) {
    return false;
  }
};

// Auth wrapper component
const AuthWrapper = ({ children }) => {
  useEffect(() => {
    if (!isAuthenticated()) {
      localStorage.removeItem('user');
      toast.error('Your session has expired. Please log in again.');
    }
  }, []);

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function AppContent() {
  return (
    <Router>
      <ScrollToTop />
      <SonnerToaster />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/users" element={<Users />}>
            <Route path="Ride" element={<Ride />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Charter" element={<Charter />} />
            <Route path="Wallet" element={<Wallet />} />
            <Route path="History" element={<History />} />
            <Route path="Support" element={<Support />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="Comfirm" element={<Comfirm />} />
            <Route path="Success" element={<Success />} />
            <Route path="Charterr" element={<Charterr />} />
          </Route>
        </Route>

        {/* Redirect any unknown paths to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
