const { data } = require("./data");

function linearSearch(data, value) {
  console.log(data);
  let index = -1;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === value) {
      index = i;
      break;
    }
  }
  return index;
}

console.log(`index is ${linearSearch(data, 127)}`);
