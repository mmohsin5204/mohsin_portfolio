import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Menu, Code } from 'lucide-react';
import { NAV_LINKS, NavLink } from '../data/constants';

export const Navbar = ({ 
  currentPage, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen,
  onNavClick
}: { 
  currentPage: string, 
  isMobileMenuOpen: boolean,
  setIsMobileMenuOpen: (open: boolean) => void,
  onNavClick: (link: NavLink) => void
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tight flex items-center gap-2 cursor-pointer"
          onClick={() => onNavClick({ name: 'Home', href: '#', page: 'home' })}
        >
          <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white">
            <Code size={18} />
          </div>
          <span className="text-brand-black">M. MOHSIN</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.button
              key={link.name}
              onClick={() => onNavClick(link)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`text-sm font-medium transition-colors relative group ${
                currentPage === link.href 
                ? 'text-brand-accent' : 'text-brand-gray hover:text-brand-black'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-accent transition-all duration-300 ${
                currentPage === link.href 
                ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-4">
           <div className="hidden lg:flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-gray font-bold">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Open to opportunities
          </div>
          <button 
            className="md:hidden p-2 text-brand-black"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};
