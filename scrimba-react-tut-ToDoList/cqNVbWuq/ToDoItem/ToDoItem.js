import React from "react";

const toDoItem = (props) => {
    
    const divStyle = {
        boxShadow: "2px 3px",
        backgroundColor: "violet",
        margin: "10px"
    };
    
    const inputStyle = {
        display: "inline-block",
        margin: "10px 0px 10px 10px"
    };
    
    const paragraphStyle = {
        display: "inline-block",
        margin: "10px 0px 10px 10px"
    };
    
  return (
    <div style={divStyle}>
      <input type="checkbox" style={inputStyle} />
      <p style={paragraphStyle}>{props.txt}</p>
    </div>
  );
};

export default toDoItem;