class Element {
  value = "";
  next = null;

  constructor(value) {
    this.value = value;
  }
}

class Queue {
  queue = { next: null };

  push(str) {
    const newElement = new Element(str);
    newElement.next = this.queue;
    this.queue = newElement;
  }

  pop() {
    let elementBefore = null;
    let currentElement = this.queue;

    if (!currentElement.next) {
      this.queue = { next: null };
      return;
    }

    while (currentElement.next) {
      elementBefore = currentElement;
      currentElement = currentElement.next;
    }

    elementBefore.next = null;
  }

  get() {
    console.log(this.queue);
  }
}

const queue = new Queue();
queue.get();
queue.push("1");
queue.get();
queue.push("2");
queue.get();
queue.push("3");
queue.get();
queue.push("4");
queue.get();
queue.pop();
queue.get();
queue.pop();
queue.get();
queue.pop();
queue.get();
queue.pop();
queue.get();
queue.pop();
queue.get();
queue.pop();
queue.get();
queue.pop();
