import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-awg-dark mb-4">
              О нашей компании
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы специализируемся на создании высокотехнологичных B2B решений 
              для промышленных предприятий и производственных компаний
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-awg-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Trophy" className="w-5 h-5 text-awg-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-awg-dark mb-2">
                      Более 8 лет опыта
                    </h3>
                    <p className="text-gray-600">
                      Разработали свыше 150 B2B порталов для крупных производственных предприятий
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-awg-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Cog" className="w-5 h-5 text-awg-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-awg-dark mb-2">
                      Комплексные решения
                    </h3>
                    <p className="text-gray-600">
                      От анализа бизнес-процессов до внедрения и технической поддержки
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-awg-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Shield" className="w-5 h-5 text-awg-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-awg-dark mb-2">
                      Безопасность данных
                    </h3>
                    <p className="text-gray-600">
                      Соответствие стандартам безопасности и требованиям корпоративной среды
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-awg-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-awg-dark mb-6">
                Наша экспертиза
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-awg-blue mb-2">150+</div>
                  <div className="text-sm text-gray-600">Проектов</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-awg-blue mb-2">50+</div>
                  <div className="text-sm text-gray-600">Клиентов</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-awg-blue mb-2">99%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-awg-blue mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;