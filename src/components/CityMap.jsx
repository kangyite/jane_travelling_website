import React, { useState, useEffect } from 'react'
import { MapPin, Camera, Heart, Check, Lock, Star, TrendingUp, Users, Calendar, Image, Edit3, X, ChevronLeft, ChevronRight } from 'lucide-react'

const CityMap = () => {
  const [selectedCity, setSelectedCity] = useState('shanghai')
  const [selectedSpot, setSelectedSpot] = useState(null)
  const [showCheckInModal, setShowCheckInModal] = useState(false)
  const [currentLocation, setCurrentLocation] = useState(null)
  const [checkInForm, setCheckInForm] = useState({
    photo: null,
    mood: '',
    tag: '',
    photoPreview: null
  })

  // Cities available for exploration
  const cities = [
    { id: 'shanghai', name: '上海', spots: 15, unlocked: 12, visits: 24 },
    { id: 'beijing', name: '北京', spots: 18, unlocked: 0, visits: 0 },
    { id: 'hangzhou', name: '杭州', spots: 12, unlocked: 0, visits: 0 },
    { id: 'chengdu', name: '成都', spots: 14, unlocked: 0, visits: 0 }
  ]

  // Mock spots data - Shanghai
  const shanghaiSpots = [
    {
      id: 1,
      name: '外滩',
      lat: 31.2397,
      lng: 121.4912,
      unlocked: true,
      visited: 3,
      lastVisit: '2025-11-15',
      checkIns: [
        {
          date: '2025-11-15',
          photo: '/jane_travelling_website/images/checkins/waitan1.jpg',
          mood: '夜景太美了，黄浦江两岸的灯光让人沉醉',
          tag: '惊喜',
          crowdLevel: 45
        },
        {
          date: '2025-10-20',
          photo: '/jane_travelling_website/images/checkins/waitan2.jpg',
          mood: '日落时分的外滩，金色的光洒在江面上',
          tag: '宁静',
          crowdLevel: 35
        }
      ]
    },
    {
      id: 2,
      name: '武康路',
      lat: 31.2080,
      lng: 121.4410,
      unlocked: true,
      visited: 2,
      lastVisit: '2025-11-10',
      checkIns: [
        {
          date: '2025-11-10',
          photo: '/jane_travelling_website/images/checkins/wukang1.jpg',
          mood: '清晨的武康路，老洋房在晨光中格外美',
          tag: '宁静',
          crowdLevel: 12
        },
        {
          date: '2025-09-15',
          photo: '/jane_travelling_website/images/checkins/wukang2.jpg',
          mood: '法国梧桐树下的建筑，历史感满满',
          tag: '推荐',
          crowdLevel: 15
        }
      ]
    },
    {
      id: 3,
      name: '田子坊',
      lat: 31.2139,
      lng: 121.4661,
      unlocked: true,
      visited: 1,
      lastVisit: '2025-11-08',
      checkIns: [
        {
          date: '2025-11-08',
          photo: '/jane_travelling_website/images/checkins/tianzifang1.jpg',
          mood: '文艺气息满满，找到了很多有趣的小店',
          tag: '推荐',
          crowdLevel: 30
        }
      ]
    },
    {
      id: 4,
      name: '豫园',
      lat: 31.2277,
      lng: 121.4918,
      unlocked: true,
      visited: 2,
      lastVisit: '2025-11-05',
      checkIns: [
        {
          date: '2025-11-05',
          photo: '/jane_travelling_website/images/checkins/yuyuan1.webp',
          mood: '传统建筑真的很震撑，小笼包也超好吃',
          tag: '推荐',
          crowdLevel: 55
        },
        {
          date: '2025-08-20',
          photo: '/jane_travelling_website/images/checkins/yuyuan2.jpg',
          mood: '中国古典园林的精华，亭台楼阁很精致',
          tag: '惊喜',
          crowdLevel: 48
        }
      ]
    },
    {
      id: 5,
      name: '朱家角古镇',
      lat: 31.1090,
      lng: 121.0520,
      unlocked: true,
      visited: 1,
      lastVisit: '2025-10-28',
      checkIns: [
        {
          date: '2025-10-28',
          photo: '/jane_travelling_website/images/checkins/zhujiajiao1.jpg',
          mood: '小桥流水人家，江南水乡的美好都在这里体现',
          tag: '宁静',
          crowdLevel: 18
        },
        {
          date: '2025-07-15',
          photo: '/jane_travelling_website/images/checkins/zhujiajiao2.jpg',
          mood: '清晨的薄雾，古镇像水墨画一样美',
          tag: '惊喜',
          crowdLevel: 12
        }
      ]
    },
    {
      id: 6,
      name: '新天地',
      lat: 31.2197,
      lng: 121.4738,
      unlocked: true,
      visited: 2,
      lastVisit: '2025-10-25',
      checkIns: [
        {
          date: '2025-10-25',
          photo: 'https://images.unsplash.com/photo-1574928371328-6ade73695807?w=400',
          mood: '石库门建筑群，现代与传统的完美结合',
          tag: '推荐',
          crowdLevel: 38
        }
      ]
    },
    {
      id: 7,
      name: '东方明珠',
      lat: 31.2397,
      lng: 121.4995,
      unlocked: true,
      visited: 1,
      lastVisit: '2025-10-15',
      checkIns: [
        {
          date: '2025-10-15',
          photo: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=400',
          mood: '从观景台俯瞰上海，视野震撼',
          tag: '惊喜',
          crowdLevel: 52
        }
      ]
    },
    {
      id: 8,
      name: '静安寺',
      lat: 31.2273,
      lng: 121.4457,
      unlocked: true,
      visited: 1,
      lastVisit: '2025-10-10',
      checkIns: [
        {
          date: '2025-10-10',
          photo: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400',
          mood: '金色的佛像，香火很旺，心情平静',
          tag: '宁静',
          crowdLevel: 45
        }
      ]
    },
    {
      id: 9,
      name: '南京路步行街',
      lat: 31.2352,
      lng: 121.4789,
      unlocked: true,
      visited: 3,
      lastVisit: '2025-11-12',
      checkIns: [
        {
          date: '2025-11-12',
          photo: '/jane_travelling_website/images/checkins/nanjinglu.jpg',
          mood: '华灯初上，霓虹闪烁，上海的夜很美',
          tag: '惊喜',
          crowdLevel: 68
        },
        {
          date: '2025-09-08',
          photo: '/jane_travelling_website/images/checkins/nanjinglu2.jpg',
          mood: '购物天堂，但人真的很多',
          tag: '挤爆',
          crowdLevel: 75
        }
      ]
    },
    {
      id: 10,
      name: '复兴公园',
      lat: 31.2197,
      lng: 121.4650,
      unlocked: true,
      visited: 1,
      lastVisit: '2025-10-18',
      checkIns: [
        {
          date: '2025-10-18',
          photo: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=400',
          mood: '法式园林风格，早上有很多大爷大妈打太极',
          tag: '宁静',
          crowdLevel: 22
        }
      ]
    },
    {
      id: 11,
      name: '世纪公园',
      lat: 31.2197,
      lng: 121.5531,
      unlocked: true,
      visited: 1,
      lastVisit: '2025-10-05',
      checkIns: [
        {
          date: '2025-10-05',
          photo: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400',
          mood: '大草坪很适合野餐，带孩子来放风筝',
          tag: '推荐',
          crowdLevel: 28
        }
      ]
    },
    {
      id: 12,
      name: '思南公馆',
      lat: 31.2180,
      lng: 121.4710,
      unlocked: true,
      visited: 1,
      lastVisit: '2025-09-30',
      checkIns: [
        {
          date: '2025-09-30',
          photo: 'https://images.unsplash.com/photo-1570284613060-766c33850e00?w=400',
          mood: '文化街区，历史建筑群很有味道',
          tag: '推荐',
          crowdLevel: 25
        }
      ]
    },
    // Locked spots
    {
      id: 13,
      name: '上海博物馆',
      lat: 31.2287,
      lng: 121.4741,
      unlocked: false,
      nearby: true
    },
    {
      id: 14,
      name: '陆家嘴',
      lat: 31.2416,
      lng: 121.4997,
      unlocked: false
    },
    {
      id: 15,
      name: '城隉庙',
      lat: 31.2265,
      lng: 121.4920,
      unlocked: false
    }
  ]

  // Tags for mood selection
  const moodTags = [
    { id: 'peaceful', label: '宁静', icon: '🌿', color: 'bg-green-100 text-green-700 border-green-300' },
    { id: 'crowded', label: '挤爆', icon: '🔥', color: 'bg-red-100 text-red-700 border-red-300' },
    { id: 'surprise', label: '惊喜', icon: '✨', color: 'bg-purple-100 text-purple-700 border-purple-300' },
    { id: 'recommend', label: '推荐', icon: '👍', color: 'bg-blue-100 text-blue-700 border-blue-300' }
  ]

  // Convert lat/lng to pixel position
  const latLngToPosition = (lat, lng) => {
    const mapBounds = {
      north: 31.32,
      south: 31.14,
      east: 121.58,
      west: 121.36
    }
    
    const x = ((lng - mapBounds.west) / (mapBounds.east - mapBounds.west)) * 100
    const y = ((mapBounds.north - lat) / (mapBounds.north - mapBounds.south)) * 100
    
    return { left: `${x}%`, top: `${y}%` }
  }

  // Simulate location detection
  useEffect(() => {
    // Simulate detecting nearby spot (Shanghai Museum)
    const nearbySpot = shanghaiSpots.find(spot => spot.id === 13)
    if (nearbySpot) {
      setCurrentLocation(nearbySpot)
    }
  }, [])

  const handleCheckIn = (spot) => {
    setSelectedSpot(spot)
    setShowCheckInModal(true)
    setCheckInForm({ photo: null, mood: '', tag: '', photoPreview: null })
  }

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setCheckInForm({
          ...checkInForm,
          photo: file,
          photoPreview: reader.result
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const submitCheckIn = () => {
    // In real app, this would upload to backend
    alert(`打卡成功！\n景点: ${selectedSpot.name}\n心情: ${checkInForm.mood}\n标签: ${moodTags.find(t => t.id === checkInForm.tag)?.label || '无'}`)
    setShowCheckInModal(false)
    
    // Update spot as unlocked
    if (!selectedSpot.unlocked) {
      selectedSpot.unlocked = true
      selectedSpot.visited = 1
      selectedSpot.lastVisit = new Date().toISOString().split('T')[0]
    }
  }

  const unlockedSpots = shanghaiSpots.filter(s => s.unlocked)
  const totalVisits = unlockedSpots.reduce((sum, spot) => sum + (spot.visited || 0), 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-10 h-10" />
            <h1 className="text-4xl font-bold">城市点亮地图</h1>
          </div>
          <p className="text-xl text-purple-100 max-w-3xl">
            记录每一次相遇，点亮你的旅行足迹
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* City Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {cities.map((city) => (
            <button
              key={city.id}
              onClick={() => setSelectedCity(city.id)}
              className={`p-6 rounded-2xl border-2 transition-all ${
                selectedCity === city.id
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : 'border-gray-200 hover:border-blue-300 bg-white'
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{city.name}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{city.unlocked}/{city.spots} 点亮</span>
                {city.unlocked > 0 && (
                  <span className="text-blue-500 font-semibold">{city.visits} 次</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500">{unlockedSpots.length}</div>
                <div className="text-sm text-gray-600">已点亮景点</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">{totalVisits}</div>
                <div className="text-sm text-gray-600">总访问次数</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">
                  {unlockedSpots.reduce((sum, s) => sum + (s.checkIns?.length || 0), 0)}
                </div>
                <div className="text-sm text-gray-600">打卡记录</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-600">
                  {Math.round((unlockedSpots.length / shanghaiSpots.length) * 100)}%
                </div>
                <div className="text-sm text-gray-600">城市探索率</div>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Location Alert */}
        {currentLocation && !currentLocation.unlocked && (
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-6 mb-8 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">📍 你在 {currentLocation.name} 附近！</h3>
                  <p className="text-white/90">点击打卡，点亮这个景点，留下你的足迹</p>
                </div>
              </div>
              <button
                onClick={() => handleCheckIn(currentLocation)}
                className="bg-white text-blue-500 px-8 py-3 rounded-xl font-bold hover:shadow-lg transition flex items-center gap-2"
              >
                <Camera className="w-5 h-5" />
                立即打卡
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">上海探索地图</h2>
              
              {/* Map Container */}
              <div className="relative bg-white rounded-2xl h-[600px] overflow-hidden border-2 border-gray-200">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=121.3600%2C31.1400%2C121.5800%2C31.3200&layer=mapnik&marker=31.2304%2C121.4737"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shanghai Map"
                ></iframe>

                {/* Spots Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {shanghaiSpots.map((spot) => {
                    const position = latLngToPosition(spot.lat, spot.lng)
                    return (
                      <div
                        key={spot.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-auto group"
                        style={{ top: position.top, left: position.left }}
                        onClick={() => spot.unlocked ? setSelectedSpot(spot) : handleCheckIn(spot)}
                      >
                        {spot.unlocked ? (
                          // Unlocked spot - glowing pin
                          <div className="relative">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                              <Check className="w-5 h-5 text-white" />
                            </div>
                            {spot.visited > 1 && (
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                                {spot.visited}
                              </div>
                            )}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block z-10 whitespace-nowrap">
                              <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm shadow-xl">
                                <div className="font-bold">{spot.name}</div>
                                <div className="text-xs">点击查看打卡记录</div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          // Locked spot - gray pin
                          <div className="relative">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center shadow-lg">
                              <Lock className="w-4 h-4 text-gray-500" />
                            </div>
                            {spot.nearby && (
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                            )}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block z-10 whitespace-nowrap">
                              <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm shadow-xl">
                                <div className="font-bold">{spot.name}</div>
                                <div className="text-xs">
                                  {spot.nearby ? '📍 你在附近！点击打卡' : '🔒 待解锁'}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Spots List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-2xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-4">我的足迹</h3>
              
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {shanghaiSpots
                  .filter(s => s.unlocked)
                  .sort((a, b) => new Date(b.lastVisit) - new Date(a.lastVisit))
                  .map((spot) => (
                    <div
                      key={spot.id}
                      onClick={() => setSelectedSpot(spot)}
                      className="p-4 rounded-xl border-2 border-blue-200 bg-blue-50 cursor-pointer hover:shadow-lg transition group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 group-hover:text-blue-500 transition">
                            {spot.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            最近访问 {spot.lastVisit}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-blue-500">
                            ×{spot.visited}
                          </span>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition" />
                        </div>
                      </div>
                      
                      {spot.checkIns && spot.checkIns.length > 0 && (
                        <div className="mt-3 flex gap-2 overflow-x-auto">
                          {spot.checkIns.slice(0, 3).map((checkIn, idx) => (
                            <div key={idx} className="flex-shrink-0 w-16 h-16 bg-white rounded-lg overflow-hidden shadow-sm">
                              <img 
                                src={checkIn.photo} 
                                alt="打卡照片" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                
                {/* Locked spots */}
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">待解锁景点</h4>
                  {shanghaiSpots
                    .filter(s => !s.unlocked)
                    .slice(0, 3)
                    .map((spot) => (
                      <div
                        key={spot.id}
                        className="p-3 rounded-lg bg-gray-50 mb-2 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <Lock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{spot.name}</span>
                        </div>
                        {spot.nearby && (
                          <button
                            onClick={() => handleCheckIn(spot)}
                            className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full font-semibold hover:bg-blue-600"
                          >
                            打卡
                          </button>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Spot Detail Modal */}
        {selectedSpot && selectedSpot.unlocked && !showCheckInModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedSpot.name}</h2>
                  <div className="flex items-center gap-4 text-sm">
                    <span>访问 {selectedSpot.visited} 次</span>
                    <span>•</span>
                    <span>最近 {selectedSpot.lastVisit}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSpot(null)}
                  className="text-white/80 hover:text-white transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Check-ins */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">打卡记录</h3>
                  <button
                    onClick={() => {
                      setShowCheckInModal(true)
                    }}
                    className="bg-blue-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-600 transition flex items-center gap-2"
                  >
                    <Camera className="w-5 h-5" />
                    再次打卡
                  </button>
                </div>

                {selectedSpot.checkIns && selectedSpot.checkIns.length > 0 ? (
                  <div className="space-y-6">
                    {selectedSpot.checkIns.map((checkIn, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-2xl p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                            <img 
                              src={checkIn.photo} 
                              alt="打卡照片" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="w-4 h-4 text-gray-500" />
                              <span className="text-sm text-gray-600">{checkIn.date}</span>
                              <span className={`ml-auto px-3 py-1 rounded-full text-sm font-semibold ${
                                moodTags.find(t => t.label === checkIn.tag)?.color || 'bg-gray-100 text-gray-700'
                              }`}>
                                {moodTags.find(t => t.label === checkIn.tag)?.icon} {checkIn.tag}
                              </span>
                            </div>
                            <p className="text-gray-800 leading-relaxed mb-3">
                              {checkIn.mood}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Users className="w-4 h-4" />
                              <span>拥挤度 {checkIn.crowdLevel}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Camera className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p>还没有打卡记录，点击上方按钮开始记录</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Check-in Modal */}
        {showCheckInModal && selectedSpot && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 flex items-center justify-between rounded-t-3xl">
                <div className="flex items-center gap-3">
                  <Camera className="w-8 h-8" />
                  <div>
                    <h2 className="text-2xl font-bold">打卡 {selectedSpot.name}</h2>
                    <p className="text-sm text-white/80">记录这一刻的感受</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowCheckInModal(false)}
                  className="text-white/80 hover:text-white transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Form */}
              <div className="p-6 space-y-6">
                {/* Photo Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    📸 上传照片（可选）
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-500 transition cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                      id="photo-upload"
                    />
                    <label htmlFor="photo-upload" className="cursor-pointer">
                      {checkInForm.photoPreview ? (
                        <img
                          src={checkInForm.photoPreview}
                          alt="Preview"
                          className="max-h-48 mx-auto rounded-lg"
                        />
                      ) : (
                        <div>
                          <Image className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                          <p className="text-gray-600">点击上传照片</p>
                          <p className="text-sm text-gray-400 mt-1">支持 JPG, PNG 格式</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Mood Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    ✍️ 当下心情
                  </label>
                  <textarea
                    value={checkInForm.mood}
                    onChange={(e) => setCheckInForm({ ...checkInForm, mood: e.target.value })}
                    placeholder="写下你此刻的感受..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows="4"
                  />
                </div>

                {/* Tag Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    🏷️ 选择标签
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {moodTags.map((tag) => (
                      <button
                        key={tag.id}
                        onClick={() => setCheckInForm({ ...checkInForm, tag: tag.id })}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          checkInForm.tag === tag.id
                            ? tag.color + ' border-current shadow-lg'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-3xl mb-2">{tag.icon}</div>
                        <div className="font-semibold">{tag.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={submitCheckIn}
                  disabled={!checkInForm.mood || !checkInForm.tag}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Check className="w-6 h-6" />
                  完成打卡
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CityMap

