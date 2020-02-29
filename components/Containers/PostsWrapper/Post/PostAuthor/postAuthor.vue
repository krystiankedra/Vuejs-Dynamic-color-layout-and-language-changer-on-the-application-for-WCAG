<template>
  <expansion-panel-wrapper>
    <template #expansion-panel-header>
      {{ $t('posts.post.informationAboutAuthor') }}
    </template>
    <template #expansion-panel-content>
      <v-layout row wrap>
        <v-flex xs12 v-for="({ label, text }, idx) in dynamicRender" :key="idx" pt-2>
          <text-wrapper :label="label" :text="text" />
        </v-flex>
      </v-layout>
    </template>
  </expansion-panel-wrapper>
</template>

<script>
import { expansionPanelWrapper, textWrapper } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  components: {
    expansionPanelWrapper,
    textWrapper
  },
  props: {
    author: {
      type: Object,
      default: () => ''
    }
  },
  computed: {
    dynamicRender() {
      const {
        name,
        username,
        email,
        phone,
        website,
        address: { street, city, zipcode },
        company
      } = this.author
      return [
        { label: this.$t('posts.post.author.name'), text: name },
        { label: this.$t('posts.post.author.username'), text: username },
        { label: this.$t('posts.post.author.email'), text: email },
        { label: this.$t('posts.post.author.phone'), text: phone },
        { label: this.$t('posts.post.author.website'), text: website },
        { label: this.$t('posts.post.author.address.street'), text: street },
        { label: this.$t('posts.post.author.address.city'), text: city },
        { label: this.$t('posts.post.author.address.zipcode'), text: zipcode },
        { label: this.$t('posts.post.author.company.name'), text: company.name }
      ]
    }
  }
}
</script>
