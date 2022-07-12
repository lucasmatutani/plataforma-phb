import BotaoVoltar from '../BotaoVoltar'
import './Titulo.css'

const Titulo = (props) => {
    return(
        <div className='titulo'>
            <BotaoVoltar />
            <h2>{props.nome}</h2>
        </div>
    )
}

export default Titulo