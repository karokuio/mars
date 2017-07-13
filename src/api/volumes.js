export default http => ({
  async list () {
    try {
      const RESPONSE = await http.get(
        `volumes`,
      )

      return RESPONSE.data
    } catch (error) {
      throw error
    }
  }
})
