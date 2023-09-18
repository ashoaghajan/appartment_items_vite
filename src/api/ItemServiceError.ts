import { ApiError } from './BaseError'

export class ItemServiceError extends ApiError {
  constructor(message: string, code: number, description: string) {
    super(message, code, description)
  }
}
