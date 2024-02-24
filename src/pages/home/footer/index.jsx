import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="login-footer">
      <div>
        <p style={{ marginBottom: "15px" }}>
          <a
            href="/"
            style={{
              fontWeight: 600,
              color: "inherit",
            }}
          >
            Sign in
          </a>{" "}
          using SSO or use a different sign in method
        </p>
        <p>
          <a
            href="/"
            style={{
              fontWeight: 600,
              color: "inherit",
            }}
          >
            Create Account
          </a>{" "}
          instead
        </p>
      </div>
      <button
        onClick={() => {
          navigate("/preSearch");
        }}
        type="button"
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "18px",
          fontWeight: 600,
          padding: "10px 15px",
          borderRadius: "5px",
          whiteSpace: "nowrap",
        }}
      >
        Sign in with SSO
        <ArrowOutwardIcon />
      </button>
    </div>
  );
};

export default Footer;
