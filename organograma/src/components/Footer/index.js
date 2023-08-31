import "./style.css";
const Footer = () => {
  return (
    <div className="footer">
      <img
        id="organo-icon"
        src="../../../images/logo.png"
        alt="Imagem de fundo do rodapé"
      ></img>

      <div className="social-icons">
        <img id="facebook-icon" src="../../../images/fb.png"></img>
        <img id="twitter-icon" src="../../../images/tw.png"></img>
        <img id="instagram-icon" src="../../../images/ig.png"></img>
      </div>
    </div>
  );
};
export default Footer;
