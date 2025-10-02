import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CareerPage: React.FC = () => {
  const handleNavigate = (page: string) => {
    const event = new CustomEvent('navigate', { detail: page });
    window.dispatchEvent(event);
  };

  const positions = [
    {
      title: 'Pasta Ustası',
      location: 'Üsküdar',
      type: 'Tam Zamanlı',
      description: 'Kruvasan, pasta ve cheesecake üretiminde deneyimli pastacı arıyoruz.'
    },
    {
      title: 'Satış Danışmanı',
      location: 'Ümraniye',
      type: 'Tam Zamanlı',
      description: 'Müşteri memnuniyetini ön planda tutan, dinamik satış danışmanı arıyoruz.'
    },
    {
      title: 'Şube Müdürü',
      location: 'Karaköy',
      type: 'Tam Zamanlı',
      description: 'Ekip yönetimi ve operasyonel süreçlerde deneyimli şube müdürü arıyoruz.'
    }
  ];

  return (
    <div className="bg-cream-50 min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} />

      <main className="flex-grow pt-24">
        {/* Page Header */}
        <div className="section-padding bg-premium-gradient">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-moss-800">
              Kariyer
            </h1>
            <div className="accent-line w-16 mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-moss-600">
              A La Lune ailesine katılın, birlikte büyüyelim
            </p>
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-moss-800">
                Neden A La Lune?
              </h2>
              <p className="text-lg text-moss-600 max-w-3xl mx-auto">
                A La Lune'de çalışmak sadece bir iş değil, tutku dolu bir deneyimdir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="card-premium p-6 text-center">
                <div className="w-12 h-12 bg-moss-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🎓</span>
                </div>
                <h3 className="text-lg font-bold mb-2 font-serif text-moss-800">Eğitim</h3>
                <p className="text-sm text-moss-600">
                  Sürekli eğitim ve gelişim fırsatları
                </p>
              </div>
              <div className="card-premium p-6 text-center">
                <div className="w-12 h-12 bg-moss-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">👥</span>
                </div>
                <h3 className="text-lg font-bold mb-2 font-serif text-moss-800">Takım Ruhu</h3>
                <p className="text-sm text-moss-600">
                  Güçlü takım çalışması ve dayanışma
                </p>
              </div>
              <div className="card-premium p-6 text-center">
                <div className="w-12 h-12 bg-moss-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">📈</span>
                </div>
                <h3 className="text-lg font-bold mb-2 font-serif text-moss-800">Kariyer</h3>
                <p className="text-sm text-moss-600">
                  Büyüme ve terfi fırsatları
                </p>
              </div>
              <div className="card-premium p-6 text-center">
                <div className="w-12 h-12 bg-moss-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-lg font-bold mb-2 font-serif text-moss-800">Hedef</h3>
                <p className="text-sm text-moss-600">
                  Anlamlı ve değerli iş deneyimi
                </p>
              </div>
            </div>

            {/* Open Positions */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-center text-moss-800">
                Açık Pozisyonlar
              </h2>
              <div className="space-y-6">
                {positions.map((position, index) => (
                  <div key={index} className="card-premium p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2 font-serif text-moss-800">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-moss-600 mb-2">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {position.location}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {position.type}
                          </span>
                        </div>
                        <p className="text-moss-600">
                          {position.description}
                        </p>
                      </div>
                      <button
                        className="btn-primary"
                        onClick={() => {
                          sessionStorage.setItem('applicationPosition', JSON.stringify(position));
                          const event = new CustomEvent('navigate', { detail: 'career-apply' });
                          window.dispatchEvent(event);
                          setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
                        }}
                      >
                        Başvur
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Process */}
            <div className="card-premium p-8">
              <h2 className="text-2xl font-bold mb-6 font-serif text-center text-moss-800">
                Başvuru Süreci
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-moss-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    1
                  </div>
                  <h3 className="font-semibold text-moss-800 mb-2">Başvuru</h3>
                  <p className="text-sm text-moss-600">CV'nizi gönderin</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-moss-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    2
                  </div>
                  <h3 className="font-semibold text-moss-800 mb-2">Değerlendirme</h3>
                  <p className="text-sm text-moss-600">Başvurunuzu inceleyelim</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-moss-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    3
                  </div>
                  <h3 className="font-semibold text-moss-800 mb-2">Mülakat</h3>
                  <p className="text-sm text-moss-600">Sizi tanıyalım</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-moss-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    4
                  </div>
                  <h3 className="font-semibold text-moss-800 mb-2">Karar</h3>
                  <p className="text-sm text-moss-600">Sonucu paylaşalım</p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareerPage;
