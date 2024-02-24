import React from "react";
import { Box } from "@mui/material";
import { logo } from "../../../assets/images";

import "./index.css";
const Header = () => {
  return (
    <Box sx={{ p: "2em" }}>
      <div>
        <a href="/">
          <img src={logo} width={140} height={36} alt="Logo" />
        </a>
      </div>
      <h1 className="login-card-title">
        At vero eos et accusamus et iusto odio dignissimos ducimus
        <span>voluptatum delenit</span>
      </h1>
    </Box>
  );
};

export default Header;
