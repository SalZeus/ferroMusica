import React from 'react'

import { About, Footer, Header, Hero, Contact } from './container';
import { Navbar } from './components';
import "./App.scss"


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App