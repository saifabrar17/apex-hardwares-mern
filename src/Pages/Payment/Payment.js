import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BkashPortal from "../Shared/Bkash/BkashPortal";
import Loading from "../Shared/Loading/Loading";

const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [productAvailable, setProductAvailable] = useState(null); 
  const [orderQuantity, setOrderQuantity] = useState(null);
  const updatedAvailabilityValue = productAvailable - orderQuantity;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

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
    
      const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      return () => clearTimeout(loadingTimeout);
    
  }, []);


  const handlePaymentSuccess = (event) => {
    // event.preventDefault();

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
          toast.success("Payment succeeded.");

          // Update product quantity in products collection
          const productUpdateRequestOptions = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ available: updatedAvailabilityValue }), 
          };
          setIsLoading(true);

          setTimeout(() => {
            fetch(`http://localhost:5000/product/${productId}`, productUpdateRequestOptions)
              .then((productResponse) => productResponse.json())
              .then((productData) => {
                if (productData.message === "Product updated successfully") {
                  navigate(`/dashboard/orders`);
                } else {
                  toast.error("Failed to update product availability");
                }
              })
              .catch((error) => {
                console.error("Error updating product availability:", error);
              });
          }, 2000);
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
      {isLoading ? (
        <Loading /> // Show the loader
      ) : order ? (
        <div>
          <BkashPortal
            order={order}
            handlePaymentSuccess={handlePaymentSuccess}
          ></BkashPortal>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Payment;
