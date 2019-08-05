import { Track } from '../features/tracks/models'

export const random = (arr: Array<Track>): Array<number> => {
  let shuf = [...arr.keys()]

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    const tmp = shuf[i]
    shuf[i] = shuf[j]
    shuf[j] = tmp
  }

  return shuf
}

export const scatter = (arr: Array<Track>, by: string): Array<number> => []

export const risePeakResolve = (
  arr: Array<Track>,
  by: string
): Array<number> => []

export const ascending = (arr: Array<Track>, by: string): Array<number> => []

export const descending = (arr: Array<Track>, by: string): Array<number> =>
  ascending(arr, by).reverse()

export const camelot = (arr: Array<Track>): Array<number> => []
