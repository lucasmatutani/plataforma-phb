import "./CampoPesquisa.css";
import Botao from "../Botao";

const CampoPesquisa = (props) => {
  return (
    <div className="containerCampoPesquisa">
      <div className="CampoPesquisa">
        <input
          type="text"
          placeholder={props.placeholder}
          value={props.valor}
        />
      </div>
      <Botao texto="Limpar" />
    </div>
  );
};

export default CampoPesquisa;
