import React from "react";

import "../index.css";

const footer = () => {
  return (
    <div className="footer" id="footer">
      <p> Made with <span role="img" aria-label="Heart">💜 by </span></p>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/ajf013"
      >
        AJF013
      </a>
    </div>
  );
};

export default footer;
