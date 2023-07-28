import "./style.css";
const TextLabel = (props) => {
  return (
    <div className="text-label">
      <label>{props.label}</label>
      <input placeHolder={props.place_holder} required={props.required} />
    </div>
  );
};

export default TextLabel;
