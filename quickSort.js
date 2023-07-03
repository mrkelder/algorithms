let _test = 0;

function quickSort(arr, start, end) {
  if (end <= start || ++_test > 30) return;

  const pivot = getPivotBetweenPartitions(arr, start, end);
  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);
}

function getPivotBetweenPartitions(arr, start, end) {
  const pivotElement = arr[end];
  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (arr[j] < pivotElement) {
      i++;
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
  i++;

  const temp = arr[end];
  arr[end] = arr[i];
  arr[i] = temp;

  return i;
}

const testArr = [1, -2, 4, 0, 0, -2, 61, 267889, -2732, 21, 72, -23, 0];

quickSort(testArr, 0, testArr.length - 1);

console.log(JSON.stringify(testArr));
