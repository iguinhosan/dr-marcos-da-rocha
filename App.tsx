import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Fees from './components/Fees';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // Remover o comentário abaixo se quiser que o elemento desapareça ao sair da tela (efeito fade out)
          entry.target.classList.remove('active');
        }
      });
    }, {
      threshold: 0.1, // Desperta quando 10% do elemento está visível
      rootMargin: "0px 0px -50px 0px"
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    }
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Services />
        <Fees />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;