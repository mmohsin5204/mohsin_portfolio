import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, MapPin, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
