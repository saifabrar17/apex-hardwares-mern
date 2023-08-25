import React, { useEffect, useState } from 'react';
import CustomOrdersTable from './CustomOrdersTable';

const AllCustomOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/allCustomOrders`;
        fetch(url, {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setAllOrders(data);
            
          })
          .catch((error) => {
            console.error("Fetch error:", error);
          });
      }, []);
console.log(allOrders);
    return (
      <div>
      <h2 className="text-xl font-bold text-primary py-2">
        Total Custom Orders: {allOrders.length}
      </h2>
      {allOrders.length === 0 ? (
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
                <th>Product</th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Order Quantity</th>
             
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {allOrders?.map((order, index) => (
                <CustomOrdersTable
                  key={order._id}
                  order={order}
                  index={index}
                ></CustomOrdersTable>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    );
};

export default AllCustomOrders;