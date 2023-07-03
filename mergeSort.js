function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const leftArray = mergeSort(arr.slice(0, midIndex));
  const rightArray = mergeSort(arr.slice(midIndex));

  return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
  const mergedArray = [];
  const leftArrayCopy = Array.from(leftArray);
  const rightArrayCopy = Array.from(rightArray);

  while (leftArrayCopy.length > 0 && rightArrayCopy.length > 0) {
    if (leftArrayCopy[0] > rightArrayCopy[0])
      mergedArray.push(rightArrayCopy.shift());
    else mergedArray.push(leftArrayCopy.shift());
  }

  return mergedArray.concat(leftArrayCopy).concat(rightArrayCopy);
}

console.log(mergeSort([1, -5, 23, 12, 0, -83, 18, 643, -78, 9]));
