export const getPosts = async (payload) => {
    const { $api } = payload
    const response = await $api.get(`posts`)
    return response.data
}

export const getCommnetsByPostId = async (payload) => {
  const { $api, post } = payload
  const response = await $api.get(`comments?postId=${post.id}`)
  return response.data
}

export const getUserById = async (payload) => {
  const { $api, id } = payload
  const response = await $api.get(`users/${id}`)
  return response.data
}

export async function *mergePostWithCommentsAndAuthors(payload) {
  const { $api, posts } = payload
  for (const post of posts) {
    const [ author, comments ] = await Promise.all([
      getUserById({ $api, id: post.userId }),
      getCommnetsByPostId({ $api, post })
    ])
    yield {
      ...post,
      comments,
      author
    }
  }
}
