import React from 'react';
import CarouselHeader from '../components/_carouselHeader';
import CarouselContent from '../components/_carouselContent';
import Categories from '../components/_categories';
import './home.css';

const home = () => {
  return (
    <>
      <CarouselHeader />

      <div className="content py-5">
        <div className="section">
          <h5>Mais vendidos</h5>
        </div>
        <CarouselContent type="MostSelling" />

        <div className="section">
          <h5>Categorias</h5>
        </div>
        <Categories />

        <div className="section">
          <h5>Livros Digitais</h5>
        </div>
        <CarouselContent type="Books" />

        <div className="section">
          <h5>Cursos</h5>
        </div>
        <CarouselContent type="Courses" />
      </div>
    </>
  );
};

export default home;
