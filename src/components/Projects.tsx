import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/constants';

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-brand-black mb-4">Featured Projects</h2>
          <p className="text-brand-gray max-w-xl">A selection of my recent work, ranging from full-stack applications to interactive frontend experiences.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-brand-black/5 shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-black mb-3">{project.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-brand-accent hover:underline">
                    Live Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
