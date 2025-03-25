import "../Styles/PaginaDeLogin.css";

const Link = ({ children }) => {
  return (
    <a href="#" className="container-links__link">
      {children}
    </a>
  );
};

export default Link;
