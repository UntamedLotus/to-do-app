import React from "react";
import "./clear-btn.scss";

const ClearBtn = (props) => {
  return (
    <button onClick={props.removeAll} className="clear-btn">
      Clear All
    </button>
  );
};

export default ClearBtn;
