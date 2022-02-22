/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post } from '../../../api-codegen'

import initialState from './initialState'

interface ChangeMessagePayload {
  message: string
}

interface SetPostsFetchStatusPayload {
  status: string
}

interface PostsPayload {
  posts: Post[]
}

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    changeMessage: {
      reducer: (state, action: PayloadAction<ChangeMessagePayload>) => {
        state.message = action.payload.message
      },
      prepare: (message: string) => ({
        payload: {
          message,
        },
      }),
    },
    setPosts: {
      reducer: (state, action: PayloadAction<PostsPayload>) => {
        state.posts = action.payload.posts
      },
      prepare: (posts: Post[]) => ({
        payload: {
          posts,
        },
      }),
    },
    setPostsFetchStatus: {
      reducer: (state, action: PayloadAction<SetPostsFetchStatusPayload>) => {
        state.getPostsFetchStatus = action.payload.status
      },
      prepare: (status: string) => ({
        payload: {
          status,
        },
      }),
    },
  },
})

export const { changeMessage, setPosts, setPostsFetchStatus } = applicationSlice.actions

export default applicationSlice.reducer
