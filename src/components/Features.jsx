import React from 'react'
import { Radar, TrendingUp, Heart, Users, Route } from 'lucide-react'

const features = [
  {
    icon: Radar,
    title: '实时人潮雷达',
    subtitle: 'Crowd Radar',
    description: '现在这个景点有多挤？',
    details: [
      '高德热力图数据实时显示',
      '景区官方人流指数',
      '用户实时体感拥挤度',
      '社交媒体热度分析'
    ],
    colors: ['舒适', '一般', '拥挤', '高峰'],
    colorClasses: ['bg-comfort-green', 'bg-comfort-yellow', 'bg-comfort-orange', 'bg-comfort-red']
  },
  {
    icon: TrendingUp,
    title: 'AI 人流预测',
    subtitle: 'Crowd Forecast',
    description: '未来会不会更拥挤？什么时候最舒服？',
    details: [
      '未来2小时拥挤预测',
      '未来24小时舒适度曲线',
      '节假日提前规划',
      '最佳出行时间推荐'
    ],
    features: ['历史数据分析', '天气因素', '节假日影响', '活动信息', '交通流量']
  },
  {
    icon: Heart,
    title: '舒适度评分',
    subtitle: 'Comfort Score',
    description: '不只是人多不多，而是体验好不好',
    details: [
      '人流密度分析',
      '排队指数监测',
      '天气舒适度',
      '人均体验空间',
      '环境氛围评估'
    ],
    scores: ['非常舒适', '轻度拥挤', '拥挤', '高度拥挤']
  },
  {
    icon: Users,
    title: '实时体验社区',
    subtitle: 'Travel Pulse',
    description: '旅行者之间的真情实感分享',
    details: [
      '现场照片/视频分享',
      '排队时间反馈',
      '氛围评价',
      '即时推荐',
      '避坑提醒'
    ],
    highlight: '超越小红书的实时体验社区'
  },
  {
    icon: Route,
    title: 'AI 避峰路线',
    subtitle: 'Smart Itinerary',
    description: '帮我规划一个今天不会被人挤死的行程',
    details: [
      '今日最舒适路线',
      '情侣轻松游',
      '带父母不累路线',
      '人少又好拍路线'
    ],
    features: ['实时人流', '未来预测', '用户偏好', '交通时间']
  }
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            核心功能体系
          </h2>
          <p className="text-xl text-gray-600">5大功能模块，让旅行更舒适</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg card-hover border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <feature.icon className="text-white" size={28} />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg font-semibold text-blue-700 mb-4">
                "{feature.description}"
              </p>
              
              <ul className="space-y-2 mb-4">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
              
              {feature.colors && (
                <div className="flex gap-2 mt-4">
                  {feature.colors.map((color, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <div className={`w-4 h-4 rounded-full ${feature.colorClasses[idx]}`}></div>
                      <span className="text-xs text-gray-600">{color}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {feature.highlight && (
                <div className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg text-center font-semibold">
                  {feature.highlight}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
