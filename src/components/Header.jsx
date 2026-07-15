import "./Header.css";

// props - propriedades de um componente
function Header({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  );
}

export default Header;