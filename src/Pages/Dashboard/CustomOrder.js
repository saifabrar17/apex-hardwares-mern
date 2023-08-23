import React, { useState, useEffect } from 'react';

const CustomOrder = () => {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [orderDetails, setOrderDetails] = useState({
        productId: "",
        name: "",
        quantity: "",
        email: "",
        userName: "",
        phone: "",
        location: ""
    });

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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setOrderDetails(prevOrderDetails => ({
            ...prevOrderDetails,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send the orderDetails to the server
        fetch('http://localhost:5000/customOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Order submitted:', data);
            // Reset the form
            setOrderDetails({
                productId: "",
                name: "",
                quantity: "",
                email: "",
                userName: "",
                phone: "",
                location: ""
            });
        })
        .catch(error => console.error('Error submitting order:', error));
    };
    const handleButtonClick = (event) => {
        // Prevent propagation to avoid unwanted click event
        event.stopPropagation();
    };
    return (
        <div className="dropdown dropdown-bottom">
            <label tabIndex="0" className="btn m-1" onClick={handleButtonClick}>Click</label>
            <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {products.map(product => (
                    <li key={product._id}>
                        <a onClick={() => handleProductClick(product._id)}>{product.name}</a>
                    </li>
                ))}
            </ul>
            {selectedProductId && (
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="hidden"
                            name="productId"
                            value={selectedProductId}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={orderDetails.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="quantity"
                            placeholder="Quantity"
                            value={orderDetails.quantity}
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={orderDetails.email}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="userName"
                            placeholder="User Name"
                            value={orderDetails.userName}
                            onChange={handleInputChange}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={orderDetails.phone}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={orderDetails.location}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Submit Order</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CustomOrder;
