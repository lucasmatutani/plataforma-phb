import './Formulario.css'

const Formulario = (props) => {
    return(
        <section className='formulario'>
            <form>
                {props.children}
            </form>
        </section>
    )
}

export default Formulario;