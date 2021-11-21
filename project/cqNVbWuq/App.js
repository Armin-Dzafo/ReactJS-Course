import React, {Component} from "react";
import ToDoItem from "./ToDoItem/ToDoItem";
import toDoList from "./todoData";

class App extends Component {
    constructor() {
        super();
        this.state = {
            toDoData: toDoList
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    
    onChangeHandler(itemID) {
        
        console.log("clicked ", itemID);
        
        this.setState(prevState => {
            const updatedToDoData = prevState.toDoData.map(todoElem => {
                if(todoElem.id === itemID) {
                    todoElem.completed = !todoElem.completed;
                }
                return todoElem;
            });
            return (
                {
                    toDoData: updatedToDoData
                }
            );
        });
    }
    
    render() {
            
        const appStyle = {
            fontFamily: "sans-serif",
            margin: 0,
            padding: 0
        }
        
        const toDoItemComponents = this.state.toDoData.map(item =>
            <ToDoItem
                key={item.id}
                allItemProperties={item}
                onChangeHandler={this.onChangeHandler}
            />);
            
        return (
            <div className="App" style={appStyle}>
                {toDoItemComponents}
            </div>
        );
    }
}

export default App;