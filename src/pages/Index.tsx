import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import Icon from "@/components/ui/icon";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description:
        "Спасибо за обращение! Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            HR<span className="text-primary/70">Эксперт</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#services"
              className="text-foreground/80 hover:text-primary"
            >
              Услуги
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary">
              Преимущества
            </a>
            <a
              href="#testimonials"
              className="text-foreground/80 hover:text-primary"
            >
              Отзывы
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-primary"
            >
              Контакты
            </a>
          </nav>
          <Button variant="outline" className="hidden md:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Найдем <span className="text-primary">талантливых</span>{" "}
                сотрудников для вашего бизнеса
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                Профессиональные услуги частного рекрутера с индивидуальным
                подходом к каждому клиенту и гарантией результата.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-medium">
                  Заказать подбор
                </Button>
                <Button variant="outline" size="lg">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border border-white/40">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
                  alt="HR специалист проводит собеседование"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent mix-blend-overlay"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-primary/10 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Услуги по подбору персонала
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Предлагаем полный спектр услуг для эффективного поиска и подбора
                квалифицированных специалистов под ваши требования.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                    <Icon name="Search" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Поиск кандидатов
                  </h3>
                  <p className="text-foreground/70">
                    Используем собственную базу кандидатов и современные методы
                    поиска для подбора лучших специалистов.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                    <Icon name="FileCheck" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Оценка и отбор</h3>
                  <p className="text-foreground/70">
                    Проводим многоступенчатую оценку кандидатов, включая
                    тестирование профессиональных навыков.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                    <Icon name="UserCheck" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Проверка рекомендаций
                  </h3>
                  <p className="text-foreground/70">
                    Собираем и проверяем рекомендации с предыдущих мест работы
                    для подтверждения компетенций.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                    <Icon name="UserCog" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Executive Search
                  </h3>
                  <p className="text-foreground/70">
                    Поиск и привлечение топ-менеджеров и редких специалистов
                    высокого уровня для вашей компании.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                    <Icon name="BarChart" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Аналитика рынка труда
                  </h3>
                  <p className="text-foreground/70">
                    Предоставляем актуальные данные по зарплатам, требованиям и
                    доступности специалистов в вашей отрасли.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-6">
                    <Icon name="FileSpreadsheet" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Кадровый консалтинг
                  </h3>
                  <p className="text-foreground/70">
                    Помогаем оптимизировать процессы найма и адаптации персонала
                    в вашей компании.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop"
                    alt="HR специалист за работой"
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon name="Award" className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">7+ лет</div>
                        <div className="text-sm text-foreground/70">
                          опыта работы
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Почему выбирают нас?
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon
                        name="CheckCircle"
                        className="text-primary"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Индивидуальный подход
                      </h3>
                      <p className="text-foreground/70">
                        Мы тщательно изучаем потребности вашего бизнеса,
                        корпоративную культуру и требования к кандидатам.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Экономия времени
                      </h3>
                      <p className="text-foreground/70">
                        Мы берем на себя все этапы поиска и отбора, предоставляя
                        вам только финальных кандидатов.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon
                        name="ShieldCheck"
                        className="text-primary"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Гарантия качества
                      </h3>
                      <p className="text-foreground/70">
                        Предоставляем бесплатную замену специалиста в течение
                        гарантийного срока.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="mt-8">Узнать подробнее</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Отзывы наших клиентов
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Узнайте, что говорят о нашей работе компании, которые уже
                воспользовались нашими услугами по подбору персонала.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 text-yellow-400 mb-6">
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                  </div>
                  <p className="italic text-foreground/80 mb-6">
                    "Благодаря профессиональной работе рекрутера мы смогли найти
                    идеального технического директора за рекордно короткие
                    сроки. Очень довольны сотрудничеством!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <span className="font-semibold text-primary">АК</span>
                    </div>
                    <div>
                      <div className="font-semibold">Анна Ковалева</div>
                      <div className="text-sm text-foreground/60">
                        HR-директор, CompTech
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 text-yellow-400 mb-6">
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                  </div>
                  <p className="italic text-foreground/80 mb-6">
                    "Обращались по поводу подбора команды разработчиков для
                    нового проекта. Все кандидаты соответствовали нашим
                    требованиям, выбрали лучших. Рекомендуем!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <span className="font-semibold text-primary">ДМ</span>
                    </div>
                    <div>
                      <div className="font-semibold">Дмитрий Морозов</div>
                      <div className="text-sm text-foreground/60">
                        CEO, Digital Solutions
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border.shadow-sm.hover:shadow-md.transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 text-yellow-400 mb-6">
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                    <Icon name="Star" size={20} />
                  </div>
                  <p className="italic text-foreground/80 mb-6">
                    "Профессиональный подход, внимание к деталям и глубокое
                    понимание специфики нашего бизнеса позволили найти именно
                    тех сотрудников, которые нам были нужны."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <span className="font-semibold text-primary">ЕС</span>
                    </div>
                    <div>
                      <div className="font-semibold">Елена Соколова</div>
                      <div className="text-sm text-foreground/60">
                        Руководитель отдела кадров, FintechPro
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Свяжитесь с нами
                </h2>
                <p className="text-lg text-foreground/70">
                  Оставьте заявку, и мы обсудим, как можем помочь в подборе
                  персонала для вашей компании.
                </p>
              </div>

              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium"
                        >
                          Ваше имя
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Введите ваше имя"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium"
                        >
                          Электронная почта
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium"
                      >
                        Телефон
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium"
                      >
                        Сообщение
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Опишите ваши потребности в подборе персонала"
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full md:w-auto">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60">Телефон</div>
                    <a
                      href="tel:+71234567890"
                      className="font-medium hover:text-primary"
                    >
                      +7 (123) 456-78-90
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60">Email</div>
                    <a
                      href="mailto:info@hr-profi.ru"
                      className="font-medium hover:text-primary"
                    >
                      info@hr-profi.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/60">Адрес</div>
                    <div className="font-medium">
                      г. Москва, ул. Примерная, 123
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-10">
            <div className="mb-8 md:mb-0">
              <div className="text-2xl font-bold mb-4">
                HR<span className="opacity-70">Профи</span>
              </div>
              <p className="max-w-xs text-background/70">
                Профессиональные услуги по подбору персонала с индивидуальным
                подходом.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Услуги</h3>
                <ul className="space-y-2 text-background/70">
                  <li>
                    <a
                      href="#"
                      className="hover:text-background hover:underline"
                    >
                      Поиск специалистов
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-background hover:underline"
                    >
                      Executive Search
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-background hover:underline"
                    >
                      Оценка персонала
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-background hover:underline"
                    >
                      Кадровый консалтинг
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Компания</h3>
                <ul className="space-y-2 text-background/70">
                  <li>
                    <a
                      href="#"
                      className="hover:text-background hover:underline"
                    >
                      О нас
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-background hover:underline"
                    >
                      Кейсы
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-background hover:underline"
                    >
                      Отзывы
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-background hover:underline"
                    >
                      Контакты
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 md:col-span-1">
                <h3 className="font-semibold mb-4">Связаться</h3>
                <ul className="space-y-2 text-background/70">
                  <li className="flex items-center">
                    <Icon name="Phone" size={16} className="mr-2" />
                    <a
                      href="tel:+71234567890"
                      className="hover:text-background hover:underline"
                    >
                      +7 (123) 456-78-90
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Mail" size={16} className="mr-2" />
                    <a
                      href="mailto:info@hr-profi.ru"
                      className="hover:text-background hover:underline"
                    >
                      info@hr-profi.ru
                    </a>
                  </li>
                </ul>

                <div className="flex space-x-4 mt-4">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20"
                  >
                    <Icon name="Instagram" size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20"
                  >
                    <Icon name="Linkedin" size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20"
                  >
                    <Icon name="Facebook" size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20"
                  >
                    <Icon name="Telegram" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              © 2025 HRПрофи. Все права защищены.
            </div>
            <div className="flex space-x-6 text-sm text-background/60">
              <a href="#" className="hover:text-background hover:underline">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-background hover:underline">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
