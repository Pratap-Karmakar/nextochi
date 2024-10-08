'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AppDevelopmentCost() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-8 text-[#FFF0D1] bg-zinc-900"
    >
      <motion.h1 
        variants={fadeIn}
        className="text-3xl font-bold my-14 text-center"
      >
        App Development Cost and Information
      </motion.h1>
      
      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common App Types</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-black">App Type</th>
                <th className="border border-gray-300 p-2 text-black">Description</th>
                <th className="border border-gray-300 p-2 text-black">Typical Features</th>
              </tr>
            </thead>
            <motion.tbody variants={staggerChildren}>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Social Media</td>
                <td className="border border-gray-300 p-2">Platforms for connecting and sharing content</td>
                <td className="border border-gray-300 p-2">User profiles, news feed, messaging</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">E-commerce</td>
                <td className="border border-gray-300 p-2">Online shopping platforms</td>
                <td className="border border-gray-300 p-2">Product catalog, shopping cart, payment integration</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Health & Fitness</td>
                <td className="border border-gray-300 p-2">Apps for tracking health and exercise</td>
                <td className="border border-gray-300 p-2">Activity tracking, meal planning, progress reports</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Educational</td>
                <td className="border border-gray-300 p-2">Learning and skill development apps</td>
                <td className="border border-gray-300 p-2">Course content, quizzes, progress tracking</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Productivity</td>
                <td className="border border-gray-300 p-2">Tools for improving work efficiency</td>
                <td className="border border-gray-300 p-2">Task management, note-taking, calendar integration</td>
              </motion.tr>
            </motion.tbody>
          </table>
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technology Stack Options</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-black">Component</th>
                <th className="border border-gray-300 p-2 text-black">Native Development</th>
                <th className="border border-gray-300 p-2 text-black">Cross-Platform Development</th>
              </tr>
            </thead>
            <motion.tbody variants={staggerChildren}>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Frontend (Mobile)</td>
                <td className="border border-gray-300 p-2">Swift (iOS), Kotlin (Android)</td>
                <td className="border border-gray-300 p-2">React Native, Flutter</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Frontend (Web)</td>
                <td className="border border-gray-300 p-2">React, Vue.js, Angular</td>
                <td className="border border-gray-300 p-2">React, Vue.js, Angular</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Backend</td>
                <td className="border border-gray-300 p-2">Node.js, Python, Ruby on Rails</td>
                <td className="border border-gray-300 p-2">Node.js, Python, Ruby on Rails</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Database</td>
                <td className="border border-gray-300 p-2">MongoDB, PostgreSQL, MySQL</td>
                <td className="border border-gray-300 p-2">MongoDB, PostgreSQL, MySQL</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Cloud Services</td>
                <td className="border border-gray-300 p-2">AWS, Google Cloud, Azure</td>
                <td className="border border-gray-300 p-2">AWS, Google Cloud, Azure</td>
              </motion.tr>
            </motion.tbody>
          </table>
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Development Phases</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-black">Phase</th>
                <th className="border border-gray-300 p-2 text-black">Typical Duration</th>
                <th className="border border-gray-300 p-2 text-black">Description</th>
              </tr>
            </thead>
            <motion.tbody variants={staggerChildren}>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Discovery</td>
                <td className="border border-gray-300 p-2">1-2 weeks</td>
                <td className="border border-gray-300 p-2">Requirements gathering, market research</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Planning</td>
                <td className="border border-gray-300 p-2">1-2 weeks</td>
                <td className="border border-gray-300 p-2">Project scope, timeline, and resource allocation</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Design</td>
                <td className="border border-gray-300 p-2">2-4 weeks</td>
                <td className="border border-gray-300 p-2">UI/UX design, prototyping, and design approval</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Development</td>
                <td className="border border-gray-300 p-2">8-12 weeks</td>
                <td className="border border-gray-300 p-2">Frontend and backend development, API integration</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Testing</td>
                <td className="border border-gray-300 p-2">2-3 weeks</td>
                <td className="border border-gray-300 p-2">Quality assurance, bug fixing, and performance optimization</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Deployment</td>
                <td className="border border-gray-300 p-2">1-2 weeks</td>
                <td className="border border-gray-300 p-2">App store submission, server setup, and launch</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Maintenance</td>
                <td className="border border-gray-300 p-2">Ongoing</td>
                <td className="border border-gray-300 p-2">Updates, bug fixes, and feature enhancements</td>
              </motion.tr>
            </motion.tbody>
          </table>
        </div>
      </motion.div>
      
      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">App Development Cost Estimates</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-black">App Complexity</th>
                <th className="border border-gray-300 p-2 text-black">Native (per platform)</th>
                <th className="border border-gray-300 p-2 text-black">Cross-Platform</th>
                <th className="border border-gray-300 p-2 text-black">Typical Timeline</th>
              </tr>
            </thead>
            <motion.tbody variants={staggerChildren}>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Basic</td>
                <td className="border border-gray-300 p-2">$20,000 - $40,000</td>
                <td className="border border-gray-300 p-2">$15,000 - $30,000</td>
                <td className="border border-gray-300 p-2">2-3 months</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Medium</td>
                <td className="border border-gray-300 p-2">$40,000 - $80,000</td>
                <td className="border border-gray-300 p-2">$30,000 - $60,000</td>
                <td className="border border-gray-300 p-2">3-6 months</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Complex</td>
                <td className="border border-gray-300 p-2">$80,000 - $150,000+</td>
                <td className="border border-gray-300 p-2">$60,000 - $120,000+</td>
                <td className="border border-gray-300 p-2">6-12 months</td>
              </motion.tr>
            </motion.tbody>
          </table>
        </div>
        <motion.p variants={fadeIn} className="mt-4 text-sm text-gray-600">Note: These are estimated ranges and actual costs may vary based on specific requirements, features, and development team rates.</motion.p>
      </motion.div>
      
      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Factors Affecting App Development Cost</h2>
        <motion.ul variants={staggerChildren} className="list-disc list-inside space-y-2">
          <motion.li variants={fadeIn}>App complexity and number of features</motion.li>
          <motion.li variants={fadeIn}>Design requirements (basic UI vs. custom animations)</motion.li>
          <motion.li variants={fadeIn}>Platform choice (iOS, Android, Web, or cross-platform)</motion.li>
          <motion.li variants={fadeIn}>Backend infrastructure and API integrations</motion.li>
          <motion.li variants={fadeIn}>Third-party service integrations</motion.li>
          <motion.li variants={fadeIn}>Security requirements</motion.li>
          <motion.li variants={fadeIn}>Scalability needs</motion.li>
          <motion.li variants={fadeIn}>Maintenance and support plans</motion.li>
        </motion.ul>
      </motion.div>
      
      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <motion.p variants={fadeIn} className="mb-2">Phone: +1 (123) 456-7890</motion.p>
        <motion.p variants={fadeIn} className="mb-2">Email: info@appdevelopment.com</motion.p>
      </motion.div>
      
      <motion.div variants={fadeIn} className="flex justify-center space-x-4">
        <Link href="/hire-developer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
          Hire a Developer
        </Link>
        <Link href="/contact-us" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
          Contact Us
        </Link>
      </motion.div>
    </motion.div>
  )
}