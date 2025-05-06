import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Drivers from "./components/drivers";
import Dashboard from "./pages/Dashboard";
import Ride from "./pages/ride";
import Settings from "./pages/Settings";
import Support from "./pages/support";
import Wallet from "./pages/wallet";
import Trips from "./pages/trips";


const App = () => (
  <Router>
  <Routes>
    <Route path="/" element={<Navigate to="/drivers" replace />} />
    <Route path="/drivers" element={<Drivers />}>
      <Route index element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="ride" element={<Ride />} />
      <Route path="settings" element={<Settings />} />
      <Route path="wallet" element={<Wallet />} />
      <Route path="support" element={<Support />} />
      <Route path="trips" element={<Trips />} />
    </Route>
  </Routes>
</Router>
);

export default App;