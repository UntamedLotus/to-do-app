import React from "react";
import MainContent from "./mainContent/mainContent";
import Nav from "./mainContent/nav/nav";
import { nanoid } from "nanoid";

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
      <MainContent
        handleTaskChange={handleTaskChange}
        deleteTask={deleteTask}
        tasks={tasks}
      />
    </div>
  );
};

export default ToDoList;

//
