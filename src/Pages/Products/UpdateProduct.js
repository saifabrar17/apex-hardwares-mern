import axios from "axios";
import React, { useState } from "react";

const UpdateProduct = ({ product }) => {
  const [updateItem, setUpdateItem] = useState(product);

  const handleUpdate = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:5000/product/${product._id}`, updateItem)
      .then((response) => {
        const { data } = response;
        console.log(data); // Check the server response
        if (data.message === "Product updated successfully") {
          // Product updated successfully
          // Do something after successful update (e.g., show a success message)
        } else {
          // Product not found (optional handling)
          // Handle the case when the server returns 404 (Not Found) status
        }
      })
      .catch((error) => {
        // Handle errors if any
        console.error("Error:", error);
      });
  };
console.log(updateItem);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateItem({ ...updateItem, [name]: value });
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="name"
          value={updateItem.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="minOrder"
          value={updateItem.minOrder}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={updateItem.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={updateItem.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="available"
          value={updateItem.available}
          onChange={handleChange}
        />
        <input
          type="text"
          name="img"
          value={updateItem.img}
          onChange={handleChange}
        />
        {/* Add a hidden input field to send the product ID along with the request */}
        <input type="hidden" name="productId" value={product._id} />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
