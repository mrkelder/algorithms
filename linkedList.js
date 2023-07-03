class Element {
  value = undefined;
  next = null;

  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  list = null;
  count = 0;

  getLastElement() {
    if (this.count === 0) return null;

    let currentElement = this.list;
    let nextElement = this.list.next;
    while (nextElement) {
      currentElement = nextElement;
      nextElement = nextElement.next;
    }

    return currentElement;
  }

  getElementAt(index) {
    if (this.count === 0) return null;

    const validatedIndex = Math.max(index, 0);
    let foundElement = this.list;
    for (let i = 0; i < validatedIndex; i++) foundElement = foundElement.next;
    return foundElement;
  }

  insertElement(value) {
    const newElement = new Element(value);

    if (this.count === 0) this.list = newElement;
    else this.getLastElement().next = newElement;
    this.count++;
  }

  deleteElementAt(index) {
    if (index <= this.count - 1 && index >= 0 && this.count > 0) {
      const prevElement = this.getElementAt(index - 1);
      const deletedElement = this.getElementAt(index);

      if (index === 0) this.list = deletedElement.next;
      else {
        prevElement.next = deletedElement.next;
      }

      this.count--;
    }
  }

  printList() {
    console.log(this.list);
  }
}

const list = new LinkedList();

list.insertElement(1);
list.insertElement(2);
list.insertElement(3);
list.insertElement("Wow");

list.printList();

list.deleteElementAt(15);

list.printList();

list.deleteElementAt(0);

list.printList();

list.deleteElementAt(0);
list.deleteElementAt(0);
list.deleteElementAt(0);
list.deleteElementAt(0);

list.printList();
