import React, { useState } from "react";
import { useAppContext } from "../AppContext";
import $ from "jquery";

const Wrapper = () => {
  const { getTasks, checkDuplicate, isEditing } = useAppContext();
  const [values, setValues] = useState({
    task: "hello",
  });
  const addTask = () => {
    let isDup = checkDuplicate(values.task);
    if (isDup) {
      alert("task alreay created");
      return;
    }
    fetch("http://localhost:3002/add_task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        getTasks();
      })
      .catch((error) => console.error("Error:", error));
  };
  const changeValue = (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="wrapper">
      <h2 className="mb-3">{`${isEditing ? "edit task" : "create task"}`}</h2>
      <div className="inputWrapper">
        <input
          type="text"
          defaultValue={values.task}
          name="task"
          id="newTask"
          onInput={(e) => changeValue(e)}
        />
        <button
          type="submit"
          className={`button ${isEditing ? "updateTask" : "createTask"}`}
          onClick={()=>{addTask()}}
        >
          {isEditing ? "save" : "create"}
        </button>
      </div>
    </div>
  );
};

export default Wrapper;
