export default http => ({
  async info () {
    try {
      const RESPONSE = await http.get(
        `info`
      )

      // return pick([
      //   'Architecture',
      //   'ContainersRunning',
      //   'ContainersStopped',
      //   'ContainersPaused',
      //   'MemTotal',
      //   'OSType',
      //   'ServerVersion'
      // ], RESPONSE.data)
      return RESPONSE.data
    } catch (error) {
      throw error
    }
  },
  async version () {
    try {
      const RESPONSE = await http.get(
        `version`
      )

      // return pick([
      //   'Version',
      //   'Os',
      //   'KernelVersion',
      //   'Arch',
      //   'ApiVersion'
      // ], RESPONSE.data)
      return RESPONSE.data
    } catch (error) {
      throw error
    }
  }
})
