import Link from 'next/link'

export default function AppDevelopmentCost() {
  return (
    <div className="container mx-auto px-4 py-8 text-[#FFF0D1] bg-zinc-900">
      <h1 className="text-3xl font-bold mb-6 text-center">App Development Cost and Information</h1>
      
      <div className="mb-8">
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
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Social Media</td>
                <td className="border border-gray-300 p-2">Platforms for connecting and sharing content</td>
                <td className="border border-gray-300 p-2">User profiles, news feed, messaging</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">E-commerce</td>
                <td className="border border-gray-300 p-2">Online shopping platforms</td>
                <td className="border border-gray-300 p-2">Product catalog, shopping cart, payment integration</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Health & Fitness</td>
                <td className="border border-gray-300 p-2">Apps for tracking health and exercise</td>
                <td className="border border-gray-300 p-2">Activity tracking, meal planning, progress reports</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Educational</td>
                <td className="border border-gray-300 p-2">Learning and skill development apps</td>
                <td className="border border-gray-300 p-2">Course content, quizzes, progress tracking</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Productivity</td>
                <td className="border border-gray-300 p-2">Tools for improving work efficiency</td>
                <td className="border border-gray-300 p-2">Task management, note-taking, calendar integration</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
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
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Frontend (Mobile)</td>
                <td className="border border-gray-300 p-2">Swift (iOS), Kotlin (Android)</td>
                <td className="border border-gray-300 p-2">React Native, Flutter</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Frontend (Web)</td>
                <td className="border border-gray-300 p-2">React, Vue.js, Angular</td>
                <td className="border border-gray-300 p-2">React, Vue.js, Angular</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Backend</td>
                <td className="border border-gray-300 p-2">Node.js, Python, Ruby on Rails</td>
                <td className="border border-gray-300 p-2">Node.js, Python, Ruby on Rails</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Database</td>
                <td className="border border-gray-300 p-2">MongoDB, PostgreSQL, MySQL</td>
                <td className="border border-gray-300 p-2">MongoDB, PostgreSQL, MySQL</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Cloud Services</td>
                <td className="border border-gray-300 p-2">AWS, Google Cloud, Azure</td>
                <td className="border border-gray-300 p-2">AWS, Google Cloud, Azure</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
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
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Discovery</td>
                <td className="border border-gray-300 p-2">1-2 weeks</td>
                <td className="border border-gray-300 p-2">Requirements gathering, market research</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Planning</td>
                <td className="border border-gray-300 p-2">1-2 weeks</td>
                <td className="border border-gray-300 p-2">Project scope, timeline, and resource allocation</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Design</td>
                <td className="border border-gray-300 p-2">2-4 weeks</td>
                <td className="border border-gray-300 p-2">UI/UX design, prototyping, and design approval</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Development</td>
                <td className="border border-gray-300 p-2">8-12 weeks</td>
                <td className="border border-gray-300 p-2">Frontend and backend development, API integration</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Testing</td>
                <td className="border border-gray-300 p-2">2-3 weeks</td>
                <td className="border border-gray-300 p-2">Quality assurance, bug fixing, and performance optimization</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Deployment</td>
                <td className="border border-gray-300 p-2">1-2 weeks</td>
                <td className="border border-gray-300 p-2">App store submission, server setup, and launch</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Maintenance</td>
                <td className="border border-gray-300 p-2">Ongoing</td>
                <td className="border border-gray-300 p-2">Updates, bug fixes, and feature enhancements</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mb-8">
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
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Basic</td>
                <td className="border border-gray-300 p-2">$20,000 - $40,000</td>
                <td className="border border-gray-300 p-2">$15,000 - $30,000</td>
                <td className="border border-gray-300 p-2">2-3 months</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Medium</td>
                <td className="border border-gray-300 p-2">$40,000 - $80,000</td>
                <td className="border border-gray-300 p-2">$30,000 - $60,000</td>
                <td className="border border-gray-300 p-2">3-6 months</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Complex</td>
                <td className="border border-gray-300 p-2">$80,000 - $150,000+</td>
                <td className="border border-gray-300 p-2">$60,000 - $120,000+</td>
                <td className="border border-gray-300 p-2">6-12 months</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-600">Note: These are estimated ranges and actual costs may vary based on specific requirements, features, and development team rates.</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Factors Affecting App Development Cost</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>App complexity and number of features</li>
          <li>Design requirements (basic UI vs. custom animations)</li>
          <li>Platform choice (iOS, Android, Web, or cross-platform)</li>
          <li>Backend infrastructure and API integrations</li>
          <li>Third-party service integrations</li>
          <li>Security requirements</li>
          <li>Scalability needs</li>
          <li>Maintenance and support plans</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-2">Phone: +1 (123) 456-7890</p>
        <p className="mb-2">Email: info@appdevelopment.com</p>
      </div>
      
      <div className="flex justify-center space-x-4">
        <Link href="/hire-developer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Hire a Developer
        </Link>
        <Link href="/contact-us" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Contact Us
        </Link>
      </div>
    </div>
  )
}