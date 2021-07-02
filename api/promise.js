class MyPromise {
  constructor (executor) {
    this.state = 'pedding'
    this.value = ''
    this.reason = ''

    let resolve = (value) =>  {
      this.state = 'resolve'
      this.value = value
    }
    let reject = (reason) => {
      this.state = 'reject'
      this.reason = reason
    }
    pedding(resolve, reject)
  }
  then (onFullfill, onReject) {
    if (this.state === 'resolve') {
      onFullfill(this.value)
    }
    if (this.state === 'reject') {
      onReject(this.reason)
    }
  }
}


var p = new Promise((resolve, reject) => {
  resolve(1)
})

p.then(value => {
  console.log(value)
})