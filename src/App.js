import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { TopBar, Header, Herosec, MainCards, Testimonial, Energy, Resistente, Perche, ScegliSec, Connettiti, Faq, Contact,Newsletter, Footer} from './container';

const App = () => {
  return (
    <div>
        <TopBar/>
        <Header />
        <Herosec />
        <MainCards />
        <Testimonial />
        <Energy />
        <Resistente />
        <Perche />
        <ScegliSec />
        <Connettiti />
        <Faq />
        <Contact />
        <Newsletter />
        <Footer/>
    </div>
  )
}

export default App
