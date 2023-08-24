import Card from "../Card";
import "./style.css";
const Team = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: props.secundaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>

        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Card
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
