import React from "react";
import ToDoItem from "./ToDoItem/ToDoItem";

function app() {
    
    const appStyle = {
        fontFamily: "sans-serif",
        margin: 0,
        padding: 0
    }
    
    return (
    <div className="App" style={appStyle}>
        <ToDoItem txt="Car" />
        <ToDoItem txt="House" />
        <ToDoItem txt="Yacht" />
        <ToDoItem txt="Wife" />
    </div>
  );
}

export default app;