function unique(array) {
  // res用来存储结果
  var res = [];
  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
      for (var j = 0, resLen = res.length; j < resLen; j++ ) {
          if (array[i] === res[j]) {
              break;
          }
      }
      // 如果array[i]是唯一的，那么执行完循环，j等于resLen
      if (j === resLen) {
          res.push(array[i])
      }
  }
  return res;
}

// 外层遍历目标数组，循环内用indexOf判断当前项是否在 res 数组中
function unique2(array) {
  var res = [];
  for (var i = 0, len = array.length; i < len; i++) {
      var current = array[i];
      if (res.indexOf(current) === -1) {
          res.push(current)
      }
  }
  return res;
}

// 试想我们先将要去重的数组使用 sort 方法排序后，相同的值就会被排在一起，然后我们就可以只判断当前元素与上一个元素是否相同，相同就说明重复，不相同就添加进 res
function unique3(array) {
    var res = [];
    var sortedArray = array.concat().sort();
    var seen;
    for (var i = 0, len = sortedArray.length; i < len; i++) {
        // 如果是第一个元素或者相邻的元素不相同
        if (!i || seen !== sortedArray[i]) {
            res.push(sortedArray[i])
        }
        seen = sortedArray[i];
    }
    return res;
}

// filter + indexOf
function unique4(array) {
    var res = array.filter(function(item, index, array){
        return array.indexOf(item) === index;
    })
    return res;
}

// filter + sort
function unique5(array) {
    return array.concat().sort().filter(function(item, index, array){
        return !index || item !== array[index - 1]
    })
}

// Set
function unique6(array) {
    return [...new Set(array)];
}

// Map
function unique7 (arr) {
  const seen = new Map()
  return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
}

// 当需要对数组项做特殊处理时，需要自定义函数。如：字母的大小写视为一致，比如'a'和'A'，保留一个
/**
 * 
 * @param {Array} array 表示要去重的数组，必填
 * @param {Boolean} isSorted 表示函数传入的数组是否已排过序，如果为 true，将会采用更快的方法进行去重
 * @param {Function} iteratee 传入一个函数，可以对每个元素进行重新的计算，然后根据处理的结果进行去重
 */

var array = [1, 1, 'a', 'A', 2, 2];

function unique8(array, isSorted, iteratee) {
  var res = []
  var seen = []

  for (var i = 0, len = array.length; i < len; i++) {
      var value = array[i]
      var computed = iteratee ? iteratee(value, i, array) : value
      if (isSorted) {
          if (!i || seen !== computed) {
              res.push(value)
          }
          seen = computed
      }
      else if (iteratee) {
          if (seen.indexOf(computed) === -1) {
              seen.push(computed)
              res.push(value)
          }
      }
      else if (res.indexOf(value) === -1) {
          res.push(value)
      }        
  }
  return res
}
unique(array, false, function(item){
  return typeof item == 'string' ? item.toLowerCase() : item
})