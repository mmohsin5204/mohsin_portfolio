/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Code, ExternalLink, Instagram, Twitter, Facebook, Youtube, CheckCircle2 } from 'lucide-react';
import { NAV_LINKS, NavLink } from './data/constants';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('#');
  const [showToast, setShowToast] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMobileMenuOpen]);

  const handleDownload = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleNavClick = (link: NavLink) => {
    setCurrentPage(link.href);
    setIsMobileMenuOpen(false);
    if (link.href !== '#') {
      setTimeout(() => {
        const element = document.querySelector(link.href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white selection:bg-brand-accent/30 selection:text-brand-black">
      <Navbar 
        currentPage={currentPage} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onNavClick={handleNavClick}
      />
      <main>
        <Hero onDownload={handleDownload} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-bg z-[100] flex flex-col p-8 md:p-12 overflow-y-auto h-[100dvh]"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="text-xl font-bold tracking-tight flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white">
                  <Code size={18} />
                </div>
                <span className="text-brand-black">M. MOHSIN</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-brand-black hover:bg-slate-200 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  className={`text-4xl font-black text-left hover:text-brand-accent transition-colors flex items-center justify-between group ${
                    currentPage === link.href ? 'text-brand-accent' : 'text-brand-black'
                  }`}
                >
                  <span>{link.name}</span>
                  <div className={`w-10 h-10 rounded-full border border-brand-black/5 flex items-center justify-center transition-all -translate-x-4 group-hover:translate-x-0 ${
                    currentPage === link.href ? 'opacity-100 translate-x-0' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <ExternalLink size={16} />
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-brand-black/5">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-gray mb-6">Connect with me</p>
              <div className="flex gap-6">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-gray hover:bg-brand-accent hover:text-white transition-all"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-gray hover:bg-brand-accent hover:text-white transition-all"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-gray hover:bg-brand-accent hover:text-white transition-all"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-gray hover:bg-brand-accent hover:text-white transition-all"><Youtube size={18} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-brand-black text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-white/10"
          >
            <CheckCircle2 size={18} className="text-brand-yellow" />
            <span className="text-sm font-bold">Download Started!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

