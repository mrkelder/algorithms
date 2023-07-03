const graph = {
  a: ["b", "e"],
  b: ["d"],
  c: ["f", "e", "z"],
  d: ["c"],
  e: [],
  f: [],
  z: [],
};

function breadthFirstSearch(currentNode, graph) {
  const stack = [currentNode];

  while (stack.length > 0) {
    const removedElement = stack.pop();
    stack.unshift(...graph[removedElement]);
    console.log(removedElement);
  }
}

breadthFirstSearch("a", graph);
