import React, { useState, useCallback, useEffect } from "react";
import debounce from "lodash/debounce";
import { FaSearch } from "react-icons/fa";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import FilterButtons from "./filters";
import "./index.css";

const SearchHeader = () => {
   return (
      <div className="search-header-container">
         <Typography
            variant="h1"
            className="primary-text"
            sx={{ mb: "20px", fontSize: "32px", fontWeight: 700 }}
         >
            Project Header
         </Typography>
         <p className="light-text" sx={{ m: 0 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
         </p>
      </div>
   );
};

const Search = ({
   shouldShowHeader,
   showFilterButtonHorizontal,
   handleSearch,
   buttonsConfig,
   onFilterClick,
   searchedValue,
}) => {
   const [inputValue, setInputValue] = useState(searchedValue);

   useEffect(() => {
      setInputValue(searchedValue);
   }, [searchedValue]);

   return (
      <Container fixed>
         {shouldShowHeader && <SearchHeader />}
         <div
            className={`search-wrapper ${
               showFilterButtonHorizontal ? "show-horizontal" : ""
            }`}
         >
            <FilterButtons
               onButtonClick={onFilterClick}
               buttonsConfig={buttonsConfig}
            />
            <form
               className="search-container"
               onSubmit={(event) => {
                  handleSearch(inputValue);
                  event.preventDefault();
               }}
            >
               <input
                  className="search-input"
                  type="text"
                  value={inputValue}
                  required
                  onChange={(e) => {
                     setInputValue(e.target.value);
                  }}
                  placeholder="Search..."
               />
               <button
                  type="submit"
                  className="search-submit"
                  aria-label="Search"
               >
                  <FaSearch className="search-icon" />
               </button>
            </form>
         </div>
      </Container>
   );
};

export default Search;
