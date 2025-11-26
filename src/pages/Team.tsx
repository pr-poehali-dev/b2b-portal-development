import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Team = () => {
  const team = [
    {
      name: 'Евгений Скориков',
      role: 'Team Lead анализа',
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
      ]
    },
    {
      name: 'Елена Соколова',
      role: 'Руководитель проектов',
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
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-bold mb-12">Команда</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-16">
            300+ сертифицированных ИТ-специалистов. Команда профессионалов с многолетним 
            опытом в реализации масштабных ИТ-проектов для крупнейших компаний России.
          </p>
          
          <div className="space-y-16">
            {team.map((member, index) => (
              <div key={index} className="border-l-4 border-black pl-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                  <div className="text-xl text-gray-600">{member.role}</div>
                </div>
                
                {member.specialization && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Специализация</h3>
                    <ul className="space-y-2">
                      {member.specialization.map((item, i) => (
                        <li key={i} className="text-gray-600">• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {member.experience && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Опыт</h3>
                    <ul className="space-y-2">
                      {member.experience.map((item, i) => (
                        <li key={i} className="text-gray-600">• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {member.projects && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Проекты</h3>
                    <div className="flex gap-2 flex-wrap">
                      {member.projects.map((project, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-sm rounded">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {member.skills && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Навыки</h3>
                    <ul className="space-y-2">
                      {member.skills.map((item, i) => (
                        <li key={i} className="text-gray-600">• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">300+</div>
              <div className="text-gray-600">Сертифицированных специалистов</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">22 000+</div>
              <div className="text-gray-600">ИТ-специалистов в партнерской сети</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-4">ТОП-100</div>
              <div className="text-gray-600">Лучших ИТ-работодателей по hh.ru</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
