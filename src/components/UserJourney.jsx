import React from 'react'
import { ArrowRight } from 'lucide-react'

const journeySteps = [
  { step: '进入首页', icon: '🏠' },
  { step: '查看实时拥挤度', icon: '📊' },
  { step: '选择景点', icon: '📍' },
  { step: '查看人流预测', icon: '🔮' },
  { step: '规划避峰路线', icon: '🗺️' },
  { step: '到达后打卡', icon: '✨' },
  { step: '上传体验', icon: '📸' },
  { step: '获得积分', icon: '⭐' },
  { step: '日记自动生成', icon: '📖' }
]

const UserJourney = () => {
  return (
    <section id="journey" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            用户旅程
          </h2>
          <p className="text-xl text-gray-600">完整、顺畅的旅行体验</p>
        </div>

        {/* Journey Flow */}
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {journeySteps.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white rounded-full p-6 shadow-xl border-4 border-blue-200 mb-4 transform hover:scale-110 transition-transform z-10">
                  <span className="text-5xl">{item.icon}</span>
                </div>
                <div className="text-center">
                  <span className="text-sm text-blue-500 font-semibold">步骤 {index + 1}</span>
                  <p className="text-gray-800 font-medium mt-1">{item.step}</p>
                </div>
                {index < journeySteps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="text-blue-400" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-10 text-white">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">我们不只是做一个"避峰工具"</h3>
            <p className="text-xl mb-8 leading-relaxed">
              我们是在做：一个能让旅行慢下来、保留真实体验、并形成情绪价值的 App
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <p className="font-semibold">实时体验社区</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <p className="font-semibold">打卡地图</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <p className="font-semibold">旅行日记</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <p className="font-semibold">舒适度评分</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <p className="font-semibold">AI避峰路线</p>
              </div>
            </div>
            
            <div className="mt-8 text-2xl font-bold">
              完整 · 创新 · 有情绪 · 有数据 · 有技术 · 有社区
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserJourney
