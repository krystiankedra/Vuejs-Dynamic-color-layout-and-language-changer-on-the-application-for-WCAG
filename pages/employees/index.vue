<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <async-employees-wrapper />
      </v-flex>
  </v-layout>
  </v-container>
</template>


<script>
import { asyncEmployeesWrapper } from '~/common/Components/AsyncComponents/asyncComponents'
export default {
  components: {
    asyncEmployeesWrapper
  }
}
</script>