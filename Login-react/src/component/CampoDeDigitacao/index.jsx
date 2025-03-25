import React from "react";
import "../Styles/CampoDeDigitacao.css";

const CampoDeDigitacao = ({
  type,
  placeholder,
  label,
  id,
  value,
  setValor,
}) => {
  return (
    <div className="form__campo-digitacao">
      <label form={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={(e) => setValor(e.target.value)}
        required
      />
    </div>
  );
};

export default CampoDeDigitacao;
