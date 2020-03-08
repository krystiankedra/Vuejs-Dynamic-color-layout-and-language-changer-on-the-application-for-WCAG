export const getAuthorPostFromState = (payload) => {
  const { posts, post } = payload
  return posts.find(existedPost => existedPost.userId === post.userId)?.author
}