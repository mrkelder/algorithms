const edgesList = [
  ["a", "b"],
  ["c", "d"],
  ["e", "d"],
  ["f", "d"],
  ["g", "d"],
  ["l"],
  ["z", "j"],
  ["z", "t"],
  ["j", "t"],
  ["o", "p"],
  ["p", "x"],
  ["x", "n"],
  ["n", "o"],
  ["o", "x"],
  ["p", "n"],
  ["k"],
];

const graph = edgesList.reduce(
  (acc, [edge1, edge2]) =>
    edge2
      ? {
          ...acc,
          [edge1]: [...(acc[edge1] ?? []), edge2],
          [edge2]: [...(acc[edge2] ?? []), edge1],
        }
      : { ...acc, [edge1]: [...(acc[edge1] ?? [])] },
  {}
);

function countGraphComponents() {
  const unvisitedGraph = new Set(Object.keys(graph));
  const iterator = unvisitedGraph.values();
  let count = 0;
  while (unvisitedGraph.size > 0) {
    const edgesStack = [iterator.next().value];

    while (edgesStack.length > 0) {
      const currentElement = edgesStack.pop();
      if (unvisitedGraph.has(currentElement))
        edgesStack.push(...graph[currentElement]);

      unvisitedGraph.delete(currentElement);
    }

    count++;
  }

  return count;
}

console.log(countGraphComponents());
