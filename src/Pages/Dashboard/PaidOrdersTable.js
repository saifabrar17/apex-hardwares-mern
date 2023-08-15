import React from "react";
import { Link } from "react-router-dom";

const PaidOrdersTable = ({ order, index }) => {
  const { img, price, name, orderQuantity, email } = order;

  const totalPrice = price * orderQuantity;
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

      <td>{name}</td>
      <td>{email}</td>
     
      <td>{orderQuantity}</td>
    

      <td>
        <button className="btn btn-success" disabled>
          Paid
        </button>
      </td>
    </tr>
  );
};

export default PaidOrdersTable;
