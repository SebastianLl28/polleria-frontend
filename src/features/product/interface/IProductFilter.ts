export interface IProductFilter {
  name: string
  categoryId: number | null
  page: number
  size: number
  sort: string
}
