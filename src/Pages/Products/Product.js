import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, name, img, description, minOrder, available, price } = product;
    const navigate = useNavigate();

    const navigateToProductDetail = id =>{
        navigate(`/purchase/${_id}`);
    }
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
                    <div className="card-actions justify-end">
                        <button onClick={() => navigateToProductDetail(_id)} className='btn text-white btn-primary'>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;