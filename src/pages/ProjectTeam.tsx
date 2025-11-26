import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const ProjectTeam = () => {
  const team = [
    {
      name: 'Евгений Скориков',
      role: 'Team Lead анализа',
      photo: '👨‍💼',
      gradient: 'from-blue-500 to-cyan-500',
      specialization: [
        'Проектирование интеграционной и функциональной архитектуры и создание плана работ по проектам',
        'Контроль качества технических заданий аналитиков',
        'Номинант премии IT Лидер в номинации «Торговля»',
        'Выявление и анализ требований и проблем, создание модели работы ПО',
        'Автор множества статей по ИТ-тематике, спикер на профильных конференциях',
        'Автор и преподаватель курса Skillbox «ИТ аналитик для бизнеса»'
      ],
      experience: [
        'Был директором ИТ департамента развития и поддержки ecommerce и мультиканального маркетинга ГК "Спортмастер"',
        'Участвовал в проектах в роли архитектора для таких компаний, как: SimpleWine, ВинЛаб, Askona, Yves Rocher, Иль Дэ Боте, Леруа Мерлен'
      ],
      projects: ['SimpleWine b2b', 'MAAG', 'Berlin Wellness']
    },
    {
      name: 'Елена Соколова',
      role: 'Руководитель проекта',
      photo: '👩‍💼',
      gradient: 'from-purple-500 to-pink-500',
      specialization: [
        'Старший руководитель проектов: реализация E-comm-проектов (крупный ритейл, разработка, развитие и поддержка интернет-магазинов, МП)',
        'Построение сквозной аналитики, омниканальные решения, SEO-оптимизация',
        'Управление скоупом, сроками, результатами и бюджетами проектов',
        'Декомпозиция требований и постановка/приоретизация задач'
      ],
      skills: [
        'BPMN, Яндекс.Метрика, Google Analytics, ERP, Scrum, Agile Project Management',
        'Основы тайм-менеджмента, базовые знания SEO-оптимизации',
        'SWOT-анализ, PEST-Анализ, UI, UX',
        'Atlassian Jira, UML, Customer Journey Map',
        'Root cause анализ, управление командой и тимбилдинг'
      ]
    },
    {
      name: 'Диана Абдульманова',
      role: 'Системный аналитик',
      photo: '👩‍💻',
      gradient: 'from-orange-500 to-red-500',
      specialization: [
        'Сбор и формализация требований для развития системы',
        'Моделирование бизнес-процессов в различных нотациях',
        'Описание интеграционного взаимодействия между системами (API)',
        'Сопровождение и консультация на этапах разработки и тестирования',
        'Обучение стажеров, помощь в адаптации новым сотрудникам',
        'Демонстрация готового функционала'
      ],
      projects: ['Siberian Wellness', 'Gloria Jeans'],
      skills: [
        'Работа с системами управления Confluence, Jira, Miro, Notion',
        'Использование нотаций моделирования бизнес-процессов BPMN, UML',
        'Описание сервисных взаимодействий посредством API'
      ]
    },
    {
      name: 'Алексей Ровдо',
      role: 'Аналитик',
      photo: '👨‍💻',
      gradient: 'from-green-500 to-emerald-500',
      specialization: [
        'Анализ запросов и бизнес-процессов заказчиков',
        'Разработка функциональных требований, подготовка ТЗ',
        'Обследование и документирование информационных систем заказчика',
        'Постановка задач, координация разработки и тестирования',
        'Проектирование и оценка распределенных высоконагруженных архитектур систем',
        'Подготовка конкурсной документации'
      ],
      projects: ['Simplewine', 'Bianca', 'NoOne'],
      skills: [
        'E-Commerce / IoT / Smart home / CRM',
        'Business Planning / Продажа ПО / Business Consulting',
        'B2B Продажи / Start-up project',
        'Управление разработкой / Project management / ERP / MS Project'
      ]
    },
    {
      name: 'Чикнунов',
      role: 'Техлид',
      photo: '👨‍🔧',
      gradient: 'from-indigo-500 to-purple-500',
      specialization: [
        'Эффективное руководство командой разработчиков',
        'Активное внедрение и поддержание методологий Agile и Scrum',
        'Участие в управлении проектами, включая согласование технических заданий',
        'Эффективное взаимодействие с заказчиком для уточнения требований',
        'Активное участие в разработке, решение сложных технических задач',
        'Организация и проведение митапов, груминга, ретроспектив',
        'Контроль качества и CI/CD: обеспечение высокого качества кода',
        'Внедрение и поддержание CI/CD пайплайнов'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-7xl font-bold mb-8 text-gray-900">
            Команда проекта
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            Опытные специалисты с многолетним опытом реализации масштабных ИТ-проектов 
            для крупнейших компаний России
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-all">
                <div className="p-8">
                  <div className="flex items-start gap-8 mb-8">
                    <div className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-lg flex-shrink-0`}>
                      {member.photo}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-2 text-gray-900">{member.name}</h2>
                      <div className="text-xl text-gray-600 mb-4">{member.role}</div>
                      {member.projects && (
                        <div className="flex gap-2 flex-wrap">
                          {member.projects.map((project, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-700">
                              {project}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {member.specialization && (
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
                          <Icon name="Briefcase" size={20} />
                          Специализация
                        </h3>
                        <ul className="space-y-2">
                          {member.specialization.map((item, i) => (
                            <li key={i} className="text-gray-600 flex items-start gap-2 text-sm">
                              <span className="text-blue-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="space-y-6">
                      {member.experience && (
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
                            <Icon name="Award" size={20} />
                            Опыт
                          </h3>
                          <ul className="space-y-2">
                            {member.experience.map((item, i) => (
                              <li key={i} className="text-gray-600 flex items-start gap-2 text-sm">
                                <span className="text-green-500 mt-1">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {member.skills && (
                        <div>
                          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900">
                            <Icon name="Star" size={20} />
                            Навыки
                          </h3>
                          <ul className="space-y-2">
                            {member.skills.map((item, i) => (
                              <li key={i} className="text-gray-600 flex items-start gap-2 text-sm">
                                <span className="text-purple-500 mt-1">◆</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-200">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                300+
              </div>
              <div className="text-gray-600">Сертифицированных специалистов</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-200">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                22 000+
              </div>
              <div className="text-gray-600">ИТ-специалистов в партнерской сети</div>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl border-2 border-gray-200">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                ТОП-100
              </div>
              <div className="text-gray-600">Лучших ИТ-работодателей по hh.ru</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectTeam;
