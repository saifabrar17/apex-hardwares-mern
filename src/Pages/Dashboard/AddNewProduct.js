import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddNewProduct = () => {

    const [user] = useAuthState(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const addItem = {
            email: user.email,
            name: event.target.name.value,
            minOrder: event.target.minOrder.value,
            description: event.target.description.value,
            price: event.target.price.value,
            available: event.target.available.value,
            img: event.target.img.value

        }
        console.log(addItem);
        axios.post('http://localhost:5000/product', addItem)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {

                    event.target.reset();
                    toast('Product Added Successfully!');
                }
            })
    }

    return (
        <div>
            <h2 className='text-2xl  text-center text-primary'>Add New Product</h2>
            <div>
                <form className='w-96 mx-auto' onSubmit={handleSubmit}>
                    <input className='input mb-1 mt-2 input-bordered w-full' placeholder='Product Name' name='name' />
                    <input className='input mb-1 input-bordered w-full' placeholder='Price' type="number" name='price' />
                    <input className='input mb-1 input-bordered w-full' placeholder='Description' name='description' />
                    <input className='input mb-1 input-bordered w-full' placeholder='Available Stock' name='available' />
                    <input className='input mb-1 input-bordered w-full' placeholder='Minimum Order' type="number" name='minOrder' />
                    <input className='input mb-1 input-bordered w-full' placeholder='Photo Url' type="text" name='img' />
                    <input className='btn mx-auto btn-block text-white btn-primary' type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddNewProduct;