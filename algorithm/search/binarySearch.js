function binary_search(arr, item) {
  let low = 0
  let high = arr.length - 1

  while (low < high) {
    var mid = Math.floor((high + low) / 2)
    if (arr[mid] === item) return mid

    if (arr[mid] > item) {
      high = mid - 1
    }
    if (arr[mid] < item) {
      low = mid + 1
    }
  }
  return -1
}