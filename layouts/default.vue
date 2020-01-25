<template>
  <v-app>
    <client-only>
      <vuetify-themes />
      <nuxt />
    </client-only>
  </v-app>
</template>

<script>
import { vuetifyThemes } from '~/Helpers/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  components: {
    vuetifyThemes
  }
}
</script>
