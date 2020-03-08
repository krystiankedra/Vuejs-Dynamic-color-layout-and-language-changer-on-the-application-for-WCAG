<template>
  <v-container>
    <card-wrapper>
      <template #card-title>
        <span class="headline primary-card-header-text--text">
          {{ $t('otherWords.loginCardHeaderText') }}
        </span>
      </template>
      <template #card-content>
        <v-row>
          <span class="title primary-card-text--text">
            {{ $t('otherWords.loginInformationText') }}
          </span>
        </v-row>
        <v-row class="pt-2">
          <v-btn @click="login" class="primary-button-background primary-button-text-on-background--text">
            {{ logTypeBtn }}
          </v-btn>
        </v-row>
      </template>
    </card-wrapper>
  </v-container>
</template>

<script>
import { cardWrapper } from '~/commons/Components/LazyLoadingComponents/lazyLoadingComponents'
import { SET_USER_AUTH } from '~/store/auth/mutationTypes'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    cardWrapper
  },
  computed: {
    ...mapGetters([
      'isAuth'
    ]),
    logTypeBtn() {
      return this.isAuth ? this.$t('otherWords.logout') : this.$t('otherWords.login')
    }
  },
  methods: {
    ...mapMutations({
      'setUserAuth': SET_USER_AUTH
    }),
    navigateToAfterLogType() {
      this.isAuth ? this.$router.push('/posts') : this.$router.push('/')
    },
    changeUserAuthState() {
      this.setUserAuth(!this.isAuth)
    },
    login() {
      this.changeUserAuthState()
      this.navigateToAfterLogType()
    }
  }
}
</script>
