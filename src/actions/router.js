import { createAction } from 'redux-actions'

export const routes = {
  PRIVACY: '/privacy',
  PLAYLISTS: '/playlists',
  LOGIN: '/login',
  SHUFFLE: '/shuffle'
}

export const navigate = createAction('ROUTER_NAVIGATE', (path, params) => ({
  path,
  params
}))
