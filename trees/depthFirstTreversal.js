class Node {
  value = "";
  right = null;
  left = null;

  constructor(val) {
    this.value = val;
  }

  addRight(node) {
    this.right = node;
  }

  addLeft(node) {
    this.left = node;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const x = new Node("x");
const o = new Node("o");
const j = new Node("j");
const g = new Node("g");
const y = new Node("y");

a.addLeft(b);
a.addRight(e);
b.addLeft(c);
b.addRight(d);
d.addRight(x);
e.addLeft(o);
e.addRight(f);
o.addLeft(j);
o.addRight(g);
f.addLeft(y);

//            a
//        |       \
//       b         e
//      | \       |  \
//     c   d      o   f
//          \    | \   \
//           x   j  g   y
//

function depthFirstTreversal(root) {
  console.log(`Root set as ${root.value}`);
  const nodeStack = [root]; // for the sake of simplicity
  const values = new Set();

  while (nodeStack.length > 0) {
    const currentNode = nodeStack.pop();
    const nextNodes = [currentNode.left, currentNode.right].filter((i) => !!i);

    nodeStack.push(...nextNodes);
    values.add(currentNode.value);
  }

  return values;
}

function recursiveDepthFirstTreversal(currentNode) {
  if (currentNode === null) return [];
  return [
    currentNode.value,
    ...recursiveDepthFirstTreversal(currentNode.left),
    ...recursiveDepthFirstTreversal(currentNode.right),
  ];
}

console.log(depthFirstTreversal(a), depthFirstTreversal(e));
console.log(recursiveDepthFirstTreversal(a), recursiveDepthFirstTreversal(e));
