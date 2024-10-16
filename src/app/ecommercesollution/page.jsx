'use client'

import { motion } from "framer-motion";

const EcommerceSolutions = () => {
  return (
    <section className="bg-zinc-900 py-10">
      {/* Header Section */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-white mb-2">E-Commerce Solutions</h1>
        <p className="text-lg text-gray-300">
          Elevate your online store with our comprehensive e-commerce solutions.
        </p>
      </motion.div>

      {/* Key Features Section */}
      <motion.div
        className="max-w-7xl mx-auto px-5 mb-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Custom-built or platform-based solutions (Shopify, WooCommerce, etc.)</li>
          <li>Secure payment gateway integrations</li>
          <li>Inventory management systems</li>
          <li>Customer account and loyalty programs</li>
          <li>Analytics and reporting tools for business insights</li>
        </ul>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        className="max-w-7xl mx-auto px-5 mb-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-4">Benefits</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Increased sales and revenue</li>
          <li>Expanded market reach</li>
          <li>Improved customer loyalty</li>
          <li>Streamlined inventory and order management</li>
          <li>Data-driven decision making</li>
        </ul>
      </motion.div>

      {/* Technologies Section */}
      <motion.div
        className="max-w-7xl mx-auto px-5 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-4">Technologies We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Shopify</h3>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">WooCommerce</h3>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Magento</h3>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">BigCommerce</h3>
          </div>
        </div>
      </motion.div>

      {/* Process Section */}
      <motion.div
        className="max-w-7xl mx-auto px-5 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-4">Our Process</h2>
        <div className="bg-white shadow-md p-6 rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Platform Selection & Strategy</h3>
            <p className="text-gray-600">Time: 1-2 weeks</p>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Design & User Experience Optimization</h3>
            <p className="text-gray-600">Time: 2-3 weeks</p>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Development & Integration</h3>
            <p className="text-gray-600">Time: 4-6 weeks</p>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Payment & Shipping Setup</h3>
            <p className="text-gray-600">Time: 1-2 weeks</p>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Testing, Launch & Ongoing Support</h3>
            <p className="text-gray-600">Time: Ongoing</p>
          </div>
        </div>
      </motion.div>

      {/* Pricing Section */}
      <motion.div
        className="max-w-7xl mx-auto px-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-4">Pricing & Fees</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4">Service</th>
              <th className="py-2 px-4">Estimated Time</th>
              <th className="py-2 px-4">Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Basic E-commerce Setup (Shopify/WooCommerce)</td>
              <td className="border px-4 py-2">4-6 Weeks</td>
              <td className="border px-4 py-2">$5,000 - $10,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Custom E-commerce Development</td>
              <td className="border px-4 py-2">8-12 Weeks</td>
              <td className="border px-4 py-2">$15,000 - $30,000</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Maintenance & Ongoing Support</td>
              <td className="border px-4 py-2">Ongoing</td>
              <td className="border px-4 py-2">$500 - $2,000/month</td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default EcommerceSolutions;
