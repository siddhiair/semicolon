import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import AppNavBar from "../../components/navbar";

import "./index.css";

const HomePage = () => {
   const navigate = useNavigate();
   return (
      <>
         <AppNavBar />
         <div className="main-container">
            <Header />
            <div className="hero-image">
               <img src="src/assets/images/hero.png" alt="" />
            </div>
            <Footer />
         </div>
      </>
   );
};

export default HomePage;
