/* eslint-disable max-classes-per-file */
// THIS IS CODE TO CTRL+C CTRL+V IN THE CONSOLE, WITHOUT IMPORTS.
class Node {
  constructor(data, right = null, left = null) {
    this.data = data;
    this.right = right;
    this.left = left;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNode(data, left = null, right = null) {
    const newNode = new Node(data, left, right);
    if (!this.root) {
      this.root = newNode;
      return this.root;
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

  findNode(value) {
    if (!this.root) {
      return undefined;
    }

    const auxilarySearch = (node, data) => {
      if (node === null) return null;
      if (data < node.data) {
        return auxilarySearch(node.left, data);
      }
      if (data > node.data) {
        return auxilarySearch(node.right, data);
      }
      return node;
    };

    return auxilarySearch(this.root, value);
  }
}

const bst = new BinarySearchTree();
bst.insertNode(1);
bst.insertNode(12);
bst.insertNode(23);
bst.insertNode(60);
bst.insertNode(14);

console.log(bst.findNode(12));
