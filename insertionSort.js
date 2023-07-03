function sortArray(arr) {
  const newArray = Array.from(arr);

  for (let i = 0; i < newArray.length; i++) {
    let j = i;
    while (j > 0 && newArray[j] < newArray[j - 1]) {
      const temp = newArray[j];
      newArray[j] = newArray[j - 1];
      newArray[j - 1] = temp;
      j--;
    }
  }

  return newArray;
}

console.log(
  sortArray([1, 2, 3, 5, 1, 2, 3, -1, 1, 2, 3, 5, -2, -5, -5, 0, 100, 2])
);
