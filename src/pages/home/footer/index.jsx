import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

const Footer = () => {
   const navigate = useNavigate();
   return (
      <div class="footer-container">
         <div>
            <div className="signIn-text">
               Sign in using SSO or use a different sign in method{" "}
            </div>
            <div className="create-account-text">create Account instead?</div>
         </div>

         <button
            className="signIn-button"
            onClick={() => {
               navigate("/preSearch");
            }}
            type="button"
         >
            Sign in with SSO
         </button>
      </div>
   );
};

export default Footer;
