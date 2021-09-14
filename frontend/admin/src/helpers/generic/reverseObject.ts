const reverseObject = (obj: Record<string, string>) => {
  Object.assign({}, ...Object.entries(obj).map(([a, b]) => ({ [b]: a })))
}

export default reverseObject
