import React from 'react';
import { Code2, Terminal, Smartphone, Globe2, Database, Cpu } from 'lucide-react';
import { CourseCard } from './components/CourseCard';
import { AnimatedSection } from './components/AnimatedSection';
import { Header } from './components/Header';

function App() {
  const courses = [
    {
      title: "Frontend Development",
      icon: Code2,
      description: "HTML, CSS, JavaScript, React и современные веб-технологии",
      duration: "6 месяцев",
      price: "$999"
    },
    {
      title: "Backend Development",
      icon: Terminal,
      description: "Python, Django, базы данных и серверная разработка",
      duration: "7 месяцев",
      price: "$1199"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      description: "React Native, iOS и Android разработка",
      duration: "8 месяцев",
      price: "$1299"
    },
    {
      title: "FullStack Development",
      icon: Globe2,
      description: "Комплексное изучение frontend и backend разработки",
      duration: "12 месяцев",
      price: "$1999"
    },
    {
      title: "Data Science",
      icon: Database,
      description: "Python, машинное обучение, анализ данных",
      duration: "9 месяцев",
      price: "$1499"
    },
    {
      title: "DevOps Engineering",
      icon: Cpu,
      description: "Docker, Kubernetes, CI/CD, облачные технологии",
      duration: "8 месяцев",
      price: "$1399"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <Header />
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 border-b border-gray-800 pt-16">
        <AnimatedSection animation="fade-up" className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-white">
              Стань профессиональным разработчиком с ITC Bootcamp
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Практические навыки, современные технологии и поддержка опытных менторов
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
              Начать обучение
            </button>
          </div>
        </AnimatedSection>
      </header>

      {/* Rest of the components remain the same */}
      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: "1000+", text: "Выпускников" },
            { number: "92%", text: "Трудоустройство" },
            { number: "50+", text: "Экспертов" }
          ].map((stat, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 200} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.text}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Courses Section */}
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Наши направления
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} index={index} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Почему выбирают нас
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Terminal, title: "Практический подход", description: "80% практики, 20% теории" },
              { icon: Code2, title: "Современные технологии", description: "Актуальные инструменты разработки" },
              { icon: Database, title: "Поддержка менторов", description: "Персональное сопровождение" },
              { icon: Globe2, title: "Карьерный рост", description: "Помощь в трудоустройстве" }
            ].map((feature, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
                className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <AnimatedSection animation="fade-up" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Готовы начать свой путь в IT?
          </h2>
          <p className="text-gray-400 mb-8">
            Запишитесь на бесплатную консультацию и узнайте больше о наших курсах
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
            Записаться на консультацию
          </button>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "ITC Bootcamp",
                content: "Ваш путь к успешной карьере в IT начинается здесь"
              },
              {
                title: "Контакты",
                content: "Email: info@itcbootcamp.com\nТелефон: +996 555 123 456"
              },
              {
                title: "Адрес",
                content: "г. Бишкек,\nул. Главная 123"
              },
              {
                title: "Социальные сети",
                content: (
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Instagram</a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Facebook</a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a>
                  </div>
                )
              }
            ].map((section, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {section.title}
                </h3>
                {typeof section.content === 'string' ? (
                  <p className="text-gray-400 whitespace-pre-line">{section.content}</p>
                ) : (
                  section.content
                )}
              </AnimatedSection>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2024 ITC Bootcamp. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;