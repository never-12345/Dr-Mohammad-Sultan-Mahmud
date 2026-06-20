import { motion } from 'framer-motion';
import { Calendar, Award, Briefcase, GraduationCap } from 'lucide-react';
import { newsItems } from '../data/content';

export function News() {
  // Helper to choose a icon based on news content
  const getIcon = (content: string) => {
    const c = content.toLowerCase();
    if (c.includes('degree') || c.includes('ph.d') || c.includes('phd') || c.includes('master')) {
      return <GraduationCap className="w-5 h-5 text-emerald-500" />;
    }
    if (c.includes('started') || c.includes('joined') || c.includes('professor') || c.includes('faculty') || c.includes('researcher')) {
      return <Briefcase className="w-5 h-5 text-accent" />;
    }
    return <Award className="w-5 h-5 text-amber-500" />;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">News & Events</h1>
        <p className="text-lg text-slate-600 mt-3 leading-relaxed">
          Follow updates on my academic journey, recent accomplishments, appointments, and research milestones.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 mt-12 pl-6 md:pl-10 space-y-12">
        {newsItems.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline indicator node */}
            <span className="absolute -left-[43px] md:-left-[59px] top-1.5 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white rounded-full border border-slate-200 shadow-sm group-hover:border-accent group-hover:shadow-md transition-all duration-300">
              {getIcon(item.content)}
            </span>

            {/* Date Tag */}
            <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold tracking-wider text-slate-400 group-hover:text-accent transition-colors mb-2">
              <Calendar size={14} />
              <span>{item.date}</span>
            </div>

            {/* News Content Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-md transition-all duration-300 group-hover:border-slate-200">
              <p className="text-lg text-slate-800 font-medium leading-relaxed">
                {item.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
