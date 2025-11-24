import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const games = [
    {
      title: 'Shadows of Silence',
      description: 'Погрузитесь в мир абсолютной тишины, где каждый звук может стать последним',
      price: '999₽',
      image: '🎮',
      tags: ['Хоррор', 'Выживание', '18+']
    },
    {
      title: 'The Last Whisper',
      description: 'Исследуйте заброшенный особняк, где шёпот мертвых — единственный компас',
      price: '1299₽',
      image: '🏚️',
      tags: ['Психология', 'Атмосфера', '18+']
    },
    {
      title: 'Blackout Protocol',
      description: 'Выживите в бункере, где свет — ваш единственный союзник против тьмы',
      price: '899₽',
      image: '💀',
      tags: ['Экшн', 'Хоррор', 'Мультиплеер']
    }
  ];

  const storeItems = [
    { name: 'Season Pass 2025', price: '1999₽', type: 'DLC' },
    { name: 'Артбук "Кошмары"', price: '599₽', type: 'Мерч' },
    { name: 'Саундтрек Collection', price: '399₽', type: 'Музыка' },
    { name: 'Коллекционное издание', price: '4999₽', type: 'Игра' }
  ];

  const forumTopics = [
    { title: 'Теории о концовке Shadows of Silence', replies: 247, author: 'DarkSeeker' },
    { title: 'Гайд по выживанию в Blackout Protocol', replies: 189, author: 'SurvivalPro' },
    { title: 'Пасхалки в The Last Whisper', replies: 156, author: 'EasterHunter' },
    { title: 'Технические проблемы и решения', replies: 94, author: 'TechSupport' }
  ];

  const news = [
    { title: 'Анонс нового DLC для Shadows of Silence', date: '20 ноября 2024' },
    { title: 'Обновление 2.3: новые механики страха', date: '15 ноября 2024' },
    { title: 'Интервью с главным дизайнером', date: '10 ноября 2024' }
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
                  onClick={() => setActiveSection(item.toLowerCase())}
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
              <Card key={idx} className="bg-card border-border hover:border-primary transition-all duration-300 hover:glow-red group animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
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
                  <Button className="glow-red">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить
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
                  <Card key={idx} className="bg-card border-border hover:border-primary transition-all duration-300">
                    <CardHeader>
                      <Badge variant="outline" className="w-fit mb-2">{item.type}</Badge>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-xl font-bold text-primary">{item.price}</span>
                      <Button size="sm">
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
                  <Card key={idx} className="bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{topic.title}</CardTitle>
                          <CardDescription>Автор: {topic.author}</CardDescription>
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
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Calendar" size={14} />
                    {item.date}
                  </CardDescription>
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
    </div>
  );
};

export default Index;
