import React from "react";
import "./mainContent.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const MainContent = ({ tasks, deleteTask, completedtask, todo }) => {
  const taskUI = tasks.map((task) => (
    <div className="tasklist" key={task.id}>
      <p>{task.taskName}</p>
      <span>
        <IoCheckmarkCircleOutline onClick={() => completedtask(task.id)} />
      </span>
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
