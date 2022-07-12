import React from 'react';

function ItemDescricao(props) {
    return (
        <div className='descricao-item'>
            <ul>
                <li>Número de strings/MPPT: 1/1</li>
                <li>Dimensões: 295 x 230 x 113mm</li>
                <li>Peso : 5,8 kg.</li>
                <li>Registro do INMETRO: 008540/2019</li>
                <li>Certificados NBR 16149; NBR 16150 e NBR IEC 62116</li>
                <li>Garantia: 7 anos (consulte o termo de garantia)</li>
            </ul>
        </div>
    );
}

export default ItemDescricao;