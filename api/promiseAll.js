function promiseAll(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      throw Error()
    }
    var promiseNum = arr.length
    var l = 0
    var result = []
    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(arr[i]).then(data => {
        l++
        result[i] = data
        if (promiseNum === l) {
          return resolve(result)
        }
      }, err => {
        return reject(err)
      })
    }
  })
}

// test
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1)
  }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2)
  }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3)
  }, 3000)
})
promiseAll([p3, p1, p2]).then(res => {
  console.log(res) // [3, 1, 2]
})