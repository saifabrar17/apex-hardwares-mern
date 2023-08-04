import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
    
//   const handlePaymentSuccess = () => {
//     // Create the updated order object with the new status
//     const updatedOrder = { ...order, paymentStatus: "paid" };
  
//     // Make API request to update order status to "paid"
//     const updateUrl = `http://localhost:5000/orders/${id}`;
  
//     axios
//       .put(updateUrl, updatedOrder, {
//         headers: {
//           authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//         },
//       })
//       .then((response) => {
//         console.log(response.data); // Check the server response
//         if (response.data.message === 'Order updated successfully') {
//           // Order updated successfully
//           toast.success('Order updated successfully');
//           // You may want to re-fetch the order data to show the updated status
//           // Fetch the order data again using the useEffect hook or manually call the fetch function
//         } else {
//           // Order not found (optional handling)
//           // Handle the case when the server returns 404 (Not Found) status
//           toast.error('Failed to update order');
//         }
//       })
//       .catch((error) => {
//         // Handle errors if any
//         console.error('Error:', error);
//       });
//   };

  const handlePaymentSuccess = (event) => {
    event.preventDefault();
    const { _id, ...orderWithoutId } = order;
  const updatedOrder = { ...orderWithoutId, paymentStatus: 'paid' };
  
    const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(updatedOrder),
      };
  
    fetch(`http://localhost:5000/orders/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data); // Check the server response
console.log(data.message);
          
        if (data.message === 'Order updated successfully') {
          // Product updated successfully
          toast.success('Product updated successfully');
          // Do something after successful update (e.g., show a success message)
        
        } else {
          // Product not found (optional handling)
          // Handle the case when the server returns 404 (Not Found) status
          toast.error('Failed to update product');
        }
      })
      .catch((error) => {
        // Handle errors if any
        console.error("Error:", error);
      });
  };

  return (
    <div>
    {order ? (
      <div>
        <p>Pay for Order ID: {id}</p>
        <button className='btn btn-success' onClick={handlePaymentSuccess}>Complete Payment</button>
        {/* Display other order details here */}
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
};

export default Payment;