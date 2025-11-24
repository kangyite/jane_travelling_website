import React, { useState, useEffect } from 'react'
import { MapPin, Clock, Users, TrendingUp, TrendingDown, Minus, Calendar, MessageCircle, ThumbsUp } from 'lucide-react'

const baseLocations = [
  { id: 1, name: '外滩', district: '黄浦区', lat: 31.2397, lng: 121.4912 },
  { id: 2, name: '南京路步行街', district: '黄浦区', lat: 31.2352, lng: 121.4789 },
  { id: 3, name: '豫园', district: '黄浦区', lat: 31.2277, lng: 121.4918 },
  { id: 4, name: '田子坊', district: '黄浦区', lat: 31.2139, lng: 121.4661 },
  { id: 5, name: '上海博物馆', district: '黄浦区', lat: 31.2287, lng: 121.4741 },
  { id: 6, name: '陆家嘴', district: '浦东新区', lat: 31.2416, lng: 121.4997 },
  { id: 7, name: '东方明珠', district: '浦东新区', lat: 31.2397, lng: 121.4995 },
  { id: 8, name: '世纪公园', district: '浦东新区', lat: 31.2197, lng: 121.5531 },
  { id: 9, name: '静安寺', district: '静安区', lat: 31.2273, lng: 121.4457 },
  { id: 10, name: '新天地', district: '黄浦区', lat: 31.2197, lng: 121.4738 },
]

// User comments data - simulated real-time user feedback
const userComments = {
  1: [ // 外滩
    { user: '旅行者小王', avatar: '👨', time: '5分钟前', text: '人超级多！建议晚上8点后来，夜景更美人也少', likes: 12 },
    { user: '彳亍达人', avatar: '👩', time: '15分钟前', text: '江边风景很美，就是人多了点，要有耐心', likes: 8 },
    { user: '慢游上海', avatar: '🧑', time: '23分钟前', text: '避开周末高峰，工作日来更舒适', likes: 15 }
  ],
  2: [ // 南京路
    { user: '购物狂', avatar: '👧', time: '3分钟前', text: '现在人流量适中，可以逛街购物', likes: 6 },
    { user: '本地人', avatar: '👨', time: '10分钟前', text: '建议早上10点前来，人少很多', likes: 11 },
    { user: '游客123', avatar: '🎒', time: '28分钟前', text: '步行街很热闹，适合拍照打卡', likes: 9 }
  ],
  3: [ // 豫园
    { user: '古建筑爱好者', avatar: '👴', time: '8分钟前', text: '刚从豫园出来，人不算多，很舒适', likes: 9 },
    { user: '美食探索', avatar: '👩', time: '20分钟前', text: '南翔小笼包排队要30分钟，但真的值得', likes: 14 },
    { user: '摄影师', avatar: '📸', time: '35分钟前', text: '清晨来拍照最美，人也少', likes: 22 }
  ],
  4: [ // 田子坊
    { user: '文艺青年', avatar: '🎨', time: '12分钟前', text: '现在人流刚好，很舒适，适合慢慢逛', likes: 7 },
    { user: '咖啡爱好者', avatar: '☕', time: '18分钟前', text: '找到一家安静的咖啡馆，推荐下午来', likes: 5 },
    { user: '创意工作者', avatar: '💼', time: '42分钟前', text: '小店很有特色，可以淘到不少好东西', likes: 13 }
  ],
  5: [ // 上海博物馆
    { user: '文化爱好者', avatar: '📚', time: '6分钟前', text: '人不多，可以安静欣赏文物', likes: 10 },
    { user: '历史老师', avatar: '👨‍🏫', time: '25分钟前', text: '馆藏丰富，值得花一整天慢慢看', likes: 16 },
    { user: '学生党', avatar: '🎓', time: '40分钟前', text: '免费参观，记得提前预约', likes: 20 }
  ],
  6: [ // 陆家嘴
    { user: '商务人士', avatar: '💼', time: '4分钟前', text: '金融中心人流不少，但不拥挤', likes: 8 },
    { user: '摄影发烧友', avatar: '📷', time: '19分钟前', text: '天气好的话视野超棒', likes: 11 }
  ],
  7: [ // 东方明珠
    { user: '观光客', avatar: '🗼', time: '7分钟前', text: '顶层观景台人不多，视野很好', likes: 10 },
    { user: '夜景爱好者', avatar: '🌃', time: '30分钟前', text: '傍晚来看日落超赞，黄浦江两岸夜景美爆了', likes: 16 },
    { user: '亲子游', avatar: '👨‍👩‍👧', time: '50分钟前', text: '孩子很喜欢，建议提前买票', likes: 12 }
  ],
  8: [ // 世纪公园
    { user: '跑步爱好者', avatar: '🏃', time: '11分钟前', text: '早上来跑步很舒服，空气好人少', likes: 14 },
    { user: '遛娃达人', avatar: '👶', time: '33分钟前', text: '带孩子来野餐最合适，草坪很大', likes: 18 }
  ],
  9: [ // 静安寺
    { user: '佛教徒', avatar: '🙏', time: '9分钟前', text: '香火很旺，人流密集，建议错峰', likes: 9 },
    { user: '都市白领', avatar: '👔', time: '27分钟前', text: '午休时间来转转，心情平静', likes: 7 }
  ],
  10: [ // 新天地
    { user: '时尚达人', avatar: '👗', time: '5分钟前', text: '餐厅不用排队，可以来吃饭', likes: 8 },
    { user: '夜生活爱好者', avatar: '🍸', time: '22分钟前', text: '晚上很热闹，酒吧氛围不错', likes: 15 },
    { user: '建筑迷', avatar: '🏛️', time: '38分钟前', text: '石库门建筑很有特色，值得慢慢逛', likes: 12 }
  ]
}

// Function to generate realistic crowd data based on time and random factors
const generateCrowdData = (location) => {
  const hour = new Date().getHours()
  const dayOfWeek = new Date().getDay()
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
  
  // Base crowd level varies by location type
  let baseCrowd = Math.floor(Math.random() * 30) + 20 // 20-50 base
  
  // Peak hours increase (10am-8pm)
  if (hour >= 10 && hour <= 20) {
    baseCrowd += Math.floor(Math.random() * 30) + 10
  }
  
  // Weekend bonus
  if (isWeekend) {
    baseCrowd += Math.floor(Math.random() * 20)
  }
  
  // Cap at 100
  const crowdLevel = Math.min(100, baseCrowd)
  
  // Determine trend
  const randomTrend = Math.random()
  let trend = 'stable'
  if (randomTrend > 0.6) trend = 'up'
  else if (randomTrend < 0.3) trend = 'down'
  
  // Calculate queue time and comfort based on crowd
  const queue = Math.floor((crowdLevel / 100) * 60)
  const comfort = 100 - crowdLevel
  
  return {
    ...location,
    crowdLevel,
    trend,
    queue,
    comfort
  }
}

const getCrowdColor = (level) => {
  if (level >= 80) return 'bg-comfort-red'
  if (level >= 60) return 'bg-comfort-orange'
  if (level >= 40) return 'bg-comfort-yellow'
  return 'bg-comfort-green'
}

const getCrowdLabel = (level) => {
  if (level >= 80) return '高峰'
  if (level >= 60) return '拥挤'
  if (level >= 40) return '一般'
  return '舒适'
}

const getTrendIcon = (trend) => {
  if (trend === 'up') return <TrendingUp size={16} className="text-red-500" />
  if (trend === 'down') return <TrendingDown size={16} className="text-green-500" />
  return <Minus size={16} className="text-gray-500" />
}

const CrowdRadar = () => {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [timeView, setTimeView] = useState('now') // now, today, tomorrow
  const [mockLocations, setMockLocations] = useState([])
  const [lastUpdate, setLastUpdate] = useState(new Date())

  // Convert lat/lng to pixel position on the map
  const latLngToPosition = (lat, lng) => {
    // Map bounds for Shanghai
    const mapBounds = {
      north: 31.25,
      south: 31.20,
      east: 121.55,
      west: 121.40
    }
    
    // Calculate percentage position
    const x = ((lng - mapBounds.west) / (mapBounds.east - mapBounds.west)) * 100
    const y = ((mapBounds.north - lat) / (mapBounds.north - mapBounds.south)) * 100
    
    return { top: `${y}%`, left: `${x}%` }
  }

  // Generate initial data and update every 30 seconds
  useEffect(() => {
    const updateData = () => {
      const locations = baseLocations.map(location => {
        const position = latLngToPosition(location.lat, location.lng)
        return generateCrowdData({ ...location, position })
      })
      setMockLocations(locations)
      setLastUpdate(new Date())
    }
    
    updateData()
    const interval = setInterval(updateData, 30000) // Update every 30 seconds
    
    return () => clearInterval(interval)
  }, [])

  // Format last update time
  const getUpdateTime = () => {
    const now = new Date()
    const diff = Math.floor((now - lastUpdate) / 1000)
    if (diff < 60) return `${diff}秒前`
    const minutes = Math.floor(diff / 60)
    return `${minutes}分钟前`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            实时人潮雷达
          </h1>
          <p className="text-xl text-gray-600">现在这个景点有多挤？</p>
        </div>

        {/* Time Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-lg inline-flex">
            <button
              onClick={() => setTimeView('now')}
              className={`px-6 py-2 rounded-full transition ${
                timeView === 'now'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              现在
            </button>
            <button
              onClick={() => setTimeView('today')}
              className={`px-6 py-2 rounded-full transition ${
                timeView === 'today'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              今日趋势
            </button>
            <button
              onClick={() => setTimeView('tomorrow')}
              className={`px-6 py-2 rounded-full transition ${
                timeView === 'tomorrow'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              明日预测
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">上海热门景点</h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock size={16} />
                  <span>更新于 {getUpdateTime()}</span>
                </div>
              </div>

              {/* Legend */}
              <div className="flex gap-4 mb-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-comfort-green"></div>
                  <span className="text-sm text-gray-700">舒适 (0-39)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-comfort-yellow"></div>
                  <span className="text-sm text-gray-700">一般 (40-59)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-comfort-orange"></div>
                  <span className="text-sm text-gray-700">拥挤 (60-79)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-comfort-red"></div>
                  <span className="text-sm text-gray-700">高峰 (80-100)</span>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="relative bg-white rounded-2xl h-96 md:h-[500px] overflow-hidden border-2 border-gray-200">
                {/* Real Shanghai Map using OpenStreetMap */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=121.3600%2C31.1400%2C121.5800%2C31.3200&layer=mapnik&marker=31.2304%2C121.4737"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shanghai Map"
                ></iframe>

                {/* Overlay layer for location bubbles */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Location Bubbles - Large circles with transparency */}
                  {mockLocations.map((location) => (
                    <div
                      key={location.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-auto"
                      style={{ top: location.position.top, left: location.position.left }}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <div className="relative group">
                        {/* Large bubble with transparency */}
                        <div 
                          className={`${getCrowdColor(location.crowdLevel)} rounded-full opacity-50 transition-all duration-300 group-hover:opacity-70`}
                          style={{ 
                            width: `${60 + (location.crowdLevel * 0.8)}px`, 
                            height: `${60 + (location.crowdLevel * 0.8)}px` 
                          }}
                        ></div>
                        
                        {/* Inner circle with icon */}
                        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${getCrowdColor(location.crowdLevel)} w-10 h-10 md:w-12 md:h-12 rounded-full shadow-xl flex items-center justify-center border-2 border-white transition-transform group-hover:scale-110`}>
                          <MapPin size={20} className="text-white" />
                        </div>

                        {/* Hover Label */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block z-10 whitespace-nowrap">
                          <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm shadow-xl">
                            <div className="font-bold">{location.name}</div>
                            <div className="text-xs">{location.crowdLevel}% 拥挤</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Location List & Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-2xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-4">景点列表</h3>
              
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {mockLocations
                  .sort((a, b) => a.crowdLevel - b.crowdLevel)
                  .map((location) => (
                    <div
                      key={location.id}
                      onClick={() => setSelectedLocation(location)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-lg ${
                        selectedLocation?.id === location.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-gray-800">{location.name}</h4>
                          <p className="text-xs text-gray-500">{location.district}</p>
                        </div>
                        {getTrendIcon(location.trend)}
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`h-2 flex-1 rounded-full bg-gray-200 overflow-hidden`}>
                          <div
                            className={`h-full ${getCrowdColor(location.crowdLevel)}`}
                            style={{ width: `${location.crowdLevel}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-gray-700">{location.crowdLevel}%</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span className={`font-semibold ${
                          location.crowdLevel >= 80 ? 'text-red-600' :
                          location.crowdLevel >= 60 ? 'text-orange-600' :
                          location.crowdLevel >= 40 ? 'text-yellow-600' :
                          'text-green-600'
                        }`}>
                          {getCrowdLabel(location.crowdLevel)}
                        </span>
                        <span>排队 {location.queue}分钟</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Selected Location Details */}
        {selectedLocation && (
          <div className="mt-8 bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedLocation.name}</h2>
                <p className="text-gray-600">{selectedLocation.district}</p>
              </div>
              <button
                onClick={() => setSelectedLocation(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                <div className="text-sm text-gray-600 mb-2">拥挤指数</div>
                <div className="text-4xl font-bold text-blue-500 mb-2">{selectedLocation.crowdLevel}%</div>
                <div className={`text-sm font-semibold ${
                  selectedLocation.crowdLevel >= 80 ? 'text-red-600' :
                  selectedLocation.crowdLevel >= 60 ? 'text-orange-600' :
                  selectedLocation.crowdLevel >= 40 ? 'text-yellow-600' :
                  'text-green-600'
                }`}>
                  {getCrowdLabel(selectedLocation.crowdLevel)}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                <div className="text-sm text-gray-600 mb-2">排队时间</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{selectedLocation.queue}</div>
                <div className="text-sm text-gray-600">分钟</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
                <div className="text-sm text-gray-600 mb-2">舒适度</div>
                <div className="text-4xl font-bold text-green-600 mb-2">{selectedLocation.comfort}</div>
                <div className="text-sm text-gray-600">/ 100</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
                <div className="text-sm text-gray-600 mb-2">趋势</div>
                <div className="flex items-center justify-center mt-4">
                  {getTrendIcon(selectedLocation.trend)}
                  <span className="ml-2 text-sm font-semibold">
                    {selectedLocation.trend === 'up' ? '人流上升' : 
                     selectedLocation.trend === 'down' ? '人流下降' : '保持稳定'}
                  </span>
                </div>
              </div>
            </div>

            {/* Time Chart Preview */}
            {timeView !== 'now' && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {timeView === 'today' ? '今日拥挤度趋势' : '明日拥挤度预测'}
                </h3>
                <div className="bg-gray-50 rounded-2xl p-6 h-64 flex items-end justify-around gap-2">
                  {[65, 45, 35, 28, 32, 48, 72, 85, 92, 88, 75, 60, 45, 35, 42, 55, 68, 78, 70, 58, 48, 38, 32, 28].map((value, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-gray-200 rounded-t-lg" style={{ height: `${(value / 100) * 200}px` }}>
                        <div className={`w-full h-full rounded-t-lg ${getCrowdColor(value)}`}></div>
                      </div>
                      {index % 3 === 0 && (
                        <div className="text-xs text-gray-500 mt-2">{index}:00</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            <div className="mt-6 bg-blue-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-800 mb-3">💡 智能建议</h4>
              {selectedLocation.crowdLevel >= 80 ? (
                <p className="text-gray-700">
                  现在人潮汹涌！建议在 <span className="font-bold text-blue-500">16:00-18:00</span> 之间前往，预计拥挤度将降至 <span className="font-bold">45%</span>
                </p>
              ) : selectedLocation.crowdLevel >= 60 ? (
                <p className="text-gray-700">
                  目前较为拥挤。如果不急，建议 <span className="font-bold text-blue-500">1小时后</span> 前往会更舒适。
                </p>
              ) : (
                <p className="text-gray-700">
                  现在是游览的好时机！<span className="font-bold text-green-600">舒适度高</span>，可以尽情享受。
                </p>
              )}
            </div>

            {/* User Comments Section */}
            <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-bold text-gray-800">
                  实时用户评论
                </h3>
                <span className="ml-auto text-sm text-gray-500">
                  {userComments[selectedLocation.id]?.length || 0} 条评论
                </span>
              </div>

              <div className="space-y-4 mb-6">
                {userComments[selectedLocation.id]?.map((comment, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                    <div className="text-3xl flex-shrink-0">{comment.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-semibold text-gray-800">{comment.user}</span>
                        <span className="text-gray-400 text-sm">•</span>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <Clock className="w-3 h-3" />
                          {comment.time}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3 leading-relaxed">{comment.text}</p>
                      <button className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-500 transition-colors group">
                        <ThumbsUp className="w-4 h-4 group-hover:fill-current" />
                        <span className="font-medium">{comment.likes}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Input */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex gap-3">
                  <div className="text-2xl flex-shrink-0">😊</div>
                  <input 
                    type="text" 
                    placeholder={`分享你在${selectedLocation.name}的实时体验...`}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all font-medium shadow-lg hover:shadow-xl">
                    发送
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 ml-11">
                  💡 分享实时体验帮助其他旅行者做出更好的决策
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CrowdRadar
