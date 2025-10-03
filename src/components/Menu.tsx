import React, { useState } from 'react';
import menuData from './data.json';


const Menu: React.FC = () => {
  const BASE_URL = import.meta.env.BASE_URL || '/';
  const [activeCategory, setActiveCategory] = useState('sweet-croissants');

  // JSON verilerinden sadece istenen kategorileri filtrele
  const filteredCategories = menuData.filter(category => 
    category.category === 'Tatlı Kruvasan' || 
    category.category === 'Tuzlu Kruvasan' || 
    category.category === 'Pastalar' || 
    category.category === 'Cheesecake'
  );

  const menuCategories = {
    'sweet-croissants': {
      title: 'TATLI KRUVASANLAR',
      subtitle: 'Çıtır dokusu ve aromasıyla güne eşlik eder.',
      items: filteredCategories.find(cat => cat.category === 'Tatlı Kruvasan')?.items || []
    },
    'savory-croissants': {
      title: 'TUZLU KRUVASANLAR',
      subtitle: 'Kahvaltının vazgeçilmez lezzeti.',
      items: filteredCategories.find(cat => cat.category === 'Tuzlu Kruvasan')?.items || []
    },
    'cakes': {
      title: 'PASTALAR',
      subtitle: 'Her diliminde hafif ve tatlı bir mutluluk.',
      items: filteredCategories.find(cat => cat.category === 'Pastalar')?.items || []
    },
    'cheesecakes': {
      title: 'CHEESECAKELER',
      subtitle: 'Krem peynirli nefis tatlar.',
      items: filteredCategories.find(cat => cat.category === 'Cheesecake')?.items || []
    }
  };

  return (
    <section id="menu" className="section-padding bg-premium-gradient">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-moss-800">
            MENÜ
          </h2>
          <div className="accent-line w-16 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-moss-600">
            Çünkü bizce lezzet, önce özenle başlar.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(menuCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 font-medium transition-all duration-200 rounded-lg ${
                activeCategory === key
                  ? 'bg-moss-500 text-white shadow-lg'
                  : 'bg-transparent text-moss-700 hover:bg-moss-50 border border-moss-300'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center font-serif text-moss-800">
            {menuCategories[activeCategory as keyof typeof menuCategories].title}
          </h3>
          <p className="text-lg text-center mb-12 text-moss-600">
            {menuCategories[activeCategory as keyof typeof menuCategories].subtitle}
          </p>
        </div>

        {/* Menu Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuCategories[activeCategory as keyof typeof menuCategories].items.slice(0, 6).map((item, index) => (
              <div key={index} className="card-premium">
              <div className="h-48 bg-gradient-to-br from-moss-100 to-gold-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={`${BASE_URL}${item.photo}`} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="text-6xl hidden">🥐</div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 font-serif text-moss-800">
                  {item.name}
                </h4>
                <p className="text-sm leading-relaxed text-moss-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const event = new CustomEvent('navigate', { detail: 'menu' });
              window.dispatchEvent(event);
            }}
            className="btn-primary"
          >
            Tüm Menüyü Görüntüle
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;

