import BotaoVoltar from "../BotaoVoltar";
import Item from "../Item";
import Titulo from "../Titulo";
import "./ContainerCatalogoLista.css";

const ContainerCatalogoLista = (props) => {
  return (
    <div className="container-catalogo-lista">
      <Titulo nome='Inversores On Grid' />
      <Item />
    </div>
  );
};

export default ContainerCatalogoLista;
