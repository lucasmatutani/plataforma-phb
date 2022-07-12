import React from 'react';

function ItemBotaoDownload(props) {
    return (
        <div className='botao-download'>
            <button>{props.download}</button>
        </div>
    );
}

export default ItemBotaoDownload;