import React, { useEffect, useState } from "react";
import UpdateProduct from "./UpdateProduct";
import useScanDetection from "use-scan-detection";

const SearchProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isSearchDone, setIsSearchDone] = useState(false);
  const [barcodeData, setBarcodeData] = useState("");
  
  useEffect(() => {
    fetch('http://localhost:5000/product')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  useScanDetection({
    onComplete: (data) => {
      setBarcodeData(data);
      setSearchQuery(data); // Set the scanned data as the search query
    },
    minLength: 3
  });

  useEffect(() => {
    // Perform the search whenever the searchQuery state changes
    handleSearch();
  }, [searchQuery]);

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
console.log(barcodeData);
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md">
        <h2 className='text-2xl my-2 text-center text-primary'>Update Product</h2>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter product ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-400 rounded py-2 px-3 mr-2 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={handleSearch}
            className="bg-primary hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </div>
        {isSearchDone && (
          <ul>
            {searchResult.map((product) => (
              <li key={generateKey(product)}>
                <UpdateProduct product={product} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
