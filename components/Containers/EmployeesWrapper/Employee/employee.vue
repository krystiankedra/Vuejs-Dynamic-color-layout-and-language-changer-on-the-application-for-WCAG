<template>
  <v-content>
    <cardWrapper>
      <template #card-title>
        <span class="title primary-card-header-text--text">
          {{ employee.firstname }} {{ employee.lastname }}
        </span>
      </template>
      <template #card-content>
        <span class="primary-card-text--text">
          Age: {{ employee.age }}
        </span>
      </template>
    </cardWrapper>
  </v-content>
</template>

<script>
import { cardWrapper } from '~/Helpers/Components/LazyLoadingComponents/lazyLoadingComponents'
export default {
  components: {
    cardWrapper,
  },
  props: {
    employee: {
      type: Object,
      default: () => {},
      required: true
    }
  }
}
</script>