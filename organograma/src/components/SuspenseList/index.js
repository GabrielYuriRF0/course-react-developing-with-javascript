import './style.css'
const SuspenseList = (props) => {
    return (
        <div className='suspense-list'>
            <label>{props.label}</label>
            <select>{props.itens.map(item =>{
                return <option>{item}</option> 
            })}
            </select>
        </div>


    )
}

export default SuspenseList
