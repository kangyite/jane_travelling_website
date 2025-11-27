import React, { useState } from 'react'
import { Hotel, Ticket, Search, Star, MapPin, Calendar, Users, Filter, ArrowRight, Heart, Shield, TrendingUp, Clock, ShoppingBag, Package } from 'lucide-react'

const Marketplace = () => {
  const [activeTab, setActiveTab] = useState('hotels')
  const [selectedCity, setSelectedCity] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')

  const hotels = [
    {
      id: 1,
      name: '杭州西湖国际大酒店',
      location: '杭州 · 西湖区',
      price: 588,
      rating: 4.8,
      reviews: 1234,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
      tags: ['湖景房', '免费早餐', '免费取消'],
      discount: 15
    },
    {
      id: 2,
      name: '上海外滩华尔道夫酒店',
      location: '上海 · 黄浦区',
      price: 1888,
      rating: 4.9,
      reviews: 2156,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400',
      tags: ['江景房', '豪华套房', '管家服务'],
      discount: 20
    },
    {
      id: 3,
      name: '北京颐和安缦酒店',
      location: '北京 · 海淀区',
      price: 2588,
      rating: 5.0,
      reviews: 856,
      image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400',
      tags: ['文化体验', 'SPA', '私人花园'],
      discount: 10
    },
    {
      id: 4,
      name: '成都宽窄巷子精品客栈',
      location: '成都 · 青羊区',
      price: 368,
      rating: 4.7,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400',
      tags: ['特色民宿', '地道体验', '交通便利'],
      discount: 25
    }
  ]

  const tickets = [
    {
      id: 1,
      name: '故宫博物院',
      location: '北京',
      price: 60,
      rating: 4.9,
      reviews: 15234,
      image: 'https://images.unsplash.com/photo-1683825095014-2a2f83275299?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['世界文化遗产', '必游景点', '电子票'],
      type: '文化古迹'
    },
    {
      id: 2,
      name: '上海迪士尼乐园',
      location: '上海',
      price: 399,
      rating: 4.8,
      reviews: 8765,
      image: 'https://images.unsplash.com/photo-1590144662036-33bf0ebd2c7f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['亲子游', '快速通道', '一票通玩'],
      type: '主题乐园'
    },
    {
      id: 3,
      name: '西湖游船套票',
      location: '杭州',
      price: 55,
      rating: 4.7,
      reviews: 3421,
      image: 'https://images.unsplash.com/photo-1711700320048-76fb7bed9232?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['游船观光', '含讲解', '随订随用'],
      type: '自然风光'
    },
    {
      id: 4,
      name: '张家界国家森林公园',
      location: '张家界',
      price: 228,
      rating: 4.9,
      reviews: 5678,
      image: 'https://images.unsplash.com/photo-1547605892-0da4c95beaf6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['三日通票', '索道套餐', '导游服务'],
      type: '自然风光'
    },
    {
      id: 5,
      name: '长隆野生动物世界',
      location: '广州',
      price: 300,
      rating: 4.8,
      reviews: 6543,
      image: 'https://images.unsplash.com/photo-1481695875655-fada44bb8e75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['家庭套票', '动物互动', '空中缆车'],
      type: '主题乐园'
    },
    {
      id: 6,
      name: '九寨沟风景区',
      location: '四川',
      price: 169,
      rating: 5.0,
      reviews: 4321,
      image: 'https://images.unsplash.com/photo-1622477220437-73fc1b4efe3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['世界自然遗产', '观光车票', '最佳季节'],
      type: '自然风光'
    }
  ]

  const merchandise = [
    {
      id: 1,
      name: '彳亍旅行背包',
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      sales: 2345,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
      tags: ['防水', '大容量', '轻便'],
      category: '旅行装备'
    },
    {
      id: 2,
      name: '复古胶片相机贴纸套装',
      price: 29,
      originalPrice: 49,
      rating: 4.8,
      sales: 5678,
      image: 'https://img.alicdn.com/imgextra/i4/1880614560/O1CN01Hh8pHY1jYWtDpt9yw_!!1880614560.jpg_q50s50.jpg',
      tags: ['50张装', '防水', '复古风'],
      category: '文创周边'
    },
    {
      id: 3,
      name: '旅行手账本',
      price: 68,
      originalPrice: 98,
      rating: 4.9,
      sales: 3421,
      image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400',
      tags: ['精装', '厚页', '便携'],
      category: '文创周边'
    },
    {
      id: 4,
      name: '城市徽章盲盒（10个装）',
      price: 99,
      originalPrice: 150,
      rating: 4.7,
      sales: 4123,
      image: 'https://pic.chaopx.com/chao_origin_pic/25/02/14/43ac891afeed32b6aa83e7ecc2910805.jpg!/fw/452/quality/90/unsharp/true/compress/true',
      tags: ['限定款', '收藏级', '金属材质'],
      category: '文创周边'
    },
    {
      id: 5,
      name: '彳亍帆布袋',
      price: 39,
      originalPrice: 59,
      rating: 4.6,
      sales: 6789,
      image: 'https://storage.googleapis.com/gcs.ligo.design/app/public/pic/00/08/05/39-adea9ee7f1c3a3f2-w600h600.jpg',
      tags: ['环保', '可折叠', '文艺风'],
      category: '文创周边'
    },
    {
      id: 6,
      name: '旅行照片冲印服务',
      price: 1.5,
      originalPrice: 3,
      rating: 5.0,
      sales: 12345,
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400',
      tags: ['高清', '当日达', '多种尺寸'],
      category: '照片服务',
      unit: '张'
    },
    {
      id: 7,
      name: '旅行贴纸大礼包',
      price: 45,
      originalPrice: 68,
      rating: 4.8,
      sales: 3987,
      image: 'https://img.alicdn.com/imgextra/i1/1586572195/O1CN01XJyNUV1S5MCGIqRCI_!!1586572195.jpg',
      tags: ['200+款', '防水', '多主题'],
      category: '文创周边'
    },
    {
      id: 8,
      name: '拍立得相框套装',
      price: 88,
      originalPrice: 128,
      rating: 4.9,
      sales: 2567,
      image: 'https://i5.momoshop.com.tw/1757063384/goodsimg/TP000/7702/0000/354/TP00077020000354_R1.webp',
      tags: ['20个装', '木质', '可挂墙'],
      category: '文创周边'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">彳亍商城</h1>
            <p className="text-xl text-blue-100">一站式预订酒店与景点门票，让您的旅行更便捷</p>
            <div className="mt-4 flex items-center justify-center gap-2 text-blue-100">
              <span className="text-sm">酒店与门票服务由</span>
              <span className="bg-white text-blue-600 px-4 py-1 rounded-full font-bold text-lg">携程旅行</span>
              <span className="text-sm">提供</span>
            </div>
          </div>

          {/* Tab Selection */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('hotels')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'hotels'
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'bg-blue-700 text-white hover:bg-blue-600'
              }`}
            >
              <Hotel size={20} />
              酒店预订
            </button>
            <button
              onClick={() => setActiveTab('tickets')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'tickets'
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'bg-blue-700 text-white hover:bg-blue-600'
              }`}
            >
              <Ticket size={20} />
              景点门票
            </button>
            <button
              onClick={() => setActiveTab('merchandise')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'merchandise'
                  ? 'bg-white text-blue-600 shadow-lg'
                  : 'bg-blue-700 text-white hover:bg-blue-600'
              }`}
            >
              <ShoppingBag size={20} />
              旅行周边
            </button>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            {activeTab === 'hotels' ? (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="目的地城市"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="date"
                    placeholder="入住日期"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="date"
                    placeholder="退房日期"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 font-semibold">
                  <Search size={20} />
                  搜索酒店
                </button>
              </div>
            ) : activeTab === 'tickets' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="目的地或景点名称"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="date"
                    placeholder="游玩日期"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 font-semibold">
                  <Search size={20} />
                  搜索门票
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="搜索旅行周边商品"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 font-semibold">
                  <Search size={20} />
                  搜索商品
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features Banner */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Shield className="text-blue-600" size={24} />
              <span className="text-gray-700 font-medium">正品保障</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <TrendingUp className="text-green-600" size={24} />
              <span className="text-gray-700 font-medium">超值优惠</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="text-orange-600" size={24} />
              <span className="text-gray-700 font-medium">快速出票</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Heart className="text-red-600" size={24} />
              <span className="text-gray-700 font-medium">贴心服务</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {activeTab === 'hotels' ? '热门酒店推荐' : activeTab === 'tickets' ? '热门景点门票' : '精选旅行周边'}
          </h2>
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
            <Filter size={20} />
            筛选条件
          </button>
        </div>

        {/* Hotels Grid */}
        {activeTab === 'hotels' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {hotel.discount && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-semibold text-sm">
                      限时{hotel.discount}折
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full font-bold text-blue-600 text-xs shadow-lg">
                    携程提供
                  </div>
                  <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition">
                    <Heart size={20} className="text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{hotel.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin size={16} />
                    <span className="text-sm">{hotel.location}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-800">{hotel.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{hotel.reviews}条评价</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">¥{hotel.price}</span>
                        <span className="text-sm text-gray-500 ml-1">起/晚</span>
                      </div>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition flex items-center gap-2 font-medium">
                        前往携程预订
                        <ArrowRight size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 text-center">将跳转至携程完成预订</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tickets Grid */}
        {activeTab === 'tickets' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                  <img
                    src={ticket.image}
                    alt={ticket.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full font-semibold text-sm">
                    {ticket.type}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full font-bold text-blue-600 text-xs shadow-lg">
                    携程提供
                  </div>
                  <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition">
                    <Heart size={20} className="text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{ticket.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin size={16} />
                    <span className="text-sm">{ticket.location}</span>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-800">{ticket.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{ticket.reviews}人已购</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ticket.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-orange-600">¥{ticket.price}</span>
                        <span className="text-sm text-gray-500 ml-1">起</span>
                      </div>
                      <button className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition flex items-center gap-2 font-medium">
                        前往携程购买
                        <ArrowRight size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 text-center">将跳转至携程完成购买</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Merchandise Grid */}
        {activeTab === 'merchandise' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {merchandise.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.originalPrice > item.price && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-semibold text-sm">
                      {Math.round((1 - item.price / item.originalPrice) * 100)}折
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full font-semibold text-xs">
                    {item.category}
                  </div>
                  <button className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition">
                    <Heart size={18} className="text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">{item.name}</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-800 text-sm">{item.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">已售{item.sales}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-0.5 bg-purple-50 text-purple-600 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-purple-600">¥{item.price}</span>
                        {item.originalPrice > item.price && (
                          <span className="text-xs text-gray-400 line-through">¥{item.originalPrice}</span>
                        )}
                      </div>
                      {item.unit && (
                        <span className="text-xs text-gray-500">/{item.unit}</span>
                      )}
                    </div>
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition flex items-center gap-1 font-medium text-sm">
                      <ShoppingBag size={16} />
                      购买
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">还没找到心仪的？</h2>
          <p className="text-xl text-blue-100 mb-8">联系我们的旅行顾问，为您定制专属旅行方案</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
            联系顾问
          </button>
        </div>
      </div>
    </div>
  )
}

export default Marketplace
