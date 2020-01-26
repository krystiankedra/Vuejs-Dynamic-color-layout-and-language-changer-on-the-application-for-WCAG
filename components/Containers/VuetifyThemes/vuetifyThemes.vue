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
import vuetifyThemesManagement from '~/mixins/VuetifyThemesManagement/vuetifyThemesManagement'
import { comboboxEmitter } from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  components: {
    comboboxEmitter
  },
  mixins: [vuetifyThemesManagement]
}
</script>