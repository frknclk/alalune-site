import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FranchisingPage: React.FC = () => {
  const handleNavigate = (page: string) => {
    const event = new CustomEvent('navigate', { detail: page });
    window.dispatchEvent(event);
  };



  // Removed unused steps array

  return (
    <div className="bg-cream-50 min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} />

      <main className="flex-grow pt-24">
        {/* Page Header */}
        <div className="section-padding bg-premium-gradient">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-moss-800">
              FRANCHISING
            </h1>
            <div className="accent-line w-16 mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-moss-600">
              A La Lune ailesine katılın, birlikte büyüyelim
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-moss-800">
                  Neden A La Lune Franchise?
                </h2>
                <p className="text-lg text-moss-700 mb-6 leading-relaxed">
                  A La Lune olarak, 2018'den beri sürekli büyüyen bir markayız. 
                  4 şubemizle binlerce müşteriye hizmet veriyor, kaliteli ürünlerimizle 
                  sektörde öncü konumdayız.
                </p>
                <p className="text-lg text-moss-700 leading-relaxed">
                  Franchise sistemimizle, kanıtlanmış iş modelimizi ve marka gücümüzü 
                  sizinle paylaşarak birlikte büyümeyi hedefliyoruz.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/images/DSCF6123-14 kopya.jpg" 
                  alt="A La Lune Franchise"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-96 bg-gradient-to-br from-moss-100 to-gold-100 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">🏪</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Why Choose Us Section */}
        <div className="py-4">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-moss-800">
                A La Lune ile Başarıya Giden Yol
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-premium p-8 text-center">
                <div className="w-16 h-16 bg-moss-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-moss-800">
                  Uygun Yatırım
                </h3>
                <p className="text-moss-600">
                  Sektörde rekabetçi yatırım maliyeti ile başlayın. 
                  Tüm gerekli ekipman ve eğitim dahil paket fiyat.
                </p>
              </div>

              <div className="card-premium p-8 text-center">
                <div className="w-16 h-16 bg-moss-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-moss-800">
                  Hızlı Büyüme
                </h3>
                <p className="text-moss-600">
                  Kanıtlanmış iş modeli sayesinde kısa sürede 
                  karlılığa ulaşın. Müşteri talebi yüksek ürünler.
                </p>
              </div>

              <div className="card-premium p-8 text-center">
                <div className="w-16 h-16 bg-moss-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-moss-800">
                  Sürekli Destek
                </h3>
                <p className="text-moss-600">
                  Açılıştan itibaren her aşamada yanınızdayız. 
                  Eğitim, pazarlama ve operasyon desteği.
                </p>
              </div>

              <div className="card-premium p-8 text-center">
                <div className="w-16 h-16 bg-moss-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-moss-800">
                  Güçlü Marka
                </h3>
                <p className="text-moss-600">
                  Tanınmış marka gücü ile müşteri çekin. 
                  Kaliteli ürünler ve güvenilir hizmet.
                </p>
              </div>

              <div className="card-premium p-8 text-center">
                <div className="w-16 h-16 bg-moss-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-moss-800">
                  Kanıtlanmış Model
                </h3>
                <p className="text-moss-600">
                  Başarılı şubelerimizden öğrenilen deneyimlerle 
                  hazırlanmış işletme modeli.
                </p>
              </div>

              <div className="card-premium p-8 text-center">
                <div className="w-16 h-16 bg-moss-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-moss-800">
                  Genişleme Fırsatı
                </h3>
                <p className="text-moss-600">
                  Türkiye genelinde yeni lokasyonlarda 
                  büyüme ve çoklu şube imkanı.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Contact Section */}
        <div className="section-padding">
          <div className="container-custom">
            <div className="text-center">
              <div className="card-premium p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-moss-800">
                  Franchise Başvurusu
                </h2>
                <p className="text-lg text-moss-700 mb-8 leading-relaxed">
                  A La Lune franchise sistemi hakkında daha fazla bilgi almak ve başvuru yapmak için 
                  bizimle iletişime geçin. Uzman ekibimiz size detaylı bilgi verecek ve süreç boyunca 
                  yanınızda olacaktır.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-moss-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-moss-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-moss-800 mb-2">Telefon</h3>
                    <a href="tel:+902163100001" className="text-moss-600 hover:text-moss-700">
                      (0216) 310 00 01
                    </a>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-moss-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-moss-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-moss-800 mb-2">E-posta</h3>
                    <a href="mailto:franchise@alalune.com" className="text-moss-600 hover:text-moss-700">
                      franchise@alalune.com
                    </a>
                  </div>
                </div>
                <button 
                  onClick={() => handleNavigate('franchise-application')}
                  className="btn-primary"
                >
                  Başvuru Formu
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FranchisingPage;
