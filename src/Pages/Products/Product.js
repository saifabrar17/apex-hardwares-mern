import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import useEmployee from '../../Hooks/useEmployee';
import auth from "../../firebase.init";

const Product = ({ product }) => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [employee] = useEmployee(user);
    const { _id, name, img, description, minOrder, available, price } = product;
    const navigate = useNavigate();

    const navigateToProductDetail = id =>{
        navigate(`/purchase/${_id}`);
    }

      // Conditionally render the Purchase button
      const renderPurchaseButton = () => {
        if (admin || employee) {
             return null;
        } else {
            return (
                <div className="card-actions justify-end">
                    <button onClick={() => navigateToProductDetail(_id)} className='btn text-white btn-primary'>Purchase</button>
                </div>
            );
        }
    };
    // console.log(product);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price Per Unit: {price}</p>
                    <div className="card-actions justify-between">
                        <div><p>Minimum: {minOrder}</p></div>
                        <div><p>Available: {available}</p></div>
                    </div>
                    {/* <div className="card-actions justify-end">
                        <button onClick={() => navigateToProductDetail(_id)} className='btn text-white btn-primary'>Purchase</button>
                    </div> */}
                    {renderPurchaseButton()}
                </div>
            </div>
        </div>
    );
};

export default Product;