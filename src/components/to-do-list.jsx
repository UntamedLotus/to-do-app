import React from "react";
import MainContent from "./mainContent/mainContent";
import Nav from "./mainContent/nav/nav";

import Confetti from "react-confetti";
import { nanoid } from "nanoid";
import { IoCloseCircleOutline } from "react-icons/io5";

import "./to-do-list.scss";
// Fetching Data
const collectedInfo = () => {
  const info = localStorage.getItem("tasks");
  if (info) {
    return JSON.parse(info);
  } else {
    return [];
  }
};

const ToDoList = () => {
  const [taskName, setTaskName] = React.useState("");
  const [id, setId] = React.useState("");
  const [tasks, setTasks] = React.useState(collectedInfo());
  const [status, setStatus] = React.useState(false);

  const closeScreen = function () {
    setStatus(false);
  };

  const card = () => {
    return (
      <div className="card">
        {status && <Confetti width={670} height={500} />}
        <h2>task completed</h2>
        <span className="closebtn" onClick={closeScreen}>
          <IoCloseCircleOutline />
        </span>
      </div>
    );
  };

  // Saving Data
  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskChange = function (e) {
    setTaskName(e.target.value);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((element, index) => {
      return element.id !== id;
    });
    setTasks(filteredTasks);
  };

  const completedtask = (id) => {
    const filteredTasks = tasks.filter((element, index) => {
      return element.id !== id;
    });
    setTasks(filteredTasks);
    setStatus(true);
  };

  const onSubmit = function (e) {
    e.preventDefault();

    let task = {
      taskName,
      id: nanoid(),
    };

    setTasks([...tasks, task]);

    setTaskName("");
    setId("");
  };

  return (
    <div className="todolist">
      <Nav
        handleTaskChange={handleTaskChange}
        onSubmit={onSubmit}
        taskName={taskName}
      />
      {status === true ? (
        card()
      ) : (
        <MainContent
          handleTaskChange={handleTaskChange}
          deleteTask={deleteTask}
          completedtask={completedtask}
          tasks={tasks}
        />
      )}
    </div>
  );
};

export default ToDoList;
