import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-7xl font-bold mb-8 leading-tight">
              next level IT
            </h1>
            <p className="text-2xl text-gray-600 max-w-2xl">
              ИТ-интегратор. С 2015 года проектируем, разрабатываем и внедряем комплексные 
              ИТ-решения для ускорения цифровой трансформации и устойчивого роста бизнеса.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="text-5xl font-bold mb-2">60+</div>
              <div className="text-gray-600">услуг</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">400+</div>
              <div className="text-gray-600">реализованных проектов</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">22 000+</div>
              <div className="text-gray-600">ИТ-специалистов в партнерской сети</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10 лет</div>
              <div className="text-gray-600">в цифровизации промышленности, ритейла и финансов</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Клиенты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Ритейл</h3>
              <div className="space-y-2 text-gray-600">
                <div>SimpleWine</div>
                <div>ВинЛаб</div>
                <div>Askona</div>
                <div>Gloria Jeans</div>
                <div>Hoff</div>
              </div>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Промышленность и производство</h3>
              <div className="space-y-2 text-gray-600">
                <div>Леруа Мерлен</div>
                <div>Сколково</div>
              </div>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Финансы</h3>
              <div className="space-y-2 text-gray-600">
                <div>Финансовые институты</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Достижения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Award" className="w-6 h-6 mt-1 text-yellow-600" />
                <div>
                  <div className="font-semibold mb-1">Рейтинг Рунета</div>
                  <div className="text-sm text-gray-600">Четырехкратный лауреат: 3 Золота, 2 Серебра</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="TrendingUp" className="w-6 h-6 mt-1 text-yellow-600" />
                <div>
                  <div className="font-semibold mb-1">CNews</div>
                  <div className="text-sm text-gray-600">35 место среди крупнейших поставщиков ИТ в розницу</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Star" className="w-6 h-6 mt-1 text-yellow-600" />
                <div>
                  <div className="font-semibold mb-1">Аккредитации</div>
                  <div className="text-sm text-gray-600">Минкомсвязи РФ, Резидент Сколково</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Users" className="w-6 h-6 mt-1 text-yellow-600" />
                <div>
                  <div className="font-semibold mb-1">ТОП-100 ИТ-работодателей</div>
                  <div className="text-sm text-gray-600">Рейтинг hh.ru и ТОП-15 Хабр Карьера</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Building" className="w-6 h-6 mt-1 text-yellow-600" />
                <div>
                  <div className="font-semibold mb-1">Ассоциация менеджеров России</div>
                  <div className="text-sm text-gray-600">Официальный член ассоциации</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="GraduationCap" className="w-6 h-6 mt-1 text-yellow-600" />
                <div>
                  <div className="font-semibold mb-1">Авторы ИТ-курсов</div>
                  <div className="text-sm text-gray-600">Образовательная платформа Skillbox</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Миссия</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Помогать клиентам выстраивать и реализовывать ИТ и бизнес-стратегии, 
              используя передовые технологии, лучшие методики и многолетнюю отраслевую 
              экспертизу для достижения долгосрочных целей развития.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Мы помогаем бизнесу выйти на новый уровень с помощью ИТ
          </h2>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg">
              Обсудить проект
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
