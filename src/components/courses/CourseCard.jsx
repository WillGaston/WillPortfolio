import { motion } from 'framer-motion'

import React from 'react';

export default function CourseCard({ course, type }) {
  const isCompleted = type === 'completed';

  const gradeNum = (g) => {
    const n = Number(g);
    return isNaN(n) ? null : n;
  };
 
  const gradeStyles = (n) => {
    if (n === null) return { color: "text-emerald-600", bg: "bg-emerald-500" };
    if (n >= 85) return { color: "text-emerald-600", bg: "bg-emerald-500" };
    if (n >= 75) return { color: "text-blue-600", bg: "bg-blue-500" };
    if (n >= 65) return { color: "text-amber-600", bg: "bg-amber-500" };
    return { color: "text-rose-600", bg: "bg-rose-500" };
  };
 
  const n = gradeNum(course.grade);
  const styles = gradeStyles(n);
  const barW = n !== null ? Math.min(100, Math.max(0, n)) : 0;
 
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
    >
      <div className="flex-1 min-w-0 space-y-2">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 tracking-tight">
            {course.courseCode}
          </span>
          <h3 className="text-sm font-semibold text-slate-800 tracking-tight">
            {course.courseTitle}
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-1.5">
          {course.tags.map((tag, i) => (
            <span key={i} className="text-[10px] font-bold text-slate-400 bg-slate-50 border border-slate-200/40 rounded px-1.5 py-0.5 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
 
      <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-none border-slate-100 pt-3 sm:pt-0">
        {isCompleted && (
          <div className="flex items-center gap-6">
            
            <div className="flex flex-col gap-1.5 items-start sm:items-end">
              <span className="text-xs font-medium text-slate-400">
                Grade: <b className={`font-bold ${styles.color}`}>{course.grade}</b>
              </span>
              <div className="w-20 h-1 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className={`h-full rounded-full ${styles.bg}`}
                  style={{ width: `${barW}%` }}
                />
              </div>
            </div>
 
            <div className="flex flex-col gap-1.5 items-start sm:items-end">
              <span className="text-xs font-medium text-slate-400">
                Rating: <b className="text-slate-700 font-bold">{course.rating}/10</b>
              </span>
              <div className="w-20 h-1 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-indigo-500"
                  style={{ width: `${(Number(course.rating) / 10) * 100}%` }}
                />
              </div>
            </div>
            
          </div>
        )}
        
        <span className="text-xs font-mono font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-md border border-slate-150 w-16 text-center self-end sm:self-auto">
          {course.term}
        </span>
      </div>
    </motion.div>
  );
}