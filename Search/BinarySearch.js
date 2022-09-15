const { data } = require("./data");

const sortedData = data.sort((a, b) => a - b);

function binarySearch(data, value) {
  let low = 0;
  let high = data.length - 1;
  let mid = Math.floor(low + (high - low) / 2);

  while (low < high) {
    if (data[mid] === value) return mid;
    else if (data[mid] > value) high = mid;
    else if (data[mid] < value) low = mid + 1;

    mid = Math.floor(low + (high - low) / 2);
  }

  return -1;
}

console.log(sortedData);

console.log(binarySearch(sortedData, 94));
console.log(binarySearch(sortedData, 67));
console.log(binarySearch(sortedData, -293));
console.log(binarySearch(sortedData, 666));

// [ 1 2 3 4 5 6 7 ] - 6
