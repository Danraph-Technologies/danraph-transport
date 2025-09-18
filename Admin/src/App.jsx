import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Admin from "./pages/admin";
import Dashboard from "./pages/Dashboard";
import Manage from "./pages/Manage";
import Ride from "./pages/ride";
import Charter from "./pages/charter";
import Users from "./pages/users/users";
import Driver from "./pages/driver";
import Wallet from "./pages/wallet";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="Manage-location" element={<Manage />} />
          <Route path="Ride-Activities" element={<Ride />} />
          <Route path="Charter-Requests" element={<Charter />} />
          <Route path="User-Management" element={<Users />} />
          <Route path="Driver-list" element={<Driver />} />
          <Route path="Transaction-&-Wallet" element={<Wallet />} />
          <Route path="Notifications" element={<Notification />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
