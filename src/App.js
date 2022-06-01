import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import BookTable from './BookTable/BookTable';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <BookTable />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />

  </div>
);

export default App;
