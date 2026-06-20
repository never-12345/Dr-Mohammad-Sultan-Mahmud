import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';
import { teachingTimeline } from '../data/content';

export function Teaching() {
  // Helper to choose a icon based on timeline content
  const getIcon = (content: string) => {
    const c = content.toLowerCase();
    if (c.includes('degree') || c.includes('ph.d') || c.includes('phd') || c.includes('master')) {
      return <GraduationCap className="w-4 h-4 text-emerald-500" />;
    }
    if (c.includes('award') || c.includes('scholarship')) {
      return <Award className="w-4 h-4 text-amber-500" />;
    }
    return <Briefcase className="w-4 h-4 text-indigo-500" />;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Teaching & Appointments</h1>
        <p className="text-lg text-slate-500 mt-3 leading-relaxed">
          An overview of academic appointments, course directives, and milestone achievements in my teaching and professional career.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-200/70 ml-4 md:ml-8 mt-12 pl-6 md:pl-10 space-y-10">
        {teachingTimeline.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline node */}
            <span className="absolute -left-[43px] md:-left-[59px] top-1 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white rounded-full border border-slate-200 shadow-2xs group-hover:border-accent group-hover:shadow-md transition-all duration-300">
              {getIcon(item.content)}
            </span>

            {/* Content card */}
            <div className="glass-card p-6 rounded-2xl shadow-2xs hover:shadow-xs group-hover:border-indigo-200/80 hover:-translate-y-0.5 transition-all duration-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-indigo-50 text-indigo-700 mb-4 shadow-3xs uppercase">
                <Calendar size={12} className="shrink-0" />
                {item.date}
              </span>
              <h3 className="text-lg text-slate-800 font-bold leading-snug group-hover:text-indigo-950 transition-colors">
                {item.content}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
      
    </motion.div>
  );
}
