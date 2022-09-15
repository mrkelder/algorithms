const { LinkedList } = require("./LinkedLists");

// with arrays
const queue1 = [];

queue1.unshift(1);
queue1.unshift(2);
queue1.unshift(3);
console.log(queue1);
queue1.pop();
console.log(queue1);

// manually

class Queue extends LinkedList {
  insert(val) {
    const newLink = { val: val, next: null };
    if (!this.list) this.list = newLink;
    else {
      newLink.next = this.list;
      this.list = newLink;
    }

    return this;
  }
}

const queue2 = new Queue();

queue2.insert(1);
queue2.insert(2);
queue2.insert(3);
queue2.print();
console.log("after");
queue2.remove();
queue2.print();
queue2.remove();
queue2.remove();
queue2.remove();
queue2.remove();
queue2.print();
