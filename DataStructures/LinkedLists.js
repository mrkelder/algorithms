class LinkedList {
  #list = null;

  print() {
    let currentLink = this.#list;
    if (!currentLink) console.log("List is empty");
    while (currentLink) {
      console.log(currentLink.val);
      currentLink = currentLink.next;
    }

    return this;
  }

  insert(val) {
    const newLink = { val: val, next: null };
    if (!this.#list) this.#list = newLink;
    else {
      let currentLink = this.#list;
      while (currentLink.next !== null) currentLink = currentLink.next;
      currentLink.next = newLink;
    }

    return this;
  }

  remove() {
    if (!this.#list || !this.#list.next) this.#list = null;
    else if (this.#list) {
      let currentLink = this.#list;
      let prevLink = null;
      while (currentLink.next !== null) {
        prevLink = currentLink;
        currentLink = currentLink.next;
      }

      prevLink.next = null;
    }

    return this;
  }
}

module.exports = { LinkedList: LinkedList };
