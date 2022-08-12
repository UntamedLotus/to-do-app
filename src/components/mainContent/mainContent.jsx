import React from "react";
import "./mainContent.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";

const MainContent = ({ tasks, deleteTask }) => {
  const taskUI = tasks.map((task) => (
    <div className="tasklist" key={task.id}>
      <p>{task.taskName}</p>
      <span onClick={() => deleteTask(task.id)}>
        <IoCloseCircleOutline />
      </span>
    </div>
  ));

  return (
    <div className="maincontent">
      <div>{taskUI}</div>
    </div>
  );
};

export default MainContent;
