import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Header = () => {
  return (
    <header className="flex align-items-center justify-content-between p-3 surface-0 border-round-bottom">
      <div className="logo">
        <img src="src/assets/logo-header.svg" alt="Logo" />
      </div>
      <InputText placeholder="Buscar produtos..." className="p-mr-2" />
      <nav>
        <Link to="/" className="p-button p-button-text">
          Home
        </Link>
        <Link to="/products" className="p-button p-button-text">
          Produtos
        </Link>
        <Link to="/categories" className="p-button p-button-text">
          Categorias
        </Link>
        <Link to="/orders" className="p-button p-button-text">
          Meus Pedidos
        </Link>
        <Link to="/login" className="p-button p-button-text">
          Entrar
        </Link>
        <Link to="/register" className="p-button p-button-text">
          Cadastre-se
        </Link>
      </nav>
    </header>
  );
};

export default Header;
