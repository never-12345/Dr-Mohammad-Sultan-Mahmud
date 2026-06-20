import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, GraduationCap, FileText, Home as HomeIcon, Newspaper } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const navItems = [
  { name: 'Home',          path: '/',             icon: <HomeIcon size={15} /> },
  { name: 'News & Events', path: '/news',         icon: <Newspaper size={15} /> },
  { name: 'Teaching',      path: '/teaching',     icon: <GraduationCap size={15} /> },
  { name: 'Publications',  path: '/publications', icon: <FileText size={15} /> },
  { name: 'Services',      path: '/services',     icon: <Users size={15} /> },
  { name: 'Students',      path: '/students',     icon: <Users size={15} /> },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center h-14 gap-1">

          {/* Desktop Nav — left-aligned */}
          <div className="hidden md:flex items-center gap-1 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={clsx(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-150",
                  location.pathname === item.path
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
                )}
              >
                <span className={clsx(
                  "flex items-center",
                  location.pathname === item.path ? "text-white" : "text-indigo-400"
                )}>
                  {item.icon}
                </span>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-100 ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5 text-slate-700" /> : <Menu className="w-5 h-5 text-slate-700" />}
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
                  "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold",
                  location.pathname === item.path
                    ? "bg-indigo-600 text-white"
                    : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                )}
              >
                <span className={location.pathname === item.path ? "text-white" : "text-indigo-400"}>
                  {item.icon}
                </span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
