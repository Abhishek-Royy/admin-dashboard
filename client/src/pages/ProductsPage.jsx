import React from "react";
import Navbar from "../components/common/Navbar";

import Producttable from "../products/Producttable";

import { motion } from "framer-motion";
import StatusCard from "../components/common/StatusCard";
import { Package, AlertTriangle, TrendingUp, DollarSign } from "lucide-react";
import CategoryDistributionChart from "../charts/CategoryDistributionChart";
import SalesTrendChart from "../charts/SalesTrendChart";

function ProductsPage() {
  return (
    <>
      <div className="flex-1 overflow-auto relative z-10">
        <Navbar title="Products" />

        {/* Status Card */}
        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
          {/* StatusCard */}
          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <StatusCard
              name="All Package"
              icon={Package}
              value="938"
              color="#6366fe"
            />
            <StatusCard
              name="Conversion Rate"
              icon={DollarSign}
              value="$189,50"
              color="#10b981"
            />
            <StatusCard
              name="New Users"
              icon={AlertTriangle}
              value="1,374"
              color="#ec4899"
            />
            <StatusCard
              name="Upgrow Rate"
              icon={TrendingUp}
              value="28.9%"
              color="#8b5cf6"
            />
          </motion.div>

          {/* ProductTable */}
          <Producttable/>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CategoryDistributionChart/>
            <SalesTrendChart/>
          </div>
        </main>
      </div>
    </>
  );
}

export default ProductsPage;
