import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'title',
      title: 'Разработка B2B порталов',
      subtitle: 'для производства',
      content: (
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
            Разработка{' '}
            <span className="text-awg-blue">B2B порталов</span>{' '}
            для производства
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Создаем комплексные решения для автоматизации бизнеса: 
            системы заказов и личные кабинеты партнеров
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button className="bg-awg-blue hover:bg-awg-blue/90 text-white px-12 py-4 text-xl">
              Начать проект
            </Button>
            <Button 
              variant="outline" 
              className="border-awg-blue text-awg-blue hover:bg-awg-blue hover:text-white bg-white px-12 py-4 text-xl"
            >
              Смотреть кейсы
            </Button>
          </div>
        </div>
      )
    },
    {
      id: 'services',
      title: 'Наши услуги',
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-awg-gray p-12 rounded-lg border border-gray-700">
            <div className="w-16 h-16 bg-awg-blue/20 rounded-lg flex items-center justify-center mb-6">
              <Icon name="ShoppingCart" className="w-8 h-8 text-awg-blue" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Системы заказов
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Автоматизация процессов заказов с многоуровневыми согласованиями и бюджетным контролем
            </p>
            <ul className="space-y-3 text-lg">
              {[
                'Корзина с учетом сложных условий',
                'Многоуровневые процессы согласования',
                'Контроль бюджета и лимитов',
                'Уведомления и отчеты'
              ].map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-awg-blue mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-awg-gray p-12 rounded-lg border border-gray-700">
            <div className="w-16 h-16 bg-awg-blue/20 rounded-lg flex items-center justify-center mb-6">
              <Icon name="Users" className="w-8 h-8 text-awg-blue" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Личные кабинеты
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Персонализированные решения для дилеров, партнеров и корпоративных клиентов
            </p>
            <ul className="space-y-3 text-lg">
              {[
                'Индивидуальные цены и условия',
                'История заказов и документооборот',
                'Аналитика и отчеты',
                'Система лояльности и бонусов'
              ].map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Icon name="Check" className="w-5 h-5 text-awg-blue mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'portfolio',
      title: 'Наши проекты',
      content: (
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-awg-gray p-8 rounded-lg border border-gray-700">
              <img
                src="/img/44146ae9-6074-4855-bb88-653dd4760e70.jpg"
                alt="Система заказов"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-4">
                Система заказов для производства
              </h3>
              <p className="text-gray-300 mb-6">
                Комплексное решение для автоматизации процессов заказов с многоуровневыми согласованиями
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Node.js', 'PostgreSQL', 'Redis'].map((tech) => (
                  <span key={tech} className="bg-awg-blue/20 text-awg-blue px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-2">
                {[
                  'Автоматизация процессов заказов',
                  'Многоуровневые согласования',
                  'Контроль бюджета и лимитов',
                  'Уведомления и отчеты'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-awg-blue mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-awg-gray p-8 rounded-lg border border-gray-700">
              <img
                src="/img/8b74a0e1-7cc4-47e2-bec2-bb2885f72401.jpg"
                alt="Дилерский портал"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-4">
                Дилерский портал
              </h3>
              <p className="text-gray-300 mb-6">
                Персонализированная платформа для дилеров с индивидуальными условиями и аналитикой
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Node.js', 'MongoDB', 'GraphQL'].map((tech) => (
                  <span key={tech} className="bg-awg-blue/20 text-awg-blue px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-2">
                {[
                  'Индивидуальные цены для дилеров',
                  'Система лояльности',
                  'Детальная аналитика продаж',
                  'Мобильное приложение'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Check" className="w-4 h-4 text-awg-blue mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'about',
      title: 'О нашей компании',
      content: (
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-2xl text-gray-300">
              Мы специализируемся на создании высокотехнологичных B2B решений 
              для промышленных предприятий и производственных компаний
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-awg-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Trophy" className="w-6 h-6 text-awg-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Более 8 лет опыта
                  </h3>
                  <p className="text-xl text-gray-300">
                    Разработали свыше 150 B2B порталов для крупных производственных предприятий
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-awg-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Cog" className="w-6 h-6 text-awg-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Комплексные решения
                  </h3>
                  <p className="text-xl text-gray-300">
                    От анализа бизнес-процессов до внедрения и технической поддержки
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-awg-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" className="w-6 h-6 text-awg-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Безопасность данных
                  </h3>
                  <p className="text-xl text-gray-300">
                    Соответствие стандартам безопасности и требованиям корпоративной среды
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-awg-gray p-8 rounded-lg border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Наша экспертиза
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-awg-blue mb-2">150+</div>
                  <div className="text-lg text-gray-600">Проектов</div>
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-awg-blue mb-2">50+</div>
                  <div className="text-lg text-gray-600">Клиентов</div>
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-awg-blue mb-2">99%</div>
                  <div className="text-lg text-gray-600">Uptime</div>
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-awg-blue mb-2">24/7</div>
                  <div className="text-lg text-gray-600">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Свяжитесь с нами',
      content: (
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl text-gray-300 mb-12">
            Готовы обсудить ваш проект? Мы создадим оптимальное решение для вашего бизнеса
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-awg-gray p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-awg-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="w-6 h-6 text-awg-blue" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (495) 123-45-67</p>
            </div>
            <div className="bg-awg-gray p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-awg-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="w-6 h-6 text-awg-blue" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300">info@b2bportals.ru</p>
            </div>
            <div className="bg-awg-gray p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-awg-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="w-6 h-6 text-awg-blue" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Адрес</h3>
              <p className="text-gray-300">г. Москва, ул. Тверская, 1</p>
            </div>
          </div>
          <Button className="bg-awg-blue hover:bg-awg-blue/90 text-white px-12 py-4 text-xl">
            Получить консультацию
          </Button>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-awg-dark text-white relative overflow-hidden">
      {/* Slide Content */}
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-awg-blue rounded-lg flex items-center justify-center">
              <Icon name="Code" className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">B2B Порталы</span>
          </div>
          <div className="text-sm text-gray-400">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Slide Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {slides[currentSlide].title}
          </h2>
        </div>

        {/* Slide Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-7xl">
            {slides[currentSlide].content}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button
            onClick={prevSlide}
            variant="outline"
            className="border-awg-blue text-awg-blue hover:bg-awg-blue hover:text-white"
            disabled={currentSlide === 0}
          >
            <Icon name="ChevronLeft" className="w-5 h-5 mr-2" />
            Назад
          </Button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-awg-blue'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="outline"
            className="border-awg-blue text-awg-blue hover:bg-awg-blue hover:text-white"
            disabled={currentSlide === slides.length - 1}
          >
            Далее
            <Icon name="ChevronRight" className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Keyboard Navigation */}
      <div className="fixed bottom-4 right-4 text-xs text-gray-500">
        Используйте ← → для навигации
      </div>
    </div>
  );
};

export default Presentation;