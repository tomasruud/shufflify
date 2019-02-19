export const shuffle = arr => {
  const end = arr.length - 1
  let shuf = [...arr.keys()]

  for (let i = end; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuf[i], shuf[j]] = [shuf[j], shuf[i]]
  }

  return shuf
}

export const remap = (map, arr) => {
  let shuf = []

  map.forEach((d, i) => {
    shuf[d] = arr[i]
  })

  return shuf
}
