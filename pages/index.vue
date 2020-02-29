<template>
  <login />
</template>

<script>
import providerLayoutManagement from '~/mixins/ProviderLayoutManagement/providerLayoutManagement'
import { login } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  components: {
    login
  },
  mixins: [providerLayoutManagement]
}
</script>
