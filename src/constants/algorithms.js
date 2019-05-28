import { shuffler } from '../services'

class Algorithm {
  constructor(display, description, func, opts = false) {
    this.display = display
    this.description = description
    this.func = func
    this.opts = opts
  }

  hasOptions() {
    return !!this.opts
  }
}

const all = {
  scatter: new Algorithm(
    'Scatter',
    'Distributes tracks evenly across the playlist based on the selected field. This creates what seems like a more randomized playlist than by just randomizing track order.',
    shuffler.scatter,
    [
      'energy',
      'danceability',
      'bpm',
      'acousticness',
      'instrumentalness',
      'liveness',
      'positivity',
      'speechiness',
      'key'
    ]
  ),

  random: new Algorithm(
    'Random',
    'Takes all tracks and places them at random locations. This is the most random shuffling algorithm, but may produce results that does not seem too random.',
    shuffler.random
  ),

  risePeakResolve: new Algorithm(
    'Hollywood',
    'Tries to order tracks by the selected field so that is starts at a low value and increases until reaching a climax, before returning back down at the end.',
    shuffler.risePeakResolve,
    [
      'energy',
      'danceability',
      'bpm',
      'acousticness',
      'instrumentalness',
      'liveness',
      'positivity',
      'speechiness'
    ]
  ),

  camelot: new Algorithm(
    'Camelot',
    'Shuffles the playlist according to the Camelot Wheel, so there are noe harsh changes in key in the mix. Works best for playlists with more tracks.',
    shuffler.camelot
  ),

  ascend: new Algorithm(
    'Ascend',
    'Starts at the lowest value and just keeps rising. Good for a get-psyched-mix.',
    shuffler.ascending,
    [
      'energy',
      'danceability',
      'bpm',
      'acousticness',
      'instrumentalness',
      'liveness',
      'positivity',
      'speechiness'
    ]
  ),

  descend: new Algorithm(
    'Descend',
    'Starts at the highest value and keeps falling.',
    shuffler.descending,
    [
      'energy',
      'danceability',
      'bpm',
      'acousticness',
      'instrumentalness',
      'liveness',
      'positivity',
      'speechiness'
    ]
  )
}

export default all
