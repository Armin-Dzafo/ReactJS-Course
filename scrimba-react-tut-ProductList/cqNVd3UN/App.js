import React from "react";
import Product from "./Product";

import productArray from "./productsData";

const App = () => {

    const productComponents = productArray.map(prod => <Product key={prod.id} product={prod} />);

    return (
        <div>
            {productComponents}
        </div>
    );
}

export default App;