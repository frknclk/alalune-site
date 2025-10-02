import React from 'react';
import vitrinData from './vitrin.json';

interface VitrinItem {
  name: string;
  name_en: string;
  description: string;
  description_en: string;
  price: number;
  photo: string;
  isNew: boolean;
}

const Gallery: React.FC = () => {
  // vitrin.json'dan tüm ürünleri al
  const allItems: VitrinItem[] = vitrinData.flatMap(category => category.items);

  return (
    <section id="gallery" className="section-padding bg-premium-gradient">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-moss-800">
            GALERİ
          </h2>
          <div className="accent-line w-16 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-moss-600">
            Lezzetlerimizin görsel şöleni
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allItems.map((item, index) => (
            <div key={item.photo || `${item.name}-${index}`} className="card-premium p-0 overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-moss-100 to-gold-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={`/${item.photo}`} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="text-4xl hidden">🥐</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
