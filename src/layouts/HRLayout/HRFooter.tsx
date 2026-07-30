import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const HRFooter: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md z-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] font-medium text-slate-400 border-t border-slate-200">
          <p>
            &copy; {new Date().getFullYear()} Enterprise ERP. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/support/terms')} className="hover:text-slate-600 transition-colors">
                Terms
              </button>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <button onClick={() => navigate('/support/privacy-policy')} className="hover:text-slate-600 transition-colors">
                Privacy
              </button>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <button onClick={() => navigate('/support/feedback')} className="hover:text-slate-600 transition-colors">
                Feedback
              </button>
            </div>

            <div className="w-px h-4 bg-slate-300 hidden sm:block"></div>

            <div className="flex items-center gap-2.5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-xs" title="Facebook">
                <Facebook size={15} fill="currentColor" strokeWidth={0} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-xs" title="Twitter">
                <Twitter size={14} fill="currentColor" strokeWidth={0} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-xs" title="LinkedIn">
                <Linkedin size={14} fill="currentColor" strokeWidth={0} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-xs" title="Instagram">
                <Instagram size={15} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
