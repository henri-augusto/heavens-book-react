import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './bootstrap/css/bootstrap.css';
import './App.css';
import Home from './pages/Home.js';
import Header from './components/_header';
import Footer from './components/_footer';

function App() {
  return (
    <>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
        <Helmet>
          <script src="/js/bootstrap.min.js" />
        </Helmet>
      </div>
    </>
  );
}

export default App;
