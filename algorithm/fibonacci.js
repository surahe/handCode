function fibonacci(n) {
  if (n <= 1) return n
  return fibonacci(n-1) + fibonacci(n-2)
}

//  1 1 2 3 5 8 13
function fibonacci2(n) {
  var current = 0
  var next = 1
  var temp
  for (var i = 0; i < n; i++) {
    temp = current
    current = next
    next += temp
  }
  return current
}

function fib(n, current = 0, next = 1) {
  if(n == 0) return 0;
  if(n == 1) return next; // return next
  return fib(n - 1, next, current + next);
}

fib(5)