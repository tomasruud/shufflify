import { random } from './shuffler'

describe('random map generator', () => {
  it('shuffles array indexes and returns a map', () => {
    const arr = ['tomatoes', 'apples', 'oranges', 'bananas']
    const map = random(arr)

    const keys = [...arr.keys()]
    map.map(i => expect(keys.includes(i)).toBeTruthy())
  })
})
