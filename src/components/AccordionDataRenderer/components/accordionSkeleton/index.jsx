import React from "react";
import Container from '@mui/material/Container';
import "./index.css";

const AccordionSkeleton = () => {
  return (
    <Container fixed sx={{pt:'24px'}}>
      <div className="accordion">
        <div className="skeleton-row"></div>
        <div className="skeleton-row">
          <div className="skeleton-box body"></div>
        </div>
      </div>
      <div className="accordion">
        <div className="skeleton-row">
          <div className="skeleton-box body"></div>
        </div>
      </div>
      <div className="accordion">
        <div className="skeleton-row">
          <div class="skeleton-box body"></div>
        </div>
      </div>
    </Container>
  );
};

export default AccordionSkeleton;
