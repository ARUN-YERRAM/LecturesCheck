import React from 'react';
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <>
      <div className="App">
        <button id="Log">
          <Link to="/">Learn</Link>
        </button>
      </div>
    </>
  );
};

export default Learn;
