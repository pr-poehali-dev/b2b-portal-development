import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const AskonaProposal = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-gray-500 mb-4">КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</div>
            <h1 className="text-6xl font-bold mb-6">Проектирование ИТ-архитектуры для Askona</h1>
            <p className="text-xl text-gray-600">
              Аудит и проектирование ИТ-архитектуры для принятия data driven решений 
              с целью кратного роста и централизованного масштабирования платформы
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Цель проекта</h2>
          <div className="bg-black text-white p-12 rounded-lg">
            <p className="text-2xl leading-relaxed">
              Проектирование ИТ-архитектуры для принятия data driven решений с целью 
              кратного роста и централизованного масштабирования платформы Askona 3.0
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Результаты проекта</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <Icon name="Layers" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Целевая архитектура</h3>
              <p className="text-gray-600">
                Полное описание архитектуры Askona 3.0 с учетом всех бизнес-требований 
                и технологических решений
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <Icon name="Cpu" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Технологический стек</h3>
              <p className="text-gray-600">
                Подбор оптимальных технологий и инструментов для реализации архитектуры
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <Icon name="Map" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">RoadMap 2026</h3>
              <p className="text-gray-600">
                Детальный план развития платформы на следующий год с этапами внедрения
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <Icon name="Users" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Проектная команда</h3>
              <p className="text-gray-600">
                Описание целевых процессов и состава команды для реализации проекта
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Этапы работ</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-black pl-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold">Этап 1. Проектирование архитектуры</h3>
                <span className="text-gray-600 whitespace-nowrap">3 недели</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Формализация</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Потребностей и требований</li>
                    <li>• Бизнес-модели использования</li>
                    <li>• Структур данных по блокам</li>
                    <li>• Модели функциональных блоков</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Показатели качества</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Производительность</li>
                    <li>• Надежность и безопасность</li>
                    <li>• Масштабируемость</li>
                    <li>• Актуальность данных</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Локализация</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Модель изменений по странам</li>
                    <li>• Платежные сервисы</li>
                    <li>• Сервисы доставки</li>
                    <li>• Коммуникационные шлюзы</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Объемные показатели</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Количество товаров и цен</li>
                    <li>• База клиентов</li>
                    <li>• Промо и заказы</li>
                    <li>• Остатки и складская логистика</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="font-semibold mb-1">Результат:</div>
                <div className="text-gray-600">Целевая архитектура Askona 3.0</div>
              </div>
            </div>

            <div className="border-l-4 border-black pl-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold">Этап 2. Интеграционная архитектура</h3>
                <span className="text-gray-600 whitespace-nowrap">3 недели</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Модели интеграций</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Архитектура ландшафта</li>
                    <li>• Решение бизнес-задач</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Анализ интеграций</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Проблемность внешних систем</li>
                    <li>• Оценка рисков интеграции</li>
                    <li>• Стратегия миграции</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="font-semibold mb-1">Результат:</div>
                <div className="text-gray-600">Целевая архитектура Askona 3.0 в окружении интеграций</div>
              </div>
            </div>

            <div className="border-l-4 border-black pl-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold">Этап 3. Дорожная карта внедрения</h3>
                <span className="text-gray-600 whitespace-nowrap">2 недели</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Планирование этапов</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Определение этапов развития</li>
                    <li>• Согласование milestone внедрений</li>
                    <li>• Создание карты зависимостей</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Оценка и риски</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Оценка основных рисков</li>
                    <li>• Бюджеты внедрений</li>
                    <li>• Презентация дорожной карты</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="font-semibold mb-1">Результат:</div>
                <div className="text-gray-600">Roadmap развития Askona 3.0 на 2026 год</div>
              </div>
            </div>

            <div className="border-l-4 border-black pl-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold">Этап 4. Процессы и команда</h3>
                <span className="text-gray-600 whitespace-nowrap">5 недель</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Формализация потребностей</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ограничения на внедрение</li>
                    <li>• Бюджеты и локация</li>
                    <li>• Адаптация модели процессов</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Организационная структура</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Формализация модели процессов</li>
                    <li>• Роли, обязанности и требуемые знания</li>
                    <li>• Форматы взаимодействия</li>
                    <li>• Оценка объёма ролей</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="font-semibold mb-1">Результат:</div>
                <div className="text-gray-600">Целевые процессы и проектная команда</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Стоимость и сроки</h2>
          
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Этап</th>
                    <th className="px-6 py-4 text-left font-semibold">Длительность</th>
                    <th className="px-6 py-4 text-right font-semibold">Стоимость (без НДС)</th>
                    <th className="px-6 py-4 text-right font-semibold">Стоимость (с НДС)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Этап 1. Проектирование архитектуры</td>
                    <td className="px-6 py-4">3 недели</td>
                    <td className="px-6 py-4 text-right">608 484 ₽</td>
                    <td className="px-6 py-4 text-right">730 181 ₽</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Этап 2. Технологические ориентиры</td>
                    <td className="px-6 py-4">3 недели</td>
                    <td className="px-6 py-4 text-right">968 704 ₽</td>
                    <td className="px-6 py-4 text-right">1 162 445 ₽</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Этап 3. Дорожная карта внедрения</td>
                    <td className="px-6 py-4">2 недели</td>
                    <td className="px-6 py-4 text-right">287 153 ₽</td>
                    <td className="px-6 py-4 text-right">344 584 ₽</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Этап 4. Ретроспектива процессов</td>
                    <td className="px-6 py-4">5 недель</td>
                    <td className="px-6 py-4 text-right">454 236 ₽</td>
                    <td className="px-6 py-4 text-right">545 083 ₽</td>
                  </tr>
                  <tr className="bg-gray-50 font-semibold">
                    <td className="px-6 py-4">Итого за проект</td>
                    <td className="px-6 py-4">5 недель</td>
                    <td className="px-6 py-4 text-right">3 294 142 ₽</td>
                    <td className="px-6 py-4 text-right">3 952 971 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Команда проекта</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { role: 'Team Lead анализа', name: 'Евгений Скориков' },
              { role: 'Руководитель проекта', name: 'Елена Соколова' },
              { role: 'Системный аналитик', name: 'Диана Абдульманова' },
              { role: 'Аналитик', name: 'Алексей Ровдо' },
              { role: 'Техлид', name: 'Чикнунов' }
            ].map((member, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="text-sm text-gray-500 mb-2">{member.role}</div>
                <div className="font-semibold">{member.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Готовы обсудить проект?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Свяжитесь с нами для обсуждения деталей и уточнения сроков реализации
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="User" className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">Мария Павлова</div>
                    <div className="text-sm text-gray-300">Коммерческий директор</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="w-5 h-5" />
                  <div>+7 916 303 8740</div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="w-5 h-5" />
                  <div>pavlova@awg.ru</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-12 py-6 text-lg">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AskonaProposal;
