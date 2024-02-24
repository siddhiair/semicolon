import React from "react";
import { useState } from "react";

import Search from "../../components/search";
import AppNavBar from "../../components/navbar";
import Index from "../../components/LandingPage";

import "./index.css";
import { useNavigate } from "react-router-dom";

const PreSearchPage = ({ buttonsConfig }) => {
  const navigate = useNavigate();

  const [filterButtonsConfig, setFiltersButtonConfig] = useState(buttonsConfig);

  const handleFilterClick = (id) => {
    const updatedButtonsConfig = filterButtonsConfig.map((buttonConfig) =>
      buttonConfig.id !== id
        ? buttonConfig
        : { ...buttonConfig, selected: !buttonConfig.selected }
    );
    setFiltersButtonConfig(updatedButtonsConfig);
  };

  const handleSearch = async (searchedValue) => {
    window.localStorage.setItem(
      "filterConfig",
      JSON.stringify(filterButtonsConfig)
    );
    navigate(`search?searchedValue=${searchedValue}`);
  };

  return (
    <>
      <AppNavBar />
      <div className="app-container">
        <Search
          shouldShowHeader={true}
          showFilterButtonHorizontal={false}
          handleSearch={handleSearch}
          buttonsConfig={filterButtonsConfig}
          onFilterClick={handleFilterClick}
        />
        <Index />
      </div>
    </>
  );
};

PreSearchPage.defaultProps = {
  buttonsConfig: [
    { id: 1, label: "Code", name: "Code Search", selected: false },
    { id: 2, label: "Document", name: "Jira Search", selected: false },
    {
      id: 3,
      label: "Code & Document",
      name: "Confluence Search",
      selected: false,
    },
  ],
};

export default PreSearchPage;
