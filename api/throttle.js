function throttle(fn, time) {
  let timer
  return function () {
    var content = this
    var args = arguments
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(content, args)
        timer = null
      }, time)
    }
  }
}