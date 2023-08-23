import React, { useEffect, useState } from 'react';

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
            <p>d</p>
        </div>
    );
};

export default AllCustomOrders;