import { motion } from 'framer-motion';
import { MapPin, Mail, GraduationCap, Award, BookOpen, BrainCircuit, ExternalLink, Database, Link as LinkIcon } from 'lucide-react';
import { profileData, newsItems, mediaItems } from '../data/content';
import { Link } from 'react-router-dom';

export function Home() {
  const sidebarLinks = [
    { url: profileData.scholarUrl, label: "Google Scholar", icon: <GraduationCap size={16} />, color: "hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200" },
    { url: profileData.researchGateUrl, label: "ResearchGate", icon: <BrainCircuit size={16} />, color: "hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200" },
    { url: profileData.wosUrl, label: "Web of Science", icon: <Award size={16} />, color: "hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200" },
    { url: profileData.scopusUrl, label: "Scopus", icon: <Database size={16} />, color: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200" },
    { url: profileData.orcidUrl, label: "ORCID", icon: <LinkIcon size={16} />, color: "hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200" },
    { url: profileData.dblpUrl, label: "DBLP", icon: <BookOpen size={16} />, color: "hover:bg-slate-100 hover:text-slate-700 hover:border-slate-300" },
  ].filter(link => link.url && link.url !== "#");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 max-w-6xl mx-auto px-4 py-8">
      
      {/* Left Sidebar Column - Profile & Academic Details */}
      <aside className="lg:col-span-4 flex flex-col gap-6 w-full">
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center group"
        >
          <div className="w-48 h-56 rounded-xl overflow-hidden shadow-md border-4 border-slate-50 bg-slate-200 mb-6 group-hover:scale-[1.02] transition-transform duration-300">
            <img src="/sir-2.0.png" alt={profileData.name} className="w-full h-full object-cover" />
          </div>
          
          <h2 className="text-xl font-bold text-slate-900 leading-tight mb-1">{profileData.name}</h2>
          <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-4">{profileData.title}</p>
          
          {/* Quick Contact */}
          <div className="w-full border-t border-slate-100 pt-4 flex flex-col gap-2.5 text-left text-sm text-slate-600">
            {profileData.email && (
              <a href={`mailto:${profileData.email}`} className="flex items-center gap-3 hover:text-accent font-medium transition-colors">
                <Mail size={16} className="text-slate-400 shrink-0" />
                <span className="truncate">{profileData.email}</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* Degrees / Education Section (Under Photo) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
        >
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4 flex items-center gap-2 uppercase tracking-wider text-xs">
            <GraduationCap size={16} className="text-accent" />
            Education / Degrees
          </h3>
          <div className="flex flex-col gap-4">
            {profileData.degrees?.map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm leading-snug">{item.degree}</h4>
                  <p className="text-xs text-slate-500 leading-normal">{item.institution}, {item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Research Interests Section (Under Photo) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
        >
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4 flex items-center gap-2 uppercase tracking-wider text-xs">
            <BrainCircuit size={16} className="text-accent" />
            Research Interests
          </h3>
          <div className="flex flex-wrap gap-2">
            {profileData.researchInterests?.map((interest, idx) => (
              <span key={idx} className="px-2.5 py-1 bg-slate-50 text-slate-700 rounded-lg border border-slate-100 text-xs font-medium">
                {interest}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Teaching Interests Section (Under Photo) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
        >
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4 flex items-center gap-2 uppercase tracking-wider text-xs">
            <BookOpen size={16} className="text-accent" />
            Teaching Focus
          </h3>
          <div className="flex flex-wrap gap-2">
            {profileData.teachingInterests?.map((interest, idx) => (
              <span key={idx} className="px-2.5 py-1 bg-blue-50/50 text-slate-700 rounded-lg border border-blue-100/30 text-xs font-medium">
                {interest}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Profiles Section (Under Photo) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
        >
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4 flex items-center gap-2 uppercase tracking-wider text-xs">
            <LinkIcon size={16} className="text-accent" />
            Research Profiles
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {sidebarLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center gap-2 p-2 border border-slate-100 rounded-xl transition-all duration-300 text-slate-600 text-xs font-medium ${link.color}`}
              >
                <span className="shrink-0">{link.icon}</span>
                <span className="truncate">{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </aside>

      {/* Right Column - Main Details */}
      <main className="lg:col-span-8 flex flex-col gap-8 md:gap-12">
        {/* Title and Affiliation Section */}
        <section className="flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-1.5"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">{profileData.name}</h1>
            <p className="text-base md:text-lg text-slate-500 font-semibold">{profileData.title}</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-xs"
          >
            {profileData.affiliations.map((affil, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <GraduationCap size={20} className="text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-800 font-bold text-sm md:text-base leading-snug">{affil.university}</span>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin size={12} className="text-slate-400 shrink-0" />
                    <span className="text-xs md:text-sm leading-none">{affil.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Biography Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-slate max-w-none"
        >
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xs border border-slate-100 leading-relaxed">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-accent rounded-full inline-block" />
              Biography
            </h3>
            <p className="text-slate-700 text-base md:text-lg whitespace-pre-wrap leading-relaxed">{profileData.bio}</p>
          </div>
        </motion.section>

        {/* Bottom grid: News & Themes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* News & Events (on the left) */}
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-xs border border-slate-100 flex flex-col h-full"
          >
            <div className="flex justify-between items-center mb-6 pb-2 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-900">News & Events</h2>
              <Link to="/news" className="text-xs text-accent hover:underline font-semibold flex items-center gap-1">
                View All <ExternalLink size={12} />
              </Link>
            </div>
            
            <div className="space-y-5 flex-1">
              {newsItems.slice(0, 3).map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-20 shrink-0 text-xs font-bold text-slate-400 group-hover:text-accent transition-colors pt-0.5">
                    {item.date}
                  </div>
                  <div className="text-slate-700 text-sm leading-relaxed">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Research Themes (on the right) */}
          <div className="flex flex-col gap-6">
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-8 rounded-2xl shadow-xs text-white"
            >
              <h2 className="text-xl font-bold mb-6 pb-2 border-b border-slate-700/50">
                Research Themes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mediaItems.map((item, index) => (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden group">
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                      <p className="font-medium text-xs text-white leading-tight">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Prospective Students */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 border border-blue-100 p-6 md:p-8 rounded-2xl"
            >
              <h2 className="text-lg font-bold text-blue-900 mb-2">Prospective Students</h2>
              <p className="text-blue-800/80 text-xs leading-relaxed">
                I am always looking for motivated Ph.D. students. If you are interested in joining the lab and doing research in Data Mining, Machine Learning, and Big Data Analysis, please read my recent papers and feel free to reach out to me with your CV and transcripts.
              </p>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  );
}
