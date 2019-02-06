import { callback, authURI } from './spotify'

describe('authentication callback hook', () => {
  it('returns access token from hash', () => {
    const f = '123456'

    return expect(
      callback(`#access_token=${f}&token_type=Bearer`)
    ).resolves.toBe(f)
  })

  it('throws error if hash is provided but access token not present', () => {
    return expect(
      callback('#access_token1=123&token_type=Bearer')
    ).rejects.toThrow('No access token provided')
  })

  it('throws error if query string is falsy', () => {
    return expect(
      callback('?error=access_denied&state=123')
    ).rejects.toThrow('Authentication failed')
  })

  it('returns null when no data is provided', () => {
    return expect(callback()).resolves.toBe(null)
  })
})

describe('authentication url builder', () => {
  it('returns a nice url', () => {
    return expect(
      authURI('123', 'http://localhost', ['nice-scope', '123'])
    ).resolves.toBe('https://accounts.spotify.com/authorize?client_id=123&redirect_uri=http%3A%2F%2Flocalhost&response_type=token&scope=nice-scope%20123&show_dialog=true')
  })
})

describe('listing playlists', () => {
  it('returns all the users playlists', () => {

  })
})
