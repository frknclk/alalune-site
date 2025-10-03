import React, { useState, useRef, useEffect } from 'react';
import menuData from '../components/data.json';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MenuItem {
  id?: number;
  name: string;
  name_en: string;
  description: string;
  description_en: string;
  price: number;
  photo: string;
  isNew: boolean;
}

interface MenuCategory {
  id?: number;
  category: string;
  category_en: string;
  photo: string;
  items: MenuItem[];
}

const MenuPage: React.FC = () => {
  const BASE_URL = import.meta.env.BASE_URL || '/';
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Normalize categories to always have items (flatten subcategories if present)
  const normalizedCategories: MenuCategory[] = (menuData as any[]).map((cat: any) => ({
    id: cat.id,
    category: cat.category,
    category_en: cat.category_en,
    photo: cat.photo,
    items: (cat.items ?? (cat.subcategories ? cat.subcategories.flatMap((s: any) => s.items || []) : [])) as MenuItem[],
  }));

  const filteredCategories: MenuCategory[] = normalizedCategories.filter(category =>
    category.category === 'Tatlı Kruvasan' || 
    category.category === 'Tuzlu Kruvasan' || 
    category.category === 'Pastalar' || 
    category.category === 'Cheesecake'
  );

  useEffect(() => {
    if (filteredCategories.length > 0 && !activeCategory) {
      setActiveCategory(filteredCategories[0].category);
    }
  }, [filteredCategories, activeCategory]);

  // Scroll listener to update active category
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for sticky header
      
      for (const category of filteredCategories) {
        const element = categoryRefs.current[category.category];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(category.category);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredCategories]);

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
    categoryRefs.current[categoryName]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavigate = (page: string) => {
    const event = new CustomEvent('navigate', { detail: page });
    window.dispatchEvent(event);
  };

  return (
    <div className="bg-cream-50 min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} />

      <main className="flex-grow pt-24">
        {/* Page Header */}
        <div className="section-padding bg-premium-gradient">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-moss-800">
              MENÜ
            </h1>
            <div className="accent-line w-16 mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-moss-600">
              Çünkü bizce lezzet, önce özenle başlar.
            </p>
          </div>
        </div>

        {/* Sticky Category Navigation */}
        <div className="bg-cream-100 py-4 sticky top-24 z-40 shadow-sm">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4">
              {filteredCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.category)}
                  className={`px-6 py-3 font-medium transition-all duration-200 rounded-lg ${
                    activeCategory === category.category
                      ? 'bg-moss-500 text-white shadow-lg'
                      : 'bg-transparent text-moss-700 hover:bg-moss-50 border border-moss-300'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* All Categories Content */}
        <div className="section-padding">
          <div className="container-custom">
            {filteredCategories.map((category) => (
              <div 
                key={category.id} 
                ref={(el) => {
                  categoryRefs.current[category.category] = el;
                }}
                className="mb-20"
              >
                {/* Category Header with Image */}
                <div className="mb-12">
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-moss-100 to-gold-100">
                    <img 
                      src={`${BASE_URL}${category.photo.replace(/\s+/g, '%20')}`}
                      alt={category.category}
                      className="w-full h-full object-cover bg-white"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-full bg-gradient-to-br from-moss-100 to-gold-100 flex items-center justify-center">
                      <div className="text-6xl">🥐</div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-black/20 md:bg-black/25 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif inline-block px-4 py-2 rounded-xl bg-white/80 text-moss-900 ring-1 ring-moss-200 shadow-sm">
                          {category.category}
                        </h2>
                        <p className="text-lg md:text-xl">
                          {category.category === 'Tatlı Kruvasan' && 'Çıtır dokusu ve aromasıyla güne eşlik eder.'}
                          {category.category === 'Tuzlu Kruvasan' && 'Kahvaltının vazgeçilmez lezzeti.'}
                          {category.category === 'Pastalar' && 'Her diliminde hafif ve tatlı bir mutluluk.'}
                          {category.category === 'Cheesecake' && 'Krem peynirli nefis tatlar.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, index) => (
                    <div key={index} className="card-premium">
                      <div className="h-48 bg-gradient-to-br from-moss-100 to-gold-100 flex items-center justify-center overflow-hidden">
                        <img 
                          src={`${BASE_URL}${item.photo.replace(/\s+/g, '%20')}`} 
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
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MenuPage;