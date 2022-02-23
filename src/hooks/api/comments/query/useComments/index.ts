import { useQuery, UseQueryResult } from 'react-query'
import { Comment, CommentsApi } from '../../../../../api-codegen'

const commentsAPI = new CommentsApi()

export const USE_QUERY_GET_ALL_COMMENTS = 'USE_QUERY_GET_ALL_COMMENTS'

const useComments = (): UseQueryResult<Comment[], unknown> => useQuery(USE_QUERY_GET_ALL_COMMENTS, async () => {
    const response = await commentsAPI.getListComments()
    return response.data
  })
export default useComments
