import React from "react";
import { Link } from "react-router-dom";

const CustomOrdersTable = ({ order, index }) => {
  const { img, userName, quantity, email, location, productName } = order;

  // Check if productName exists before trimming
  const trimmedProductName = productName ? (
    productName.length > 20 ? `${productName.slice(0, 20)}...` : productName
  ) : "";

  console.log(order);
  return (
    <tr>
      <th>{index + 1}</th>

      <td>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={img} alt="" />
          </div>
        </div>
      </td>
      <td> {trimmedProductName}</td> {/* Display the trimmed productName */}
      <td>{userName}</td>
      <td>{email}</td>

      <td>{quantity}</td>
      <td>{location}</td>
    </tr>
  );
};

export default CustomOrdersTable;
