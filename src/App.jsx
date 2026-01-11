import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Quote, PenTool, ChevronUp, Plus, Minus, Eye, EyeOff,
  Menu, X, Settings, ChevronRight, Home, BookMarked, Heart
} from 'lucide-react';
import { massData } from './data/massData';
import { getQuoteOfTheDay, getRecentQuotes } from './data/quotesData';
import { getAllReflections, formatReflectionDate } from './data/reflectionsData';

function App() {
  const [activeTab, setActiveTab] = useState('mass');
  const [fontSize, setFontSize] = useState(16);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expandedReflection, setExpandedReflection] = useState(null);
  const [showPinyin, setShowPinyin] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-base', `${fontSize}px`);
  }, [fontSize]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  const navigateToTab = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
    scrollToTop();
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-100">
      {/* Header */}
      <header className="bg-gradient-to-br from-navy-900 to-navy-800 text-white sticky top-0 z-50 shadow-xl">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setMenuOpen(true)}
              className="p-2 -ml-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
            
            <div className="text-center flex-1">
              <h1 className="font-display text-xl md:text-2xl font-semibold tracking-wide">
                Gloria in Excelsis Deo
              </h1>
              <p className="font-chinese text-gold-500 text-sm md:text-base mt-0.5">
                天主在天受光荣
              </p>
            </div>

            <button 
              onClick={() => setSettingsOpen(!settingsOpen)}
              className="p-2 -mr-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Settings"
            >
              <Settings size={24} />
            </button>
          </div>

          {/* Settings Dropdown */}
          {settingsOpen && (
            <div className="mt-4 p-4 bg-navy-800/80 backdrop-blur rounded-xl border border-white/10 animate-slide-down">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-cream-200">Font Size</span>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                    className="w-8 h-8 rounded-full border-2 border-gold-500 text-gold-500 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-medium">{fontSize}px</span>
                  <button 
                    onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                    className="w-8 h-8 rounded-full border-2 border-gold-500 text-gold-500 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-cream-200">Show Pinyin</span>
                <button 
                  onClick={() => setShowPinyin(!showPinyin)}
                  className={`w-12 h-7 rounded-full transition-colors relative ${showPinyin ? 'bg-gold-500' : 'bg-gray-600'}`}
                >
                  <span className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform ${showPinyin ? 'left-6' : 'left-1'}`} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Tabs */}
        <nav className="flex border-t border-white/10">
          {[
            { id: 'mass', label: 'Mass', labelCn: '弥撒', icon: BookOpen },
            { id: 'quotes', label: 'Quotes', labelCn: '金句', icon: Quote },
            { id: 'reflections', label: 'Reflections', labelCn: '反思', icon: PenTool }
          ].map(({ id, label, labelCn, icon: Icon }) => (
            <button
              key={id}
              onClick={() => navigateToTab(id)}
              className={`nav-tab ${activeTab === id ? 'active' : ''}`}
            >
              <Icon size={18} />
              <span className="text-xs">{label}</span>
              <span className="text-[10px] font-chinese opacity-70">{labelCn}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* Slide-out Menu */}
      {menuOpen && (
        <>
          <div 
            className="drawer-backdrop opacity-100"
            onClick={() => setMenuOpen(false)}
          />
          <div className="drawer translate-x-0">
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl text-gold-500">Menu</h2>
                <button 
                  onClick={() => setMenuOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg text-cream-200"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <nav className="p-4">
              <div className="space-y-1">
                {[
                  { id: 'mass', label: 'Order of Mass', icon: BookOpen },
                  { id: 'quotes', label: 'Daily Quotes', icon: Quote },
                  { id: 'reflections', label: 'Reflections', icon: PenTool }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => navigateToTab(id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      activeTab === id 
                        ? 'bg-gold-500/20 text-gold-500' 
                        : 'text-cream-200 hover:bg-white/5'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{label}</span>
                    <ChevronRight size={18} className="ml-auto opacity-50" />
                  </button>
                ))}
              </div>

              {activeTab === 'mass' && (
                <div className="mt-6">
                  <h3 className="text-xs uppercase tracking-wider text-cream-300/60 px-4 mb-2">
                    Jump to Section
                  </h3>
                  <div className="space-y-1">
                    {massData.sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-cream-200 hover:bg-white/5 transition-colors"
                      >
                        <span className="text-sm">{section.title.english}</span>
                        <span className="text-xs font-chinese text-cream-300/60">{section.title.chinese}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
              <p className="text-xs text-cream-300/60 text-center">
                jeromemass.com
              </p>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-6 pb-24">
        {activeTab === 'mass' && <MassTab showPinyin={showPinyin} scrollToSection={scrollToSection} />}
        {activeTab === 'quotes' && <QuotesTab />}
        {activeTab === 'reflections' && <ReflectionsTab expandedReflection={expandedReflection} setExpandedReflection={setExpandedReflection} />}
      </main>

      {/* Scroll to Top */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-20 right-4 w-12 h-12 rounded-full bg-navy-900 text-gold-500 shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-navy-800 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ChevronUp size={24} />
      </button>

      {/* Footer */}
      <footer className="bg-navy-900 text-cream-200 text-center py-4 px-4 text-sm">
        <p className="opacity-80">Based on the Roman Missal, Third Edition</p>
        <p className="text-xs opacity-60 mt-1">中文简体字汉语拼音</p>
      </footer>
    </div>
  );
}

// Mass Tab Component
function MassTab({ showPinyin, scrollToSection }) {
  return (
    <div className="animate-fade-in space-y-5">
      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-2 gap-3">
        {massData.sections.slice(0, 4).map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="card p-4 text-left hover:shadow-xl transition-all hover:-translate-y-0.5 group"
          >
            <span className="text-sm font-medium text-gray-800 group-hover:text-gold-600 transition-colors">
              {section.title.english}
            </span>
            <span className="block text-xs font-chinese text-gray-500 mt-1">
              {section.title.chinese}
            </span>
          </button>
        ))}
      </div>

      {/* Mass Sections */}
      {massData.sections.map((section) => (
        <section key={section.id} id={section.id} className="mass-section">
          <h2 className="font-display text-xl md:text-2xl font-semibold text-navy-900 mb-4 pb-3 border-b border-cream-200">
            {section.title.english}
            <span className="block font-chinese text-lg text-gold-600 mt-1">
              {section.title.chinese}
            </span>
          </h2>

          {section.parts.map((part, partIndex) => (
            <div key={partIndex} className="mb-6 last:mb-0">
              {part.title && (
                <h3 className="text-base font-semibold text-burgundy-500 mb-3 flex items-baseline gap-2">
                  <span>{part.title}</span>
                  {part.titleChinese && (
                    <span className="font-chinese text-sm font-normal text-gray-500">
                      {part.titleChinese}
                    </span>
                  )}
                </h3>
              )}

              {part.content.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-4 last:mb-0">
                  <div className={`speaker-label ${
                    item.speaker === 'priest' ? 'speaker-priest' : 
                    item.speaker === 'all' ? 'speaker-all' : 'speaker-lector'
                  }`}>
                    {item.speaker === 'priest' ? '主祭 Priest:' : 
                     item.speaker === 'all' ? '全体 All:' : '读经员 Lector:'}
                  </div>
                  
                  {item.rubric && (
                    <p className="text-sm italic text-burgundy-500 mb-1">{item.rubric}</p>
                  )}
                  
                  <p className="text-english mb-1">{item.english}</p>
                  
                  {showPinyin && item.pinyin && (
                    <p className="text-pinyin">{item.pinyin}</p>
                  )}
                  
                  <p className="text-chinese">{item.chinese}</p>
                </div>
              ))}

              {partIndex < section.parts.length - 1 && part.content.length > 0 && (
                <div className="divider" />
              )}
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

// Quotes Tab
function QuotesTab() {
  const todayQuote = getQuoteOfTheDay();
  const recentQuotes = getRecentQuotes(5);
  const today = new Date();

  return (
    <div className="animate-fade-in space-y-6">
      <div className="quote-card">
        <p className="text-xs uppercase tracking-widest text-gold-300 mb-4 relative z-10">
          Quote of the Day • {today.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
        </p>
        <p className="font-display text-xl md:text-2xl font-medium leading-relaxed mb-6 relative z-10">
          "{todayQuote.text}"
        </p>
        <p className="text-gold-500 font-semibold relative z-10">— {todayQuote.source}</p>
        {todayQuote.reference && (
          <p className="text-gold-300/80 text-sm mt-1 relative z-10">{todayQuote.reference}</p>
        )}
      </div>

      <div>
        <h3 className="font-display text-xl text-center text-navy-900 mb-4">Previous Days</h3>
        <div className="space-y-3">
          {recentQuotes.map((quote, index) => {
            const date = new Date();
            date.setDate(date.getDate() - (index + 1));
            return (
              <div key={quote.id} className="card p-4 border-l-4 border-gold-500">
                <p className="text-xs text-gray-500 mb-2">
                  {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </p>
                <p className="font-display text-gray-800 leading-relaxed">"{quote.text}"</p>
                <p className="text-sm text-gray-500 mt-2">— {quote.source}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Reflections Tab
function ReflectionsTab({ expandedReflection, setExpandedReflection }) {
  const reflections = getAllReflections();

  return (
    <div className="animate-fade-in space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl text-navy-900 mb-2">Reflections</h2>
        <p className="text-gray-500">Faith journeys and spiritual insights</p>
      </div>

      {reflections.map((reflection) => (
        <article key={reflection.id} className="card overflow-hidden">
          <div className="p-5 md:p-6">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              {formatReflectionDate(reflection.date)}
            </p>
            <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">
              {reflection.title}
            </h3>

            {expandedReflection === reflection.id ? (
              <>
                <div className="prose prose-gray max-w-none">
                  {reflection.content.split('\n\n').map((para, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed mb-4">{para}</p>
                  ))}
                </div>
                
                {reflection.scripture && (
                  <div className="bg-cream-100 p-4 rounded-xl border-l-4 border-gold-500 my-4">
                    <p className="italic text-gray-700">"{reflection.scripture.text}"</p>
                    <p className="text-right text-sm font-semibold text-gray-500 mt-2">
                      — {reflection.scripture.reference}
                    </p>
                  </div>
                )}
                
                <button 
                  onClick={() => setExpandedReflection(null)}
                  className="btn-secondary mt-4"
                >
                  Show Less
                </button>
              </>
            ) : (
              <>
                <p className="text-gray-600 leading-relaxed mb-4">{reflection.excerpt}</p>
                <button 
                  onClick={() => setExpandedReflection(reflection.id)}
                  className="btn-secondary"
                >
                  Read More
                </button>
              </>
            )}

            {reflection.tags && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-cream-200">
                {reflection.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs px-3 py-1 bg-cream-100 text-gray-500 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export default App;
