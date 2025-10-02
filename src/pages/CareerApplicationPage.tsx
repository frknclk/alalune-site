import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface PositionData {
  title: string;
  location?: string;
  type?: string;
  description?: string;
}

const CareerApplicationPage: React.FC = () => {
  const [position, setPosition] = useState<PositionData>({ title: '' });
  const positionOptions: PositionData[] = [
    { title: 'Pasta Ustası', location: 'Üsküdar', type: 'Tam Zamanlı' },
    { title: 'Satış Danışmanı', location: 'Ümraniye', type: 'Tam Zamanlı' },
    { title: 'Şube Müdürü', location: 'Karaköy', type: 'Tam Zamanlı' },
  ];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // URL alanı kaldırıldı, sadece dosya adı bilgisini tutuyoruz
  const [cvFileName, setCvFileName] = useState('');
  const [message, setMessage] = useState('');

  const handleNavigate = (page: string) => {
    const event = new CustomEvent('navigate', { detail: page });
    window.dispatchEvent(event);
  };

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('applicationPosition');
      if (raw) {
        const parsed = JSON.parse(raw) as PositionData;
        setPosition(parsed || { title: '' });
      }
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0 });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!name || !email) {
      alert('Lütfen ad soyad ve e-posta alanlarını doldurun.');
      return;
    }

    const recipient = 'info@alalune.com';
    const subject = `Kariyer Başvurusu - ${position.title || 'Pozisyon'} - ${name}`;
    const lines = [
      `Pozisyon: ${position.title || 'Belirtilmedi'}`,
      position.location ? `Lokasyon: ${position.location}` : '',
      position.type ? `Tip: ${position.type}` : '',
      '',
      `Ad Soyad: ${name}`,
      `E-posta: ${email}`,
      phone ? `Telefon: ${phone}` : '',
      cvFileName ? `CV Dosyası: ${cvFileName}` : '',
      '',
      'Ön Yazı:',
      message || '-',
    ].filter(Boolean);

    const body = encodeURIComponent(lines.join('\n'));
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;

    setTimeout(() => {
      alert('E-posta istemcinizde başvuru e-postası oluşturuldu. Göndermeyi unutmayın.');
    }, 200);
  };

  return (
    <div className="bg-cream-50 min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} />

      <main className="flex-grow pt-24">
        <div className="section-padding bg-premium-gradient">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-moss-800">Başvuru</h1>
            <div className="accent-line w-16 mx-auto mb-6"></div>
          </div>
        </div>

        <div className="section-padding">
          <div className="container-custom">
            <div className="card-premium p-8 max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-moss-700 mb-2">Pozisyon</label>
                  <select
                    className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500"
                    value={position.title}
                    onChange={(e) => {
                      const found = positionOptions.find(p => p.title === e.target.value);
                      setPosition(found || { title: e.target.value });
                    }}
                  >
                    {positionOptions.map((opt) => (
                      <option key={opt.title} value={opt.title}>{opt.title} - {opt.location}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-moss-700 mb-2">Ad Soyad *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-moss-700 mb-2">E-posta *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-moss-700 mb-2">Telefon</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500"
                    placeholder="(5xx) xxx xx xx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-moss-700 mb-2">CV</label>
                  <div
                    className="border-2 border-dashed border-moss-300 rounded-lg p-4 text-center text-moss-600 hover:border-moss-400"
                    onDragOver={(e) => { e.preventDefault(); }}
                    onDrop={(e) => {
                      e.preventDefault();
                      const file = e.dataTransfer.files?.[0];
                      if (file) {
                        setCvFileName(file.name);
                        alert('CV dosyanız yüklendi: ' + file.name + '\nNot: Güvenlik nedeniyle dosyayı e-postaya ekleyemiyoruz; lütfen e-posta istemcinizde ekleyin.');
                      }
                    }}
                  >
                    <p className="text-sm">CV dosyanızı buraya sürükleyin veya</p>
                    <label className="inline-block mt-2 px-3 py-1 rounded bg-moss-100 text-moss-800 cursor-pointer">
                      Dosya Seç
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setCvFileName(file.name);
                            alert('CV dosyanız yüklendi: ' + file.name + '\nNot: Güvenlik nedeniyle dosyayı e-postaya ekleyemiyoruz; lütfen e-posta istemcinizde ekleyin.');
                          }
                        }}
                      />
                    </label>
                    {cvFileName && (
                      <p className="mt-2 text-xs text-moss-600">Seçilen: {cvFileName}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-moss-700 mb-2">Ön Yazı</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 border border-moss-300 rounded-lg focus:ring-2 focus:ring-moss-500 focus:border-moss-500 resize-none"
                    placeholder="Kendinizi kısaca tanıtın, deneyimlerinizi ve motivasyonunuzu ekleyin."
                  />
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="btn-primary">Başvuruyu Gönder</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareerApplicationPage;


