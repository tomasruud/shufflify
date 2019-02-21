import {moves} from './moves'
import {shuffle} from './shuffler'
import {lisMove} from './lis'

const applyMoves = (arr, moves) => {
  const res = arr.slice()

  moves.forEach(step => {
    let move = res.splice(step.start, step.range)
    res.splice(step.before, 0, ...move)
  })

  return res
}

it('creates moves that actually works', () => {
  const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  const b = ['d', 'f', 'c', 'a', 'b', 'g', 'e']

  const ms = moves(a, b, (a, b) => a === b)

  expect(applyMoves(a, ms)).toEqual(b)
})

it('creates valid moves', () => {
  const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  const b = ['d', 'f', 'c', 'a', 'b', 'g', 'e']

  const ms = moves(a, b, (a, b) => a === b)

  expect(ms).toContainEqual({start: 6, range: 1, before: 5})
})

it('creates correct moves', () => {
  const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  const b = ['d', 'f', 'c', 'a', 'b', 'g', 'e']

  const ms = moves(a, b, (a, b) => a === b)

  expect(ms.length).toBe(4)
})

it('makes certain that moves count is less than n', () => {
  const a = Array.from(Array(2000).keys())
  const b = shuffle(a)

  const ms = moves(a, b, (a, b) => a === b)

  console.log(ms.length)

  expect(ms.length < a.length).toBeTruthy()
})

it('creates moves that actually works on large arrays', () => {
  const a = Array.from(Array(2000).keys())
  const b = shuffle(a)

  const ms = moves(a, b, (a, b) => a === b)

  expect(applyMoves(a, ms)).toEqual(b)
})

it('handles ascension correctly', () => {
  const a = ['a', 'b', 'c', 'd', 'e', 'f']
  const b = ['e', 'f', 'a', 'b', 'c', 'd']

  const m = moves(a, b, (a, b) => a === b)

  expect(m).toEqual([{start: 4, range: 2, before: 0}])
})

it('lis', () => {
  const a = Array.from(Array(2000).keys())
  const b = shuffle(a)

  const ms = lisMove(a, b, (a, b) => a === b)

  expect(ms.length < a.length).toBeTruthy()
})