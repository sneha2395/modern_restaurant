import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import BookTable from './BookTable/BookTable';

const App = () => (
  <div>
    <Navbar />
   <Header />
   <AboutUs/>

    <SpecialMenu />
   <Chef />
    <Intro />
   <Laurels />
    <Gallery />
<FindUs />
    <Footer /> 
    <BookTable/>
  </div>
);

export default App;
