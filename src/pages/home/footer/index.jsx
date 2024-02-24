import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
   const navigate = useNavigate();
   return (
      <div class="footer-container">
         <div>Lorem ipsum dolor sit amet.</div>
         <div>Lorem ipsum dolor sit amet.</div>
         <div>
            <button
               onClick={() => {
                  navigate("/search");
               }}
               type="button"
            >
               Sign in SSO
            </button>
         </div>
      </div>
   );
};

export default Footer;
