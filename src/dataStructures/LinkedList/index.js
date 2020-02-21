import LinkedList from './LinkedList';

const singlyLinkedList = new LinkedList();

// Insertion
singlyLinkedList.insertAtBeginning('Is');
singlyLinkedList.insertAtBeginning('My Name');
singlyLinkedList.insertAtEnd('Martin');
singlyLinkedList.insertAtEnd('And');

singlyLinkedList.display();

// Linear Search
singlyLinkedList.findNodeByValue('Is');

// Deletion
singlyLinkedList.insertAtBeginning('ValueToBeDeleted');
singlyLinkedList.insertAtEnd('ValueToBeDeleted');
singlyLinkedList.display();
singlyLinkedList.deleteAtBeginning();
singlyLinkedList.deleteAtEnd();
singlyLinkedList.display();
