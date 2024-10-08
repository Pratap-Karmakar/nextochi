'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

// Import website images
import Ecommerce from '../../assets/websiteimage/ecommerce.png'
import Blog from '../../assets/websiteimage/blog.png'
import Portfolio from '../../assets/websiteimage/portfolio.png'
import SocialNetwork from '../../assets/websiteimage/socialmedia.png'
import LearningManagement from '../../assets/websiteimage/education.png'
import RealEstate from '../../assets/websiteimage/realestate.png'
import TravelBooking from '../../assets/websiteimage/travel.png'
import HealthcarePortal from '../../assets/websiteimage/healthcare.png'
import JobBoard from '../../assets/websiteimage/job.png'
import NewsPortal from '../../assets/websiteimage/news.png'

export default function EnhancedWebsiteCards() {
  const [websites, setWebsites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // Simulating an API call
    const fetchWebsites = async () => {
      try {
        // Simulate API data
        const data = [
          {
            id: 1,
            image: Ecommerce,
            title: 'E-commerce Website',
            description: 'Create a website like Amazon or Shopify'
          },
          {
            id: 2,
            image: Blog,
            title: 'Blog Platform',
            description: 'Create a website like Medium or WordPress'
          },
          {
            id: 3,
            image: Portfolio,
            title: 'Portfolio Website',
            description: 'Create a personal or professional portfolio site'
          },
          {
            id: 4,
            image: SocialNetwork,
            title: 'Social Network',
            description: 'Create a website like LinkedIn or Twitter'
          },
          {
            id: 5,
            image: LearningManagement,
            title: 'Learning Management System',
            description: 'Create a website like Coursera or Udemy'
          },
          {
            id: 6,
            image: RealEstate,
            title: 'Real Estate Listings',
            description: 'Create a website like Zillow or Realtor.com'
          },
          {
            id: 7,
            image: TravelBooking,
            title: 'Travel Booking',
            description: 'Create a website like Booking.com or Airbnb'
          },
          {
            id: 8,
            image: HealthcarePortal,
            title: 'Healthcare Portal',
            description: 'Create a website for patient management'
          },
          {
            id: 9,
            image: JobBoard,
            title: 'Job Board',
            description: 'Create a website like Indeed or Glassdoor'
          },
          {
            id: 10,
            image: NewsPortal,
            title: 'News Portal',
            description: 'Create a website like CNN or BBC'
          },
        ]
        setWebsites(data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch websites')
        setLoading(false)
      }
    }

    fetchWebsites()
  }, [])

  const handleViewPrice = () => {
    router.push('/webprice')
  }

  if (loading) return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#FFF5CD]"></div>
    </div>
  )
  
  if (error) return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="text-center text-red-500 text-2xl font-bold">{error}</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black text-[#FFF5CD] overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFF5CD] to-[#FFD700]">
            Our Website Solutions
          </h1>
          <p className="text-xl text-[#FFF5CD] max-w-2xl mx-auto">
            Discover the perfect website solution for your business. From e-commerce to portfolios, we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((website, index) => (
            <motion.div
              key={website.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#313131] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="relative h-48">
                <Image 
                  src={website.image} 
                  alt={website.title} 
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-2xl font-bold text-[#FFF5CD] text-center px-4">{website.title}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#FFF5CD] mb-4">{website.description}</p>
                <button 
                  className="w-full bg-gradient-to-r from-[#FFF5CD] to-[#FFD700] text-black font-bold py-2 px-4 rounded-full hover:from-[#FFD700] hover:to-[#FFF5CD] transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFF5CD] focus:ring-opacity-50"
                  onClick={handleViewPrice}
                >
                  View Our Price
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button
            className="bg-[#FFF5CD] text-black font-bold text-xl py-3 px-8 rounded-full hover:bg-[#FFD700] transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFF5CD] focus:ring-opacity-50"
            onClick={() => router.push('/contact')}
          >
            Get Started Today
          </button>
        </motion.div>
      </div>
    </div>
  )
}