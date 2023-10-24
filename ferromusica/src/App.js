import React from 'react'

// import { Footer, Header, Hero, Contact, Carousel } from './container';
import "./App.scss"
import Piechart from './components/Piechart/piechart';
import Header from "./container/Header/Header"
import Hero from "./container/Hero/Hero"
import Carousel from "./container/Carousel/Carousel"
import Contact from "./container/Contact/Contact"
import Footer from "./container/Footer/Footer"
import Navbar from "./components/Navbar/Navbar.jsx"


const App = () => {

  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Hero />
      <Carousel />
      {/* <Piechart /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App