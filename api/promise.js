function MyPromise(callback) {
  this.status = "pending"
  this.value = null
  this.successCallback = []
  const resolve = (value) => {
    if (this.status === "pending") {
      this.status = "success"
      this.value = value
      this.successCallback.map(item => item(value))
    }
  }
  const reject = value => {
    if (this.status === "pending") {
      this.status === "reject"
    }
  }
  callback(resolve, reject)
}

MyPromise.prototype.then = function (callback) {
  if (this.status === "success") {
    callback(this.value)
  } else if (this.status === "pending") {
    this.successCallback.push(callback)
  }
}

var p = new MyPromise((resolve, reject) => {
  resolve(1)
})

p.then(value => {
  console.log(value)
})