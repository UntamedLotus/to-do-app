import React from "react";
import "./search.scss";
import { IoCheckmarkSharp } from "react-icons/io5";

const Search = ({ onSubmit, taskName, handleTaskChange }) => {
  return (
    <div className="search">
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Add tasks"
          onChange={handleTaskChange}
          name="taskName"
          value={taskName}
          required
        />
        <button>
          <IoCheckmarkSharp className="icon" size={"1.2rem"} />
        </button>
      </form>
    </div>
  );
};

export default Search;
