import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

function SalesOverviewCharts() {
  const sales_data = [
    { name: "Jul", sales: 4200 },
    { name: "Jan", sales: 1200 },
    { name: "Aug", sales: 4900 },
    { name: "Feb", sales: 3200 },
    { name: "Mar", sales: 5300 },
    { name: "Apr", sales: 1900 },
    { name: "May", sales: 6100 },
    { name: "Jun", sales: 3900 },
  ];

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-xl font-medium mb-4 text-gray-100">Sales Overview</h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={sales_data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#8884d8" />
            <XAxis dataKey={"name"} stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            {/* <YAxis dataKey={"sales"}/> */}
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4b5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              strokeWidth={3}
              dot={{ fill: "#6366fe", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesOverviewCharts;
