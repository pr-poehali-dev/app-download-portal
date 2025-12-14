import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();
  const heroSection = useScrollAnimation(0.1);
  const downloadSection = useScrollAnimation(0.1);
  const featuresSection = useScrollAnimation(0.1);
  const supportSection = useScrollAnimation(0.1);

  const platforms = [
    { name: 'iOS', icon: 'Apple', color: 'from-purple-500 to-pink-500' },
    { name: 'Android', icon: 'Smartphone', color: 'from-purple-600 to-violet-600' },
    { name: 'Windows', icon: 'Monitor', color: 'from-violet-500 to-purple-500' },
    { name: 'macOS', icon: 'Laptop', color: 'from-pink-500 to-purple-600' },
  ];

  const features = [
    {
      icon: 'MessageCircle',
      title: 'Текстовые сообщения',
      description: 'Обменивайтесь сообщениями мгновенно'
    },
    {
      icon: 'Mic',
      title: 'Голосовые сообщения',
      description: 'Записывайте и отправляйте голос'
    },
    {
      icon: 'Phone',
      title: 'Голосовые звонки',
      description: 'Звоните друзьям бесплатно'
    },
    {
      icon: 'Video',
      title: 'Видеозвонки',
      description: 'Видеосвязь в HD качестве'
    },
    {
      icon: 'Users',
      title: 'Группы и каналы',
      description: 'Создавайте сообщества'
    },
    {
      icon: 'Search',
      title: 'Поиск по номеру',
      description: 'Находите друзей легко'
    },
  ];

  const faqItems = [
    {
      question: 'Как зарегистрироваться в Макс?',
      answer: 'Нажмите "Открыть веб-версию" и введите свой номер телефона. Мы отправим код подтверждения для входа.'
    },
    {
      question: 'Бесплатны ли звонки и видеозвонки?',
      answer: 'Да! Все звонки через интернет абсолютно бесплатны для всех пользователей Макс.'
    },
    {
      question: 'Можно ли создавать группы?',
      answer: 'Конечно! Создавайте группы до 10 000 участников и управляйте ими.'
    },
    {
      question: 'Как найти друзей в мессенджере?',
      answer: 'Используйте поиск по номеру телефона. Если у вашего друга есть аккаунт Макс, вы сразу сможете начать общение.'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-purple-100 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-purple flex items-center justify-center">
              <Icon name="MessageSquare" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-gradient">Макс</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#download" className="text-foreground hover:text-primary transition-colors">Скачивание</a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Возможности</a>
            <a href="#support" className="text-foreground hover:text-primary transition-colors">Поддержка</a>
          </div>
          <Button 
            className="gradient-purple border-0 hover:opacity-90 transition-opacity"
            onClick={() => navigate('/auth')}
          >
            <Icon name="LogIn" size={18} className="mr-2" />
            Войти
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div ref={heroSection.elementRef} className="container mx-auto text-center">
          <Badge className={`mb-6 gradient-purple-soft border-0 text-purple-900 px-4 py-2 text-sm transition-all duration-700 ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Icon name="Sparkles" size={14} className="mr-2" />
            Новый мессенджер для всех
          </Badge>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-700 delay-100 ${heroSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Общайся с друзьями<br />
            <span className="text-gradient">в Макс Мессенджере</span>
          </h1>
          <p className={`text-xl text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${heroSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Текстовые и голосовые сообщения, звонки, видеозвонки, группы. 
            Все в одном современном мессенджере с быстрой синхронизацией.
          </p>
          <div className={`flex flex-wrap gap-4 justify-center transition-all duration-700 delay-300 ${heroSection.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <Button 
              size="lg" 
              className="gradient-purple border-0 hover:opacity-90 transition-opacity text-lg px-8"
              onClick={() => navigate('/messenger')}
            >
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Открыть веб-версию
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-purple-50 text-lg px-8">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать приложение
            </Button>
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-4 bg-white">
        <div ref={downloadSection.elementRef} className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${downloadSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Доступно на <span className="text-gradient">всех платформах</span>
            </h2>
            <p className={`text-xl text-muted-foreground transition-all duration-700 delay-100 ${downloadSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Скачайте мессенджер и общайтесь на любом устройстве
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
                  <CardDescription>Версия 1.0.0</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full gradient-purple border-0 hover:opacity-90">
                    <Icon name="Download" size={18} className="mr-2" />
                    Скачать
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    Размер: ~35 МБ
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div ref={featuresSection.elementRef} className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${featuresSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Все возможности <span className="text-gradient">мессенджера</span>
            </h2>
            <p className={`text-xl text-muted-foreground transition-all duration-700 delay-100 ${featuresSection.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Полный набор функций для комфортного общения
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-primary transition-all hover:shadow-lg duration-300"
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                  opacity: featuresSection.isVisible ? 1 : 0,
                  transform: featuresSection.isVisible ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl gradient-purple-soft flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={32} className="text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="gradient-purple border-0 hover:opacity-90 text-lg px-8"
              onClick={() => navigate('/messenger')}
            >
              <Icon name="ArrowRight" size={20} className="mr-2" />
              Попробовать сейчас
            </Button>
          </div>
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
              <Icon name="MessageSquare" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold">Макс</span>
          </div>
          <p className="text-purple-200 mb-6">
            Современный мессенджер для всех
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
            © 2024 Макс Мессенджер. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
