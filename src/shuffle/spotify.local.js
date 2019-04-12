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
