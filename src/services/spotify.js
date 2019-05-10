import { parse, stringify } from 'query-string'
import Client from 'spotify-web-api-js'

export class NoAccessTokenAvailableError extends Error {
  constructor(m) {
    super(m)
    this.name = 'NoAccessTokenAvailableError'
  }
}

export default class Spotify {
  constructor(token) {
    this.client = new Client()
    this.client.setAccessToken(token)
  }

  setClient(client) {
    this.client = client
  }

  static getAuthenticationURL(clientID, redirectURL) {
    const q = stringify({
      redirect_uri: redirectURL,
      client_id: clientID,
      scope: ['playlist-read-private', 'playlist-modify-private'].join(' '),
      response_type: 'token',
      show_dialog: false
    })

    return `https://accounts.spotify.com/authorize?${q}`
  }

  static async getAccessToken({ search, hash }) {
    const s = parse(search)

    if (!!s.error) {
      throw new Error('Authentication error')
    }

    const h = parse(hash)

    if (!h.access_token) {
      throw new NoAccessTokenAvailableError('No access token found')
    }

    return h.access_token
  }

  async getUser() {
    const u = await this.client.getMe()

    if (!u) {
      throw new Error('No user found')
    }

    if (!u.id) {
      throw new Error('User does not have an id')
    }

    let user = {
      id: u.id,
      name: u.display_name
    }

    if (u.images && u.images[0] && u.images[0].url) {
      user.image = u.images[0].url
    }

    return user
  }

  async getPlaylists() {
    let ps = await this.client.getUserPlaylists({ limit: 50 })
    let l = ps.items

    while (ps.next) {
      ps = await this.client.getGeneric(ps.next)

      if (ps.items) {
        l = l.concat(ps.items)
      }
    }

    return l.map(p => {
      const list = {
        id: p.id,
        ownerID: p.owner.id,
        name: p.name,
        uri: p.uri,
        href: p.href
      }

      if (p.images && p.images[0] && p.images[0].url) {
        list.image = p.images[0].url
      }

      return list
    })
  }

  async getTracks(playlistID) {
    let ts = await this.client.getPlaylistTracks(playlistID, {
      fields: 'items(track(uri,id,name,artists(name),is_local)), next'
    })

    let l = ts.items

    while (ts.next) {
      ts = await this.client.getGeneric(ts.next)

      if (ts.items) {
        l = l.concat(ts.items)
      }
    }

    return l.map(t => ({
      uri: t.track.uri,
      id: t.track.id,
      name: t.track.name,
      artists: t.track.artists.map(a => a.name),
      local: !!t.track.is_local
    }))
  }

  async getFeaturesForTracks(trackIDs) {
    let t = [...trackIDs]
    let features = {}

    while (t.length > 0) {
      const ids = t.splice(0, 100)

      const { audio_features } = await this.client.getAudioFeaturesForTracks(
        ids
      )

      if (!audio_features) {
        throw new Error('No audio features provided')
      }

      features = {
        ...features,
        ...audio_features.reduce((acc, f, i) => {
          if (!f) {
            return acc
          }

          acc[ids[i]] = {
            acousticness: f.acousticness,
            bpm: f.tempo,
            danceability: f.danceability,
            energy: f.energy,
            instrumentalness: f.instrumentalness,
            key: f.key,
            liveness: f.liveness,
            major: f.mode === 1,
            positivity: f.valence,
            speechiness: f.speechiness
          }

          return acc
        }, {})
      }
    }

    return features
  }

  async moveTrack(playlistId, from, to) {
    const res = await this.client.reorderTracksInPlaylist(playlistId, from, to)
    return res.snapshot_id
  }
}
