import React from "react";
import Navbar from "../components/common/Navbar";

import { motion } from "framer-motion";
import StatusCard from "../components/common/StatusCard";
import { Zap, User, ShoppingBag, BarChart } from "lucide-react";

import Salesoverviewchart from "../charts/SalesOverviewCharts";
import CategoryDistributionChart from "../charts/CategoryDistributionChart";

function OverviewPage() {
  return (
    <>
      <div className="flex-1 overflow-auto relative z-10">
        <Navbar title="Overview" />

        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
          {/* StatusCard */}
          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <StatusCard
              name="Total Sales"
              icon={Zap}
              value="$12,838"
              color="#6366fe"
            />
            <StatusCard
              name="Conversion Rate"
              icon={BarChart}
              value="18.9%"
              color="#10b981"
            />
            <StatusCard
              name="New Users"
              icon={User}
              value="2,374"
              color="#ec4899"
            />
            <StatusCard
              name="Total Products"
              icon={ShoppingBag}
              value="376"
              color="#8b5cf6"
            />
          </motion.div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Salesoverviewchart />
            <CategoryDistributionChart/>
          </div>
        </main>
      </div>
    </>
  );
}

export default OverviewPage;
