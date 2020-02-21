import BinarySearchTree from './BST';
import Node from './Node';

describe('Binary Search Tree', () => {
  let bstInstance = null;
  beforeEach(() => {
    bstInstance = new BinarySearchTree();
  });

  describe('Node', () => {
    it('should instantiate an empty node', () => {
      // Given
      const targetNode = {
        data: '🐄',
        left: null,
        right: null,
      };
      // When
      const newNode = new Node('🐄');
      // Then
      expect(newNode).toMatchObject(targetNode);
    });
  });

  describe('insertNode', () => {
    it('should create the root node', () => {
      // Given
      const targetRootNode = {
        data: '🦄',
        left: null,
        right: null,
      };
      // When
      bstInstance.insertNode('🦄');
      // Then
      expect(bstInstance.root).toMatchObject(targetRootNode);
    });

    it('should insert the lesser node to the left', () => {
      // Given
      bstInstance.insertNode(2);
      // When
      bstInstance.insertNode(1);
      // Then
      expect(bstInstance.root.left.data).toBe(1);
    });

    it('should insert the greater node to the right', () => {
      // Given
      bstInstance.insertNode(1);
      // When
      bstInstance.insertNode(2);
      // Then
      expect(bstInstance.root.right.data).toBe(2);
    });
  });

  describe('findNode', () => {
    it('should find and return the matching by value node', () => {
      // Given
      bstInstance.insertNode(5);
      bstInstance.insertNode(6);
      bstInstance.insertNode(4);
      bstInstance.insertNode(3);
      const targetNode = {
        data: 4,
        left: {
          data: 3,
          left: null,
          right: null,
        },
        right: null,
      };
      // When
      const foundNode = bstInstance.findNode(4);
      // Then
      expect(foundNode).toMatchObject(targetNode);
    });
  });
});
