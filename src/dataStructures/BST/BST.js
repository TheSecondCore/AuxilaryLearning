import Node from './Node';

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNode(data, left = null, right = null) {
    const newNode = new Node(data, left, right);
    if (!this.root) {
      this.root = newNode;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if (data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this.root;
  }
}

export default BinarySearchTree;
