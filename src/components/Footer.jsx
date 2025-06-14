
import { Divider } from "primereact/divider";

const Footer = () => {
  return (
    <footer className="p-p-4">
      <Divider align="center" />
      <div className="info">
        <h3>Sobre a Drip Store</h3>
        <p>Descrição da empresa...</p>
      </div>
      <div className="social">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </div>
      <p>© 2024 Digital Store</p>
    </footer>
  );
};

export default Footer;
