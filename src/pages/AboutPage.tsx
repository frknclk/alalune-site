import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const handleNavigate = (page: string) => {
    const event = new CustomEvent('navigate', { detail: page });
    window.dispatchEvent(event);
  };

  const BASE_URL = import.meta.env.BASE_URL;
  return (
    <div className="bg-cream-50 min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} />

      <main className="flex-grow pt-24">
        {/* Page Header */}
        <div className="section-padding bg-premium-gradient">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-moss-800">
              Hakkımızda
            </h1>
            <div className="accent-line w-16 mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-moss-600">
              A La Lune'nin hikayesi ve tutkusu
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-moss-800">
                  Hikayemiz
                </h2>
                <p className="text-lg text-moss-700 mb-6 leading-relaxed">
                  A La Lune, 2018 yılında Üsküdar'da küçük bir kruvasan dükkanı olarak başladı. 
                  Kurucularımız, Fransa'da öğrendikleri geleneksel kruvasan yapım tekniklerini 
                  İstanbul'a taşıyarak, her gün taze ve kaliteli ürünler sunma hayalini gerçekleştirdi.
                </p>
                <p className="text-lg text-moss-700 leading-relaxed">
                  Bugün 4 şubemizle hizmet veriyoruz ve her gün binlerce müşterimize 
                  en taze kruvasanları, pastaları ve cheesecakeleri sunmaktan gurur duyuyoruz.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={`${BASE_URL}images/kruvasan_yabanmersini.png`} 
                  alt="A La Lune Hikayesi"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-96 bg-gradient-to-br from-moss-100 to-gold-100 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">🥐</div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="card-premium p-8 text-center">
                <div className="w-16 h-16 bg-moss-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-moss-800">Taze Malzemeler</h3>
                <p className="text-moss-600">
                  Her gün en taze malzemeleri kullanarak, kaliteli ürünler üretiyoruz.
                </p>
              </div>
              <div className="card-premium p-8 text-center">
                <div className="w-16 h-16 bg-moss-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🍳</span>
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-moss-800">Usta Eller</h3>
                <p className="text-moss-600">
                  Deneyimli pastacılarımız, geleneksel tekniklerle her ürünü özenle hazırlıyor.
                </p>
              </div>
              <div className="card-premium p-8 text-center">
                <div className="w-16 h-16 bg-moss-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-moss-800">Tutku</h3>
                <p className="text-moss-600">
                  Her ürünümüzde, müşterilerimize en iyi deneyimi sunma tutkusu var.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="card-premium p-8">
                <h3 className="text-2xl font-bold mb-6 font-serif text-moss-800">Misyonumuz</h3>
                <p className="text-moss-700 leading-relaxed">
                  Geleneksel Fransız pastacılık tekniklerini modern yaklaşımla birleştirerek, 
                  her gün taze ve kaliteli ürünler sunmak. Müşterilerimize unutulmaz lezzet 
                  deneyimleri yaşatmak ve onların günlük rutinlerinin vazgeçilmez bir parçası olmak.
                </p>
              </div>
              <div className="card-premium p-8">
                <h3 className="text-2xl font-bold mb-6 font-serif text-moss-800">Vizyonumuz</h3>
                <p className="text-moss-700 leading-relaxed">
                  Türkiye'nin en sevilen kruvasan markası olmak ve kaliteli pastacılık 
                  kültürünü yaygınlaştırmak. Her şehirde, her mahallede A La Lune'nin 
                  sıcak atmosferini ve lezzetini yaşatmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
