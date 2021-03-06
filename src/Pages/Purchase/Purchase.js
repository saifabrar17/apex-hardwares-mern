import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);

    const [order, setOrder] = useState({});
 
    useEffect(() => {
        fetch(`https://tranquil-woodland-69836.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const something = 0;
    const navigate = useNavigate();


    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email: user.email,
            productId: product._id,
            name: product.name,
            img: product.img,
            price: product.price,
            orderQuantity: event.target.orderQuantity.value,
            location: event.target.location.value,
            phone: event.target.phone.value
        }
        axios.post('https://tranquil-woodland-69836.herokuapp.com/order', order)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!!!');
                event.target.reset();
                navigate(`/dashboard/orders`)
            }
            
        })
    }

    return (
        <div className='purchase-page mx-20 min-h-[80vh]'>
            {/* BREADCRUMB START */}
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link to='/'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                        Home</Link></li>
                    <li>Purchase</li>
                    <li>{product.name}</li>
                </ul>
            </div>
            {/* BREADCRUMB END */}

            {/* PRODUCT INFO CARD */}

            <div className='block gap-5 lg:flex lg:flex-row items-center'>

                <div className='basis-3/5 shadow-md rounded-lg p-3 py-10' >
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-2">
                        <div>
                            <img className='rounded-xl' src={product.img} alt="" />
                        </div>

                        <div>
                            <h2 className="card-title text-primary text-3xl">{product.name}</h2>
                            <p className='py-1 min-h-[100px]'>{product.description}</p>
                            <div className="form-control">
                                <label className="input-group input-group-sm">
                                    <span className='bg-primary text-white'>Available</span>
                                    <input type="text" value={product.available} disabled className="input  input-bordered input-sm w-12" />
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <label className="input-group input-group-sm">
                                    <span className='bg-primary text-white'>Minimum Qty</span>
                                    <input type="text" value={product.minOrder} disabled className="input  input-bordered input-sm w-12" />
                                </label>
                            </div>

                        </div>
                    </div>
                </div>




                <div className="basis-2/5">
                    <div className="block lg:flex  gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" value={user.displayName} disabled className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text email">Email</span>
                            </label>
                            <input type="text" value={user.email} disabled className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text email">Product</span>
                        </label>
                        <input type="text" value={product.name} disabled className="input input-bordered max-width" />
                    </div>
                    <form onSubmit={handlePlaceOrder}>
                        <div className="block lg:flex  gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="number" name="orderQuantity" placeholder={product.minOrder} className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text email">Phone:</span>
                                </label>
                                <input type="text" name='phone' placeholder='Active Number' className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text email">Location:</span>
                            </label>
                            <input type="text" placeholder='Delivery Location' name='location' className="input input-bordered w-full" />
                        </div>
                        <button type='submit' disabled={something} className="btn btn-block btn-primary mt-3 text-white">Place order</button>
                    </form>
                </div>

            </div>
            {/* PRODUCT INFO CARD END*/}
        </div>
    );
};

export default Purchase;
