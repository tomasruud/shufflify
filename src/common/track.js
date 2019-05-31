// @flow
import type { URI } from './uri'
import type { ID } from './id'

export type Track = {
  uri: URI,
  id: ?ID,
  name: string,
  artists: Array<string>,
  local: boolean
}