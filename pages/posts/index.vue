<template>
  <async-posts-wrapper />
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import providerLayoutManagement from '~/mixins/ProviderLayoutManagement/providerLayoutManagement'
import guardValidateManagement from '~/mixins/GuardValidateManagement/guardValidateManagement'
import { GET_POSTS } from '~/store/posts/actionTypes'
import { CLEAR_POSTS } from '~/store/posts/mutationTypes'
import { asyncPostsWrapper } from '~/commons/Components/AsyncComponents/asyncComponents'

export default {
  components: {
    asyncPostsWrapper
  },
  mixins: [guardValidateManagement, providerLayoutManagement],
  created() {
    this.getPosts()
  },
  destroyed() {
    this.clearPosts()
  },
  methods: {
    ...mapMutations({
      'clearPosts': CLEAR_POSTS
    }),
    ...mapActions({
      'getPosts': GET_POSTS
    })
  }
}
</script>
