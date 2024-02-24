import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";

import CustomAccordion from "../accordion";

import AccordionSkeleton from "./components/accordionSkeleton";
import NoDataComponent from "./components/noDataComponent";
import ErrorComponent from "./components/errorComponent";

import "./index.css";

function TabPanel(props) {
  const { children, ...other } = props;

  return (
    <div role="tabpanel" {...other}>
      <Box p={3}>{children}</Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
};

export default function AccordionDataRenderer({
  tabsData,
  isDataFetchInProgress,
  fetchErrorOccurred,
}) {
  return (
    <Container fixed>
      <div className="multi-tab-container">
        {isDataFetchInProgress ? (
          <AccordionSkeleton />
        ) : fetchErrorOccurred ? (
          <ErrorComponent />
        ) : (
          tabsData?.map((tab, index) => (
            <TabPanel index={index} key={index} className="tab-panels-wrapper">
              {tab?.content?.length ? (
                <CustomAccordion accordionData={tab?.content} />
              ) : (
                <NoDataComponent />
              )}
            </TabPanel>
          ))
        )}
      </div>
    </Container>
  );
}
