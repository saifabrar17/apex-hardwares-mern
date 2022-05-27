import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deleteProduct, setProducts, products, setDeleteProduct }) => {

    const { _id, name } = deleteProduct;

    const handleDelete = () => {

            const url = `http://localhost:5000/product/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.warning('Product deleted successfully!');
                    const remaining = products.filter(product => product._id !== _id)
                    setDeleteProduct(null);
                    setProducts(remaining);
                })

    }

    return (
        <div>

            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-error text-lg">Are you sure want to remove {name}?</h3>
                    <p class="py-4">You can't undo this action!</p>
                    <div class="modal-action">

                        <button className='btn btn-error text-white ' onClick={() => handleDelete()}>Remove</button>
                        <label for="delete-confirm-modal" class="btn-primary text-white btn">No!</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;