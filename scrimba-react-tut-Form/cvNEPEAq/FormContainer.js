import React from "react";
import FormComponent from "./FormComponent";

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            vegetarian: false,
            vegan: false,
            paleo: false,
            glutenFree: false,
            lactoseFree: false,
            kosher: false,
            halal: false
        };
        this.changeHandler = this.changeHandler.bind(this);
    }
    
    changeHandler(event) {        
        // set state to new values
        const {name, value, type, checked} = event.target;
        if(type === "checkbox") {
            this.setState({
                [name]: checked
            });
        }
        else {
            this.setState({
                [name]: value
            });
        }
    }
    
    render() {
        return (
            <FormComponent data={this.state} changeHandler={this.changeHandler}/>
        );
    }
}

export default FormContainer;