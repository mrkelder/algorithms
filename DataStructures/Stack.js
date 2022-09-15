const { LinkedList } = require("./LinkedList");

// built-in kind of stack
const stack1 = [];

stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1);
stack1.pop();
console.log(stack1);

// stack with linked lists

const stack2 = new LinkedList();

stack2.insert(1);
stack2.insert(2);
stack2.insert(3);
stack2.print();
stack2.remove();
