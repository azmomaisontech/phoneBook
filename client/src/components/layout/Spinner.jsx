import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: "200px", display: "block", margin: "auto" }}
      alt="Loading......"
    ></img>
  );
};

export default Spinner;
