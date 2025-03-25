import { useState } from "react";
import Botao from "../Botao";
import CampoDeDigitacao from "../CampoDeDigitacao";
import "../Styles/CampoDeDigitacao.css";
import { Subtitle } from "../Subtitle";
import { Title } from "../Title";
import CheckBox from "../CheckBox";
import Texto from "../Texto";
import ItemRedesSociais from "../ItemRedesSociais";
import Link from "../Link";
import "../Styles/PaginaDeLogin.css";

export const PaginaDeLogin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container-login">
      <img src="./public/img/imagem-login.png" alt="Pessoa no computador" />
      <section>
        <form onSubmit={handleSubmit}>
          <Title>Login</Title>
          <Subtitle>Boas-vindas! Faça seu login</Subtitle>
          <CampoDeDigitacao
            type="email"
            placeholder="Digite o seu e-mail ou usuário"
            value={email}
            id="email"
            label="E-mail ou usuário"
            setValor={(e) => setEmail(e)}
          />
          <CampoDeDigitacao
            type="password"
            placeholder="Digite sua senha"
            id="senha"
            label="Senha"
            value={senha}
            setValor={(e) => setSenha(e)}
          />
          <fieldset className="form__opcoes">
            <CheckBox />
            <p>
              <a href="#" aria-label="Recuperar senha esquecida">
                Esqueci a senha
              </a>
            </p>
          </fieldset>
          <Botao>Login</Botao>
        </form>
        <div className="container-links">
          <Texto classe="container-links__titulo">
            ou entre com outras contas
          </Texto>
          <ul>
            <ItemRedesSociais link="https://www.github.com" nome="Github" />
            <ItemRedesSociais link="https://www.google.com" nome="Google" />
          </ul>
          <Texto classe="container-links__texto">Ainda não tem conta?</Texto>
          <Link>Crie seu cadastro!</Link>
        </div>
      </section>
    </div>
  );
};
