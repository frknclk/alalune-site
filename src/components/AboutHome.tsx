import React from 'react';

const AboutHome: React.FC = () => {
  const goToAbout = () => {
    // navigate and ensure scrolled to top
    const event = new CustomEvent('navigate', { detail: 'about' });
    window.dispatchEvent(event);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  };

  const BASE_URL = import.meta.env.BASE_URL;
  return (
    <section id="about" className="section-padding bg-premium-gradient">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-moss-800">Hakkımızda</h2>
            <p className="text-lg text-moss-700 leading-relaxed mb-6">
              A La Lune, Fransız pastacılık mirasını İstanbul’a taşıyan butik bir pastane zinciri.
              Her gün kendi mutfağımızda ürettiğimiz kruvasanlar, pastalar ve cheesecakeler ile
              misafirlerimize sıcak ve rafine bir deneyim sunuyoruz.
            </p>
            <button onClick={goToAbout} className="btn-secondary">Daha Fazla</button>
          </div>

          <div className="relative">
            <img
              src={`${BASE_URL}images/kruvasan_bogurtlen.png`}
              alt="A La Lune Hakkımızda"
              className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-full h-80 md:h-96 bg-gradient-to-br from-moss-100 to-gold-100 rounded-2xl flex items-center justify-center">
              <div className="text-6xl">🥐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;


