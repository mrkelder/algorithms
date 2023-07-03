const graph = {
  a: ["c", "b"],
  b: ["e", "d", "a", "c"],
  c: ["b", "a"],
  d: ["b"],
  e: ["b", "p"],
  p: ["e"],
};

const graphVisits = new Set();

function hasPath(from, to) {
  let doesPathExist = false;
  const stack = [from];

  while (stack.length > 0 && !doesPathExist) {
    const lastStackElement = stack.pop();

    if (!graphVisits.has(lastStackElement)) {
      stack.push(...graph[lastStackElement]);
    }
    graphVisits.add(lastStackElement);
    doesPathExist = lastStackElement === to;
  }

  return doesPathExist;
}

console.log(hasPath("a", "c"), "a -> d");
