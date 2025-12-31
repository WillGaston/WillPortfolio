export default function CourseTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex space-x-2 mb-6 ml-2 mr-2">
      <button
        className={`px-4 py-2 rounded-full border ${activeTab === 'completed' ? 'bg-green-100 text-green-700 border-green-400' : 'bg-white border-gray-300'}`}
        onClick={() => setActiveTab('completed')}
      >
        ✅ Completed
      </button>
      <button
        className={`px-4 py-2 rounded-full border ${activeTab === 'completing' ? 'bg-red-100 text-red-700 border-red-400' : 'bg-white border-gray-300'}`}
        onClick={() => setActiveTab('completing')}
      >
        ✍️ Completing
      </button>
      <button
        className={`px-4 py-2 rounded-full border ${activeTab === 'planned' ? 'bg-blue-100 text-blue-700 border-blue-400' : 'bg-white border-gray-300'}`}
        onClick={() => setActiveTab('planned')}
      >
        📝 To Complete
      </button>
    </div>
  );
}