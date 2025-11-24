import React, { useState, useEffect } from 'react'
import { MapPin, Navigation, Search, TrendingUp } from 'lucide-react'

const chineseCities = [
  { 
    id: 1, 
    name: '上海', 
    nameEn: 'Shanghai',
    lat: 31.2304, 
    lng: 121.4737,
    popularSpots: 10,
    avgCrowd: 65
  },
  { 
    id: 2, 
    name: '北京', 
    nameEn: 'Beijing',
    lat: 39.9042, 
    lng: 116.4074,
    popularSpots: 15,
    avgCrowd: 72
  },
  { 
    id: 3, 
    name: '重庆', 
    nameEn: 'Chongqing',
    lat: 29.5630, 
    lng: 106.5516,
    popularSpots: 8,
    avgCrowd: 58
  },
  { 
    id: 4, 
    name: '成都', 
    nameEn: 'Chengdu',
    lat: 30.5728, 
    lng: 104.0668,
    popularSpots: 12,
    avgCrowd: 55
  },
  { 
    id: 5, 
    name: '广州', 
    nameEn: 'Guangzhou',
    lat: 23.1291, 
    lng: 113.2644,
    popularSpots: 9,
    avgCrowd: 68
  },
  { 
    id: 6, 
    name: '深圳', 
    nameEn: 'Shenzhen',
    lat: 22.5431, 
    lng: 114.0579,
    popularSpots: 7,
    avgCrowd: 70
  },
  { 
    id: 7, 
    name: '杭州', 
    nameEn: 'Hangzhou',
    lat: 30.2741, 
    lng: 120.1551,
    popularSpots: 11,
    avgCrowd: 62
  },
  { 
    id: 8, 
    name: '西安', 
    nameEn: "Xi'an",
    lat: 34.3416, 
    lng: 108.9398,
    popularSpots: 10,
    avgCrowd: 66
  },
  { 
    id: 9, 
    name: '南京', 
    nameEn: 'Nanjing',
    lat: 32.0603, 
    lng: 118.7969,
    popularSpots: 8,
    avgCrowd: 60
  },
  { 
    id: 10, 
    name: '苏州', 
    nameEn: 'Suzhou',
    lat: 31.2989, 
    lng: 120.5853,
    popularSpots: 7,
    avgCrowd: 57
  },
  { 
    id: 11, 
    name: '乌鲁木齐', 
    nameEn: 'Urumqi',
    lat: 43.8256, 
    lng: 87.6168,
    popularSpots: 6,
    avgCrowd: 45
  },
  { 
    id: 12, 
    name: '哈尔滨', 
    nameEn: 'Harbin',
    lat: 45.8038, 
    lng: 126.5340,
    popularSpots: 9,
    avgCrowd: 52
  },
  { 
    id: 13, 
    name: '昆明', 
    nameEn: 'Kunming',
    lat: 25.0406, 
    lng: 102.7129,
    popularSpots: 8,
    avgCrowd: 54
  },
  { 
    id: 14, 
    name: '武汉', 
    nameEn: 'Wuhan',
    lat: 30.5928, 
    lng: 114.3055,
    popularSpots: 10,
    avgCrowd: 63
  },
  { 
    id: 16, 
    name: '长沙', 
    nameEn: 'Changsha',
    lat: 28.2282, 
    lng: 112.9388,
    popularSpots: 7,
    avgCrowd: 59
  },
  { 
    id: 17, 
    name: '厦门', 
    nameEn: 'Xiamen',
    lat: 24.4798, 
    lng: 118.0894,
    popularSpots: 9,
    avgCrowd: 67
  },
  { 
    id: 18, 
    name: '青岛', 
    nameEn: 'Qingdao',
    lat: 36.0671, 
    lng: 120.3826,
    popularSpots: 8,
    avgCrowd: 64
  },
  { 
    id: 19, 
    name: '大连', 
    nameEn: 'Dalian',
    lat: 38.9140, 
    lng: 121.6147,
    popularSpots: 6,
    avgCrowd: 56
  },
  { 
    id: 20, 
    name: '拉萨', 
    nameEn: 'Lhasa',
    lat: 29.6520, 
    lng: 91.1721,
    popularSpots: 7,
    avgCrowd: 42
  },
]

const getCrowdColor = (level) => {
  if (level >= 70) return 'bg-red-500'
  if (level >= 60) return 'bg-orange-500'
  if (level >= 50) return 'bg-yellow-500'
  return 'bg-green-500'
}

const getCrowdColorText = (level) => {
  if (level >= 70) return 'text-red-600'
  if (level >= 60) return 'text-orange-600'
  if (level >= 50) return 'text-yellow-600'
  return 'text-green-600'
}

const ChinaMap = () => {
  const [selectedCity, setSelectedCity] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [cities, setCities] = useState(chineseCities)
  const [trendView, setTrendView] = useState('24h') // '24h' or '7d'

  // Convert lat/lng to pixel position on the China map
  const latLngToPosition = (lat, lng) => {
    // Map bounds for China view
    const mapBounds = {
      north: 53.5,
      south: 18.0,
      east: 135.0,
      west: 73.5
    }
    
    // Calculate percentage position
    const x = ((lng - mapBounds.west) / (mapBounds.east - mapBounds.west)) * 100
    const y = ((mapBounds.north - lat) / (mapBounds.north - mapBounds.south)) * 100
    
    return { top: `${y}%`, left: `${x}%` }
  }

  useEffect(() => {
    // Update city positions based on actual coordinates
    const citiesWithPositions = chineseCities.map(city => ({
      ...city,
      position: latLngToPosition(city.lat, city.lng)
    }))
    setCities(citiesWithPositions)

    // Simulate real-time updates
    const interval = setInterval(() => {
      setCities(prevCities => 
        prevCities.map(city => ({
          ...city,
          avgCrowd: Math.min(100, Math.max(20, city.avgCrowd + (Math.random() * 10 - 5)))
        }))
      )
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  const filteredCities = cities.filter(city => 
    city.name.includes(searchTerm) || city.nameEn.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            全国城市热度地图
          </h1>
          <p className="text-xl text-gray-600">探索中国各大城市的实时人流情况</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="搜索城市..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-primary-600 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* China Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">中国地图</h2>
              
              {/* Map Container */}
              <div className="relative bg-white rounded-2xl h-[500px] md:h-[600px] overflow-hidden border-2 border-gray-200">
                {/* Real China Map using OpenStreetMap */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=73.5000%2C18.0000%2C135.0000%2C53.5000&layer=mapnik"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="China Map"
                ></iframe>

                {/* Overlay layer for city markers */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* City Markers */}
                  {filteredCities.map((city) => {
                    const position = city.position || latLngToPosition(city.lat, city.lng)
                    return (
                      <div
                        key={city.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-auto"
                        style={{ top: position.top, left: position.left }}
                        onClick={() => setSelectedCity(city)}
                      >
                        <div className="relative group">
                          {/* Outer glow */}
                          <div 
                            className={`${getCrowdColor(city.avgCrowd)} rounded-full opacity-40 transition-all duration-300 group-hover:opacity-60`}
                            style={{ 
                              width: `${50 + (city.avgCrowd * 0.5)}px`, 
                              height: `${50 + (city.avgCrowd * 0.5)}px` 
                            }}
                          ></div>
                          
                          {/* City marker */}
                          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${getCrowdColor(city.avgCrowd)} rounded-full shadow-xl border-3 border-white transition-transform group-hover:scale-125`}
                               style={{ width: '40px', height: '40px' }}>
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                          </div>

                          {/* City label */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap pointer-events-none">
                            <div className={`text-sm font-bold bg-white/90 px-2 py-1 rounded shadow-lg ${selectedCity?.id === city.id ? 'text-primary-600' : 'text-gray-700'}`}>
                              {city.name}
                            </div>
                          </div>

                          {/* Hover tooltip */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                            <div className="bg-gray-900 text-white px-4 py-3 rounded-lg text-sm shadow-xl whitespace-nowrap">
                              <div className="font-bold text-base">{city.name}</div>
                              <div className="text-xs mt-1">平均拥挤度: {Math.round(city.avgCrowd)}%</div>
                              <div className="text-xs">{city.popularSpots} 个热门景点</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Map Legend */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg pointer-events-none">
                  <div className="text-xs font-bold text-gray-700 mb-2">拥挤度</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs text-gray-600">舒适 (50以下)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-xs text-gray-600">一般 (50-59)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      <span className="text-xs text-gray-600">拥挤 (60-69)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span className="text-xs text-gray-600">高峰 (70+)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* City List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-2xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp size={24} className="text-primary-600" />
                城市排行
              </h3>
              
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {cities
                  .sort((a, b) => b.avgCrowd - a.avgCrowd)
                  .map((city, index) => (
                    <div
                      key={city.id}
                      onClick={() => setSelectedCity(city)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-lg ${
                        selectedCity?.id === city.id
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl font-bold text-gray-400">#{index + 1}</div>
                          <div>
                            <h4 className="font-bold text-gray-800">{city.name}</h4>
                            <p className="text-xs text-gray-500">{city.popularSpots} 个景点</p>
                          </div>
                        </div>
                        <Navigation size={16} className="text-primary-600" />
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-2 flex-1 rounded-full bg-gray-200 overflow-hidden">
                          <div
                            className={`h-full ${getCrowdColor(city.avgCrowd)}`}
                            style={{ width: `${city.avgCrowd}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-gray-700">{Math.round(city.avgCrowd)}%</span>
                      </div>
                      
                      <div className={`text-xs font-semibold ${getCrowdColorText(city.avgCrowd)}`}>
                        {city.avgCrowd >= 70 ? '高峰期' : 
                         city.avgCrowd >= 60 ? '较拥挤' :
                         city.avgCrowd >= 50 ? '一般' : '舒适'}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Selected City Details */}
        {selectedCity && (
          <div className="mt-8 bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedCity.name}</h2>
                <p className="text-gray-600">{selectedCity.nameEn}</p>
              </div>
              <button
                onClick={() => setSelectedCity(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 text-center">
                <div className="text-sm text-gray-600 mb-2">平均拥挤度</div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{Math.round(selectedCity.avgCrowd)}%</div>
                <div className={`text-sm font-semibold ${getCrowdColorText(selectedCity.avgCrowd)}`}>
                  {selectedCity.avgCrowd >= 70 ? '高峰期' : 
                   selectedCity.avgCrowd >= 60 ? '较拥挤' :
                   selectedCity.avgCrowd >= 50 ? '一般' : '舒适'}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                <div className="text-sm text-gray-600 mb-2">热门景点</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{selectedCity.popularSpots}</div>
                <div className="text-sm text-gray-600">个</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
                <div className="text-sm text-gray-600 mb-2">舒适度</div>
                <div className="text-4xl font-bold text-green-600 mb-2">{Math.round(100 - selectedCity.avgCrowd)}</div>
                <div className="text-sm text-gray-600">/ 100</div>
              </div>
            </div>

            {/* Trend Chart */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800">📊 拥挤度趋势</h3>
                
                {/* Toggle buttons */}
                <div className="bg-white rounded-full p-1 shadow-md inline-flex border border-gray-200">
                  <button
                    onClick={() => setTrendView('24h')}
                    className={`px-4 py-2 rounded-full transition text-sm font-semibold ${
                      trendView === '24h'
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    24小时
                  </button>
                  <button
                    onClick={() => setTrendView('7d')}
                    className={`px-4 py-2 rounded-full transition text-sm font-semibold ${
                      trendView === '7d'
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    本周
                  </button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
                {trendView === '24h' ? (
                  // 24 Hour View
                  <div>
                    <div className="flex items-end justify-between gap-1 h-64 bg-white rounded-lg p-4">
                      {(() => {
                        const hourlyData = []
                        const currentHour = new Date().getHours()
                        const baseLevel = selectedCity.avgCrowd
                        
                        for (let i = 0; i < 24; i++) {
                          let crowdLevel = baseLevel
                          
                          // Morning rush (7-9am)
                          if (i >= 7 && i <= 9) crowdLevel += Math.random() * 15 + 10
                          // Lunch time (11am-1pm)
                          else if (i >= 11 && i <= 13) crowdLevel += Math.random() * 20 + 15
                          // Evening peak (5-8pm)
                          else if (i >= 17 && i <= 20) crowdLevel += Math.random() * 25 + 20
                          // Night time (11pm-6am)
                          else if (i >= 23 || i <= 6) crowdLevel -= Math.random() * 30 + 20
                          // Other times
                          else crowdLevel += (Math.random() - 0.5) * 20
                          
                          hourlyData.push(Math.max(10, Math.min(100, crowdLevel)))
                        }
                        
                        return hourlyData.map((value, index) => {
                          const isCurrentHour = index === currentHour
                          let barColor = 'bg-green-500'
                          if (value >= 70) barColor = 'bg-red-500'
                          else if (value >= 60) barColor = 'bg-orange-500'
                          else if (value >= 50) barColor = 'bg-yellow-500'
                          
                          const heightPercent = (value / 100) * 220 // 220px max height
                          
                          return (
                            <div key={index} className="flex-1 flex flex-col items-center justify-end group relative min-w-[1px]">
                              {/* Bar */}
                              <div 
                                className={`w-full ${barColor} rounded-t transition-all hover:opacity-80 relative ${isCurrentHour ? 'ring-2 ring-primary-600 ring-offset-1' : ''}`}
                                style={{ height: `${heightPercent}px`, minHeight: '10px' }}
                              >
                                {isCurrentHour && (
                                  <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap font-semibold">
                                    现在
                                  </div>
                                )}
                              </div>
                              
                              {/* Tooltip on hover */}
                              <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center z-20">
                                <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded shadow-xl whitespace-nowrap">
                                  <div className="font-bold">{index}:00</div>
                                  <div>{Math.round(value)}% 拥挤度</div>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      })()}
                    </div>
                    {/* Time labels */}
                    <div className="flex justify-between mt-3 px-4">
                      {[0, 3, 6, 9, 12, 15, 18, 21].map(hour => (
                        <div key={hour} className="text-sm text-gray-600 font-medium">
                          {hour}:00
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // 7 Day View
                  <div>
                    <div className="flex items-end justify-around gap-6 h-64 bg-white rounded-lg p-4">
                      {(() => {
                        const weekDays = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        const today = new Date().getDay()
                        const adjustedToday = today === 0 ? 6 : today - 1
                        const baseLevel = selectedCity.avgCrowd
                        
                        return weekDays.map((day, index) => {
                          const isToday = index === adjustedToday
                          let crowdLevel = baseLevel
                          
                          // Weekend is busier
                          if (index >= 5) {
                            crowdLevel += Math.random() * 15 + 10
                          } else {
                            crowdLevel += (Math.random() - 0.5) * 15
                          }
                          
                          const value = Math.max(20, Math.min(100, crowdLevel))
                          let barColor = 'bg-green-500'
                          if (value >= 70) barColor = 'bg-red-500'
                          else if (value >= 60) barColor = 'bg-orange-500'
                          else if (value >= 50) barColor = 'bg-yellow-500'
                          
                          const heightPercent = (value / 100) * 220
                          
                          return (
                            <div key={index} className="flex-1 flex flex-col items-center justify-end group relative">
                              {/* Bar */}
                              <div 
                                className={`w-full ${barColor} rounded-t transition-all hover:opacity-80 relative ${isToday ? 'ring-2 ring-primary-600 ring-offset-1' : ''}`}
                                style={{ height: `${heightPercent}px`, minHeight: '20px' }}
                              >
                                {isToday && (
                                  <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap font-semibold">
                                    今天
                                  </div>
                                )}
                              </div>
                              
                              {/* Tooltip on hover */}
                              <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center z-20">
                                <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded shadow-xl whitespace-nowrap">
                                  <div className="font-bold">{day}</div>
                                  <div>平均 {Math.round(value)}%</div>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      })()}
                    </div>
                    {/* Day labels */}
                    <div className="flex justify-around mt-3 px-4">
                      {['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map((day, index) => {
                        const today = new Date().getDay()
                        const adjustedToday = today === 0 ? 6 : today - 1
                        const isToday = index === adjustedToday
                        return (
                          <div key={day} className={`text-sm ${isToday ? 'font-bold text-primary-600' : 'text-gray-600'}`}>
                            {day}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Best Time Recommendation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  最佳出行时间推荐
                </h4>
                {(() => {
                  const currentHour = new Date().getHours()
                  let bestTime = ''
                  let reason = ''
                  
                  if (selectedCity.avgCrowd >= 70) {
                    if (currentHour >= 17) {
                      bestTime = '明天早上 7:00-9:00'
                      reason = '清晨人流较少，适合游览'
                    } else if (currentHour >= 12) {
                      bestTime = '今天 21:00-22:00'
                      reason = '晚间人潮散去，舒适度高'
                    } else {
                      bestTime = '今天 14:00-16:00'
                      reason = '下午时段相对舒适'
                    }
                  } else if (selectedCity.avgCrowd >= 60) {
                    bestTime = '今天 15:00-17:00'
                    reason = '下午茶时段，人流适中'
                  } else if (selectedCity.avgCrowd >= 50) {
                    bestTime = '现在'
                    reason = '当前人流适中，可以出发'
                  } else {
                    bestTime = '现在'
                    reason = '人流较少，是游览的好时机！'
                  }
                  
                  return (
                    <div>
                      <div className="text-3xl font-bold text-green-700 mb-2">{bestTime}</div>
                      <p className="text-gray-700">{reason}</p>
                      <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        预计舒适度: 85%
                      </div>
                    </div>
                  )
                })()}
              </div>

              {/* Peak Avoidance Alert */}
              <div className={`${selectedCity.avgCrowd >= 70 ? 'bg-gradient-to-br from-red-50 to-orange-100' : 'bg-gradient-to-br from-blue-50 to-indigo-100'} rounded-2xl p-6`}>
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-2xl">{selectedCity.avgCrowd >= 70 ? '⚠️' : '📢'}</span>
                  避峰提醒
                </h4>
                {(() => {
                  if (selectedCity.avgCrowd >= 70) {
                    return (
                      <div>
                        <div className="text-lg font-bold text-red-700 mb-2">高峰期警告</div>
                        <p className="text-gray-700 mb-3">
                          当前{selectedCity.name}处于高峰期，建议避开以下时段：
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <span className="text-red-500">●</span>
                            12:00-14:00（午餐高峰）
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-red-500">●</span>
                            18:00-20:00（晚餐高峰）
                          </li>
                        </ul>
                      </div>
                    )
                  } else if (selectedCity.avgCrowd >= 60) {
                    return (
                      <div>
                        <div className="text-lg font-bold text-orange-700 mb-2">较为拥挤</div>
                        <p className="text-gray-700">
                          建议避开 12:00-13:00 和 18:00-19:00 用餐高峰时段，其他时间相对舒适。
                        </p>
                      </div>
                    )
                  } else {
                    return (
                      <div>
                        <div className="text-lg font-bold text-blue-700 mb-2">舒适出行</div>
                        <p className="text-gray-700 mb-3">
                          当前{selectedCity.name}人流适中，是游览的好时机！
                        </p>
                        <div className="bg-white/60 rounded-lg p-3 text-sm text-gray-700">
                          💡 小贴士：建议提前预定热门景点门票，避免现场排队。
                        </div>
                      </div>
                    )
                  }
                })()}
              </div>
            </div>

            <div className="mt-6 bg-primary-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-800 mb-3">📍 查看{selectedCity.name}详细景点</h4>
              <a 
                href="/crowd-radar"
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition font-semibold"
              >
                进入 {selectedCity.name} 人潮雷达
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChinaMap
