import "./style.css";
const SuspenseList = (props) => {
  const onDigit = (event) => {
    props.update_value(event.target.value);
  };
  return (
    <div className="suspense-list" onChange={onDigit}>
      <label>{props.label}</label>
      <select>
        {props.itens.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default SuspenseList;
