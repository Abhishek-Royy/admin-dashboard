import React from "react";
import { motion } from "framer-motion";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

function SalesTrendChart() {
  const sales_trend_data = [
    { name: "Jul", sales: 4200 ,cnt:6680},
    { name: "Jan", sales: 1200,cnt:7480 },
    { name: "Aug", sales: 4900,cnt:4399 },
    { name: "Feb", sales: 3200,cnt:7420 },
    { name: "Mar", sales: 5300,cnt:3350 },
    { name: "Apr", sales: 1900,cnt:5300 },
    { name: "May", sales: 6100,cnt:4990 },
    { name: "Jun", sales: 3900,cnt:5290 },
  ];
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-xl font-medium mb-4 text-gray-100">
        Sales Trend Scale
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <ComposedChart
            width={500}
            height={400}
            data={sales_trend_data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="sales" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="sales" barSize={20} fill="#00C49F" />
            <Line type="linear" dataKey="cnt" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesTrendChart;
