export const removeEmptyValues = (
  collection: any[] | { [value: string]: any }
) => {
  if (Array.isArray(collection) || typeof collection !== 'object')
    return collection

  if (Array.isArray(collection)) {
    return collection.filter(Boolean)
  }

  return Object.fromEntries(
    Object.entries(collection).filter(
      ([_, item]) => item !== null || item !== undefined || item !== ''
    )
  )
}
