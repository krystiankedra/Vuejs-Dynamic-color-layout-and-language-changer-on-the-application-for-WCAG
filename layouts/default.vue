<template>
  <v-app>
    <client-only>
      <navigation-wrapper />
      <v-content>
        <v-container fluid>
          <axios-information-wrapper />
          <application-management-wrapper />
          <nuxt />
        </v-container>
      </v-content>
    </client-only>
  </v-app>
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
