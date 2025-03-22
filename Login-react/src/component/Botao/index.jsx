import "../Styles/PaginaDeLogin.css";

const Botao = ({ children }) => {
  return (
    <button className="form__botao" type="submit">
      {children}
    </button>
  );
};

export default Botao;
