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

    return l.map(p => ({
      id: p.id,
      ownerId: p.owner.id,
      name: p.name,
      image: (p.images && p.images[0] && p.images[0].url) ? p.images[0].url : null,
      uri: p.uri,
      href: p.href
    }))
  }

  async getTracks(playlistId) {
    let ts = await this.client.getPlaylistTracks(playlistId, {
      fields: 'items(track(name,artists(name))), next'
    })

    let l = ts.items

    while (ts.next) {
      ts = await this.client.getGeneric(ts.next)

      if (ts.items) {
        l = l.concat(ts.items)
      }
    }

    return l.map((t, i) => ({
      index: i,
      name: t.track.name,
      artists: t.track.artists.map(a => a.name)
    }))
  }

  async moveTrack(playlistId, from, to) {
    await this.client.reorderTracksInPlaylist(playlistId, from, to)
  }
}
