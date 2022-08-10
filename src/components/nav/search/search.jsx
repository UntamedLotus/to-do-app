import React from "react";
import "./search.scss";
import { IoCheckmarkSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search">
      <form className="form">
        <input type="text" placeholder="Add tasks" />
        <button>
          <IoCheckmarkSharp className="icon" size={"1.2rem"} />
        </button>
      </form>
    </div>
  );
};

export default Search;
