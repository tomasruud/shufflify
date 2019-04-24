export const random = arr => {
  let shuf = [...arr.keys()]

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuf[i], shuf[j]] = [shuf[j], shuf[i]]
  }

  return shuf
}

export const scatter = (arr, by) => {}

export const risePeakResolve = arr => {}

export const camelot = arr => {}
