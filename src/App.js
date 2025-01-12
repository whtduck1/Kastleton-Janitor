import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Pricing from './components/pricing';
import Contact from './components/contact';

const animationVariants = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

function App() {
  return (
    <>
      <Header />
      <main>
        <motion.section
          id="home"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariants}
        >
          <Home />
        </motion.section>
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariants}
        >
          <About />
        </motion.section>
        <motion.section
          id="pricing"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariants}
        >
          <Pricing />
        </motion.section>
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animationVariants}
        >
          <Contact />
        </motion.section>
      </main>
      <Footer />
    </>
  );
}

export default App;
