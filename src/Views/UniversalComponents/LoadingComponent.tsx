import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingComponent: React.FC = () => {
  return (
    <div className="loading-component">
      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only"></span>
      </Spinner>
    </div>
  );
};

export default LoadingComponent;
