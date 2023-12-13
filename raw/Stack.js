class Stack {
  constructor(malloc) {
    this.stack = [];
    if (malloc) {
      this.allocated = malloc
    }
  }
  push(value) {
    if (this.stack.length != this.malloc) {
      this.stack.push(value);
    }
  }
  pop(amount) {
    if (amount) {
      let r = [];
      for (let i = 0; i < amount; i++) {
        r = [...r, this.stack.pop()];
        if (this.stack.length == 0) {
          break;
        }
      }
      return r;
    } else {
      return this.stack.pop();
    }
  }
  peak(amount) {
    if (amount) {
      let r = [];
      for (let i = this.stack.length - 1, j = 0; i >= 0 && j < amount; i--) {
        r = [...r, this.stack[i]];
        if (this.stack.length == 0) {
          break;
        }
        j++;
      }
      return r;
    } else {
      return this.stack[this.stack.length - 1];
    }
  }
  dump(amount) {
    if (amount) {
      for (let i = 0; i < amount; i++) {
        this.stack.pop();
        if (this.stack.length == 0) {
          break;
        }
      }
      return;
    } else {
      this.stack.pop();
      return;
    }
  }
  dumpAll() {
    this.stack = [];
  }
  shift(amount) {
    if (amount) {
      let r = [];
      for (let i = 0; i < amount; i++) {
        r = [...r, this.stack.shift()];
        if (this.stack.length == 0) {
          break;
        }
      }
      return r;
    } else {
      return this.stack.shift();
    }
  }
  unshift(value) {
    if (this.stack.length != this.malloc) {
      this.stack.unshift(value);
    }
  }
  isEmpty() {
    return this.stack.length == 0;
  }
}
