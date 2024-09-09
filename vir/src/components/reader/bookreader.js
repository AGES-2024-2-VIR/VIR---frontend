import React, { useState, useEffect, useRef } from 'react';

const BookReader = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pageEndRef = useRef(null);

  // Função para passar para a próxima página
  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0); // Reseta a rolagem ao mudar de página
      setScrollProgress(0); // Reseta a barra de progresso
    }
  };

  // Detecta o progresso de rolagem
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  return (
    <div className="book-reader">
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <div className="page">
        <p>{pages[currentPage]}</p>
      </div>
      <button onClick={nextPage} className="next-chapter-btn">Next Chapter</button>
    </div>
  );
};

// Exemplo de uso
const App = () => {
  const pages = [
    'Capítulo 1: Era uma vez em uma terra distante, um jovem aventureiro que decidiu partir em uma grande jornada. Ele caminhou por vastas florestas, escalou montanhas altas e atravessou rios furiosos em busca de um tesouro lendário.',
    'Capítulo 2: A jornada não foi fácil. Em seu caminho, o jovem aventureiro encontrou perigos inimagináveis. Lobos selvagens o perseguiam, tempestades o golpeavam, mas ele nunca desistiu de sua missão.',
    'Capítulo 3: No coração de uma caverna escura, ele encontrou um velho sábio que lhe deu um mapa para o tesouro. Mas havia um aviso: "O tesouro que você procura pode não ser o que você espera."',
    'Capítulo 4: Após dias de viagem, o aventureiro chegou ao destino marcado no mapa. Lá, ele encontrou não ouro, mas uma verdade profunda sobre si mesmo e o verdadeiro valor de sua jornada.'
  ];

  return (
    <div>
      <BookReader pages={pages} />
    </div>
  );
};

export default App;