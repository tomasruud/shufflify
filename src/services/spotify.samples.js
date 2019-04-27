export const user = {
  display_name: 'myspotfiy',
  external_urls: {
    spotify: 'https://open.spotify.com/user/myspotfiy'
  },
  followers: {
    href: null,
    total: 24
  },
  href: 'https://api.spotify.com/v1/users/myspotfiy',
  id: 'myspotfiy',
  images: [
    {
      height: null,
      url:
        'https://profile-images.scdn.co/images/userprofile/default/8757a7831f3455b376ae145c578ec46ef385b49d',
      width: null
    }
  ],
  type: 'user',
  uri: 'spotify:user:myspotfiy'
}

export const userWithoutImage = {
  display_name: 'myspotfiy',
  external_urls: {
    spotify: 'https://open.spotify.com/user/myspotfiy'
  },
  followers: {
    href: null,
    total: 24
  },
  href: 'https://api.spotify.com/v1/users/myspotfiy',
  id: 'myspotfiy',
  images: [],
  type: 'user',
  uri: 'spotify:user:myspotfiy'
}

export const playlists = {
  href: 'https://api.spotify.com/v1/users/myspotfiy/playlists?offset=0&limit=1',
  items: [
    {
      collaborative: false,
      external_urls: {
        spotify: 'https://open.spotify.com/Playlists/5QYl0j3b2od8WjVgm0tXIX'
      },
      href: 'https://api.spotify.com/v1/playlists/5QYl0j3b2od8WjVgm0tXIX',
      id: '5QYl0j3b2od8WjVgm0tXIX',
      images: [
        {
          height: null,
          url:
            'https://pl.scdn.co/images/pl/default/8b5df80a65ddb6cd5115a7e4575f97b577be60ee',
          width: null
        }
      ],
      name: 'Starred',
      owner: {
        display_name: 'myspotfiy',
        external_urls: {
          spotify: 'https://open.spotify.com/user/myspotfiy'
        },
        href: 'https://api.spotify.com/v1/users/myspotfiy',
        id: 'myspotfiy',
        type: 'user',
        uri: 'spotify:user:myspotfiy'
      },
      primary_color: null,
      public: true,
      snapshot_id:
        'MjkyLGZkMThiODExNjMwY2ViYTg2MDU5MzgxM2IxZjI0MDllYmNkNTA0NjI=',
      tracks: {
        href:
          'https://api.spotify.com/v1/playlists/5QYl0j3b2od8WjVgm0tXIX/tracks',
        total: 1727
      },
      type: 'playlist',
      uri: 'spotify:user:myspotfiy:Playlists:5QYl0j3b2od8WjVgm0tXIX'
    }
  ],
  limit: 1,
  next: 'https://api.spotify.com/v1/users/myspotfiy/playlists?offset=1&limit=1',
  offset: 0,
  previous: null,
  total: 2
}

export const playlistsLastPage = {
  href: 'https://api.spotify.com/v1/users/myspotfiy/playlists?offset=1&limit=1',
  items: [
    {
      collaborative: false,
      external_urls: {
        spotify: 'https://open.spotify.com/Playlists/5Ehsce4n7LxwGUAQ7arcZM'
      },
      href: 'https://api.spotify.com/v1/playlists/5Ehsce4n7LxwGUAQ7arcZM',
      id: '5Ehsce4n7LxwGUAQ7arcZM',
      images: [
        {
          height: null,
          url:
            'https://pl.scdn.co/images/pl/default/2f4c97625fef020d12a1e6e17320faccaabf313a',
          width: null
        }
      ],
      name: 'Shuffle',
      owner: {
        display_name: 'myspotfiy',
        external_urls: {
          spotify: 'https://open.spotify.com/user/myspotfiy'
        },
        href: 'https://api.spotify.com/v1/users/myspotfiy',
        id: 'myspotfiy2',
        type: 'user',
        uri: 'spotify:user:myspotfiy'
      },
      primary_color: null,
      public: true,
      snapshot_id:
        'MTEwLGZlZjg5MTIzYTY1MWY4NDQ1NmY3MDU5NDBiYzlkMjc4MTE3Y2Y2NjM=',
      tracks: {
        href:
          'https://api.spotify.com/v1/playlists/5Ehsce4n7LxwGUAQ7arcZM/tracks',
        total: 93
      },
      type: 'playlist',
      uri: 'spotify:user:myspotfiy:Playlists:5Ehsce4n7LxwGUAQ7arcZM'
    }
  ],
  limit: 1,
  next: null,
  offset: 1,
  previous:
    'https://api.spotify.com/v1/users/myspotfiy/playlists?offset=0&limit=1',
  total: 2
}

export const tracks = {
  items: [
    {
      track: {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/7zLjuOlmI8hpV3Mucw21dN'
            },
            href: 'https://api.spotify.com/v1/artists/7zLjuOlmI8hpV3Mucw21dN',
            id: '7zLjuOlmI8hpV3Mucw21dN',
            name: 'Holm CPU',
            type: 'artist',
            uri: 'spotify:artist:7zLjuOlmI8hpV3Mucw21dN'
          }
        ],
        name: 'Varm Vind'
      }
    }
  ],
  next:
    'https://api.spotify.com/v1/playlists/5Ehsce4n7LxwGUAQ7arcZM/tracks?offset=1&limit=1&fields=items(track(name,artists(name))),next'
}

export const tracksLastPage = {
  items: [
    {
      track: {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/7nusZlf4eyXtdnibLXN674'
            },
            href: 'https://api.spotify.com/v1/artists/7nusZlf4eyXtdnibLXN674',
            id: '7nusZlf4eyXtdnibLXN674',
            name: 'Kitboys',
            type: 'artist',
            uri: 'spotify:artist:7nusZlf4eyXtdnibLXN674'
          }
        ],
        name: 'Uten Mål Og Mening'
      }
    }
  ],
  next: null
}

export const reorderResult = {
  snapshot_id: 'some-id-123'
}

export const trackFeatures = {
  audio_features: [
    {
      danceability: 0.808,
      energy: 0.626,
      key: 7,
      loudness: -12.733,
      mode: 1,
      speechiness: 0.168,
      acousticness: 0.00187,
      instrumentalness: 0.159,
      liveness: 0.376,
      valence: 0.369,
      tempo: 123.99,
      type: 'audio_features',
      id: '4JpKVNYnVcJ8tuMKjAj50A',
      uri: 'spotify:track:4JpKVNYnVcJ8tuMKjAj50A',
      track_href: 'https://api.spotify.com/v1/tracks/4JpKVNYnVcJ8tuMKjAj50A',
      analysis_url:
        'http://echonest-analysis.s3.amazonaws.com/TR/WhpYUARk1kNJ_qP0AdKGcDDFKOQTTgsOoINrqyPQjkUnbteuuBiyj_u94iFCSGzdxGiwqQ6d77f4QLL_8=/3/full.json?AWSAccessKeyId=AKIAJRDFEY23UEVW42BQ&Expires=1458063189&Signature=JRE8SDZStpNOdUsPN/PoS49FMtQ%3D',
      duration_ms: 535223,
      time_signature: 4
    },
    {
      danceability: 0.457,
      energy: 0.815,
      key: 1,
      loudness: -7.199,
      mode: 1,
      speechiness: 0.034,
      acousticness: 0.102,
      instrumentalness: 0.0319,
      liveness: 0.103,
      valence: 0.382,
      tempo: 96.083,
      type: 'audio_features',
      id: '2NRANZE9UCmPAS5XVbXL40',
      uri: 'spotify:track:2NRANZE9UCmPAS5XVbXL40',
      track_href: 'https://api.spotify.com/v1/tracks/2NRANZE9UCmPAS5XVbXL40',
      analysis_url:
        'http://echonest-analysis.s3.amazonaws.com/TR/WhuQhwPDhmEg5TO4JjbJu0my-awIhk3eaXkRd1ofoJ7tXogPnMtbxkTyLOeHXu5Jke0FCIt52saKJyfPM=/3/full.json?AWSAccessKeyId=AKIAJRDFEY23UEVW42BQ&Expires=1458063189&Signature=qfclum7FwTaR/7aQbnBNO0daCsM%3D',
      duration_ms: 187800,
      time_signature: 4
    },
    {
      danceability: 0.281,
      energy: 0.402,
      key: 4,
      loudness: -17.921,
      mode: 1,
      speechiness: 0.0291,
      acousticness: 0.0734,
      instrumentalness: 0.83,
      liveness: 0.0593,
      valence: 0.0748,
      tempo: 115.7,
      type: 'audio_features',
      id: '24JygzOLM0EmRQeGtFcIcG',
      uri: 'spotify:track:24JygzOLM0EmRQeGtFcIcG',
      track_href: 'https://api.spotify.com/v1/tracks/24JygzOLM0EmRQeGtFcIcG',
      analysis_url:
        'http://echonest-analysis.s3.amazonaws.com/TR/ehbkMg05Ck-FN7p3lV7vd8TUdBCvM6z5mgDiZRv6iSlw8P_b8GYBZ4PRAlOgTl3e5rS34_l3dZGDeYzH4=/3/full.json?AWSAccessKeyId=AKIAJRDFEY23UEVW42BQ&Expires=1458063189&Signature=bnTm0Hcb%2Bxo8ZCmuxm1mY0JY4Hs%3D',
      duration_ms: 497493,
      time_signature: 3
    }
  ]
}
