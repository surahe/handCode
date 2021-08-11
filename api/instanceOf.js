function myinstanceOf(left, right) {
  let prototype = right.prototype
  left = left.__proto__
  while (true) {
    if (left === prototype) {
      return true
    }
    if (left === null || left === undefined) {
      return false
    }
    left = left.__proto__
  }
}