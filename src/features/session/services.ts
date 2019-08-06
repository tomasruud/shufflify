import { User } from './models'

export interface SessionService {
  getAuthURL(client: string, redirect: string): Promise<string>
  getAccessToken(location: Location): Promise<string>
  getUser(): Promise<User>
}

export class NoAccessTokenAvailableError extends Error {
  constructor(m: any) {
    super(m)
    this.name = 'NoAccessTokenAvailableError'
  }
}