export const redirectToLogin = async () => {
  const service = await import('../spotify/service')

  const scopes = ['playlist-read-private', 'playlist-modify-private']
  const client = 'd889de9a8c554ddebea3a0b88fdf5874'
  const redirect =
    process.env.NODE_ENV === 'production'
      ? 'https://shufflify.ruud.ninja'
      : 'http://localhost:3000'

  window.location = service.authURI(client, redirect, scopes)
}

export const reload = () => {
  window.location.reload(false)
}