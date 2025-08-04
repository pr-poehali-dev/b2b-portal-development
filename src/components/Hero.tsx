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
    <section id="hero" className="pt-32 pb-20 bg-awg-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-awg-gray/50 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-awg-blue/10 text-awg-blue rounded-full text-sm font-medium mb-6">
                ИТ-интегратор B2B решений
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-awg-dark mb-6 leading-tight">
                Разработка{' '}
                <span className="text-awg-blue">B2B порталов</span>{' '}
                для производства
              </h1>
              <p className="text-lg text-awg-muted mb-8 max-w-lg leading-relaxed">
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
                  className="border-2 border-awg-blue text-awg-blue hover:bg-awg-blue hover:text-white px-8 py-4 text-lg rounded-xl"
                >
                  Посмотреть работы
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-awg-muted">b2b-portal.ru</span>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-awg-blue/20 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-8 bg-awg-blue/10 rounded w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
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