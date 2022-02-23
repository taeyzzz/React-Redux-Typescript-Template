import { useQuery, UseQueryResult } from 'react-query'
import { Comment, CommentsApi } from '../../../../../api-codegen'

const commentsAPI = new CommentsApi()

export const USE_QUERY_GET_COMMENT = 'USE_QUERY_GET_COMMENT'

const useComment = (id: number): UseQueryResult<Comment, unknown> => useQuery([USE_QUERY_GET_COMMENT, id], async () => {
    const response = await commentsAPI.getCommentId(id)
    return response.data
  })
export default useComment
