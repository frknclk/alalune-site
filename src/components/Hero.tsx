import React from 'react';

const Hero: React.FC = () => {
  const BASE_URL = import.meta.env.BASE_URL;
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-moss-300 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gold-300 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-rose-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-brown-300 rounded-full"></div>
      </div>

      <div className="container-custom text-center relative z-10 -mt-24 md:-mt-36">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={`${BASE_URL}images/logos/La Lune Yeni Logo SON.svg`} 
              alt="A La Lune Logo" 
              className="h-24 md:h-32 w-auto mx-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif text-moss-800">
                A La Lune
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-medium text-moss-600">
                Patisserie
              </p>
            </div>
          </div>

          {/* Accent Line */}
          <div className="accent-line w-24 mx-auto mb-8"></div>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 font-serif text-moss-800">
            Fransız Kruvasanının İnceliği, A La Lune’un İmzası
          </h2>

          {/* Signature */}
          <div className="mb-8">
            <div className="inline-flex items-center px-7 pr-10 py-4 md:py-5 rounded-full bg-white/85 ring-1 ring-moss-200 shadow-md overflow-visible">
              <span
                className="signature text-transparent bg-clip-text text-3xl md:text-5xl leading-tight inline-block"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, var(--color-moss-700), var(--color-mint-600))',
                  paddingTop: '2px',
                  paddingRight: '4px'
                }}
              >
                A La Lune
              </span>
            </div>
            <div className="mt-2 flex justify-center">
              <svg width="220" height="24" viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 16 C 60 30, 160 -6, 218 12" stroke="var(--color-gold-400)" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-moss-700">
            A La Lune olarak kruvasanları sadece pişirmiyor, tutkuyla şekillendiriyoruz. 
            Her biri kendi mutfağımızda, el emeğiyle hazırlanıyor; taptaze hamurun katmanlarında 
            sadelikle buluşan Fransız ruhunu taşıyor.
          </p>

          {/* CTA Buttons removed as requested */}

            </div>
          </div>

          {/* Gallery Strip */}
          <div className="absolute bottom-8 left-0 right-0 overflow-hidden">
            <div className="flex animate-scroll space-x-6">
              {/* Gallery Items */}
              {[
                { image: `${BASE_URL}images/kruvasan_cilek.png`, frame: 'kruvasan' },
                { image: `${BASE_URL}images/pasta_cilek.png`, frame: 'pasta' },
                { image: `${BASE_URL}images/americano.png`, frame: 'kahve' },
                { image: `${BASE_URL}images/kruvasan_bogurtlen.png`, frame: 'kruvasan' },
                { image: `${BASE_URL}images/pasta_fıstık.png`, frame: 'pasta' },
                { image: `${BASE_URL}images/latte_vanilya.png`, frame: 'kahve' },
                { image: `${BASE_URL}images/kruvasan_yabanmersini.png`, frame: 'kruvasan' },
                { image: `${BASE_URL}images/pasta_limon.png`, frame: 'pasta' },
                { image: `${BASE_URL}images/caffemocha.jpg`, frame: 'kahve' },
                { image: `${BASE_URL}images/kruvasan_fistik.png`, frame: 'kruvasan' },
                { image: `${BASE_URL}images/pasta_strawberry.jpeg`, frame: 'pasta' },
                { image: `${BASE_URL}images/vanilyalatte.jpg`, frame: 'kahve' }
              ].map((item, index) => (
                <div key={index} className="flex-shrink-0 relative">
                  {/* Frame based on type */}
                  {item.frame === 'kruvasan' && (
                    <div className="w-32 h-32 bg-gradient-to-br from-moss-100 to-gold-100 rounded-full p-4 shadow-lg">
                      <img 
                        src={item.image} 
                        alt="Kruvasan" 
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-full h-full bg-gradient-to-br from-moss-200 to-gold-200 rounded-full flex items-center justify-center">
                        <span className="text-4xl">🥐</span>
                      </div>
                    </div>
                  )}
                  
                  {item.frame === 'pasta' && (
                    <div className="w-32 h-32 bg-gradient-to-br from-rose-100 to-gold-100 rounded-2xl p-4 shadow-lg">
                      <img 
                        src={item.image} 
                        alt="Pasta" 
                        className="w-full h-full object-cover rounded-xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-full h-full bg-gradient-to-br from-rose-200 to-gold-200 rounded-xl flex items-center justify-center">
                        <span className="text-4xl">🍰</span>
                      </div>
                    </div>
                  )}
                  
                  {item.frame === 'kahve' && (
                    <div className="w-32 h-32 bg-gradient-to-br from-brown-100 to-moss-100 rounded-lg p-4 shadow-lg">
                      <img 
                        src={item.image} 
                        alt="Kahve" 
                        className="w-full h-full object-cover rounded-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-full h-full bg-gradient-to-br from-brown-200 to-moss-200 rounded-md flex items-center justify-center">
                        <span className="text-4xl">☕</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Duplicate for seamless loop */}
              {[
                { image: `${BASE_URL}images/kruvasan_cilek.png`, frame: 'kruvasan' },
                { image: `${BASE_URL}images/pasta_cilek.png`, frame: 'pasta' },
                { image: `${BASE_URL}images/americano.png`, frame: 'kahve' },
                { image: `${BASE_URL}images/kruvasan_bogurtlen.png`, frame: 'kruvasan' },
                { image: `${BASE_URL}images/pasta_fıstık.png`, frame: 'pasta' },
                { image: `${BASE_URL}images/latte_vanilya.png`, frame: 'kahve' }
              ].map((item, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 relative">
                  {item.frame === 'kruvasan' && (
                    <div className="w-32 h-32 bg-gradient-to-br from-moss-100 to-gold-100 rounded-full p-4 shadow-lg">
                      <img 
                        src={item.image} 
                        alt="Kruvasan" 
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-full h-full bg-gradient-to-br from-moss-200 to-gold-200 rounded-full flex items-center justify-center">
                        <span className="text-4xl">🥐</span>
                      </div>
                    </div>
                  )}
                  
                  {item.frame === 'pasta' && (
                    <div className="w-32 h-32 bg-gradient-to-br from-rose-100 to-gold-100 rounded-2xl p-4 shadow-lg">
                      <img 
                        src={item.image} 
                        alt="Pasta" 
                        className="w-full h-full object-cover rounded-xl"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-full h-full bg-gradient-to-br from-rose-200 to-gold-200 rounded-xl flex items-center justify-center">
                        <span className="text-4xl">🍰</span>
                      </div>
                    </div>
                  )}
                  
                  {item.frame === 'kahve' && (
                    <div className="w-32 h-32 bg-gradient-to-br from-brown-100 to-moss-100 rounded-lg p-4 shadow-lg">
                      <img 
                        src={item.image} 
                        alt="Kahve" 
                        className="w-full h-full object-cover rounded-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-full h-full bg-gradient-to-br from-brown-200 to-moss-200 rounded-md flex items-center justify-center">
                        <span className="text-4xl">☕</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
    </section>
  );
};

export default Hero;

