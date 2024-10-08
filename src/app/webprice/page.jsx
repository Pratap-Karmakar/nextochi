'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function WebsiteDevelopmentCost() {
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
        Website Development Cost and Information
      </motion.h1>
      
      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Website Types</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-black">Website Type</th>
                <th className="border border-gray-300 p-2 text-black">Description</th>
                <th className="border border-gray-300 p-2 text-black">Typical Features</th>
              </tr>
            </thead>
            <motion.tbody variants={staggerChildren}>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Static Website</td>
                <td className="border border-gray-300 p-2">Simple informational websites</td>
                <td className="border border-gray-300 p-2">Fixed content, contact forms, responsive design</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Dynamic Website</td>
                <td className="border border-gray-300 p-2">Interactive websites with changing content</td>
                <td className="border border-gray-300 p-2">CMS, user accounts, database integration</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">E-commerce Website</td>
                <td className="border border-gray-300 p-2">Online stores for selling products</td>
                <td className="border border-gray-300 p-2">Product catalog, shopping cart, payment gateway</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Blog/Content Website</td>
                <td className="border border-gray-300 p-2">Platforms for publishing articles and media</td>
                <td className="border border-gray-300 p-2">Content management, comments, categories/tags</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Web Application</td>
                <td className="border border-gray-300 p-2">Complex, feature-rich web-based software</td>
                <td className="border border-gray-300 p-2">User authentication, data processing, API integrations</td>
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
                <th className="border border-gray-300 p-2 text-black">Traditional Development</th>
                <th className="border border-gray-300 p-2 text-black">Modern Development</th>
              </tr>
            </thead>
            <motion.tbody variants={staggerChildren}>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Frontend</td>
                <td className="border border-gray-300 p-2">HTML, CSS, JavaScript</td>
                <td className="border border-gray-300 p-2">React, Vue.js, Angular</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Backend</td>
                <td className="border border-gray-300 p-2">PHP, Java, Ruby</td>
                <td className="border border-gray-300 p-2">Node.js, Python, Go</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Database</td>
                <td className="border border-gray-300 p-2">MySQL, PostgreSQL</td>
                <td className="border border-gray-300 p-2">MongoDB, Firebase, GraphQL</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">CMS</td>
                <td className="border border-gray-300 p-2">WordPress, Drupal</td>
                <td className="border border-gray-300 p-2">Headless CMS (Contentful, Strapi)</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Hosting</td>
                <td className="border border-gray-300 p-2">Shared Hosting, VPS</td>
                <td className="border border-gray-300 p-2">Cloud (AWS, Google Cloud, Vercel)</td>
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
                <td className="border border-gray-300 p-2">Planning</td>
                <td className="border border-gray-300 p-2">1-2 weeks</td>
                <td className="border border-gray-300 p-2">Requirements gathering, sitemap creation</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Design</td>
                <td className="border border-gray-300 p-2">2-4 weeks</td>
                <td className="border border-gray-300 p-2">Wireframing, UI/UX design, mockups</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Development</td>
                <td className="border border-gray-300 p-2">4-12 weeks</td>
                <td className="border border-gray-300 p-2">Frontend and backend coding, CMS integration</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Content Creation</td>
                <td className="border border-gray-300 p-2">2-4 weeks</td>
                <td className="border border-gray-300 p-2">Writing, editing, and media creation</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Testing</td>
                <td className="border border-gray-300 p-2">1-2 weeks</td>
                <td className="border border-gray-300 p-2">Functionality, compatibility, and performance testing</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Deployment</td>
                <td className="border border-gray-300 p-2">1 week</td>
                <td className="border border-gray-300 p-2">Website launch, DNS configuration</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Maintenance</td>
                <td className="border border-gray-300 p-2">Ongoing</td>
                <td className="border border-gray-300 p-2">Updates, security patches, content management</td>
              </motion.tr>
            </motion.tbody>
          </table>
        </div>
      </motion.div>
      
      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Website Development Cost Estimates</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-black">Website Type</th>
                <th className="border border-gray-300 p-2 text-black">Cost Range</th>
                <th className="border border-gray-300 p-2 text-black">Typical Timeline</th>
              </tr>
            </thead>
            <motion.tbody variants={staggerChildren}>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Basic Static Website</td>
                <td className="border border-gray-300 p-2">$1,000 - $5,000</td>
                <td className="border border-gray-300 p-2">2-4 weeks</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Small Business Website</td>
                <td className="border border-gray-300 p-2">$5,000 - $15,000</td>
                <td className="border border-gray-300 p-2">4-8 weeks</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">E-commerce Website</td>
                <td className="border border-gray-300 p-2">$10,000 - $50,000</td>
                <td className="border border-gray-300 p-2">8-16 weeks</td>
              </motion.tr>
              <motion.tr variants={fadeIn}>
                <td className="border border-gray-300 p-2">Custom Web Application</td>
                <td className="border border-gray-300 p-2">$25,000 - $100,000+</td>
                <td className="border border-gray-300 p-2">12-24 weeks</td>
              </motion.tr>
            </motion.tbody>
          </table>
        </div>
        <motion.p variants={fadeIn} className="mt-4 text-sm text-gray-400">Note: These are estimated ranges and actual costs may vary based on specific requirements, features, and development team rates.</motion.p>
      </motion.div>
      
      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Factors Affecting Website Development Cost</h2>
        <motion.ul variants={staggerChildren} className="list-disc list-inside space-y-2">
          <motion.li variants={fadeIn}>Website complexity and number of pages</motion.li>
          <motion.li variants={fadeIn}>Custom design requirements</motion.li>
          <motion.li variants={fadeIn}>Content management system (CMS) integration</motion.li>
          <motion.li variants={fadeIn}>E-commerce functionality</motion.li>
          <motion.li variants={fadeIn}>Third-party integrations (payment gateways, APIs)</motion.li>
          <motion.li variants={fadeIn}>Responsive design for mobile devices</motion.li>
          <motion.li variants={fadeIn}>SEO optimization</motion.li>
          <motion.li variants={fadeIn}>Security features (SSL, data encryption)</motion.li>
          <motion.li variants={fadeIn}>Scalability requirements</motion.li>
          <motion.li variants={fadeIn}>Ongoing maintenance and support needs</motion.li>
        </motion.ul>
      </motion.div>
      
      <motion.div variants={fadeIn} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <motion.p variants={fadeIn} className="mb-2">Phone: +1 (123) 456-7890</motion.p>
        <motion.p variants={fadeIn} className="mb-2">Email: info@websitedevelopment.com</motion.p>
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