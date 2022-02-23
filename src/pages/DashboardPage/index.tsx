import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useLocation, useNavigate } from 'react-router-dom'
import { RootState } from '../../store'
import { ApplicationSliceState } from '../../store/slices/application/initialState'
import Button from '../../components/Button/loadable'
import TextInput from '../../components/TextInput'
import { changeMessage } from '../../store/slices/application'
import { callGetPosts } from '../../store/thunk-actions/application'
import useComments from '../../hooks/api/comments/query/useComments'
import useCreateComment from '../../hooks/api/comments/mutation/useCreateComment'
import useComment from '../../hooks/api/comments/query/useComment'

function DashboardPage(): JSX.Element {
  const location = useLocation()
  const navigate = useNavigate()

  const { data: comments, isFetching, isLoading, refetch } = useComments()
  const { data: comment } = useComment(parseInt(location.search.substring(location.search.length - 1), 10))
  const { mutateAsync } = useCreateComment()
  const dispatch = useDispatch()
  const applicationData = useSelector<RootState, ApplicationSliceState>((state) => state.application)
  const [text, setText] = useState('')
  const [c, sc] = useState(1)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value)
  }

  const handleClick = (): void => {
    refetch()
    dispatch(changeMessage(text))
  }

  const handleLoadPost = (): void => {
    dispatch(callGetPosts())
  }

  const handleCallMutation = async (): Promise<void> => {
    await mutateAsync({ body: 'mutation', postId: 2 })
    refetch()
    navigate(`/dashboard?id=${c + 1}`)
    sc(c + 1)
  }

  return (
    <div>
      Dashboard Page
      <Button text="Call API Post" onClick={handleLoadPost} />
      <Button text="Mutation Call" onClick={handleCallMutation} />
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
      <div>
        <div>Comments-isFetching: {isFetching ? 'isFetching' : ''}</div>
        <div>Comments-isLoading: {isLoading ? 'isLoading' : ''}</div>
        <div>
          {comments?.map((cc) => (
            <div key={cc.id}>{cc.body}</div>
          ))}
        </div>
      </div>
      <div>Comment ID: 1: {comment?.body}</div>
    </div>
  )
}

export default DashboardPage
