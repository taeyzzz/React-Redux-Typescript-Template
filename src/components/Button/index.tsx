import React from 'react'

import ButtonStyled from './styled'

export interface Props {
  text: string
  onClick?: () => void
}

const Button: React.FC<Props> = function ({ text, onClick }) {
  return (
    <ButtonStyled className="bg-blue-400 text-white rounded-full py-3 px-6 text-sm" onClick={onClick}>
      {text}
    </ButtonStyled>
  )
}

export default Button
