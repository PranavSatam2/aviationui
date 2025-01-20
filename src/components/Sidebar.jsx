import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="app-sidebar">
      <ul>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#settings">Settings</a></li>
        <li><a href="#logout">Logout</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
