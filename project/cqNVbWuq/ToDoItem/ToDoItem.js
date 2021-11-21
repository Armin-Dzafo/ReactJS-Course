import React from "react";

const toDoItem = (props) => {
    
    const divStyle = {
        boxShadow: "2px 3px",
        backgroundColor: "darkorange",
        margin: "10px"
    };
    
    const divStyleChecked = {
        boxShadow: "2px 3px",
        backgroundColor: "limegreen",
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
    <div style={props.allItemProperties.completed ? divStyleChecked : divStyle}>
        <input
            type="checkbox"
            style={inputStyle}
            checked={props.allItemProperties.completed}
            onChange={() => props.onChangeHandler(props.allItemProperties.id)}
        />
        <p style={paragraphStyle}>{props.allItemProperties.text}</p>
    </div>
    );
};

export default toDoItem;