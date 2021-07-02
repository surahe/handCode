function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function formatNumber2(num) {
  return num.toLocaleString('en-US')
}

console.log(formatNumber(12345678))
console.log(formatNumber2(12345678))