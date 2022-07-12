import './RadioFiltro.css'

const RadioFiltro = (props) => {
    return(
        <label className='radio-filtro'>
            <input type="radio" name={props.nome} value={props.value} id={props.id}  />
            {props.texto}
        </label>
    )
}

export default RadioFiltro;