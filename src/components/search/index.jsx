import React, { useState, useCallback } from "react";
import debounce from "lodash/debounce";
import { FaSearch } from "react-icons/fa";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import "./index.css";

const SearchHeader = () => {
  return (
    <div className="search-header-container">
      <Typography variant="h1" 
        className="primary-text" 
        sx={{ mb: '20px', fontSize: '32px', fontWeight: 700 }}
      >Project Header
      </Typography>
      <p className="light-text" sx={{ m: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  );
};

const FilterButtons = () => {
  return(
    <Box 
      sx={{
        display: "flex",
        columnGap: "10px"
      }}
      className='search-btns'
    >
      <Button size='small' variant="outlined">Code Search</Button>
      <Button size='small' variant="outlined">Jira Search</Button>
      <Button size='small' variant="outlined">Confluence Search</Button>
    </Box>
  );
}

const Search = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const debouncedHandleSearch = useCallback(
    debounce((value) => handleSearch(value), 1000),
    []
  );

  return (
    <Container fixed>
      <SearchHeader />
      <div className="search-wrapper">
        <FilterButtons />
        <form className="search-container">
          <input
            className="search-input"
            type="text"
            value={inputValue}
            required
            onChange={(e) => {
              setInputValue(e.target.value);
              debouncedHandleSearch(e.target.value);
            }}
            placeholder="Search..."
          />
          <button type="submit" className="search-submit" aria-label="Search">
            <FaSearch className="search-icon" />
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Search;
