<template>
  <async-posts-wrapper />
</template>

<script>
import providerLayoutManagement from '~/mixins/ProviderLayoutManagement/providerLayoutManagement'
import guardValidateManagement from '~/mixins/GuardValidateManagement/guardValidateManagement'
import { GET_POSTS } from '~/store/posts/actionTypes'
import { asyncPostsWrapper } from '~/commons/Components/AsyncComponents/asyncComponents'

export default {
  components: {
    asyncPostsWrapper
  },
  mixins: [guardValidateManagement, providerLayoutManagement],
  created() {
    this.$store.dispatch(GET_POSTS)
  }
}
</script>
