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
function isValid(s) {
  //s = s.trim().split("");
  const pairs = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  let output = new Stack();
  output.push(s[0]);
  //console.log(output.peek());
  for (let x = 1; x < s.length; x++) {
    //console.log(pairs.get(S[x]));
    if (s[x] == "(" || s[x] == "{" || s[x] == "[") {
      output.push(s[x]);
    } else {
      if (output.peek() == pairs.get(s[x])) {
        output.pop();
      } else {
        output.push(s[x]);
      }
    }
  }
  if (output.isEmpty()) {
    console.log("true");
  } else {
    console.log("false");
  }
}

isValid("()");
isValid("()[]{}");
isValid("(]");
isValid("{()}");
isValid("{(})");

// Time Complexity: O(n)
// Space Complexity: O(n)