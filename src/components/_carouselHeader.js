import React from 'react';

const carouselHeader = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/img/dieta-paleo-carrosel.png"
            className="carrosel-image d-block w-100"
            alt="Dieta Paleo"
          />
          <div className="carousel-caption d-md-block">
            <h5>Dieta Paleo</h5>
            <p>Os fundamentos da dieta. Por Miguel Cognato</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/img/cozinhe-como-chefe-carrosel.png"
            className="carrosel-image d-block w-100"
            alt="Cozinhe como chefe"
          />
          <div className="carousel-caption d-md-block">
            <h5>Cozinhe como um chefe</h5>
            <p>Primeiro volume das técnicas de grandes chefes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default carouselHeader;
