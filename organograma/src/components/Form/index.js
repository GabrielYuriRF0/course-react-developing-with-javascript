import "./style.css";
import TextLabel from "../TextLabel/index";
import SuspenseList from "../SuspenseList/index";
import Button from "../Button";

const Form = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data-Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const formSubmit = (event) => {
    event.preventDefault();
    window.alert("Formulário preenchido com sucesso!");

  };
  return (
    <section className="formulario">
      <form onSubmit={formSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextLabel required ={true} label="Nome" place_holder="Digite seu nome" />
        <TextLabel required = {true}label="Cargo" place_holder="Digite seu cargo" />
        <TextLabel required = {true} label="Senha" place_holder="Digite sua senha" />
        <TextLabel label="Imagem" place_holder="Informe o endereço da imagem" />
        <SuspenseList label="Time" itens={times}></SuspenseList>

        <Button label="Criar card"></Button>
      </form>
    </section>
  );
};

export default Form;
