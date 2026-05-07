/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ecommerceImg from './assets/5.jpg';
import taskManagerImg from './assets/7.jpg';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Menu, 
  X, 
  MapPin,
  Download,
  Code,
  ExternalLink,
  Cpu,
  Layout,
  Database,
  Terminal,
  CheckCircle2
} from 'lucide-react';

// --- Constants & Data ---

const PROJECTS = [
  {
    title: "Modern E-commerce Suite",
    description: "A full-featured online shopping platform with real-time inventory management and secure checkout.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    img: ecommerceImg,
    demo: "#",
    github: "#"
  },
  {
    title: "Enterprise Task Manager",
    description: "Collaborative project management tool designed for high-performance teams with detailed analytics.",
    tech: ["ASP.NET Core", "C#", "SQL Server", "jQuery"],
    img: taskManagerImg,
    demo: "#",
    github: "#"
  },
  {
    title: "Dynamic Portfolio Engine",
    description: "A high-performance portfolio template with smooth animations and SEO optimization.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    demo: "#",
    github: "#"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Interactive data visualization platform for monitoring business metrics in real-time.",
    tech: ["JavaScript", "Chart.js", "Bootstrap", "PHP"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    demo: "#",
    github: "#"
  }
];

const SKILLS = {
  technical: ["HTML5", "CSS3", "JavaScript", "TypeScript", "ReactJS", "Angular (Basics)", "Material UI", "Bootstrap", "jQuery", "PHP", "Laravel", "ASP.NET Core MVC", "RESTful APIs", "C#", "Dart (Basics)", "Flutter (Basics)"],
  database: ["MySQL", "SQL Server", "MongoDB (Basics)"],
  tools: ["MS Office", "MS Word", "MS Excel", "VS Code", "Git", "GitHub", "Microsoft Azure (Basics)"],
  soft: ["Active", "Punctual", "Good Learner", "Team Worker", "Hard Working", "Motivated", "Eager to learn"]
};

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', page: 'home' },
    { name: 'About', href: '#about', page: 'home' },
    { name: 'Skills', href: '#skills', page: 'home' },
    { name: 'Projects', href: '#projects', page: 'home' },
    { name: 'Education', href: '#education', page: 'home' },
    { name: 'Contact', href: '#contact', page: 'home' },
  ];

  const handleNavClick = (link: any) => {
    setCurrentPage(link.page);
    setIsMobileMenuOpen(false);
    if (link.page === 'home' && link.href !== '#') {
      setTimeout(() => {
        const element = document.querySelector(link.href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
          onClick={() => setCurrentPage('home')}
        >
          <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white">
            <Code size={18} />
          </div>
          <span className="text-brand-black">M. MOHSIN</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.name}
              onClick={() => handleNavClick(link)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`text-sm font-medium transition-colors relative group ${
                (currentPage === link.page && (link.page === 'home' && link.href === '#')) 
                ? 'text-brand-accent' : 'text-brand-gray hover:text-brand-black'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-accent transition-all duration-300 ${
                (currentPage === link.page && (link.page === 'home' && link.href === '#')) 
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

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="text-brand-black text-xl font-bold">M. MOHSIN</div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-black">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-3xl font-bold text-brand-black text-left hover:text-brand-accent transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const StatCounter = ({ value, label }: { value: string, label: string }) => (
  <div className="flex flex-col">
    <span className="text-4xl md:text-5xl font-black tracking-tighter text-brand-black">{value}</span>
    <span className="text-[10px] uppercase tracking-widest text-brand-gray mt-1 max-w-[120px] leading-tight">
      {label}
    </span>
  </div>
);

const Hero = ({ onDownload }: { onDownload: () => void }) => {
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

const About = () => {
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

const Skills = () => {
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

const Projects = () => {
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
              key={i}
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-3">{project.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a href={project.demo} className="flex items-center gap-2 text-xs font-bold text-brand-accent hover:underline">
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-xs font-bold text-brand-gray hover:text-brand-black">
                    Source Code <Code size={14} />
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

const Education = () => {
  const events = [
    { id: '01', title: "Aptech Certified ADSE", location: "Aptech Computer Education, Pakistan", date: "2024 - Ongoing", desc: "Advanced Diploma in Software Engineering covering Web Dev, Database, and Programming." },
    { id: '02', title: "Bachelor of Commerce (B.COM)", location: "Allama Iqbal Open University", date: "2024 - Ongoing", desc: "Higher education focusing on business and commerce fundamentals." },
    { id: '03', title: "Intermediate (Commerce)", location: "Govt. Islamia Commerce College", date: "2021 - 2023", desc: "Pre-university education with a focus on commercial studies." },
    { id: '04', title: "Matriculation (Computer)", location: "QJ Public School", date: "2019 - 2020", desc: "Foundational education with a specialization in computer science." },
  ];

  return (
    <section id="education" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-brand-black mb-16">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-slate-50 rounded-2xl border border-brand-black/5 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-brand-accent font-mono text-xs font-bold">{event.id}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gray">{event.date}</span>
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-2">{event.title}</h3>
              <p className="text-brand-gray text-sm mb-4">{event.desc}</p>
              <div className="flex items-center gap-2 text-brand-gray text-[10px] font-bold uppercase tracking-widest">
                <MapPin size={12} /> {event.location}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl font-bold text-brand-black mb-8">Get in Touch</h2>
          <p className="text-brand-gray text-lg mb-12 max-w-md">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <Terminal size={18} />
              </div>
              <span className="text-sm font-bold text-brand-black">m82186445@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <MapPin size={18} />
              </div>
              <span className="text-sm font-bold text-brand-black">Karachi, Pakistan</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-brand-black/5">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-gray uppercase tracking-widest">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your Name"
                      className="w-full bg-white border border-brand-black/10 rounded-xl px-4 py-3 focus:border-brand-accent outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-gray uppercase tracking-widest">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full bg-white border border-brand-black/10 rounded-xl px-4 py-3 focus:border-brand-accent outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-gray uppercase tracking-widest">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="How can I help you?"
                    className="w-full bg-white border border-brand-black/10 rounded-xl px-4 py-3 focus:border-brand-accent outline-none transition-colors resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-brand-black text-white font-bold rounded-xl hover:bg-brand-accent transition-all"
                >
                  Send Message
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-12"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-2">Message Sent!</h3>
                <p className="text-brand-gray">I'll get back to you as soon as possible.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6 border-t border-brand-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-brand-black font-bold text-lg">M. MOHSIN</div>
        
        <div className="flex gap-8 text-sm font-medium text-brand-gray">
          <a href="#" className="hover:text-brand-accent transition-colors flex items-center gap-1"><Instagram size={14} /> Instagram</a>
          <a href="#" className="hover:text-brand-accent transition-colors flex items-center gap-1"><Twitter size={14} /> Twitter</a>
          <a href="#" className="hover:text-brand-accent transition-colors flex items-center gap-1"><Facebook size={14} /> Facebook</a>
          <a href="#" className="hover:text-brand-accent transition-colors flex items-center gap-1"><Youtube size={14} /> Youtube</a>
        </div>

        <p className="text-xs text-brand-gray font-medium">
          © 2025 Mohammad Mohsin. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showToast, setShowToast] = useState(false);

  const handleDownload = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="bg-white selection:bg-brand-accent/30 selection:text-brand-black">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
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

