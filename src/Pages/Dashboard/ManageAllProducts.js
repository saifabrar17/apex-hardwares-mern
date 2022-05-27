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
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Available</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <AllProductsData
                                key={product._id}
                                product={product}
                                index={index}
                                setDeleteProduct={setDeleteProduct}
                            ></AllProductsData>)
                        }
                    </tbody>
                </table>
            </div>

            



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