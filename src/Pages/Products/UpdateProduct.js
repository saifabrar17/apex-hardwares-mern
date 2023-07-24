import axios from "axios";
import React, { useState } from "react";

const UpdateProduct = ({ product }) => {
  const [updateItem, setUpdateItem] = useState(product);

  const handleUpdate = (event) => {
    event.preventDefault();
  
    // Remove the _id property from the updateItem object
    const { _id, ...updatedItem } = updateItem;
  
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem),
    };
  
    fetch(`http://localhost:5000/product/${product._id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
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
      <form onSubmit={handleUpdate} class="max-w-md mx-auto">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={updateItem.name}
            onChange={handleChange}
            class="w-full border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div class="mb-4">
          <label for="minOrder" class="block text-gray-700 font-bold mb-2">
            Min Order:
          </label>
          <input
            type="number"
            name="minOrder"
            id="minOrder"
            value={updateItem.minOrder}
            onChange={handleChange}
            class="w-full border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div class="mb-4">
          <label for="description" class="block text-gray-700 font-bold mb-2">
            Description:
          </label>
          <input
            type="text"
            name="description"
            id="description"
            value={updateItem.description}
            onChange={handleChange}
            class="w-full border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div class="mb-4">
          <label for="price" class="block text-gray-700 font-bold mb-2">
            Price:
          </label>
          <input
            type="number"
            name="price"
            id="price"
            value={updateItem.price}
            onChange={handleChange}
            class="w-full border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div class="mb-4">
          <label for="available" class="block text-gray-700 font-bold mb-2">
            Available:
          </label>
          <input
            type="text"
            name="available"
            id="available"
            value={updateItem.available}
            onChange={handleChange}
            class="w-full border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div class="mb-4">
          <label for="img" class="block text-gray-700 font-bold mb-2">
            Image:
          </label>
          <input
            type="text"
            name="img"
            id="img"
            value={updateItem.img}
            onChange={handleChange}
            class="w-full border border-gray-400 rounded py-2 px-3 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Add a hidden input field to send the product ID along with the request */}
        {/* <input type="hidden" name="productId" value={product._id} /> */}

        <button
          type="submit"
          class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
