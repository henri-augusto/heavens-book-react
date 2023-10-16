import React from 'react';

const categories = () => {
  return (
    <div className="container-categorias">
      <div className="row row-cols-1">
        <a href="/">
          <div className="col col-categories">
            <div className="p-3">Culinária</div>
          </div>
        </a>
        <a href="/">
          <div className="col col-categories">
            <div className="p-3">Saúde</div>
          </div>
        </a>
        <a href="/">
          <div className="col col-categories">
            <div className="p-3">Musculação</div>
          </div>
        </a>
        <a href="/">
          <div className="col col-categories">
            <div className="p-3">Tecnologia</div>
          </div>
        </a>
        <a href="/">
          <div className="col col-categories">
            <div className="p-3">Entretenimento</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default categories;
