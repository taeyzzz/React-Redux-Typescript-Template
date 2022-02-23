import { useMutation, UseMutationResult } from 'react-query'
import { Comment, CommentsApi, CreateCommentData } from '../../../../../api-codegen'

const commentsAPI = new CommentsApi()

export const USE_MUTATION_CREATE_COMMENT = 'USE_MUTATION_CREATE_COMMENT'

const useCreateComment = (): UseMutationResult<Comment, unknown, CreateCommentData, unknown> => useMutation(async (data: CreateCommentData) => {
    const response = await commentsAPI.createComments(data)
    return response.data
  })
export default useCreateComment
