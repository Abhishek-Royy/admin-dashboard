import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

function SalesChannelChart() {
  const color = ["#FFBB28", "#0088FE", "#00C49F", "#8884D8", "#FF8042"];

  const sales_channel_data = [
    { name: "Website", value: 91500 },
    { name: "App", value: 78200 },
    { name: "Marketplace", value: 65000 },
    { name: "Social Media", value: 89700 },
    { name: "B2B", value: 41900 },
  ];
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 lg:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-medium mb-4 text-gray-100">
        Sales Channel Data
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            data={sales_channel_data}
            width={500}
            height={300}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
            <XAxis dataKey="name" stroke="#9ca3a5" />
            <YAxis stroke="#9ca3a5" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4b5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey="value" fill="#8884d8">
              {sales_channel_data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={color[index % color.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesChannelChart;
