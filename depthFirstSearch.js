const graph = {
  a: ["b", "e"],
  b: ["d"],
  c: ["f", "e"],
  d: ["c"],
  e: [],
  f: [],
};

function breadthFirstSearch(currentNode, graph) {
  const stack = [currentNode];

  while (stack.length > 0) {
    const removedElement = stack.pop();
    stack.push(...graph[removedElement]);
    console.log(removedElement);
  }
}

breadthFirstSearch("a", graph);
