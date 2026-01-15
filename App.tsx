
import React, { useState, useEffect } from 'react';
import { Language, translations } from './types';
import LanguageToggle from './components/LanguageToggle';
import { getDailyReflection } from './services/geminiService';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh');
  const [reflection, setReflection] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const t = translations[lang];

  useEffect(() => {
    const fetchReflection = async () => {
      setLoading(true);
      const text = await getDailyReflection(lang);
      setReflection(text);
      setLoading(false);
    };
    fetchReflection();
  }, [lang]);

  return (
    <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-8 min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center mb-20">
        <div className="text-xl font-light tracking-tighter text-slate-900">
          ALICE <span className="text-blue-400">/</span> SPACE
        </div>
        <LanguageToggle current={lang} onToggle={setLang} />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Intro Section */}
        <section className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-extralight text-slate-900 mb-8 leading-tight">
            {t.title}
          </h1>
          <p className="text-lg text-slate-500 mb-10 font-light leading-relaxed">
            {t.intro}
          </p>
          
          <div className="h-px w-12 bg-blue-300 mb-10"></div>

          <h2 className="text-2xl md:text-3xl font-light text-slate-800 leading-snug">
            {t.heroText}
          </h2>
        </section>

        {/* Nature Image - Refined small size */}
        <section className="mb-20">
          <div className="max-w-lg">
            <div className="relative rounded-xl overflow-hidden shadow-sm aspect-[16/10] group border border-white/40">
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop" 
                alt="Mountain and Sea" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-[9px] text-slate-400 italic tracking-[0.3em] uppercase">
              Between the mountains and the sea
            </p>
          </div>
        </section>

        {/* Narrative Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 mb-28">
          {/* Identity Modules */}
          <div className="space-y-16">
            <div className="group">
              <h3 className="text-[11px] font-bold tracking-[0.3em] text-blue-500 uppercase mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                01. {t.modules.care.title}
              </h3>
              <p className="text-slate-600 font-light leading-relaxed text-base max-w-md">
                {t.modules.care.description}
              </p>
            </div>

            <div className="group">
              <h3 className="text-[11px] font-bold tracking-[0.3em] text-blue-500 uppercase mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                02. {t.modules.doing.title}
              </h3>
              <p className="text-slate-600 font-light leading-relaxed text-base max-w-md">
                {t.modules.doing.description}
              </p>
            </div>
          </div>

          <div className="space-y-16">
            <div className="group">
              <h3 className="text-[11px] font-bold tracking-[0.3em] text-blue-500 uppercase mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                03. {t.modules.origin.title}
              </h3>
              <p className="text-slate-600 font-light leading-relaxed text-base max-w-md">
                {t.modules.origin.description}
              </p>
            </div>

            {/* Contact / Collision Module */}
            <div className="glass-card p-10 rounded-2xl border border-blue-200/40 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[11px] font-bold tracking-[0.3em] text-blue-600 uppercase mb-5">
                04. {t.modules.connect.title}
              </h3>
              <p className="text-slate-700 font-normal leading-relaxed text-sm mb-8">
                {t.modules.connect.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:hello@alice.me" className="text-[10px] font-bold tracking-widest uppercase py-2.5 px-6 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-all">
                  Get in touch
                </a>
                <button className="text-[10px] font-bold tracking-widest uppercase py-2.5 px-6 border border-slate-300 text-slate-600 rounded-full hover:border-slate-900 hover:text-slate-900 transition-all">
                  Collaboration
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* AI Reflection Section */}
        <section className="mb-24 max-w-2xl mx-auto text-center">
          <div className="py-16 px-8 border-t border-slate-200/50">
             <span className="inline-block text-slate-400 text-[10px] font-medium tracking-[0.5em] uppercase mb-8">
               {t.reflectionTitle}
             </span>
             <p className={`text-xl font-extralight text-slate-700 italic transition-opacity duration-1000 ${loading ? 'opacity-20' : 'opacity-100'}`}>
                {loading ? t.loadingReflection : `"${reflection}"`}
             </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto pt-10 border-t border-slate-200/40 flex flex-col md:flex-row justify-between items-center text-slate-400 text-[10px] tracking-[0.2em] font-medium uppercase">
        <p className="mb-4 md:mb-0 opacity-60">{t.footer}</p>
        <div className="flex space-x-10">
          <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-500 transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
