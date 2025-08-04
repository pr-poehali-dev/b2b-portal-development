import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/img/9e4ac800-bed6-4d08-af0e-9fdbd4bc7c99.jpg" 
          alt="B2B Portal Dashboard Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-awg-dark/95 via-awg-dark/80 to-awg-dark/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="text-left text-white">
            <div className="inline-flex items-center px-4 py-2 bg-awg-blue/20 backdrop-blur-sm text-awg-blue border border-awg-blue/30 rounded-full text-sm font-medium mb-6">
              ИТ-интегратор B2B решений
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Разработка{' '}
              <span className="text-awg-blue">B2B порталов</span>{' '}
              для производства
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Создаем комплексные решения для автоматизации бизнеса: 
              системы заказов и личные кабинеты партнеров
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-awg-blue hover:bg-awg-blue/90 text-white px-8 py-4 text-lg rounded-xl shadow-lg"
              >
                Получить консультацию
              </Button>
              <Button
                onClick={() => scrollToSection('portfolio')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-awg-dark px-8 py-4 text-lg rounded-xl backdrop-blur-sm"
              >
                Посмотреть работы
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-32 right-8 bg-awg-blue text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-20">
        Новый проект
      </div>
      <div className="absolute bottom-32 right-12 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-gray-200 z-20 text-awg-dark">
        ⚡ Быстрый запуск
      </div>
      
      {/* Stats section */}
      <div className="bg-awg-dark py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-awg-blue mb-2">50+</div>
              <div className="text-gray-300">Реализованных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-awg-blue mb-2">5+</div>
              <div className="text-gray-300">Лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-awg-blue mb-2">24/7</div>
              <div className="text-gray-300">Техническая поддержка</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-awg-blue mb-2">100%</div>
              <div className="text-gray-300">Гарантия результата</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;