function EventEmitter() {
  this.listeners = {};
}

EventEmitter.prototype.on = function (event, cb) {
  var listeners = this.listeners;
  if (listeners[event] instanceof Array) {
    if (listeners[event].indexOf(cb) === -1) {
      listeners[event].push(cb);
    }
  } else {
    listeners[event] = [].concat(cb);
  }
}

EventEmitter.prototype.emit = function (event) {
  var args = Array.prototype.slice.call(arguments);
  args.shift();
  this.listeners[event].forEach(cb => {
    cb.apply(null, args);
  });
}

EventEmitter.prototype.listeners = function (event) {
  return this.listeners[event];
}

EventEmitter.prototype.off = function (event, listener) {
  var listeners = this.listeners;
  var arr = listeners[event] || [];
  var i = arr.indexOf(listener);
  if (i >= 0) {
    listeners[event].splice(i, 1);
  }
}