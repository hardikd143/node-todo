import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const SingleTask = ({ data }) => {
  const { id, name } = data;
  console.log(data);
  return (
    <div className="singleTask">
      <p className="taskName">{name}</p>
      <div className="btns">
        <button className="editTask">
          <AiFillEdit />
        </button>
        <button className="deleteTask">
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};

export default SingleTask;
