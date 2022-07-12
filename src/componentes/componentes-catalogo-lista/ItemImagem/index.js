import React from 'react';
import './ItemImagem.css'

const ItemImagem = (props) => {
    return (
        <div className='container-img'>
            <img src= {props.src} />
        </div>
    );
};

export default ItemImagem;