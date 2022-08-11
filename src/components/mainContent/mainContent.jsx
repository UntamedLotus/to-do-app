import React from "react";
import "./mainContent.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";

const MainContent = ({ tasks, deleteTask, handleImportant, important }) => {
  const taskUI = tasks.map((task) => (
    <div className="tasklist" key={task.id}>
      <p>{task.taskName}</p>
      <span onClick={() => deleteTask(task.id)}>
        <IoCloseCircleOutline />
      </span>
      <span onClick={() => handleImportant(task.id)}>
        {important === true ? <IoBookmark /> : <IoBookmarkOutline />}
      </span>
    </div>
  ));

  return <div className="maincontent">{taskUI}</div>;
};

export default MainContent;
