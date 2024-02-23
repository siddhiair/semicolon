import React, { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { FaSearch } from "react-icons/fa";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import "./index.css";

const SearchHeader = () => {
  return (
    <div className="search-header-container">
      <h1 
        className="primary-text" 
        sx={{ mb: '10px' }}
      >Project Header</h1>
      <p className="light-text" sx={{ m: 0 }}>Search GitHub code, Confluence/JIRA </p>
    </div>
  );
};

const Search = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const debouncedHandleSearch = useCallback(
    debounce((value) => handleSearch(value), 1000),
    []
  );

  return (
    <Container fixed>
      <SearchHeader />
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
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          className="search-input"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            debouncedHandleSearch(e.target.value);
          }}
          placeholder="Search..."
        />
      </div>
    </Container>
  );
};

export default Search;
