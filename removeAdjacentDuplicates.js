class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    return this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.size() - 1];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}
function removeDuplicates(s) {
  let output = new Stack();
  output.push(s[0]);
  //console.log(output.peek());
  for (let x = 1; x < s.length; x++) {
    //console.log(output.peek());
    if (output.peek() == s[x]) {
      output.pop();
    } else {
      output.push(s[x]);
    }
  }
  console.log(output.items.join(""));
}

removeDuplicates("abbaca");
removeDuplicates("abba");
removeDuplicates("azxxzy");

// Time Complexity: O(n)
// Space Complexity: O(n)