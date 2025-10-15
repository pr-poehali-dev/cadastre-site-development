import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    id: '01',
    title: 'Технический план',
    description: 'Подготовка технических планов для регистрации объектов недвижимости, перепланировок и изменений характеристик',
    icon: 'FileText'
  },
  {
    id: '02',
    title: 'Межевой план',
    description: 'Установление и уточнение границ земельных участков с высокой точностью геодезических измерений',
    icon: 'Map'
  },
  {
    id: '03',
    title: 'Схема расположения на КПТ',
    description: 'Схема расположения земельного участка на кадастровом плане территории для образования новых участков',
    icon: 'MapPin'
  },
  {
    id: '04',
    title: 'Вынос границ в натуру',
    description: 'Определение и закрепление границ земельного участка на местности с установкой межевых знаков',
    icon: 'Navigation'
  },
  {
    id: '05',
    title: 'Акт обследования',
    description: 'Составление акта обследования для подтверждения текущего состояния объекта недвижимости',
    icon: 'ClipboardCheck'
  },
  {
    id: '06',
    title: 'Заключение инженера',
    description: 'Профессиональное заключение кадастрового инженера по спорным и сложным вопросам',
    icon: 'FileCheck'
  }
];

const projects = [
  {
    id: 1,
    title: 'Межевание участка 15 га',
    category: 'Коммерческая недвижимость',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'Технический план здания',
    category: 'Жилая недвижимость',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Вынос границ в натуру',
    category: 'Земельные участки',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
  }
];

const process = [
  {
    step: '01',
    title: 'Консультация',
    description: 'Бесплатная консультация и анализ документов. Определяем объем работ и сроки выполнения'
  },
  {
    step: '02',
    title: 'Полевые работы',
    description: 'Выезд на объект и проведение необходимых геодезических измерений с современным оборудованием'
  },
  {
    step: '03',
    title: 'Подготовка документов',
    description: 'Камеральная обработка данных и подготовка всех необходимых документов в соответствии с законодательством'
  },
  {
    step: '04',
    title: 'Сдача в Росреестр',
    description: 'Подача документов в Росреестр и сопровождение до получения результата регистрации'
  }
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Compass" className="text-white" size={24} />
              </div>
              <span className="font-heading font-bold text-xl">КадастрПро</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Проекты</a>
              <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">Процесс</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button size="sm" className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Профессиональные кадастровые работы
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Полный спектр кадастровых услуг для физических и юридических лиц. 
                Работаем быстро, качественно и с гарантией результата.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="MessageSquare" size={20} />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline">
                  Наши работы
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-primary mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">проектов</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">успешных сделок</div>
                </div>
              </div>
            </div>

            <Card className="p-8 animate-scale-in shadow-xl">
              <CardContent className="p-0">
                <h3 className="font-heading text-2xl font-bold mb-6">Оставьте заявку</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Интересующая услуга"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 gap-2" size="lg">
                    Получить консультацию
                    <Icon name="ArrowRight" size={18} />
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Предоставляем полный спектр кадастровых услуг с использованием современного оборудования
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Icon name={service.icon} className="text-primary group-hover:text-white transition-colors" size={24} />
                    </div>
                    <div className="text-3xl font-heading font-bold text-muted-foreground/30">{service.id}</div>
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Наши проекты</h2>
            <p className="text-lg text-muted-foreground">Портфолио выполненных работ</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                  <h3 className="font-heading text-xl font-bold">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Смотреть все проекты
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Процесс работы</h2>
            <p className="text-lg text-muted-foreground">Прозрачная схема от заявки до результата</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-5xl font-heading font-bold text-primary/20 mb-4">{item.step}</div>
                    <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <Icon name="ArrowRight" className="text-primary" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold mb-6">Готовы начать?</h2>
            <p className="text-xl mb-8 opacity-90">
              Получите бесплатную консультацию и расчет стоимости работ уже сегодня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <Icon name="Phone" size={20} />
                +7 (999) 123-45-67
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white hover:text-primary">
                <Icon name="Mail" size={20} />
                info@kadastrpro.ru
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Compass" className="text-white" size={18} />
              </div>
              <span className="font-heading font-bold">КадастрПро</span>
            </div>
            <div className="text-sm text-white/70">
              © 2024 КадастрПро. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
