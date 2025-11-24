import React, { useState } from 'react'
import { MapPin, Clock, TrendingDown, Navigation, Calendar, Users, Coffee, Camera, Sun, Moon, Star, Heart, Share2, ChevronRight, Info, Sparkles, Send, X } from 'lucide-react'

const Routes = () => {
  const [selectedRoute, setSelectedRoute] = useState(null)
  const [filter, setFilter] = useState('all') // all, morning, afternoon, weekend
  const [showAIChat, setShowAIChat] = useState(false)
  const [chatMessages, setChatMessages] = useState([])
  const [userInput, setUserInput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  // Recommended routes based on crowd avoidance
  const recommendedRoutes = [
    {
      id: 1,
      name: '清晨文艺之旅',
      subtitle: '避开人潮，感受老上海韵味',
      duration: '4小时',
      distance: '8.5公里',
      avgCrowd: 18,
      comfortScore: 94,
      bestTime: '周二-周四 07:00-11:00',
      difficulty: '轻松',
      type: 'morning',
      totalStops: 4,
      highlights: ['建筑摄影', '咖啡文化', '历史街区'],
      image: '🌅',
      color: 'from-orange-400 to-pink-500',
      saves: 1234,
      reviews: 456,
      rating: 4.9,
      stops: [
        {
          order: 1,
          name: '武康路',
          time: '07:00-08:30',
          duration: '1.5小时',
          activity: '建筑摄影 & 晨间散步',
          crowd: 12,
          comfort: 96,
          description: '清晨的武康路静谧美好，老洋房在晨光中格外动人',
          tips: ['携带广角镜头', '建议7点前到达', '避开周末'],
          photos: ['🏛️', '🍂', '☀️'],
          transport: { type: '地铁', line: '10号线', station: '交通大学站', exit: '1号口', time: '5分钟' }
        },
        {
          order: 2,
          name: 'Manner Coffee (武康路店)',
          time: '08:30-09:15',
          duration: '45分钟',
          activity: '精品咖啡 & 休息',
          crowd: 20,
          comfort: 88,
          description: '上海最具特色的精品咖啡店之一，性价比超高',
          tips: ['推荐美式咖啡', '可外带边走边喝', '避开9-10点高峰'],
          photos: ['☕', '🥐', '📸'],
          transport: { type: '步行', time: '3分钟' }
        },
        {
          order: 3,
          name: '复兴公园',
          time: '09:30-10:30',
          duration: '1小时',
          activity: '公园散步 & 观察当地生活',
          crowd: 15,
          comfort: 92,
          description: '法式园林风格，晨练的市民和悠闲的氛围',
          tips: ['适合慢慢闲逛', '观察太极拳', '绿荫环绕'],
          photos: ['🌳', '🦢', '🎋'],
          transport: { type: '步行', time: '8分钟' }
        },
        {
          order: 4,
          name: '新天地',
          time: '10:45-11:30',
          duration: '45分钟',
          activity: '石库门建筑观赏',
          crowd: 25,
          comfort: 82,
          description: '上午时段游客较少，可以安静欣赏石库门建筑',
          tips: ['中午前游客稀少', '适合建筑摄影', '周边有特色餐厅'],
          photos: ['🏘️', '🎨', '🏮'],
          transport: { type: '步行', time: '6分钟' }
        }
      ]
    },
    {
      id: 2,
      name: '江南水乡古镇游',
      subtitle: '工作日独享宁静时光',
      duration: '6小时',
      distance: '32公里',
      avgCrowd: 15,
      comfortScore: 96,
      bestTime: '周一-周四 08:00-14:00',
      difficulty: '轻松',
      type: 'morning',
      totalStops: 3,
      highlights: ['古镇风情', '水乡摄影', '地道美食'],
      image: '🛶',
      color: 'from-blue-400 to-cyan-500',
      saves: 2156,
      reviews: 789,
      rating: 4.8,
      stops: [
        {
          order: 1,
          name: '朱家角古镇',
          time: '08:00-12:00',
          duration: '4小时',
          activity: '古镇游览 & 摄影',
          crowd: 12,
          comfort: 97,
          description: '清晨的朱家角如同水墨画，小桥流水人家的意境完美呈现',
          tips: ['7-8点最佳拍摄时间', '薄雾中最有意境', '建议前一晚入住'],
          photos: ['🌉', '🚣', '🏮'],
          transport: { type: '地铁+公交', line: '17号线', station: '朱家角站', time: '1小时' }
        },
        {
          order: 2,
          name: '阿婆粽子店',
          time: '12:00-13:00',
          duration: '1小时',
          activity: '品尝地道江南美食',
          crowd: 18,
          comfort: 90,
          description: '当地人推荐的老字号，粽子和扎肉都是一绝',
          tips: ['中午前人少', '推荐扎肉粽', '可打包带走'],
          photos: ['🍜', '🥟', '😋'],
          transport: { type: '步行', time: '5分钟' }
        },
        {
          order: 3,
          name: '课植园',
          time: '13:00-14:00',
          duration: '1小时',
          activity: '私家园林参观',
          crowd: 15,
          comfort: 95,
          description: '江南古典园林，下午时段游客很少',
          tips: ['避开上午高峰', '园林摄影佳地', '需门票20元'],
          photos: ['🏯', '🎋', '🌸'],
          transport: { type: '步行', time: '10分钟' }
        }
      ]
    },
    {
      id: 3,
      name: '黄浦江畔日落之旅',
      subtitle: '傍晚避峰观赏最美天际线',
      duration: '3.5小时',
      distance: '6公里',
      avgCrowd: 42,
      comfortScore: 72,
      bestTime: '工作日 16:00-19:30',
      difficulty: '轻松',
      type: 'afternoon',
      totalStops: 3,
      highlights: ['日落摄影', '城市天际线', '夜景'],
      image: '🌆',
      color: 'from-purple-400 to-indigo-500',
      saves: 1876,
      reviews: 623,
      rating: 4.7,
      stops: [
        {
          order: 1,
          name: '陆家嘴滨江大道',
          time: '16:00-17:30',
          duration: '1.5小时',
          activity: '江边散步 & 城市观景',
          crowd: 35,
          comfort: 78,
          description: '下午时段人流适中，可以舒适地欣赏浦西建筑群',
          tips: ['避开周末', '找好拍摄机位', '提前到达占位'],
          photos: ['🏙️', '🌉', '📸'],
          transport: { type: '地铁', line: '2号线', station: '陆家嘴站', exit: '1号口', time: '5分钟' }
        },
        {
          order: 2,
          name: '外滩',
          time: '17:30-18:30',
          duration: '1小时',
          activity: '日落观赏 & 拍摄',
          crowd: 48,
          comfort: 68,
          description: '日落时分是一天中最美的时刻，金色光线洒满黄浦江',
          tips: ['提前30分钟到达', '找好机位很重要', '使用三脚架'],
          photos: ['🌅', '🏛️', '✨'],
          transport: { type: '轮渡', line: '东金线', time: '10分钟' }
        },
        {
          order: 3,
          name: '南京路步行街',
          time: '18:30-19:30',
          duration: '1小时',
          activity: '夜景观赏 & 购物',
          crowd: 45,
          comfort: 70,
          description: '华灯初上，霓虹闪烁，感受上海的都市繁华',
          tips: ['晚上人流较大', '注意保管财物', '可购买伴手礼'],
          photos: ['🌃', '🛍️', '🎆'],
          transport: { type: '步行', time: '5分钟' }
        }
      ]
    },
    {
      id: 4,
      name: '周末亲子欢乐游',
      subtitle: '精选人少时段，全家舒适出行',
      duration: '5小时',
      distance: '15公里',
      avgCrowd: 38,
      comfortScore: 75,
      bestTime: '周末 08:00-13:00',
      difficulty: '适中',
      type: 'weekend',
      totalStops: 4,
      highlights: ['亲子互动', '自然探索', '科普教育'],
      image: '👨‍👩‍👧',
      color: 'from-green-400 to-emerald-500',
      saves: 1567,
      reviews: 534,
      rating: 4.6,
      stops: [
        {
          order: 1,
          name: '世纪公园',
          time: '08:00-10:00',
          duration: '2小时',
          activity: '草坪野餐 & 户外活动',
          crowd: 30,
          comfort: 82,
          description: '清晨的公园空气清新，孩子可以自由奔跑',
          tips: ['带野餐垫和零食', '早上人少舒适', '注意防晋'],
          photos: ['🌳', '🎈', '⚽'],
          transport: { type: '地铁', line: '2号线', station: '世纪公园站', time: '5分钟' }
        },
        {
          order: 2,
          name: '上海科技馆',
          time: '10:30-12:30',
          duration: '2小时',
          activity: '科普展览 & 互动体验',
          crowd: 45,
          comfort: 70,
          description: '提前预约可避开高峰，孩子可以参与各种互动展览',
          tips: ['提前网上预约', '周末开馆就进', '携带水和零食'],
          photos: ['🔬', '🚀', '🤖'],
          transport: { type: '步行', time: '10分钟' }
        },
        {
          order: 3,
          name: '鼎泰丰 (正大广场店)',
          time: '12:30-13:30',
          duration: '1小时',
          activity: '台式美食午餐',
          crowd: 40,
          comfort: 75,
          description: '避开12点高峰，12:30排队时间较短',
          tips: ['提前取号', '推荐小笼包', '儿童椅可用'],
          photos: ['🥟', '🍲', '🥤'],
          transport: { type: '步行', time: '5分钟' }
        },
        {
          order: 4,
          name: '滨江森林公园',
          time: '14:00-16:00',
          duration: '2小时',
          activity: '自然探索 & 放松',
          crowd: 25,
          comfort: 88,
          description: '下午时段游客稀少，大片草坪和森林适合孩子玩耍',
          tips: ['可以放风筝', '自备饮用水', '防蚊虫叮咬'],
          photos: ['🌲', '🦋', '🌻'],
          transport: { type: '出租车', time: '25分钟' }
        }
      ]
    }
  ]

  const filteredRoutes = recommendedRoutes.filter(route => {
    if (filter === 'all') return true
    return route.type === filter
  })

  // Simulated AI response based on user input
  const generateAIPlan = (input) => {
    const lowerInput = input.toLowerCase()
    
    // Check if it matches the example scenario
    if (lowerInput.includes('shanghai') && 
        (lowerInput.includes('4 days') || lowerInput.includes('four days')) &&
        lowerInput.includes('coffee') && 
        lowerInput.includes('scener')) {
      
      return {
        summary: '根据您的需求，我为您定制了一个4天上海深度游计划，专注于咖啡文化和美丽风景！',
        plan: {
          title: '上海咖啡与风景4日游',
          days: [
            {
              day: 1,
              title: '第一天：老洋房与咖啡文化',
              theme: '建筑美学 + 精品咖啡',
              stops: [
                {
                  time: '09:00-11:00',
                  location: '武康路',
                  activity: '老洋房建筑摄影',
                  description: '漫步在法式梧桐树下，欣赏历史建筑',
                  crowdLevel: 15
                },
                {
                  time: '11:00-12:00',
                  location: 'Manner Coffee (武康路店)',
                  activity: '精品咖啡体验',
                  description: '上海最具代表性的精品咖啡品牌',
                  crowdLevel: 25
                },
                {
                  time: '14:00-16:00',
                  location: '复兴公园',
                  activity: '法式园林漫步',
                  description: '感受法式浪漫，观察当地生活',
                  crowdLevel: 20
                },
                {
                  time: '16:30-18:00',
                  location: '%Arabica (外滩店)',
                  activity: '江景咖啡时光',
                  description: '面朝黄浦江，品味世界级咖啡',
                  crowdLevel: 40
                }
              ]
            },
            {
              day: 2,
              title: '第二天：水乡古镇探秘',
              theme: '江南风景 + 传统文化',
              stops: [
                {
                  time: '08:00-12:00',
                  location: '朱家角古镇',
                  activity: '古镇风光游览',
                  description: '小桥流水人家，江南水乡风情',
                  crowdLevel: 18
                },
                {
                  time: '12:00-13:00',
                  location: '古镇特色咖啡馆',
                  activity: '水乡咖啡体验',
                  description: '在古镇中享受现代咖啡文化',
                  crowdLevel: 22
                },
                {
                  time: '14:00-16:00',
                  location: '课植园',
                  activity: '私家园林参观',
                  description: '江南古典园林艺术',
                  crowdLevel: 15
                },
                {
                  time: '17:00-18:30',
                  location: '朱家角日落观景点',
                  activity: '水乡日落摄影',
                  description: '捕捉黄昏时分的水乡美景',
                  crowdLevel: 12
                }
              ]
            },
            {
              day: 3,
              title: '第三天：现代都市风光',
              theme: '城市天际线 + 咖啡艺术',
              stops: [
                {
                  time: '10:00-12:00',
                  location: '思南公馆',
                  activity: '文化街区探索',
                  description: '历史建筑群与艺术空间',
                  crowdLevel: 28
                },
                {
                  time: '12:00-13:30',
                  location: 'Seesaw Coffee',
                  activity: '精品咖啡午餐',
                  description: '国产精品咖啡代表，轻食简餐',
                  crowdLevel: 35
                },
                {
                  time: '15:00-17:00',
                  location: '陆家嘴观景台',
                  activity: '城市全景观赏',
                  description: '360度俯瞰上海天际线',
                  crowdLevel: 42
                },
                {
                  time: '17:30-19:00',
                  location: '外滩',
                  activity: '日落黄浦江',
                  description: '最美日落时刻，金色黄浦江',
                  crowdLevel: 50
                }
              ]
            },
            {
              day: 4,
              title: '第四天：自然与艺术',
              theme: '公园风景 + 艺术咖啡',
              stops: [
                {
                  time: '08:00-10:30',
                  location: '世纪公园',
                  activity: '晨间公园漫步',
                  description: '上海最大的城市公园，自然风光',
                  crowdLevel: 20
                },
                {
                  time: '11:00-12:30',
                  location: 'M Stand Coffee',
                  activity: '网红咖啡打卡',
                  description: '粉色系装修，Instagram风格',
                  crowdLevel: 45
                },
                {
                  time: '14:00-16:00',
                  location: '田子坊',
                  activity: '艺术街区闲逛',
                  description: '创意小店和咖啡馆聚集地',
                  crowdLevel: 32
                },
                {
                  time: '16:30-18:00',
                  location: 'Peet\'s Coffee (新天地)',
                  activity: '告别咖啡时光',
                  description: '在新天地享受最后的咖啡时光',
                  crowdLevel: 38
                }
              ]
            }
          ],
          tips: [
            '☕ 推荐购买上海咖啡地图，探索更多独立咖啡馆',
            '📸 早晨7-9点是最佳摄影时间，光线柔和人少',
            '🚇 建议购买3日地铁通票，出行更便捷',
            '🌤️ 查看天气预报，选择晴天游览户外景点',
            '⏰ 工作日人流量比周末少30-40%'
          ],
          avgCrowdLevel: 27,
          totalCoffeeStops: 8,
          estimatedBudget: '¥2000-3000'
        }
      }
    }
    
    // Default response for other inputs
    return {
      summary: '我理解您想要规划一次旅行。为了给您最佳的个性化行程，请告诉我：',
      questions: [
        '📍 您想去哪个城市？',
        '📅 计划玩几天？',
        '☕ 有什么特别的兴趣爱好？（比如咖啡、摄影、美食等）',
        '🎯 偏好什么类型的景点？（自然风景、历史建筑、现代都市等）'
      ]
    }
  }

  const handleSendMessage = () => {
    if (!userInput.trim()) return

    // Add user message
    const newUserMessage = { type: 'user', content: userInput }
    setChatMessages(prev => [...prev, newUserMessage])
    
    setIsGenerating(true)
    setUserInput('')

    // Simulate AI thinking
    setTimeout(() => {
      const aiResponse = generateAIPlan(userInput)
      
      if (aiResponse.plan) {
        // Add AI response with complete plan
        const aiMessage = { type: 'ai', content: aiResponse }
        setChatMessages(prev => [...prev, aiMessage])
      } else {
        // Add AI response with questions
        const aiMessage = { type: 'ai', content: aiResponse }
        setChatMessages(prev => [...prev, aiMessage])
      }
      
      setIsGenerating(false)
    }, 1500)
  }

  const handleQuickStart = () => {
    setUserInput('Going to Shanghai next week for 4 days, like to drink coffee, like sceneries')
    setTimeout(() => {
      handleSendMessage()
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Navigation className="w-10 h-10" />
              <h1 className="text-4xl font-bold">智能避峰路线</h1>
            </div>
            <button
              onClick={() => setShowAIChat(true)}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold transition flex items-center gap-2 shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              AI 定制路线
            </button>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mb-8">
            AI精选避峰时段，让你的旅行更舒适从容
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">{recommendedRoutes.length}</div>
              <div className="text-blue-100 text-sm">精选路线</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">23%</div>
              <div className="text-blue-100 text-sm">平均拥挤度</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">91</div>
              <div className="text-blue-100 text-sm">平均舒适分</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">6.8k</div>
              <div className="text-blue-100 text-sm">用户收藏</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8 flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
              filter === 'all' ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            🎯 全部路线
          </button>
          <button
            onClick={() => setFilter('morning')}
            className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
              filter === 'morning' ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            🌅 清晨路线
          </button>
          <button
            onClick={() => setFilter('afternoon')}
            className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
              filter === 'afternoon' ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            🌆 傍晚路线
          </button>
          <button
            onClick={() => setFilter('weekend')}
            className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
              filter === 'weekend' ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            👨‍👩‍👧 周末路线
          </button>
        </div>

        {/* Route Cards */}
        {!selectedRoute ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredRoutes.map((route) => (
              <div
                key={route.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setSelectedRoute(route)}
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${route.color} p-8 text-white relative`}>
                  <div className="text-7xl mb-4">{route.image}</div>
                  <h2 className="text-3xl font-bold mb-2">{route.name}</h2>
                  <p className="text-white/90 text-lg">{route.subtitle}</p>
                  
                  {/* Rating */}
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-bold">{route.rating}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">总时长</div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-500" />
                        <span className="font-bold text-gray-800">{route.duration}</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">景点数</div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-500" />
                        <span className="font-bold text-gray-800">{route.totalStops} 站</span>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">拥挤度</div>
                      <div className="flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-green-600" />
                        <span className="font-bold text-green-700">{route.avgCrowd}%</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">舒适分</div>
                      <div className="font-bold text-blue-600 text-xl">{route.comfortScore}</div>
                    </div>
                  </div>

                  {/* Best Time */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-600 mb-1">最佳时间</div>
                        <div className="font-semibold text-blue-700">{route.bestTime}</div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {route.highlights.map((tag, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{route.saves}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{route.reviews}</span>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-blue-500 font-semibold hover:gap-3 transition-all">
                      查看详情
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Route Detail View */
          <div>
            <button
              onClick={() => setSelectedRoute(null)}
              className="mb-6 flex items-center gap-2 text-gray-600 hover:text-primary-600 transition"
            >
              ← 返回路线列表
            </button>

            {/* Route Header */}
            <div className={`bg-gradient-to-r ${selectedRoute.color} rounded-3xl p-8 text-white mb-8`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-7xl mb-4">{selectedRoute.image}</div>
                  <h1 className="text-4xl font-bold mb-3">{selectedRoute.name}</h1>
                  <p className="text-xl text-white/90 mb-6">{selectedRoute.subtitle}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                      <Clock className="w-5 h-5 inline mr-2" />
                      {selectedRoute.duration}
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                      <MapPin className="w-5 h-5 inline mr-2" />
                      {selectedRoute.totalStops} 个景点
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                      <Star className="w-5 h-5 inline mr-2 fill-current" />
                      {selectedRoute.rating} 分
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl p-4 transition">
                    <Heart className="w-6 h-6" />
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl p-4 transition">
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {selectedRoute.stops.map((stop, index) => (
                <div key={index} className="flex gap-6">
                  {/* Timeline Line */}
                  <div className="flex flex-col items-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${selectedRoute.color} text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg`}>
                      {stop.order}
                    </div>
                    {index < selectedRoute.stops.length - 1 && (
                      <div className="w-1 flex-1 bg-gradient-to-b from-blue-300 to-blue-100 min-h-[100px] my-3"></div>
                    )}
                  </div>

                  {/* Stop Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                      {/* Stop Header */}
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b border-gray-200">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="text-sm text-gray-600 mb-1">{stop.time}</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{stop.name}</h3>
                            <p className="text-gray-700">{stop.activity}</p>
                          </div>
                          <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            stop.crowd < 30 ? 'bg-green-100 text-green-700' :
                            stop.crowd < 60 ? 'bg-yellow-100 text-yellow-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            拥挤度 {stop.crowd}%
                          </div>
                        </div>

                        {/* Photos */}
                        <div className="flex gap-2">
                          {stop.photos.map((photo, i) => (
                            <div key={i} className="flex-1 bg-white rounded-xl aspect-square flex items-center justify-center text-5xl shadow-md">
                              {photo}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stop Details */}
                      <div className="p-6">
                        <p className="text-gray-700 leading-relaxed mb-4">{stop.description}</p>

                        {/* Tips */}
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 mb-4">
                          <div className="flex items-start gap-2 mb-2">
                            <Info className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                            <span className="font-semibold text-gray-800">贴心提示</span>
                          </div>
                          <ul className="space-y-1">
                            {stop.tips.map((tip, i) => (
                              <li key={i} className="text-sm text-gray-700">• {tip}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Transport & Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="bg-gray-50 rounded-xl p-3">
                            <div className="text-xs text-gray-600 mb-1">停留时间</div>
                            <div className="font-semibold text-gray-800">{stop.duration}</div>
                          </div>
                          <div className="bg-gray-50 rounded-xl p-3">
                            <div className="text-xs text-gray-600 mb-1">舒适度</div>
                            <div className="font-semibold text-blue-500">{stop.comfort}</div>
                          </div>
                          <div className="bg-blue-50 rounded-xl p-3 col-span-2">
                            <div className="text-xs text-gray-600 mb-1">交通方式</div>
                            <div className="font-semibold text-blue-700">
                              {stop.transport.type === '步行' ? '🚶' : stop.transport.type === '地铁' ? '🚇' : stop.transport.type === '轮渡' ? '⛴️' : '🚕'} {stop.transport.type} - {stop.transport.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition flex items-center justify-center gap-2">
                <Navigation className="w-6 h-6" />
                开始导航
              </button>
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-xl font-bold text-lg hover:bg-blue-50 transition flex items-center gap-2">
                <Heart className="w-6 h-6" />
                收藏路线
              </button>
            </div>
          </div>
        )}
      </div>

      {/* AI Chat Modal */}
      {showAIChat && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">AI 旅行规划助手</h2>
                  <p className="text-sm text-white/80">告诉我您的需求，我来为您定制专属行程</p>
                </div>
              </div>
              <button
                onClick={() => setShowAIChat(false)}
                className="text-white/80 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {/* Welcome Message */}
              {chatMessages.length === 0 && (
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 bg-white rounded-2xl rounded-tl-none p-4 shadow-md">
                      <p className="text-gray-800 mb-3">
                        你好！我是彳亍AI助手 👋
                      </p>
                      <p className="text-gray-700 mb-3">
                        我可以根据您的需求，为您定制个性化的旅行路线。请告诉我：
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>📍 想去的城市</li>
                        <li>📅 旅行天数</li>
                        <li>💝 兴趣爱好（咖啡、摄影、美食等）</li>
                        <li>🎯 偏好的景点类型</li>
                      </ul>
                    </div>
                  </div>

                  {/* Quick Start Button */}
                  <div className="flex justify-center">
                    <button
                      onClick={handleQuickStart}
                      className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition flex items-center gap-2"
                    >
                      <Coffee className="w-5 h-5" />
                      试试看：上海4日咖啡与风景之旅
                    </button>
                  </div>
                </div>
              )}

              {/* Chat Messages */}
              {chatMessages.map((message, index) => (
                <div key={index} className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  {message.type === 'ai' && (
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                  )}
                  
                  <div className={`flex-1 max-w-[80%] ${message.type === 'user' ? 'flex justify-end' : ''}`}>
                    {message.type === 'user' ? (
                      <div className="bg-blue-500 text-white rounded-2xl rounded-tr-none p-4 shadow-md">
                        <p>{message.content}</p>
                      </div>
                    ) : message.content.plan ? (
                      /* AI Plan Response */
                      <div className="bg-white rounded-2xl rounded-tl-none p-6 shadow-md space-y-4">
                        <p className="text-gray-800 font-semibold text-lg">{message.content.summary}</p>
                        
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">{message.content.plan.title}</h3>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <TrendingDown className="w-4 h-4 text-green-600" />
                              <span className="text-gray-700">平均拥挤度: <strong>{message.content.plan.avgCrowdLevel}%</strong></span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Coffee className="w-4 h-4 text-blue-500" />
                              <span className="text-gray-700">咖啡店: <strong>{message.content.plan.totalCoffeeStops}家</strong></span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-gray-700">预算: <strong>{message.content.plan.estimatedBudget}</strong></span>
                            </div>
                          </div>
                        </div>

                        {/* Days */}
                        <div className="space-y-4">
                          {message.content.plan.days.map((day, dayIndex) => (
                            <div key={dayIndex} className="border border-gray-200 rounded-xl overflow-hidden">
                              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="text-sm opacity-90">Day {day.day}</div>
                                    <h4 className="text-xl font-bold">{day.title}</h4>
                                  </div>
                                  <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                                    {day.theme}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="p-4 space-y-3 bg-gray-50">
                                {day.stops.map((stop, stopIndex) => (
                                  <div key={stopIndex} className="bg-white rounded-lg p-3 shadow-sm">
                                    <div className="flex items-start justify-between mb-2">
                                      <div className="flex-1">
                                        <div className="text-xs text-gray-500 mb-1">{stop.time}</div>
                                        <h5 className="font-bold text-gray-800">{stop.location}</h5>
                                        <p className="text-sm text-gray-600">{stop.activity}</p>
                                      </div>
                                      <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                        stop.crowdLevel < 30 ? 'bg-green-100 text-green-700' :
                                        stop.crowdLevel < 50 ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-orange-100 text-orange-700'
                                      }`}>
                                        {stop.crowdLevel}%
                                      </div>
                                    </div>
                                    <p className="text-sm text-gray-600">{stop.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Tips */}
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4">
                          <h4 className="font-bold text-gray-800 mb-2">💡 旅行贴士</h4>
                          <ul className="space-y-1">
                            {message.content.plan.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="text-sm text-gray-700">{tip}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex gap-3 pt-2">
                          <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition">
                            保存路线
                          </button>
                          <button className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-xl font-semibold hover:bg-blue-50 transition">
                            分享
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* AI Questions Response */
                      <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-md">
                        <p className="text-gray-800 mb-3">{message.content.summary}</p>
                        <ul className="space-y-2">
                          {message.content.questions.map((q, qIndex) => (
                            <li key={qIndex} className="text-gray-700">{q}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {message.type === 'user' && (
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">😊</span>
                    </div>
                  )}
                </div>
              ))}

              {/* Loading */}
              {isGenerating && (
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white animate-pulse" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-md">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="告诉我你的旅行计划..."
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isGenerating}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!userInput.trim() || isGenerating}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Routes
