import { pick } from '@/helpers'

export default http => ({
  async list () {
    try {
      const RESPONSE = await http.get(
        `networks`,
      )

      const KEYS = [
        'Name',
        'Id',
        'Created',
        'Scope',
        'Containers'
      ]

      return pick(KEYS, RESPONSE.data)
    } catch (error) {
      throw error
    }
  }
})
