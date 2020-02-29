export default {
  data: () => ({
    currentLocale: null
  }),
  computed: {
    locales() {
      return [
        { value: 'English', key: 'en' },
        { value: 'Polish', key: 'pl' }
      ]
    },
    updateLocale: {
      get() {
        return this.currentLocale
      },
      set(newLocale) {
        this.currentLocale = newLocale
        this.$nextTick(() => this.switchLocale())
      }
    }
  },
  methods: {
    switchLocale() {
      document.getElementById('localePathSwitcher').click()
    },
    setCurrenLocaleOnStart() {
      const currentObjectOnStart = this.locales.find(locale => this.$route.name.includes(locale.key))
      this.currentLocale = currentObjectOnStart
    }
  },
  created() {
    this.setCurrenLocaleOnStart()
  }
}
