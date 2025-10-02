import React, { useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import vitrinData from '../components/vitrin.json';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleNavigate = (page: string) => {
    const event = new CustomEvent('navigate', { detail: page });
    window.dispatchEvent(event);
  };

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const items = useMemo(() => {
    // Flatten vitrin items and ensure public-root paths
    const flat = (vitrinData as any[]).flatMap((c: any) => c.items || []);
    const vitrinItems = flat.map((it: any) => ({
      ...it,
      src: `/${it.photo}`,
      name: it.name || 'Ürün',
    }));

    // Statically include images under public/images/website
    const websiteImages = [
      'images/website/DSC00670-1K-JPEG.jpg',
      'images/website/DSC00685-1K-JPEG-rotated.jpg',
      'images/website/DSC00689-1K-JPEG-1.jpg',
      'images/website/DSC00800-1K-JPEG.jpg',
      'images/website/DSC00939-1K-JPEG-1.jpg',
      'images/website/DSC00958-1K-JPEG.jpg',
      'images/website/DSC01023-1K-JPEG.jpg',
      'images/website/DSC01098-1K-JPEG-rotated.jpg',
      'images/website/DSC08595-1368x2048.jpg',
      'images/website/DSC08595-1K-JPEG.jpg',
      'images/website/DSC08627-1K-JPEG.jpg',
    ].map((p) => ({ src: `/${p}`, name: 'A La Lune' }));

    // Include branch images
    const branchImages = [
      'images/branches/uskudar.jpg',
      'images/branches/umraniye.jpg',
      'images/branches/karakoy.jpg',
      'images/branches/bahceli.jpg',
    ].map((p) => ({ src: `/${p}`, name: 'Şube' }));

    return [...branchImages, ...websiteImages, ...vitrinItems];
  }, []);

  return (
    <div className="bg-cream-50 min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} />

      <main className="flex-grow pt-24">
        {/* Page Header */}
        <div className="section-padding bg-premium-gradient">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-moss-800">
              GALERİ
            </h1>
            <div className="accent-line w-16 mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-moss-600">
              Lezzetlerimizin görsel şöleni
            </p>
          </div>
        </div>

        {/* Gallery Masonry Collage */}
        <div className="section-padding">
          <div className="container-custom">
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">{/* masonry columns */}
              {items.map((item: any, index: number) => {
                // Vary card style by index for collage feel
                const rotations = ['rotate-0', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-2'];
                const rotation = rotations[index % rotations.length];
                const heights = ['h-56', 'h-64', 'h-72', 'h-80'];
                const height = heights[index % heights.length];
                return (
                  <div
                    key={`${item.name}-${index}`}
                    className="mb-4 break-inside-avoid"
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer transition-transform duration-300 hover:-translate-y-1 ${rotation}`}
                      onClick={() => openModal(item.src)}
                    >
                      <div className={`w-full ${height} bg-gradient-to-br from-moss-100 to-gold-100 flex items-center justify-center overflow-hidden`}>
                        <img
                          src={item.src}
                          alt={item.name || `Gallery item ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const p = target.parentElement as HTMLElement | null;
                            if (p) {
                              p.classList.add('bg-gray-200');
                              p.innerHTML = '<span class="text-gray-500 text-lg py-12">Resim Yok</span>';
                            }
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;
