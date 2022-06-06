import React, { useEffect, useState } from "react";
import SingleTask from "./SingleTask";

const Tasks = () => {
  // const [allTasks, setAllTasks] = useState([]);
  const getTasks = async () => {
    // let resp = await fetch("http://localhost:3002/get_tasks");
    // let data = await resp.json();
    // // return data;
    // setAllTasks(data.data);
  };
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className="tasks">
      <h2 className="title">Tasks</h2>
      <div className="tasksWrapper">
        {/* {allTasks.map((item, index) => {
          return <SingleTask data={item} key={index} />;
        })} */}
      </div>
    </div>
  );
};

export default Tasks;
