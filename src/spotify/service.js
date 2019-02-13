import { stringify, parse } from 'query-string'

export const authURI = (client, redirect, scopes) => {
  const q = stringify({
    redirect_uri: redirect,
    client_id: client,
    scope: scopes.join(' '),
    response_type: 'token',
    show_dialog: false
  })

  return `https://accounts.spotify.com/authorize?${q}`
}

export const hasAuthError = value => {
  const p = parse(value)

  return !!p.error
}

export const findToken = value => {
  const p = parse(value)

  if (!p.access_token) {
    return null
  }

  return p.access_token
}

export const user = async meFunc => {
  const u = await meFunc()

  if (!u) {
    return null
  }

  if (!u.id) {
    throw new Error('User does not have an id')
  }

  let image = null

  if (u.images && u.images[0] && u.images[0].url) {
    image = u.images[0].url
  }

  return {
    id: u.id,
    image
  }
}

export const playlists = async (playlistFunc, genericFunc) => {
  let ps = await playlistFunc()
  let l = ps.items

  while (ps.next) {
    ps = await genericFunc(ps.next)

    if (ps.items) {
      l = l.concat(ps.items)
    }
  }

  return l.map(p => ({
    id: p.id,
    ownerId: p.owner.id,
    name: p.name,
    uri: p.uri,
    href: p.href
  }))
}

export const tracks = async (tracksFunc, genericFunc, playlistId) => {
  let ts = await tracksFunc(playlistId, {
    fields: 'items(track(name,artists(name))), next'
  })

  let l = ts.items

  while (ts.next) {
    ts = await genericFunc(ts.next)

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

export const reorderTrack = async (reorderFunc, playlistId, from, to) => {
  const res = await reorderFunc(playlistId, from, to)
  return res.snapshot_id
}
