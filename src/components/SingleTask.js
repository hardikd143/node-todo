import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { useAppContext } from "../AppContext";

const SingleTask = ({ data }) => {
  const {deleteTask,enableEditing}=useAppContext()
  const { id, name } = data;
  return (
    <div className="singleTask">
      <p className="taskName">{name}</p>
      <div className="btns">
        <button className="editTask" onClick={()=>enableEditing()}>
          <AiFillEdit />
        </button>
        <button className="deleteTask" onClick={()=> deleteTask(id)}>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};

export default SingleTask;
