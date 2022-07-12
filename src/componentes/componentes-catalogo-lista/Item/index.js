import "./Item.css";
import ItemImagem from "../ItemImagem";
import ItemTexto from "../ItemTexto";
import ItemHiddenContainer from "../ItemHiddenContainer";


const Item = (props) => {
  return (
    <div className="container-item">
      <div className="container-img-txt">
        <ItemImagem src={require('../imagens/inversor.png')} />
        <ItemTexto />
      </div>
      <ItemHiddenContainer />
    </div>
  );
};

export default Item;
