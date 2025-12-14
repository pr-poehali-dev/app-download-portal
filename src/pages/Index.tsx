import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';

export default function Index() {
  const [activeDemo, setActiveDemo] = useState(false);
  const heroSection = useScrollAnimation(0.1);
  const downloadSection = useScrollAnimation(0.1);
  const demoSection = useScrollAnimation(0.1);
  const supportSection = useScrollAnimation(0.1);

  const platforms = [
    { name: 'iOS', icon: 'Apple', color: 'from-purple-500 to-pink-500', available: true },
    { name: 'Android', icon: 'Smartphone', color: 'from-purple-600 to-violet-600', available: true },
    { name: 'Windows', icon: 'Monitor', color: 'from-violet-500 to-purple-500', available: true },
    { name: 'macOS', icon: 'Laptop', color: 'from-pink-500 to-purple-600', available: true },
  ];

  const features = [
    {
      icon: 'Bell',
      title: 'Умные уведомления',
      description: 'Получайте важные напоминания в нужное время'
    },
    {
      icon: 'Calendar',
      title: 'Гибкое планирование',
      description: 'Настройте расписание под свои потребности'
    },
    {
      icon: 'Zap',
      title: 'Мгновенная синхронизация',
      description: 'Все устройства всегда в актуальном состоянии'
    },
    {
      icon: 'Shield',
      title: 'Безопасность данных',
      description: 'Ваша информация под надежной защитой'
    },
  ];

  const faqItems = [
    {
      question: 'Как установить приложение Макс?',
      answer: 'Выберите вашу платформу в разделе "Скачивание" и следуйте инструкциям установщика. Процесс занимает всего пару минут.'
    },
    {
      question: 'Поддерживается ли синхронизация между устройствами?',
      answer: 'Да! Все ваши уведомления и настройки автоматически синхронизируются между всеми вашими устройствами в реальном времени.'
    },
    {
      question: 'Есть ли бесплатная версия?',
      answer: 'Приложение Макс полностью бесплатно для базовых функций. Премиум-функции доступны по подписке.'
    },
    {
      question: 'Как связаться с поддержкой?',
      answer: 'Напишите нам на support@max-app.com или используйте форму обратной связи в разделе "Поддержка".'
    },
  ];

  const handleDownload = (platform: string) => {
    toast.success(`Начинается загрузка для ${platform}`, {
      description: 'Файл скоро появится в папке загрузок',
    });
  };

  const triggerNotification = () => {
    setActiveDemo(true);
    toast('📅 Напоминание: Встреча через 15 минут', {
      description: 'Конференц-зал 2A, презентация проекта',
      action: {
        label: 'Открыть',
        onClick: () => console.log('Notification opened'),
      },
    });
    setTimeout(() => setActiveDemo(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-purple-100 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-purple flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-gradient">Макс</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#download" className="text-foreground hover:text-primary transition-colors">Скачивание</a>
            <a href="#demo" className="text-foreground hover:text-primary transition-colors">Веб-версия</a>
            <a href="#support" className="text-foreground hover:text-primary transition-colors">Поддержка</a>
          </div>
          <Button className="gradient-purple border-0 hover:opacity-90 transition-opacity">
            <Icon name="Download" size={18} className="mr-2" />
            Скачать
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div ref={heroSection.elementRef} className="container mx-auto text-center">
          <Badge className={`mb-6 gradient-purple-soft border-0 text-purple-900 px-4 py-2 text-sm transition-all duration-700 ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Icon name="Sparkles" size={14} className="mr-2" />
            Новая версия 3.0 уже доступна
          </Badge>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-700 delay-100 ${heroSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Умные уведомления<br />
            <span className="text-gradient">для каждого устройства</span>
          </h1>
          <p className={`text-xl text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Макс — современное приложение для управления уведомлениями и напоминаниями.
            Работает на всех ваших устройствах с мгновенной синхронизацией.
          </p>
          <div className={`flex flex-wrap gap-4 justify-center transition-all duration-700 delay-300 ${heroSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <Button size="lg" className="gradient-purple border-0 hover:opacity-90 transition-opacity text-lg px-8">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-purple-50 text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Попробовать онлайн
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-700`}
                style={{ 
                  transitionDelay: `${400 + index * 100}ms`,
                  opacity: heroSection.isVisible ? 1 : 0,
                  transform: heroSection.isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-purple-soft flex items-center justify-center">
                  <Icon name={feature.icon} size={32} className="text-purple-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-4 bg-white">
        <div ref={downloadSection.elementRef} className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Доступно на <span className="text-gradient">всех платформах</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Выберите вашу операционную систему и начните пользоваться прямо сейчас
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                  opacity: downloadSection.isVisible ? 1 : 0,
                  transform: downloadSection.isVisible ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-4`}>
                    <Icon name={platform.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{platform.name}</CardTitle>
                  <CardDescription>Версия 3.0.1</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full gradient-purple border-0 hover:opacity-90" 
                    onClick={() => handleDownload(platform.name)}
                  >
                    <Icon name="Download" size={18} className="mr-2" />
                    Скачать
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    Размер: ~45 МБ
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div ref={demoSection.elementRef} className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${demoSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Попробуйте <span className="text-gradient">веб-версию</span>
            </h2>
            <p className={`text-xl text-muted-foreground transition-all duration-700 delay-100 ${demoSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Протестируйте систему уведомлений прямо в браузере
            </p>
          </div>
          
          <Card className={`border-2 shadow-2xl transition-all duration-700 delay-200 ${demoSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <CardHeader className="gradient-purple-soft">
              <CardTitle className="text-white text-2xl flex items-center gap-2">
                <Icon name="Globe" size={28} />
                Демо-версия приложения Макс
              </CardTitle>
              <CardDescription className="text-purple-100">
                Интерактивная демонстрация функций уведомлений
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 mb-6 min-h-[200px] flex items-center justify-center">
                {activeDemo ? (
                  <div className="animate-scale-in bg-white rounded-lg shadow-xl p-6 max-w-md">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full gradient-purple flex items-center justify-center flex-shrink-0">
                        <Icon name="Bell" className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Напоминание: Встреча через 15 минут</h3>
                        <p className="text-sm text-muted-foreground mb-3">Конференц-зал 2A, презентация проекта</p>
                        <div className="flex gap-2">
                          <Button size="sm" className="gradient-purple border-0">Открыть</Button>
                          <Button size="sm" variant="outline">Отложить</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <Icon name="BellRing" size={64} className="text-purple-400 mx-auto mb-4" />
                    <p className="text-muted-foreground">Нажмите кнопку ниже, чтобы увидеть уведомление</p>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col gap-3">
                <Button 
                  size="lg" 
                  className="gradient-purple border-0 hover:opacity-90 w-full"
                  onClick={triggerNotification}
                  disabled={activeDemo}
                >
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Показать демо-уведомление
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Полная версия доступна в приложении
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="support" className="py-20 px-4 bg-white">
        <div ref={supportSection.elementRef} className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${supportSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Поддержка и <span className="text-gradient">помощь</span>
            </h2>
            <p className={`text-xl text-muted-foreground transition-all duration-700 delay-100 ${supportSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Ответы на частые вопросы и контакты службы поддержки
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card 
              className="text-center hover:shadow-lg transition-all duration-700 delay-200"
              style={{
                opacity: supportSection.isVisible ? 1 : 0,
                transform: supportSection.isVisible ? 'translateX(0)' : 'translateX(-30px)'
              }}
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-purple flex items-center justify-center mb-4">
                  <Icon name="Mail" size={28} className="text-white" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>support@max-app.com</CardDescription>
              </CardHeader>
            </Card>
            
            <Card 
              className="text-center hover:shadow-lg transition-all duration-700 delay-300"
              style={{
                opacity: supportSection.isVisible ? 1 : 0,
                transform: supportSection.isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-purple flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" size={28} className="text-white" />
                </div>
                <CardTitle>Чат</CardTitle>
                <CardDescription>Онлайн 24/7</CardDescription>
              </CardHeader>
            </Card>
            
            <Card 
              className="text-center hover:shadow-lg transition-all duration-700 delay-400"
              style={{
                opacity: supportSection.isVisible ? 1 : 0,
                transform: supportSection.isVisible ? 'translateX(0)' : 'translateX(30px)'
              }}
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-purple flex items-center justify-center mb-4">
                  <Icon name="Phone" size={28} className="text-white" />
                </div>
                <CardTitle>Телефон</CardTitle>
                <CardDescription>+7 (800) 555-35-35</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card 
            className="transition-all duration-700 delay-500"
            style={{
              opacity: supportSection.isVisible ? 1 : 0,
              transform: supportSection.isVisible ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            <CardHeader>
              <CardTitle className="text-2xl">Часто задаваемые вопросы</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold">Макс</span>
          </div>
          <p className="text-purple-200 mb-6">
            Умные уведомления для каждого устройства
          </p>
          <div className="flex gap-4 justify-center mb-6">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="Instagram" size={20} />
            </Button>
          </div>
          <p className="text-sm text-purple-300">
            © 2024 Макс. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}