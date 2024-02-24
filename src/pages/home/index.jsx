import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import AppNavBar from "../../components/navbar";

const HomePage = () => {
   const navigate = useNavigate();
   return (
      <>
         <AppNavBar />
         <Header />
         <div class="hero-image">
            <img src="src/assets/images/hero.png" alt="" />
         </div>
         <Footer />
      </>
   );
};

export default HomePage;
