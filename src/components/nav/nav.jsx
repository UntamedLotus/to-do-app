import React from "react";
import "./nav.scss";
import Search from "./search/search";
import CurrentDate from "./date/date";

const Nav = () => {
  return (
    <div className="main-nav">
      <Search />
      <CurrentDate />
    </div>
  );
};

export default Nav;
