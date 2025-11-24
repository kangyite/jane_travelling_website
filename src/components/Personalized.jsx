import React, { useState } from 'react'
import { Settings, MapPin, Clock, Heart, Star, TrendingDown, Sun, Moon, Calendar, Users, Sparkles, Target, Coffee, Camera, Book, Music } from 'lucide-react'

const Personalized = () => {
  const [preferences, setPreferences] = useState({
    travelStyle: 'slow', // slow, balanced, fast
    crowdTolerance: 30, // 0-100
    preferredTime: 'morning', // morning, afternoon, evening
    interests: ['photography', 'food', 'culture']
  })

  // 7C: Customization - User preferences
  const travelStyles = [
    { id: 'slow', name: '慢节奏', icon: '🐌', desc: '深度体验，不赶时间' },
    { id: 'balanced', name: '平衡型', icon: '⚖️', desc: '效率与体验兼顾' },
    { id: 'fast', name: '高效型', icon: '⚡', desc: '时间紧凑，快速打卡' }
  ]

  const interests = [
    { id: 'photography', name: '摄影', icon: <Camera className="w-5 h-5" /> },
    { id: 'food', name: '美食', icon: '🍜' },
    { id: 'culture', name: '文化', icon: <Book className="w-5 h-5" /> },
    { id: 'nature', name: '自然', icon: '🌿' },
    { id: 'shopping', name: '购物', icon: '🛍️' },
    { id: 'nightlife', name: '夜生活', icon: <Moon className="w-5 h-5" /> },
    { id: 'music', name: '音乐', icon: <Music className="w-5 h-5" /> },
    { id: 'art', name: '艺术', icon: '🎨' }
  ]

  // 7C: Customization - AI personalized recommendations
  const personalizedRecommendations = [
    {
      id: 1,
      location: '武康路',
      city: '上海',
      matchScore: 98,
      reason: '根据你的摄影爱好和慢节奏偏好',
      bestTime: '明天 08:00-10:00',
      crowdLevel: 15,
      comfortScore: 95,
      highlights: ['老建筑', '清晨光线', '人少安静'],
      estimatedDuration: '2小时',
      image: '🏛️',
      weather: '晴天 18°C',
      tip: '建议携带广角镜头，清晨的阳光角度最适合建筑摄影'
    },
    {
      id: 2,
      location: '豫园',
      city: '上海',
      matchScore: 92,
      reason: '符合你的文化和美食兴趣',
      bestTime: '今天 15:00-17:00',
      crowdLevel: 35,
      comfortScore: 78,
      highlights: ['古典园林', '地道小吃', '传统建筑'],
      estimatedDuration: '3小时',
      image: '🏯',
      weather: '多云 20°C',
      tip: '下午茶时间人流较少，南翔小笼包排队约15分钟'
    },
    {
      id: 3,
      location: '朱家角古镇',
      city: '上海',
      matchScore: 89,
      reason: '完美匹配你的慢旅行和摄影需求',
      bestTime: '周二 07:00-09:00',
      crowdLevel: 12,
      comfortScore: 97,
      highlights: ['水乡风情', '小桥流水', '绝佳光影'],
      estimatedDuration: '半天',
      image: '🛶',
      weather: '晴天 17°C',
      tip: '清晨薄雾中的古镇最有意境，建议提前一晚入住'
    }
  ]

  // 7C: Customization - Dynamic itinerary based on preferences
  const customItinerary = {
    title: '为你定制的避峰路线',
    date: '2025年11月22日（周五）',
    totalDuration: '8小时',
    avgCrowd: 25,
    stops: [
      {
        time: '08:00-10:00',
        location: '武康路',
        activity: '建筑摄影 & 散步',
        crowd: 15,
        transport: '地铁10号线',
        duration: '2小时'
      },
      {
        time: '10:30-12:00',
        location: 'Manner Coffee',
        activity: '咖啡休息',
        crowd: 25,
        transport: '步行5分钟',
        duration: '1.5小时'
      },
      {
        time: '12:30-14:30',
        location: '新天地',
        activity: '午餐 & 建筑游览',
        crowd: 40,
        transport: '步行10分钟',
        duration: '2小时'
      },
      {
        time: '15:00-17:00',
        location: '豫园',
        activity: '园林参观 & 品茶',
        crowd: 35,
        transport: '地铁10号线',
        duration: '2小时'
      },
      {
        time: '17:30-19:00',
        location: '外滩',
        activity: '日落摄影',
        crowd: 50,
        transport: '步行8分钟',
        duration: '1.5小时'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50">
      {/* Header - 7C: Context */}
      <div className="bg-gradient-to-r from-purple-600 to-primary-600 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-10 h-10" />
            <h1 className="text-4xl font-bold">AI 个性化推荐</h1>
          </div>
          <p className="text-xl text-purple-100 max-w-3xl">
            基于你的偏好和实时数据，为你量身定制最舒适的旅行方案
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Preference Settings - 7C: Customization */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-800">偏好设置</h2>
          </div>

          {/* Travel Style */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">旅行风格</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {travelStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setPreferences({ ...preferences, travelStyle: style.id })}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    preferences.travelStyle === style.id
                      ? 'border-primary-600 bg-primary-50 shadow-lg'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="text-5xl mb-3">{style.icon}</div>
                  <div className="text-xl font-bold text-gray-800 mb-2">{style.name}</div>
                  <div className="text-sm text-gray-600">{style.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Crowd Tolerance */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              人群容忍度: <span className="text-primary-600">{preferences.crowdTolerance}%</span>
            </h3>
            <input
              type="range"
              min="0"
              max="100"
              value={preferences.crowdTolerance}
              onChange={(e) => setPreferences({ ...preferences, crowdTolerance: parseInt(e.target.value) })}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #10b981 0%, #fbbf24 ${preferences.crowdTolerance / 2}%, #f97316 ${preferences.crowdTolerance}%, #e5e7eb ${preferences.crowdTolerance}%, #e5e7eb 100%)`
              }}
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>🟢 极少人</span>
              <span>🟡 适中</span>
              <span>🔴 人多也OK</span>
            </div>
          </div>

          {/* Preferred Time */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">偏好时段</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { id: 'morning', name: '早晨', icon: <Sun className="w-6 h-6" />, time: '6:00-10:00' },
                { id: 'afternoon', name: '下午', icon: <Coffee className="w-6 h-6" />, time: '14:00-17:00' },
                { id: 'evening', name: '傍晚', icon: <Moon className="w-6 h-6" />, time: '17:00-20:00' }
              ].map((time) => (
                <button
                  key={time.id}
                  onClick={() => setPreferences({ ...preferences, preferredTime: time.id })}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    preferences.preferredTime === time.id
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex justify-center mb-2 text-primary-600">{time.icon}</div>
                  <div className="font-semibold text-gray-800">{time.name}</div>
                  <div className="text-xs text-gray-600">{time.time}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">兴趣标签</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <button
                  key={interest.id}
                  onClick={() => {
                    const newInterests = preferences.interests.includes(interest.id)
                      ? preferences.interests.filter(i => i !== interest.id)
                      : [...preferences.interests, interest.id]
                    setPreferences({ ...preferences, interests: newInterests })
                  }}
                  className={`px-4 py-2 rounded-full border-2 transition-all flex items-center gap-2 ${
                    preferences.interests.includes(interest.id)
                      ? 'border-primary-600 bg-primary-600 text-white'
                      : 'border-gray-300 text-gray-700 hover:border-primary-400'
                  }`}
                >
                  {typeof interest.icon === 'string' ? (
                    <span className="text-lg">{interest.icon}</span>
                  ) : (
                    interest.icon
                  )}
                  <span className="font-medium">{interest.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* AI Recommendations - 7C: Customization + Content */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-7 h-7 text-primary-600" />
            <h2 className="text-3xl font-bold text-gray-800">为你推荐</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalizedRecommendations.map((rec) => (
              <div key={rec.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                {/* Card Header */}
                <div className="relative bg-gradient-to-br from-primary-100 to-purple-100 p-12 flex items-center justify-center">
                  <div className="text-8xl">{rec.image}</div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-bold text-primary-600">{rec.matchScore}%</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{rec.location}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    <Sparkles className="w-4 h-4 inline mr-1 text-primary-600" />
                    {rec.reason}
                  </p>

                  {/* Best Time */}
                  <div className="flex items-center gap-2 mb-4 p-3 bg-green-50 rounded-xl">
                    <Clock className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="text-xs text-gray-600">最佳时间</div>
                      <div className="font-semibold text-green-700">{rec.bestTime}</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-xs text-gray-600 mb-1">拥挤度</div>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          rec.crowdLevel < 30 ? 'bg-green-500' :
                          rec.crowdLevel < 60 ? 'bg-yellow-500' : 'bg-orange-500'
                        }`}></div>
                        <span className="font-bold text-gray-800">{rec.crowdLevel}%</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="text-xs text-gray-600 mb-1">舒适分</div>
                      <div className="font-bold text-primary-600">{rec.comfortScore}</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {rec.highlights.map((tag, i) => (
                      <span key={i} className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Tip */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded mb-4">
                    <p className="text-xs text-gray-700">💡 {rec.tip}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition">
                      加入行程
                    </button>
                    <button className="px-4 py-3 border-2 border-gray-300 rounded-xl hover:border-primary-600 transition">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Itinerary - 7C: Customization */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{customItinerary.title}</h2>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{customItinerary.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{customItinerary.totalDuration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-green-600" />
                  <span>平均拥挤度: {customItinerary.avgCrowd}%</span>
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition">
              开始导航
            </button>
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            {customItinerary.stops.map((stop, index) => (
              <div key={index} className="flex gap-4">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>
                  {index < customItinerary.stops.length - 1 && (
                    <div className="w-1 flex-1 bg-primary-200 min-h-[60px] my-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-6">
                  <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-6 hover:shadow-lg transition">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">{stop.time}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{stop.location}</h3>
                        <p className="text-gray-700">{stop.activity}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        stop.crowd < 30 ? 'bg-green-100 text-green-700' :
                        stop.crowd < 60 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {stop.crowd}% 拥挤
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>🚇 {stop.transport}</span>
                      <span>⏱️ {stop.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Personalized
