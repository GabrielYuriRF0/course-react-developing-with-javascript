import './TextLabel.css'
const TextLabel = (props) => {
    return (
        <div className='text-label'>
            <label>{props.label}</label>
            <input placeHolder={props.place_holder}/>
        </div>

    )
}

export default TextLabel