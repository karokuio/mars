import { pick } from '@/helpers'

export default http => ({
  async list () {
    try {
      const RESPONSE = await http.get(
        `images/json`,
        {
          params: {
            all: true
          }
        }
      )

      return pick(['Id', 'Created', 'Size', 'RepoTags'], RESPONSE.data)
    } catch (error) {
      console.error(error)
      return error
    }
  }
})
