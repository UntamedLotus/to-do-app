import React from "react";
import "./nav.scss";
import Search from "./search/search";
import CurrentDate from "./date/date";

const Nav = (props) => {
  return (
    <div className="main-nav">
      <Search
        onSubmit={props.onSubmit}
        taskName={props.taskName}
        handleTaskChange={props.handleTaskChange}
      />
      <CurrentDate />
    </div>
  );
};

export default Nav;
