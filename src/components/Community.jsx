import React, { useState } from 'react'
import { MessageCircle, ThumbsUp, Share2, Bookmark, TrendingUp, Award, Users, Camera, MapPin, Clock, Heart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const Community = () => {
  const [activeTab, setActiveTab] = useState('hot') // hot, following, nearby
  const [selectedPost, setSelectedPost] = useState(null)

  // Mock community posts - 7C: Content + Community
  const communityPosts = [
    {
      id: 1,
      user: { name: '慢行者小李', avatar: '👨‍🎨', level: 5, badges: ['🏆', '⭐'], points: 1250 },
      location: '朱家角古镇',
      city: '上海',
      time: '2小时前',
      content: '清晨的朱家角真的太美了！按照彳亍的建议7点到达，整个古镇只有零星几个人，拍照完全不用等。小桥流水人家的意境完美呈现。推荐早起的朋友们！',
      images: ['🌅', '🏘️', '🛶'],
      crowdLevel: 15,
      comfortScore: 95,
      likes: 234,
      comments: 45,
      shares: 12,
      saved: 89,
      tags: ['早起鸟', '摄影天堂', '避峰成功']
    },
    {
      id: 2,
      user: { name: '彳亍达人王小姐', avatar: '👩‍💼', level: 8, badges: ['👑', '💎', '🎯'], points: 3580 },
      location: '外滩',
      city: '上海',
      time: '5小时前',
      content: 'App推荐我下午4点来外滩，果然人流刚开始减少。找到了一个绝佳的观景位，静静坐了一个小时看黄浦江。这才是旅行该有的样子，不是打卡，是感受。',
      images: ['🌆', '☕', '📸'],
      crowdLevel: 45,
      comfortScore: 78,
      likes: 567,
      comments: 89,
      shares: 34,
      saved: 156,
      tags: ['黄金时段', '完美时刻', '推荐路线']
    },
    {
      id: 3,
      user: { name: '旅行摄影师张三', avatar: '📷', level: 6, badges: ['📸', '🎨'], points: 2100 },
      location: '武康路',
      city: '上海',
      time: '1天前',
      content: '周二上午的武康路，人少到可以随便拍。老洋房在秋日阳光下特别美。用彳亍App查了人流预测，完美避开了周末人潮。这个功能太实用了！',
      images: ['🍂', '🏛️', '☀️'],
      crowdLevel: 20,
      comfortScore: 92,
      likes: 445,
      comments: 67,
      shares: 28,
      saved: 123,
      tags: ['建筑美学', '避峰攻略', '秋日美景']
    },
    {
      id: 4,
      user: { name: '美食探险家', avatar: '🍜', level: 4, badges: ['🍴'], points: 890 },
      location: '城隍庙',
      city: '上海',
      time: '2天前',
      content: '跟着App的推荐时间来吃小笼包，排队只用了10分钟！以前每次来都要等1小时。现在真的可以悠闲地品味美食了。',
      images: ['🥟', '🍲', '😋'],
      crowdLevel: 55,
      comfortScore: 65,
      likes: 389,
      comments: 52,
      shares: 19,
      saved: 94,
      tags: ['美食攻略', '时间优化', '本地推荐']
    }
  ]

  // Trending topics - 7C: Content + Community
  const trendingTopics = [
    { tag: '避峰神器', count: '2.3k', icon: '🎯' },
    { tag: '周末攻略', count: '1.8k', icon: '📅' },
    { tag: '摄影秘境', count: '1.5k', icon: '📸' },
    { tag: '美食探店', count: '1.2k', icon: '🍜' },
    { tag: '亲子出游', count: '980', icon: '👨‍👩‍👧' }
  ]

  // Top contributors - 7C: Community + Customization
  const topContributors = [
    { name: '慢行大师', avatar: '🥇', points: 5280, posts: 156 },
    { name: '彳亍之星', avatar: '🥈', points: 4590, posts: 134 },
    { name: '避峰达人', avatar: '🥉', points: 3890, posts: 112 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header - 7C: Context */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-10 h-10" />
            <h1 className="text-4xl font-bold">彳亍社区</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            分享你的慢旅行故事，发现更多宁静时刻
          </p>
          
          {/* Stats - 7C: Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">12.5k</div>
              <div className="text-blue-100 text-sm">活跃用户</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">45.8k</div>
              <div className="text-blue-100 text-sm">分享动态</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">89.2k</div>
              <div className="text-blue-100 text-sm">避峰成功</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">156</div>
              <div className="text-blue-100 text-sm">城市覆盖</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Column - 7C: Content + Community */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tab Navigation - 7C: Customization */}
            <div className="bg-white rounded-2xl shadow-lg p-2 flex gap-2">
              <button
                onClick={() => setActiveTab('hot')}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === 'hot'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                🔥 热门动态
              </button>
              <button
                onClick={() => setActiveTab('following')}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === 'following'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                ⭐ 我的关注
              </button>
              <button
                onClick={() => setActiveTab('nearby')}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === 'nearby'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                📍 附近动态
              </button>
            </div>

            {/* Post Creation - 7C: Communication */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex gap-4">
                <div className="text-4xl">😊</div>
                <input
                  type="text"
                  placeholder="分享你的慢旅行故事..."
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all font-semibold shadow-lg">
                  发布
                </button>
              </div>
              <div className="flex gap-4 mt-4 ml-16">
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition">
                  <Camera className="w-5 h-5" />
                  <span className="text-sm">照片</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">位置</span>
                </button>
              </div>
            </div>

            {/* Community Posts - 7C: Content + Community */}
            <div className="space-y-6">
              {communityPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Post Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-4">
                        <div className="text-5xl">{post.user.avatar}</div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-gray-800">{post.user.name}</h3>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                              Lv.{post.user.level}
                            </span>
                            {post.user.badges.map((badge, i) => (
                              <span key={i} className="text-lg">{badge}</span>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>{post.location}</span>
                            <span>•</span>
                            <Clock className="w-4 h-4" />
                            <span>{post.time}</span>
                          </div>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-blue-500">
                        <Bookmark className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Post Content */}
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {post.content}
                    </p>

                    {/* Images */}
                    <div className="flex gap-2 mb-4">
                      {post.images.map((img, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl aspect-square flex items-center justify-center text-6xl">
                          {img}
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Real-time Stats - 7C: Content */}
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          post.crowdLevel < 40 ? 'bg-green-500' :
                          post.crowdLevel < 60 ? 'bg-yellow-500' :
                          post.crowdLevel < 80 ? 'bg-orange-500' : 'bg-red-500'
                        }`}></div>
                        <span className="text-sm text-gray-600">拥挤度: {post.crowdLevel}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600">舒适分: {post.comfortScore}</span>
                      </div>
                    </div>
                  </div>

                  {/* Post Actions - 7C: Communication */}
                  <div className="border-t border-gray-100 px-6 py-4 flex items-center justify-between">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition group">
                      <Heart className="w-5 h-5 group-hover:fill-current" />
                      <span className="font-semibold">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition">
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-semibold">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition">
                      <Share2 className="w-5 h-5" />
                      <span className="font-semibold">{post.shares}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-yellow-500 transition">
                      <Bookmark className="w-5 h-5" />
                      <span className="font-semibold">{post.saved}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - 7C: Community + Customization */}
          <div className="space-y-6">
            {/* Trending Topics - 7C: Content */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary-600" />
                <h3 className="text-xl font-bold text-gray-800">热门话题</h3>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-primary-50 cursor-pointer transition group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{topic.icon}</span>
                      <span className="font-semibold text-gray-800 group-hover:text-primary-600">
                        #{topic.tag}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{topic.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Contributors - 7C: Community */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-primary-600" />
                <h3 className="text-xl font-bold text-gray-800">贡献榜</h3>
              </div>
              <div className="space-y-3">
                {topContributors.map((user, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-50 to-transparent rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{user.avatar}</span>
                      <div>
                        <div className="font-semibold text-gray-800">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.posts} 篇分享</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary-600">{user.points}</div>
                      <div className="text-xs text-gray-500">光点</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Guidelines - 7C: Communication */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">社区公约</h3>
              <ul className="space-y-2 text-sm text-primary-100">
                <li>✓ 分享真实体验</li>
                <li>✓ 尊重他人观点</li>
                <li>✓ 保护隐私安全</li>
                <li>✓ 传递正能量</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community
