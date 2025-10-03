import React from 'react';

const Footer: React.FC = () => {
  const BASE_URL = import.meta.env.BASE_URL;
  return (
    <footer className="bg-footer-gradient text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo and Description */}
              <div className="md:col-span-2">
                <div className="flex items-center mb-4">
                  <img 
                    src={`${BASE_URL}images/logos/white_footerlogo.png`} 
                    alt="A La Lune Logo" 
                    className="h-12 w-auto mr-3"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden">
                    <h3 className="text-2xl font-bold text-cream-200 font-serif">
                      A La Lune
                    </h3>
                    <span className="ml-2 text-sm text-cream-300">Patisserie</span>
                  </div>
                </div>
              <p className="text-cream-300 mb-6 max-w-md leading-relaxed">
                Her katında tutku, her lokmada sanat. A La Lune olarak kruvasanları 
                sadece pişirmiyor, tutkuyla şekillendiriyoruz.
              </p>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/laluneuskudar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-moss-800 text-cream-300 rounded-full flex items-center justify-center hover:bg-moss-600 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/alalunepatisserie/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-moss-800 text-cream-300 rounded-full flex items-center justify-center hover:bg-moss-600 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.262 2.242 1.324 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.324 3.608-.975.975-2.242 1.262-3.608 1.324-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.324-.975-.975-1.262-2.242-1.324-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.324-3.608.975-.975 2.242-1.262 3.608-1.324C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.773.13 4.603.372 3.635 1.34 2.667 2.308 2.425 3.478 2.367 4.757 2.309 6.037 2.295 6.446 2.295 10c0 3.554.014 3.963.072 5.243.058 1.279.3 2.449 1.268 3.417.968.968 2.138 1.21 3.417 1.268C7.86 19.994 8.269 20.008 12 20.008s4.14-.014 5.243-.072c1.279-.058 2.449-.3 3.417-1.268.968-.968 1.21-2.138 1.268-3.417.058-1.279.072-1.688.072-5.243s-.014-3.963-.072-5.243c-.058-1.279-.3-2.449-1.268-3.417C19.692.372 18.522.13 17.243.072 15.963.014 15.554 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.906a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                    </svg>
                  </a>
                  <a href="https://www.tiktok.com/@alalunepatisserieonline" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-moss-800 text-cream-300 rounded-full flex items-center justify-center hover:bg-moss-600 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                </div>
            </div>

            {/* Quick Links (title removed per request) */}
            <div>
              <ul className="space-y-2">
                <li><a href="#home" className="text-cream-300 hover:text-mint-400 transition-colors">Anasayfa</a></li>
                <li><a href="#about" className="text-cream-300 hover:text-mint-400 transition-colors">Hakkımızda</a></li>
                <li><a href="#career" className="text-cream-300 hover:text-mint-400 transition-colors">Kariyer</a></li>
                <li><a href="#branches" className="text-cream-300 hover:text-mint-400 transition-colors">Şubelerimiz</a></li>
                <li><a href="#gallery" className="text-cream-300 hover:text-mint-400 transition-colors">Galeri</a></li>
                <li><a href="#franchising" className="text-cream-300 hover:text-mint-400 transition-colors">Franchising</a></li>
                <li><a href="#contact" className="text-cream-300 hover:text-mint-400 transition-colors">Bize Ulaşın</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-cream-200">İletişim</h4>
              <div className="space-y-2 text-cream-300">
                <p className="text-sm">(0216) 310 00 01</p>
                <p className="text-sm">info@alalune.com</p>
                <p className="text-sm">Üsküdar/İstanbul</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-moss-800/60 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream-400 text-sm">
              © 2025 A La Lune Patisserie. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

