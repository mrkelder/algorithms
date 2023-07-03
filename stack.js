class Element {
  #value = "";
  next = null;

  constructor(value) {
    this.#value = value;
  }

  get value() {
    return this.#value;
  }

  set value(_) {
    throw new Error("Direct updates are not allowed");
  }
}

class Stack {
  stack = { next: null };

  push(str) {
    const newElement = new Element(str);
    newElement.next = this.stack;
    this.stack = newElement;
  }

  pop() {
    if (this.stack.next) this.stack = this.stack.next;
  }

  get() {
    if (this.stack.next) console.log(this.stack.value);
    else console.log("Stack is empty");
  }
}

const stack = new Stack();
stack.get();
stack.push("1");
stack.get();
stack.push("2");
stack.get();
stack.push("3");
stack.get();
stack.push("4");
stack.get();
stack.pop();
stack.get();
stack.pop();
stack.get();
stack.pop();
stack.get();
stack.pop();
stack.get();
stack.pop();
stack.get();
stack.pop();
stack.get();
stack.pop();
