import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Цифровая трансформация вашего бизнеса
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl">
              AWG — ИТ-интегратор с 2015 года. Проектируем, разрабатываем и внедряем комплексные 
              ИТ-решения для ускорения цифровой трансформации и устойчивого роста бизнеса.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg">
                  Обсудить проект
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                  О компании
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Популярные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group border border-gray-200 rounded-lg p-8 hover:border-black transition-all">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Code" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Разработка ПО</h3>
              <p className="text-gray-600 mb-6">
                Проектирование и разработка B2B порталов, сайтов, интернет-магазинов, маркетплейсов и микросервисов
              </p>
              <a href="https://awg.ru/services/" className="text-black font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all">
                Подробнее
                <Icon name="ArrowRight" className="w-4 h-4" />
              </a>
            </div>

            <div className="group border border-gray-200 rounded-lg p-8 hover:border-black transition-all">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Brain" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">ИТ-консалтинг</h3>
              <p className="text-gray-600 mb-6">
                Цифровая трансформация, разработка ИТ-стратегий в eCommerce и B2B, проектирование омниканальной архитектуры
              </p>
              <a href="https://awg.ru/services/" className="text-black font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all">
                Подробнее
                <Icon name="ArrowRight" className="w-4 h-4" />
              </a>
            </div>

            <div className="group border border-gray-200 rounded-lg p-8 hover:border-black transition-all">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Puzzle" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Внедрение систем</h3>
              <p className="text-gray-600 mb-6">
                Внедрение и интеграция ERP, CRM, CMS, Elasticsearch, PIM, DAM, CDP, WMS, OMS и других систем
              </p>
              <a href="https://awg.ru/services/" className="text-black font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all">
                Подробнее
                <Icon name="ArrowRight" className="w-4 h-4" />
              </a>
            </div>

            <div className="group border border-gray-200 rounded-lg p-8 hover:border-black transition-all">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Users" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Аутстаффинг</h3>
              <p className="text-gray-600 mb-6">
                Аутстаффинг ИТ-специалистов. Доступ к партнерской сети из 22 000+ специалистов
              </p>
              <a href="https://awg.ru/services/" className="text-black font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all">
                Подробнее
                <Icon name="ArrowRight" className="w-4 h-4" />
              </a>
            </div>

            <div className="group border border-gray-200 rounded-lg p-8 hover:border-black transition-all">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="BarChart3" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Data аналитика</h3>
              <p className="text-gray-600 mb-6">
                Внедрение BI-систем, ReData, проектирование DWH и ETL, прогнозирование с помощью ML-моделей
              </p>
              <a href="https://awg.ru/services/" className="text-black font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all">
                Подробнее
                <Icon name="ArrowRight" className="w-4 h-4" />
              </a>
            </div>

            <div className="group border border-gray-200 rounded-lg p-8 hover:border-black transition-all">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Headphones" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Сопровождение</h3>
              <p className="text-gray-600 mb-6">
                Техническая поддержка по SLA, настройка QA и AQA, поддержка ИТ-инфраструктуры 24/7
              </p>
              <a href="https://awg.ru/services/" className="text-black font-semibold inline-flex items-center gap-2 hover:gap-4 transition-all">
                Подробнее
                <Icon name="ArrowRight" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Достижения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="text-5xl font-bold mb-2">60+</div>
              <div className="text-gray-600">услуг в портфеле</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">400+</div>
              <div className="text-gray-600">реализованных проектов</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">22 000+</div>
              <div className="text-gray-600">ИТ-специалистов в партнерской сети Talent Nations</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10 лет</div>
              <div className="text-gray-600">опыта в цифровизации промышленности, ритейла и финансов</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Награды и признание</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Award" className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <div className="font-semibold text-lg mb-2">Рейтинг Рунета</div>
                <div className="text-gray-600">Четырехкратный лауреат: 3 золота, 2 серебра</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="TrendingUp" className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-lg mb-2">CNews</div>
                <div className="text-gray-600">35 место среди крупнейших поставщиков ИТ в розницу</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="BadgeCheck" className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-lg mb-2">Аккредитации</div>
                <div className="text-gray-600">Минкомсвязи РФ, Резидент Сколково</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Users" className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="font-semibold text-lg mb-2">ТОП-100 ИТ-работодателей</div>
                <div className="text-gray-600">Рейтинг hh.ru и ТОП-15 Хабр Карьера</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Building2" className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <div className="font-semibold text-lg mb-2">Ассоциация менеджеров России</div>
                <div className="text-gray-600">Официальный член ассоциации</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="GraduationCap" className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="font-semibold text-lg mb-2">Авторы ИТ-курсов</div>
                <div className="text-gray-600">Образовательная платформа Skillbox</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Клиенты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6">Ритейл</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="w-4 h-4 flex-shrink-0" />
                  <span>SimpleWine</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="w-4 h-4 flex-shrink-0" />
                  <span>ВинЛаб</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="w-4 h-4 flex-shrink-0" />
                  <span>Askona</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="w-4 h-4 flex-shrink-0" />
                  <span>Gloria Jeans</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="w-4 h-4 flex-shrink-0" />
                  <span>Hoff</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6">Промышленность</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="w-4 h-4 flex-shrink-0" />
                  <span>Леруа Мерлен</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="w-4 h-4 flex-shrink-0" />
                  <span>Сколково</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold mb-6">Финансы</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="w-4 h-4 flex-shrink-0" />
                  <span>Крупные финансовые институты</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="w-4 h-4 flex-shrink-0" />
                  <span>Банковский сектор</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black text-white p-12 md:p-16 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Миссия AWG</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Помогать клиентам выстраивать и реализовывать ИТ и бизнес-стратегии, 
              используя передовые технологии, лучшие методики и многолетнюю отраслевую 
              экспертизу для достижения долгосрочных целей развития.
            </p>
            <Link to="/about">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg">
                Узнать больше о компании
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Готовы к цифровой трансформации?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Обсудим ваш проект и предложим оптимальное решение
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg">
                Обсудить проект
              </Button>
            </Link>
            <a href="tel:+74952780708">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                +7 495 278-07-08
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
