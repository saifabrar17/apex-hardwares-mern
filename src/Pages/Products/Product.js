import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useEmployee from "../../Hooks/useEmployee";
import auth from "../../firebase.init";

const Product = ({ product }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [employee] = useEmployee(user);
  const { _id, name, img, description, minOrder, available, price } = product;
  const navigate = useNavigate();

  const navigateToProductDetail = (id) => {
    navigate(`/purchase/${_id}`);
  };

  // Conditionally render the Purchase button
  const renderPurchaseButton = () => {
    if (admin || employee) {
      return null;
    } else {
      return (
        <div className="card-actions justify-end">
          <button
            onClick={() => navigateToProductDetail(_id)}
            className="btn text-white btn-primary"
          >
            Purchase
          </button>
        </div>
      );
    }
  };
  const truncatedDescription =
    description.length > 200 ? `${description.slice(0, 200)}...` : description;
  // console.log(product);
  return (
    <div>
     
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{truncatedDescription}</p>
        <p>
          Price Per Unit:{" "}
          <span className="btn btn-xs cursor-default bg-green-500 border-0 text-black">
            {price} Taka
          </span>
        </p>
        <div className="card-actions justify-between">
          <div>
            <p className="btn btn-xs cursor-default">Minimum: {minOrder} Pcs</p>
          </div>
          <div>
            <p className="btn btn-xs cursor-default">
              Available: {available} Pcs
            </p>
          </div>
        </div>
        <div className="card-actions justify-end">{renderPurchaseButton()}</div>
      </div>
    </div>
  );
};

export default Product;
