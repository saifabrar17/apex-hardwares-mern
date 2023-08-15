import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Cell,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ChartView = () => {
  const [products, setProducts] = useState([]);
  const [lowQuantityProducts, setLowQuantityProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const filteredProducts = data.filter(
          (product) => parseInt(product.available) < 20
        );
        setLowQuantityProducts(filteredProducts);
      });
  }, []);

  // Extract data for the chart
  const chartData = products.map((product) => ({
    name: product.name,
    trimmedName:
      product.name.length > 10
        ? product.name.substring(0, 10) + "..."
        : product.name,
    availableQuantity: parseInt(product.available), // Convert to number
    color: parseInt(product.available) < 20 ? "#DC3545" : "#28AAA9", // Choose color based on condition
  }));

  console.log(lowQuantityProducts);

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <p className="text-lg  font-bold text-center py-5 text-primary">
            Available Quantity
          </p>
          <BarChart width={800} height={400} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="trimmedName" />
            <YAxis />
            <Tooltip
              formatter={(value, name, props) => [value, props.payload.name]}
            />
            <Legend />
            <Bar dataKey="availableQuantity" name="Available Quantity">
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
      {lowQuantityProducts.length === 0 && (
        <p className="text-lg  font-bold text-center py-5 text-success">
             Sufficient Stock Available
        </p>
      )}
      {lowQuantityProducts.length > 0 && (
        <div className="overflow-x-auto">
          <p className="text-lg  font-bold text-center py-5 text-red-600">
            Stock Running Low
          </p>
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {lowQuantityProducts.map((product, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="w-16 rounded">
                      <img src={product.img} alt={product.name} />
                    </div>
                  </td>
                  <td>{product.name}</td>
                  <td>{product.available}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ChartView;
