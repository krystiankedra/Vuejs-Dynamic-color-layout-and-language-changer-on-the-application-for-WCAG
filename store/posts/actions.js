import { SET_POSTS } from '~/store/posts/mutationTypes'
import { getPosts, mergePostWithCommentsAndAuthors } from '~/commons/Api/Posts/posts'

export default {
  async getPosts({ commit }) {
    const { $api } = this
    const posts = await getPosts({ $api })
    const iterator = mergePostWithCommentsAndAuthors({ $api, posts })
    for await (const post of iterator) {
      commit(SET_POSTS, post)
    }
  }
}
