import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, img, description, minOrder, available, price } = product;
  const navigate = useNavigate();

  const navigateToProductDetail = () => {
    navigate(`/purchase/${_id}`);
  };

  const truncatedDescription =
    description.length > 200 ? `${description.slice(0, 200)}...` : description;

  return (
    <div>
      <div className="card max-w-96 h-[550px] bg-base-100 shadow-xl">
        <div className="flex justify-center">
          <img src={img} className="h-40 w-40" alt="Shoes" />
        </div>
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
              <p className="btn btn-xs cursor-default">
                Minimum: {minOrder} Pcs
              </p>
            </div>
            <div>
              <p className="btn btn-xs cursor-default">
                Available: {available} Pcs
              </p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={navigateToProductDetail}
              className="btn text-white btn-primary"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
