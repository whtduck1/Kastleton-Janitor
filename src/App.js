import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Pricing from './components/pricing';
import Contact from './components/contact';
console.log(Header); // Powinno zwrócić funkcję
console.log(Footer); // Powinno zwrócić funkcję
console.log(Home);   // Powinno zwrócić funkcję
function App() {
    return(
    <>
    <Header />
    <main>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
    <Footer />
  </>
  );
}

export default App;
