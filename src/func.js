import {setTasksss} from './components/Tasks'
const getTasks = async () => {
  let resp = await fetch("http://localhost:3002/get_tasks");
  let data = await resp.json();
  // return data;
  setTasksss(data.data);
  
};
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

export { addTask, getTasks };
