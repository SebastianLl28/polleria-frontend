export interface IPagination<T> {
  content: T[]
  pageable: Pageable
  last: boolean
  totalPages: number
  totalElements: number
  size: number
  number: number
  sort: Sort2
  numberOfElements: number
  first: boolean
  empty: boolean
}

interface Pageable {
  pageNumber: number
  pageSize: number
  sort: Sort
  offset: number
  paged: boolean
  unpaged: boolean
}

interface Sort {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

interface Sort2 {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}
