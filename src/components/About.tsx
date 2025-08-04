import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <section id="about" className="py-24 bg-awg-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-awg-blue/10 text-awg-blue rounded-full text-sm font-medium mb-6">
                ИТ-интегратор
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-awg-dark mb-6 leading-tight">
                Ведущий разработчик{' '}
                <span className="text-awg-blue">B2B решений</span>
              </h2>
              <p className="text-lg text-awg-muted mb-8 leading-relaxed">
                Мы специализируемся на создании высокотехнологичных B2B решений 
                для промышленных предприятий и производственных компаний. 
                Наша команда объединяет глубокую экспертизу в области разработки 
                с пониманием специфики производственных процессов.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-awg-blue">150+</div>
                  <div className="text-sm text-awg-muted">Проектов</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-awg-blue">8+</div>
                  <div className="text-sm text-awg-muted">Лет опыта</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-awg-blue">50+</div>
                  <div className="text-sm text-awg-muted">Клиентов</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-awg-dark mb-6">Наши компетенции</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Разработка порталов', progress: 95 },
                    { name: 'Интеграция систем', progress: 90 },
                    { name: 'UX/UI дизайн', progress: 85 },
                    { name: 'Техподдержка', progress: 98 }
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-awg-text">{skill.name}</span>
                        <span className="text-sm text-awg-muted">{skill.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-awg-blue h-2 rounded-full transition-all duration-300"
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          
          {/* Advantages section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-awg-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Trophy" className="w-8 h-8 text-awg-blue" />
              </div>
              <h3 className="text-xl font-bold text-awg-dark mb-4">
                Более 8 лет опыта
              </h3>
              <p className="text-awg-muted leading-relaxed">
                Разработали свыше 150 B2B порталов для крупных производственных предприятий
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-awg-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Cog" className="w-8 h-8 text-awg-blue" />
              </div>
              <h3 className="text-xl font-bold text-awg-dark mb-4">
                Комплексные решения
              </h3>
              <p className="text-awg-muted leading-relaxed">
                От анализа бизнес-процессов до внедрения и технической поддержки
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-awg-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon name="Shield" className="w-8 h-8 text-awg-blue" />
              </div>
              <h3 className="text-xl font-bold text-awg-dark mb-4">
                Безопасность данных
              </h3>
              <p className="text-awg-muted leading-relaxed">
                Соответствие стандартам безопасности и требованиям корпоративной среды
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;