export default {
  data: () => ({
    currentTheme: {
      value: 'Standard',
      key: 'light'
    },
    themeVariants: [
      { value: 'Standard', key: 'light' },
      { value: 'Black-white', key: 'black' },
      { value: 'Yellow-Black', key: 'yellow' }
    ]
  }),
  computed: {
    isSelectedLightTheme() {
      return this.currentTheme.key === 'light'
    },
    selectedTheme: {
      get() {
        return this.currentTheme
      },
      set(value) {
        this.currentTheme = value
        this.$nextTick(() => this.$vuetify.theme.dark = !this.isSelectedLightTheme)
        if (!this.isSelectedLightTheme) this.changeDarkTheme(value.key)
      }
    }
  },
  methods: {
    changeDarkTheme(theme) {
      const selectedDarkThemeObject = this.$vuetify.theme.themes.dark[theme]
      Object.entries(selectedDarkThemeObject).forEach((item) => this.$vuetify.theme.themes.dark[item[0]] = item[1])
    }
  }
}
