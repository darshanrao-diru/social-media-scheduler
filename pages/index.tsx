import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { motion } from 'framer-motion';
import { FiPlus, FiCalendar, FiBarChart2, FiSettings } from 'react-icons/fi';
import 'react-calendar/dist/Calendar.css';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetchPosts();
  }, [date]);

  const fetchPosts = async () => {
    // Mock data
    setPosts([
      {
        id: 1,
        platforms: ['twitter', 'linkedin'],
        content: 'Check out our latest blog post on web performance!',
        scheduledFor: new Date(),
        status: 'scheduled',
      },
      {
        id: 2,
        platforms: ['instagram'],
        content: 'Behind the scenes at our office',
        scheduledFor: new Date(Date.now() + 86400000),
        status: 'draft',
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur border-b border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-white">Content Scheduler</h1>
            <button className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold">
              <FiPlus /> New Post
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Calendar Sidebar */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FiCalendar /> Calendar
            </h2>
            <Calendar value={date} onChange={setDate as any} className="w-full" />
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">Quick Stats</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Scheduled</span>
                  <span className="font-bold">8</span>
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Drafts</span>
                  <span className="font-bold">3</span>
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Published</span>
                  <span className="font-bold">24</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-6">
            {/* Quick Actions */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-3 gap-4">
              <button className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 hover:border-blue-500 transition text-left">
                <FiPlus className="text-blue-400 mb-2" size={24} />
                <h3 className="font-semibold text-white">Create Post</h3>
                <p className="text-sm text-gray-400">Write and schedule new content</p>
              </button>
              <button className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 hover:border-green-500 transition text-left">
                <FiCalendar className="text-green-400 mb-2" size={24} />
                <h3 className="font-semibold text-white">View Schedule</h3>
                <p className="text-sm text-gray-400">Manage your content calendar</p>
              </button>
              <button className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 hover:border-purple-500 transition text-left">
                <FiBarChart2 className="text-purple-400 mb-2" size={24} />
                <h3 className="font-semibold text-white">Analytics</h3>
                <p className="text-sm text-gray-400">View performance metrics</p>
              </button>
            </motion.div>

            {/* Recent Posts */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-6">Recent Posts</h2>
              <div className="space-y-4">
                {posts.map(post => (
                  <div key={post.id} className="flex items-center justify-between bg-slate-700/30 p-4 rounded-lg border border-slate-700">
                    <div>
                      <p className="text-white font-medium">{post.content}</p>
                      <div className="flex gap-2 mt-2">
                        {post.platforms.map(platform => (
                          <span key={platform} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded text-xs font-semibold ${post.status === 'scheduled' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {post.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
