import React from 'react'
import "../Styles/PaginaDeLogin.css"

export const Subtitle = ({children}) => {
  return (
    <div>
        <h2 className='form__texto'>{children}</h2>
    </div>
  )
}
