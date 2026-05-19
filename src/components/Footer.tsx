import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export const Footer = () => {
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
