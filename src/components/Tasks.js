import React, { useEffect, useState } from "react";
import SingleTask from "./SingleTask";
import { useAppContext } from ".././AppContext";

const Tasks = () => {
  const { allTasks, setTasks,getTasks } = useAppContext();
  
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className="tasks">
      <h2 className="title">Tasks</h2>
      <div className="tasksWrapper">
        {allTasks.map((item, index) => {
          return <SingleTask data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Tasks;
