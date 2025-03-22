import React from "react";
import "../Styles/PaginaDeLogin.css"

export const Title = ({children}) => {
  return (
    <div>
      <h1 className="form__titulo">{children}</h1>
    </div>
  );
};
