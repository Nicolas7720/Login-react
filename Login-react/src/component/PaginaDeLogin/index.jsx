import Botao from "../Botao";
import CampoDeDigitacao from "../CampoDeDigitacao";
import "../Styles/CampoDeDigitacao.css";
import { Subtitle } from "../Subtitle";
import { Title } from "../Title";

export const PaginaDeLogin = () => {
  return (
    <div className="container-login">
      <img src="./public/img/imagem-login.png" alt="Pessoa no computador" />
      <section>
        <form>
          <Title>Login</Title>
          <Subtitle>Boas-vindas! Faça seu login</Subtitle>
          <CampoDeDigitacao
            type="email"
            placeholder="Digite o seu e-mail ou usuário"
            id="email"
            label="E-mail ou usuário"
          />
          <CampoDeDigitacao
            type="password"
            placeholder="Digite sua senha"
            id="senha"
            label="Senha"
          />
          <Botao>Login</Botao>
        </form>
      </section>
    </div>
  );
};
