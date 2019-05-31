// @flow
import type { ID } from './id'

export type TrackFeatures = {
  id: ID,
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