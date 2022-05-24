import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Purchase = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    return (
        <div className='purchase-page mx-20 min-h-[80vh]'>
            {/* BREADCRUMB START */}
            <div class="text-sm breadcrumbs">
                <ul>
                    <li><Link to='/'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                        Home</Link></li>
                    <li>Purchase</li>
                    <li>{product.name}</li>
                </ul>
            </div>
            {/* BREADCRUMB END */}

            {/* PRODUCT INFO CARD */}

            <div class="card card-compact min-h-[70vh] py-10 lg:card-side bg-base-100 shadow-xl">
                <figure><img src={product.img} alt="Album" /></figure>
                <div class="card-body px-10">
                    <h2 class="card-title text-3xl">{product.name}</h2>
                    <div className="divider m-0"></div>
                    <div className='flex'>
                        <h2 class="card-title text-xl">Price:</h2>
                        <h2 class="card-title pl-2 text-primary text-xl">${product.price}</h2>
                        <h2 className='items-end'>/unit</h2>
                    </div>
                    <div className="divider m-0"></div>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <h2 class="card-title ">Minimum Order: </h2>
                            <h2 class="card-title px-2 text-primary">{product.minOrder}</h2>
                            <h2 class="card-title">units</h2>
                        </div>
                        <div className='flex'>
                            <h2 class="card-title ">Available: </h2>
                            <h2 class="card-title px-2 text-primary">{product.available}</h2>
                            <h2 class="card-title ">units</h2>
                        </div>
                    </div>
                    <div className="divider m-0"></div>
                    <p className='min-h-[80px]'>{product.description}</p>

                    <div class="form-control">
                        <div class="input-group">
                            <span>Quantity</span>
                            <input type="number" placeholder={product.minOrder} class="input input-bordered" />
                            <button class="btn btn-primary text-white">
                                Purchase
                            </button>
                        </div>
                        {/* ERROR MESSAGE HERE */}
                    </div>
                </div>
            </div>

            {/* PRODUCT INFO CARD END*/}
        </div>
    );
};

export default Purchase;