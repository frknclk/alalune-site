import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleNavigate = (page: string) => {
    const event = new CustomEvent('navigate', { detail: page });
    window.dispatchEvent(event);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  // Removed branches section from the page, so the data is no longer needed.

  return (
    <div className="bg-cream-50 min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} />

      <main className="flex-grow pt-24">
        {/* Page Header */}
        <div className="section-padding bg-premium-gradient">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-moss-800">
              BİZE ULAŞIN
            </h1>
            <div className="accent-line w-16 mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-moss-600">
              Sorularınız, önerileriniz veya şikayetleriniz için bizimle iletişime geçin
            </p>
          </div>
        </div>

        {/* Contact Form & Info */}
        <div className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="card-premium p-8">
                <h2 className="text-2xl font-bold mb-6 font-serif text-moss-800">
                  İletişim Formu
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-moss-700 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500 transition-colors"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-moss-700 mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500 transition-colors"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-moss-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500 transition-colors"
                        placeholder="(0216) 123 45 67"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-moss-700 mb-2">
                        Konu *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500 transition-colors"
                      >
                        <option value="">Konu seçiniz</option>
                        <option value="genel">Genel Bilgi</option>
                        <option value="sikayet">Şikayet</option>
                        <option value="oneri">Öneri</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-moss-700 mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500 transition-colors resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Mesaj Gönder
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="card-premium p-8">
                  <h3 className="text-2xl font-bold mb-6 font-serif text-moss-800">
                    İletişim Bilgileri
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-moss-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-moss-800 mb-1">Adres</h4>
                        <p className="text-moss-600">
                          Mimar Sinan, İmam Nasır Sk. No:13, 34674 Üsküdar/İstanbul
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-moss-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-moss-800 mb-1">Telefon</h4>
                        <a href="tel:+902163100001" className="text-moss-600 hover:text-moss-700">
                          (0216) 310 00 01
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-moss-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-moss-800 mb-1">E-posta</h4>
                        <a href="mailto:info@alalune.com" className="text-moss-600 hover:text-moss-700">
                          info@alalune.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-moss-500 mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-moss-800 mb-1">Çalışma Saatleri</h4>
                        <p className="text-moss-600">Hafta içi: 08:30 – 21:00</p>
                        <p className="text-moss-600">Hafta sonu: 09:30 – 21:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="card-premium p-8">
                  <h4 className="text-lg font-semibold text-moss-700 mb-4">Sosyal Medya</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/laluneuskudar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-moss-500 text-white rounded-full flex items-center justify-center hover:bg-moss-600 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/alalunepatisserie/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-moss-500 text-white rounded-full flex items-center justify-center hover:bg-moss-600 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.262 2.242 1.324 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.324 3.608-.975.975-2.242 1.262-3.608 1.324-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.324-.975-.975-1.262-2.242-1.324-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.324-3.608.975-.975 2.242-1.262 3.608-1.324C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.773.13 4.603.372 3.635 1.34 2.667 2.308 2.425 3.478 2.367 4.757 2.309 6.037 2.295 6.446 2.295 10c0 3.554.014 3.963.072 5.243.058 1.279.3 2.449 1.268 3.417.968.968 2.138 1.21 3.417 1.268C7.86 19.994 8.269 20.008 12 20.008s4.14-.014 5.243-.072c1.279-.058 2.449-.3 3.417-1.268.968-.968 1.21-2.138 1.268-3.417.058-1.279.072-1.688.072-5.243s-.014-3.963-.072-5.243c-.058-1.279-.3-2.449-1.268-3.417C19.692.372 18.522.13 17.243.072 15.963.014 15.554 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.906a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                      </svg>
                    </a>
                    <a href="https://www.tiktok.com/@alalunepatisserieonline" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-moss-600 text-white rounded-full flex items-center justify-center hover:bg-moss-700 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </a>
                  </div>
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

export default ContactPage;
