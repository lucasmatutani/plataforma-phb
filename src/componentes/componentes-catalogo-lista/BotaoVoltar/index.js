import './BotaoVoltar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BotaoVoltar = (props) => {
    return (
        <div className='botao-voltar' >
            <FontAwesomeIcon icon="fas fa-caret-left" />
        </div>
    )
}

export default BotaoVoltar