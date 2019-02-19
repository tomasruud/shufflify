const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const b = ['d', 'f', 'c', 'a', 'b', 'g', 'e']

// {start: 0, range: 2, before: 4}

const smallest = (s, sub, e) => {
  let low = 0
  let high = sub.length - 1

  while (high > low) {
    let mid = (high + low) / 2

    if (s[sub[mid]] < s[e]) {
      low = mid + 1
    } else {
      high = mid
    }
  }

  return high
}

const lis = s => {
  let se = []
  let parent = Array(s.length)

  s.forEach((e, i) => {
    if (se.length === 0 || s[i] > s[se[se.length - 1]]) {
      if (se.length > 0) {
        parent[i] = se[se.length - 1]
      }

      se.push(i)
    } else {
      let ltr = smallest(s, se, i)
      se[ltr] = i

      if (ltr !== 0) {
        parent[i] = (se[ltr - 1])
      }
    }
  })

  let curr = se[se.length - 1]
  let lis = []

  while (curr) {
    lis.push(s[curr])
    curr = parent[curr]
  }

  return lis.reverse()
}

const inversions = o =>
  o.map((e, i) => o.reduce((a, v, j) => (a += j < i && v > e ? 1 : 0), 0))

const steps = (a, b) => {
  console.log('A', a)
  console.log('B', b)

  // Target indexes for each element
  const target = a.map(e => b.findIndex(v => e === v))
  console.log('Target', target)

  const inv = inversions(target)
  console.log('Inv', inv)

  // Find sequences in inversions
  // Take sequence, move seq[0] indexes left, reverse seq and place
  // Do for all inversions > 0

  const inc = lis(target)
  console.log('LIS', inc)
}

console.time('steps')
steps(a, b)
console.timeEnd('steps')
