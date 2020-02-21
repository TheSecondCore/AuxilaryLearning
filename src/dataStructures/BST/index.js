import BinarySearchTree from './BST';

const bst = new BinarySearchTree();

bst.insertNode(3);
bst.insertNode(2);
bst.insertNode(6);
bst.insertNode(12);
bst.insertNode(64);
bst.insertNode(-123);
bst.insertNode(1);
bst.insertNode(12);
bst.insertNode(23);
bst.insertNode(60);
bst.insertNode(14);

console.log(bst.findNode(12));
