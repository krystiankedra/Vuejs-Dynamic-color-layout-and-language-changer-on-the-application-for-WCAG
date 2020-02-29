<template>
  <v-container>
    <combobox-emitter :item.sync="selectedTheme" :items="themeVariants">
      <template #field-label>
        {{ $t('otherWords.selectTheme') }}
      </template>
    </combobox-emitter>
  </v-container>
</template>

<script>
import vuetifyThemesManagement from '~/mixins/VuetifyThemesManagement/vuetifyThemesManagement'
import { comboboxEmitter } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  components: {
    comboboxEmitter
  },
  mixins: [vuetifyThemesManagement]
}
</script>
