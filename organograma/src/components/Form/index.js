import "./style.css";
import TextLabel from "../TextLabel/index";
import SuspenseList from "../SuspenseList/index";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    props.addColaborador({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };
  return (
    <section className="formulario">
      <form onSubmit={formSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextLabel
          value={nome}
          update_value={(value) => setNome(value)}
          required={true}
          label="Nome"
          place_holder="Digite seu nome"
        />
        <TextLabel
          value={cargo}
          update_value={(value) => setCargo(value)}
          required={true}
          label="Cargo"
          place_holder="Digite seu cargo"
        />

        <TextLabel
          value={imagem}
          update_value={(value) => setImagem(value)}
          label="Imagem"
          place_holder="Informe o endereço da imagem"
        />
        <SuspenseList
          value={time}
          update_value={(value) => setTime(value)}
          label="Time"
          itens={props.times}
        ></SuspenseList>

        <Button label="Criar card"></Button>
      </form>
    </section>
  );
};

export default Form;
