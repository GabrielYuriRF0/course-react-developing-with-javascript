import './Form.css'
import  TextLabel from '../TextLabel/index'
import SuspenseList from '../SuspenseList/index'


const Form = () =>{
    const times = [
        "Programação", 
        "Front-End",
        "Data-Science",
        "Devops",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ]
    
    return (
        <section className='formulario'>
            <form>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <TextLabel label="Nome" place_holder = "Digite seu nome"/>
            <TextLabel label="Cargo" place_holder = "Digite seu cargo"/>
            <TextLabel label="Senha" place_holder = "Digite sua senha"/>
            <TextLabel label="Imagem" place_holder = "Informe o endereço da imagem"/>
            <SuspenseList label="Time" itens = {times}></SuspenseList>
            
            </form>
        </section>
        
    )
}

export  default Form