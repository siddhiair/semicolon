import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { pr, jira, file, confluence } from "../../assets/images";

import "./index.css";

const CardIcon = ({ type }) => {
  if (type === "pr") {
    return <img src={pr} width={24} height={24} alt="" />;
  }
  if (type === "file") {
    return <img src={file} width={24} height={24} alt="" />;
  }
  if (type === "jira") {
    return <img src={jira} width={24} height={24} alt="" />;
  }
  if (type === "confluence") {
    return <img src={confluence} width={24} height={24} alt="" />;
  }
  return null;
};

export default function CustomAccordion({ accordionData }) {
  return (
    <div>
      {accordionData?.map((item, index) => (
        <div className="accordion-wrapper">
          <Accordion
            key={index}
            sx={{ backgroundColor: "transparent", padding: 0 }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowDropDownIcon
                  className="expand-icon"
                  sx={{ fontSize: "15px", m: "0px" }}
                />
              }
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
              sx={{ backgroundColor: "transparent", fontSize: "16px" }}
              className="lighter-text"
            >
              {item.title}
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <Box className="acc-item-list">
                {item.details.map((detail, detailIndex) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "nowrap",
                      alignItems: "center",
                      columnGap: "20px",
                      pl: "1em",
                      pr: "1em",
                      pt: ".8em",
                      pb: ".8em",
                    }}
                    className="acc-item"
                  >
                    <Box
                      key={detailIndex}
                      sx={{
                        display: "flex",
                        columnGap: "15px",
                        alignItems: "center",
                        flexGrow: 1,
                      }}
                    >
                      <div className="card-icon">
                        <CardIcon type="pr" />
                      </div>
                      <div>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: 1,
                          }}
                          className="lighter-text"
                        >
                          {detail.name}
                        </Typography>
                        <Typography
                          variant="body"
                          sx={{ fontSize: "13px", color: "#fff", opacity: 0.4 }}
                        >
                          Jane Author
                        </Typography>
                      </div>
                    </Box>
                    <Box sx={{ width: "120px", textAlign: "center" }}>
                      <span className="badge">open</span>
                    </Box>
                    <Box sx={{ width: "180px" }}>
                      <Typography
                        variant="body"
                        sx={{
                          fontSize: "12px",
                          color: "#fff",
                          opacity: 0.4,
                          display: "block",
                        }}
                      >
                        Last updated at
                      </Typography>
                      <Typography
                        variant="body"
                        sx={{ fontSize: "13px" }}
                        className="light-text"
                      >
                        {" "}
                        12 Jan, 24 12:34:45
                      </Typography>
                    </Box>
                    <Box>
                      <MoreHorizIcon className="light-text" />
                    </Box>
                  </Box>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
