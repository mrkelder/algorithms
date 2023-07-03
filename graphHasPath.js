const graph = {
  a: ["b", "e"],
  b: ["d"],
  c: ["f", "e", "z"],
  d: ["c"],
  e: [],
  f: [],
  z: [],
};

function hasPath(from, to) {
  let doesPathExist = false;
  const stack = [from];

  while (stack.length > 0 && !doesPathExist) {
    const removedElement = stack.pop();
    stack.unshift(...graph[removedElement]);
    doesPathExist = removedElement === to;
  }

  return doesPathExist;
}

console.log(hasPath("a", "b"), "a -> b");
console.log(hasPath("a", "e"), "a -> e");
console.log(hasPath("a", "c"), "a -> c");
console.log(hasPath("c", "a"), "c -> a");
console.log(hasPath("c", "z"), "c -> z");
console.log(hasPath("e", "a"), "e -> a");
console.log(hasPath("e", "d"), "e -> d");
