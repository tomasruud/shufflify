import Spotify, { NoAccessTokenAvailableError } from './spotify'
import * as LocalClient from './spotify.samples'

describe('receive authentication data', () => {
  it('throws an error if the data returned is falsy', () => {
    const loc = {
      search: '?error=access_denied&reducer=123',
      hash: ''
    }

    return expect(Spotify.getAccessToken(loc)).rejects.toThrow(Error)
  })

  it('returns access token from hash', () => {
    const token = '123124'

    const loc = {
      search: '',
      hash: `#access_token=${token}&token_type=Bearer`
    }

    return expect(Spotify.getAccessToken(loc)).resolves.toBe(token)
  })

  it('throws specific error if hash provided but no token is present', () => {
    const loc = {
      search: '',
      hash: ''
    }

    return expect(Spotify.getAccessToken(loc)).rejects.toThrow(
      NoAccessTokenAvailableError
    )
  })

  it('throws error when no data is provided', () => {
    return expect(Spotify.getAccessToken(null)).rejects.toThrowError()
  })
})

describe('authentication url builder', () => {
  it('returns a nice url', () => {
    const url = Spotify.getAuthenticationURL('123', 'http://localhost')

    return expect(url).toBe(
      'https://accounts.spotify.com/authorize?client_id=123&redirect_uri=http%3A%2F%2Flocalhost&response_type=token&scope=playlist-read-private%20playlist-modify-private&show_dialog=false'
    )
  })
})

describe('getting user info', () => {
  it('returns proper user information', () => {
    const c = new Spotify()

    c.setClient({
      getMe() {
        return LocalClient.user
      }
    })

    return expect(c.getUser()).resolves.toEqual({
      id: 'myspotfiy',
      name: 'myspotfiy',
      image:
        'https://profile-images.scdn.co/images/userprofile/default/8757a7831f3455b376ae145c578ec46ef385b49d'
    })
  })

  it('throws error if the user is not found', () => {
    const c = new Spotify()

    c.setClient({
      getMe() {
        return null
      }
    })

    return expect(c.getUser()).rejects.toThrowError()
  })

  it('throws an error if user id is not present', () => {
    const c = new Spotify()

    c.setClient({
      getMe() {
        return {}
      }
    })

    return expect(c.getUser()).rejects.toThrow('User does not have an id')
  })

  it('does not set image if image is not present', () => {
    const c = new Spotify()

    c.setClient({
      getMe() {
        return LocalClient.userWithoutImage
      }
    })

    return expect(c.getUser()).resolves.toEqual({
      id: 'myspotfiy',
      name: 'myspotfiy'
    })
  })
})

describe('listing playlists', () => {
  it('lists all playlists', () => {
    const c = new Spotify()

    c.setClient({
      getUserPlaylists() {
        return LocalClient.playlists
      },

      getGeneric() {
        return LocalClient.playlistsLastPage
      }
    })

    return expect(c.getPlaylists()).resolves.toEqual([
      {
        id: '5QYl0j3b2od8WjVgm0tXIX',
        ownerID: 'myspotfiy',
        image:
          'https://pl.scdn.co/images/pl/default/8b5df80a65ddb6cd5115a7e4575f97b577be60ee',
        name: 'Starred',
        uri: 'spotify:user:myspotfiy:Playlists:5QYl0j3b2od8WjVgm0tXIX',
        href: 'https://api.spotify.com/v1/playlists/5QYl0j3b2od8WjVgm0tXIX'
      },
      {
        id: '5Ehsce4n7LxwGUAQ7arcZM',
        ownerID: 'myspotfiy2',
        image:
          'https://pl.scdn.co/images/pl/default/2f4c97625fef020d12a1e6e17320faccaabf313a',
        name: 'Shuffle',
        uri: 'spotify:user:myspotfiy:Playlists:5Ehsce4n7LxwGUAQ7arcZM',
        href: 'https://api.spotify.com/v1/playlists/5Ehsce4n7LxwGUAQ7arcZM'
      }
    ])
  })
})

describe('listing playlist byPlaylistURI', () => {
  it('lists all byPlaylistURI in a playlist', () => {
    const c = new Spotify()

    c.setClient({
      getPlaylistTracks() {
        return LocalClient.tracks
      },

      getGeneric() {
        return LocalClient.tracksLastPage
      }
    })

    return expect(c.getTracks('123')).resolves.toEqual([
      {
        name: 'Varm Vind',
        artists: ['Holm CPU'],
        local: false
      },
      {
        name: 'Uten Mål Og Mening',
        artists: ['Kitboys'],
        local: false
      }
    ])
  })
})

describe('track reordering', () => {
  it('reorders track and returns snapshot id', () => {
    const c = new Spotify()

    c.setClient({
      reorderTracksInPlaylist() {
        return LocalClient.reorderResult
      }
    })

    return expect(c.moveTrack('12', '123', '123')).resolves.toEqual(
      'some-id-123'
    )
  })
})

describe('track features', () => {
  it('finds track features', async () => {
    const tracks = LocalClient.trackFeatures.audio_features.map((f, i) => i)

    const c = new Spotify()

    c.setClient({
      getAudioFeaturesForTracks() {
        return LocalClient.trackFeatures
      }
    })

    const f = await c.getFeaturesForTracks(tracks)

    expect(f['0']).toHaveProperty('energy', 0.626)
  })

  it('retains input track order', async () => {
    const tracks = LocalClient.trackFeatures.audio_features.map((f, i) => i)

    const c = new Spotify()

    c.setClient({
      getAudioFeaturesForTracks() {
        return LocalClient.trackFeatures
      }
    })

    const f = await c.getFeaturesForTracks(tracks)

    expect(f['0'].energy).toEqual(0.626)
    expect(f['1'].danceability).toEqual(0.457)
  })
})
