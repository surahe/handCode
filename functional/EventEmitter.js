class EventEmitter {
  #subs = {}
  emit(event, ...args) {
    if (this.#subs[event] && this.#subs[event].length) {
      this.#subs[event].forEach(cb => cb(...args))
    }
  }
  on(event, cb) {
    (this.#subs[event] || (this.#subs[event] = [])).push(cb)
  }
  off(event, offCb) {
    if (offCb) {
      if (this.#subs[event] && this.#subs[event].length)
        this.#subs[event] = this.#subs[event].filter(cb => cb !== offCb)
    } else {
      this.#subs[event] = []
    }
  }
