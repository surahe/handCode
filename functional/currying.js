// 初步封装
function currying(fn, ...rest1) {
  return function(...rest2) {
    return fn.apply(null, rest1.concat(rest2))
  }
}

// 每次只传递一个或者多个参数
function curryingHelper(fn, len) {
  const length = len || fn.length  // 第一遍运行length是函数fn一共需要的参数个数，以后是剩余所需要的参数个数
  return function (...rest) {
    return rest.length >= length    // 检查是否传入了fn所需足够的参数
      ? fn.apply(this, rest)
      : curryingHelper(currying.apply(this, [fn].concat(rest)), length - rest.length)        // 在通用currying函数基础上
  }
}
