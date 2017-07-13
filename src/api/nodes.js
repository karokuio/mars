export default http => ({
  async list () {
    try {
      const RESPONSE = await http.get(
        `nodes`,
      )

      return RESPONSE.data
    } catch (error) {
      throw error
    }
  }
})
