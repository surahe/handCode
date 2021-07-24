function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce(function reducer(a, b) {
    return function (...args) {
      return a(b(...args))
    }
  })
}