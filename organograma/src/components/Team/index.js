import Card from "../Card";
import "./style.css";
const Team = (props) => {
  return (
    <section className="time" style={{ backgroundColor: props.secundaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      {props.colaboradores.map((colaborador) => (
        <Card />
      ))}
    </section>
  );
};

export default Team;
