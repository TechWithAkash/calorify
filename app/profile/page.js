"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FaUserCircle, FaRegEdit, FaSignOutAlt, FaArrowLeft } from 'react-icons/fa' // Added back button icon

export default function Profile() {
  const { data: session } = useSession()
  const router = useRouter()

  if (!session) {
    return (
      <div className="min-h-screen flex justify-center items-center  text-white">
        <div className="text-center py-8 px-6 bg-white bg-opacity-40 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">You are not logged in.</h2>
          <p className="text-xl mb-4">Please log in to view your profile.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-r  text-white flex justify-center items-center">
      <div className="container mx-auto px-8 py-12 bg-white bg-opacity-90 rounded-lg shadow-xl">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center text-purple-600 hover:text-purple-800 mb-6"
        >
          <FaArrowLeft className="mr-2" /> Back to Dashboard
        </button>

        {/* Profile Information */}
        <div className="flex items-center justify-center mb-8">
          <img 
            src={session.user.image || "/default-profile.jpg"} 
            alt={session.user.name} 
            className="w-24 h-24 rounded-full border-4 border-purple-600 shadow-xl"
          />
        </div>

        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">{session.user.name}</h1>
          <p className="text-lg text-gray-600 mt-2">{session.user.email}</p>
        </div>

        {/* Additional Content for Engagement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">

          {/* Calorie Intake Goal */}
          <div className="bg-purple-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700">Your Calorie Goal</h3>
            <p className="text-xl text-gray-600 mt-2">Track your daily intake and goal!</p>
            <div className="mt-4">
              <span className="text-3xl font-bold text-purple-600">1,800</span>
              <span className="text-lg text-gray-500"> kcal/day</span>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 mt-4 h-2 rounded-full">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: "70%" }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">You have consumed 70% of your daily goal.</p>
          </div>

          {/* Nutritional Info */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700">Nutritional Breakdown</h3>
            <p className="text-xl text-gray-600 mt-2">Here's a breakdown of your daily intake.</p>
            <div className="mt-4">
              <ul className="space-y-2">
                <li className="text-gray-700">🥗 Vegetables: 150 kcal</li>
                <li className="text-gray-700">🍗 Chicken: 250 kcal</li>
                <li className="text-gray-700">🍓 Fruits: 100 kcal</li>
                <li className="text-gray-700">🍚 Rice: 200 kcal</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recent Meals Section */}
        <div className="bg-white mt-8 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-700 text-center mb-4">Recent Meals</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-lg text-gray-700">Breakfast</span>
              <span className="text-lg text-gray-500">350 kcal</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-700">Lunch</span>
              <span className="text-lg text-gray-500">500 kcal</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-700">Dinner</span>
              <span className="text-lg text-gray-500">450 kcal</span>
            </div>
          </div>
        </div>

        {/* Edit Profile and Logout Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button className="flex items-center bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition-all duration-300">
            <FaRegEdit className="mr-2" /> Edit Profile
          </button>
          <button className="flex items-center bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition-all duration-300" onClick={() => signOut()}>
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </div>
    </div>
  )
}
