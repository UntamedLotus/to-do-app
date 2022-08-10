import React from "react";
import "./search.scss";
import { IoCheckmarkSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search">
      <form>
        <input type="text" placeholder="Add tasks" />
        <button>
          <IoCheckmarkSharp />
        </button>
      </form>
    </div>
  );
};

export default Search;
