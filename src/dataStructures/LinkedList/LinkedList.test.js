import LinkedList from './LinkedList';
import Node from './Node';

describe('Linked List', () => {
  let linkedListInstance = null;
  beforeEach(() => {
    linkedListInstance = new LinkedList();
  });

  describe('Node', () => {
    it('should instantiate an empty node', () => {
      // Given
      const targetNode = {
        data: '🐶',
        next: null,
      };
      // When
      const newNode = new Node('🐶');
      // Then
      expect(newNode).toMatchObject(targetNode);
    });
  });

  describe('insertAtEnd', () => {
    it('should create the head node', () => {
      // Given
      const targetHeadNode = {
        data: 1,
        next: null,
      };
      // When
      linkedListInstance.insertAtEnd(1);
      // Then
      expect(linkedListInstance.head).toMatchObject(targetHeadNode);
    });

    it('should insert a node at the end', () => {
      // Given
      linkedListInstance.insertAtEnd(1);
      // When
      linkedListInstance.insertAtEnd(2);
      // Then
      expect(linkedListInstance.head.next.data).toBe(2);
    });
  });

  describe('insertAtBeginning', () => {
    it('should insert a node at the begginning', () => {
      // Given
      linkedListInstance.insertAtEnd(2);
      // When
      linkedListInstance.insertAtBeginning(1);
      // Then
      expect(linkedListInstance.head.data).toBe(1);
    });
  });

  describe('deleteAtEnd', () => {
    it('should delete a node at the end', () => {
      // Given
      linkedListInstance.insertAtEnd(1);
      linkedListInstance.insertAtEnd(2);
      // When
      linkedListInstance.deleteAtEnd();
      // Then
      expect(linkedListInstance.head.next).toBeNull();
    });

    it('should return undefined when trying to delete on an empty linked list', () => {
      expect(linkedListInstance.deleteAtEnd()).toBeUndefined();
    });
  });

  describe('deleteAtBeginning', () => {
    it('should delete a node at the begginning', () => {
      // Given
      linkedListInstance.insertAtEnd(1);
      linkedListInstance.insertAtEnd(2);
      // When
      linkedListInstance.deleteAtBeginning();
      // Then
      expect(linkedListInstance.head.data).toBe(2);
    });

    it('should return undefined when trying to delete on an empty linked list', () => {
      expect(linkedListInstance.deleteAtBeginning()).toBeUndefined();
    });
  });

  describe('findNodeByValue', () => {
    it('should return the first node with matching value', () => {
      // Given
      linkedListInstance.insertAtEnd(1);
      linkedListInstance.insertAtEnd(2);
      linkedListInstance.insertAtEnd(3);
      const targetNode = {
        data: 2,
        next: {
          data: 3,
          next: null,
        },
      };
      // When
      const foundNode = linkedListInstance.findNodeByValue(2);
      // Then
      expect(foundNode).toMatchObject(targetNode);
    });
  });
});
