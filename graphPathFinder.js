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

function graphPathFinder(from, to, graph) {
  const stack = [[from, 0]];
  const graphVisits = new Set();

  while (stack.length > 0) {
    const [lastStackElement, currentDistance] = stack.pop();

    if (lastStackElement === to) return currentDistance;

    const adjacentNodes = graph[lastStackElement].map((adjacentNode) => [
      adjacentNode,
      currentDistance + 1,
    ]);

    if (!graphVisits.has(lastStackElement)) {
      stack.unshift(...adjacentNodes);
    }
    graphVisits.add(lastStackElement);
  }

  return "no";
}

const from = "p";
const to = "x";

console.log(
  `It's going to take ${graphPathFinder(
    from,
    to,
    graph
  )} steps to get from ${from} to ${to}`
);
