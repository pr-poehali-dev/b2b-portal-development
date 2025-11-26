import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const AskonaProposal = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-semibold mb-6">
              КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ
            </div>
            <h1 className="text-7xl font-bold mb-8 text-gray-900">
              КП для компании Askona
            </h1>
            <p className="text-2xl text-gray-700 leading-relaxed">
              Аудит и проектирование ИТ-архитектуры для централизованного 
              масштабирования платформы Askona 3.0
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-12 rounded-3xl shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Icon name="Target" className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold">Цель проекта</h2>
            </div>
            <p className="text-2xl leading-relaxed">
              Проектирование ИТ-архитектуры для принятия data driven решений с целью 
              кратного роста и централизованного масштабирования платформы Askona 3.0
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center text-gray-900">Что вы получите</h2>
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
              <div key={index} className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon name={item.icon as any} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center text-gray-900">Как мы достигнем результата</h2>
          
          <div className="space-y-8">
            {[
              {
                number: '01',
                title: 'Проектирование архитектуры',
                duration: '3 недели',
                price: '608 484 ₽',
                gradient: 'from-blue-500 to-cyan-500',
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
                gradient: 'from-purple-500 to-pink-500',
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
                gradient: 'from-orange-500 to-red-500',
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
                gradient: 'from-green-500 to-emerald-500',
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
              <div key={index} className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-6">
                      <div className={`text-6xl font-bold bg-gradient-to-br ${stage.gradient} bg-clip-text text-transparent`}>
                        {stage.number}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold mb-2 text-gray-900">{stage.title}</h3>
                        <div className="flex items-center gap-4 text-gray-600">
                          <span className="flex items-center gap-2">
                            <Icon name="Clock" size={16} />
                            {stage.duration}
                          </span>
                          <span className="text-2xl font-bold text-gray-900">{stage.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {stage.blocks.map((block, blockIndex) => (
                      <div key={blockIndex} className="bg-gray-50 p-4 rounded-xl">
                        <h4 className="font-semibold mb-3 text-gray-900">{block.title}</h4>
                        <ul className="space-y-2">
                          {block.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <Icon name="Check" size={14} className={`mt-0.5 flex-shrink-0 bg-gradient-to-br ${stage.gradient} bg-clip-text text-transparent`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className={`bg-gradient-to-br ${stage.gradient} text-white p-4 rounded-xl flex items-center gap-3`}>
                    <Icon name="CheckCircle2" size={24} />
                    <span className="font-semibold">Результат: {stage.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Итоговая стоимость проекта</h2>
          <div className="text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            2 318 577 ₽
          </div>
          <p className="text-xl text-gray-300 mb-12">
            Полный цикл проектирования ИТ-архитектуры Askona 3.0 за 13 недель
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg">
              Принять предложение
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AskonaProposal;
