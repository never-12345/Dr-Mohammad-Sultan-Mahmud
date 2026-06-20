import { motion } from 'framer-motion';
import { BookOpen, Eye, Users, Shield, Award } from 'lucide-react';
import { servicesData } from '../data/content';

export function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto px-4 py-8 space-y-8"
    >
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-display">Professional Services</h1>
        <p className="text-lg text-slate-500 mt-4 leading-relaxed">
          Contributions to the global academic community through editorial leadership, journal reviewing, and conference organization.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Editorial Section */}
        <section className="glass-card p-6 md:p-8 rounded-3xl shadow-2xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
          <div>
            <h2 className="text-xs font-bold text-slate-900 border-b border-slate-100/80 pb-3 mb-6 flex items-center gap-2 uppercase tracking-wider font-display">
              <div className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <BookOpen size={13} />
              </div>
              Editorial Work
            </h2>
            <div className="space-y-6">
              {servicesData.editorial.map((item, idx) => (
                <div key={idx} className="group">
                  <span className="inline-flex px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded-md uppercase tracking-wider mb-2">
                    {item.role}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-semibold mb-2">{item.journal}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journal Reviewing */}
        <section className="glass-card p-6 md:p-8 rounded-3xl shadow-2xs hover:shadow-sm transition-all duration-300">
          <h2 className="text-xs font-bold text-slate-900 border-b border-slate-100/80 pb-3 mb-6 flex items-center gap-2 uppercase tracking-wider font-display">
            <div className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Eye size={13} />
            </div>
            Journal Reviewing
          </h2>
          <p className="text-slate-400 text-xs mb-4 leading-relaxed font-medium">Regular peer-reviewer for esteemed scientific journals:</p>
          <div className="grid grid-cols-1 gap-2">
            {servicesData.journalReviewer.map((journal, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-2 bg-slate-50/50 hover:bg-indigo-50 border border-slate-100 hover:border-indigo-100 rounded-xl text-slate-600 hover:text-indigo-800 transition-all duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                <span className="text-xs font-bold leading-normal truncate">{journal}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Conference Service */}
        <section className="glass-card p-6 md:p-8 rounded-3xl shadow-2xs hover:shadow-sm transition-all duration-300 md:col-span-2">
          <h2 className="text-xs font-bold text-slate-900 border-b border-slate-100/80 pb-3 mb-6 flex items-center gap-2 uppercase tracking-wider font-display">
            <div className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Users size={13} />
            </div>
            Conference & Professional Service
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicesData.conferenceService.map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-50/40 border border-slate-100 rounded-2xl flex flex-col justify-center gap-1 hover:border-indigo-100 transition-colors">
                <span className="text-xs text-indigo-600 font-bold uppercase tracking-wider">{item.role}</span>
                <span className="text-sm font-bold text-slate-800 leading-snug">{item.conference}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Memberships */}
        <section className="glass-card p-6 md:p-8 rounded-3xl shadow-2xs hover:shadow-sm transition-all duration-300 md:col-span-2">
          <h2 className="text-xs font-bold text-slate-900 border-b border-slate-100/80 pb-3 mb-6 flex items-center gap-2 uppercase tracking-wider font-display">
            <div className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <Shield size={13} />
            </div>
            Professional Memberships
          </h2>
          <div className="flex flex-wrap gap-3">
            {servicesData.memberships.map((membership, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 hover:bg-indigo-50 border border-slate-100 hover:border-indigo-100 text-slate-700 hover:text-indigo-800 rounded-2xl text-xs font-bold transition-all duration-300 shadow-3xs">
                <Award size={14} className="text-indigo-500 shrink-0" />
                <span>{membership}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
