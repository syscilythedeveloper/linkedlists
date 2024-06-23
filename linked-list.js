/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _get(idx) {
    let cur = this.head;
    let count = 0;

    while (cur !== null && count != idx) {
      count += 1;
      cur = cur.next;
    }

    return cur;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  print() {
    let currentNode = this.head;
    if (this.length === 0) {
      console.log("this list is empty");
    }

    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    if (this.length === 0) this.tail = this.head;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    // let currentNode = this.head;
    // let previous = null;

    // while (currentNode.next) {
    //   previous = currentNode;
    //   currentNode = currentNode.next;

    //   if (this.length === 1) {
    //     this.head = null;
    //     this.tail = null;
    //   }
    // }

    // this.tail = previous;
    // this.tail.next = null;
    // this.length--;

    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    // this.head = this.head.next;
    // this.length--;

    this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index");
    }
    let cur = this._get(idx);
    cur.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index");
    }
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    //get the node before the current node
    let prev = this._get(idx - 1);

    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index");
    }

    //remove first item
    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length--;
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    let prev = this._get(idx(-1));

    //remove tail
    if ((idx = this.length - 1)) {
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length--;
      return val;
    }

    //normal remove
    let val = prev.next.val;
    prev.next = prev.nex.next;
    this.length--;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;

let nums = new LinkedList();
console.log(nums);
nums.push(1);
nums.push(2);
nums.push(3);
nums.print();
nums.unshift(4);
nums.print();
nums.shift();
console.log("$$$$$$$$$$$$$$$$$$");
nums.print();
console.log(nums.getAt(2));

// console.log("Length: ", nums.length);
// nums.pop();
// console.log("Length: ", nums.length);
// nums.print();
