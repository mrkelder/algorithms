const ocean = [
  [0, 1, 1, 0, 0],
  [1, 1, 0, 1, 1],
  [0, 1, 0, 0, 1],
  [0, 1, 1, 0, 1],
];

const visitedCells = new Set();

function countIslands(ocean) {
  let count = 0;

  for (let row = 0; row < ocean.length; row++) {
    for (let col = 0; col < ocean[row].length; col++) {
      if (
        ocean[row][col] === 1 &&
        !visitedCells.has(JSON.stringify([row, col]))
      ) {
        count++;
        exploreCell(ocean, row, col);
      }
    }
  }

  return count;
}

function exploreCell(ocean, row, col) {
  const stack = [[row, col]];
  while (stack.length > 0) {
    const currentCell = stack.pop();
    const [currentRow, currentCol] = currentCell;

    if (!visitedCells.has(JSON.stringify(currentCell)))
      stack.push(...findNeighbours(ocean, currentRow, currentCol));

    visitedCells.add(JSON.stringify(currentCell));
  }
}

function findNeighbours(ocean, row, col) {
  const aboveNeighbour = getCell(ocean, row - 1, col);
  const belowNeighbour = getCell(ocean, row + 1, col);
  const leftNeighbour = getCell(ocean, row, col - 1);
  const rightNeighbour = getCell(ocean, row, col + 1);

  return [
    ...aboveNeighbour,
    ...belowNeighbour,
    ...leftNeighbour,
    ...rightNeighbour,
  ];
}

function getCell(ocean, row, col) {
  try {
    if (Boolean(ocean[row][col])) return [[row, col]];
    else return [];
  } catch {
    return [];
  }
}

console.log(countIslands(ocean));
