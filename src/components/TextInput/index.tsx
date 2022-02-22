import React from 'react'

import TextInputStyled from './styled'

export interface Props {
  value: string | number | readonly string[] | undefined
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<Props> = function ({ value, onChange }) {
  return <TextInputStyled className="border text-md mb-1.5" value={value} onChange={onChange} />
}

export default TextInput
