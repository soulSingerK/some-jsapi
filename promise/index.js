const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function GSPromise (fn) {
  let self = this
  self.status = PENDING
  self.value = null // 成功的值
  self.error = null // 失败的值
  self.onFulfilled = null
  self.onRejected = null

  function resolve (value) {
    if (self.status === PENDING) {
      setTimeout(() => {
        self.status = FULFILLED
        self.value = value
        self.onFulfilled(self.value)
      })
    }
  }

  function reject (error) {
    if (self.status === PENDING) {
      setTimeout(() => {
        self.status = REJECTED
        self.error = error
        self.onFulfilled(error)
      })
    }
  }

  fn(resolve, reject)
}

GSPromise.prototype.then = function(onFulfilledFn, onRejectedFn) {
  if (this.status === PENDING) {
    this.onFulfilled = onFulfilledFn
    this.onRejected = onRejectedFn
  }
  return this
}

// test
function testGSPromise () {
  const s = 1
  return new GSPromise((resolve, reject) => {
    // let GSPromise
    if (s === 1) {
      resolve(l)
    } else {
      reject(s)
    }
  })
}

testGSPromise().then((res) => {
  
})