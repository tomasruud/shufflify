import { shuffle, remap } from './shuffler'

describe('shuffle map generator', () => {
  it('shuffles array indexes and returns a map', () => {
    const arr = ['tomatoes', 'apples', 'oranges', 'bananas']
    const map = shuffle(arr)

    const keys = [...arr.keys()]
    map.map(i => expect(keys.includes(i)).toBeTruthy())
  })
})

describe('array remapper', () => {
  it('shuffles array according to map', () => {
    const map = [2, 0, 1]
    const arr = ['a', 'b', 'c']

    expect(remap(map, arr)).toEqual(['b', 'c', 'a'])
  })
})
