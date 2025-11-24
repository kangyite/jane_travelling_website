import React, { useState } from 'react'
import { Calendar, MapPin, Image, TrendingUp, Users, Heart, Edit3, Filter, Download, Share2, ChevronDown, BookOpen, Camera, Sparkles } from 'lucide-react'

const TravelDiary = () => {
  const [viewMode, setViewMode] = useState('timeline') // timeline, grid, map
  const [filterPeriod, setFilterPeriod] = useState('all') // all, year, season, month
  const [selectedEntry, setSelectedEntry] = useState(null)

  // Mock diary entries (auto-generated from check-ins)
  const diaryEntries = [
    {
      id: 1,
      date: '2025-11-15',
      location: '外滩',
      city: '上海',
      photos: ['/chi_chu/images/checkins/waitan1.jpg', '/chi_chu/images/checkins/waitan2.jpg'],
      videos: [],
      originalText: '夜景太美了，黄浦江两岸的灯光让人沉醉',
      aiSummary: '今天在上海外滩，夜景璀璨迷人，黄浦江两岸灯光交相辉映，让人流连忘返�?,
      crowdLevel: 45,
      comfortScore: 8.5,
      emotionTags: ['惊喜', '浪漫', '放松'],
      weather: '�?,
      temperature: '18°C',
      timeSpent: '2小时',
      companionType: '独自',
      crowdTrend: [35, 40, 45, 50, 48, 42, 38]
    },
    {
      id: 2,
      date: '2025-11-10',
      location: '武康�?,
      city: '上海',
      photos: ['/chi_chu/images/checkins/wukang1.jpg'],
      videos: [],
      originalText: '清晨的武康路，老洋房在晨光中格外美',
      aiSummary: '今天在上海武康路，清晨漫步在法国梓桐树下，老洋房在晨光中散发着历史的韵味�?,
      crowdLevel: 12,
      comfortScore: 9.5,
      emotionTags: ['宁静', '文艺', '治愈'],
      weather: '多云',
      temperature: '15°C',
      timeSpent: '1.5小时',
      companionType: '独自',
      crowdTrend: [8, 10, 12, 15, 18, 20, 16]
    },
    {
      id: 3,
      date: '2025-11-08',
      location: '田子�?,
      city: '上海',
      photos: ['/chi_chu/images/checkins/tianzifang1.jpg'],
      videos: [],
      originalText: '文艺气息满满，找到了很多有趣的小�?,
      aiSummary: '今天在上海田子坊，弄堂里藏着许多独特的小店，文艺气息浓厚，每个转角都有惊喜�?,
      crowdLevel: 30,
      comfortScore: 7.8,
      emotionTags: ['推荐', '文艺', '发现'],
      weather: '�?,
      temperature: '20°C',
      timeSpent: '3小时',
      companionType: '朋友',
      crowdTrend: [20, 25, 30, 35, 40, 38, 32]
    },
    {
      id: 4,
      date: '2025-11-05',
      location: '豫园',
      city: '上海',
      photos: ['/chi_chu/images/checkins/yuyuan1.webp', '/chi_chu/images/checkins/yuyuan2.jpg'],
      videos: [],
      originalText: '传统建筑真的很震撑，小笼包也超好�?,
      aiSummary: '今天在上海豫园，古典园林建筑令人震撑，品尝了地道的南翔小笼包，美景美食两不误�?,
      crowdLevel: 55,
      comfortScore: 6.5,
      emotionTags: ['推荐', '美食', '文化'],
      weather: '�?,
      temperature: '22°C',
      timeSpent: '4小时',
      companionType: '家人',
      crowdTrend: [45, 50, 55, 60, 58, 52, 48]
    },
    {
      id: 5,
      date: '2025-10-28',
      location: '朱家�?,
      city: '上海',
      photos: ['/chi_chu/images/checkins/zhujiajiao1.jpg', '/chi_chu/images/checkins/zhujiajiao2.jpg'],
      videos: [],
      originalText: '小桥流水人家，江南水乡的美好都在这里�?,
      aiSummary: '今天在上海朱家角古镇，小桥流水，白墙黛瓦，江南水乡的诗意尽在其中�?,
      crowdLevel: 18,
      comfortScore: 9.2,
      emotionTags: ['宁静', '古镇', '诗意'],
      weather: '多云',
      temperature: '16°C',
      timeSpent: '5小时',
      companionType: '情侣',
      crowdTrend: [12, 15, 18, 22, 20, 16, 14]
    }
  ]

  // Group entries by period
  const groupByPeriod = (entries) => {
    if (filterPeriod === 'all') return { '所有记�?: entries }
    
    const grouped = {}
    entries.forEach(entry => {
      const date = new Date(entry.date)
      let key
      
      if (filterPeriod === 'year') {
        key = `${date.getFullYear()}年`
      } else if (filterPeriod === 'season') {
        const month = date.getMonth()
        const year = date.getFullYear()
        const season = Math.floor(month / 3)
        const seasonNames = ['春季', '夏季', '秋季', '冬季']
        key = `${year}�?${seasonNames[season]}`
      } else if (filterPeriod === 'month') {
        key = `${date.getFullYear()}�?${date.getMonth() + 1}月`
      }
      
      if (!grouped[key]) grouped[key] = []
      grouped[key].push(entry)
    })
    
    return grouped
  }

  const groupedEntries = groupByPeriod(diaryEntries)

  const getEmotionColor = (tag) => {
    const colors = {
      '宁静': 'bg-green-100 text-green-700 border-green-300',
      '惊喜': 'bg-purple-100 text-purple-700 border-purple-300',
      '推荐': 'bg-blue-100 text-blue-700 border-blue-300',
      '浪漫': 'bg-pink-100 text-pink-700 border-pink-300',
      '文艺': 'bg-indigo-100 text-indigo-700 border-indigo-300',
      '治愈': 'bg-teal-100 text-teal-700 border-teal-300',
      '美食': 'bg-orange-100 text-orange-700 border-orange-300',
      '文化': 'bg-amber-100 text-amber-700 border-amber-300',
      '古镇': 'bg-yellow-100 text-yellow-700 border-yellow-300',
      '诗意': 'bg-cyan-100 text-cyan-700 border-cyan-300',
      '发现': 'bg-violet-100 text-violet-700 border-violet-300',
      '放松': 'bg-emerald-100 text-emerald-700 border-emerald-300'
    }
    return colors[tag] || 'bg-gray-100 text-gray-700 border-gray-300'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="w-12 h-12" />
            <h1 className="text-5xl font-bold">旅游日记</h1>
          </div>
          <p className="text-xl text-purple-100 max-w-2xl">
            每一次旅行，都值得被记录。AI 帮你整理成精美的旅行故事�?
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-bold">{diaryEntries.length}</div>
              <div className="text-sm text-purple-100">旅行足迹</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-bold">{diaryEntries.reduce((sum, e) => sum + e.photos.length, 0)}</div>
              <div className="text-sm text-purple-100">精彩照片</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm text-purple-100">访问城市</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl font-bold">24h</div>
              <div className="text-sm text-purple-100">旅行时长</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* View Mode */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-700">查看方式:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('timeline')}
                  className={`px-4 py-2 rounded-xl font-semibold transition ${
                    viewMode === 'timeline'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  时间�?
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-xl font-semibold transition ${
                    viewMode === 'grid'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  网格
                </button>
              </div>
            </div>

            {/* Period Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={filterPeriod}
                onChange={(e) => setFilterPeriod(e.target.value)}
                className="px-4 py-2 rounded-xl border-2 border-gray-200 font-semibold text-gray-700 focus:outline-none focus:border-primary-500"
              >
                <option value="all">所有记�?/option>
                <option value="year">按年�?/option>
                <option value="season">按季�?/option>
                <option value="month">按月�?/option>
              </select>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition flex items-center gap-2">
                <Download className="w-4 h-4" />
                导出日记
              </button>
              <button className="px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                分享
              </button>
            </div>
          </div>
        </div>

        {/* Diary Entries */}
        {Object.entries(groupedEntries).map(([period, entries]) => (
          <div key={period} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary-600" />
              {period}
              <span className="text-sm font-normal text-gray-500">({entries.length} 条记�?</span>
            </h2>

            {viewMode === 'timeline' ? (
              <div className="space-y-6">
                {entries.map((entry, idx) => (
                  <div
                    key={entry.id}
                    className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition group cursor-pointer"
                    onClick={() => setSelectedEntry(entry)}
                  >
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <MapPin className="w-5 h-5 text-primary-600" />
                            <h3 className="text-2xl font-bold text-gray-800">{entry.location}</h3>
                            <span className="text-sm text-gray-500">{entry.city}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span>{entry.date}</span>
                            <span>�?/span>
                            <span>{entry.timeSpent}</span>
                            <span>�?/span>
                            <span>{entry.companionType}</span>
                            <span>�?/span>
                            <span>{entry.weather} {entry.temperature}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold">
                            <Heart className="w-4 h-4 fill-current" />
                            <span>舒适度 {entry.comfortScore}</span>
                          </div>
                          <div className="text-sm text-gray-500">拥挤�?{entry.crowdLevel}%</div>
                        </div>
                      </div>

                      {/* Photos */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {entry.photos.map((photo, photoIdx) => (
                          <div key={photoIdx} className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                            <img
                              src={photo}
                              alt={`${entry.location} 照片 ${photoIdx + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                            />
                          </div>
                        ))}
                      </div>

                      {/* AI Summary */}
                      <div className="bg-gradient-to-r from-purple-50 to-primary-50 rounded-2xl p-6 mb-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles className="w-5 h-5 text-purple-600" />
                          <span className="text-sm font-semibold text-purple-700">AI 生成日记</span>
                        </div>
                        <p className="text-gray-800 text-lg leading-relaxed">{entry.aiSummary}</p>
                        <div className="mt-3 pt-3 border-t border-purple-200">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Edit3 className="w-4 h-4" />
                            <span className="italic">原始文字: "{entry.originalText}"</span>
                          </div>
                        </div>
                      </div>

                      {/* Emotion Tags */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm font-semibold text-gray-700">情绪标签:</span>
                        <div className="flex gap-2 flex-wrap">
                          {entry.emotionTags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className={`px-3 py-1 rounded-full text-sm font-semibold border-2 ${getEmotionColor(tag)}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Crowd Trend */}
                      <div className="bg-gray-50 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="w-4 h-4 text-gray-600" />
                          <span className="text-sm font-semibold text-gray-700">当天人流趋势</span>
                        </div>
                        <div className="flex items-end gap-1 h-20">
                          {entry.crowdTrend.map((level, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1">
                              <div
                                className="w-full bg-gradient-to-t from-primary-500 to-primary-300 rounded-t"
                                style={{ height: `${level}%` }}
                              />
                              <span className="text-xs text-gray-500">{9 + i}:00</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-6">
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer group"
                    onClick={() => setSelectedEntry(entry)}
                  >
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={entry.photos[0]}
                        alt={entry.location}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-800 mb-1">{entry.location}</h3>
                      <p className="text-sm text-gray-600 mb-3">{entry.date}</p>
                      <div className="flex gap-1 flex-wrap">
                        {entry.emotionTags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-1 rounded-full text-xs font-semibold border ${getEmotionColor(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Detailed Entry Modal */}
      {selectedEntry && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-purple-600 text-white p-6 flex items-center justify-between z-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">{selectedEntry.location}</h2>
                <p className="text-primary-100">{selectedEntry.date} · {selectedEntry.city}</p>
              </div>
              <button
                onClick={() => setSelectedEntry(null)}
                className="p-2 hover:bg-white/20 rounded-xl transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8">
              {/* Full-size photos */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {selectedEntry.photos.map((photo, idx) => (
                  <div key={idx} className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
                    <img
                      src={photo}
                      alt={`${selectedEntry.location} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Full details */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-primary-50 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold text-purple-700">AI 生成的旅行日�?/span>
                  </div>
                  <p className="text-gray-800 text-xl leading-relaxed mb-4">{selectedEntry.aiSummary}</p>
                  <div className="pt-4 border-t border-purple-200">
                    <div className="text-sm text-gray-600 italic">
                      原始记录: "{selectedEntry.originalText}"
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="text-sm text-gray-600 mb-1">舒适度评分</div>
                    <div className="text-3xl font-bold text-primary-600">{selectedEntry.comfortScore}</div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="text-sm text-gray-600 mb-1">拥挤�?/div>
                    <div className="text-3xl font-bold text-gray-800">{selectedEntry.crowdLevel}%</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="text-sm font-semibold text-gray-700 mb-3">情绪标签</div>
                  <div className="flex gap-2 flex-wrap">
                    {selectedEntry.emotionTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-2 rounded-full font-semibold border-2 ${getEmotionColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-semibold text-gray-700">当天人流趋势</span>
                  </div>
                  <div className="flex items-end gap-2 h-32">
                    {selectedEntry.crowdTrend.map((level, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div className="text-xs font-semibold text-gray-700">{level}%</div>
                        <div
                          className="w-full bg-gradient-to-t from-primary-500 to-primary-300 rounded-t"
                          style={{ height: `${level}%` }}
                        />
                        <span className="text-xs text-gray-500">{9 + i}:00</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TravelDiary


