import React, { useState } from "react";
import Box from "@mui/material/Box";

const FilterButtons = ({ buttonsConfig, onButtonClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "10px",
      }}
      className="search-btns"
    >
      {buttonsConfig.map((button) => {
        return (
          <button
            type="button"
            onClick={() => onButtonClick(button.id)}
            className={button.selected ? "active" : ""}
          >
            {button.name}
          </button>
        );
      })}
    </Box>
  );
};

export default FilterButtons;
