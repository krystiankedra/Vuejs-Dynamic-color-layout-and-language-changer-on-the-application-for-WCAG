export default {
  validate({ store }) {
    return store.getters.isAuth
  }
}
