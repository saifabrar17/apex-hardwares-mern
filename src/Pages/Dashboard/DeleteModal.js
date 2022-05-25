import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deleteProduct, setProducts, products, setDeleteProduct }) => {

    const { _id, name } = deleteProduct;

    const handleDelete = () => {
        // const proceed = window.confirm('Delete?');
        // if (proceed) {
            const url = `http://localhost:5000/product/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast('Deleted');
                    const remaining = products.filter(product => product._id !== _id)
                    setDeleteProduct(null);
                    setProducts(remaining);
                })

        // }
    }

    return (
        <div>

            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Deleting {name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">

                        <button className='btn btn-danger' onClick={() => handleDelete()}>Delete Item</button>
                        <label for="delete-confirm-modal" class="btn">No!</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;