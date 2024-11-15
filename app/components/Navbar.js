'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu as MenuIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Navbar({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session } = useSession()
  const router = useRouter()

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (session) setIsMenuOpen(false)
  }, [session])

  const handleProfileClick = () => {
    router.push('/profile') // Navigate to user profile route
  }

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-70 backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href={"/"} className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Calorify
          </Link>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Features', 'FAQ', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-gray-700 hover:text-purple-600 transition-colors duration-300 ${activeSection === item.toLowerCase() ? 'font-bold text-purple-600' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            {/* Login/Logout Button */}
            {!session ? (
              <Button
                variant="ghost"
                
                onClick={() => signIn('google')}
                className="text-white bg-pink-500 rounded-lg px-4 py-5 text-xl hover:bg-purple-500"
              >
                Login
              </Button>
            ) : (
              <div className="relative">
                {/* User Profile Picture */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-purple-600 hover:text-pink-600"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <img 
                    src={session.user.image || "/default-profile.jpg"} 
                    alt={session.user.name} 
                    className="w-10 h-10 rounded-full border-2 border-purple-600" 
                  />
                </Button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48 py-2"
                    >
                      <button
                        onClick={handleProfileClick}
                        className="w-full text-left text-gray-700 hover:bg-purple-50 hover:text-purple-600 px-4 py-2"
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => signOut()}
                        className="w-full text-left text-gray-700 hover:bg-purple-50 hover:text-purple-600 px-4 py-2"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-purple-600 hover:text-pink-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg rounded-b-2xl"
          >
            <div className="flex flex-col items-center py-4">
              {['Home', 'Features', 'FAQ', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="w-full text-center py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
              {/* Mobile Login Button */}
              {!session ? (
                <Button
                  variant="ghost"
                  onClick={() => signIn('google')}
                  className="text-purple-600 p-6 text-[30px]  hover:text-pink-600"
                >
                  <span className='text-xl'>Login</span>
                </Button>
              ) : (
                <div className="flex flex-col items-center py-4 space-y-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleProfileClick}
                    className="text-purple-600 hover:text-pink-600"
                  >
                    Profile
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => signOut()}
                    className="text-purple-600 hover:text-pink-600"
                  >
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
