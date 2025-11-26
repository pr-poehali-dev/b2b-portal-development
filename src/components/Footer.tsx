import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold mb-6">AWG</div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              ИТ-интегратор. Проектируем, разрабатываем и внедряем комплексные ИТ-решения для ускорения цифровой трансформации бизнеса.
            </p>
            <a 
              href="https://awg.ru" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-300 transition-colors inline-flex items-center gap-2"
            >
              awg.ru
              <Icon name="ExternalLink" className="w-4 h-4" />
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Компания</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <a href="https://awg.ru/services/" className="text-gray-400 hover:text-white transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <Link to="/cases" className="text-gray-400 hover:text-white transition-colors">
                  Проекты
                </Link>
              </li>
              <li>
                <a href="https://awg.ru/clients/" className="text-gray-400 hover:text-white transition-colors">
                  Клиенты
                </a>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors">
                  Команда
                </Link>
              </li>
              <li>
                <a href="https://awg.ru/news/" className="text-gray-400 hover:text-white transition-colors">
                  Блог
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://awg.ru/services/" className="text-gray-400 hover:text-white transition-colors">
                  ИТ-консалтинг
                </a>
              </li>
              <li>
                <a href="https://awg.ru/services/" className="text-gray-400 hover:text-white transition-colors">
                  Разработка ПО
                </a>
              </li>
              <li>
                <a href="https://awg.ru/services/" className="text-gray-400 hover:text-white transition-colors">
                  Внедрение систем
                </a>
              </li>
              <li>
                <a href="https://awg.ru/services/" className="text-gray-400 hover:text-white transition-colors">
                  Аутстаффинг
                </a>
              </li>
              <li>
                <a href="https://awg.ru/services/" className="text-gray-400 hover:text-white transition-colors">
                  Data аналитика
                </a>
              </li>
              <li>
                <a href="https://awg.ru/experts/" className="text-gray-400 hover:text-white transition-colors">
                  Стать партнером
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-4">
              <a 
                href="tel:+74952780708" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Phone" className="w-5 h-5 flex-shrink-0" />
                <span>+7 495 278-07-08</span>
              </a>
              
              <a 
                href="https://t.me/awg_connect_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Send" className="w-5 h-5 flex-shrink-0" />
                <span>Telegram</span>
              </a>

              <Link 
                to="/contact" 
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Mail" className="w-5 h-5 flex-shrink-0" />
                <span>Написать нам</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 AWG. Все права защищены.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="https://awg.ru/contacts/" className="text-gray-400 hover:text-white transition-colors">
                Контакты
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
