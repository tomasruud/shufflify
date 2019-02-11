import {
  authURI,
  findToken,
  hasAuthError,
  playlists,
  reorderTrack,
  tracks,
  user
} from './service'
import * as Adapter from './local.adapter'

describe('auth has error check', () => {
  it('returns true if error is present', () => {
    expect(hasAuthError('?error=access_denied&state=123')).toBeTruthy()
  })
})

describe('authentication findToken hook', () => {
  it('returns access token from hash', () => {
    const f = '123456'

    expect(findToken(`#access_token=${f}&token_type=Bearer`)).toBe(f)
  })

  it('returns null if hash is provided but access token not present', () => {
    expect(findToken('#access_token1=123&token_type=Bearer')).toBeNull()
  })

  it('returns null when no data is provided', () => {
    expect(findToken()).toBe(null)
  })
})

describe('authentication url builder', () => {
  it('returns a nice url', () => {
    expect(authURI('123', 'http://localhost', ['nice-scope', '123'])).toBe(
      'https://accounts.spotify.com/authorize?client_id=123&redirect_uri=http%3A%2F%2Flocalhost&response_type=token&scope=nice-scope%20123&show_dialog=false'
    )
  })
})

describe('get user info', () => {
  it('returns user information', () => {
    return expect(user(Adapter.user)).resolves.toEqual({
      id: 'myspotfiy',
      image:
        'https://profile-images.scdn.co/images/userprofile/default/8757a7831f3455b376ae145c578ec46ef385b49d'
    })
  })

  it('returns null if no user is present', () => {
    return expect(user(Adapter.returnNull)).resolves.toBeNull()
  })

  it('throws an error if user id is not present', () => {
    return expect(user(Adapter.returnEmpty)).rejects.toThrow(
      'User does not have an id'
    )
  })

  it('sets image to null if no image is present', () => {
    return expect(user(Adapter.userWithoutImage)).resolves.toEqual({
      id: 'myspotfiy',
      image: null
    })
  })
})

describe('playlist listing', () => {
  it('lists all playlists', () => {
    return expect(
      playlists(Adapter.playlists, Adapter.playlistsLastPage)
    ).resolves.toEqual([
      {
        id: '5QYl0j3b2od8WjVgm0tXIX',
        ownerId: 'myspotfiy',
        name: 'Starred',
        uri: 'spotify:user:myspotfiy:playlist:5QYl0j3b2od8WjVgm0tXIX',
        href: 'https://api.spotify.com/v1/playlists/5QYl0j3b2od8WjVgm0tXIX'
      },
      {
        id: '5Ehsce4n7LxwGUAQ7arcZM',
        ownerId: 'myspotfiy2',
        name: 'Shuffle',
        uri: 'spotify:user:myspotfiy:playlist:5Ehsce4n7LxwGUAQ7arcZM',
        href: 'https://api.spotify.com/v1/playlists/5Ehsce4n7LxwGUAQ7arcZM'
      }
    ])
  })

  it('lists playlists for user only', () => {
    return expect(
      playlists(Adapter.playlists, Adapter.playlistsLastPage, 'myspotfiy')
    ).resolves.toEqual([
      {
        id: '5QYl0j3b2od8WjVgm0tXIX',
        ownerId: 'myspotfiy',
        name: 'Starred',
        uri: 'spotify:user:myspotfiy:playlist:5QYl0j3b2od8WjVgm0tXIX',
        href: 'https://api.spotify.com/v1/playlists/5QYl0j3b2od8WjVgm0tXIX'
      }
    ])
  })
})

describe('playlist track listing', () => {
  it('lists all tracks in playlist', () => {
    return expect(
      tracks(Adapter.tracks, Adapter.tracksLastPage, '123')
    ).resolves.toEqual([
      {
        index: 0,
        name: 'Varm Vind',
        artists: ['Holm CPU']
      },
      {
        index: 1,
        name: 'Uten Mål Og Mening',
        artists: ['Kitboys']
      }
    ])
  })
})

describe('track reordering', () => {
  it('reorders track and returns snapshot id', () => {
    return expect(reorderTrack(Adapter.reorder)).resolves.toEqual('some-id-123')
  })
})
