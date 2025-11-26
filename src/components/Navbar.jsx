import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-blue-500">彳亍</span>
            <span className="ml-2 text-gray-600">人间</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-500 transition">首页</Link>
            <Link to="/routes" className="text-gray-700 hover:text-blue-500 transition">推荐路线</Link>
            <Link to="/china-map" className="text-gray-700 hover:text-blue-500 transition">中国地图</Link>
            <Link to="/city-map" className="text-gray-700 hover:text-blue-500 transition">打卡地图</Link>
            <Link to="/travel-diary" className="text-gray-700 hover:text-blue-500 transition">旅游日记</Link>
            <Link to="/marketplace" className="text-gray-700 hover:text-blue-500 transition">商城</Link>
            <Link to="/crowd-radar" className="text-gray-700 hover:text-blue-500 transition">人流雷达</Link>
            <Link to="/community" className="text-gray-700 hover:text-blue-500 transition">社区</Link>
            <Link to="/personalized" className="text-gray-700 hover:text-blue-500 transition">个性化</Link>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
              下载 App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">首页</Link>
            <Link to="/routes" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">推荐路线</Link>
            <Link to="/china-map" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">中国地图</Link>
            <Link to="/city-map" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">打卡地图</Link>
            <Link to="/travel-diary" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">旅游日记</Link>
            <Link to="/marketplace" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">商城</Link>
            <Link to="/crowd-radar" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">人流雷达</Link>
            <Link to="/community" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">社区</Link>
            <Link to="/personalized" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">个性化设置</Link>
            <button className="w-full mt-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
              下载 App
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
