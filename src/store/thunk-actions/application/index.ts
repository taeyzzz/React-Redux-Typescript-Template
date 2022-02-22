import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../..'
import { PostApi } from '../../../api-codegen'
import { setPostsFetchStatus, setPosts } from '../../slices/application'

export const callGetPosts = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  dispatch(setPostsFetchStatus('request'))
  try {
    const postAPI = new PostApi()
    const response = await postAPI.getListPosts()
    dispatch(setPosts(response.data))
    dispatch(setPostsFetchStatus('success'))
  } catch (error) {
    dispatch(setPostsFetchStatus('failure'))
  } finally {
    dispatch(setPostsFetchStatus('idle'))
  }
}

export const TEST = 'test'
