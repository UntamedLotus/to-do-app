import React from "react";
import "./mainContent.scss";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const MainContent = ({ tasks, deleteTask, completedtask }) => {
  const taskUI = tasks.map((task) => (
    <div>
      <div className="tasklist" key={task.id}>
        <p>{task.taskName}</p>
        <div className="icon">
          <span className="btn-close">
            <IoCheckmarkCircleOutline onClick={() => completedtask(task.id)} />
          </span>
          <span className="btn-complete" onClick={() => deleteTask(task.id)}>
            <IoCloseCircleOutline />
          </span>
        </div>
      </div>
      <div className="break"></div>
    </div>
  ));

  return (
    tasks.length > 0 && (
      <div className="maincontent">
        <div>{taskUI}</div>
      </div>
    )
  );
};

export default MainContent;
