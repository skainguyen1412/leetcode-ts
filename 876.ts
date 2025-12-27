// 876. Middle of the Linked List

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  // Need to find a middle node of the linked list
  const nodes: ListNode[] = [];
  let current = head;

  while (true) {
    nodes.push(current);

    if (current.next !== null) {
      current = current.next;
    } else {
      break;
    }
  }

  if (nodes.length % 2 == 0) {
    return nodes[nodes.length / 2];
  } else {
    const middleIndex = Math.trunc(nodes.length / 2);
    return nodes[middleIndex];
  }
}

//TODO: Implement a mathematic to get integer part of float using logic
function getIntergerFromFloat(value: number) {
  // This quite come from the formula and it is existed so i dont think we need to reinvent the wheel
}

function initListNode(head: number[]): ListNode {
  //
  const listNode = new ListNode(0);
  // Need to point something to next and keep it to reference in for loop
  let tempt = listNode;

  head.forEach((value, index) => {
    if (index == 0) {
      listNode.val = value;
    } else {
      tempt.next = new ListNode(value);
      tempt = tempt.next;
    }
  });

  return listNode;
}

function getNodeValue(head: ListNode): any[] {
  let current = head;
  let value = [];
  while (true) {
    value.push(current.val);

    if (current.next == null) {
      break;
    } else {
      current = current.next;
    }
  }

  return value;
}

let head = [1, 2, 3, 4, 5];

let linkedList = initListNode(head);
console.log(middleNode(linkedList));
