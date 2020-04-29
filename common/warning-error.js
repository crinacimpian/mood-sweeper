export default class WarningError extends Error {
    constructor(message) {
      super(message)
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, WarningError)
      }
  
      this.name = 'WarningError'
    }
  }