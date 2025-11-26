import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-bold mb-12">Контакты</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-semibold mb-8">Свяжитесь с нами</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+74952780708" className="text-gray-600 hover:text-black">
                      +7 495 278 07 08
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@awg.ru" className="text-gray-600 hover:text-black">
                      info@awg.ru
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-gray-600">
                      Москва, Воздвиженка, 7/6с1
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-semibold mb-6">Коммерческий отдел</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold">Мария Павлова</div>
                    <div className="text-sm text-gray-600 mb-2">Коммерческий директор</div>
                    <div className="space-y-1">
                      <a href="tel:+79163038740" className="text-gray-600 hover:text-black block">
                        +7 916 303 8740
                      </a>
                      <a href="mailto:pavlova@awg.ru" className="text-gray-600 hover:text-black block">
                        pavlova@awg.ru
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Напишите нам</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Компания</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Название компании"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                    placeholder="Расскажите о вашем проекте"
                  />
                </div>
                
                <Button size="lg" className="w-full bg-black hover:bg-gray-800">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
