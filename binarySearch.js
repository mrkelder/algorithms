function findElement(arr, seekedElement, safe = 5) {
  if (safe <= 0) return null;

  const half = Math.floor(arr.length / 2);
  const midElement = arr[half];

  if (midElement === seekedElement) return midElement;
  else if (midElement > seekedElement)
    return findElement(arr.slice(0, half), seekedElement, safe - 1);
  else if (midElement < seekedElement)
    return findElement(
      arr.slice(half + 1, arr.length, safe - 1),
      seekedElement,
      safe - 1
    );
  else return null;
}

console.log(findElement([1, 2, 3, 4, 5], 2));
console.log(
  findElement(
    [-1000, 1, 2, 3, 4, 5, 7, 19, 45, 1002, 2791, 6206, 12235, 68927],
    2
  )
);

console.log(findElement([1, 2], 2));
