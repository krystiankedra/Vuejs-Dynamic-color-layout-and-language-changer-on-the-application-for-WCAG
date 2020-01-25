import { asyncComponentsSchema } from '~/helpers/Components/AsyncComponents/asyncComponentsSchema'
import { employeesWrapper } from '~/Helpers/Components/LazyLoadingComponents/lazyLoadingComponents'

// Containers
export const asyncEmployeesWrapper = () => asyncComponentsSchema(employeesWrapper)
