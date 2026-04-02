import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Extract city from pathname if it exists
  const pathParts = location.pathname.split('/').filter(Boolean);
  const cities = ['mint-hill', 'stallings', 'indian-trail', 'pineville', 'weddington'];
  const currentCity = cities.includes(pathParts[0]) ? pathParts[0] : null;

  // Determine the current city prefix for links
  const cityPrefix = currentCity ? `/${currentCity}` : '';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: currentCity ? `/${currentCity}` : '/' },
    { 
      name: 'Services', 
      dropdown: [
        { name: 'Overview', path: '/services' },
        { name: 'Driveways', path: `${cityPrefix}/driveways` },
        { name: 'Foundations', path: `${cityPrefix}/foundations` },
        { name: 'Patios', path: `${cityPrefix}/patios` },
        { name: 'Pool Decks', path: `${cityPrefix}/pool-decks` },
        { name: 'Garage Floors', path: `${cityPrefix}/garage-floors` },
        { name: 'Sidewalks', path: `${cityPrefix}/sidewalks` },
      ] 
    },
    {
      name: 'Locations',
      dropdown: [
        { name: 'Mooresville', path: '/' },
        { name: 'Kinston', path: '/kinston' },
        { name: 'Wilson', path: '/wilson' },
        { name: 'Mount Olive', path: '/mount-olive' },
        { name: 'Fremont', path: '/fremont' },
        { name: 'La Grange', path: '/la-grange' },
        { name: 'Dudley', path: '/dudley' },
      ]
    }
  ];

  const handleLinkClick = (path: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    if (path.includes('#')) {
      const id = path.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMobileDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-3'}`}>
        <div className="max-w-[1600px] mx-auto px-6 flex justify-between items-start">
          <Link to={currentCity ? `/${currentCity}` : "/"} onClick={() => handleLinkClick(currentCity ? `/${currentCity}` : "/")} className="flex items-start space-x-2 group">
            <div className="w-10 h-10 bg-black rounded-xl flex items-start justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20">
              <Logo className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight uppercase text-black">
              Mooresville <span className="text-black">Concrete</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 font-medium">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <div className="flex items-start space-x-1 cursor-pointer text-black hover:text-black py-3 text-xs uppercase tracking-widest font-bold transition-colors">
                    <span>{link.name}</span>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    
                    <div className="absolute top-full left-0 pt-4 hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-64 grid gap-2">
                        {link.dropdown.map((item) => {
                          const isItemActive = location.pathname === item.path;
                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`px-4 py-3 rounded-xl transition-colors text-sm font-semibold flex items-start justify-between ${
                                isItemActive ? 'bg-gray-50 text-black' : 'text-black/60 hover:bg-gray-50 hover:text-black'
                              }`}
                            >
                              {item.name}
                              <ArrowRight className={`w-4 h-4 transition-opacity ${isItemActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`${
                      location.pathname === link.path ? 'text-black' : 'text-black/60 hover:text-black'
                    } transition-colors text-xs uppercase tracking-widest font-bold py-3 block relative`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black rounded-full" />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-start space-x-4">
            <Link
              to={`${location.pathname}#contact`}
              onClick={() => handleLinkClick(`${location.pathname}#contact`)}
              className="hidden sm:flex bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all text-sm shadow-xl shadow-black/20 active:scale-95"
            >
              Get a Free Quote
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 hover:bg-gray-50 rounded-2xl transition-colors text-black relative z-[1001]"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-[1000] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[1001] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-8 h-full flex flex-col text-black">
          <div className="flex justify-between items-start mb-12 gap-4">
            <Link to={currentCity ? `/${currentCity}` : "/"} onClick={() => handleLinkClick(currentCity ? `/${currentCity}` : "/")} className="flex items-start space-x-2 min-w-0">
              <Logo className="text-black w-6 h-6 shrink-0" />
              <span className="text-xl font-bold uppercase tracking-tighter text-black truncate">Mooresville <span className="text-black">Concrete</span></span>
            </Link>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-50 rounded-xl transition-colors text-black shrink-0">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto pr-2 space-y-8">
            {navLinks.map((link) => (
              <div key={link.name} className="space-y-4">
                {link.dropdown ? (
                  <>
                    <button 
                      onClick={() => toggleMobileDropdown(link.name)}
                      className="w-full flex items-start justify-between text-black"
                    >
                      <h4 className="text-xs uppercase tracking-widest font-black">{link.name}</h4>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`grid gap-4 pl-4 overflow-hidden transition-all duration-300 ${activeDropdown === link.name ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => handleLinkClick(item.path)}
                          className="text-lg font-bold text-black hover:text-black flex items-start justify-between transition-colors"
                        >
                          {item.name}
                          <ArrowRight className="w-4 h-4 text-black/20" />
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className="text-xl font-bold text-black hover:text-black transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-gray-100">
            <Link
              to={`${location.pathname}#contact`}
              onClick={() => handleLinkClick(`${location.pathname}#contact`)}
              className="bg-black text-white px-6 py-3 rounded-xl font-bold text-center block text-lg shadow-xl shadow-black/20 active:scale-95"
            >
              Get a Free Quote
            </Link>
            <p className="text-center mt-4 text-black font-bold text-sm">(984) 253-1031</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

