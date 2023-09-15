class BaseError extends Error {
  throwError(error: unknown, defaultMessage: string) {
    let message = ''
    if (error instanceof TypeError) {
      message = 'Network error. Please check your connection.'
    } else if (error instanceof SyntaxError) {
      message = 'Received malformed data from the server.'
    } else {
      message = defaultMessage
    }
    throw Error(message)
  }
}

export const BaseErrorInstance = new BaseError()
