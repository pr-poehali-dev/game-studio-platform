import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Game {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  price: string;
  image: string;
  tags: string[];
  features: string[];
  requirements: string;
}

const Index = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [selectedStoreItem, setSelectedStoreItem] = useState<any>(null);
  const [selectedTopic, setSelectedTopic] = useState<any>(null);

  const games: Game[] = [
    {
      id: 1,
      title: 'Shadows of Silence',
      description: 'Погрузитесь в мир абсолютной тишины, где каждый звук может стать последним',
      fullDescription: 'Shadows of Silence — это психологический хоррор от первого лица, где тишина становится вашим главным врагом. Исследуйте заброшенный исследовательский комплекс, где каждый шаг может привлечь внимание существ, живущих в темноте. Используйте звуковые ловушки, двигайтесь беззвучно и решайте головоломки, чтобы раскрыть тайну эксперимента "Тихий Протокол".',
      price: '999₽',
      image: '🎮',
      tags: ['Хоррор', 'Выживание', '18+'],
      features: [
        'Уникальная система звуковой механики',
        'Нелинейный сюжет с 4 концовками',
        'Процедурно генерируемые события',
        'Реалистичная физика звука',
        'Режим хардкор без сохранений'
      ],
      requirements: 'OS: Windows 10, RAM: 8GB, GPU: GTX 1060'
    },
    {
      id: 2,
      title: 'The Last Whisper',
      description: 'Исследуйте заброшенный особняк, где шёпот мертвых — единственный компас',
      fullDescription: 'Погрузитесь в готическую атмосферу викторианского особняка Рэвенхилл. The Last Whisper сочетает элементы детективного расследования с хоррором выживания. Слушайте шёпот призраков, собирайте улики, восстанавливайте прошлое семьи и делайте выбор, который определит судьбу душ, застрявших между мирами.',
      price: '1299₽',
      image: '🏚️',
      tags: ['Психология', 'Атмосфера', '18+'],
      features: [
        'Система морального выбора',
        'Интерактивное расследование',
        'Динамическая погода и освещение',
        '12+ часов геймплея',
        'Скрытые комнаты и секреты'
      ],
      requirements: 'OS: Windows 10, RAM: 16GB, GPU: RTX 2060'
    },
    {
      id: 3,
      title: 'Blackout Protocol',
      description: 'Выживите в бункере, где свет — ваш единственный союзник против тьмы',
      price: '899₽',
      fullDescription: 'Blackout Protocol — это кооперативный хоррор-шутер на 1-4 игроков. Ваша команда застряла в подземном военном бункере после неудачного эксперимента. Управляйте ограниченными источниками света, защищайтесь от тварей из тьмы и найдите выход, пока не закончился кислород. В одиночку — это survival horror, в команде — тактический экшен.',
      image: '💀',
      tags: ['Экшн', 'Хоррор', 'Мультиплеер'],
      features: [
        'Кооператив до 4 игроков',
        'Система крафта оружия',
        'Процедурная генерация уровней',
        'Голосовой чат со спектральным эффектом',
        'PvPvE режим "Заражение"'
      ],
      requirements: 'OS: Windows 10/11, RAM: 8GB, GPU: GTX 1660'
    }
  ];

  const storeItems = [
    { 
      name: 'Season Pass 2025', 
      price: '1999₽', 
      type: 'DLC',
      description: 'Получите доступ ко всем DLC 2025 года: 3 новых кампании, эксклюзивные скины, ранний доступ к обновлениям'
    },
    { 
      name: 'Артбук "Кошмары"', 
      price: '599₽', 
      type: 'Мерч',
      description: 'Концепт-арты, эскизы монстров и закулисье разработки на 120 страницах'
    },
    { 
      name: 'Саундтрек Collection', 
      price: '399₽', 
      type: 'Музыка',
      description: '45 треков в форматах MP3 и FLAC от композитора Александра Темнова'
    },
    { 
      name: 'Коллекционное издание', 
      price: '4999₽', 
      type: 'Игра',
      description: 'Все три игры + Season Pass + артбук + саундтрек + фигурка + стальной кейс'
    }
  ];

  const forumTopics = [
    { 
      title: 'Теории о концовке Shadows of Silence', 
      replies: 247, 
      author: 'DarkSeeker',
      lastPost: '2 часа назад',
      content: 'Обсуждаем скрытую четвертую концовку. Кто-нибудь нашел все 12 записок? Похоже, они указывают на секретную комнату в лаборатории...'
    },
    { 
      title: 'Гайд по выживанию в Blackout Protocol', 
      replies: 189, 
      author: 'SurvivalPro',
      lastPost: '5 часов назад',
      content: 'Полный гайд для новичков: оптимальные билды, тактики для каждого уровня сложности, лучшие комбинации оружия. Обновлено под патч 2.3!'
    },
    { 
      title: 'Пасхалки в The Last Whisper', 
      replies: 156, 
      author: 'EasterHunter',
      lastPost: '1 день назад',
      content: 'Кто заметил портрет разработчика в библиотеке? А еще в камине можно найти отсылку к первой игре студии!'
    },
    { 
      title: 'Технические проблемы и решения', 
      replies: 94, 
      author: 'TechSupport',
      lastPost: '3 дня назад',
      content: 'Сборник решений частых проблем: FPS дропы, вылеты, проблемы со звуком. Перед созданием новой темы загляните сюда!'
    }
  ];

  const news = [
    { title: 'Анонс нового DLC для Shadows of Silence', date: '20 ноября 2024', content: 'DLC "Эхо прошлого" выйдет 15 декабря' },
    { title: 'Обновление 2.3: новые механики страха', date: '15 ноября 2024', content: 'Добавлена система динамического саундтрека' },
    { title: 'Интервью с главным дизайнером', date: '10 ноября 2024', content: 'Говорим о будущем студии и новых проектах' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-glow">DARK VOID STUDIOS</h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Игры', 'Магазин', 'Сообщество', 'О студии', 'Новости', 'Поддержка', 'Форум'].map((item) => (
                <button
                  key={item}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent" />
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 text-glow">ВОЙДИТЕ В ТЕМНОТУ</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создаем игры, которые заставят ваше сердце биться быстрее. Каждая тень скрывает историю.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="glow-red">
              <Icon name="Gamepad2" size={20} className="mr-2" />
              Наши игры
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть трейлер
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">НАШИ ИГРЫ</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {games.map((game, idx) => (
              <Card 
                key={idx} 
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:glow-red group animate-scale-in cursor-pointer" 
                style={{ animationDelay: `${idx * 100}ms` }}
                onClick={() => setSelectedGame(game)}
              >
                <CardHeader>
                  <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                    {game.image}
                  </div>
                  <CardTitle className="text-2xl">{game.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{game.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    {game.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{game.price}</span>
                  <Button className="glow-red" onClick={(e) => { e.stopPropagation(); setSelectedGame(game); }}>
                    <Icon name="Info" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="store" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="store">
                <Icon name="Store" size={16} className="mr-2" />
                Магазин
              </TabsTrigger>
              <TabsTrigger value="forum">
                <Icon name="MessageSquare" size={16} className="mr-2" />
                Форум
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="store" className="animate-fade-in">
              <h3 className="text-3xl font-bold mb-8 text-center">МАГАЗИН</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {storeItems.map((item, idx) => (
                  <Card 
                    key={idx} 
                    className="bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedStoreItem(item)}
                  >
                    <CardHeader>
                      <Badge variant="outline" className="w-fit mb-2">{item.type}</Badge>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-xl font-bold text-primary">{item.price}</span>
                      <Button size="sm" onClick={(e) => { e.stopPropagation(); setSelectedStoreItem(item); }}>
                        <Icon name="ShoppingBag" size={14} className="mr-1" />
                        Купить
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="forum" className="animate-fade-in">
              <h3 className="text-3xl font-bold mb-8 text-center">ФОРУМ СООБЩЕСТВА</h3>
              <div className="max-w-4xl mx-auto space-y-4">
                {forumTopics.map((topic, idx) => (
                  <Card 
                    key={idx} 
                    className="bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedTopic(topic)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{topic.title}</CardTitle>
                          <CardDescription>Автор: {topic.author} • {topic.lastPost}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          <Icon name="MessageCircle" size={12} className="mr-1" />
                          {topic.replies}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
                <Button className="w-full glow-red">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать новую тему
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">ПОСЛЕДНИЕ НОВОСТИ</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {news.map((item, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mb-2">
                    <Icon name="Calendar" size={14} />
                    {item.date}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">{item.content}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-xl mb-4">О студии</h4>
              <p className="text-muted-foreground text-sm">
                Dark Void Studios создает атмосферные хоррор-игры с 2020 года.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4">Ссылки</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Карьера</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Пресс-кит</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">FAQ</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Техподдержка</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Политика возврата</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <Icon name="Youtube" className="cursor-pointer hover:text-primary transition-colors" />
                <Icon name="Twitter" className="cursor-pointer hover:text-primary transition-colors" />
                <Icon name="Facebook" className="cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Dark Void Studios. Все права защищены.
          </p>
        </div>
      </footer>

      <Dialog open={!!selectedGame} onOpenChange={() => setSelectedGame(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-primary">
          {selectedGame && (
            <>
              <DialogHeader>
                <div className="text-6xl mb-4 text-center">{selectedGame.image}</div>
                <DialogTitle className="text-3xl text-center">{selectedGame.title}</DialogTitle>
                <DialogDescription className="text-center text-lg">
                  {selectedGame.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div>
                  <h4 className="font-bold text-xl mb-3">Описание</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedGame.fullDescription}</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-3">Особенности</h4>
                  <ul className="space-y-2">
                    {selectedGame.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-3">Системные требования</h4>
                  <p className="text-muted-foreground">{selectedGame.requirements}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {selectedGame.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
              <DialogFooter className="flex gap-3">
                <Button variant="outline" onClick={() => setSelectedGame(null)}>
                  Закрыть
                </Button>
                <Button className="glow-red">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Купить за {selectedGame.price}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedStoreItem} onOpenChange={() => setSelectedStoreItem(null)}>
        <DialogContent className="bg-card border-primary">
          {selectedStoreItem && (
            <>
              <DialogHeader>
                <Badge variant="outline" className="w-fit mb-2">{selectedStoreItem.type}</Badge>
                <DialogTitle className="text-2xl">{selectedStoreItem.name}</DialogTitle>
                <DialogDescription className="text-base pt-2">
                  {selectedStoreItem.description}
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <div className="text-4xl font-bold text-primary text-center">
                  {selectedStoreItem.price}
                </div>
              </div>
              <DialogFooter className="flex gap-3">
                <Button variant="outline" onClick={() => setSelectedStoreItem(null)}>
                  Отмена
                </Button>
                <Button className="glow-red">
                  <Icon name="ShoppingBag" size={16} className="mr-2" />
                  Купить
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedTopic} onOpenChange={() => setSelectedTopic(null)}>
        <DialogContent className="max-w-2xl bg-card border-primary">
          {selectedTopic && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedTopic.title}</DialogTitle>
                <DialogDescription className="flex items-center gap-4 pt-2">
                  <span>Автор: {selectedTopic.author}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Icon name="MessageCircle" size={14} />
                    {selectedTopic.replies} ответов
                  </span>
                  <span>•</span>
                  <span>{selectedTopic.lastPost}</span>
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-foreground leading-relaxed">{selectedTopic.content}</p>
              </div>
              <DialogFooter className="flex gap-3">
                <Button variant="outline" onClick={() => setSelectedTopic(null)}>
                  Закрыть
                </Button>
                <Button className="glow-red">
                  <Icon name="MessageSquare" size={16} className="mr-2" />
                  Ответить
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
