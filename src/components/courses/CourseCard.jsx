import { motion } from 'framer-motion'

export default function CourseCard({ course, type }) {
  const isCompleted = type === 'completed';

  return (
    <div className="py-2 border-b border-gray-300 px-4 group">
      <motion.div 
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 25 
        }}
        className="flex justify-between flex-col md:flex-row hover:scale-102 gap-4 py-4 px-6 rounded-3xl border border-transparent hover:border-black/10 hover:shadow-xl hover:shadow-black/[0.02]"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-shrink-0 items-center gap-3 mb-1">
            <span className="text-xs font-sans text-gray-800 tracking-tighter">{course.courseCode}</span>
            <h3 className="text-xs md:text-sm font-semibold text-slate-900">{course.courseTitle}</h3>
          </div>
          <div className="flex gap-2">
            {course.tags.map((tag, i) => (
              <span key={i} className="text-[10px] font-medium text-slate-600 uppercase tracking-widest">{tag}</span>
            ))}
          </div>
        </div>
          
        <div className="flex items-center gap-8">
          {isCompleted && (
            <div className="flex gap-6 italic">
              <span className="text-xs text-slate-500">Grade: <b className="text-slate-900 not-italic font-medium">{course.grade}</b></span>
              <span className="text-xs text-slate-500">Rating: <b className="text-slate-900 not-italic font-medium">{course.rating}/10</b></span>
            </div>
          )}
          <span className="text-xs font-mono text-slate-800 w-16 text-right">{course.term}</span>
        </div>
      </motion.div>
    </div>
  );
}