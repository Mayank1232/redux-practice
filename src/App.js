import React from "react";
import BootstrapNavbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import User from "./pages/User";

const App = () => {
  return (
    <div>
      <Router>
        {/* <BootstrapNavbar />; */}
        <Routes>
          <Route path="/" exact element={<User />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
