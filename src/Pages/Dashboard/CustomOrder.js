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
    total: "",
    location: "",
  });

  useEffect(() => {

    fetch("http://localhost:5000/product/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

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
  

    if (name === "quantity") {
      const parsedValue = parseInt(value);
      const calculatedTotalPrice = selectedProduct?.price * parsedValue;
      setOrderDetails((prevOrderDetails) => ({
        ...prevOrderDetails,
        [name]: parsedValue,
        total: calculatedTotalPrice.toString(), 
      }));
    } else {
      setOrderDetails((prevOrderDetails) => ({
        ...prevOrderDetails,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
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
        
        setSelectedProduct(null);
        setOrderDetails({
          productId: "",
          name: "",
          quantity: "",
          email: "",
          userName: "",
            phone: "",
          total: "",
          location: "",
        });
      })
      .catch((error) => console.error("Error submitting order:", error));
  };

  const validateQuantity = (value) => {
    if (selectedProduct) {
      const availableQuantity = selectedProduct.available;
      return value >= 1 && value <= availableQuantity;
    }
    return true;
  };

    const isSubmitDisabled = !validateQuantity(orderDetails.quantity);
    const totalPrice = selectedProduct?.price * orderDetails.quantity;
  console.log(totalPrice);
  return (
    <div className="p-10">
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
          <div>
            <img
              className="rounded-xl object-cover w-48"
              src={selectedProduct.img}
              alt=""
            />
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
            <input
              type="hidden"
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
                placeholder={`Available ${selectedProduct.available} units`}
                value={orderDetails.quantity}
                onChange={handleInputChange}
                className={`input input-bordered input-md w-full ${
                  !validateQuantity(orderDetails.quantity) ? "input-error" : ""
                }`}
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text email">Total Price:</span>
              </label>
              <input
                type="text"
                name="total"
                placeholder={totalPrice}
                value={orderDetails.totalPrice}
                onChange={handleInputChange}
                className="input input-bordered input-md w-full  "
                // required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text email">Buyer's Email:</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={orderDetails.email}
                onChange={handleInputChange}
                className="input input-bordered input-md w-full  "
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text email">Buyer's Name:</span>
              </label>
              <input
                type="text"
                name="userName"
                placeholder="Name"
                value={orderDetails.userName}
                onChange={handleInputChange}
                className="input input-bordered input-md w-full  "
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text email">Buyer's Phone:</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={orderDetails.phone}
                onChange={handleInputChange}
                className="input input-bordered input-md w-full  "
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text email">Buyer's Location:</span>
              </label>
              <textarea
                type="text"
                name="location"
                placeholder="Location"
                value={orderDetails.location}
                onChange={handleInputChange}
                className="input input-bordered input-md w-full  "
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-block btn-primary text-white"
              disabled={isSubmitDisabled}
            >
              Create Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CustomOrder;
