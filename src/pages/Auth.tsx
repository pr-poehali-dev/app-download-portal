import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function Auth() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'phone' | 'code' | 'name'>('phone');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (phone.length < 10) {
      toast.error('Введите корректный номер телефона');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('code');
      toast.success('Код отправлен на ваш номер', {
        description: 'Введите 4-значный код из СМС'
      });
    }, 1000);
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (code.length !== 4) {
      toast.error('Введите 4-значный код');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('name');
    }, 800);
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (name.trim().length < 2) {
      toast.error('Введите ваше имя');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('userName', name);
      localStorage.setItem('userPhone', phone);
      toast.success('Добро пожаловать в Макс!');
      navigate('/messenger');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <Card className="w-full max-w-md relative z-10 animate-scale-in border-0 shadow-2xl">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-2xl gradient-purple flex items-center justify-center animate-fade-in">
              <Icon name="MessageSquare" className="text-white" size={40} />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">
            <span className="text-gradient">Макс Мессенджер</span>
          </CardTitle>
          <CardDescription className="text-base mt-2">
            {step === 'phone' && 'Войдите или зарегистрируйтесь'}
            {step === 'code' && 'Подтверждение номера'}
            {step === 'name' && 'Создайте профиль'}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          {step === 'phone' && (
            <form onSubmit={handlePhoneSubmit} className="space-y-4 animate-fade-in">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-semibold">Номер телефона</Label>
                <div className="relative">
                  <Icon name="Phone" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (900) 123-45-67"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    className="pl-10 h-12 text-base"
                    maxLength={11}
                    autoFocus
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Мы отправим код подтверждения
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-base gradient-purple border-0 hover:opacity-90"
                disabled={isLoading || phone.length < 10}
              >
                {isLoading ? (
                  <>
                    <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Icon name="ArrowRight" className="mr-2" size={20} />
                    Продолжить
                  </>
                )}
              </Button>
            </form>
          )}

          {step === 'code' && (
            <form onSubmit={handleCodeSubmit} className="space-y-4 animate-fade-in">
              <div className="space-y-2">
                <Label htmlFor="code" className="text-base font-semibold">Код из СМС</Label>
                <div className="relative">
                  <Icon name="Lock" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    id="code"
                    type="text"
                    placeholder="1234"
                    value={code}
                    onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                    className="pl-10 h-12 text-base text-center text-2xl font-bold tracking-widest"
                    maxLength={4}
                    autoFocus
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Код отправлен на номер +{phone}
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-base gradient-purple border-0 hover:opacity-90"
                disabled={isLoading || code.length !== 4}
              >
                {isLoading ? (
                  <>
                    <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                    Проверка...
                  </>
                ) : (
                  <>
                    <Icon name="Check" className="mr-2" size={20} />
                    Подтвердить
                  </>
                )}
              </Button>

              <Button 
                type="button"
                variant="ghost"
                className="w-full"
                onClick={() => setStep('phone')}
              >
                <Icon name="ArrowLeft" className="mr-2" size={16} />
                Изменить номер
              </Button>
            </form>
          )}

          {step === 'name' && (
            <form onSubmit={handleNameSubmit} className="space-y-4 animate-fade-in">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-semibold">Ваше имя</Label>
                <div className="relative">
                  <Icon name="User" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Иван Иванов"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 h-12 text-base"
                    autoFocus
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Это имя будут видеть ваши контакты
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-base gradient-purple border-0 hover:opacity-90"
                disabled={isLoading || name.trim().length < 2}
              >
                {isLoading ? (
                  <>
                    <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                    Создание профиля...
                  </>
                ) : (
                  <>
                    <Icon name="Sparkles" className="mr-2" size={20} />
                    Начать общение
                  </>
                )}
              </Button>
            </form>
          )}
        </CardContent>

        <div className="px-6 pb-6">
          <Button 
            variant="ghost" 
            className="w-full"
            onClick={() => navigate('/')}
          >
            <Icon name="Home" className="mr-2" size={16} />
            Вернуться на главную
          </Button>
        </div>
      </Card>
    </div>
  );
}
