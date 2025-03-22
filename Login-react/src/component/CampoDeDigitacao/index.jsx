import React from "react";
import "../Styles/CampoDeDigitacao.css";

const CampoDeDigitacao = ({type, placeholder, label, id}) => {
  return (
    <div className="form__campo-digitacao">
      <label form={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        required
      />
    </div>
  );
};

export default CampoDeDigitacao;
