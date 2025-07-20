import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Dashboard from "./components/Dashboard";
import GithubTracker from "./components/GithubTracker";
import LeetcodeTracker from "./components/LeetcodeTracker";
import Sidebar from "./components/Sidebar";
import Planner from "./components/Planner";
import "./styles/App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuButtonRef = useRef(null);

  return (
    <Router>
      <Navbar
        onMenuClick={() => setIsSidebarOpen(true)}
        menuButtonRef={menuButtonRef}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
        menuButtonRef={menuButtonRef}
      />
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Planner" element={<Planner />} />
        <Route path="/GithubTracker" element={<GithubTracker />} />
        <Route path="/LeetcodeTracker" element={<LeetcodeTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
