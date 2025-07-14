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
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-awg-gray to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-awg-dark mb-6">
              Разработка{' '}
              <span className="text-awg-blue">B2B порталов</span>{' '}
              для производства
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Создаем комплексные решения для автоматизации бизнеса: 
              интеграция с ERP, каталоги с чертежами, системы заказов 
              и личные кабинеты партнеров
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-awg-blue hover:bg-awg-blue/90 text-white px-8 py-3 text-lg"
            >
              Получить консультацию
            </Button>
            <Button
              onClick={() => scrollToSection('portfolio')}
              variant="outline"
              className="border-awg-blue text-awg-blue hover:bg-awg-blue hover:text-white px-8 py-3 text-lg"
            >
              Посмотреть работы
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-awg-blue/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Icon name="Database" className="w-6 h-6 text-awg-blue" />
              </div>
              <h3 className="text-lg font-semibold text-awg-dark mb-2">
                Интеграция с ERP
              </h3>
              <p className="text-gray-600">
                Синхронизация с 1С, SAP, Oracle и другими системами учета
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-awg-blue/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Icon name="FileText" className="w-6 h-6 text-awg-blue" />
              </div>
              <h3 className="text-lg font-semibold text-awg-dark mb-2">
                Каталоги с чертежами
              </h3>
              <p className="text-gray-600">
                Технические характеристики, 3D-модели и документация
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-awg-blue/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Icon name="Users" className="w-6 h-6 text-awg-blue" />
              </div>
              <h3 className="text-lg font-semibold text-awg-dark mb-2">
                Личные кабинеты
              </h3>
              <p className="text-gray-600">
                Персонализированные решения для партнеров и клиентов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;