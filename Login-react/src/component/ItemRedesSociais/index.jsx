import "../Styles/CampoDeDigitacao.css";

const ItemRedesSociais = ({ link, nome }) => {
  return (
    <li>
      <a href={link}>
        <img src={`../public/img/${nome}.svg`} alt={`Ícone do ${nome}`} />
      </a>
    </li>
  );
};

export default ItemRedesSociais;
