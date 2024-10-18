import React from 'react';
import { Introduction, Navbar } from './components';
import { Header, Projects } from './container';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Introduction/>
      <Projects/>
    </div>
  );
}

export default App;
