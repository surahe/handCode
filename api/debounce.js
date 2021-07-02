function debounce (fn, time) {
  let timer
  return function () {
    var content = this
    var args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(content, args)
    }, time)
  }
}