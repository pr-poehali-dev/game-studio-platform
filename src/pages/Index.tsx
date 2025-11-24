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
  const [selectedWikiGame, setSelectedWikiGame] = useState<Game | null>(null);
  const [selectedWikiArticle, setSelectedWikiArticle] = useState<any>(null);

  const games: Game[] = [
    {
      id: 1,
      title: 'Shadows of Silence',
      description: 'Погрузитесь в мир абсолютной тишины, где каждый звук может стать последним',
      fullDescription: 'Shadows of Silence — это психологический хоррор от первого лица, где тишина становится вашим главным врагом. Исследуйте заброшенный исследовательский комплекс, где каждый шаг может привлечь внимание существ, живущих в темноте.',
      price: '999₽',
      image: 'https://cdn.poehali.dev/projects/7049da72-7855-41ff-bf00-880148f03df0/files/2f8cafac-180d-4d80-8bbf-90cdee183be0.jpg',
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
      fullDescription: 'Погрузитесь в готическую атмосферу викторианского особняка Рэвенхилл. The Last Whisper сочетает элементы детективного расследования с хоррором выживания. Слушайте шёпот призраков, собирайте улики.',
      price: '1299₽',
      image: 'https://cdn.poehali.dev/projects/7049da72-7855-41ff-bf00-880148f03df0/files/96b0015b-b4d5-4b4a-9de8-61a6229b475b.jpg',
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
      fullDescription: 'Blackout Protocol — это кооперативный хоррор-шутер на 1-4 игроков. Ваша команда застряла в подземном военном бункере после неудачного эксперимента. Управляйте ограниченными источниками света.',
      image: 'https://cdn.poehali.dev/projects/7049da72-7855-41ff-bf00-880148f03df0/files/70c2e2eb-1bca-41f6-bb4e-04236c7e24d3.jpg',
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
      description: 'Получите доступ ко всем DLC 2025 года: 3 новых кампании, эксклюзивные скины'
    },
    { 
      name: 'Артбук "Кошмары"', 
      price: '599₽', 
      type: 'Мерч',
      description: 'Концепт-арты, эскизы монстров на 120 страницах'
    },
    { 
      name: 'Саундтрек Collection', 
      price: '399₽', 
      type: 'Музыка',
      description: '45 треков в форматах MP3 и FLAC'
    },
    { 
      name: 'Коллекционное издание', 
      price: '4999₽', 
      type: 'Игра',
      description: 'Все три игры + Season Pass + артбук + саундтрек'
    }
  ];

  const wikiData = {
    1: [
      { title: 'Существа тьмы', content: 'Полный бестиарий всех монстров Shadows of Silence. Слепые охотники реагируют на звук...', edits: 45, lastEdit: 'SilentHunter, 1 час назад' },
      { title: 'Карта исследовательского комплекса', content: 'Детальная карта всех уровней с отметками секретов и опасных зон', edits: 89, lastEdit: 'MapMaster, 3 часа назад' },
      { title: 'Лор и предыстория', content: 'История эксперимента "Тишина". Что пошло не так в 2019 году?', edits: 124, lastEdit: 'LoreKeeper, 5 часов назад' },
      { title: 'Гайд по концовкам', content: 'Как получить все 4 концовки. Требования и условия для каждой', edits: 67, lastEdit: 'EndingSeeker, 1 день назад' }
    ],
    2: [
      { title: 'Семья Рэвенхилл', content: 'Генеалогическое древо и биографии всех членов проклятой семьи', edits: 156, lastEdit: 'HistoryBuff, 2 часа назад' },
      { title: 'Призраки особняка', content: 'Каталог всех духов, их истории и способы взаимодействия', edits: 203, lastEdit: 'GhostWhisperer, 4 часа назад' },
      { title: 'Секретные комнаты', content: 'Локации всех скрытых помещений и механизмы их открытия', edits: 91, lastEdit: 'SecretFinder, 6 часов назад' },
      { title: 'Артефакты и предметы', content: 'База данных всех коллекционных предметов с описаниями', edits: 134, lastEdit: 'Collector, 2 дня назад' }
    ],
    3: [
      { title: 'Оружие и модификации', content: 'Полный гайд по крафту и апгрейду всего арсенала', edits: 278, lastEdit: 'WeaponMaster, 30 минут назад' },
      { title: 'Типы зараженных', content: 'Бестиарий противников, слабости и тактики борьбы', edits: 189, lastEdit: 'TacticalGamer, 2 часа назад' },
      { title: 'Карты уровней', content: 'Схемы всех процедурно генерируемых локаций бункера', edits: 145, lastEdit: 'Navigator, 5 часов назад' },
      { title: 'Билды персонажей', content: 'Оптимальные сборки навыков для разных стилей игры', edits: 312, lastEdit: 'BuildCrafter, 1 день назад' }
    ]
  };

  const forumTopics = [
    { 
      title: 'Теории о концовке Shadows of Silence', 
      replies: 247, 
      author: 'DarkSeeker',
      lastPost: '2 часа назад',
      content: 'Обсуждаем скрытую четвертую концовку. Кто-нибудь нашел все 12 записок?'
    },
    { 
      title: 'Гайд по выживанию в Blackout Protocol', 
      replies: 189, 
      author: 'SurvivalPro',
      lastPost: '5 часов назад',
      content: 'Полный гайд для новичков: оптимальные билды, тактики'
    },
    { 
      title: 'Пасхалки в The Last Whisper', 
      replies: 156, 
      author: 'EasterHunter',
      lastPost: '1 день назад',
      content: 'Кто заметил портрет разработчика в библиотеке?'
    },
    { 
      title: 'Технические проблемы и решения', 
      replies: 94, 
      author: 'TechSupport',
      lastPost: '3 дня назад',
      content: 'Сборник решений частых проблем: FPS дропы, вылеты'
    }
  ];

  const news = [
    { title: 'Анонс нового DLC', date: '20 ноября 2024', content: 'DLC "Эхо прошлого" выйдет 15 декабря' },
    { title: 'Обновление 2.3', date: '15 ноября 2024', content: 'Новые механики страха' },
    { title: 'Интервью с дизайнером', date: '10 ноября 2024', content: 'О будущем студии' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="pencilTexture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
      </svg>

      <nav className="border-b-4 border-black sticky top-0 bg-background z-50 sketchy-border shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary rotate-[-2deg] glitch">
              ✝ DARK VOID STUDIOS ✝
            </h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Игры', 'Магазин', 'Вики', 'Форум'].map((item) => (
                <button
                  key={item}
                  className="text-foreground hover:text-primary transition-all duration-300 relative font-bold text-lg hover:rotate-[-2deg] scribble-underline"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button variant="outline" className="md:hidden sketchy-border">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative py-20 px-4 overflow-hidden border-b-4 border-black">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl rotate-12">☠</div>
          <div className="absolute bottom-10 right-10 text-9xl -rotate-12">👁</div>
        </div>
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="text-7xl md:text-9xl font-bold mb-6 text-primary rotate-[-1deg] text-glow">
            ВОЙДИТЕ<br/>В ТЕМНОТУ
          </h2>
          <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto font-bold">
            ⚠ Создаем игры, которые заставят ваше сердце биться быстрее ⚠
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="glow-red sketchy-border font-bold text-lg rotate-[-1deg]">
              <Icon name="Gamepad2" size={20} className="mr-2" />
              НАШИ ИГРЫ
            </Button>
            <Button size="lg" variant="outline" className="sketchy-border font-bold text-lg rotate-[1deg]">
              <Icon name="Skull" size={20} className="mr-2" />
              ТРЕЙЛЕР
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-b-4 border-black">
        <div className="container mx-auto">
          <h3 className="text-5xl font-bold mb-12 text-center text-primary rotate-[-1deg]">
            ☠ НАШИ ИГРЫ ☠
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {games.map((game, idx) => (
              <Card 
                key={idx} 
                className="bg-card sketchy-border hover:glow-red group animate-scale-in cursor-pointer transition-all hover:rotate-[-2deg] overflow-hidden" 
                style={{ animationDelay: `${idx * 100}ms` }}
                onClick={() => setSelectedGame(game)}
              >
                <CardHeader>
                  <div className="mb-4 overflow-hidden sketchy-border">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 filter contrast-125 brightness-95"
                    />
                  </div>
                  <CardTitle className="text-2xl text-primary rotate-[-1deg]">{game.title}</CardTitle>
                  <CardDescription className="text-foreground font-bold text-sm">{game.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    {game.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="sketchy-border font-bold rotate-[-1deg]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary rotate-[2deg]">{game.price}</span>
                  <Button className="glow-red sketchy-border font-bold" onClick={(e) => { e.stopPropagation(); setSelectedGame(game); }}>
                    <Icon name="Eye" size={16} className="mr-2" />
                    СМОТРЕТЬ
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="h-4 bg-primary opacity-20"></div>

      <section className="py-16 px-4 border-b-4 border-black">
        <div className="container mx-auto">
          <Tabs defaultValue="store" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 sketchy-border">
              <TabsTrigger value="store" className="font-bold text-lg">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                МАГАЗИН
              </TabsTrigger>
              <TabsTrigger value="wiki" className="font-bold text-lg">
                <Icon name="BookOpen" size={16} className="mr-2" />
                ВИКИ
              </TabsTrigger>
              <TabsTrigger value="forum" className="font-bold text-lg">
                <Icon name="MessageSquare" size={16} className="mr-2" />
                ФОРУМ
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="store" className="animate-fade-in">
              <h3 className="text-4xl font-bold mb-8 text-center text-primary rotate-[-1deg]">
                💀 МАГАЗИН 💀
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {storeItems.map((item, idx) => (
                  <Card 
                    key={idx} 
                    className="bg-card sketchy-border hover:glow-red transition-all cursor-pointer hover:rotate-[2deg]"
                    onClick={() => setSelectedStoreItem(item)}
                  >
                    <CardHeader>
                      <Badge variant="outline" className="w-fit mb-2 font-bold sketchy-border">{item.type}</Badge>
                      <CardTitle className="text-lg font-bold rotate-[-1deg]">{item.name}</CardTitle>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center">
                      <span className="text-xl font-bold text-primary">{item.price}</span>
                      <Button size="sm" className="sketchy-border font-bold">
                        <Icon name="ShoppingBag" size={14} className="mr-1" />
                        КУПИТЬ
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="wiki" className="animate-fade-in">
              <h3 className="text-4xl font-bold mb-8 text-center text-primary rotate-[-1deg]">
                📖 ВИКИ ФЭНДОМ 📖
              </h3>
              <p className="text-center text-foreground font-bold mb-8 max-w-2xl mx-auto">
                ⚠ Энциклопедия игр, созданная фанатами. Редактируйте и дополняйте! ⚠
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {games.map((game, idx) => (
                  <Card 
                    key={idx} 
                    className="bg-card sketchy-border hover:glow-red transition-all cursor-pointer hover:rotate-[2deg]"
                    onClick={() => setSelectedWikiGame(game)}
                  >
                    <CardHeader>
                      <div className="mb-3 overflow-hidden sketchy-border">
                        <img 
                          src={game.image} 
                          alt={game.title}
                          className="w-full h-32 object-cover filter contrast-125"
                        />
                      </div>
                      <CardTitle className="text-lg font-bold rotate-[-1deg]">{game.title}</CardTitle>
                      <CardDescription className="text-xs font-bold">
                        📝 {wikiData[game.id as keyof typeof wikiData].length} статей
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button size="sm" className="w-full sketchy-border font-bold">
                        <Icon name="BookOpen" size={14} className="mr-1" />
                        ОТКРЫТЬ ВИКИ
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="max-w-4xl mx-auto">
                <Card className="sketchy-border bg-muted/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center text-primary rotate-[-1deg]">
                      ✍ КАК РЕДАКТИРОВАТЬ?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">1️⃣</span>
                      <p className="font-bold text-foreground">Выберите игру и статью для редактирования</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">2️⃣</span>
                      <p className="font-bold text-foreground">Нажмите кнопку "РЕДАКТИРОВАТЬ" в статье</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">3️⃣</span>
                      <p className="font-bold text-foreground">Внесите изменения и сохраните - они появятся после модерации</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="forum" className="animate-fade-in">
              <h3 className="text-4xl font-bold mb-8 text-center text-primary rotate-[-1deg]">
                👁 ФОРУМ 👁
              </h3>
              <div className="max-w-4xl mx-auto space-y-4">
                {forumTopics.map((topic, idx) => (
                  <Card 
                    key={idx} 
                    className="bg-card sketchy-border hover:glow-red transition-all cursor-pointer hover:rotate-[-1deg]"
                    onClick={() => setSelectedTopic(topic)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2 font-bold">{topic.title}</CardTitle>
                          <CardDescription className="font-bold text-xs">
                            ✍ {topic.author} • {topic.lastPost}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="ml-4 sketchy-border font-bold">
                          <Icon name="MessageCircle" size={12} className="mr-1" />
                          {topic.replies}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
                <Button className="w-full glow-red sketchy-border font-bold text-lg rotate-[1deg]">
                  <Icon name="Plus" size={16} className="mr-2" />
                  СОЗДАТЬ ТЕМУ
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 px-4 border-b-4 border-black bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center text-primary rotate-[1deg]">
            ⚠ НОВОСТИ ⚠
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {news.map((item, idx) => (
              <Card 
                key={idx} 
                className="bg-card sketchy-border hover:glow-red transition-all cursor-pointer animate-fade-in hover:rotate-[-2deg]" 
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-bold rotate-[-1deg]">{item.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 font-bold">
                    <Icon name="Calendar" size={14} />
                    {item.date}
                  </CardDescription>
                  <p className="text-sm text-foreground font-bold">{item.content}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-black py-12 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-xl mb-4 text-primary">О СТУДИИ</h4>
              <p className="text-foreground text-sm font-bold">
                Dark Void Studios создает атмосферные хоррор-игры с 2020 года.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4 text-primary">ССЫЛКИ</h4>
              <ul className="space-y-2 text-sm text-foreground font-bold">
                <li className="hover:text-primary cursor-pointer transition-colors">⚡ Карьера</li>
                <li className="hover:text-primary cursor-pointer transition-colors">⚡ Пресс-кит</li>
                <li className="hover:text-primary cursor-pointer transition-colors">⚡ Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4 text-primary">ПОДДЕРЖКА</h4>
              <ul className="space-y-2 text-sm text-foreground font-bold">
                <li className="hover:text-primary cursor-pointer transition-colors">❓ FAQ</li>
                <li className="hover:text-primary cursor-pointer transition-colors">🔧 Техподдержка</li>
                <li className="hover:text-primary cursor-pointer transition-colors">💰 Возврат</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4 text-primary">СОЦСЕТИ</h4>
              <div className="flex gap-4">
                <Icon name="Youtube" className="cursor-pointer hover:text-primary transition-colors" size={28} />
                <Icon name="Twitter" className="cursor-pointer hover:text-primary transition-colors" size={28} />
                <Icon name="Facebook" className="cursor-pointer hover:text-primary transition-colors" size={28} />
              </div>
            </div>
          </div>
          <div className="h-1 bg-black my-8 opacity-30"></div>
          <p className="text-center text-sm text-foreground font-bold">
            ✝ © 2024 Dark Void Studios. Все права защищены. ✝
          </p>
        </div>
      </footer>

      <Dialog open={!!selectedGame} onOpenChange={() => setSelectedGame(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card sketchy-border">
          {selectedGame && (
            <>
              <DialogHeader>
                <div className="mb-4 sketchy-border overflow-hidden">
                  <img src={selectedGame.image} alt={selectedGame.title} className="w-full h-64 object-cover filter contrast-125" />
                </div>
                <DialogTitle className="text-3xl text-center text-primary rotate-[-1deg]">{selectedGame.title}</DialogTitle>
                <DialogDescription className="text-center text-lg font-bold text-foreground">
                  {selectedGame.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="sketchy-border p-4 bg-muted/20">
                  <h4 className="font-bold text-xl mb-3 text-primary">ОПИСАНИЕ</h4>
                  <p className="text-foreground leading-relaxed font-bold">{selectedGame.fullDescription}</p>
                </div>
                <div className="sketchy-border p-4 bg-muted/20">
                  <h4 className="font-bold text-xl mb-3 text-primary">ОСОБЕННОСТИ</h4>
                  <ul className="space-y-2">
                    {selectedGame.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span className="text-foreground font-bold">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {selectedGame.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="sketchy-border font-bold">{tag}</Badge>
                  ))}
                </div>
              </div>
              <DialogFooter className="flex gap-3">
                <Button variant="outline" onClick={() => setSelectedGame(null)} className="sketchy-border font-bold">
                  ЗАКРЫТЬ
                </Button>
                <Button className="glow-red sketchy-border font-bold">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  КУПИТЬ {selectedGame.price}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedStoreItem} onOpenChange={() => setSelectedStoreItem(null)}>
        <DialogContent className="bg-card sketchy-border">
          {selectedStoreItem && (
            <>
              <DialogHeader>
                <Badge variant="outline" className="w-fit mb-2 font-bold sketchy-border">{selectedStoreItem.type}</Badge>
                <DialogTitle className="text-2xl text-primary rotate-[-1deg]">{selectedStoreItem.name}</DialogTitle>
                <DialogDescription className="text-base pt-2 font-bold text-foreground">
                  {selectedStoreItem.description}
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <div className="text-4xl font-bold text-primary text-center rotate-[2deg]">
                  {selectedStoreItem.price}
                </div>
              </div>
              <DialogFooter className="flex gap-3">
                <Button variant="outline" onClick={() => setSelectedStoreItem(null)} className="sketchy-border font-bold">
                  ОТМЕНА
                </Button>
                <Button className="glow-red sketchy-border font-bold">
                  <Icon name="ShoppingBag" size={16} className="mr-2" />
                  КУПИТЬ
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedTopic} onOpenChange={() => setSelectedTopic(null)}>
        <DialogContent className="max-w-2xl bg-card sketchy-border">
          {selectedTopic && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-primary rotate-[-1deg]">{selectedTopic.title}</DialogTitle>
                <DialogDescription className="flex items-center gap-4 pt-2 font-bold">
                  <span>✍ {selectedTopic.author}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Icon name="MessageCircle" size={14} />
                    {selectedTopic.replies}
                  </span>
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 sketchy-border p-4 bg-muted/20">
                <p className="text-foreground leading-relaxed font-bold">{selectedTopic.content}</p>
              </div>
              <DialogFooter className="flex gap-3">
                <Button variant="outline" onClick={() => setSelectedTopic(null)} className="sketchy-border font-bold">
                  ЗАКРЫТЬ
                </Button>
                <Button className="glow-red sketchy-border font-bold">
                  <Icon name="MessageSquare" size={16} className="mr-2" />
                  ОТВЕТИТЬ
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedWikiGame} onOpenChange={() => { setSelectedWikiGame(null); setSelectedWikiArticle(null); }}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card sketchy-border">
          {selectedWikiGame && !selectedWikiArticle && (
            <>
              <DialogHeader>
                <div className="mb-4 sketchy-border overflow-hidden">
                  <img src={selectedWikiGame.image} alt={selectedWikiGame.title} className="w-full h-48 object-cover filter contrast-125" />
                </div>
                <DialogTitle className="text-3xl text-center text-primary rotate-[-1deg]">
                  📖 {selectedWikiGame.title} ВИКИ 📖
                </DialogTitle>
                <DialogDescription className="text-center font-bold text-foreground">
                  Фэндом-энциклопедия игры, созданная сообществом
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3 py-4">
                {wikiData[selectedWikiGame.id as keyof typeof wikiData].map((article, idx) => (
                  <Card 
                    key={idx} 
                    className="bg-card sketchy-border hover:glow-red transition-all cursor-pointer hover:rotate-[-1deg]"
                    onClick={() => setSelectedWikiArticle(article)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2 font-bold">{article.title}</CardTitle>
                          <CardDescription className="font-bold text-xs mb-2">
                            {article.content}
                          </CardDescription>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground font-bold">
                            <span>✍ {article.edits} правок</span>
                            <span>•</span>
                            <span>{article.lastEdit}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="ml-4 sketchy-border font-bold">
                          <Icon name="FileEdit" size={12} className="mr-1" />
                          {article.edits}
                        </Badge>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <DialogFooter>
                <Button className="w-full glow-red sketchy-border font-bold text-lg rotate-[1deg]">
                  <Icon name="Plus" size={16} className="mr-2" />
                  СОЗДАТЬ НОВУЮ СТАТЬЮ
                </Button>
              </DialogFooter>
            </>
          )}
          {selectedWikiArticle && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setSelectedWikiArticle(null)}
                    className="sketchy-border font-bold"
                  >
                    <Icon name="ArrowLeft" size={16} className="mr-1" />
                    НАЗАД
                  </Button>
                  <Badge variant="outline" className="sketchy-border font-bold">
                    ✍ {selectedWikiArticle.edits} правок
                  </Badge>
                </div>
                <DialogTitle className="text-3xl text-primary rotate-[-1deg]">{selectedWikiArticle.title}</DialogTitle>
                <DialogDescription className="font-bold text-xs">
                  Последнее изменение: {selectedWikiArticle.lastEdit}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="sketchy-border p-6 bg-muted/20">
                  <p className="text-foreground leading-relaxed font-bold text-lg">
                    {selectedWikiArticle.content}
                  </p>
                  <div className="mt-6 space-y-3">
                    <p className="font-bold text-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Здесь будет полный текст статьи с детальным описанием темы.
                    </p>
                    <p className="font-bold text-foreground">
                      ⚠ ВНИМАНИЕ: Информация может содержать спойлеры! ⚠
                    </p>
                  </div>
                </div>
                <div className="sketchy-border p-4 bg-card">
                  <h4 className="font-bold text-lg mb-3 text-primary">📝 ИСТОРИЯ ПРАВОК</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between font-bold">
                      <span>DarkLoremaster добавил 2 абзаца</span>
                      <span className="text-muted-foreground">1 час назад</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>WikiEditor исправил опечатки</span>
                      <span className="text-muted-foreground">3 часа назад</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>FanWriter обновил информацию</span>
                      <span className="text-muted-foreground">1 день назад</span>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter className="flex gap-3">
                <Button variant="outline" onClick={() => setSelectedWikiArticle(null)} className="sketchy-border font-bold">
                  ЗАКРЫТЬ
                </Button>
                <Button className="glow-red sketchy-border font-bold">
                  <Icon name="Edit" size={16} className="mr-2" />
                  РЕДАКТИРОВАТЬ СТАТЬЮ
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