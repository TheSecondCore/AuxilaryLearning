/* eslint-disable max-classes-per-file */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  display() {
    if (!this.head) {
      return null;
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
      return null;
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
      return null;
    }
    if (!this.head.next) {
      this.head = null;
      return null;
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
    if (!this.head) return null;
    let tail = this.head;
    while (tail !== null) {
      if (data === tail.data) return tail;
      tail = tail.next;
    }
    return null;
  }
}

const singlyLinkedList = new LinkedList();

// Insertion
singlyLinkedList.insertAtBeginning('Is');
singlyLinkedList.insertAtBeginning('My Name');
singlyLinkedList.insertAtEnd('Martin');
singlyLinkedList.insertAtEnd('And');

console.log(singlyLinkedList.display());

// Linear Search
singlyLinkedList.findNodeByValue('Is');

// Deletion
singlyLinkedList.insertAtBeginning('ValueToBeDeleted');
singlyLinkedList.insertAtEnd('ValueToBeDeleted');
console.log(singlyLinkedList.display());
singlyLinkedList.deleteAtBeginning();
singlyLinkedList.deleteAtEnd();
singlyLinkedList.deleteAtEnd();
console.log(singlyLinkedList.display());
