<template>
  <pageWrapper>
    <template #page-title>
      <span class="title primary-card-header-text--text">
        {{ $t('employees.pageHeader') }}
      </span>
    </template>
    <template #page-content>
      <v-layout row wrap>
        <v-flex v-for="(employee, idx) in employees" :key="idx" xs12 lg6 pl-2 pr-2 my-2>
          <empoloyee :employee="employee" />
        </v-flex>
      </v-layout>
    </template>
  </pageWrapper>
</template>

<script>
import employeesManagement from '~/mixins/EmployeesManagement/employeesManagement'
import { empoloyee, pageWrapper } from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  mixins: [employeesManagement],
  components: {
    empoloyee,
    pageWrapper
  }
}
</script>