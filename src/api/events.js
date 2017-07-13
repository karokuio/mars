export default http => ({
  async events () {
    try {
      const RESPONSE = await http.get(
        `events`
      )

      return RESPONSE.data
    } catch (error) {
      throw error
    }
  }
})
