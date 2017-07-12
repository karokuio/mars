export default http => ({
  async list () {
    try {
      const RESPONSE = await http.get(
        `containers/json`,
        {
          params: {
            all: true
          }
        }
      )

      const KEYS = [
        'Id',
        'Created',
        'Names',
        'Image',
        'State',
        'Status',
        'Ports',
        'Labels'
      ]

      return RESPONSE.data.map(item =>
        Object.assign(
          {},
          ...KEYS.map(
            prop => ({ [prop.toLowerCase()]: item[prop] })
          )
        )
      )
    } catch (error) {
      console.error(error)
      return error
    }
  }
})
