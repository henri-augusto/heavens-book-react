import React from 'react';
import './_footer.css';

const Footer = () => {
  return (
    <footer class="py-3">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <a href="/" class="nav-link px-2 text-body-secondary">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href="/" class="nav-link px-2 text-body-secondary">
            Livros
          </a>
        </li>
        <li class="nav-item">
          <a href="/" class="nav-link px-2 text-body-secondary">
            Cursos
          </a>
        </li>
        <li class="nav-item">
          <a href="/" class="nav-link px-2 text-body-secondary">
            Categorias
          </a>
        </li>
        <li class="nav-item">
          <a href="/" class="nav-link px-2 text-body-secondary">
            Sobre
          </a>
        </li>
      </ul>

      <div class="nav justify-content-center border-bottom pb-3 mb-3">
        <form>
          <h5>Inscreva-se!</h5>
          <p>Receba um e-book no seu email totalmente gratuito!</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">
              Email
            </label>
            <input
              id="newsletter1"
              type="text"
              class="form-control"
              placeholder="Endereço de email"
            />
            <button class="btn btn-primary" type="button">
              Registrar
            </button>
          </div>
        </form>
      </div>

      <p class="text-center text-body-secondary">
        © 2023 Heaven's Book Company, Inc
      </p>
    </footer>
  );
};

export default Footer;
