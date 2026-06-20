import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, GraduationCap, FileText, BookOpen, Newspaper } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const navItems = [
  { name: 'Home', path: '/', icon: <BookOpen className="w-5 h-5 mb-1" /> },
  { name: 'News & Events', path: '/news', icon: <Newspaper className="w-5 h-5 mb-1" /> },
  { name: 'Teaching', path: '/teaching', icon: <GraduationCap className="w-5 h-5 mb-1" /> },
  { name: 'Publications', path: '/publications', icon: <FileText className="w-5 h-5 mb-1" /> },
  { name: 'Services', path: '/services', icon: <Users className="w-5 h-5 mb-1" /> },
  { name: 'Students', path: '/students', icon: <Users className="w-5 h-5 mb-1" /> },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-1 lg:flex-none"></div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={clsx(
                  "text-sm font-medium transition-colors hover:text-accent",
                  location.pathname === item.path ? "text-accent" : "text-slate-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-slate-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="flex flex-col px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === item.path 
                    ? "bg-blue-50 text-accent" 
                    : "text-slate-700 hover:bg-slate-50 hover:text-accent"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
