<template>
  <v-container>
    <v-layout>
      <v-flex xs12 lg6>
        <async-employees-wrapper />
      </v-flex>
  </v-layout>
  </v-container>
</template>


<script>
import { asyncEmployeesWrapper } from '~/Helpers/Components/AsyncComponents/AsyncComponents'
export default {
  components: {
    asyncEmployeesWrapper
  }
}
</script>