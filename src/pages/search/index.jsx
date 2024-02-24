import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import AccordionDataRenderer from "../../components/AccordionDataRenderer";
import Search from "../../components/search";
import AppNavBar from "../../components/navbar";
import Index from "../../components/LandingPage";

import "./index.css";
import { useLocation } from "react-router-dom";

const SearchPage = ({ buttonsConfig }) => {
   const [queryParams, setQueryParams] = useState({});
   let { search } = useLocation();
   const [appData, setAppData] = useState([
      {
         label: "Code",
      },
      {
         label: "Document",
      },
      {
         label: "Code & Document",
      },
   ]);

   const [appDataToShow, setAppDataToShow] = useState([]);

   const [filterButtonsConfig, setFiltersButtonConfig] =
      useState(buttonsConfig);

   const [isDataFetchInProgress, setIsDataFetchInProgress] = useState(false);
   const [fetchErrorOccurred, setFetchErrorOccurred] = useState(false);

   const handleFilterClick = (id) => {
      const updatedButtonsConfig = filterButtonsConfig.map((buttonConfig) =>
         buttonConfig.id !== id
            ? buttonConfig
            : { ...buttonConfig, selected: !buttonConfig.selected }
      );
      setFiltersButtonConfig(updatedButtonsConfig);
   };

   const updateAppData = () => {
      const newData = [];
      for (const config of filterButtonsConfig) {
         for (const data of appData) {
            if (config.selected && config.label === data.label) {
               newData.push(data);
            }
         }
      }
      setAppDataToShow(newData);
   };

   useEffect(() => {
      setFiltersButtonConfig(
         JSON.parse(
            window.localStorage.getItem("filterConfig") || buttonsConfig
         )
      );
   }, []);

   useEffect(() => {
      updateAppData();
   }, [filterButtonsConfig, appData]);

   useEffect(() => {
      let queryParams = {};
      const query = new URLSearchParams(search);
      queryParams["searchedValue"] = query.get("searchedValue");
      setQueryParams(queryParams);
   }, []);

   useEffect(() => {
      handleSearch(queryParams.searchedValue);
   }, [queryParams]);

   const handleSearch = async (searchedValue) => {
      // Expecting following response from our backend, lets not process data on UI.
      setIsDataFetchInProgress(true);
      try {
         const response = await axios.get(
            "https://jsonblob.com/api/1210512890556964864"
         );

         setAppData(response.data?.appData || []);
         setIsDataFetchInProgress(false);
      } catch (err) {
         setIsDataFetchInProgress(false);
         setFetchErrorOccurred(true);
      }
   };

   return (
      <>
         <AppNavBar />
         <div className="app-container">
            <Search
               shouldShowHeader={false}
               showFilterButtonHorizontal={true}
               handleSearch={handleSearch}
               buttonsConfig={filterButtonsConfig}
               onFilterClick={handleFilterClick}
               searchedValue={queryParams.searchedValue}
            />
            {/* <Index /> */}
            <AccordionDataRenderer
               tabsData={appDataToShow}
               isDataFetchInProgress={isDataFetchInProgress}
               fetchErrorOccurred={fetchErrorOccurred}
            />
         </div>
      </>
   );
};

SearchPage.defaultProps = {
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

export default SearchPage;
