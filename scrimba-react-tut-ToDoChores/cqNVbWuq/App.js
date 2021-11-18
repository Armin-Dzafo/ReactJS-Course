import React from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import toDoList from "./todoData";

function app() {
    
    const appStyle = {
        fontFamily: "sans-serif",
        margin: 0,
        padding: 0
    }
    
    const toDoItemComponents = toDoList.map(item => <ToDoItem key={item.id} properties={item}/>);
    
    return (
    <div className="App" style={appStyle}>
        {toDoItemComponents}
    </div>
  );
}

export default app;