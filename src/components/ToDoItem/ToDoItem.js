import React from "react";
import componentStyle from "./ToDoItem.css";

const toDoItem = (props) => {
  return (
    <div style={componentStyle}>
      <input type="checkbox" />
      <p>{props.txt}</p>
    </div>
  );
};

export default toDoItem;
