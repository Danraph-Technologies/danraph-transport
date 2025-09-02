import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'sonner';
import { useUser } from '../contexts/UserContext';

const ProtectedRoute = () => {
  const { user, isLoading, error } = useUser();

  if (isLoading) {
    return <div>Loading...</div>; // Or your loading component
  }

  if (error || !user) {
    toast.error('Please log in to continue');
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
