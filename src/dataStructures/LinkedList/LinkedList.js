import Node from './Node';

class LinkedList {
  constructor() {
    this.head = null;
  }

  display() {
    if (!this.head) {
      return undefined;
    }
    const displayArray = [];
    let tail = this.head;
    while (tail !== null) {
      displayArray.push(tail);
      tail = tail.next;
    }
    return displayArray;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  deleteAtBeginning() {
    if (!this.head) {
      return undefined;
    }
    this.head = this.head.next;
    return this.head;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;
    return this.head;
  }

  deleteAtEnd() {
    if (!this.head) {
      return undefined;
    }
    if (!this.head.next) {
      this.head = null;
      return undefined;
    }
    let previous = this.head;
    let tail = this.head.next;
    while (tail.next !== null) {
      previous = tail;
      tail = tail.next;
    }
    previous.next = null;
    return this.head;
  }

  findNodeByValue(data) {
    if (!this.head) return undefined;
    let tail = this.head;
    while (tail !== null) {
      if (data === tail.data) return tail;
      tail = tail.next;
    }
    return undefined;
  }
}

export default LinkedList;
