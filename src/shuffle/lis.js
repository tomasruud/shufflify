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

export const findLIS = s => {
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

const bucket = (anc, ins, rem) => ({
  anchor: anc,
  inserted: ins,
  toBeRemoved: rem
})

export const lisMove = (a, b, equals) => {
  // console.log(a, b)

  const target = a.map(e => b.findIndex(v => equals(e, v)))
  const lis = findLIS(target)

  console.log(lis.length)

  const map = target.reduce((acc, v, i) => {
    if (!lis.includes(v)) {
      acc[i] = v
    }

    return acc
  }, {})

  // console.log(map)

  return lis
}