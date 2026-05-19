import { Layout, Database, Terminal, Cpu, CheckCircle2 } from 'lucide-react';
import { SKILLS } from '../data/constants';

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1">
            <h2 className="text-6xl font-black tracking-tighter text-brand-black mb-8 lowercase leading-none">
              technical <br /> <span className="text-brand-accent">arsenal</span>
            </h2>
            <p className="text-brand-gray text-lg font-light leading-relaxed">
              A comprehensive suite of technologies I leverage to build modern, scalable web applications.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-gray mb-6 flex items-center gap-2">
                  <Layout size={14} className="text-brand-accent" /> Frontend & Core
                </h3>
                <div className="flex flex-wrap gap-3">
                  {SKILLS.technical.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white border border-brand-black/5 rounded-full text-xs font-bold tracking-wider text-brand-black shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-gray mb-6 flex items-center gap-2">
                  <Database size={14} className="text-brand-accent" /> Database Management
                </h3>
                <div className="flex flex-wrap gap-3">
                  {SKILLS.database.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white border border-brand-black/5 rounded-full text-xs font-bold tracking-wider text-brand-black shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-gray mb-6 flex items-center gap-2">
                  <Terminal size={14} className="text-brand-accent" /> Tools & Software
                </h3>
                <div className="flex flex-wrap gap-3">
                  {SKILLS.tools.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white border border-brand-black/5 rounded-full text-xs font-bold tracking-wider text-brand-black shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-gray mb-6 flex items-center gap-2">
                  <Cpu size={14} className="text-brand-accent" /> Strengths
                </h3>
                <div className="flex flex-wrap gap-3">
                  {SKILLS.soft.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-xs font-bold tracking-wider text-brand-accent flex items-center gap-2">
                      <CheckCircle2 size={12} /> {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
