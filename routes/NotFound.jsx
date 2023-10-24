import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      NotFound
      <p>There's nothing here!</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NotFound;
