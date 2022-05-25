import React, { useEffect, useState } from 'react';
import AllProductsData from './AllProductsData';
import DeleteModal from './DeleteModal';

const ManageAllProducts = () => {

    const [deleteProduct, setDeleteProduct] = useState(null);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

   

    return (
        <div>
            {
                products.map(product => <AllProductsData
                    key={product._id}
                    product={product}
                    setDeleteProduct={setDeleteProduct}
                ></AllProductsData>)
            }

            {deleteProduct && <DeleteModal
            deleteProduct={deleteProduct}
            setDeleteProduct={setDeleteProduct}
            setProducts={setProducts}
            products={products}
            ></DeleteModal>}
        </div>
    );
};

export default ManageAllProducts;