function sortArray(arr, increasingOrder = true) {
  console.log(increasingOrder ? "Increasing order" : "Decreasing order");
  const sortedArray = Array.from(arr);

  for (let i = 0; i < sortedArray.length; i++)
    for (let j = 0; j < sortedArray.length - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1] === increasingOrder) {
        const temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }

  return sortedArray;
}

console.log(sortArray([-25, 0, 123, 62, -124, 6, 6, 41, -2, 3, 4]));
console.log(sortArray([-25, 0, 123, 62, -124, 6, 6, 41, -2, 3, 4], false));
