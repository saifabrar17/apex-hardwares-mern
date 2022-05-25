import React from 'react';

const AllProductsData = ({product, setDeleteProduct}) => {

    const {name, img, description} = product;

    return (
        <div>
            <div className='product-list'>
                <div className="d-flex product-list-each justify-content-between">
                    <div className='d-flex'>
                        <img src={product.img} alt="" />
                        <p className='d-flex ms-2 align-items-center'>{name}</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <label onClick={() => setDeleteProduct(product)} for="delete-confirm-modal" class="btn modal-button">open modal</label>
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductsData;