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
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {children}
      </main>
      <footer className="w-full bg-slate-900 text-white py-12 text-sm mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-8">
          
          {/* Social Icons Section (UA Style) */}
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 hover:text-accent transition-colors"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-slate-800 rounded-sm group-hover:bg-slate-700 transition-colors">
                  {link.icon}
                </div>
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="text-center text-slate-400 space-y-2">
            <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
            <p className="text-slate-500">Daffodil International University</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
