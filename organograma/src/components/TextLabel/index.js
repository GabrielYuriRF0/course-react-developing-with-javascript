import "./style.css";

const TextLabel = (props) => {
  const onDigit = (event) => {
    props.update_value(event.target.value);
  };

  return (
    <div className="text-label">
      <label>{props.label}</label>
      <input
        value={props.value}
        placeholder={props.place_holder}
        required={props.required}
        onChange={onDigit}
      />
    </div>
  );
};

export default TextLabel;
