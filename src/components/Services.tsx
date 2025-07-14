import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: 'ShoppingCart',
      title: 'Системы заказов и согласований',
      description: 'Автоматизация процессов заказов с многоуровневыми согласованиями и бюджетным контролем',
      features: [
        'Корзина с учетом сложных условий',
        'Многоуровневые процессы согласования',
        'Контроль бюджета и лимитов',
        'Уведомления и отчеты'
      ]
    },
    {
      icon: 'Users',
      title: 'Личные кабинеты партнеров',
      description: 'Персонализированные решения для дилеров, партнеров и корпоративных клиентов',
      features: [
        'Индивидуальные цены и условия',
        'История заказов и документооборот',
        'Аналитика и отчеты',
        'Система лояльности и бонусов'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-awg-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-awg-dark mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр решений для автоматизации B2B процессов 
              в производственных и промышленных компаниях
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-awg-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={service.icon as any} className="w-6 h-6 text-awg-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-awg-dark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <Icon name="Check" className="w-4 h-4 text-awg-blue mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="border-awg-blue text-awg-blue hover:bg-awg-blue hover:text-white"
                >
                  Узнать подробнее
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={scrollToContact}
              className="bg-awg-blue hover:bg-awg-blue/90 text-white px-8 py-3 text-lg"
            >
              Обсудить проект
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;