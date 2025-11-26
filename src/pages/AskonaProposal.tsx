import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const AskonaProposal = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ
            </div>
            <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Проектирование ИТ-архитектуры для Askona
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Аудит и проектирование ИТ-архитектуры для принятия data driven решений 
              с целью кратного роста и централизованного масштабирования платформы
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-12 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Icon name="Target" className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold">Цель проекта</h2>
            </div>
            <p className="text-2xl leading-relaxed text-white/95">
              Проектирование ИТ-архитектуры для принятия data driven решений с целью 
              кратного роста и централизованного масштабирования платформы Askona 3.0
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">Что вы получите</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: 'Layers',
                title: 'Целевая архитектура',
                desc: 'Полное описание архитектуры Askona 3.0 с учетом всех бизнес-требований и технологических решений',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: 'Cpu',
                title: 'Технологический стек',
                desc: 'Подбор оптимальных технологий и инструментов для реализации архитектуры',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: 'Map',
                title: 'RoadMap 2026',
                desc: 'Детальный план развития платформы на следующий год с этапами внедрения',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                icon: 'Users',
                title: 'Проектная команда',
                desc: 'Описание целевых процессов и состава команды для реализации проекта',
                gradient: 'from-green-500 to-emerald-500'
              }
            ].map((item, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon name={item.icon as any} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Этапы работ</h2>
          
          <div className="space-y-8">
            {[
              {
                number: '01',
                title: 'Проектирование архитектуры',
                duration: '3 недели',
                price: '608 484 ₽',
                blocks: [
                  {
                    title: 'Формализация',
                    items: ['Потребностей и требований', 'Бизнес-модели использования', 'Структур данных по блокам', 'Модели функциональных блоков']
                  },
                  {
                    title: 'Показатели качества',
                    items: ['Производительность', 'Надежность и безопасность', 'Масштабируемость', 'Актуальность данных']
                  },
                  {
                    title: 'Локализация',
                    items: ['Модель изменений по странам', 'Платежные сервисы', 'Сервисы доставки', 'Коммуникационные шлюзы']
                  },
                  {
                    title: 'Объемные показатели',
                    items: ['Количество товаров и цен', 'База клиентов', 'Промо и заказы', 'Остатки и складская логистика']
                  }
                ],
                result: 'Целевая архитектура Askona 3.0'
              },
              {
                number: '02',
                title: 'Интеграционная архитектура',
                duration: '3 недели',
                price: '968 704 ₽',
                blocks: [
                  {
                    title: 'Модели интеграций',
                    items: ['Архитектура ландшафта', 'Решение бизнес-задач']
                  },
                  {
                    title: 'Анализ интеграций',
                    items: ['Проблемность внешних систем', 'Оценка рисков интеграции', 'Стратегия миграции']
                  }
                ],
                result: 'Целевая архитектура Askona 3.0 в окружении интеграций'
              },
              {
                number: '03',
                title: 'Дорожная карта внедрения',
                duration: '2 недели',
                price: '287 153 ₽',
                blocks: [
                  {
                    title: 'Планирование этапов',
                    items: ['Определение этапов развития', 'Согласование milestone внедрений', 'Создание карты зависимостей']
                  },
                  {
                    title: 'Оценка и риски',
                    items: ['Оценка основных рисков', 'Бюджеты внедрений', 'Презентация дорожной карты']
                  }
                ],
                result: 'Roadmap развития Askona 3.0 на 2026 год'
              },
              {
                number: '04',
                title: 'Процессы и команда',
                duration: '5 недель',
                price: '454 236 ₽',
                blocks: [
                  {
                    title: 'Формализация потребностей',
                    items: ['Ограничения на внедрение', 'Бюджеты и локация', 'Адаптация модели процессов']
                  },
                  {
                    title: 'Организационная структура',
                    items: ['Формализация модели процессов', 'Роли, обязанности и требуемые знания', 'Форматы взаимодействия', 'Оценка объёма ролей']
                  }
                ],
                result: 'Целевые процессы и проектная команда'
              }
            ].map((stage, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-white/30 transition-all">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-6">
                      <div className="text-6xl font-bold text-white/20">{stage.number}</div>
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{stage.title}</h3>
                        <div className="flex items-center gap-4 text-gray-400">
                          <span className="flex items-center gap-2">
                            <Icon name="Clock" size={16} />
                            {stage.duration}
                          </span>
                          <span className="flex items-center gap-2">
                            <Icon name="DollarSign" size={16} />
                            {stage.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {stage.blocks.map((block, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-6">
                        <h4 className="font-semibold mb-3 text-lg">{block.title}</h4>
                        <ul className="space-y-2">
                          {block.items.map((item, j) => (
                            <li key={j} className="text-gray-300 text-sm flex items-start gap-2">
                              <span className="text-blue-400 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6">
                    <div className="flex items-center gap-3">
                      <Icon name="CheckCircle" className="w-6 h-6 text-green-400" />
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Результат этапа:</div>
                        <div className="font-semibold text-lg">{stage.result}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-white/10 p-12">
            <h2 className="text-4xl font-bold mb-8 text-center">Итоговая стоимость</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  5
                </div>
                <div className="text-gray-400">недель</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  3.3М ₽
                </div>
                <div className="text-gray-400">без НДС</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  4.0М ₽
                </div>
                <div className="text-gray-400">с НДС</div>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 text-sm">
                    <th className="text-left pb-4">Этап</th>
                    <th className="text-left pb-4">Срок</th>
                    <th className="text-right pb-4">Без НДС</th>
                    <th className="text-right pb-4">С НДС</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { name: 'Проектирование архитектуры', weeks: '3 нед.', base: '608 484', vat: '730 181' },
                    { name: 'Технологические ориентиры', weeks: '3 нед.', base: '968 704', vat: '1 162 445' },
                    { name: 'Дорожная карта внедрения', weeks: '2 нед.', base: '287 153', vat: '344 584' },
                    { name: 'Ретроспектива процессов', weeks: '5 нед.', base: '454 236', vat: '545 083' }
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-white/5">
                      <td className="py-4">{row.name}</td>
                      <td className="py-4 text-gray-400">{row.weeks}</td>
                      <td className="py-4 text-right">{row.base} ₽</td>
                      <td className="py-4 text-right">{row.vat} ₽</td>
                    </tr>
                  ))}
                  <tr className="border-t border-white/20 font-bold text-lg">
                    <td className="py-4">Итого</td>
                    <td className="py-4 text-gray-400">5 нед.</td>
                    <td className="py-4 text-right">3 294 142 ₽</td>
                    <td className="py-4 text-right">3 952 971 ₽</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Команда проекта</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { role: 'Team Lead анализа', name: 'Евгений Скориков', color: 'from-blue-500 to-cyan-500' },
              { role: 'Руководитель проекта', name: 'Елена Соколова', color: 'from-purple-500 to-pink-500' },
              { role: 'Системный аналитик', name: 'Диана Абдульманова', color: 'from-orange-500 to-red-500' },
              { role: 'Аналитик', name: 'Алексей Ровдо', color: 'from-green-500 to-emerald-500' },
              { role: 'Техлид', name: 'Чикнунов', color: 'from-indigo-500 to-purple-500' }
            ].map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all">
                <div className={`w-12 h-12 bg-gradient-to-br ${member.color} rounded-xl mb-4`}></div>
                <div className="text-sm text-gray-400 mb-2">{member.role}</div>
                <div className="font-semibold text-lg">{member.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Готовы обсудить проект?</h2>
            <p className="text-xl text-white/90 mb-8">
              Свяжитесь с нами для обсуждения деталей и уточнения сроков реализации
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <div className="text-sm text-white/70 mb-2">Коммерческий директор</div>
                  <div className="font-semibold text-xl mb-1">Мария Павлова</div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Icon name="Phone" size={16} />
                    +7 916 303 8740
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-sm text-white/70 mb-2">Связь</div>
                  <div className="flex items-center gap-2 text-white/90 mb-2">
                    <Icon name="Mail" size={16} />
                    pavlova@awg.ru
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Icon name="MessageCircle" size={16} />
                    @MariaPav
                  </div>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-6 text-lg font-semibold shadow-xl">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AskonaProposal;
