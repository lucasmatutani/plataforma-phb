import React from 'react';
import './ItemHiddenContainer.css';
import ItemBotaoDownload from '../ItemBotaoDownload';
import ItemHiddenCaracteristicas from '../ItemHiddenCaracteristicas'

function ItemHiddenContainer(props) {
    return (
        <div className='hidden-container'>
            <ItemHiddenCaracteristicas />
            <ItemBotaoDownload download='download' />
            <ItemBotaoDownload download='download' />
            <ItemBotaoDownload download='download' />
            <ItemBotaoDownload download='download' />
        </div>
    );
}

export default ItemHiddenContainer;