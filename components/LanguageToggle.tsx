
import React from 'react';
import { Language } from '../types';

interface Props {
  current: Language;
  onToggle: (lang: Language) => void;
}

const LanguageToggle: React.FC<Props> = ({ current, onToggle }) => {
  return (
    <div className="flex space-x-3 text-[10px] font-bold tracking-widest uppercase">
      <button 
        onClick={() => onToggle('en')}
        className={`transition-colors duration-300 ${current === 'en' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
      >
        EN
      </button>
      <span className="text-slate-300">/</span>
      <button 
        onClick={() => onToggle('zh')}
        className={`transition-colors duration-300 ${current === 'zh' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
      >
        中
      </button>
      <span className="text-slate-300">/</span>
      <button 
        onClick={() => onToggle('de')}
        className={`transition-colors duration-300 ${current === 'de' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageToggle;
