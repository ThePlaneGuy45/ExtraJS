# ExtraJS
A bunch of extra stuff for web-based (and node-based) javascript.

### Number.js
- `Number.floatBitsToUint()`: returns the bits of the 32-bit float as an unsigned integer
- `Number.uintBitsToFloat()`: returns the bits of unsigned integer as a float
### Math.js
- `Math.floatstep(x)`: returns the next largest 32-bit float
- `Math.int(f, a, b)`: integrates function `f` from `a` to `b` (does not support infinite integration)
- `Math.dFdx(f, x)`: returns derivative of function `f` at `x`
- `Math.sum(f, a, b)`: sums function `f` from `a` to `b` (does not support infinite summation)
- `Math.prod(f, a, b)`: returns product of function `f` from `a` to `b` (does not support infinite products)
- `Math.limit(f, x)`: returns the limit of function `f` at value `x`
- `Math.gcd(a, b)`: returns the GCD of `a` and `b` (integers only)
- `Math.lcm(a, b)`: returns the LCM of `a` and `b` (integers only)
- `Math.PHI`: golden ratio
- `Math.EULERGAMMA`: Euler's constant
### Stack.js
- `Stack`: Stack type (invoked with `new Stack(malloc)`
- `Stack.push(value)`: Push value to stack
- `Stack.pop(amount)`: Pop `amount` items from stack (pops one item if `amount` is `null`)
- `Stack.peak(amount)`: Returns stack items without poping
- `Stack.dump(amount)`: Removes `amount` items from stack
- `Stack.dumpAll()`: Clear stack
- `Stack.shift(amount)`: Shift `amount` value(s) off of stack
- `Stack.unshift(value)`: Unshift `value` on to stack
- `Stack.isEmpty()`: Returns `true` if stack is empty, `false` otherwise
### Vector.js
- `Vector2`: 2-Dimensional Vector (aliases: `vector2`, `Vec2`, `vec2`)
- `Vector3`: 3-Dimensional Vector (aliases: `vector3`, `Vec3`, `vec3`)
- `Vector4`: 4-Dimensional Vector (aliases: `vector4`, `Vec4`, `vec4`)
- `VectorN.xyzw`: Swizzling
- `VectorN.add(b)`: Add vector `b` to vector
- `VectorN.sub(b)`: Subtract vector `b` from vector
- `VectorN.scale(v)`: Scale vector by value `v`
- `VectorN.mul(b)`: Multiply vector by vector `b`
- `VectorN.div(b)`: Divide vector by vector `b`
- `VectorN.exp(b)`: Raise vector to the power of vector `b`
- `VectorN.len()`: Return length of vector
- `VectorN.dist(b)`: Calculate distance between vector and vector `b`
- `VectorN.norm()`: Return normal of vector
- `VectorN.dot(b)`: Return dot product of vector and vector `b`
- `VectorN.lerp(b, t)`: interpolate between vector and vector `b` by `t`
- `VectorN.toArray()`: Return vector as an array
- `VectorN.toString()`: Return vector as a string
- `VectorN.set(x, y, ...)`: Set vector
- `Vector3.cross(b)`: Return cross product of vector and vector `b`
- `Vector3.reflect(b)`: Reflect vector across plane `b`
- `Vector4.cross(b)`: Return cross product of vector and vector `b`
- `Vector4.reflect(b)`: Reflect vector across plane `b`
- `Array.toVector()`: Return an array as a vector
