import React from 'react';

function ItemTitulo(props) {
    return (
        <div className='titulo-item'>
            <h4>{props.nomeItem}</h4>
            <p>{props.codigo}</p>
            <p>{props.tensao}</p>
        </div>
    );
}

export default ItemTitulo;