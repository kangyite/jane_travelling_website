import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-4xl font-bold text-primary-400">彳亍</span>
              <span className="ml-2 text-xl text-gray-400">人间</span>
            </div>
            <p className="text-2xl text-gray-400 mb-4">不赶路，感受路</p>
            <p className="text-gray-500 leading-relaxed">
              用智能科技为"慢"和"舒适"创造空间。<br />
              在人潮汹涌的时代，我们帮你赢得慢行的资格。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary-400 transition">首页</a></li>
              <li><a href="#features" className="hover:text-primary-400 transition">核心功能</a></li>
              <li><a href="#extended" className="hover:text-primary-400 transition">扩展功能</a></li>
              <li><a href="#journey" className="hover:text-primary-400 transition">用户旅程</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">联系我们</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-400" />
                <span>info@chichu.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-400" />
                <span>400-123-4567</span>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-primary-400" />
                <span>中国·上海</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 彳亍人间 ChiChu RenJian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
