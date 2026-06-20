import { motion } from 'framer-motion';
import { UserCircle, GraduationCap, Sparkles } from 'lucide-react';
import { studentsData } from '../data/content';

export function Students() {
  const categories = [
    { title: "Ph.D. Students", data: studentsData.phd, tagColor: "bg-emerald-50 text-emerald-700 border-emerald-100/50" },
    { title: "Master's Students", data: studentsData.masters, tagColor: "bg-sky-50 text-sky-700 border-sky-100/50" },
    { title: "Undergraduate Students", data: studentsData.undergrad, tagColor: "bg-indigo-50 text-indigo-700 border-indigo-100/50" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto px-4 py-8"
    >
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-display">Research Group</h1>
        <p className="text-lg text-slate-500 mt-4 max-w-3xl leading-relaxed">
          I am fortunate to work with highly motivated students at various levels. If you are interested in joining our group, please read the instructions for Prospective Students on the home page.
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((category, idx) => (
          <section key={idx} className="space-y-6">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-3 font-display uppercase tracking-wider text-xs">
              <GraduationCap className="text-indigo-500" size={16} /> {category.title}
            </h2>
            
            {category.data.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.data.map((student, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.05 }}
                    className="glass-card p-5 rounded-3xl shadow-2xs hover:shadow-sm hover:border-indigo-200/50 transition-all duration-300 group flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50/50 flex items-center justify-center text-indigo-500 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <UserCircle size={24} className="shrink-0" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors truncate">{student.name}</h3>
                      <span className={`inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide border ${category.tagColor}`}>
                        <Sparkles size={8} />
                        {student.status}
                      </span>
                      <p className="text-xs font-semibold text-slate-400 mt-3 leading-relaxed">
                        Focus: {student.research}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="glass-card p-6 rounded-2xl border border-slate-100 flex items-center justify-center text-center">
                <p className="text-slate-400 text-xs italic font-medium">No current students in this category at this time.</p>
              </div>
            )}
          </section>
        ))}
      </div>
    </motion.div>
  );
}
