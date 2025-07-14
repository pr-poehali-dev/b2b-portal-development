import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Заявка отправлена!',
        description: 'Мы свяжемся с вами в ближайшее время.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-awg-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-awg-dark mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами 
              для консультации по разработке B2B портала
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-awg-dark mb-6">
                Получить консультацию
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Имя *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Компания
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Название компании"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Сообщение *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите о вашем проекте: какие задачи нужно решить, какие системы используете..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-awg-blue hover:bg-awg-blue/90 text-white py-3"
                >
                  {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
                </Button>
              </form>
            </div>

            <div className="bg-awg-gray p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-awg-dark mb-6">
                Контактная информация
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-awg-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="w-5 h-5 text-awg-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Телефон</h4>
                    <p className="text-gray-300">+7 (495) 123-45-67</p>
                    <p className="text-gray-300">+7 (800) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-awg-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="w-5 h-5 text-awg-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">info@b2bportals.ru</p>
                    <p className="text-gray-300">sales@b2bportals.ru</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-awg-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="w-5 h-5 text-awg-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Адрес</h4>
                    <p className="text-gray-300">г. Москва, ул. Тверская, 1</p>
                    <p className="text-gray-300">БЦ "Технопарк", офис 501</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-awg-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="w-5 h-5 text-awg-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Время работы</h4>
                    <p className="text-gray-300">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-gray-300">Техподдержка: 24/7</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-white mb-4">Следите за нами</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-awg-blue/10 rounded-lg flex items-center justify-center hover:bg-awg-blue/20 transition-colors">
                    <Icon name="MessageCircle" className="w-5 h-5 text-awg-blue" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-awg-blue/10 rounded-lg flex items-center justify-center hover:bg-awg-blue/20 transition-colors">
                    <Icon name="Linkedin" className="w-5 h-5 text-awg-blue" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-awg-blue/10 rounded-lg flex items-center justify-center hover:bg-awg-blue/20 transition-colors">
                    <Icon name="Github" className="w-5 h-5 text-awg-blue" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;