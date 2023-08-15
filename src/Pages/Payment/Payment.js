import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [productAvailable, setProductAvailable] = useState(null); 
  const [orderQuantity, setOrderQuantity] = useState(null);
  const updatedAvailabilityValue = productAvailable - orderQuantity;


  useEffect(() => {
    // Fetch order details
    const orderUrl = `http://localhost:5000/orders/${id}`;
    fetch(orderUrl, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
        const { orderQuantity, productId } = data; // Extract orderQuantity
        // Fetch product details including availability using the productId from order
        const productUrl = `http://localhost:5000/product/${productId}`;
        fetch(productUrl)
          .then((res) => res.json())
          .then((productData) => {
            setProductAvailable(productData.available);
            setOrderQuantity(orderQuantity); // Store orderQuantity in state
          })
          .catch((error) => {
            console.error("Error fetching product details:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching order details:", error);
      });
  }, []);


  const handlePaymentSuccess = (event) => {
    event.preventDefault();

    const { _id, productId, quantity, ...orderWithoutId } = order;
    const updatedOrder = { ...orderWithoutId, paymentStatus: "paid" };

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updatedOrder),
    };

    // Update order payment status
    fetch(`http://localhost:5000/orders/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Order updated successfully") {
          // Order updated successfully
          toast.success("Order updated successfully");

          // Update product quantity in products collection
          const productUpdateRequestOptions = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ available: updatedAvailabilityValue }), 
          };

          fetch(
            `http://localhost:5000/product/${productId}`,
            productUpdateRequestOptions
          )
            .then((productResponse) => productResponse.json())
            .then((productData) => {
              if (productData.message === "Product updated successfully") {
                // Product availability updated successfully
                toast.success("Product availability updated successfully");
              } else {
                toast.error("Failed to update product availability");
              }
            })
            .catch((error) => {
              console.error("Error updating product availability:", error);
            });
        } else {
          toast.error("Failed to update order");
        }
      })
      .catch((error) => {
        console.error("Error updating order:", error);
      });
  };

  return (
    <div>
      {order ? (
        <div>
          <p>Pay for Order ID: {id}</p>
          <button className="btn btn-success" onClick={handlePaymentSuccess}>
            Complete Payment
          </button>
          {/* Display other order details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Payment;
