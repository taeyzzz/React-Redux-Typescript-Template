import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { ApplicationSliceState } from '../../store/slices/application/initialState'
import Button from '../../components/Button/loadable'
import TextInput from '../../components/TextInput'
import { changeMessage } from '../../store/slices/application'
import { callGetPosts } from '../../store/thunk-actions/application'

function DashboardPage(): JSX.Element {
  const dispatch = useDispatch()
  const applicationData = useSelector<RootState, ApplicationSliceState>((state) => state.application)
  const [text, setText] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value)
  }

  const handleClick = (): void => {
    dispatch(changeMessage(text))
  }

  const handleLoadPost = (): void => {
    dispatch(callGetPosts())
  }

  return (
    <div>
      Dashboard Page
      <Button text="Call API Post" onClick={handleLoadPost} />
      <div>
        <div>List Post</div>
        <div>
          {applicationData.posts.map((p) => (
            <div key={p.id}>Title: {p.title}</div>
          ))}
        </div>
      </div>
      <div>
        <TextInput value={text} onChange={handleChange} />
        <Button text="Change message" onClick={handleClick} />
      </div>
      <div>Current value: {text}</div>
      <div>{applicationData.message}</div>
    </div>
  )
}

export default DashboardPage
