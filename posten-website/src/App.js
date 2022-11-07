import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Contact from "./components/pages/contact/Contact";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Navbar from "./components/pages/layout/Navbar";
import Store from "./components/pages/store/Store";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
