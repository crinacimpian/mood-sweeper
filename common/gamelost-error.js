export default class GameLostError extends Error {
    constructor(message) {
      super(message)
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, GameLostError)
      }
  
      this.name = 'GameLostError'
    }
  }