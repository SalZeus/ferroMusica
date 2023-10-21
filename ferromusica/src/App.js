import React from 'react'

import { About, Footer, Header, Hero, Contact, Carousel } from './container';
import { Navbar } from './components';
import "./App.scss"
import Piechart from './components/Piechart/piechart';


const App = () => {

  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Hero />
      {/* <About /> */}
      <Carousel />
      <Piechart />
      <Contact />
      <Footer />
    </div>
  );
}

export default App