import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/api/placeholder/48/48" 
              alt="Логотип компании" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl font-bold text-awg-dark">B2B Порталы</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-awg-blue transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-awg-blue transition-colors"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-awg-blue transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-awg-blue transition-colors"
            >
              Портфолио
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-awg-blue hover:bg-awg-blue/90"
            >
              Связаться
            </Button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <Icon name="Menu" className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-gray-700 hover:text-awg-blue transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-awg-blue transition-colors"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-awg-blue transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-gray-700 hover:text-awg-blue transition-colors"
              >
                Портфолио
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-awg-blue hover:bg-awg-blue/90 self-start"
              >
                Связаться
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;