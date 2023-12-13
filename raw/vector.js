/* Vector2 Class ***********************/

class Vector2 {
    constructor ( x, y ) {
        this.x = x;
        this.y = y;
    }
    
    /* Swizzling *******/
    get xx() { return new Vector2(this.x, this.x); }
    get xy() { return new Vector2(this.x, this.y); }
    get yx() { return new Vector2(this.y, this.x); }
    get yy() { return new Vector2(this.y, this.y); }
    get xxx() { return new Vector3(this.x, this.x, this.x); }
    get xxy() { return new Vector3(this.x, this.x, this.y); }
    get xyx() { return new Vector3(this.x, this.y, this.x); }
    get xyy() { return new Vector3(this.x, this.y, this.y); }
    get yxx() { return new Vector3(this.y, this.x, this.x); }
    get yxy() { return new Vector3(this.y, this.x, this.y); }
    get yyx() { return new Vector3(this.y, this.y, this.x); }
    get yyy() { return new Vector3(this.y, this.y, this.y); }
    get xxxx() { return new Vector4(this.x, this.x, this.x, this.x); }
    get xxxy() { return new Vector4(this.x, this.x, this.x, this.y); }
    get xxyx() { return new Vector4(this.x, this.x, this.y, this.x); }
    get xxyy() { return new Vector4(this.x, this.x, this.y, this.y); }
    get xyxx() { return new Vector4(this.x, this.y, this.x, this.x); }
    get xyxy() { return new Vector4(this.x, this.y, this.x, this.y); }
    get xyyx() { return new Vector4(this.x, this.y, this.y, this.x); }
    get xyyy() { return new Vector4(this.x, this.y, this.y, this.y); }
    get yxxx() { return new Vector4(this.y, this.x, this.x, this.x); }
    get yxxy() { return new Vector4(this.y, this.x, this.x, this.y); }
    get yxyx() { return new Vector4(this.y, this.x, this.y, this.x); }
    get yxyy() { return new Vector4(this.y, this.x, this.y, this.y); }
    get yyxx() { return new Vector4(this.y, this.y, this.x, this.x); }
    get yyxy() { return new Vector4(this.y, this.y, this.x, this.y); }
    get yyyx() { return new Vector4(this.y, this.y, this.y, this.x); }
    get yyyy() { return new Vector4(this.y, this.y, this.y, this.y); }

    /* Math Functions *******/
    add(b) { this.x += b.x; this.y += b.y; return this; }
    sub(b) { this.x -= b.x; this.y -=b.y; return this; }
    subtract(b) { return this.sub(b); }
    scale(b) { this.x *= b; this.y *= b; return this; }
    mul(b) { this.x *= b.x; this.y *= b.y; return this; }
    multiply(b) { return this.mul(b); }
    div(b) { this.x /= b.x; this.y /= b.y; return this; }
    divide(b) { return this.div(b); }
    exp(b) { this.x **= b.x; this.y **= b.y; return this; }
    pow(b) { return this.exp(b); }
    len() { return Math.sqrt( this.x * this.x + this.y * this.y ); }
    length() { return this.len(); }
    dist(b) { return this.sub(b).len(); }
    distance(b) { return this.distance(b); }
    norm() { let l = this.len(); return this.div(new Vector2(l, l)); }
    normalize() { return this.norm(); }
    dot(b) { return this.x * b.x + this.y * b.y; }
    lerp(b, t) { return this.add(b.sub(this).scale(t)); }
    interpolate(b, t) { return this.lerp(b, t); }

    /* Non-Math Functions *******/
    toArray() { return [this.x, this.y]; }
    toString() { return ("(" + this.x + ", " + this.y + ")"); }
    set(x, y) { this.x = x; this.y = y; }
}
vector2 = Vector2; // Aliases
Vec2 = Vector2;
vec2 = Vector2;

/* Vector3 Class ***********************/

class Vector3 {
    constructor ( x, y, z ) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /* Swizzling *******/
    get xx() { return new Vector2(this.x, this.x); }
    get xy() { return new Vector2(this.x, this.y); }
    get xz() { return new Vector2(this.x, this.z); }
    get yx() { return new Vector2(this.y, this.x); }
    get yy() { return new Vector2(this.y, this.y); }
    get yz() { return new Vector2(this.y, this.z); }
    get zx() { return new Vector2(this.z, this.x); }
    get zy() { return new Vector2(this.z, this.y); }
    get zz() { return new Vector2(this.z, this.z); }
    get xxx() { return new Vector3(this.x, this.x, this.x); }
    get xxy() { return new Vector3(this.x, this.x, this.y); }
    get xxz() { return new Vector3(this.x, this.x, this.z); }
    get xyx() { return new Vector3(this.x, this.y, this.x); }
    get xyy() { return new Vector3(this.x, this.y, this.y); }
    get xyz() { return new Vector3(this.x, this.y, this.z); }
    get xzx() { return new Vector3(this.x, this.z, this.x); }
    get xzy() { return new Vector3(this.x, this.z, this.y); }
    get xzz() { return new Vector3(this.x, this.z, this.z); }
    get yyx() { return new Vector3(this.y, this.y, this.x); }
    get yyy() { return new Vector3(this.y, this.y, this.y); }
    get yyz() { return new Vector3(this.y, this.y, this.z); }
    get yxx() { return new Vector3(this.y, this.x, this.x); }
    get yxy() { return new Vector3(this.y, this.x, this.y); }
    get yxz() { return new Vector3(this.y, this.x, this.z); }
    get yzx() { return new Vector3(this.y, this.z, this.x); }
    get yzy() { return new Vector3(this.y, this.z, this.y); }
    get yzz() { return new Vector3(this.y, this.z, this.z); }
    get zxx() { return new Vector3(this.z, this.x, this.x); }
    get zxy() { return new Vector3(this.z, this.x, this.y); }
    get zxz() { return new Vector3(this.z, this.x, this.z); }
    get zyx() { return new Vector3(this.z, this.y, this.x); }
    get zyy() { return new Vector3(this.z, this.y, this.y); }
    get zyz() { return new Vector3(this.z, this.y, this.z); }
    get zzx() { return new Vector3(this.z, this.z, this.x); }
    get zzy() { return new Vector3(this.z, this.z, this.y); }
    get zzz() { return new Vector3(this.z, this.z, this.z); }
    get xxxx() { return new Vector4(this.x, this.x, this.x, this.x); }
    get xxxy() { return new Vector4(this.x, this.x, this.x, this.y); }
    get xxxz() { return new Vector4(this.x, this.x, this.x, this.z); }
    get xxyx() { return new Vector4(this.x, this.x, this.y, this.x); }
    get xxyy() { return new Vector4(this.x, this.x, this.y, this.y); }
    get xxyz() { return new Vector4(this.x, this.x, this.y, this.z); }
    get xxzx() { return new Vector4(this.x, this.x, this.z, this.x); }
    get xxzy() { return new Vector4(this.x, this.x, this.z, this.y); }
    get xxzz() { return new Vector4(this.x, this.x, this.z, this.z); }
    get xyxx() { return new Vector4(this.x, this.y, this.x, this.x); }
    get xyxy() { return new Vector4(this.x, this.y, this.x, this.y); }
    get xyxz() { return new Vector4(this.x, this.y, this.x, this.z); }
    get xyyx() { return new Vector4(this.x, this.y, this.y, this.x); }
    get xyyy() { return new Vector4(this.x, this.y, this.y, this.y); }
    get xyyz() { return new Vector4(this.x, this.y, this.y, this.z); }
    get xyzx() { return new Vector4(this.x, this.y, this.z, this.x); }
    get xyzy() { return new Vector4(this.x, this.y, this.z, this.y); }
    get xyzz() { return new Vector4(this.x, this.y, this.z, this.z); }
    get xzxx() { return new Vector4(this.x, this.z, this.x, this.x); }
    get xzxy() { return new Vector4(this.x, this.z, this.x, this.y); }
    get xzxz() { return new Vector4(this.x, this.z, this.x, this.z); }
    get xzyx() { return new Vector4(this.x, this.z, this.y, this.x); }
    get xzyy() { return new Vector4(this.x, this.z, this.y, this.y); }
    get xzyz() { return new Vector4(this.x, this.z, this.y, this.z); }
    get xzzx() { return new Vector4(this.x, this.z, this.z, this.x); }
    get xzzy() { return new Vector4(this.x, this.z, this.z, this.y); }
    get xzzz() { return new Vector4(this.x, this.z, this.z, this.z); }
    get yxxx() { return new Vector4(this.y, this.x, this.x, this.x); }
    get yxxy() { return new Vector4(this.y, this.x, this.x, this.y); }
    get yxxz() { return new Vector4(this.y, this.x, this.x, this.z); }
    get yxyx() { return new Vector4(this.y, this.x, this.y, this.x); }
    get yxyy() { return new Vector4(this.y, this.x, this.y, this.y); }
    get yxyz() { return new Vector4(this.y, this.x, this.y, this.z); }
    get yxzx() { return new Vector4(this.y, this.x, this.z, this.x); }
    get yxzy() { return new Vector4(this.y, this.x, this.z, this.y); }
    get yxzz() { return new Vector4(this.y, this.x, this.z, this.z); }
    get yyxx() { return new Vector4(this.y, this.y, this.x, this.x); }
    get yyxy() { return new Vector4(this.y, this.y, this.x, this.y); }
    get yyxz() { return new Vector4(this.y, this.y, this.x, this.z); }
    get yyyx() { return new Vector4(this.y, this.y, this.y, this.x); }
    get yyyy() { return new Vector4(this.y, this.y, this.y, this.y); }
    get yyyz() { return new Vector4(this.y, this.y, this.y, this.z); }
    get yyzx() { return new Vector4(this.y, this.y, this.z, this.x); }
    get yyzy() { return new Vector4(this.y, this.y, this.z, this.y); }
    get yyzz() { return new Vector4(this.y, this.y, this.z, this.z); }
    get yzxx() { return new Vector4(this.y, this.z, this.x, this.x); }
    get yzxy() { return new Vector4(this.y, this.z, this.x, this.y); }
    get yzxz() { return new Vector4(this.y, this.z, this.x, this.z); }
    get yzyx() { return new Vector4(this.y, this.z, this.y, this.x); }
    get yzyy() { return new Vector4(this.y, this.z, this.y, this.y); }
    get yzyz() { return new Vector4(this.y, this.z, this.y, this.z); }
    get yzzx() { return new Vector4(this.y, this.z, this.z, this.x); }
    get yzzy() { return new Vector4(this.y, this.z, this.z, this.y); }
    get yzzz() { return new Vector4(this.y, this.z, this.z, this.z); }
    get zxxx() { return new Vector4(this.z, this.x, this.x, this.x); }
    get zxxy() { return new Vector4(this.z, this.x, this.x, this.y); }
    get zxxz() { return new Vector4(this.z, this.x, this.x, this.z); }
    get zxyx() { return new Vector4(this.z, this.x, this.y, this.x); }
    get zxyy() { return new Vector4(this.z, this.x, this.y, this.y); }
    get zxyz() { return new Vector4(this.z, this.x, this.y, this.z); }
    get zxzx() { return new Vector4(this.z, this.x, this.z, this.x); }
    get zxzy() { return new Vector4(this.z, this.x, this.z, this.y); }
    get zxzz() { return new Vector4(this.z, this.x, this.z, this.z); }
    get zyxx() { return new Vector4(this.z, this.y, this.x, this.x); }
    get zyxy() { return new Vector4(this.z, this.y, this.x, this.y); }
    get zyxz() { return new Vector4(this.z, this.y, this.x, this.z); }
    get zyyx() { return new Vector4(this.z, this.y, this.y, this.x); }
    get zyyy() { return new Vector4(this.z, this.y, this.y, this.y); }
    get zyyz() { return new Vector4(this.z, this.y, this.y, this.z); }
    get zyzx() { return new Vector4(this.z, this.y, this.z, this.x); }
    get zyzy() { return new Vector4(this.z, this.y, this.z, this.y); }
    get zyzz() { return new Vector4(this.z, this.y, this.z, this.z); }
    get zzxx() { return new Vector4(this.z, this.z, this.x, this.x); }
    get zzxy() { return new Vector4(this.z, this.z, this.x, this.y); }
    get zzxz() { return new Vector4(this.z, this.z, this.x, this.z); }
    get zzyx() { return new Vector4(this.z, this.z, this.y, this.x); }
    get zzyy() { return new Vector4(this.z, this.z, this.y, this.y); }
    get zzyz() { return new Vector4(this.z, this.z, this.y, this.z); }
    get zzzx() { return new Vector4(this.z, this.z, this.z, this.x); }
    get zzzy() { return new Vector4(this.z, this.z, this.z, this.y); }
    get zzzz() { return new Vector4(this.z, this.z, this.z, this.z); }

    /* Math Functions *******/
    add(b) { this.x += b.x; this.y += b.y; this.z += b.z; return this; }
    sub(b) { this.x -= b.x; this.y -= b.y; this.z -= b.z; return this; }
    subtract(b) { return this.sub(b); }
    scale(b) { this.x *= b; this.y *= b; this.z *= b; return this; }
    mul(b) { this.x *= b.x; this.y *= b.y; this.z *= b.z; return this; }
    multiply(b) { return this.mul(b); }
    div(b) { this.x /= b.x; this.y /= b.y; this.z /= b.z; return this; }
    divide(b) { return this.div(b); }
    exp(b) { this.x **= b.x; this.y **= b.y; this.z **= b.z; return this; }
    pow(b) { return this.exp(b); }
    len() { return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z ); }
    length() { return this.len(); }
    dist(b) { return this.sub(b).len(); }
    distance(b) { return this.distance(b); }
    norm() { let l = this.len(); return this.div(new Vector3(l, l, l)); }
    normalize() { return this.norm(); }
    dot(b) { return this.x * b.x + this.y * b.y + this.z * b.z; }
    lerp(b, t) { return this.add(b.sub(this).scale(t)); }
    interpolate(b, t) { return this.lerp(b, t); }
    cross(b) { this.x = this.y * b.z - this.z * b.y; this.y = this.z * b.x - this.x * b.z; this.z = this.x * b.y - this.y * b.x; return this; }
    reflect(b) { let p = 2 * this.dot(b); return this.sub(b.scale(p)); }

    /* Non-Math Functions *******/
    toArray() { return [this.x, this.y, this.z]; }
    toString() { return ("(" + this.x + ", " + this.y + ", " + this.z + ")"); }
    set(x, y, z) { this.x = x; this.y = y; this.z = z; }
}
vector3 = Vector3; // Aliases
Vec3 = Vector3;
vec3 = Vector3;

/* Vector4 Class ***********************/

class Vector4 {
    constructor( x, y, z, w ) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    /* Swizzling *******/
    get xx() { return new Vector2(this.x, this.x); }
    get xy() { return new Vector2(this.x, this.y); }
    get xz() { return new Vector2(this.x, this.z); }
    get xw() { return new Vector2(this.x, this.w); }
    get yx() { return new Vector2(this.y, this.x); }
    get yy() { return new Vector2(this.y, this.y); }
    get yz() { return new Vector2(this.y, this.z); }
    get yw() { return new Vector2(this.y, this.w); }
    get zx() { return new Vector2(this.z, this.x); }
    get zy() { return new Vector2(this.z, this.y); }
    get zz() { return new Vector2(this.z, this.z); }
    get zw() { return new Vector2(this.z, this.w); }
    get wx() { return new Vector2(this.w, this.x); }
    get wy() { return new Vector2(this.w, this.y); }
    get wz() { return new Vector2(this.w, this.z); }
    get ww() { return new Vector2(this.w, this.w); }
    get xxx() { return new Vector3(this.x, this.x, this.x); }
    get xxy() { return new Vector3(this.x, this.x, this.y); }
    get xxz() { return new Vector3(this.x, this.x, this.z); }
    get xxw() { return new Vector3(this.x, this.x, this.w); }
    get xyx() { return new Vector3(this.x, this.y, this.x); }
    get xyy() { return new Vector3(this.x, this.y, this.y); }
    get xyz() { return new Vector3(this.x, this.y, this.z); }
    get xyw() { return new Vector3(this.x, this.y, this.w); }
    get xzx() { return new Vector3(this.x, this.z, this.x); }
    get xzy() { return new Vector3(this.x, this.z, this.y); }
    get xzz() { return new Vector3(this.x, this.z, this.z); }
    get xzw() { return new Vector3(this.x, this.z, this.w); }
    get xwx() { return new Vector3(this.x, this.w, this.x); }
    get xwy() { return new Vector3(this.x, this.w, this.y); }
    get xwz() { return new Vector3(this.x, this.w, this.z); }
    get xww() { return new Vector3(this.x, this.w, this.w); }
    get yxx() { return new Vector3(this.y, this.x, this.x); }
    get yxy() { return new Vector3(this.y, this.x, this.y); }
    get yxz() { return new Vector3(this.y, this.x, this.z); }
    get yxw() { return new Vector3(this.y, this.x, this.w); }
    get yyx() { return new Vector3(this.y, this.y, this.x); }
    get yyy() { return new Vector3(this.y, this.y, this.y); }
    get yyz() { return new Vector3(this.y, this.y, this.z); }
    get yyw() { return new Vector3(this.y, this.y, this.w); }
    get yzx() { return new Vector3(this.y, this.z, this.x); }
    get yzy() { return new Vector3(this.y, this.z, this.y); }
    get yzz() { return new Vector3(this.y, this.z, this.z); }
    get yzw() { return new Vector3(this.y, this.z, this.w); }
    get ywx() { return new Vector3(this.y, this.w, this.x); }
    get ywy() { return new Vector3(this.y, this.w, this.y); }
    get ywz() { return new Vector3(this.y, this.w, this.z); }
    get yww() { return new Vector3(this.y, this.w, this.w); }
    get zxx() { return new Vector3(this.z, this.x, this.x); }
    get zxy() { return new Vector3(this.z, this.x, this.y); }
    get zxz() { return new Vector3(this.z, this.x, this.z); }
    get zxw() { return new Vector3(this.z, this.x, this.w); }
    get zyx() { return new Vector3(this.z, this.y, this.x); }
    get zyy() { return new Vector3(this.z, this.y, this.y); }
    get zyz() { return new Vector3(this.z, this.y, this.z); }
    get zyw() { return new Vector3(this.z, this.y, this.w); }
    get zzx() { return new Vector3(this.z, this.z, this.x); }
    get zzy() { return new Vector3(this.z, this.z, this.y); }
    get zzz() { return new Vector3(this.z, this.z, this.z); }
    get zzw() { return new Vector3(this.z, this.z, this.w); }
    get zwx() { return new Vector3(this.z, this.w, this.x); }
    get zwy() { return new Vector3(this.z, this.w, this.y); }
    get zwz() { return new Vector3(this.z, this.w, this.z); }
    get zww() { return new Vector3(this.z, this.w, this.w); }
    get wxx() { return new Vector3(this.w, this.x, this.x); }
    get wxy() { return new Vector3(this.w, this.x, this.y); }
    get wxz() { return new Vector3(this.w, this.x, this.z); }
    get wxw() { return new Vector3(this.w, this.x, this.w); }
    get wyx() { return new Vector3(this.w, this.y, this.x); }
    get wyy() { return new Vector3(this.w, this.y, this.y); }
    get wyz() { return new Vector3(this.w, this.y, this.z); }
    get wyw() { return new Vector3(this.w, this.y, this.w); }
    get wzx() { return new Vector3(this.w, this.z, this.x); }
    get wzy() { return new Vector3(this.w, this.z, this.y); }
    get wzz() { return new Vector3(this.w, this.z, this.z); }
    get wzw() { return new Vector3(this.w, this.z, this.w); }
    get wwx() { return new Vector3(this.w, this.w, this.x); }
    get wwy() { return new Vector3(this.w, this.w, this.y); }
    get wwz() { return new Vector3(this.w, this.w, this.z); }
    get www() { return new Vector3(this.w, this.w, this.w); }
    get xxxx() { return new Vector4(this.x, this.x, this.x, this.x); }
    get xxxy() { return new Vector4(this.x, this.x, this.x, this.y); }
    get xxxz() { return new Vector4(this.x, this.x, this.x, this.z); }
    get xxxw() { return new Vector4(this.x, this.x, this.x, this.w); }
    get xxyx() { return new Vector4(this.x, this.x, this.y, this.x); }
    get xxyy() { return new Vector4(this.x, this.x, this.y, this.y); }
    get xxyz() { return new Vector4(this.x, this.x, this.y, this.z); }
    get xxyw() { return new Vector4(this.x, this.x, this.y, this.w); }
    get xxzx() { return new Vector4(this.x, this.x, this.z, this.x); }
    get xxzy() { return new Vector4(this.x, this.x, this.z, this.y); }
    get xxzz() { return new Vector4(this.x, this.x, this.z, this.z); }
    get xxzw() { return new Vector4(this.x, this.x, this.z, this.w); }
    get xxwx() { return new Vector4(this.x, this.x, this.w, this.x); }
    get xxwy() { return new Vector4(this.x, this.x, this.w, this.y); }
    get xxwz() { return new Vector4(this.x, this.x, this.w, this.z); }
    get xxww() { return new Vector4(this.x, this.x, this.w, this.w); }
    get xyxx() { return new Vector4(this.x, this.y, this.x, this.x); }
    get xyxy() { return new Vector4(this.x, this.y, this.x, this.y); }
    get xyxz() { return new Vector4(this.x, this.y, this.x, this.z); }
    get xyxw() { return new Vector4(this.x, this.y, this.x, this.w); }
    get xyyx() { return new Vector4(this.x, this.y, this.y, this.x); }
    get xyyy() { return new Vector4(this.x, this.y, this.y, this.y); }
    get xyyz() { return new Vector4(this.x, this.y, this.y, this.z); }
    get xyyw() { return new Vector4(this.x, this.y, this.y, this.w); }
    get xyzx() { return new Vector4(this.x, this.y, this.z, this.x); }
    get xyzy() { return new Vector4(this.x, this.y, this.z, this.y); }
    get xyzz() { return new Vector4(this.x, this.y, this.z, this.z); }
    get xyzw() { return new Vector4(this.x, this.y, this.z, this.w); }
    get xywx() { return new Vector4(this.x, this.y, this.w, this.x); }
    get xywy() { return new Vector4(this.x, this.y, this.w, this.y); }
    get xywz() { return new Vector4(this.x, this.y, this.w, this.z); }
    get xyww() { return new Vector4(this.x, this.y, this.w, this.w); }
    get xzxx() { return new Vector4(this.x, this.z, this.x, this.x); }
    get xzxy() { return new Vector4(this.x, this.z, this.x, this.y); }
    get xzxz() { return new Vector4(this.x, this.z, this.x, this.z); }
    get xzxw() { return new Vector4(this.x, this.z, this.x, this.w); }
    get xzyx() { return new Vector4(this.x, this.z, this.y, this.x); }
    get xzyy() { return new Vector4(this.x, this.z, this.y, this.y); }
    get xzyz() { return new Vector4(this.x, this.z, this.y, this.z); }
    get xzyw() { return new Vector4(this.x, this.z, this.y, this.w); }
    get xzzx() { return new Vector4(this.x, this.z, this.z, this.x); }
    get xzzy() { return new Vector4(this.x, this.z, this.z, this.y); }
    get xzzz() { return new Vector4(this.x, this.z, this.z, this.z); }
    get xzzw() { return new Vector4(this.x, this.z, this.z, this.w); }
    get xzwx() { return new Vector4(this.x, this.z, this.w, this.x); }
    get xzwy() { return new Vector4(this.x, this.z, this.w, this.y); }
    get xzwz() { return new Vector4(this.x, this.z, this.w, this.z); }
    get xzww() { return new Vector4(this.x, this.z, this.w, this.w); }
    get xwxx() { return new Vector4(this.x, this.w, this.x, this.x); }
    get xwxy() { return new Vector4(this.x, this.w, this.x, this.y); }
    get xwxz() { return new Vector4(this.x, this.w, this.x, this.z); }
    get xwxw() { return new Vector4(this.x, this.w, this.x, this.w); }
    get xwyx() { return new Vector4(this.x, this.w, this.y, this.x); }
    get xwyy() { return new Vector4(this.x, this.w, this.y, this.y); }
    get xwyz() { return new Vector4(this.x, this.w, this.y, this.z); }
    get xwyw() { return new Vector4(this.x, this.w, this.y, this.w); }
    get xwzx() { return new Vector4(this.x, this.w, this.z, this.x); }
    get xwzy() { return new Vector4(this.x, this.w, this.z, this.y); }
    get xwzz() { return new Vector4(this.x, this.w, this.z, this.z); }
    get xwzw() { return new Vector4(this.x, this.w, this.z, this.w); }
    get xwwx() { return new Vector4(this.x, this.w, this.w, this.x); }
    get xwwy() { return new Vector4(this.x, this.w, this.w, this.y); }
    get xwwz() { return new Vector4(this.x, this.w, this.w, this.z); }
    get xwww() { return new Vector4(this.x, this.w, this.w, this.w); }
    get yxxx() { return new Vector4(this.y, this.x, this.x, this.x); }
    get yxxy() { return new Vector4(this.y, this.x, this.x, this.y); }
    get yxxz() { return new Vector4(this.y, this.x, this.x, this.z); }
    get yxxw() { return new Vector4(this.y, this.x, this.x, this.w); }
    get yxyx() { return new Vector4(this.y, this.x, this.y, this.x); }
    get yxyy() { return new Vector4(this.y, this.x, this.y, this.y); }
    get yxyz() { return new Vector4(this.y, this.x, this.y, this.z); }
    get yxyw() { return new Vector4(this.y, this.x, this.y, this.w); }
    get yxzx() { return new Vector4(this.y, this.x, this.z, this.x); }
    get yxzy() { return new Vector4(this.y, this.x, this.z, this.y); }
    get yxzz() { return new Vector4(this.y, this.x, this.z, this.z); }
    get yxzw() { return new Vector4(this.y, this.x, this.z, this.w); }
    get yxwx() { return new Vector4(this.y, this.x, this.w, this.x); }
    get yxwy() { return new Vector4(this.y, this.x, this.w, this.y); }
    get yxwz() { return new Vector4(this.y, this.x, this.w, this.z); }
    get yxww() { return new Vector4(this.y, this.x, this.w, this.w); }
    get yyxx() { return new Vector4(this.y, this.y, this.x, this.x); }
    get yyxy() { return new Vector4(this.y, this.y, this.x, this.y); }
    get yyxz() { return new Vector4(this.y, this.y, this.x, this.z); }
    get yyxw() { return new Vector4(this.y, this.y, this.x, this.w); }
    get yyyx() { return new Vector4(this.y, this.y, this.y, this.x); }
    get yyyy() { return new Vector4(this.y, this.y, this.y, this.y); }
    get yyyz() { return new Vector4(this.y, this.y, this.y, this.z); }
    get yyyw() { return new Vector4(this.y, this.y, this.y, this.w); }
    get yyzx() { return new Vector4(this.y, this.y, this.z, this.x); }
    get yyzy() { return new Vector4(this.y, this.y, this.z, this.y); }
    get yyzz() { return new Vector4(this.y, this.y, this.z, this.z); }
    get yyzw() { return new Vector4(this.y, this.y, this.z, this.w); }
    get yywx() { return new Vector4(this.y, this.y, this.w, this.x); }
    get yywy() { return new Vector4(this.y, this.y, this.w, this.y); }
    get yywz() { return new Vector4(this.y, this.y, this.w, this.z); }
    get yyww() { return new Vector4(this.y, this.y, this.w, this.w); }
    get yzxx() { return new Vector4(this.y, this.z, this.x, this.x); }
    get yzxy() { return new Vector4(this.y, this.z, this.x, this.y); }
    get yzxz() { return new Vector4(this.y, this.z, this.x, this.z); }
    get yzxw() { return new Vector4(this.y, this.z, this.x, this.w); }
    get yzyx() { return new Vector4(this.y, this.z, this.y, this.x); }
    get yzyy() { return new Vector4(this.y, this.z, this.y, this.y); }
    get yzyz() { return new Vector4(this.y, this.z, this.y, this.z); }
    get yzyw() { return new Vector4(this.y, this.z, this.y, this.w); }
    get yzzx() { return new Vector4(this.y, this.z, this.z, this.x); }
    get yzzy() { return new Vector4(this.y, this.z, this.z, this.y); }
    get yzzz() { return new Vector4(this.y, this.z, this.z, this.z); }
    get yzzw() { return new Vector4(this.y, this.z, this.z, this.w); }
    get yzwx() { return new Vector4(this.y, this.z, this.w, this.x); }
    get yzwy() { return new Vector4(this.y, this.z, this.w, this.y); }
    get yzwz() { return new Vector4(this.y, this.z, this.w, this.z); }
    get yzww() { return new Vector4(this.y, this.z, this.w, this.w); }
    get ywxx() { return new Vector4(this.y, this.w, this.x, this.x); }
    get ywxy() { return new Vector4(this.y, this.w, this.x, this.y); }
    get ywxz() { return new Vector4(this.y, this.w, this.x, this.z); }
    get ywxw() { return new Vector4(this.y, this.w, this.x, this.w); }
    get ywyx() { return new Vector4(this.y, this.w, this.y, this.x); }
    get ywyy() { return new Vector4(this.y, this.w, this.y, this.y); }
    get ywyz() { return new Vector4(this.y, this.w, this.y, this.z); }
    get ywyw() { return new Vector4(this.y, this.w, this.y, this.w); }
    get ywzx() { return new Vector4(this.y, this.w, this.z, this.x); }
    get ywzy() { return new Vector4(this.y, this.w, this.z, this.y); }
    get ywzz() { return new Vector4(this.y, this.w, this.z, this.z); }
    get ywzw() { return new Vector4(this.y, this.w, this.z, this.w); }
    get ywwx() { return new Vector4(this.y, this.w, this.w, this.x); }
    get ywwy() { return new Vector4(this.y, this.w, this.w, this.y); }
    get ywwz() { return new Vector4(this.y, this.w, this.w, this.z); }
    get ywww() { return new Vector4(this.y, this.w, this.w, this.w); }
    get zxxx() { return new Vector4(this.z, this.x, this.x, this.x); }
    get zxxy() { return new Vector4(this.z, this.x, this.x, this.y); }
    get zxxz() { return new Vector4(this.z, this.x, this.x, this.z); }
    get zxxw() { return new Vector4(this.z, this.x, this.x, this.w); }
    get zxyx() { return new Vector4(this.z, this.x, this.y, this.x); }
    get zxyy() { return new Vector4(this.z, this.x, this.y, this.y); }
    get zxyz() { return new Vector4(this.z, this.x, this.y, this.z); }
    get zxyw() { return new Vector4(this.z, this.x, this.y, this.w); }
    get zxzx() { return new Vector4(this.z, this.x, this.z, this.x); }
    get zxzy() { return new Vector4(this.z, this.x, this.z, this.y); }
    get zxzz() { return new Vector4(this.z, this.x, this.z, this.z); }
    get zxzw() { return new Vector4(this.z, this.x, this.z, this.w); }
    get zxwx() { return new Vector4(this.z, this.x, this.w, this.x); }
    get zxwy() { return new Vector4(this.z, this.x, this.w, this.y); }
    get zxwz() { return new Vector4(this.z, this.x, this.w, this.z); }
    get zxww() { return new Vector4(this.z, this.x, this.w, this.w); }
    get zyxx() { return new Vector4(this.z, this.y, this.x, this.x); }
    get zyxy() { return new Vector4(this.z, this.y, this.x, this.y); }
    get zyxz() { return new Vector4(this.z, this.y, this.x, this.z); }
    get zyxw() { return new Vector4(this.z, this.y, this.x, this.w); }
    get zyyx() { return new Vector4(this.z, this.y, this.y, this.x); }
    get zyyy() { return new Vector4(this.z, this.y, this.y, this.y); }
    get zyyz() { return new Vector4(this.z, this.y, this.y, this.z); }
    get zyyw() { return new Vector4(this.z, this.y, this.y, this.w); }
    get zyzx() { return new Vector4(this.z, this.y, this.z, this.x); }
    get zyzy() { return new Vector4(this.z, this.y, this.z, this.y); }
    get zyzz() { return new Vector4(this.z, this.y, this.z, this.z); }
    get zyzw() { return new Vector4(this.z, this.y, this.z, this.w); }
    get zywx() { return new Vector4(this.z, this.y, this.w, this.x); }
    get zywy() { return new Vector4(this.z, this.y, this.w, this.y); }
    get zywz() { return new Vector4(this.z, this.y, this.w, this.z); }
    get zyww() { return new Vector4(this.z, this.y, this.w, this.w); }
    get zzxx() { return new Vector4(this.z, this.z, this.x, this.x); }
    get zzxy() { return new Vector4(this.z, this.z, this.x, this.y); }
    get zzxz() { return new Vector4(this.z, this.z, this.x, this.z); }
    get zzxw() { return new Vector4(this.z, this.z, this.x, this.w); }
    get zzyx() { return new Vector4(this.z, this.z, this.y, this.x); }
    get zzyy() { return new Vector4(this.z, this.z, this.y, this.y); }
    get zzyz() { return new Vector4(this.z, this.z, this.y, this.z); }
    get zzyw() { return new Vector4(this.z, this.z, this.y, this.w); }
    get zzzx() { return new Vector4(this.z, this.z, this.z, this.x); }
    get zzzy() { return new Vector4(this.z, this.z, this.z, this.y); }
    get zzzz() { return new Vector4(this.z, this.z, this.z, this.z); }
    get zzzw() { return new Vector4(this.z, this.z, this.z, this.w); }
    get zzwx() { return new Vector4(this.z, this.z, this.w, this.x); }
    get zzwy() { return new Vector4(this.z, this.z, this.w, this.y); }
    get zzwz() { return new Vector4(this.z, this.z, this.w, this.z); }
    get zzww() { return new Vector4(this.z, this.z, this.w, this.w); }
    get zwxx() { return new Vector4(this.z, this.w, this.x, this.x); }
    get zwxy() { return new Vector4(this.z, this.w, this.x, this.y); }
    get zwxz() { return new Vector4(this.z, this.w, this.x, this.z); }
    get zwxw() { return new Vector4(this.z, this.w, this.x, this.w); }
    get zwyx() { return new Vector4(this.z, this.w, this.y, this.x); }
    get zwyy() { return new Vector4(this.z, this.w, this.y, this.y); }
    get zwyz() { return new Vector4(this.z, this.w, this.y, this.z); }
    get zwyw() { return new Vector4(this.z, this.w, this.y, this.w); }
    get zwzx() { return new Vector4(this.z, this.w, this.z, this.x); }
    get zwzy() { return new Vector4(this.z, this.w, this.z, this.y); }
    get zwzz() { return new Vector4(this.z, this.w, this.z, this.z); }
    get zwzw() { return new Vector4(this.z, this.w, this.z, this.w); }
    get zwwx() { return new Vector4(this.z, this.w, this.w, this.x); }
    get zwwy() { return new Vector4(this.z, this.w, this.w, this.y); }
    get zwwz() { return new Vector4(this.z, this.w, this.w, this.z); }
    get zwww() { return new Vector4(this.z, this.w, this.w, this.w); }
    get wxxx() { return new Vector4(this.w, this.x, this.x, this.x); }
    get wxxy() { return new Vector4(this.w, this.x, this.x, this.y); }
    get wxxz() { return new Vector4(this.w, this.x, this.x, this.z); }
    get wxxw() { return new Vector4(this.w, this.x, this.x, this.w); }
    get wxyx() { return new Vector4(this.w, this.x, this.y, this.x); }
    get wxyy() { return new Vector4(this.w, this.x, this.y, this.y); }
    get wxyz() { return new Vector4(this.w, this.x, this.y, this.z); }
    get wxyw() { return new Vector4(this.w, this.x, this.y, this.w); }
    get wxzx() { return new Vector4(this.w, this.x, this.z, this.x); }
    get wxzy() { return new Vector4(this.w, this.x, this.z, this.y); }
    get wxzz() { return new Vector4(this.w, this.x, this.z, this.z); }
    get wxzw() { return new Vector4(this.w, this.x, this.z, this.w); }
    get wxwx() { return new Vector4(this.w, this.x, this.w, this.x); }
    get wxwy() { return new Vector4(this.w, this.x, this.w, this.y); }
    get wxwz() { return new Vector4(this.w, this.x, this.w, this.z); }
    get wxww() { return new Vector4(this.w, this.x, this.w, this.w); }
    get wyxx() { return new Vector4(this.w, this.y, this.x, this.x); }
    get wyxy() { return new Vector4(this.w, this.y, this.x, this.y); }
    get wyxz() { return new Vector4(this.w, this.y, this.x, this.z); }
    get wyxw() { return new Vector4(this.w, this.y, this.x, this.w); }
    get wyyx() { return new Vector4(this.w, this.y, this.y, this.x); }
    get wyyy() { return new Vector4(this.w, this.y, this.y, this.y); }
    get wyyz() { return new Vector4(this.w, this.y, this.y, this.z); }
    get wyyw() { return new Vector4(this.w, this.y, this.y, this.w); }
    get wyzx() { return new Vector4(this.w, this.y, this.z, this.x); }
    get wyzy() { return new Vector4(this.w, this.y, this.z, this.y); }
    get wyzz() { return new Vector4(this.w, this.y, this.z, this.z); }
    get wyzw() { return new Vector4(this.w, this.y, this.z, this.w); }
    get wywx() { return new Vector4(this.w, this.y, this.w, this.x); }
    get wywy() { return new Vector4(this.w, this.y, this.w, this.y); }
    get wywz() { return new Vector4(this.w, this.y, this.w, this.z); }
    get wyww() { return new Vector4(this.w, this.y, this.w, this.w); }
    get wzxx() { return new Vector4(this.w, this.z, this.x, this.x); }
    get wzxy() { return new Vector4(this.w, this.z, this.x, this.y); }
    get wzxz() { return new Vector4(this.w, this.z, this.x, this.z); }
    get wzxw() { return new Vector4(this.w, this.z, this.x, this.w); }
    get wzyx() { return new Vector4(this.w, this.z, this.y, this.x); }
    get wzyy() { return new Vector4(this.w, this.z, this.y, this.y); }
    get wzyz() { return new Vector4(this.w, this.z, this.y, this.z); }
    get wzyw() { return new Vector4(this.w, this.z, this.y, this.w); }
    get wzzx() { return new Vector4(this.w, this.z, this.z, this.x); }
    get wzzy() { return new Vector4(this.w, this.z, this.z, this.y); }
    get wzzz() { return new Vector4(this.w, this.z, this.z, this.z); }
    get wzzw() { return new Vector4(this.w, this.z, this.z, this.w); }
    get wzwx() { return new Vector4(this.w, this.z, this.w, this.x); }
    get wzwy() { return new Vector4(this.w, this.z, this.w, this.y); }
    get wzwz() { return new Vector4(this.w, this.z, this.w, this.z); }
    get wzww() { return new Vector4(this.w, this.z, this.w, this.w); }
    get wwxx() { return new Vector4(this.w, this.w, this.x, this.x); }
    get wwxy() { return new Vector4(this.w, this.w, this.x, this.y); }
    get wwxz() { return new Vector4(this.w, this.w, this.x, this.z); }
    get wwxw() { return new Vector4(this.w, this.w, this.x, this.w); }
    get wwyx() { return new Vector4(this.w, this.w, this.y, this.x); }
    get wwyy() { return new Vector4(this.w, this.w, this.y, this.y); }
    get wwyz() { return new Vector4(this.w, this.w, this.y, this.z); }
    get wwyw() { return new Vector4(this.w, this.w, this.y, this.w); }
    get wwzx() { return new Vector4(this.w, this.w, this.z, this.x); }
    get wwzy() { return new Vector4(this.w, this.w, this.z, this.y); }
    get wwzz() { return new Vector4(this.w, this.w, this.z, this.z); }
    get wwzw() { return new Vector4(this.w, this.w, this.z, this.w); }
    get wwwx() { return new Vector4(this.w, this.w, this.w, this.x); }
    get wwwy() { return new Vector4(this.w, this.w, this.w, this.y); }
    get wwwz() { return new Vector4(this.w, this.w, this.w, this.z); }
    get wwww() { return new Vector4(this.w, this.w, this.w, this.w); }

    /* Math Functions *******/
    add(b) { this.x += b.x; this.y += b.y; this.z += b.z; this.w += b.w; return this; }
    sub(b) { this.x -= b.x; this.y -= b.y; this.z -= b.z; this.w -= b.w; return this; }
    subtract(b) { return this.sub(b); }
    scale(b) { this.x *= b; this.y *= b; this.z *= b; this.w *= b; return this; }
    mul(b) { this.x *= b.x; this.y *= b.y; this.z *= b.z; this.w *= b.w; return this; }
    multiply(b) { return this.mul(b); }
    div(b) { this.x /= b.x; this.y /= b.y; this.z /= b.z; this.w /= b.w; return this; }
    divide(b) { return this.div(b); }
    exp(b) { this.x **= b.x; this.y **= b.y; this.z **= b.z; this.w **= b.w; return this; }
    pow(b) { return this.exp(b); }
    len() { return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w ); }
    length() { return this.len(); }
    dist(b) { return this.sub(b).len(); }
    distance(b) { return this.distance(b); }
    norm() { let l = this.len(); return this.div(new Vector4(l, l, l, l)); }
    normalize() { return this.norm(); }
    dot(b) { return this.x * b.x + this.y * b.y + this.z * b.z + this.w * b.w; }
    lerp(b, t) { return this.add(b.sub(this).scale(t)); }
    interpolate(b, t) { return this.lerp(b, t); }
    cross(b) { this.x = this.y * b.z - this.z * b.y; this.y = this.z * b.x - this.x * b.z; this.z = this.x * b.y - this.y * b.x; this.w = 1; return this; }
    reflect(b) { let p = 2 * this.dot(b); return this.sub(b.scale(p)); }

    /* Non-Math Functions *******/
    toArray() { return [this.x, this.y, this.z, this.w]; }
    toString() { return ("(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")"); }
    set(x, y, z, w) { this.x = x; this.y = y; this.z = z; this.w = w;}
}
vector4 = Vector4; // Aliases
Vec4 = Vector4;
vec4 = Vector4;

/* Array Functions */
Array.prototype.toVector = function() { if (this.length == 2) { return new Vector2( this[0], this[1] ); } else if (this.length == 3) { return new Vector3( this[0], this[1], this[2] ); } else if (this.length == 4) { return new Vector4( this[0], this[1], this[2], this[3] ); } else { console.error("Invalid Array Length"); return(0); } }
