import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  avatar: string;
  isGroup?: boolean;
}

interface Message {
  id: string;
  text: string;
  time: string;
  isMine: boolean;
  isVoice?: boolean;
  voiceDuration?: string;
}

export default function Messenger() {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [messageText, setMessageText] = useState('');
  const [searchPhone, setSearchPhone] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const [chats] = useState<Chat[]>([
    {
      id: '1',
      name: 'Анна Смирнова',
      lastMessage: 'Привет! Как дела?',
      time: '14:32',
      unread: 2,
      online: true,
      avatar: 'АС'
    },
    {
      id: '2',
      name: 'Иван Петров',
      lastMessage: 'Созвонимся вечером?',
      time: '13:15',
      unread: 0,
      online: false,
      avatar: 'ИП'
    },
    {
      id: '3',
      name: 'Рабочая группа',
      lastMessage: 'Михаил: Отчёт готов',
      time: '12:00',
      unread: 5,
      online: true,
      avatar: 'РГ',
      isGroup: true
    },
  ]);

  const [messages] = useState<Message[]>([
    { id: '1', text: 'Привет! Как твои дела?', time: '14:25', isMine: false },
    { id: '2', text: 'Привет! Всё отлично, спасибо 😊', time: '14:27', isMine: true },
    { id: '3', text: 'Можем созвониться?', time: '14:30', isMine: false },
    { id: '4', text: 'Голосовое сообщение', time: '14:31', isMine: true, isVoice: true, voiceDuration: '0:12' },
    { id: '5', text: 'Супер! Звоню через 5 минут', time: '14:32', isMine: false },
  ]);

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    toast.success('Сообщение отправлено');
    setMessageText('');
  };

  const handleVoiceRecord = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      toast.success('Запись голосового сообщения...');
      setTimeout(() => {
        setIsRecording(false);
        toast.success('Голосовое сообщение отправлено');
      }, 2000);
    }
  };

  const handleCall = (isVideo: boolean) => {
    toast.success(isVideo ? 'Начинаем видеозвонок...' : 'Начинаем звонок...');
  };

  const handleSearchUser = () => {
    if (searchPhone.length < 10) {
      toast.error('Введите корректный номер');
      return;
    }
    toast.success('Пользователь найден!', {
      description: 'Теперь вы можете начать чат'
    });
  };

  return (
    <div className="h-screen flex bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="w-full md:w-96 border-r border-purple-100 bg-white flex flex-col">
        <div className="p-4 border-b border-purple-100 gradient-purple-soft">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-purple flex items-center justify-center">
                <Icon name="MessageSquare" className="text-white" size={24} />
              </div>
              <h1 className="text-xl font-bold text-purple-900">Макс</h1>
            </div>
            
            <div className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="icon" variant="ghost" className="text-purple-700 hover:bg-purple-200">
                    <Icon name="UserPlus" size={20} />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Найти пользователя</DialogTitle>
                    <DialogDescription>
                      Введите номер телефона для поиска
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="searchPhone">Номер телефона</Label>
                      <Input
                        id="searchPhone"
                        type="tel"
                        placeholder="+7 (900) 123-45-67"
                        value={searchPhone}
                        onChange={(e) => setSearchPhone(e.target.value.replace(/\D/g, ''))}
                      />
                    </div>
                    <Button 
                      className="w-full gradient-purple border-0"
                      onClick={handleSearchUser}
                    >
                      <Icon name="Search" size={18} className="mr-2" />
                      Найти
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="icon" variant="ghost" className="text-purple-700 hover:bg-purple-200">
                    <Icon name="Users" size={20} />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Создать группу</DialogTitle>
                    <DialogDescription>
                      Введите название группы
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="groupName">Название группы</Label>
                      <Input
                        id="groupName"
                        placeholder="Название группы"
                      />
                    </div>
                    <Button className="w-full gradient-purple border-0">
                      <Icon name="Plus" size={18} className="mr-2" />
                      Создать группу
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="relative">
            <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" size={18} />
            <Input
              placeholder="Поиск чатов..."
              className="pl-10 bg-white border-purple-200"
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2">
            {chats.map((chat) => (
              <Card
                key={chat.id}
                className={`p-3 mb-2 cursor-pointer transition-all hover:shadow-md border-2 ${
                  selectedChat?.id === chat.id ? 'border-primary bg-purple-50' : 'border-transparent'
                }`}
                onClick={() => setSelectedChat(chat)}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="gradient-purple text-white font-semibold">
                        {chat.avatar}
                      </AvatarFallback>
                    </Avatar>
                    {chat.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-sm flex items-center gap-1">
                        {chat.name}
                        {chat.isGroup && <Icon name="Users" size={14} className="text-purple-500" />}
                      </h3>
                      <span className="text-xs text-muted-foreground">{chat.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                      {chat.unread > 0 && (
                        <Badge className="gradient-purple border-0 text-white ml-2">{chat.unread}</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="flex-1 flex flex-col bg-white">
        {selectedChat ? (
          <>
            <div className="p-4 border-b border-purple-100 gradient-purple-soft">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="gradient-purple text-white font-semibold">
                      {selectedChat.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-bold text-purple-900">{selectedChat.name}</h2>
                    <p className="text-xs text-purple-700">
                      {selectedChat.online ? 'онлайн' : 'был(а) недавно'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="icon" 
                    variant="ghost"
                    className="text-purple-700 hover:bg-purple-200"
                    onClick={() => handleCall(false)}
                  >
                    <Icon name="Phone" size={20} />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="ghost"
                    className="text-purple-700 hover:bg-purple-200"
                    onClick={() => handleCall(true)}
                  >
                    <Icon name="Video" size={20} />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-purple-700 hover:bg-purple-200">
                    <Icon name="MoreVertical" size={20} />
                  </Button>
                </div>
              </div>
            </div>

            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl p-3 ${
                        msg.isMine
                          ? 'gradient-purple text-white'
                          : 'bg-purple-100 text-purple-900'
                      }`}
                    >
                      {msg.isVoice ? (
                        <div className="flex items-center gap-2">
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-inherit hover:bg-white/20">
                            <Icon name="Play" size={16} />
                          </Button>
                          <div className="flex-1 h-1 bg-white/30 rounded-full">
                            <div className="h-full w-1/3 bg-white rounded-full" />
                          </div>
                          <span className="text-xs">{msg.voiceDuration}</span>
                        </div>
                      ) : (
                        <p className="text-sm">{msg.text}</p>
                      )}
                      <span className={`text-xs ${msg.isMine ? 'text-purple-200' : 'text-purple-600'} mt-1 block`}>
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 border-t border-purple-100 bg-purple-50">
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost" className="text-purple-600">
                  <Icon name="Plus" size={20} />
                </Button>
                
                <Input
                  placeholder="Написать сообщение..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 border-purple-200"
                />

                {messageText.trim() ? (
                  <Button 
                    size="icon"
                    className="gradient-purple border-0"
                    onClick={handleSendMessage}
                  >
                    <Icon name="Send" size={20} />
                  </Button>
                ) : (
                  <Button 
                    size="icon"
                    className={isRecording ? 'bg-red-500 hover:bg-red-600' : 'gradient-purple border-0'}
                    onClick={handleVoiceRecord}
                  >
                    <Icon name="Mic" size={20} />
                  </Button>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-3xl gradient-purple-soft flex items-center justify-center">
                <Icon name="MessageSquare" size={48} className="text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gradient">Выберите чат</h2>
              <p className="text-muted-foreground">
                Откройте существующий чат или найдите нового собеседника
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
