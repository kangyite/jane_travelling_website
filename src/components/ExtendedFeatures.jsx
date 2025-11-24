import React from 'react'
import { Map, BookOpen, Award, Star, Trophy, Medal, Users } from 'lucide-react'

const ExtendedFeatures = () => {
  return (
    <section id="extended" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            扩展功能
          </h2>
          <p className="text-xl text-gray-600">旅游日记 + 打卡地图 + 用户奖励机制</p>
        </div>

        {/* City Light-up Map */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-10">
                <div className="flex items-center mb-6">
                  <Map className="text-blue-500 mr-3" size={40} />
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">打卡地图</h3>
                    <p className="text-gray-500">City Light-up Map</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-6">
                  点亮你走过的每一个地方，拼成专属旅行地图
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">✓</div>
                    <div>
                      <p className="font-semibold text-gray-800">自动定位提醒</p>
                      <p className="text-gray-600">到达景点附近自动提示</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">✓</div>
                    <div>
                      <p className="font-semibold text-gray-800">一键点亮景点</p>
                      <p className="text-gray-600">上传照片 + 写下当下心情</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">✓</div>
                    <div>
                      <p className="font-semibold text-gray-800">情绪标签</p>
                      <p className="text-gray-600">宁静 / 挤爆 / 惊喜 / 推荐</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">✓</div>
                    <div>
                      <p className="font-semibold text-gray-800">社交分享</p>
                      <p className="text-gray-600">一键分享到朋友圈/Instagram/小红书</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl">
                  <p className="text-center font-semibold">
                    兼具仪式感 + 旅行记录 + 情绪价值
                  </p>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-gradient-to-br from-blue-100 to-blue-200 p-10 flex items-center justify-center">
                <div className="relative w-full h-full min-h-[300px]">
                  {/* Map Background with Grid */}
                  <div className="absolute inset-0 bg-white/30 rounded-xl overflow-hidden">
                    <svg className="w-full h-full opacity-20" viewBox="0 0 100 100">
                      {/* Grid lines */}
                      {[...Array(10)].map((_, i) => (
                        <React.Fragment key={i}>
                          <line x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="#059669" strokeWidth="0.2" />
                          <line x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="#059669" strokeWidth="0.2" />
                        </React.Fragment>
                      ))}
                      {/* Roads */}
                      <path d="M20,10 L20,90" stroke="#059669" strokeWidth="0.8" />
                      <path d="M50,5 L50,95" stroke="#059669" strokeWidth="1" />
                      <path d="M80,15 L80,85" stroke="#059669" strokeWidth="0.8" />
                      <path d="M10,30 L90,30" stroke="#059669" strokeWidth="0.8" />
                      <path d="M5,60 L95,60" stroke="#059669" strokeWidth="1" />
                    </svg>
                  </div>
                  
                  {/* Location Points */}
                  <div className="absolute top-[25%] left-[30%]">
                    <div className="relative">
                      <div className="absolute inset-0 bg-comfort-green rounded-full opacity-75 animate-ping w-6 h-6"></div>
                      <div className="relative bg-comfort-green w-6 h-6 rounded-full shadow-xl border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-[45%] left-[60%]">
                    <div className="relative">
                      <div className="absolute inset-0 bg-comfort-yellow rounded-full opacity-75 animate-ping w-5 h-5"></div>
                      <div className="relative bg-comfort-yellow w-5 h-5 rounded-full shadow-xl border-2 border-white"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-[65%] left-[40%]">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-full opacity-75 animate-ping w-7 h-7"></div>
                      <div className="relative bg-blue-500 w-7 h-7 rounded-full shadow-xl border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-[35%] left-[75%]">
                    <div className="relative">
                      <div className="absolute inset-0 bg-comfort-green rounded-full opacity-75 animate-ping w-5 h-5"></div>
                      <div className="relative bg-comfort-green w-5 h-5 rounded-full shadow-xl border-2 border-white"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-[55%] left-[20%]">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-full opacity-75 animate-ping w-6 h-6"></div>
                      <div className="relative bg-blue-500 w-6 h-6 rounded-full shadow-xl border-2 border-white"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-[75%] left-[70%]">
                    <div className="relative">
                      <div className="absolute inset-0 bg-comfort-yellow rounded-full opacity-75 animate-ping w-5 h-5"></div>
                      <div className="relative bg-comfort-yellow w-5 h-5 rounded-full shadow-xl border-2 border-white"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-[20%] left-[50%]">
                    <div className="relative">
                      <div className="absolute inset-0 bg-comfort-green rounded-full opacity-75 animate-ping w-8 h-8"></div>
                      <div className="relative bg-comfort-green w-8 h-8 rounded-full shadow-xl border-2 border-white flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-[80%] left-[35%]">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-full opacity-75 animate-ping w-5 h-5"></div>
                      <div className="relative bg-blue-500 w-5 h-5 rounded-full shadow-xl border-2 border-white"></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-[40%] left-[85%]">
                    <div className="relative">
                      <div className="absolute inset-0 bg-comfort-yellow rounded-full opacity-75 animate-ping w-4 h-4"></div>
                      <div className="relative bg-comfort-yellow w-4 h-4 rounded-full shadow-xl border-2 border-white"></div>
                    </div>
                  </div>

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path d="M30,25 Q40,35 60,45" stroke="white" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="3,3" />
                    <path d="M60,45 Q50,55 40,65" stroke="white" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="3,3" />
                  </svg>

                  {/* Map Legend */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="text-xs font-bold text-gray-700 mb-2">你的旅程</div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-comfort-green"></div>
                      <span className="text-xs text-gray-600">已点亮</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-xs text-gray-600">收藏</span>
                    </div>
                  </div>
                  
                  {/* Stats Overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="text-2xl font-bold text-blue-500">23</div>
                    <div className="text-xs text-gray-600">城市点亮</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Travel Diary */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/2 p-10">
                <div className="flex items-center mb-6">
                  <BookOpen className="text-blue-500 mr-3" size={40} />
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800">旅游日记</h3>
                    <p className="text-gray-500">Travel Diary</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-6">
                  每一次打卡自动汇入你的旅行故事
                </p>
                
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">📅 时间 + 地点</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">📷 照片 & 视频</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">✍️ AI 智能日记生成</p>
                    <p className="text-sm text-gray-600 mt-1">自动将你的文字变成简洁日记</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">📊 舒适度数据记录</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">💭 情绪标签</p>
                  </div>
                </div>
                
                <div className="mt-6 border-2 border-blue-500 rounded-xl p-4">
                  <p className="text-center font-semibold text-gray-800">
                    旅行日志 + 氛围相册 + 情绪记录
                  </p>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-gradient-to-br from-amber-50 to-orange-50 p-10 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm">
                  <div className="text-sm text-gray-500 mb-2">2025年11月20日 · 南京老门东</div>
                  <div className="w-full h-40 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg mb-4"></div>
                  <p className="text-gray-700 italic">
                    "今天在南京的老门东，风很舒服，人不多，很适合散步。"
                  </p>
                  <div className="flex gap-2 mt-4">
                    <span className="bg-comfort-green text-white text-xs px-3 py-1 rounded-full">宁静</span>
                    <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">推荐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gamification */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-2xl p-10">
          <div className="flex items-center justify-center mb-8">
            <Award className="text-purple-600 mr-3" size={40} />
            <h3 className="text-3xl font-bold text-gray-800">用户奖励机制</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Light Points */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex justify-center mb-4">
                <Star className="text-yellow-500" size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">光点积分</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 点亮新景点 <span className="text-yellow-600 font-bold">+5</span></li>
                <li>• 撰写体验 <span className="text-yellow-600 font-bold">+3</span></li>
                <li>• 上传照片 <span className="text-yellow-600 font-bold">+2</span></li>
                <li>• 完成避峰路线 <span className="text-yellow-600 font-bold">+10</span></li>
              </ul>
              <div className="mt-4 text-xs text-gray-600 text-center">
                兑换VIP功能/滤镜/皮肤
              </div>
            </div>

            {/* Travel Level */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex justify-center mb-4">
                <Trophy className="text-blue-500" size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">旅行等级</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Lv1 初行者</li>
                <li>• Lv2 探路者</li>
                <li>• Lv3 慢旅者</li>
                <li>• Lv4 城市漫步家</li>
                <li className="text-blue-500 font-bold">• Lv5 彳亍旅人</li>
              </ul>
            </div>

            {/* City Badge */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex justify-center mb-4">
                <Medal className="text-orange-500" size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">城市徽章</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>🏙️ 上海探索者</li>
                <li>🌶️ 成都慢生活</li>
                <li>⛰️ 避峰达人</li>
                <li>🌿 宁静猎人</li>
              </ul>
              <div className="mt-4 text-xs text-gray-600 text-center">
                收藏展示在个人主页
              </div>
            </div>

            {/* Pulse Rank */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex justify-center mb-4">
                <Users className="text-green-500" size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3 text-center">社区影响力</h4>
              <p className="text-sm text-gray-700 mb-4">
                基于真实体验的点赞与评论
              </p>
              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-3 rounded-lg text-center">
                <p className="text-xs text-gray-600">Pulse Rank</p>
                <p className="text-2xl font-bold text-gray-800">Top 5%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExtendedFeatures
