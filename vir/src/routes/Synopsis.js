import React, { useState, useEffect } from 'react';
import './Synopsis.css';
import { fetchSimulatedSynopsisData } from './synopsis_simulacao';
import Bookshelf from '../components/bookshelf/bookshelf';
//AJUSTAR O FOOTER
//import FooterComponent from '../components/footer-component/footer';

const Synopsis = () => {
  const [bookData, setBookData] = useState({
    title: '',
    image: '',
    totalPages: 0,
    pagesRead: 0,
    description: '',
    publisher: '',
    author: '',
    genre: '',
    pages: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      // QUANDO O BACKEND EXISTIR, SUBSTITUIR O TRECHO DEMARCADO POR:
      /*
      const response = await fetch('http://url_da_chamada/nome_da_tabela/{id}');
      const data = await response.json();
      setBookData(data);
      */
      const data = await fetchSimulatedSynopsisData();
      setBookData(data);
      //
    };

    fetchData();
  }, []);

  const percentageRead = (bookData.pagesRead / bookData.totalPages) * 100;

  return (
    <>
      <Bookshelf />

      <div className="synopsis-container">
          <h1>{bookData.title}</h1>
          <img src={bookData.image} alt={bookData.title} className="synopsis-image"/>
          <div className="progress-container">
              <div className="progress-bar">
                  <div className="progress-bar-fill" style={{width: `${percentageRead}%`}}></div>
              </div>
              <span className="progress-percentage">{Math.round(percentageRead)}%</span>
          </div>
          <div className="page-info">
              <span>{bookData.pagesRead} páginas lidas</span>
              <span>faltam {bookData.totalPages - bookData.pagesRead} páginas</span>
          </div>

          <div className="book-description" dangerouslySetInnerHTML={{__html: bookData.description}}></div>

          <div className="book-info">
              <p><strong>Editora:</strong> {bookData.publisher}</p>
              <p><strong>Autor:</strong> {bookData.author}</p>
              <p><strong>Gênero:</strong> {bookData.genre}</p>
              <p><strong>Páginas:</strong> {bookData.pages}</p>
          </div>
          <button className="continue-button">Continuar leitura</button>
      </div>

      {/*<FooterComponent />*/}
    </>
  );
};

export default Synopsis;
