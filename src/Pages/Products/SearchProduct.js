import React, { useEffect, useState } from "react";
import UpdateProduct from "./UpdateProduct";

const SearchProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isSearchDone, setIsSearchDone] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  const handleSearch = () => {
    setIsSearchDone(true);

    if (!searchQuery.trim()) {
      setSearchResult([]); // If searchQuery is empty, reset the searchResult array
      return;
    }

    const filteredProducts = products.filter(product => product._id.includes(searchQuery));
    setSearchResult(filteredProducts);
  };

  // Function to generate a unique key for each product
  const generateKey = (product) => {
    return product._id + Math.random().toString(36).substr(2, 9);
  };

  return (
    <div>
      <h2>something</h2>
      <p>64bd60c964e201cc01ea90de</p>
      <input
        type="text"
        placeholder="Search by Product ID"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {isSearchDone && (
        <ul>
          {searchResult.map(product => (
            <li key={generateKey(product)}>
              <UpdateProduct product={product} ></UpdateProduct>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchProduct;
