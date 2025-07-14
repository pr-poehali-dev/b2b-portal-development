import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Portfolio = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: 'Система заказов для производства',
      description: 'Комплексное решение для автоматизации процессов заказов с многоуровневыми согласованиями',
      image: '/img/44146ae9-6074-4855-bb88-653dd4760e70.jpg',
      features: [
        'Автоматизация процессов заказов',
        'Многоуровневые согласования',
        'Контроль бюджета и лимитов',
        'Уведомления и отчеты'
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redis']
    },
    {
      title: 'Дилерский портал',
      description: 'Персонализированная платформа для дилеров с индивидуальными условиями и аналитикой',
      image: '/img/8b74a0e1-7cc4-47e2-bec2-bb2885f72401.jpg',
      features: [
        'Индивидуальные цены для дилеров',
        'Система лояльности',
        'Детальная аналитика продаж',
        'Мобильное приложение'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'GraphQL']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-awg-dark mb-4">
              Портфолио проектов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры успешно реализованных B2B порталов для промышленных предприятий
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-awg-gray rounded-lg overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <h3 className="text-2xl font-bold text-awg-dark mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-awg-dark mb-3">
                        Ключевые особенности:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <Icon name="Check" className="w-4 h-4 text-awg-blue mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-awg-dark mb-3">
                        Технологии:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-awg-blue/10 text-awg-blue px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={scrollToContact}
                      className="bg-awg-blue hover:bg-awg-blue/90 text-white"
                    >
                      Обсудить похожий проект
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-awg-blue/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-awg-dark mb-4">
                Готовы обсудить ваш проект?
              </h3>
              <p className="text-gray-600 mb-6">
                Каждый проект уникален. Расскажите о ваших задачах, 
                и мы предложим оптимальное решение.
              </p>
              <Button
                onClick={scrollToContact}
                className="bg-awg-blue hover:bg-awg-blue/90 text-white px-8 py-3 text-lg"
              >
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;