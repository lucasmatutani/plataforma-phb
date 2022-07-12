import "./App.css";
import Formulario from "./componentes/componentes-formulario/Formulario";
import CampoPesquisa from "./componentes/componentes-formulario/CampoPesquisa";
import Botao from "./componentes/componentes-formulario/Botao";
import RadioFiltro from "./componentes/componentes-formulario/RadioFiltro";
import ContainerRadioFiltro from "./componentes/componentes-formulario/ContainerRadioFiltro";
import BotaoVoltar from './componentes/componentes-catalogo-lista/BotaoVoltar/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContainerCatalogoLista from "./componentes/componentes-catalogo-lista/ContainerCatalogoLista";

function App() {
  return (
    <div className="App">
      <Formulario>
        <CampoPesquisa />
        <ContainerRadioFiltro />
      </Formulario>
      <ContainerCatalogoLista />
    </div>
  );
}

export default App;
