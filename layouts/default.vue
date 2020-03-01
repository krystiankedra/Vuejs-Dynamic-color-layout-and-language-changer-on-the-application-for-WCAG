<template>
  <client-only>
    <v-app>
      <navigation-wrapper />
      <v-content>
        <v-container fluid>
          <axios-information-wrapper />
          <application-management-wrapper />
          <nuxt />
        </v-container>
      </v-content>
    </v-app>
  </client-only>
</template>

<script>
import {
  applicationManagementWrapper,
  axiosInformationWrapper,
  navigationWrapper
} from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  components: {
    applicationManagementWrapper,
    axiosInformationWrapper,
    navigationWrapper
  }
}
</script>
