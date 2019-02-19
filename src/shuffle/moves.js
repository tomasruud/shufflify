const move = (steps, index) => ({
  start: index - steps.length + 1,
  range: steps.length,
  before: index - steps.length + 1 - steps[0]
})

export const moves = (a, b, equals) => {
  // Create an array of the destination index for each element
  const target = a.map(e => b.findIndex(v => equals(e, v)))

  // Find all inversions for the destination index list
  const inversions = target.map((e, i, arr) =>
    arr.reduce((a, v, j) => (a += j < i && v > e ? 1 : 0), 0)
  )

  // Loop through all inversions and make move objects
  return inversions.reduce(
    (a, v, i, arr) => {
      if (v < 1) {
        if (a.current.length > 0) {
          a.moves.push(move(a.current, i - 1))
          a.current = []
        }

        return a
      }

      const last = a.current[a.current.length - 1]

      if (last && last === v) {
        a.current.push(v)

        if (arr.length - 1 === i) {
          a.moves.push(move(a.current, i))
        }

        return a
      }

      if (a.current.length > 0) {
        a.moves.push(move(a.current, i - 1))
      }

      a.current = [v]

      if (arr.length - 1 === i) {
        a.moves.push(move(a.current, i))
      }

      return a
    },
    { moves: [], current: [] }
  ).moves
}
