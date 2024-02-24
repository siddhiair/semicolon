import React from "react";
import { useState } from "react";
import axios from "axios";

import AccordionDataRenderer from "../../components/AccordionDataRenderer";
import Search from "../../components/search";
import AppNavBar from "../../components/navbar";
import Index  from "../../components/LandingPage";

import "./index.css";

const SearchPage = () => {
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

   const [isDataFetchInProgress, setIsDataFetchInProgress] = useState(false);
   const [fetchErrorOccurred, setFetchErrorOccurred] = useState(false);

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
            <Search handleSearch={handleSearch} />
         <Index/>
            {/* <AccordionDataRenderer
               tabsData={appData}
               isDataFetchInProgress={isDataFetchInProgress}
               fetchErrorOccurred={fetchErrorOccurred}
            /> */}
         </div>
      </>
   );
};

export default SearchPage;
