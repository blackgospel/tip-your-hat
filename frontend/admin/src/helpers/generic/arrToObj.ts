const arrToObj = (arr: any[], key?: string) => {
  return arr.reduce(
    (res: { [x: string]: any[] }, item: { [x: string]: any }, index: any) => {
      const customKey = key ? item[key] : index
      if (customKey in res) {
        res[customKey] = [...res[customKey], { ...item }]
      } else {
        res[customKey] = [{ ...item }]
      }
      return res
    },
    {}
  )
}

export default arrToObj
