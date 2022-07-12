import "./ContainerRadioFiltro.css";
import RadioFiltro from "../RadioFiltro";

const ContainerRadioFiltro = (props) => {
  return (
      <div className="ContainerRadios">
        <div className="ContainerRadioFiltroPotencia">
          Potencia
          <RadioFiltro nome="potencia" texto="0 - 10K" />
          <RadioFiltro nome="potencia" texto="10 - 36K" />
          <RadioFiltro nome="potencia" texto="36 - 125K" />
          <RadioFiltro nome="potencia" texto="Todos" />
        </div>
        <div className="ContainerRadioFiltroTensao">
          Tensão
          <RadioFiltro nome="tensao" texto="Trifásico 380/220V" />
          <RadioFiltro nome="tensao" texto="Trifásico 220/127V" />
          <RadioFiltro nome="tensao" texto="Monofásico 220/127V" />
          <RadioFiltro nome="tensao" texto="Todos" />
        </div>
      </div>
  );
};

export default ContainerRadioFiltro;
