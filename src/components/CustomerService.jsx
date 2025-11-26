import React, { useState } from 'react'
import { MessageCircle, X, Send, Bot, User, Phone, Mail, Clock } from 'lucide-react'

const CustomerService = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('ai') // 'ai' or 'human'
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: '您好！我是彳亍旅行智能助手，有什么可以帮您的吗？如需人工服务，请输入"转人工"。',
      time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const aiResponses = [
    '感谢您的咨询！我可以帮您查询景点信息、酒店预订、路线规划等服务。',
    '我们的商城提供优质的酒店和门票预订服务，价格实惠，快速出票。',
    '您可以使用我们的人流雷达功能，实时查看景点人流情况，避开拥挤时段。',
    '我们的中国地图功能可以帮您探索全国各地的热门景点和特色美食。',
    '我们提供7x24小时在线服务，随时为您解答疑问。如需人工服务，请输入"转人工"。'
  ]

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userInput = inputMessage.trim()
    const newUserMessage = {
      type: 'user',
      content: userInput,
      time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
    }

    setMessages([...messages, newUserMessage])
    setInputMessage('')

    // 检测是否输入"转人工"
    if (userInput === '转人工' || userInput.includes('人工')) {
      setActiveTab('human')
      setTimeout(() => {
        const response = {
          type: 'agent',
          content: '已为您转接人工客服，客服专员正在为您服务...',
          time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
        }
        setMessages(prev => [...prev, response])
      }, 500)
      return
    }

    // 模拟AI/人工回复
    setTimeout(() => {
      const response = {
        type: activeTab === 'ai' ? 'bot' : 'agent',
        content: activeTab === 'ai' 
          ? aiResponses[Math.floor(Math.random() * aiResponses.length)]
          : '客服正在为您解答，请稍候...',
        time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, response])
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* 浮动按钮 */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 flex items-center gap-2"
          >
            <MessageCircle size={28} className="animate-bounce" />
            <span className="hidden group-hover:inline-block font-medium pr-2 animate-fade-in">
              在线客服
            </span>
          </button>
        )}

        {/* 聊天窗口 */}
        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl w-96 h-[600px] flex flex-col overflow-hidden animate-slide-up">
            {/* 头部 */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {activeTab === 'ai' ? <Bot size={24} /> : <User size={24} />}
                  <div>
                    <h3 className="font-bold text-lg">彳亍客服</h3>
                    <p className="text-xs text-blue-100">
                      {activeTab === 'ai' ? 'AI智能助手' : '人工客服在线'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-1 rounded-full transition"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* 消息区域 */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.type === 'user'
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {message.type !== 'user' && (
                      <div className="flex items-center gap-2 mb-1">
                        {message.type === 'bot' ? (
                          <Bot size={16} className="text-blue-500" />
                        ) : (
                          <User size={16} className="text-green-500" />
                        )}
                        <span className="text-xs font-semibold text-gray-600">
                          {message.type === 'bot' ? 'AI助手' : '客服专员'}
                        </span>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <span className={`text-xs mt-1 block ${
                      message.type === 'user' ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                      {message.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 快捷回复 */}
            <div className="px-4 py-2 bg-white border-t border-gray-200">
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setInputMessage('我想预订酒店')}
                  className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition"
                >
                  预订酒店
                </button>
                <button
                  onClick={() => setInputMessage('查询门票价格')}
                  className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition"
                >
                  门票价格
                </button>
                <button
                  onClick={() => setInputMessage('推荐旅游路线')}
                  className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition"
                >
                  推荐路线
                </button>
              </div>
            </div>

            {/* 联系方式 */}
            <div className="px-4 py-2 bg-blue-50 border-t border-blue-100">
              <div className="flex items-center justify-around text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <Phone size={14} className="text-blue-500" />
                  <span>400-888-8888</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-blue-500" />
                  <span>9:00-21:00</span>
                </div>
              </div>
            </div>

            {/* 输入框 */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="输入您的问题..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition disabled:bg-gray-300"
                  disabled={!inputMessage.trim()}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CustomerService
