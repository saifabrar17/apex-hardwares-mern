import React, { useEffect, useState } from "react";

const PaidOrders = () => {
  const [paidOrders, setPaidOrders] = useState([]);

  // useEffect(() => {
  //   fetchPaidOrders();
  // }, []);

  // const fetchPaidOrders = async () => {
  //   try {
  //     const token = localStorage.getItem("accessToken");

  //     if (!token) {
  //       throw new Error("Unauthorized: Access token not found");
  //     }

  //     const response = await fetch("http://localhost:5000/orders/paid", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     setPaidOrders(data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  useEffect(() => {
    const url = `http://localhost:5000/orders/paid`;
    fetch(url, {
      method: "GET",
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => setPaidOrders(data))
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);


  console.log(paidOrders);
  return (
    <div>
      <h1>Paid Orders</h1>
      <ul>
        {paidOrders.map((order) => (
          <li key={order._id}>
            {/* Display order details as needed */}
            <p>Order ID: {order._id}</p>
            <p>Payment Status: {order.paymentStatus}</p>
            {/* Add more order details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaidOrders;
