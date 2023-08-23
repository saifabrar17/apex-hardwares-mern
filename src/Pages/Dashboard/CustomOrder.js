import React, { useState, useEffect } from "react";

const CustomOrder = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderDetails, setOrderDetails] = useState({
    productId: "",
    name: "",
    quantity: "",
    email: "",
    userName: "",
    phone: "",
    location: "",
  });

  useEffect(() => {
    // Fetch product data from your server
    fetch("http://localhost:5000/product/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []); // Empty dependency array to ensure the effect runs only once

  const handleProductSelect = (event) => {
    const selectedProductId = event.target.value;
    const selectedProductData = products.find(
      (product) => product._id === selectedProductId
    );
    setSelectedProduct(selectedProductData);
    setOrderDetails((prevOrderDetails) => ({
      ...prevOrderDetails,
      productId: selectedProductId,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderDetails((prevOrderDetails) => ({
      ...prevOrderDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the orderDetails to the server
    fetch("http://localhost:5000/customOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Order submitted:", data);
        // Reset the form
        setSelectedProduct(null);
        setOrderDetails({
          productId: "",
          name: "",
          quantity: "",
          email: "",
          userName: "",
          phone: "",
          location: "",
        });
      })
      .catch((error) => console.error("Error submitting order:", error));
  };
  console.log(selectedProduct);
  return (
    <div>
      <select
        className="select select-info w-full "
        onChange={handleProductSelect}
        value={selectedProduct ? selectedProduct._id : ""}
      >
        <option disabled value="">
          Select product
        </option>
        {products.map((product) => (
          <option key={product._id} value={product._id}>
            {product.name}
          </option>
        ))}
      </select>
      {selectedProduct && (
        <div className="pt-10">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
            <input
              type="text"
              name="productId"
              value={selectedProduct._id}
              onChange={handleInputChange}
              className="input input-bordered input-md w-full  "
            />
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text email">Product Name:</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={selectedProduct.name}
                onChange={handleInputChange}
                className="input input-bordered input-md w-full  "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text email">Quantity:</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={orderDetails.quantity}
                onChange={handleInputChange}
                className="input input-bordered input-md w-full  "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text email">Location:</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={orderDetails.email}
                onChange={handleInputChange}
                className="input input-bordered input-md w-full  "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text email">Location:</span>
              </label>
              <input
                type="text"
                name="userName"
                placeholder="Name"
                value={orderDetails.userName}
                onChange={handleInputChange}
                className="input input-bordered input-md w-full  "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text email">Location:</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={orderDetails.phone}
                onChange={handleInputChange}
                className="input input-bordered input-md w-full  "
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text email">Location:</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={orderDetails.location}
                onChange={handleInputChange}
                className="input input-bordered input-md w-full  "
              />
            </div>
            <button
              type="submit"
              className="btn btn-block btn-primary text-white"
            >
              Submit Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CustomOrder;
