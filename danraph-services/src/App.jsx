import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Normal pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Users Page with Nested Routes */}
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
      </Routes>
    </Router>
  );
}

export default App;
