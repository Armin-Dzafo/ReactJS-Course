import React from "react";

function FormComponent(props) {
    return (
    
        <main>
            <form>
                <input 
                    name="firstName"
                    placeholder="First Name"
                    value={props.data.firstName} 
                    onChange={props.changeHandler}
                />
                <input 
                    name="lastName"
                    placeholder="Last Name"                        
                    value={props.data.lastName} 
                    onChange={props.changeHandler}
                />
                <input 
                    name="age"
                    placeholder="Your age"                        
                    value={props.data.age} 
                    onChange={props.changeHandler}
                />
                <br/>
                <label>
                    <input 
                        type="radio" 
                        name="gender"                     
                        value="Male" 
                        onChange={props.changeHandler}
                    />
                    Male
                </label>
                <br/>
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="Female"
                        onChange={props.changeHandler}
                    />
                    Female
                </label>
                <br/>
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="Other"
                        onChange={props.changeHandler}
                    />
                    Other
                </label>
                <br/>
                <select 
                    name="destination"
                    onChange={props.changeHandler}
                >
                    <option>-- Please choose --</option>
                    <option>San Francisco</option>
                    <option>Paris</option>
                    <option>Tokyo</option>
                    <option>London</option>
                    <option>Rome</option>
                </select>
                <br/>
                <label>
                    <input 
                        type="checkbox" 
                        name="vegetarian"
                        checked={props.data.vegetarian}
                        onChange={props.changeHandler}
                    />
                    Vegetarian
                </label>
                <br/>
                <label>
                    <input 
                        type="checkbox" 
                        name="vegan"
                        checked={props.data.vegan}
                        onChange={props.changeHandler}
                    />
                    Vegan
                </label>
                <br/>
                <label>
                    <input 
                        type="checkbox" 
                        name="paleo"
                        checked={props.data.paleo}
                        onChange={props.changeHandler}
                    />
                    Paleo
                </label>
                <br/>
                <label>
                    <input 
                        type="checkbox" 
                        name="glutenFree"
                        checked={props.data.glutenFree}
                        onChange={props.changeHandler}
                    />
                    Gluten Free
                </label>
                <br/>
                <label>
                    <input 
                        type="checkbox" 
                        name="lactoseFree"
                        checked={props.data.lactoseFree}
                        onChange={props.changeHandler}
                    />
                    Lactose Free
                </label>
                <br/>
                <label>
                    <input 
                        type="checkbox" 
                        name="kosher"
                        checked={props.data.kosher}
                        onChange={props.changeHandler}
                    />
                    Kosher
                </label>
                <br/>
                <label>
                    <input 
                        type="checkbox" 
                        name="halal"
                        checked={props.data.halal}
                        onChange={props.changeHandler}
                    />
                    Halal
                </label>
                <br/>
                <button>Submit</button>
            </form>
            
            <hr/>
            
            <h3>Summary:</h3>    
            <p>Full name: {props.data.firstName} {props.data.lastName}</p>
            <p>Age: {props.data.age}</p>
            <p>Gender: {props.data.gender}</p>
            <p>Destination: {props.data.destination}</p>
            <p>Dietary restrictions:</p>
            <p>Vegetarian -> {props.data.vegetarian ? "Yes" : "No"}</p>
            <p>Vegan -> {props.data.vegan ? "Yes" : "No"}</p>
            <p>Paleo -> {props.data.paleo ? "Yes" : "No"}</p>
            <p>Gluten Free -> {props.data.glutenFree ? "Yes" : "No"}</p>
            <p>Lactose Free -> {props.data.lactoseFree ? "Yes" : "No"}</p>
            <p>Kosher -> {props.data.kosher ? "Yes" : "No"}</p>
            <p>Halal -> {props.data.halal ? "Yes" : "No"}</p>
        </main>
    );
}

export default FormComponent;