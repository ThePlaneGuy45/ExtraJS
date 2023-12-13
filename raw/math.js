// Number manipulations used by the math (some real hacky stuff bc js has horrible bit manipulations for floats)
Number.prototype.floatBitsToUint = function() {
  var b = new ArrayBuffer(4);
  (new Float32Array(b))[0] = this.valueOf();
  return (new Uint32Array(b))[0];
}
Number.prototype.uintBitsToFloat = function() {
  var b = new ArrayBuffer(4);
  (new Uint32Array(b))[0] = this.valueOf();
  return (new Float32Array(b))[0];
}

// Bit Manipulations
Math.floatstep = (x) => {
  return (x.floatBitsToUint() + 1).uintBitsToFloat() - x;
}

// Calculus
Math.int = (f, a, b) => {
  if (a >= b) {
    return 0;
  }
  let t = 50,
    d = (b - a) / t,
    s = 0,
    x, y;
  for (let i = 0; i < t; i++) {
    x = a + i * d;
    y = f(x);
    s += y + 0.5 * (f(x + d) - y);
  }
  return s * d;
}
Math.dFdx = (f, x) => {
  var m = Math.floatstep(x);
  return (f(x + m) - f(x)) / m;
}
Math.sum = (f, a, b) => {
  let s = 0;
  for (let i = a; i < b; i++) {
    s += f(i);
  }
  return s;
}
Math.prod = (f, a, b) => {
  let s = 1;
  for (let i = a; i < b; i++) {
    s *= f(i);
  }
  return s;
}
Math.limit = (f, p) => {
  var m = Math.floatstep(p);
  return p == -Infinity ? f(-1e+128) : p == Infinity ? f(1e+128) : 0.5 * (f(p - m) + f(p + m));
}

// Number Theory
Math.radical = (a, b) => {
  return a ** (1 / b);
}
Math.gcd = (a, b) => {
  if (b) {
    return Math.gcd(b, a % b);
  } else {
    return a;
  }
}
Math.lcm = (a, b) => {
  return Math.abs(a * b) / Math.gcd(a, b)
}

// Constants
Math.PHI = (1 + Math.sqrt(5)) * 0.5; // Easier to just precalculate since it isn't an infinite series
Math.EULERGAMMA = 0.577215664901532860606512090082402431042159335939923598805767234884867726777664670936947063291746749514631447249807; // Should be enough digits for a 64-bit FPU
