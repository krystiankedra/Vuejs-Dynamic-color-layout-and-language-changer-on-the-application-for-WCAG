import errorWrapper from '~/components/Presentionals/ErrorWrapper/errorWrapper'

export const asyncComponentsSchema = (component) => ({
  component: new Promise((resolve) => {
    setTimeout(() => resolve(component()), 1000)
  }),
  error: errorWrapper,
  timeout: 2000
})