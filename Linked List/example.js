// traverse the link list

const node3 = { data: 4, next: null };
const node2 = { data: 1, next: node3 };
const node1 = { data: 3, next: node2 };

function traverseLinkedList(head) {
  let currentNode = head;
  while (currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
}

traverseLinkedList(node1);
