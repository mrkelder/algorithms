function mergeSort(arr) {
  const newArray = Array.from(arr);

  for (let i = 0; i < newArray.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[j] < newArray[minIndex]) minIndex = j;
    }

    if (minIndex !== i) {
      const temp = newArray[i];
      newArray[i] = newArray[minIndex];
      newArray[minIndex] = temp;
    }
  }

  return newArray;
}

console.log(
  mergeSort([1, 6, 2, 4, 0, 3, -2, 2345, 0, 0, -12, 23, 6, 1, 8, 4, 1462, -2])
);
