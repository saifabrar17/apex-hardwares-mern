import React from 'react';

const AllProductsData = ({ index, product, setDeleteProduct }) => {

    const { name, img, available,description } = product;

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
                
              
                <td>{available}</td>
                <td><label onClick={() => setDeleteProduct(product)} for="delete-confirm-modal" className="btn btn-sm text-white btn-error">Remove</label></td>

            </tr>



   
    );
};

export default AllProductsData;

