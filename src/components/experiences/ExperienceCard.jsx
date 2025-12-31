import { motion } from "framer-motion";

export default function ExperienceCard({ image, title, company, duration, description, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group py-10 md:py-16 border-b border-slate-100 last:border-0"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-20">
      
        <div className="w-full md:w-48 flex-shrink-0">
          <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-slate-50 flex items-center justify-center p-2.5 transition-colors group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-slate-400">
              <img src={image} alt={company} className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                {duration}
              </span>
              <span className="text-sm font-bold text-[#fb8500] md:mt-1">
                {company}
              </span>
            </div>
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="text-xl md:text-xl font-black text-slate-900 tracking-tight mb-4 group-hover:text-[#fb8500] transition-colors">
            {title}
          </h3>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed font-light max-w-2xl">
            {description}
          </p>
        </div>
        
      </div>
    </motion.div>
  );
}