import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-bold mb-12">О компании</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                ИТ-интегратор. С 2015 года проектируем, разрабатываем и внедряем комплексные 
                ИТ-решения для ускорения цифровой трансформации и устойчивого роста бизнеса.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-5xl font-bold">40+</div>
                <div className="text-gray-600">компаний из рейтинга Forbes 200</div>
              </div>
              <div className="flex gap-4">
                <div className="text-5xl font-bold">1 000+</div>
                <div className="text-gray-600">специалистов из партнерской сети Talent Nations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Принципы работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <Icon name="Users" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Партнерские отношения</h3>
              <p className="text-gray-600">
                Мы говорим на одном языке с клиентами, формируем партнерские отношения, 
                чтобы помочь наладить эффективный диалог между ИТ и бизнесом.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <Icon name="TrendingUp" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Развитие ИТ-направлений</h3>
              <p className="text-gray-600">
                Мы способствуем развитию ИТ-направлений клиентов, используя многолетний 
                опыт, экспертизу и проверенные решения.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <Icon name="Settings" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Погружение в процессы</h3>
              <p className="text-gray-600">
                Мы погружаемся в процессы бизнеса, подбираем и разрабатываем наиболее 
                эффективные инструменты под индивидуальные задачи.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <Icon name="Lightbulb" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Смелые идеи</h3>
              <p className="text-gray-600">
                Мы не боимся масштабных задач, проявлять инициативу и предлагать смелые 
                идеи в рамках достижения бизнес-целей.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <Icon name="Award" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Команда профессионалов</h3>
              <p className="text-gray-600">
                Мы знаем, что наша сила в команде профессионалов. Мы вместе ставим 
                амбициозные цели и совместно их достигаем.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Ключевые компетенции</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-black pl-8">
              <h3 className="text-2xl font-semibold mb-4">Консалтинг</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ИТ-консалтинг</li>
                <li>• Продуктовый консалтинг</li>
                <li>• Цифровая трансформация</li>
                <li>• Разработка ИТ стратегий в ЕКОМ и B2B</li>
                <li>• Проектирование омниканальной архитектуры</li>
                <li>• Проектирование и построение инфраструктуры под ecom</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-black pl-8">
              <h3 className="text-2xl font-semibold mb-4">Разработка</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Разработка ПО</li>
                <li>• Проектирование и разработка B2B портала, сайта, интернет-магазина и маркетплейса</li>
                <li>• Разработка сервисов / микросервисов / Headless решений</li>
                <li>• Разработка и внедрение решений на базе ИИ</li>
                <li>• Заказная разработка от идеи до запуска</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-black pl-8">
              <h3 className="text-2xl font-semibold mb-4">Внедрение и интеграция</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ERP, CRM, CMS</li>
                <li>• Elasticsearch, PIM, DAM, CDP</li>
                <li>• MMS / MAS, WMS, OMS</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-black pl-8">
              <h3 className="text-2xl font-semibold mb-4">Сопровождение</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Техническая поддержка по SLA</li>
                <li>• Настройка/внедрение QA и AQA</li>
                <li>• Поддержка и развитие ИТ-инфраструктуры</li>
                <li>• Аутстаффинг ИТ-специалистов</li>
                <li>• Центр компетенций восстановления ИТ-инфраструктуры</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-black pl-8">
              <h3 className="text-2xl font-semibold mb-4">Аналитика</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Внедрение BI-систем</li>
                <li>• Внедрение ReData</li>
                <li>• Проектирование DWH и ETL</li>
                <li>• Прогнозирование с помощью ML-моделей</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-black pl-8">
              <h3 className="text-2xl font-semibold mb-4">Дизайн</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Проектирование и разработка UX/UI</li>
                <li>• Проектирование интерфейсов</li>
                <li>• Комплексная разработка дизайна</li>
                <li>• Брендинг</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-3xl font-light mb-8">
              "Мы начинаем с глубокого погружения в бизнес клиента и разрабатываем решения, 
              которые работают именно для него"
            </blockquote>
            <div className="text-lg text-gray-600">
              Станислав Пятецкий, CEO
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
