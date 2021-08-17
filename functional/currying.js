// 初步封装
function currying(fn, ...rest1) {
  return function (...rest2) {
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


// 版本2
const curry = function (fn) {
  return function nest(...args) {
    // fn.length表示函数的形参个数
    if (args.length === fn.length) {
      // 当参数接收的数量达到了函数fn的形参个数，即所有参数已经都接收完毕则进行最终的调用
      return fn(...args);
    } else {
      // 参数还未完全接收完毕，递归返回judge，将新的参数传入
      return function (arg) {
        return nest(...args, arg);
      }
    }
  }
}

function addNum(a, b, c) {
  return a + b + c;
}

const addCurry = curry(addNum);

addCurry(1)(2)(3);// 6