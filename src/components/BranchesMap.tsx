import React, { useEffect, useRef } from 'react';

interface Branch {
  name: string;
  address: string;
  lat: number;
  lng: number;
  rating: number;
  totalReviews: number;
  phone: string;
  googlePlaceId: string;
}

const BranchesMap: React.FC = () => {
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
  const mapRefs = useRef<Array<HTMLDivElement | null>>([]);

  const branches: Branch[] = [
    {
      name: "Üsküdar",
      address: "Mimar Sinan, İmam Nasır Sk. No:13, 34674 Üsküdar/İstanbul",
      lat: 41.0243798,
      lng: 29.0146185,
      rating: 4.3,
      totalReviews: 2463,
      phone: "(0216) 310 00 01",
      googlePlaceId: "ChIJQRocFK63yhQRjRk3Debu_ck"
    },
    {
      name: "Ümraniye",
      address: "Atatürk, Çiftlik Sk. No:10 a 34764 Ümraniye/İstanbul",
      lat: 41.026019,
      lng: 29.092014,
      rating: 4.6,
      totalReviews: 1643,
      phone: "(0216) 481 08 88",
      googlePlaceId: "ChIJsUpbWFDJyhQRD8owg3qA8xw"
    },
    {
      name: "Karaköy",
      address: "Kemankeş Karamustafa Paşa, Mumhane Cd. No:7A İç Kapı No:1 34425 Beyoğlu",
      lat: 41.0231867,
      lng: 28.9769937,
      rating: 4.9,
      totalReviews: 403,
      phone: "(0544) 493 87 00",
      googlePlaceId: "ChIJC09Z9DC5yhQRnKPMN8dQ-a8"
    },
    {
      name: "Ankara",
      address: "Yukarı Bahçelievler, Oğuzhan Asiltürk Caddesi 22 A 06790 Çankaya/Ankara",
      lat: 39.9245176,
      lng: 32.8252146,
      rating: 4.9,
      totalReviews: 290,
      phone: "(0312) 223 82 96",
      googlePlaceId: "ChIJN8x9BAxP0xQRufCZfTUt2XY"
    }
  ];

  // Load Maps JS API and render custom overlay badges that stick to coordinates
  useEffect(() => {
    const ensureGoogleMapsLoaded = (): Promise<void> => {
      return new Promise((resolve) => {
        const w = window as any;
        if (w.google && w.google.maps) {
          resolve();
          return;
        }
        if (document.getElementById('google-maps-js')) {
          (document.getElementById('google-maps-js') as HTMLScriptElement).addEventListener('load', () => resolve());
          return;
        }
        const script = document.createElement('script');
        script.id = 'google-maps-js';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&language=tr&region=TR`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    };

    const initMaps = async () => {
      await ensureGoogleMapsLoaded();
      const g = (window as any).google;

      const mapStyles = [
        { featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] },
        { featureType: 'poi', elementType: 'geometry', stylers: [{ visibility: 'off' }] },
        { featureType: 'transit', stylers: [{ visibility: 'off' }] },
        { featureType: 'administrative.land_parcel', stylers: [{ visibility: 'off' }] },
      ];

      class DivOverlay extends g.maps.OverlayView {
        position: any;
        div: HTMLDivElement;
        constructor(position: any, content: HTMLElement) {
          super();
          this.position = position;
          this.div = document.createElement('div');
          this.div.style.position = 'absolute';
          this.div.appendChild(content);
        }
        onAdd() {
          const panes = this.getPanes();
          panes.overlayImage.appendChild(this.div);
        }
        draw() {
          const projection = this.getProjection();
          const point = projection.fromLatLngToDivPixel(this.position);
          if (!point) return;
          this.div.style.left = `${point.x}px`;
          this.div.style.top = `${point.y}px`;
          this.div.style.transform = 'translate(-50%, -100%)';
          this.div.style.zIndex = '1000';
          this.div.style.pointerEvents = 'none';
        }
        onRemove() {
          if (this.div.parentNode) this.div.parentNode.removeChild(this.div);
        }
      }

      branches.forEach((branch, index) => {
        const container = mapRefs.current[index];
        if (!container) return;

        const map = new g.maps.Map(container, {
          center: { lat: branch.lat, lng: branch.lng },
          zoom: 15,
          disableDefaultUI: true,
          clickableIcons: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          styles: mapStyles,
        });

        // Create content for the badge
        const badge = document.createElement('div');
        badge.className = 'map-branch-badge';
        const logo = document.createElement('img');
        const BASE_URL = import.meta.env.BASE_URL || '/';
        logo.src = `${BASE_URL}images/logos/La Lune Yeni Logo SON.jpg`;
        logo.alt = 'A La Lune';
        logo.className = 'map-branch-logo';
        const title = document.createElement('span');
        title.className = 'map-branch-title';
        title.textContent = `A La Lune - ${branch.name}`;
        badge.appendChild(logo);
        badge.appendChild(title);

        // Attach overlay at branch position
        const overlay = new DivOverlay(new g.maps.LatLng(branch.lat, branch.lng), badge);
        overlay.setMap(map);
      });
    };

    initMaps();
  }, []);

  return (
    <section className="section-padding bg-premium-gradient">
      <div className="container-custom">

        {/* Google Maps ile 4 Şube */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {branches.map((branch, index) => (
            <div key={index} className="card-premium overflow-hidden rounded-t-full">
              {/* Maps Frame */}
              <div className="relative h-[20rem] bg-gradient-to-br from-moss-100 to-brown-100 border-4 border-brown-300 rounded-t-full overflow-hidden">
              {/* Custom Google Map Canvas (JS API) */}
              <div
                ref={(el) => { mapRefs.current[index] = el; }}
                className="w-full h-full opacity-95"
                title={`A La Lune ${branch.name} Şubesi Konumu`}
              />
                
                {/* Removed custom marker for native Google map label next to pin */}


                {/* Rating Overlay removed per request */}

                {/* Google Maps Button */}
                <button
                  onClick={() => window.open(`https://www.google.com/maps/place/?q=place_id:${branch.googlePlaceId}`, '_blank')}
                  className="absolute bottom-4 right-4 bg-brown-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-brown-700 transition-colors text-sm font-medium"
                >
                  📍 Google'da Aç
                </button>
              </div>

              {/* Branch Info - Extended */}
              <div className="p-6 pt-4">
                <h3 className="text-xl font-bold mb-4 font-serif text-moss-800">
                  {branch.name}
                </h3>

                {/* Address */}
                <div className="mb-5">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-moss-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm text-moss-600 leading-relaxed">
                      {branch.address}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="mb-5">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-moss-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-moss-600 font-medium text-sm">
                      09:00 – 23:30
                    </span>
                  </div>
                </div>

                

                {/* Action Buttons */}
                <div className="space-y-3">
                 <button
                    onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${branch.lat},${branch.lng}`, '_blank')}
                    className="btn-primary w-full text-sm py-3"
                  >
                    🚗 Yol Tarifi Al
                  </button>
                  <a 
                    href={`tel:${branch.phone}`}
                    className="btn-secondary w-full text-sm py-3 text-center block"
                  >
                    📞 Ara: {branch.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BranchesMap;