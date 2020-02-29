<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 v-for="({ label, text }, idx) in dynamicRender" :key="idx">
        <text-wrapper :label="label" :text="text" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { textWrapper } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  components: {
    textWrapper
  },
  props: {
    comment: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    dynamicRender() {
      const { email, name, body } = this.comment
      return [
        { text: name, label: this.$t('posts.post.comment.name') },
        { text: email, label: this.$t('posts.post.comment.email') },
        { text: body, label: this.$t('posts.post.comment.body') }
      ]
    }
  }
}
</script>
