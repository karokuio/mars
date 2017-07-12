import { pick } from '@/helpers'

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

      return pick(KEYS, RESPONSE.data)
    } catch (error) {
      throw error
    }
  }
})
