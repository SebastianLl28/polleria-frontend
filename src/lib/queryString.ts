import queryString from 'query-string'

export const convertObjectToQueryString = (
  obj: Record<string, string | number | null | undefined>
) => {
  return queryString.stringify(obj, {
    skipEmptyString: true,
    skipNull: true,
    arrayFormat: 'comma'
  })
}
