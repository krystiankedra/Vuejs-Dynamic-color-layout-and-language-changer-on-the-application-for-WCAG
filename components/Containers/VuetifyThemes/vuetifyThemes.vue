<template>
  <v-container>
    <combobox-emitter :item.sync="selectedTheme" :items="themeVariants">
      <template #field-label>
        Select theme
      </template>
    </combobox-emitter>
  </v-container>
</template>

<script>
import vuetifyThemesManagement from '~/mixins/vuetifyThemesManagement'
import { comboboxEmitter } from '~/Helpers/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  components: {
    comboboxEmitter
  },
  mixins: [vuetifyThemesManagement]
}
</script>