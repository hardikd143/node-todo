import React, { useState } from "react";
const Wrapper = () => {
  const [values, setValues] = useState({
    task: "hello",
  });
  const addTask = () => {
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
        console.log(data);
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
      <div className="inputWrapper">
        <input
          type="text"
          defaultValue={values.task}
          name="task"
          id="newTask"
          onInput={(e) => changeValue(e)}
        />
        <button type="submit" className="button" onClick={() => addTask()}>
          create
        </button>
      </div>
    </div>
  );
};

export default Wrapper;
