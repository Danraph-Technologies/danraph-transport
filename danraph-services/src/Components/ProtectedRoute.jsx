import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'sonner';

const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const isAuthenticated = !!user?.user_id;

  if (!isAuthenticated) {
    toast.error('Please log in to continue');
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
