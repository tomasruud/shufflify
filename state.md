```js
const normalized = {
  session: {
    loading: false,
    token: '',
    user: {
      id: '',
      name: '',
      image: ''
    }
  },

  shuffler: {
    originalOrder: [123, 321],
    nextOrder: [321, 123]
  },

  router: {
    route: '/playlists',
    params: {}
  },

  message: {
    message: ''
  },

  entities: {
    playlists: {
      loading: false,
      byURI: {
        'playlist:123': {
          uri: '',
          id: '',
          ownerId: '',
          name: '',
          href: '',
          image: '',
          tracks: [123, 234]
        }
      }
    },
    tracks: {
      loading: false,
      byURI: {
        'track:123': {
          uri: '',
          id: '',
          index: 0,
          name: '',
          artists: [''],
          local: false
        }
      },
      URIbyID: {
        123: 'track:123'
      }
    },
    trackFeatures: {
      loading: false,
      byURI: {
        'track:123': {
          acousticness: 0,
          bpm: 0,
          danceability: 0,
          energy: 0,
          instrumentalness: 0,
          key: 0,
          liveness: 0,
          major: false,
          positivity: 0,
          speechiness: 0
        }
      }
    }
  }
}
```