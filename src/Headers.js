import React from "react";
import "./Headers.css";

const Headers = ({ headers }) => {
  return (
    <div className="headers">
      {headers.map((header) => {
        return (
          <div className="header" key={header}>
            {header}
          </div>
        );
      })}
    </div>
  );
};

export default Headers;
