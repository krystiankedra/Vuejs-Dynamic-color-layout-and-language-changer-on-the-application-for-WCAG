<template>
  <v-snackbar :value="instanceAxiosCapturedError" :top="true">
    {{ errorText }}
    <v-btn
      color="primary-snackbar-text"
      text
      @click="clearError"
    >
      {{ $t('otherWords.close') }}
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { SET_ERROR } from '~/store/errors/mutationTypes'
export default {
  computed: {
    ...mapGetters([
      'error'
    ]),
    instanceAxiosCapturedError() {
      return this.error ?? false
    },
    errorStatus() {
      return this.error?.status
    },
    errorUrl() {
      return this.error?.config?.url
    },
    errorText() {
      return this.errorStatus
        ? `${this.$t('errorWords.errorOnApiCall')} - ${this.errorStatus} - ${this.errorUrl}`
        : this.$t('errorWords.errorNoDetected')
    }
  },
  methods: {
    ...mapMutations({
      'setError': SET_ERROR
    }),
    clearError() {
      this.setError(null)
    }
  }
}
</script>