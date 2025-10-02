import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FranchiseApplicationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    district: '',
    investmentAmount: '',
    additionalInfo: ''
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
    console.log('Franchise Application:', formData);
    alert('Başvurunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      district: '',
      investmentAmount: '',
      additionalInfo: ''
    });
  };

  const process = [
    {
      step: 1,
      title: 'Başvuru',
      description: 'Franchise başvuru formunu doldurun'
    },
    {
      step: 2,
      title: 'Değerlendirme',
      description: 'Başvurunuzu detaylı olarak değerlendiriyoruz'
    },
    {
      step: 3,
      title: 'Görüşme',
      description: 'Yüz yüze görüşme ve lokasyon değerlendirmesi'
    },
    {
      step: 4,
      title: 'Sözleşme',
      description: 'Franchise sözleşmesi imzalama'
    },
    {
      step: 5,
      title: 'Eğitim',
      description: 'Kapsamlı eğitim programına katılım'
    },
    {
      step: 6,
      title: 'Açılış',
      description: 'Şubenizi açın ve işletmeye başlayın'
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
              Franchise Başvuru
            </h1>
            <div className="accent-line w-16 mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-moss-600">
              A La Lune ailesine katılmak için başvuru formunu doldurun
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="section-padding bg-cream-100">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-moss-800">
                Franchise Süreci
              </h2>
              <p className="text-lg text-moss-600 max-w-3xl mx-auto">
                A La Lune franchise olmak için izlemeniz gereken adımlar
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {process.map((step, index) => (
                  <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-moss-100 text-center">
                    {/* Step Number */}
                    <div className="w-16 h-16 bg-moss-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                      {step.step}
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-bold mb-3 font-serif text-moss-800">
                        {step.title}
                      </h3>
                      <p className="text-sm text-moss-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-moss-800">
                  Başvuru Formu
                </h2>
                <p className="text-lg text-moss-600">
                  Aşağıdaki formu doldurarak franchise başvurunuzu yapabilirsiniz
                </p>
              </div>

              <div className="card-premium p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Ad Soyad */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-moss-700 mb-2">
                        Ad *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500 transition-colors"
                        placeholder="Adınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-moss-700 mb-2">
                        Soyad *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500 transition-colors"
                        placeholder="Soyadınız"
                      />
                    </div>
                  </div>

                  {/* İletişim Bilgileri */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-moss-700 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500 transition-colors"
                        placeholder="(0216) 123 45 67"
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

                  {/* Adres Bilgileri */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-moss-700 mb-2">
                      Adres *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500 transition-colors"
                      placeholder="Mahalle, sokak, bina no, daire no"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-moss-700 mb-2">
                        İl *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500 transition-colors"
                        placeholder="İstanbul"
                      />
                    </div>
                    <div>
                      <label htmlFor="district" className="block text-sm font-medium text-moss-700 mb-2">
                        İlçe *
                      </label>
                      <input
                        type="text"
                        id="district"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500 transition-colors"
                        placeholder="Üsküdar"
                      />
                    </div>
                  </div>

                  {/* Yatırım Tutarı */}
                  <div>
                    <label htmlFor="investmentAmount" className="block text-sm font-medium text-moss-700 mb-2">
                      Planlanan Yatırım Tutarı *
                    </label>
                    <select
                      id="investmentAmount"
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500 transition-colors"
                    >
                      <option value="">Yatırım tutarını seçiniz</option>
                      <option value="100000-200000">100.000 - 200.000 TL</option>
                      <option value="200000-300000">200.000 - 300.000 TL</option>
                      <option value="300000-500000">300.000 - 500.000 TL</option>
                      <option value="500000+">500.000 TL ve üzeri</option>
                    </select>
                  </div>

                  {/* Ek Bilgiler */}
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-moss-700 mb-2">
                      Ek Bilgiler
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500 transition-colors resize-none"
                      placeholder="Franchise hakkında merak ettikleriniz, özel durumlarınız veya eklemek istediğiniz bilgiler..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      className="btn-primary px-12 py-4 text-lg"
                    >
                      Başvuruyu Gönder
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FranchiseApplicationPage;
