import React from "react";

const Product = (props) => {
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>Price: {props.product.price}</p>
            <p>{props.product.description}</p>
            <hr/>
        </div>
    );
}

export default Product;