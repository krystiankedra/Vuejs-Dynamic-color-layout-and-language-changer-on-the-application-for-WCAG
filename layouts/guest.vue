<template>
  <v-app>
    <client-only>
      <v-content>
        <v-container fluid>
          <application-management-wrapper />
          <nuxt />
        </v-container>
      </v-content>
    </client-only>
  </v-app>
</template>


<script>
import { applicationManagementWrapper } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  components: {
    applicationManagementWrapper
  }
}
</script>