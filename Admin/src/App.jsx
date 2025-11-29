// App.jsx (CLEANED UP)

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "sonner";

import ProtectedRoute from "./components/ProtectedRoute";

// Import your pages
import Admin from "./pages/admin";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/routes/pricing";
import Manage from "./pages/routes/Manage"
import Ride from "./pages/ride";
import Charter from "./pages/charter";
import Users from "./pages/users/users";
import Driver from "./pages/drivers/driver";
import Wallet from "./pages/wallet";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";
import RegisterDriver from "./pages/drivers/Register";
import DriversProfile from "./pages/drivers/DriversProfile";
import Login from "./components/Login";
import Vehicle from "./pages/vehicle/Vehicle";
import RegisterVehicle from "./pages/vehicle/RegisterVehicle";
import Edituser from "./pages/users/_tablecomponent/edituser";

function App() {
  return (
    // 2. REMOVE the AuthProvider wrapper from here.
    <Router>
      <Toaster position="top-right" richColors />
      <Routes>
        {/* Your routing logic is perfect and stays the same */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="pricing-and-route" element={<Pricing />} />
           <Route path="manage-route" element={<Manage />} />
          <Route path="Ride-Activities" element={<Ride />} />
          <Route path="Charter-Requests" element={<Charter />} />
          <Route path="User-Management" element={<Users />} />
          <Route path="Driver-list" element={<Driver />} />
          <Route path="Transaction-&-Wallet" element={<Wallet />} />
          <Route path="Notifications" element={<Notification />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="RegisterDriver" element={<RegisterDriver />} />
          <Route path="DriversProfile" element={<DriversProfile />} />
          <Route path="Vehicle-management" element={<Vehicle />} />
          <Route path="Registervehicle" element={<RegisterVehicle />} />
          <Route path="Edituser" element={<Edituser />} />
        </Route>
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
