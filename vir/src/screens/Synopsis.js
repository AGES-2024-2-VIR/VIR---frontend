import React from 'react';
import Header from '../components/bookshelf/bookshelf';
import BookReader from '../components/reader/bookreader';
import Navbar from '../components/footer-component/footer';
import WithLabelExample from '../components/progress-bar/progress';
import pequenoPrincipe from '../assets/pequeno_principe_sinopse.png';
import './Synopsis.css';


function Synopsis() {
  return (
    <div className="synopsis-container">
      <div className="title-section">
        <h1>O Pequeno Príncipe</h1>
      </div>

      <div className="image-section">
        <img src={pequenoPrincipe} alt="O Pequeno Príncipe" className="book-image" />
      </div>

      <div className="progress-bar-section">
        <WithLabelExample />
      </div>

      <div className="synopsis-text">
        <p>
          Conheça a edição mais consagrada de um dos maiores clássicos da literatura, publicada no Brasil desde 1952, 
          com a tradução do poeta dom Marcos Barbosa e as ilustrações originais em aquarela do autor.
        </p>
        <p>
          Nesta história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara e 
          encontra um pequeno príncipe, que o leva a uma aventura filosófica e poética através de planetas que encerram a solidão humana.
        </p>
        <p>
          Editora: HarperCollins; 19ª edição (27 agosto 2018) <br/>
          Idioma: Português <br/>
          Gênero: Literatura infantil <br/>
          Páginas: 94
        </p>
      </div>

      <div className="continue-button-section">
        <button className="continue-button">Continuar leitura</button>
      </div>

      <Navbar />
    </div>
  );
}

export default Synopsis;
