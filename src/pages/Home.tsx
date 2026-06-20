import { motion } from 'framer-motion';
import { MapPin, Mail, GraduationCap, Award, BookOpen, BrainCircuit, ExternalLink, Database, Link as LinkIcon, Sparkles, Newspaper } from 'lucide-react';
import { profileData, newsItems, mediaItems } from '../data/content';
import { Link } from 'react-router-dom';

export function Home() {
  const sidebarLinks = [
    { url: profileData.scholarUrl, label: "Scholar", icon: <GraduationCap size={13} />, color: "hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200/60" },
    { url: profileData.researchGateUrl, label: "ResearchGate", icon: <BrainCircuit size={13} />, color: "hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200/60" },
    { url: profileData.wosUrl, label: "WoS", icon: <Award size={13} />, color: "hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200/60" },
    { url: profileData.scopusUrl, label: "Scopus", icon: <Database size={13} />, color: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200/60" },
    { url: profileData.orcidUrl, label: "ORCID", icon: <LinkIcon size={13} />, color: "hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200/60" },
    { url: profileData.dblpUrl, label: "DBLP", icon: <BookOpen size={13} />, color: "hover:bg-slate-50 hover:text-slate-700 hover:border-slate-300/60" },
  ].filter(link => link.url && link.url !== "#");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 max-w-6xl mx-auto px-4 py-2">

      {/* ── LEFT SIDEBAR ─────────────────────────────────── */}
      <motion.aside
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="lg:col-span-4 glass-card rounded-3xl overflow-hidden flex flex-col relative shadow-xs"
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500" />

        <div className="flex flex-col gap-0 p-5 pt-6 flex-1">
          {/* ── Photo + Name + Title ── */}
          <div className="flex gap-4 items-center mb-4">
            <div className="w-20 h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-slate-100/50 bg-slate-200">
              <img src="/sir-2.0.png" alt={profileData.name} className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <h2 className="text-base font-bold text-slate-900 leading-snug tracking-tight">{profileData.name}</h2>
              <div className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 bg-indigo-50 border border-indigo-100/50 text-indigo-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                <Sparkles size={9} className="animate-pulse" />
                <span>{profileData.title}</span>
              </div>
              {profileData.email && (
                <a href={`mailto:${profileData.email}`} className="flex items-center gap-1.5 mt-2 text-slate-400 hover:text-indigo-600 transition-colors">
                  <Mail size={11} />
                  <span className="text-[10px] font-semibold truncate">{profileData.email}</span>
                </a>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100/80 mb-3" />

          {/* ── Education ── */}
          <div className="mb-3">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <GraduationCap size={11} className="text-indigo-500" /> Education
            </h3>
            <div className="flex flex-col gap-2">
              {profileData.degrees?.map((item, idx) => (
                <div key={idx} className="flex gap-2.5 items-start pl-2 border-l-2 border-indigo-200">
                  <div>
                    <p className="text-xs font-bold text-slate-800 leading-snug">{item.degree}</p>
                    <p className="text-[10px] text-slate-400 font-semibold">{item.institution} · {item.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100/80 mb-3" />

          {/* ── Research & Teaching Interests ── */}
          <div className="mb-3">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <BrainCircuit size={11} className="text-indigo-500" /> Research Interests
            </h3>
            <div className="flex flex-wrap gap-1">
              {profileData.researchInterests?.map((interest, idx) => (
                <span key={idx} className="px-1.5 py-0.5 bg-slate-50 hover:bg-indigo-50 border border-slate-100 hover:border-indigo-100 text-slate-600 hover:text-indigo-700 rounded text-[10px] font-semibold transition-all duration-300 cursor-default">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <BookOpen size={11} className="text-indigo-500" /> Teaching Focus
            </h3>
            <div className="flex flex-wrap gap-1">
              {profileData.teachingInterests?.map((interest, idx) => (
                <span key={idx} className="px-1.5 py-0.5 bg-indigo-50/40 hover:bg-indigo-50 border border-indigo-100/30 hover:border-indigo-100 text-slate-600 hover:text-indigo-700 rounded text-[10px] font-semibold transition-all duration-300 cursor-default">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100/80 mb-3" />

          {/* ── Academic Profiles ── */}
          <div>
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <LinkIcon size={11} className="text-indigo-500" /> Academic Profiles
            </h3>
            <div className="grid grid-cols-3 gap-1.5">
              {sidebarLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 px-2 py-1.5 border border-slate-100/70 rounded-lg transition-all duration-300 text-slate-500 text-[10px] font-bold ${link.color}`}
                >
                  <span className="shrink-0">{link.icon}</span>
                  <span className="truncate">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.aside>

      {/* ── RIGHT MAIN COLUMN ─────────────────────────────── */}
      <motion.main
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="lg:col-span-8 flex flex-col gap-4"
      >
        {/* ── Hero: Name + Affiliations ── */}
        <section className="flex flex-col gap-3">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Dr. Mohammad <span className="gradient-text">Sultan Mahmud</span>
            </h1>
            <p className="text-sm text-slate-500 font-semibold tracking-wide mt-0.5">Associate Professor · Computer Science</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {profileData.affiliations.map((affil, idx) => (
              <div key={idx} className="glass-card p-3 rounded-2xl flex gap-3 items-start shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <GraduationCap size={16} />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-slate-800 font-bold text-xs leading-snug">{affil.university}</span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <MapPin size={10} className="shrink-0" />
                    <span className="text-[10px] leading-normal truncate">{affil.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Biography ── */}
        <section className="glass-card p-4 rounded-2xl shadow-2xs">
          <h3 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5 font-display uppercase tracking-wider">
            <span className="w-1 h-4 accent-gradient rounded-full inline-block" />
            About Me
          </h3>
          <p className="text-slate-600 text-xs leading-relaxed line-clamp-4">{profileData.bio}</p>
        </section>

        {/* ── Bottom 3-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">

          {/* News & Events */}
          <section className="glass-card p-4 rounded-2xl shadow-2xs flex flex-col">
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-100">
              <h2 className="text-xs font-bold text-slate-900 font-display uppercase tracking-wider flex items-center gap-1.5">
                <Newspaper size={12} className="text-indigo-500" /> News
              </h2>
              <Link to="/news" className="text-[10px] text-indigo-600 hover:underline font-bold flex items-center gap-1 transition-colors">
                All <ExternalLink size={10} />
              </Link>
            </div>
            <div className="space-y-3 flex-1">
              {newsItems.slice(0, 3).map((item, index) => (
                <div key={index} className="flex gap-2.5 group/news">
                  <div className="w-14 shrink-0 text-[9px] font-bold text-indigo-400/80 group-hover/news:text-indigo-600 transition-colors pt-0.5 leading-snug">
                    {item.date}
                  </div>
                  <div className="text-slate-600 text-[10px] leading-relaxed font-medium">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Research Themes */}
          <section className="bg-slate-950 p-4 rounded-2xl shadow-2xs text-white border border-slate-900 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-indigo-500/10 blur-xl pointer-events-none" />
            <h2 className="text-xs font-bold mb-3 pb-2 border-b border-slate-800 font-display uppercase tracking-wider">
              Research Themes
            </h2>
            <div className="grid grid-cols-1 gap-2 flex-1">
              {mediaItems.map((item, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden group/theme border border-slate-800" style={{ height: '80px' }}>
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover/theme:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent flex items-end p-2.5">
                    <p className="font-bold text-[10px] text-white leading-tight tracking-wide">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Prospective Students */}
          <section className="bg-indigo-50/50 border border-indigo-100/50 p-4 rounded-2xl shadow-2xs flex flex-col">
            <h2 className="text-xs font-bold text-indigo-900 mb-2 font-display uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1 h-3.5 bg-indigo-600 rounded-full inline-block" />
              Open Positions
            </h2>
            <p className="text-indigo-950/80 text-[10px] leading-relaxed font-medium flex-1">
              I am actively looking for motivated Ph.D. students. If you are interested in joining the lab and doing research in Data Mining, Machine Learning, and Big Data Analysis, please read my recent papers and reach out with your CV and transcripts.
            </p>
            <a
              href={`mailto:${profileData.email}`}
              className="mt-3 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-[10px] font-bold transition-colors shadow-xs"
            >
              <Mail size={10} /> Contact Me
            </a>
          </section>
        </div>
      </motion.main>
    </div>
  );
}

import { profileData, newsItems, mediaItems } from '../data/content';
import { Link } from 'react-router-dom';

export function Home() {
  const sidebarLinks = [
    { url: profileData.scholarUrl, label: "Scholar", icon: <GraduationCap size={15} />, color: "hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200/60" },
    { url: profileData.researchGateUrl, label: "ResearchGate", icon: <BrainCircuit size={15} />, color: "hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200/60" },
    { url: profileData.wosUrl, label: "WoS", icon: <Award size={15} />, color: "hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200/60" },
    { url: profileData.scopusUrl, label: "Scopus", icon: <Database size={15} />, color: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200/60" },
    { url: profileData.orcidUrl, label: "ORCID", icon: <LinkIcon size={15} />, color: "hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200/60" },
    { url: profileData.dblpUrl, label: "DBLP", icon: <BookOpen size={15} />, color: "hover:bg-slate-50 hover:text-slate-700 hover:border-slate-300/60" },
  ].filter(link => link.url && link.url !== "#");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 max-w-6xl mx-auto px-4 py-4">
      
      {/* Left Sidebar Column - Profile & Academic Details */}
      <aside className="lg:col-span-4 flex flex-col gap-6 w-full">
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-6 rounded-3xl shadow-xs flex flex-col items-center text-center relative overflow-hidden group hover:shadow-md transition-all duration-300"
        >
          {/* Subtle top light bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500" />
          
          <div className="w-48 h-56 rounded-2xl overflow-hidden shadow-sm bg-slate-200 mb-6 group-hover:scale-[1.02] transition-all duration-500 relative border border-slate-100/50">
            <img src="/sir-2.0.png" alt={profileData.name} className="w-full h-full object-cover" />
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mb-2 tracking-tight">{profileData.name}</h2>
          
          {/* Interactive Title Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-100/50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
            <Sparkles size={12} className="animate-pulse" />
            <span>{profileData.title}</span>
          </div>
          
          {/* Quick Contact & Info */}
          <div className="w-full border-t border-slate-100/80 pt-5 flex flex-col gap-3 text-left text-xs md:text-sm text-slate-600">
            {profileData.email && (
              <a href={`mailto:${profileData.email}`} className="flex items-center gap-3 p-2 bg-slate-50/50 border border-slate-100/30 rounded-xl hover:bg-indigo-50/40 hover:text-accent font-semibold transition-all duration-300 group/mail">
                <div className="w-8 h-8 rounded-lg bg-indigo-100/50 flex items-center justify-center text-indigo-600 shrink-0 group-hover/mail:bg-indigo-600 group-hover/mail:text-white transition-all duration-300">
                  <Mail size={14} />
                </div>
                <span className="truncate">{profileData.email}</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* Degrees / Education Section (Under Photo) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="glass-card p-6 rounded-3xl shadow-xs hover:shadow-md transition-all duration-300"
        >
          <h3 className="text-xs font-bold text-slate-900 border-b border-slate-100/80 pb-3 mb-4 flex items-center gap-2 uppercase tracking-wider font-display">
            <div className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <GraduationCap size={13} />
            </div>
            Education / Degrees
          </h3>
          <div className="flex flex-col gap-4">
            {profileData.degrees?.map((item, idx) => (
              <div key={idx} className="flex gap-3.5 relative pl-4 border-l border-slate-100">
                {/* Custom timeline bullet */}
                <div className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 border-2 border-white shadow-xs" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm leading-snug">{item.degree}</h4>
                  <p className="text-xs text-slate-400 mt-1 font-semibold">{item.institution}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-slate-50 text-slate-500 border border-slate-100 rounded-md text-[10px] font-bold tracking-wide">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Research Interests Section (Under Photo) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="glass-card p-6 rounded-3xl shadow-xs hover:shadow-md transition-all duration-300"
        >
          <h3 className="text-xs font-bold text-slate-900 border-b border-slate-100/80 pb-3 mb-4 flex items-center gap-2 uppercase tracking-wider font-display">
            <div className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <BrainCircuit size={13} />
            </div>
            Research Interests
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {profileData.researchInterests?.map((interest, idx) => (
              <span key={idx} className="px-2.5 py-1 bg-slate-50 hover:bg-indigo-50 border border-slate-100 hover:border-indigo-100 text-slate-600 hover:text-indigo-700 rounded-lg text-xs font-semibold transition-all duration-300">
                {interest}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Teaching Interests Section (Under Photo) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="glass-card p-6 rounded-3xl shadow-xs hover:shadow-md transition-all duration-300"
        >
          <h3 className="text-xs font-bold text-slate-900 border-b border-slate-100/80 pb-3 mb-4 flex items-center gap-2 uppercase tracking-wider font-display">
            <div className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <BookOpen size={13} />
            </div>
            Teaching Focus
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {profileData.teachingInterests?.map((interest, idx) => (
              <span key={idx} className="px-2.5 py-1 bg-indigo-50/40 hover:bg-indigo-50 border border-indigo-100/30 hover:border-indigo-100 text-slate-600 hover:text-indigo-700 rounded-lg text-xs font-semibold transition-all duration-300">
                {interest}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Profiles Section (Under Photo) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="glass-card p-6 rounded-3xl shadow-xs hover:shadow-md transition-all duration-300"
        >
          <h3 className="text-xs font-bold text-slate-900 border-b border-slate-100/80 pb-3 mb-4 flex items-center gap-2 uppercase tracking-wider font-display">
            <div className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
              <LinkIcon size={13} />
            </div>
            Academic Profiles
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {sidebarLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center gap-2 px-3 py-2 border border-slate-100/70 rounded-xl transition-all duration-300 text-slate-600 text-xs font-bold shadow-2xs ${link.color}`}
              >
                <span className="shrink-0">{link.icon}</span>
                <span className="truncate">{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </aside>

      {/* Right Column - Main Details */}
      <main className="lg:col-span-8 flex flex-col gap-8 md:gap-10">
        {/* Title and Affiliation Section */}
        <section className="flex flex-col gap-5">
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-1"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
              Dr. Mohammad <span className="gradient-text bg-gradient-to-r from-indigo-600 to-indigo-800">Sultan Mahmud</span>
            </h1>
            <p className="text-base md:text-lg text-slate-500 font-semibold tracking-wide">Associate Professor in Computer Science</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {profileData.affiliations.map((affil, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl flex gap-4 items-start shadow-2xs hover:shadow-xs transition-shadow duration-300">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-slate-800 font-bold text-sm md:text-base leading-snug truncate">{affil.university}</span>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin size={12} className="shrink-0" />
                    <span className="text-xs leading-normal truncate">{affil.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Biography Section */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-slate max-w-none"
        >
          <div className="glass-card p-6 md:p-8 rounded-3xl shadow-2xs leading-relaxed relative overflow-hidden">
            <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2 font-display">
              <span className="w-1.5 h-6 accent-gradient rounded-full inline-block" />
              About Me
            </h3>
            <p className="text-slate-600 text-base md:text-lg whitespace-pre-wrap leading-relaxed font-normal">{profileData.bio}</p>
          </div>
        </motion.section>

        {/* Bottom grid: News & Themes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* News & Events (on the left) */}
          <motion.section 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 rounded-3xl shadow-2xs flex flex-col h-full hover:shadow-xs transition-shadow duration-300"
          >
            <div className="flex justify-between items-center mb-6 pb-3 border-b border-slate-100">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 font-display">News & Events</h2>
              <Link to="/news" className="text-xs text-indigo-600 hover:text-indigo-800 hover:underline font-bold flex items-center gap-1.5 transition-colors">
                View All <ExternalLink size={12} />
              </Link>
            </div>
            
            <div className="space-y-6 flex-1">
              {newsItems.slice(0, 3).map((item, index) => (
                <div key={index} className="flex gap-4 group/news">
                  <div className="w-20 shrink-0 text-xs font-bold text-indigo-500/70 group-hover/news:text-indigo-600 transition-colors pt-0.5">
                    {item.date}
                  </div>
                  <div className="text-slate-600 text-sm leading-relaxed font-medium">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Research Themes & Prospective Students (on the right) */}
          <div className="flex flex-col gap-6">
            <motion.section 
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-950 p-6 md:p-8 rounded-3xl shadow-xs text-white border border-slate-900 relative overflow-hidden"
            >
              {/* background design effect */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />
              
              <h2 className="text-lg md:text-xl font-bold mb-6 pb-3 border-b border-slate-800 font-display">
                Research Themes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mediaItems.map((item, index) => (
                  <div key={index} className="relative aspect-video rounded-xl overflow-hidden group/theme border border-slate-800">
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover/theme:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-4">
                      <p className="font-bold text-xs text-white leading-tight tracking-wide">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Prospective Students */}
            <motion.section 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-indigo-50/50 border border-indigo-100/50 p-6 md:p-8 rounded-3xl shadow-2xs hover:shadow-xs transition-shadow duration-300"
            >
              <h2 className="text-base font-bold text-indigo-900 mb-2 font-display uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-4 bg-indigo-600 rounded-full inline-block" />
                Prospective Students
              </h2>
              <p className="text-indigo-950/80 text-xs md:text-sm leading-relaxed font-medium">
                I am always looking for motivated Ph.D. students. If you are interested in joining the lab and doing research in Data Mining, Machine Learning, and Big Data Analysis, please read my recent papers and feel free to reach out to me with your CV and transcripts.
              </p>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  );
}
