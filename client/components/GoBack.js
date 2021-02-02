import React from "react";
import { Link } from "react-router-dom";

const GoBack = ({ to }) => {
  return (
    <Link to={to} className="btn btn-medium">
      Back
    </Link>
  );
};

export default GoBack;
