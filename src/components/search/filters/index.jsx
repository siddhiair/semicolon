import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
               <Button
                  onClick={() => onButtonClick(button.id)}
                  size="small"
                  variant={button.selected ? "contained" : "outlined"}
               >
                  {button.name}
               </Button>
            );
         })}
      </Box>
   );
};

export default FilterButtons;
