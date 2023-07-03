const graph = {
  a: [
    ["b", 1],
    ["c", 3],
  ],
  b: [
    ["d", 3],
    ["f", 6],
  ],
  c: [
    ["b", 0],
    ["e", 3],
  ],
  d: [["f", 5]],
  e: [["f", 0]],
  f: [],
};

function createDistanceObject(graph) {
  const distance = {};

  for (const node of Object.keys(graph)) distance[node] = "∞";

  return distance;
}

function dijkstraShortestPath(source, graph) {
  const distance = createDistanceObject(graph);

  const stack = [source];

  while (stack.length > 0) {}
}
