function bubbleSort(arr) {
  var i = arr.length, j;
  var tempExchangVal;
  while (i > 0) {
    for (j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        tempExchangVal = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tempExchangVal;
      }
    }
    i--;
  }
  return arr;
}
