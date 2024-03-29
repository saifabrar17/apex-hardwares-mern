import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
console.log(products);
    return (
        <div>
            <h1 className='text-4xl py-10 text-center font-bold text-primary pt-10'>Our Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 py-12'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;