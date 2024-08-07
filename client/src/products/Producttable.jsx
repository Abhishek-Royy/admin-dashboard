import React, { useState } from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";

function Producttable() {
  const Product_Data = [
    {
      id: 1,
      name: "Wireless Earbuds",
      category: "Electronics",
      price: 3499,
      stock: 143,
      sales: 1200,
    },
    {
      id: 2,
      name: "Gaming Wireless mouse",
      category: "Electronics",
      price: 5499,
      stock: 79,
      sales: 709,
    },
    {
      id: 3,
      name: "Gaming Chair",
      category: "Accessories",
      price: 13920,
      stock: 104,
      sales: 543,
    },
    {
      id: 4,
      name: "Smart Watch",
      category: "Electronics",
      price: 2999,
      stock: 67,
      sales: 650,
    },
    {
      id: 5,
      name: "Coffie Maker",
      category: "Electronics",
      price: 2999,
      stock: 157,
      sales: 1152,
    },
    {
      id: 1,
      name: "Yoga Mat",
      category: "Fitness",
      price: 199,
      stock: 1596,
      sales: 14098,
    },
  ];

  // const [first, setfirst] = useState(second);
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search product..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>
    </motion.div>
  );
}

export default Producttable;
