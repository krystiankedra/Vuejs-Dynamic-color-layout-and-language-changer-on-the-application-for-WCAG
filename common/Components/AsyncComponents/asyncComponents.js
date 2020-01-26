import { asyncComponentsSchema } from '~/common/Components/AsyncComponents/asyncComponentsSchema'
import { employeesWrapper } from '~/common/Components/LazyLoadingComponents/lazyLoadingComponents'

// Containers
export const asyncEmployeesWrapper = () => asyncComponentsSchema(employeesWrapper)
