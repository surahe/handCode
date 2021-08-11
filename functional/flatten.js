// ES6 为数组实例新增了flat方法，用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数组没有影响。
// flat默认只会 “拉平” 一层，如果想要 “拉平” 多层的嵌套数组，需要给flat传递一个整数，表示想要拉平的层数。

function flattenDeep(arr, deepLength){
  return arr.flat(deelLength)
}

function flatten1(arr) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push.apply(result, flatten1(arr[i]))
      // 也可以使用 concat，但会产生新数组
      // result = result.concat(flatten1(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

function flatten3(arr) {
  return arr.reduce(function (prev, next) {
    // 可以简写成
    // return prev.concat(Array.isArray(next) ? flatten3(next) : next)
    if (Array.isArray(next)) {
      return prev.concat(flatten3(next))
    } else {
      return prev.concat(next)
    }
  }, [])
}

function flatten4 (arr) {
  while(arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}