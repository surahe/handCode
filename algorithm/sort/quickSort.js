function quickSort(arr) {
  // 递归出口
  if (arr.length < 2) return arr

  const left = []
  const right = []
  const pivotValue = arr[0] // 中心点

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivotValue) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  // quickSort(left).concat(pivotValue,quickSort(right))
  return [...quickSort(left), pivotValue, ...quickSort(right)] 
}