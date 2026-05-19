import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { StatCounter } from './StatCounter';

export const Hero = ({ onDownload }: { onDownload: () => void }) => {
  return (
    <section className="relative min-h-[90vh] pt-40 pb-20 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-brand-accent/10 text-brand-accent rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Frontend Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-black mb-6 leading-tight">
            Building digital <br />
            <span className="text-brand-accent">experiences</span> that matter.
          </h1>
          <p className="text-lg text-brand-gray max-w-md mb-10 leading-relaxed">
            Hi, I'm Mohammad Mohsin. I specialize in crafting high-performance, accessible, and user-centric web applications using modern technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-brand-black text-white font-bold rounded-xl shadow-lg transition-all text-sm"
            >
              View Projects
            </motion.a>
            <motion.a
              href="/assets/cv/Mohsin_CV.pdf"
              download="Mohsin_CV.pdf"
              onClick={onDownload}
              whileHover={{ scale: 1.05, backgroundColor: "#EAB308" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand-yellow text-brand-black font-bold rounded-xl shadow-lg transition-all text-sm flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-brand-black/10 text-brand-black font-bold rounded-xl hover:bg-brand-black/5 transition-all text-sm"
            >
              Get in Touch
            </motion.a>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-brand-black/5 pt-10">
            <StatCounter value="60+" label="Words Per Minute typing speed" />
            <StatCounter value="100%" label="Commitment to excellence" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden aspect-square bg-slate-100 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000" 
              alt="Web Development Workspace"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/20 to-transparent" />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl -z-10" />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-accent/5 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
