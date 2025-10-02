import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BranchesMap from '../components/BranchesMap';

const BranchesPage: React.FC = () => {
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
              ŞUBELERİMİZ
            </h1>
            <div className="accent-line w-16 mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-moss-600">
              Size en yakın A La Lune şubesini bulun ve yol tarifi alın
            </p>
          </div>
        </div>

        {/* Unified BranchesMap Component */}
        <BranchesMap />
      </main>

      <Footer />
    </div>
  );
};

export default BranchesPage;