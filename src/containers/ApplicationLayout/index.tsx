import React from 'react'
import { Outlet } from 'react-router-dom'

import ApplicationLayoutStyled from './styled'

export interface Props {}

const ApplicationLayout: React.FC<Props> = function () {
  return (
    <ApplicationLayoutStyled className="font-arabic">
      Header
      <div className="container">
        <Outlet />
      </div>
    </ApplicationLayoutStyled>
  )
}

export default ApplicationLayout
