import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000" 
              alt="Developer Desk Setup" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent rounded-3xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-brand-black mb-6">
            Passionate about <span className="text-brand-accent">clean code</span> and user experience.
          </h2>
          <div className="space-y-4 text-brand-gray leading-relaxed">
            <p>
              I am a motivated Frontend Developer with a strong foundation in modern web technologies. My journey in software engineering is driven by a desire to solve complex problems and build tools that improve people's lives.
            </p>
            <p>
              With an Advanced Diploma in Software Engineering (Ongoing) and a background in commerce, I bring a unique perspective to development, balancing technical precision with an understanding of business goals.
            </p>
          </div>
          
          <div className="mt-10 flex gap-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-brand-black">2024</span>
              <span className="text-xs uppercase tracking-widest text-brand-gray font-bold">Started ADSE</span>
            </div>
            <div className="w-px h-12 bg-brand-black/10" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-brand-black">10+</span>
              <span className="text-xs uppercase tracking-widest text-brand-gray font-bold">Projects Built</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
