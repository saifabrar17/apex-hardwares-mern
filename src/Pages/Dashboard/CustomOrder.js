import React, { useState, useEffect } from 'react';

const CustomOrder = () => {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);

    useEffect(() => {
        // Fetch product data from your server
        fetch('http://localhost:5000/product/')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []); // Empty dependency array to ensure the effect runs only once

    const handleProductClick = (productId) => {
        setSelectedProductId(productId);
    };
console.log(selectedProductId);
    return (
        <div className="dropdown dropdown-bottom">
            <label tabIndex="0" className="btn m-1">Click</label>
            <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {products.map(product => (
                    <li key={product._id}>
                        <a onClick={() => handleProductClick(product._id)}>{product.name}</a>
                    </li>
                ))}
            </ul>
            {selectedProductId && <p>Selected Product ID: {selectedProductId}</p>}
        </div>
    );
};

export default CustomOrder;
