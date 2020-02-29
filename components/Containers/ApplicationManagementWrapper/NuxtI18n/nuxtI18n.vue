<template>
  <v-container>
    <nuxt-link v-show="false" id="localePathSwitcher" :to="switchLocalePath(updateLocale.key)" />
    <combobox-emitter :items="locales" :item.sync="updateLocale">
      <template #field-label>
        {{ $t('otherWords.selectLanguage') }}
      </template>
    </combobox-emitter>
  </v-container>
</template>

<script>
import { comboboxEmitter } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'
import nuxtI18nManagement from '~/mixins/NuxtI18nManagement/nuxtI18nManagement'
export default {
  mixins: [nuxtI18nManagement],
  components: {
    comboboxEmitter
  }
}
</script>
