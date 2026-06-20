import { type ReactNode } from 'react';
import { Navbar } from './Navbar';
import { profileData } from '../data/content';
import { GraduationCap, FileText, Globe, Link as LinkIcon, Award, Database } from 'lucide-react';

export function Layout({ children }: { children: ReactNode }) {
  const socialLinks = [
    { url: profileData.scholarUrl, label: "Google Scholar", icon: <GraduationCap size={16} /> },
    { url: profileData.researchGateUrl, label: "ResearchGate", icon: <Globe size={16} /> },
    { url: profileData.wosUrl, label: "Web of Science", icon: <Award size={16} /> },
    { url: profileData.scopusUrl, label: "Scopus", icon: <Database size={16} /> },
    { url: profileData.linkedinUrl, label: "LinkedIn", icon: <LinkIcon size={16} /> },
    { url: profileData.githubUrl, label: "GitHub", icon: <LinkIcon size={16} /> },
    { url: profileData.orcidUrl, label: "ORCID", icon: <LinkIcon size={16} /> },
    { url: profileData.dblpUrl, label: "DBLP", icon: <FileText size={16} /> },
  ].filter(link => link.url && link.url !== "#");

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfd] font-sans text-slate-700 relative overflow-x-hidden">
      {/* Background ambient glow blobs */}
      <div className="absolute top-0 left-0 right-0 h-[600px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] aspect-square rounded-full bg-indigo-200/30 blur-[120px]" />
        <div className="absolute top-[10%] right-[-10%] w-[45%] aspect-square rounded-full bg-blue-200/25 blur-[120px]" />
      </div>

      <Navbar />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12 relative z-10">
        {children}
      </main>
      
      <footer className="w-full bg-slate-950 text-white border-t border-slate-900 py-16 text-sm mt-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-10">
          
          {/* Social Icons Section */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-2 px-4 py-2 bg-slate-900/60 hover:bg-indigo-950 border border-slate-800/80 hover:border-indigo-800/50 rounded-xl hover:text-white transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <div className="w-6 h-6 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 transition-colors">
                  {link.icon}
                </div>
                <span className="font-semibold text-xs tracking-wide text-slate-300 group-hover:text-white transition-colors">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="text-center space-y-3">
            <p className="text-slate-400 text-xs">© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
            <div className="flex items-center justify-center gap-1.5 text-slate-500 text-xs font-semibold uppercase tracking-wider">
              <span>Daffodil International University</span>
              <span className="text-slate-700">•</span>
              <span>Shenzhen Technology University</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
