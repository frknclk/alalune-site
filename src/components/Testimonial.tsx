import React, { useState, useEffect } from 'react';

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  time: string;
  googleUrl: string;
}

interface Branch {
  name: string;
  address: string;
  googlePlaceId: string;
  averageRating: number;
  totalReviews: number;
}

interface BranchState {
  rating: number;
  totalReviews: number;
  reviews: Review[];
  loading: boolean;
  currentIndex: number;
  errorMessage: string | null;
}

const Testimonial: React.FC = () => {
  const DEBUG_SHOW_REVIEWS = false;
  const [branchStates, setBranchStates] = useState<BranchState[]>([]);

  const branches: Branch[] = [
    {
      name: "Üsküdar",
      address: "Mimar Sinan, İmam Nasır Sk. No:13, 34674 Üsküdar/İstanbul",
      googlePlaceId: "ChIJQRocFK63yhQRjRk3Debu_ck", // Üsküdar şubesi
      averageRating: 4.3,
      totalReviews: 2463
    },
    {
      name: "Ümraniye",
      address: "Atatürk, Çiftlik Sk. No:10 a 34764 Ümraniye/İstanbul",
      googlePlaceId: "ChIJsUpbWFDJyhQRD8owg3qA8xw", // Ümraniye şubesi
      averageRating: 4.6,
      totalReviews: 1643
    },
    {
      name: "Karaköy",
      address: "Kemankeş Karamustafa Paşa, Mumhane Cd. No:7A İç Kapı No:1 34425 Beyoğlu",
      googlePlaceId: "ChIJC09Z9DC5yhQRnKPMN8dQ-a8", // Karaköy şubesi
      averageRating: 4.9,
      totalReviews: 403
    },
    {
      name: "Ankara",
      address: "Yukarı Bahçelievler, Oğuzhan Asiltürk Caddesi 22 A 06790 Çankaya/Ankara",
      googlePlaceId: "ChIJN8x9BAxP0xQRufCZfTUt2XY", // Ankara şubesi
      averageRating: 4.9,
      totalReviews: 290
    }
  ];

  const branchImageMap: Record<string, string> = {
    'Üsküdar': '/images/branches/uskudar.jpg',
    'Ümraniye': '/images/branches/umraniye.jpg',
    'Karaköy': '/images/branches/karakoy.jpg',
    'Ankara': '/images/branches/bahceli.jpg',
  };

  // Google Places API Key - .env dosyasından alınacak
  const GOOGLE_PLACES_API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;

  const fetchPlaceDetails = async (placeId: string) => {
    if (!GOOGLE_PLACES_API_KEY) {
      console.warn('Google Places API key not found');
      return null;
    }

    try {
      const placeDetailsResponse = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&reviews_sort=newest&language=tr&key=${GOOGLE_PLACES_API_KEY}`
      );
      
      if (!placeDetailsResponse.ok) {
        throw new Error('Failed to fetch place details');
      }
      
      const data = await placeDetailsResponse.json();
      return data.result;
    } catch (error) {
      console.error('Error fetching place details:', error);
      return null;
    }
  };

  // Static loader fallback: public/reviews/{slug}.json
  const fetchStaticReviews = async (branchKey: string) => {
    try {
      const res = await fetch(`/reviews/${branchKey}.json?_=${Date.now()}`);
      if (!res.ok) return null;
      const data = await res.json();
      return data as { rating: number; totalReviews: number; reviews: Review[] };
    } catch {
      return null;
    }
  };

  const fetchBranchData = async (branchIndex: number, placeId: string) => {
    try {
      const placeDetails = await fetchPlaceDetails(placeId);
      if (placeDetails) {
        const rating = placeDetails.rating || 0;
        const total = placeDetails.user_ratings_total || 0;
        const rawReviews = (placeDetails.reviews || []);
        let selected = rawReviews.filter((review: any) => review.rating === 5);
        if (selected.length === 0) {
          selected = rawReviews.filter((review: any) => review.rating >= 4);
        }
        if (selected.length === 0) {
          selected = rawReviews;
        }
        selected = selected.slice(0, 20);
        const formattedReviews: Review[] = selected.map((review: any) => ({
          id: review.time?.toString() || Math.random().toString(),
          author: review.author_name || 'Anonim',
          rating: review.rating || 5,
          text: review.text || '',
          time: review.relative_time_description || '',
          googleUrl: review.author_url || `https://www.google.com/maps/place/?q=place_id:${placeId}`
        }));
        // Debug print up to 20 reviews in console
        try {
          // eslint-disable-next-line no-console
          console.log('[Reviews]', branches[branchIndex].name, formattedReviews.slice(0, 20));
        } catch {}
        setBranchStates(prev => {
          const next = [...prev];
          next[branchIndex] = {
            rating,
            totalReviews: total,
            reviews: formattedReviews,
            loading: false,
            currentIndex: 0,
            errorMessage: null,
          };
          return next;
        });
      } else {
        // try static
        const branchKeyMap: Record<string, string> = { 'Üsküdar': 'uskudar', 'Ümraniye': 'umraniye', 'Karaköy': 'karakoy', 'Ankara': 'ankara' };
        const key = branchKeyMap[branches[branchIndex].name];
        const staticData = key ? await fetchStaticReviews(key) : null;
        if (staticData && staticData.reviews?.length) {
          setBranchStates(prev => {
            const next = [...prev];
            next[branchIndex] = {
              rating: staticData.rating,
              totalReviews: staticData.totalReviews,
              reviews: staticData.reviews,
              loading: false,
              currentIndex: 0,
              errorMessage: null,
            };
            return next;
          });
        } else {
          setBranchStates(prev => {
            const next = [...prev];
            next[branchIndex] = {
              rating: branches[branchIndex].averageRating,
              totalReviews: branches[branchIndex].totalReviews,
              reviews: [],
              loading: false,
              currentIndex: 0,
              errorMessage: 'Place details not available',
            };
            return next;
          });
        }
      }
    } catch (error) {
      console.error('Error fetching branch data:', error);
      setBranchStates(prev => {
        const next = [...prev];
        next[branchIndex] = {
          rating: 0,
          totalReviews: 0,
          reviews: [],
          loading: false,
          currentIndex: 0,
          errorMessage: 'Yorumlar yüklenemedi',
        };
        return next;
      });
    }
  };

  useEffect(() => {
    setBranchStates(
      branches.map(() => ({ rating: 0, totalReviews: 0, reviews: [], loading: true, currentIndex: 0, errorMessage: null }))
    );
    branches.forEach((b, idx) => {
      if (b.googlePlaceId) {
        fetchBranchData(idx, b.googlePlaceId);
      } else {
        setBranchStates(prev => {
          const next = [...prev];
          next[idx] = {
            rating: b.averageRating,
            totalReviews: b.totalReviews,
            reviews: [],
            loading: false,
            currentIndex: 0,
            errorMessage: 'API anahtarı veya Place ID yapılandırması bekleniyor',
          };
          return next;
        });
      }
    });
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => {
      const value = Math.max(0, Math.min(1, rating - i));
      const percent = Math.round(value * 100);
      return (
        <div key={i} className="relative w-5 h-5">
          <svg className="absolute inset-0 w-5 h-5 text-gray-300" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${percent}%` }}>
            <svg className="w-5 h-5 text-gold-500 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>
      );
    });
  };

  const handleReviewClick = (review: Review, branchIndex: number) => {
    const placeId = branches[branchIndex]?.googlePlaceId;
    const placeReviewsUrl = placeId
      ? `https://search.google.com/local/reviews?placeid=${placeId}`
      : review.googleUrl;
    const targetUrl = placeReviewsUrl || review.googleUrl;
    if (targetUrl) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const prevReview = (branchIndex: number) => {
    setBranchStates(prev => {
      const next = [...prev];
      const bs = next[branchIndex];
      if (!bs || bs.reviews.length === 0) return next;
      const len = bs.reviews.length;
      bs.currentIndex = (bs.currentIndex - 1 + len) % len;
      return next;
    });
  };

  const nextReview = (branchIndex: number) => {
    setBranchStates(prev => {
      const next = [...prev];
      const bs = next[branchIndex];
      if (!bs || bs.reviews.length === 0) return next;
      const len = bs.reviews.length;
      bs.currentIndex = (bs.currentIndex + 1) % len;
      return next;
    });
  };

  return (
    <section className="section-padding bg-cream-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-moss-800">
            A La Lune Müşteri Deneyimleri
          </h2>
          <div className="accent-line w-16 mx-auto mb-6"></div>
        </div>

        {/* 4 Kartlık Grid - Kubbe/Niş üst kısım, altı dikdörtgen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6 lg:gap-8">
          {branches.map((branch, index) => {
            const bs = branchStates[index];
            const currentReview = bs?.reviews[bs.currentIndex];
            return (
              <div key={index} className="relative group bg-white/90 backdrop-blur-sm border border-moss-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden min-h-[560px] md:min-h-[600px]">
                {/* Header with image */}
                <div className="relative h-80 md:h-96 lg:h-[28rem] border-b border-moss-100 overflow-hidden">
                  <img
                    src={branchImageMap[branch.name]}
                    alt={`${branch.name} şubesi`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                  <div className="relative z-10 h-full px-6 py-4 flex flex-col justify-end">
                    <div className="font-serif font-bold text-lg md:text-xl text-white drop-shadow whitespace-nowrap">A&nbsp;La&nbsp;Lune</div>
                    <div className="mt-1 text-white font-semibold text-sm md:text-base">{branch.name}</div>
                    <div className="mt-1 flex items-center gap-2">
                      <div className="flex">{renderStars(bs ? bs.rating : 0)}</div>
                      <span className="px-2.5 py-1 rounded-full bg-white/90 text-moss-900 text-xs font-semibold">{(bs?.rating || 0).toFixed(1)}</span>
                      <span className="text-xs text-white/90">({bs?.totalReviews || 0})</span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="relative px-8 lg:px-12 pt-2 pb-5 md:pb-7 mt-5 md:mt-7">
                  {bs?.loading ? (
                    <div className="text-center py-10">
                      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-moss-500"></div>
                      <p className="mt-3 text-moss-600 text-sm">Yükleniyor...</p>
                    </div>
                  ) : bs?.errorMessage ? (
                    <div className="text-center py-10 text-moss-600 text-sm">{bs.errorMessage}</div>
                  ) : !currentReview ? (
                    <div className="text-center py-10 text-moss-600 text-sm">Henüz yorum bulunamadı.</div>
                  ) : (
                    <div>
                      {/* Carousel navigation */}
                      {bs.reviews.length > 1 && (
                        <>
                          <button
                            aria-label="Önceki yorum"
                            onClick={() => prevReview(index)}
                            className="absolute left-0 lg:left-1 top-[60%] -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 text-moss-800 hover:bg-white/90 ring-1 ring-black/10 backdrop-blur-sm transition-all drop-shadow-md"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                          </button>
                          <button
                            aria-label="Sonraki yorum"
                            onClick={() => nextReview(index)}
                            className="absolute right-0 lg:right-1 top-[60%] -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 text-moss-800 hover:bg-white/90 ring-1 ring-black/10 backdrop-blur-sm transition-all drop-shadow-md"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="m8.59 16.59 1.41 1.41L16 12 10 6 8.59 7.41 13.17 12z"/></svg>
                          </button>
                        </>
                      )}

                      {/* Review Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 min-w-12 min-h-12 bg-moss-100 rounded-full flex items-center justify-center shadow-inner -ml-1">
                            <span className="text-moss-700 font-bold text-base select-none">{currentReview.author.charAt(0)}</span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-moss-900 text-base leading-tight truncate max-w-[260px] md:max-w-[300px]">{currentReview.author}</p>
                            {/* tarihi gizledik */}
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="flex -space-x-0.5">{renderStars(currentReview.rating)}</div>
                          <span className="px-1.5 py-0.5 rounded bg-moss-100 text-moss-800 text-xs font-semibold">{currentReview.rating.toFixed(1)}</span>
                        </div>
                      </div>

                      {/* Review Text */}
                      <blockquote
                        onClick={() => handleReviewClick(currentReview, index)}
                        className="relative text-[15px] md:text-base text-moss-800 leading-relaxed italic cursor-pointer"
                        title="Google'da yorumu aç"
                      >
                        <span className="absolute -left-1 -top-2 text-moss-300 text-2xl select-none">“</span>
                        <span className="pl-4 pr-1">{currentReview.text}</span>
                        <span className="text-moss-300 text-2xl align-text-top select-none">”</span>
                      </blockquote>

                      {/* Dots indicator */}
                      {/* alt çizgi / index göstergesi kaldırıldı */}
                      {DEBUG_SHOW_REVIEWS && index === 0 && (
                        <div className="mt-6 p-3 rounded-md bg-moss-50 border border-moss-100 text-[11px] text-moss-700 overflow-auto max-h-48">
                          <div className="font-semibold mb-2">Debug: İlk 20 yorum</div>
                          <pre className="whitespace-pre-wrap break-words">{JSON.stringify(bs.reviews.slice(0, 20), null, 2)}</pre>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Button removed as requested */}
      </div>
    </section>
  );
};

export default Testimonial;


