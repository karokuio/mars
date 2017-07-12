export function pick (keys, array) {
  return array.map(item =>
    Object.assign(
      {},
      ...keys.map(
        prop => ({ [prop.toLowerCase()]: item[prop] })
      )
    )
  )
}
