import React from 'react';

const CarouselBtn = () => {
  const buttons = [];
  for (let index = 0; index < 4; index++) {
    if (index === 0) {
      buttons.push(
        <CreateCarouselBtn index={index} className={'active'} current="true" />
      );
    } else {
      buttons.push(<CreateCarouselBtn index={index} />);
    }
  }
  return buttons;
};

const CarouselItem = () => {
  const itensCarousel = [];

  for (let index = 0; index < 4; index++) {
    if (index === 0) {
      itensCarousel.push(
        <div className="carousel-item active">
          <CreateCarouselItem />
        </div>
      );
    } else {
      itensCarousel.push(
        <div className="carousel-item">
          <CreateCarouselItem />
        </div>
      );
    }
  }

  return <div className="carousel-inner">{itensCarousel}</div>;
};

function CreateCarouselBtn({ index, className, current }) {
  return (
    <button
      type="button"
      data-bs-target="#carouselMostSelling"
      data-bs-slide-to={index}
      className={className}
      aria-current={current}
      aria-label={'Slide ' + (index + 1)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fillRule="currentColor"
        className="bi bi-dot"
        viewBox="0 0 16 16"
      >
        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      </svg>
    </button>
  );
}

function CreateCarouselItem() {
  return (
    <div className="carousel-itens">
      <div className="bookmark">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-bookmark"
            viewBox="0 0 16 16"
          >
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
          </svg>
        </button>
      </div>
      <div className="carousel-image">
        <img
          src="/img/dieta-paleo.jpg"
          className="carrosel-image d-block w-100"
          alt="Dieta Paleo"
        />
      </div>
      <div className="carousel-caption d-md-block">
        <div>Dieta Paleo, Os fundamentos da dieta.</div>
        <div>Por Miguel Cognato</div>
        <div style={{ textDecoration: 'line-through' }}>R$ 59,99</div>
        <div>R$ 49,99</div>
      </div>
    </div>
  );
}

const Carousel = ({ type }) => {
  return (
    <div id={'Carousel' + type} className="carousel slide carousel-content">
      <CarouselItem />

      <div className="carousel-indicators indicatores">
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={'#Carousel' + type}
          data-bs-slide="prev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left-circle"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />
          </svg>
        </button>

        <CarouselBtn />

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={'#Carousel' + type}
          data-bs-slide="next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right-circle"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
