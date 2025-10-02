import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutHome from './components/AboutHome';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import CareerPage from './pages/CareerPage';
import BranchesPage from './pages/BranchesPage';
import GalleryPage from './pages/GalleryPage';
import FranchisingPage from './pages/FranchisingPage';
import FranchiseApplicationPage from './pages/FranchiseApplicationPage';
import CareerApplicationPage from './pages/CareerApplicationPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleNavigate = (event: CustomEvent) => {
      const page = event.detail as string;
      setCurrentPage(page);
      if (window.location.hash !== `#${page}`) {
        window.location.hash = page;
      }
    };

    window.addEventListener('navigate', handleNavigate as EventListener);
    
    // initialize from hash on first load
    const initial = window.location.hash?.replace('#', '') || 'home';
    setCurrentPage(initial);

    const handleHashChange = () => {
      const pageFromHash = window.location.hash?.replace('#', '') || 'home';
      setCurrentPage(pageFromHash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('navigate', handleNavigate as EventListener);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <MenuPage />;
      case 'about':
        return <AboutPage />;
      case 'career':
        return <CareerPage />;
      case 'branches':
        return <BranchesPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'franchising':
        return <FranchisingPage />;
      case 'franchise-application':
        return <FranchiseApplicationPage />;
      case 'career-apply':
        return <CareerApplicationPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
              <>
                <Header onNavigate={setCurrentPage} />
                <main>
                  <Hero />
                  <AboutHome />
                  <Testimonial />
                </main>
                <Footer />
              </>
        );
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;