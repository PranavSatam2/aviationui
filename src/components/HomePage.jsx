import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main-content">
          <h2>Welcome to the Home Page</h2>
          <p>This is the main content area where information will be displayed.</p>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
