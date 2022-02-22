import { Post } from '../../../api-codegen'

export interface ApplicationSliceState {
  message: string
  posts: Post[]
  getPostsFetchStatus: string
}

const initialState: ApplicationSliceState = {
  message: 'hello world',
  posts: [],
  getPostsFetchStatus: 'idle',
}

export default initialState
