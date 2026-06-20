import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Users, Award } from 'lucide-react';
import { profileData } from '../data/content';

export function Publications() {
  const publications = [
    {
      title: "Determination of the Number of Clusters in High-Dimensional Data with Subspace Clusters",
      journal: "IEEE Transactions on Big Data",
      year: "2025",
      doi: "10.1109/tbdata.2025.3588027",
      contributors: "Mohammad Sultan Mahmud; Joshua Zhexue Huang; Germán González-Almagro; Salvador García"
    },
    {
      title: "RSPCA: Random Sample Partition and Clustering Approximation for ensemble learning of big data",
      journal: "Pattern Recognition",
      year: "2025",
      doi: "10.1016/j.patcog.2024.111321",
      contributors: "Mohammad Sultan Mahmud; Hua Zheng; Diego Garcia-Gil; Salvador García; Joshua Zhexue Huang"
    },
    {
      title: "Approximate approach for frequent itemsets mining on massive distributed data beyond computing capacity",
      journal: "Expert Systems with Applications",
      year: "2026",
      doi: "10.1016/j.eswa.2026.132043",
      contributors: "Mohammad Sultan Mahmud et al."
    },
    {
      title: "Clustering approximation via a fusion of multiple random samples",
      journal: "Information Fusion",
      year: "2024",
      doi: "10.1016/j.inffus.2023.101986",
      contributors: "Mohammad Sultan Mahmud; Joshua Zhexue Huang; Salvador García"
    },
    {
      title: "An ensemble method for estimating the number of clusters in a big data set using multiple random samples",
      journal: "Journal of Big Data",
      year: "2023",
      doi: "10.1186/s40537-023-00709-4",
      contributors: "Mohammad Sultan Mahmud; Joshua Zhexue Huang; Rukhsana Ruby; Kaishun Wu"
    },
    {
      title: "Approximate Clustering Ensemble Method for Big Data",
      journal: "IEEE Transactions on Big Data",
      year: "2023",
      doi: "10.1109/TBDATA.2023.3255003",
      contributors: "Mohammad Sultan Mahmud; Joshua Zhexue Huang; Rukhsana Ruby; Alladoumbaye Ngueilbaye; Kaishun Wu"
    },
    {
      title: "A context-aware dropout-based occlusion-adaptive network for robust facial landmark and emotion detection",
      journal: "Journal of King Saud University Computer and Information Sciences",
      year: "2026",
      doi: "10.1007/s44443-026-00705-7",
      contributors: "Mohammad Sultan Mahmud et al."
    },
    {
      title: "Enhancing query-based segmentation models with full-pixel integration for curvilinear object segmentation",
      journal: "Information Fusion",
      year: "2026",
      doi: "10.1016/j.inffus.2025.103793",
      contributors: "Mohammad Sultan Mahmud et al."
    },
    {
      title: "ADODN: A Dropout-Based Occlusion-Aware Deep Network for Facial Landmark Detection",
      journal: "IEEE Access",
      year: "2026",
      doi: "10.1109/ACCESS.2026.3681267",
      contributors: "Mohammad Sultan Mahmud et al."
    }
  ];

  // Helper to format authors list and bold "Mohammad Sultan Mahmud"
  const renderContributors = (contributorsList: string) => {
    const parts = contributorsList.split(/(Mohammad Sultan Mahmud)/);
    return (
      <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium leading-relaxed">
        <Users size={12} className="text-slate-400 shrink-0" />
        <span>
          {parts.map((part, i) => 
            part === "Mohammad Sultan Mahmud" 
              ? <strong key={i} className="text-indigo-600 font-bold">{part}</strong> 
              : part
          )}
        </span>
      </span>
    );
  };

  // Group publications by year
  const years = Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b.localeCompare(a));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto px-4 py-8"
    >
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Selected Publications</h1>
        <p className="text-lg text-slate-500 mt-3 leading-relaxed">
          For a complete and up-to-date list of publications, please visit my{' '}
          <a href={profileData.scholarUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:underline">
            Google Scholar
          </a>{' '}
          or{' '}
          <a href={profileData.researchGateUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:underline">
            ResearchGate
          </a>{' '}
          profiles.
        </p>
      </div>

      <div className="space-y-12">
        {years.map((year) => (
          <div key={year} className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200/80 pb-2 flex items-center gap-2 font-display">
              <Calendar className="text-indigo-500" size={20} />
              {year}
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              {publications
                .filter(pub => pub.year === year)
                .map((pub, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="glass-card p-6 rounded-3xl shadow-2xs hover:shadow-sm hover:border-indigo-200/60 transition-all duration-300 group flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                  >
                    <div className="space-y-2 flex-1">
                      <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                        {pub.title}
                      </h3>
                      <div className="flex flex-col gap-1.5">
                        {renderContributors(pub.contributors)}
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-indigo-50/50 text-indigo-700 font-bold rounded-md border border-indigo-100/30">
                            {pub.journal}
                          </span>
                          {pub.journal.includes('Information Fusion') && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-50 text-amber-700 font-bold rounded-md border border-amber-100">
                              <Award size={10} /> IF: 14.7
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <a 
                      href={`https://doi.org/${pub.doi}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-indigo-600 text-slate-500 hover:text-white border border-slate-100 hover:border-indigo-600 rounded-xl text-xs font-bold transition-all duration-300 shadow-3xs shrink-0 self-end md:self-center"
                    >
                      <span>DOI Link</span>
                      <ExternalLink size={12} />
                    </a>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
