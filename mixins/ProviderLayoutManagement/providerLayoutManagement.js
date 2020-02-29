export default {
  layout({ store }) {
    return store.getters.isAuth ? 'default' : 'guest'
  }
}