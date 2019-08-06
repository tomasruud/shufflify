export type TrackMeta = {
  id: string,
  acousticness: number,
  bpm: number,
  danceability: number,
  energy: number,
  instrumentalness: number,
  key: number,
  liveness: number,
  major: boolean,
  positivity: number,
  speechiness: number
}

export type ByIDMap = {
  [id: string]: TrackMeta
}