import React, { useState } from 'react';

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <header className="bg-cream-50 shadow-lg fixed w-full top-0 z-50 border-b border-moss-200">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/logos/La Lune Yeni Logo SON.svg" 
              alt="A La Lune Logo" 
              className="h-10 w-auto mr-3"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden">
              <h1 className="text-2xl font-bold text-moss-800 font-serif">
                A La Lune
              </h1>
              <span className="ml-2 text-sm text-moss-600 font-medium">Patisserie</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Sol taraf - Ana sayfalar */}
            <div className="flex space-x-6">
              <button
                onClick={() => handleNavigation('home')}
                className="text-moss-700 hover:text-moss-600 transition-colors font-medium"
              >
                Anasayfa
              </button>
              <div className="relative group">
                <button className="text-moss-700 hover:text-moss-600 transition-colors flex items-center font-medium">
                  Kurumsal
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-cream-50 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-moss-200 rounded-lg">
                  <button
                    onClick={() => handleNavigation('about')}
                    className="block w-full text-left px-4 py-3 text-moss-700 hover:bg-moss-50 hover:text-moss-600 mx-2 my-1 transition-colors rounded-md"
                  >
                    Hakkımızda
                  </button>
                  <button
                    onClick={() => handleNavigation('career')}
                    className="block w-full text-left px-4 py-3 text-moss-700 hover:bg-moss-50 hover:text-moss-600 mx-2 my-1 transition-colors rounded-md"
                  >
                    Kariyer
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleNavigation('branches')}
                className="text-moss-700 hover:text-moss-600 transition-colors font-medium"
              >
                Şubelerimiz
              </button>
              <button
                onClick={() => handleNavigation('gallery')}
                className="text-moss-700 hover:text-moss-600 transition-colors font-medium"
              >
                Galeri
              </button>
              <button
                onClick={() => handleNavigation('franchising')}
                className="text-moss-700 hover:text-moss-600 transition-colors font-medium"
              >
                Franchising
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className="text-moss-700 hover:text-moss-600 transition-colors font-medium"
              >
                Bize Ulaşın
              </button>
            </div>
            
            {/* Sağ taraf - Menü */}
            <div className="border-l border-moss-200 pl-6">
              <button 
                onClick={() => handleNavigation('menu')}
                className="btn-primary"
              >
                Menü
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-moss-700 hover:text-moss-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-moss-200 py-4 bg-cream-50">
            <nav className="flex flex-col space-y-4">
              {/* Ana sayfalar */}
              <div className="space-y-2">
                <button
                  onClick={() => handleNavigation('home')}
                  className="text-moss-700 hover:text-moss-600 transition-colors font-medium px-2 py-1 hover:bg-moss-50 w-full text-left"
                >
                  Anasayfa
                </button>
                <div className="space-y-2">
                  <span className="text-moss-700 font-medium px-2">Kurumsal</span>
                  <div className="ml-4 space-y-2">
                    <button
                      onClick={() => handleNavigation('about')}
                      className="block w-full text-left text-moss-700 hover:text-moss-600 transition-colors px-2 py-1 hover:bg-moss-50"
                    >
                      Hakkımızda
                    </button>
                    <button
                      onClick={() => handleNavigation('career')}
                      className="block w-full text-left text-moss-700 hover:text-moss-600 transition-colors px-2 py-1 hover:bg-moss-50"
                    >
                      Kariyer
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleNavigation('branches')}
                  className="text-moss-700 hover:text-moss-600 transition-colors font-medium px-2 py-1 hover:bg-moss-50 w-full text-left"
                >
                  Şubelerimiz
                </button>
                <button
                  onClick={() => handleNavigation('gallery')}
                  className="text-moss-700 hover:text-moss-600 transition-colors font-medium px-2 py-1 hover:bg-moss-50 w-full text-left"
                >
                  Galeri
                </button>
                <button
                  onClick={() => handleNavigation('franchising')}
                  className="text-moss-700 hover:text-moss-600 transition-colors font-medium px-2 py-1 hover:bg-moss-50 w-full text-left"
                >
                  Franchising
                </button>
                <button
                  onClick={() => handleNavigation('contact')}
                  className="text-moss-700 hover:text-moss-600 transition-colors font-medium px-2 py-1 hover:bg-moss-50 w-full text-left"
                >
                  Bize Ulaşın
                </button>
              </div>
              
              {/* Menü butonu */}
              <div className="border-t border-moss-200 pt-4">
                <button 
                  onClick={() => handleNavigation('menu')}
                  className="btn-primary w-full"
                >
                  Menü
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

