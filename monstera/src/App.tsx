import React from 'react';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Footer/>
    </>
  );
};

export default App;
