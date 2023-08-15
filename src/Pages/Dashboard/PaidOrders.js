import React, { useEffect, useState } from "react";
import PaidOrdersTable from "./PaidOrdersTable";

const PaidOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [paidOrders, setPaidOrders] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/orders/`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
        // Filter paid orders and set them to paidOrders state
        const filteredPaidOrders = data.filter(order => order.paymentStatus === 'paid');
        setPaidOrders(filteredPaidOrders);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  console.log(paidOrders);
  return (
<div>
      <h2 className="text-xl font-bold text-primary py-2">
        Total Paid Orders: {paidOrders.length}
      </h2>
      {paidOrders.length === 0 ? (
        <p className="text-xl font-bold text-center text-warning py-2">
          No Orders Paid
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Order By</th>
                <th>Order Quantity</th>
             
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paidOrders?.map((order, index) => (
                <PaidOrdersTable
                  key={order._id}
                  order={order}
                  index={index}
                ></PaidOrdersTable>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaidOrders;
