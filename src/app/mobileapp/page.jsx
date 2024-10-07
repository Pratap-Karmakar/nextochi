'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Zomato from '../../assets/mobileimage/Zomato.jpeg'
import Onemg from '../../assets/mobileimage/Onemg.png'
import Bigbusket from '../../assets/mobileimage/Bigbusket.png'
import Facebook from '../../assets/mobileimage/Facebook.png'
import Instagram from '../../assets/mobileimage/Instagram.png'
import Snapchat from '../../assets/mobileimage/Snapchat.png'
import Swiggy from '../../assets/mobileimage/Swiggy.png'
import Twitter from '../../assets/mobileimage/Twitter.png'
import Whatsapp from '../../assets/mobileimage/Whatsapp.jpg'

export default function ProductCards() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // Simulating an API call
    const fetchProducts = async () => {
      try {
        // Simulate API data
        const data = [
          {
            id: 1,
            image: Swiggy,
            title: 'Food Delivery',
            description: 'Create an app like Swiggy'
          },
          {
            id: 2,
            image: Facebook,
            title: 'Social Media',
            description: 'Create an app like Facebook'
          },
          {
            id: 3,
            image: Whatsapp,
            title: 'Social Media',
            description: 'Create an app like Whatsapp'
          },
          {
            id: 4,
            image: Swiggy,
            title: 'Food Delivery',
            description: 'Create an app like Uber Eats'
          },
          {
            id: 5,
            image: Instagram,
            title: 'Social Media',
            description: 'Create an app like Instagram'
          },
          {
            id: 6,
            image: Twitter,
            title: 'Social Media',
            description: 'Create an app like Twitter'
          },
          {
            id: 7,
            image: Snapchat,
            title: 'Social Media',
            description: 'Create an app like Snapchat'
          },
          {
            id: 8,
            image: Onemg,
            title: 'Ecommerce',
            description: 'Create an app like 1mg'
          },
          {
            id: 9,
            image: Zomato,
            title: 'Food Delivery',
            description: 'Create an app like Zomato'
          },
          {
            id: 10,
            image: Bigbusket,
            title: 'Ecommerce',
            description: 'Create an app like BigBusket'
          },
        ]
        setProducts(data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch products')
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleViewPrice = () => {
    router.push('/maprice')
  }

  if (loading) return <div className="text-center">Loading...</div>
  if (error) return <div className="text-center text-red-500">{error}</div>

  return (
    <div className="container mx-auto px-4 py-8 bg-black overflow-hidden">
      <h1 className="text-5xl font-bold mb-10 text-center text-[#FFF5CD]">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div 
            key={product.id} 
            className="bg-[#313131] hover:bg-[#212121] text-[#FFF5CD] rounded-lg shadow-md overflow-hidden transition duration-200 ease-in-out"
          >
            <Image 
              src={product.image} 
              alt={product.title} 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <button 
                className="bg-[#4A4947] hover:bg-[#31312f] text-white px-4 py-2 rounded transition-colors"
                onClick={handleViewPrice}
              >
                View Our Price
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}