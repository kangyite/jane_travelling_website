import React, { useState, useEffect } from 'react'
import { MapPin, Sparkles, TrendingDown, Users, Clock, Heart, ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)
  const [currentSlogan, setCurrentSlogan] = useState(0)

  const slogans = [
    "不赶路，感受路",
    "用智慧避开人潮",
    "让旅行回归本质"
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative pt-16 min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-yellow-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzYzYTNmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          {/* Logo with Animation */}
          <div 
            className="flex justify-center mb-8 transform transition-transform duration-700"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="relative">
              <div className="absolute inset-0 w-128 h-128 md:w-200 md:h-200 rounded-full bg-white/60 blur-2xl" />
              <img 
                src="/jane_travelling_website/images/favicon.png" 
                alt="彳亍人间"
                className="relative w-128 h-128 md:w-200 md:h-200 object-contain animate-fade-in drop-shadow-2xl"
              />
            </div>
          </div>
          
          {/* Animated Slogan */}
          <div className="h-20 mb-8 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 transition-all duration-500">
              {slogans[currentSlogan]}
            </h1>
          </div>
          
          {/* Enhanced Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            一款懂你的旅行助手，用<span className="font-bold text-blue-600">AI预见人潮</span>，<br />
            为你圈出此刻可以安心彳亡的<span className="font-bold text-blue-600">宁静之地</span>
          </p>
          
          {/* Interactive Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/60 hover:bg-white/80 transition transform hover:scale-105 shadow-lg">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-800 mb-1">50万+</div>
              <div className="text-sm text-gray-600">活跃用户</div>
            </div>
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/60 hover:bg-white/80 transition transform hover:scale-105 shadow-lg">
              <MapPin className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-800 mb-1">500+</div>
              <div className="text-sm text-gray-600">热门景点</div>
            </div>
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/60 hover:bg-white/80 transition transform hover:scale-105 shadow-lg">
              <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-800 mb-1">实时</div>
              <div className="text-sm text-gray-600">人流监控</div>
            </div>
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/60 hover:bg-white/80 transition transform hover:scale-105 shadow-lg">
              <Heart className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-800 mb-1">98%</div>
              <div className="text-sm text-gray-600">满意度</div>
            </div>
          </div>

          {/* Value Proposition Box */}
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl mb-12 transform hover:scale-105 transition duration-300">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-blue-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">为什么选择彳亡？</h2>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              我们不为“慢”而慢，而是用<span className="text-blue-600 font-bold">智能科技</span>为“舞适”创造空间。
              在人潮汹涌的时代，真正的奢侈不是走得慢，而是<span className="text-yellow-600 font-bold">有资格、有条件的走得慢</span>。
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex gap-3">
                <TrendingDown className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-gray-800 mb-1">避开高峰</div>
                  <div className="text-sm text-gray-600">AI预测人流，提前规划</div>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-gray-800 mb-1">发现秘境</div>
                  <div className="text-sm text-gray-600">小众景点，独家推荐</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Heart className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-gray-800 mb-1">品质旅行</div>
                  <div className="text-sm text-gray-600">舒适优先，体验至上</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-blue-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-600 transition-all shadow-2xl flex items-center gap-3 transform hover:scale-110">
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              立即体验
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white text-gray-700 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-50 transition-all border-2 border-gray-300 flex items-center gap-3 transform hover:scale-110 shadow-lg">
              <Play className="w-6 h-6" />
              观看视频
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="text-gray-600 text-sm">
              <span className="font-semibold">2024</span> 最佳旅行App
            </div>
            <div className="text-gray-600 text-sm">•</div>
            <div className="text-gray-600 text-sm">
              <span className="font-semibold">5星</span> 用户评价
            </div>
            <div className="text-gray-600 text-sm">•</div>
            <div className="text-gray-600 text-sm">
              <span className="font-semibold">App Store</span> 推荐
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-500 rounded-full animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s both;
        }
      `}</style>
    </section>
  )
}

export default Hero

