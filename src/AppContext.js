import React, { useState, useContext } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState([]);
  const [isEditing,setIsEditing]= useState(false)
  const setTasks = (data) => {
    setAllTasks(data);
  };
  const getTasks = async () => {
    let resp = await fetch("http://localhost:3002/get_tasks");
    let data = await resp.json();
    setTasks(data.data);
  };
  const deleteTask = (id) => {
    fetch("http://localhost:3002/delete_task", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify({ taskId: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        getTasks();
      })
      .catch((error) => console.error("Error:", error));
  };
  const checkDuplicate = (task) => {
    let isDup = allTasks.find((e) => e.name.toLowerCase() === task);
    if (isDup) {
      return true;
    } else {
      return false;
    }
  };
  const enableEditing = ()=>{
      setIsEditing(true)
  }
  return (
    <AppContext.Provider
      value={{
        allTasks,
        setTasks,
        getTasks,
        deleteTask,
        checkDuplicate,
        isEditing,
        enableEditing
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
