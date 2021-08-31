import { dbKeySplit } from 'constants/db/db'

export const addDBKey = (key: string, item: string) => {
  const value = `${key}${dbKeySplit}${item}`
  return value
}

export const removeDBKey = (item: string) => {
  const [_, value] = item.split(dbKeySplit)
  return value
}

export const formatDBResponse = (item: any, pkKey = 'id', skKey = 'option') => {
  if (Array.isArray(item)) {
    return formatArrayResponse(item, pkKey, skKey)
  }

  return formatObjectResponse(item, pkKey, skKey)
}

export const formatObjectResponse = (
  item: any,
  pkKey: string,
  skKey: string
) => {
  const { pk, sk, ...obj } = item

  return {
    ...obj,
    [pkKey]: pk,
    [skKey]: sk,
  }
}

export const formatArrayResponse = (
  item: any,
  pkKey: string,
  skKey: string
) => {
  return item.map((value: { [x: string]: any; pk: string; sk: string }) => {
    const { pk, sk, ...obj } = value

    return {
      ...obj,
      [pkKey]: pk,
      [skKey]: sk,
    }
  })
}
