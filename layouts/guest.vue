<template>
  <client-only>
    <v-app>
      <v-content>
        <v-container fluid>
          <application-management-wrapper />
          <nuxt />
        </v-container>
      </v-content>
    </v-app>
  </client-only>
</template>


<script>
import { applicationManagementWrapper } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  components: {
    applicationManagementWrapper
  }
}
</script>