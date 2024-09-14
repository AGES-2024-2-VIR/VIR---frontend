import React from 'react';
import List from '../generic-list/generic-list';

const LibraryList = ({ id, title, image, author, totalPages, category, onAddBook }) => {
  return (
    <List title={title} image={image}>
        <div class="library-item-info">
            <div class="library-item-description">
                <p class="library-item-author">{author}</p>
                <p class="library-item-total-pages">{totalPages} páginas</p>
            </div>
            <button class="library-item-add-button" >Adicionar a mochila</button>  
        </div>   
    </List>
  );
};

export default LibraryList;

//To do
//Arrumar css
//Adicionar categoria no componente
//Botao onAddBook