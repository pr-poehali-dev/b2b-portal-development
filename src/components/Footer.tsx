import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Компания */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/api/placeholder/40/40" 
                alt="Логотип компании" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold">B2B Порталы</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Разрабатываем корпоративные B2B порталы и системы автоматизации 
              для повышения эффективности бизнес-процессов.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-awg-blue transition-colors">
                <Icon name="MessageCircle" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-awg-blue transition-colors">
                <Icon name="Linkedin" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-awg-blue transition-colors">
                <Icon name="Github" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-awg-blue transition-colors">
                  Разработка порталов
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-awg-blue transition-colors">
                  Интеграция систем
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-awg-blue transition-colors">
                  Автоматизация процессов
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-awg-blue transition-colors">
                  Техническая поддержка
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-awg-blue transition-colors">
                  Консультации
                </a>
              </li>
            </ul>
          </div>

          {/* Компания */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Компания</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-awg-blue transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-awg-blue transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-awg-blue transition-colors">
                  Команда
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-awg-blue transition-colors">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-awg-blue transition-colors">
                  Новости
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="Phone" className="w-5 h-5 text-awg-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+7 (495) 123-45-67</p>
                  <p className="text-gray-400">+7 (800) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Mail" className="w-5 h-5 text-awg-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">info@b2bportals.ru</p>
                  <p className="text-gray-400">sales@b2bportals.ru</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" className="w-5 h-5 text-awg-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">г. Москва, ул. Тверская, 1</p>
                  <p className="text-gray-400">БЦ "Технопарк", офис 501</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Clock" className="w-5 h-5 text-awg-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-gray-400">Поддержка: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 B2B Порталы. Все права защищены.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-awg-blue transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-awg-blue transition-colors">
                Условия использования
              </a>
              <a href="#" className="text-gray-400 hover:text-awg-blue transition-colors">
                Соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;