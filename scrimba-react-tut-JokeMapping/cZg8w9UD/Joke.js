import React from "react";

const joke = (props) => {
    return (
        <div>
            <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>
            <h3 style={{color: props.question ? "black" : "grey"}}>Punchline: {props.answer}</h3>
            <hr/>
        </div>
    );
}

export default joke;