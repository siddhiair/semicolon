import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import "./index.css";

const HomePage = () => {
  return (
    <div className="login-card">
      <Header />
      <div className="hero-image">
        <img src="src/assets/images/hero.png" alt="" width={600} height={400} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
