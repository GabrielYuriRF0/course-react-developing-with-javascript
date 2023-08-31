import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form/index";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  const [colaboradores, setColaborador] = useState([]);
  const addNovoColaborador = (colaborador) => {
    setColaborador([...colaboradores, colaborador]);
  };

  const times = [
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secundaryColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secundaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secundaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#D86EBF",
      secundaryColor: "#FAE5F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FEBA05",
      secundaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secundaryColor: "#FFEEDF",
    },
  ];
  return (
    <div className="App">
      <Banner></Banner>
      <Form
        addColaborador={(colaborador) => addNovoColaborador(colaborador)}
        times={times.map((time) => time.name)}
      ></Form>
      {times.map((time) => (
        <Team
          key={time.name}
          name={time.name}
          primaryColor={time.primaryColor}
          secundaryColor={time.secundaryColor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.name
          )}
        ></Team>
      ))}
      <Footer />
    </div>
  );
}

export default App;
