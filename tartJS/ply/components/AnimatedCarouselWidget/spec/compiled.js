(function(){// Input 0
function h(a) {
  throw a;
}
var m = void 0, n = null, o, p = this;
function q() {
}
function r(a) {
  var b = typeof a;
  if(b == "object") {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }else {
        if(a instanceof Object) {
          return b
        }
      }
      var c = Object.prototype.toString.call(a);
      if(c == "[object Window]") {
        return"object"
      }
      if(c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(b == "function" && typeof a.call == "undefined") {
      return"object"
    }
  }
  return b
}
function aa(a) {
  var b = r(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function s(a) {
  return typeof a == "string"
}
function t(a) {
  return a[ba] || (a[ba] = ++ca)
}
var ba = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ca = 0, da = Date.now || function() {
  return+new Date
};
function v(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.A = b.prototype;
  a.prototype = new c
}
;
// Input 1
function ea(a, b) {
  for(var c in a) {
    b.call(m, a[c], c, a)
  }
}
var fa = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
function ga(a) {
  for(var b, c, d = 1;d < arguments.length;d++) {
    c = arguments[d];
    for(b in c) {
      a[b] = c[b]
    }
    for(var e = 0;e < fa.length;e++) {
      b = fa[e], Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
    }
  }
}
;
// Input 2
// Input 3
function ha(a, b) {
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(d.length, e.length), g = 0;c == 0 && g < f;g++) {
    var i = d[g] || "", j = e[g] || "", k = RegExp("(\\d*)(\\D*)", "g"), C = RegExp("(\\d*)(\\D*)", "g");
    do {
      var l = k.exec(i) || ["", "", ""], u = C.exec(j) || ["", "", ""];
      if(l[0].length == 0 && u[0].length == 0) {
        break
      }
      c = ia(l[1].length == 0 ? 0 : parseInt(l[1], 10), u[1].length == 0 ? 0 : parseInt(u[1], 10)) || ia(l[2].length == 0, u[2].length == 0) || ia(l[2], u[2])
    }while(c == 0)
  }
  return c
}
function ia(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
;
// Input 4
// Input 5
var x = Array.prototype, ja = x.indexOf ? function(a, b, c) {
  return x.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == n ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(s(a)) {
    if(!s(b) || b.length != 1) {
      return-1
    }
    return a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, ka = x.forEach ? function(a, b, c) {
  x.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = s(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
};
// Input 6
var y = "StopIteration" in p ? p.StopIteration : Error("StopIteration");
function z() {
}
z.prototype.next = function() {
  h(y)
};
z.prototype.I = function() {
  return this
};
function la(a) {
  if(a instanceof z) {
    return a
  }
  if(typeof a.I == "function") {
    return a.I(!1)
  }
  if(aa(a)) {
    var b = 0, c = new z;
    c.next = function() {
      for(;;) {
        if(b >= a.length && h(y), b in a) {
          return a[b++]
        }else {
          b++
        }
      }
    };
    return c
  }
  h(Error("Not implemented"))
}
function ma(a, b) {
  if(aa(a)) {
    try {
      ka(a, b, m)
    }catch(c) {
      c !== y && h(c)
    }
  }else {
    a = la(a);
    try {
      for(;;) {
        b.call(m, a.next(), m, a)
      }
    }catch(d) {
      d !== y && h(d)
    }
  }
}
;
// Input 7
// Input 8
function A(a) {
  this.j = {};
  this.b = [];
  var b = arguments.length;
  if(b > 1) {
    b % 2 && h(Error("Uneven number of arguments"));
    for(var c = 0;c < b;c += 2) {
      this.set(arguments[c], arguments[c + 1])
    }
  }else {
    if(a) {
      var d;
      if(a instanceof A) {
        c = na(a);
        B(a);
        d = [];
        for(b = 0;b < a.b.length;b++) {
          d.push(a.j[a.b[b]])
        }
      }else {
        var b = [], e = 0;
        for(c in a) {
          b[e++] = c
        }
        c = b;
        b = [];
        e = 0;
        for(d in a) {
          b[e++] = a[d]
        }
        d = b
      }
      for(b = 0;b < c.length;b++) {
        this.set(c[b], d[b])
      }
    }
  }
}
o = A.prototype;
o.a = 0;
o.version_ = 0;
function na(a) {
  B(a);
  return a.b.concat()
}
o.remove = function(a) {
  if(Object.prototype.hasOwnProperty.call(this.j, a)) {
    return delete this.j[a], this.a--, this.version_++, this.b.length > 2 * this.a && B(this), !0
  }
  return!1
};
function B(a) {
  if(a.a != a.b.length) {
    for(var b = 0, c = 0;b < a.b.length;) {
      var d = a.b[b];
      Object.prototype.hasOwnProperty.call(a.j, d) && (a.b[c++] = d);
      b++
    }
    a.b.length = c
  }
  if(a.a != a.b.length) {
    for(var e = {}, c = b = 0;b < a.b.length;) {
      d = a.b[b], Object.prototype.hasOwnProperty.call(e, d) || (a.b[c++] = d, e[d] = 1), b++
    }
    a.b.length = c
  }
}
o.get = function(a, b) {
  if(Object.prototype.hasOwnProperty.call(this.j, a)) {
    return this.j[a]
  }
  return b
};
o.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.j, a) || (this.a++, this.b.push(a), this.version_++);
  this.j[a] = b
};
o.I = function(a) {
  B(this);
  var b = 0, c = this.b, d = this.j, e = this.version_, f = this, g = new z;
  g.next = function() {
    for(;;) {
      e != f.version_ && h(Error("The map has changed since the iterator was created"));
      b >= c.length && h(y);
      var g = c[b++];
      return a ? g : d[g]
    }
  };
  return g
};
// Input 9
// Input 10
// Input 11
// Input 12
function D() {
  oa && (pa[t(this)] = this)
}
var oa = !1, pa = {};
D.prototype.U = !1;
D.prototype.B = function() {
  if(!this.U && (this.U = !0, this.l(), oa)) {
    var a = t(this);
    pa.hasOwnProperty(a) || h(Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call"));
    delete pa[a]
  }
};
D.prototype.l = function() {
};
// Input 13
function E(a, b) {
  D.call(this);
  this.$ = b;
  this.o = [];
  a > this.$ && h(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.o.push(this.t())
  }
}
v(E, D);
o = E.prototype;
o.n = n;
o.T = n;
o.getObject = function() {
  if(this.o.length) {
    return this.o.pop()
  }
  return this.t()
};
function F(a, b) {
  a.o.length < a.$ ? a.o.push(b) : a.J(b)
}
o.t = function() {
  return this.n ? this.n() : {}
};
o.J = function(a) {
  if(this.T) {
    this.T(a)
  }else {
    var b = r(a);
    if(b == "object" || b == "array" || b == "function") {
      if(r(a.B) == "function") {
        a.B()
      }else {
        for(var c in a) {
          delete a[c]
        }
      }
    }
  }
};
o.l = function() {
  E.A.l.call(this);
  for(var a = this.o;a.length;) {
    this.J(a.pop())
  }
  delete this.o
};
// Input 14
// Input 15
// Input 16
// Input 17
function qa() {
  this.W = [];
  this.ba = new A;
  this.qa = this.ra = this.sa = this.la = 0;
  this.da = new A;
  this.ga = this.pa = 0;
  this.ia = 1;
  this.ha = new E(0, 4E3);
  this.ha.t = function() {
    return new ra
  };
  this.ma = new E(0, 50);
  this.ma.t = function() {
    return new sa
  };
  var a = this;
  this.Y = new E(0, 2E3);
  this.Y.t = function() {
    return String(a.ia++)
  };
  this.Y.J = function() {
  };
  this.ua = 3
}
function sa() {
  this.ea = this.na = this.count = 0
}
sa.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.count, " (", Math.round(this.na * 10) / 10, " ms)");
  this.ea && a.push(" [VarAlloc = ", this.ea, "]");
  return a.join("")
};
function ra() {
}
function ta(a, b, c, d) {
  var e = [];
  c == -1 ? e.push("    ") : e.push(ua(a.V - c));
  e.push(" ", va(a.V - b));
  a.K == 0 ? e.push(" Start        ") : a.K == 1 ? (e.push(" Done "), e.push(ua(a.va - a.startTime), " ms ")) : e.push(" Comment      ");
  e.push(d, a);
  a.oa > 0 && e.push("[VarAlloc ", a.oa, "] ");
  return e.join("")
}
ra.prototype.toString = function() {
  return this.type == n ? this.fa : "[" + this.type + "] " + this.fa
};
qa.prototype.toString = function() {
  for(var a = [], b = -1, c = [], d = 0;d < this.W.length;d++) {
    var e = this.W[d];
    e.K == 1 && c.pop();
    a.push(" ", ta(e, this.la, b, c.join("")));
    b = e.V;
    a.push("\n");
    e.K == 0 && c.push("|  ")
  }
  if(this.ba.a != 0) {
    var f = da();
    a.push(" Unstopped timers:\n");
    ma(this.ba, function(b) {
      a.push("  ", b, " (", f - b.startTime, " ms, started at ", va(b.startTime), ")\n")
    })
  }
  b = na(this.da);
  for(d = 0;d < b.length;d++) {
    c = this.da.get(b[d]), c.count > 1 && a.push(" TOTAL ", c, "\n")
  }
  a.push("Total tracers created ", this.pa, "\n", "Total comments created ", this.ga, "\n", "Overhead start: ", this.sa, " ms\n", "Overhead end: ", this.ra, " ms\n", "Overhead comment: ", this.qa, " ms\n");
  return a.join("")
};
function ua(a) {
  var a = Math.round(a), b = "";
  a < 1E3 && (b = " ");
  a < 100 && (b = "  ");
  a < 10 && (b = "   ");
  return b + a
}
function va(a) {
  a = Math.round(a);
  return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
}
new qa;
// Input 18
// Input 19
// Input 20
// Input 21
var G, wa, H, xa;
function ya() {
  return p.navigator ? p.navigator.userAgent : n
}
xa = H = wa = G = !1;
var I;
if(I = ya()) {
  var za = p.navigator;
  G = I.indexOf("Opera") == 0;
  wa = !G && I.indexOf("MSIE") != -1;
  H = !G && I.indexOf("WebKit") != -1;
  xa = !G && !H && za.product == "Gecko"
}
var J = wa, Aa = xa, Ba = H, Ca = p.navigator, Da = (Ca && Ca.platform || "").indexOf("Mac") != -1, K;
a: {
  var L = "", M;
  if(G && p.opera) {
    var Ea = p.opera.version, L = typeof Ea == "function" ? Ea() : Ea
  }else {
    if(Aa ? M = /rv\:([^\);]+)(\)|;)/ : J ? M = /MSIE\s+([^\);]+)(\)|;)/ : Ba && (M = /WebKit\/(\S+)/), M) {
      var Fa = M.exec(ya()), L = Fa ? Fa[1] : ""
    }
  }
  if(J) {
    var Ga, Ha = p.document;
    Ga = Ha ? Ha.documentMode : m;
    if(Ga > parseFloat(L)) {
      K = String(Ga);
      break a
    }
  }
  K = L
}
var Ia = {};
// Input 22
var Ja;
// Input 23
// Input 24
!J || Ia["9"] || (Ia["9"] = ha(K, "9") >= 0);
var Ka = J && !(Ia["8"] || (Ia["8"] = ha(K, "8") >= 0));
// Input 25
function N(a, b) {
  D.call(this);
  this.type = a;
  this.currentTarget = this.target = b
}
v(N, D);
N.prototype.l = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
N.prototype.r = !1;
N.prototype.z = !0;
N.prototype.preventDefault = function() {
  this.z = !1
};
// Input 26
var La = new Function("a", "return a");
// Input 27
function O(a, b) {
  a && this.C(a, b)
}
v(O, N);
o = O.prototype;
o.target = n;
o.relatedTarget = n;
o.offsetX = 0;
o.offsetY = 0;
o.clientX = 0;
o.clientY = 0;
o.screenX = 0;
o.screenY = 0;
o.button = 0;
o.keyCode = 0;
o.charCode = 0;
o.ctrlKey = !1;
o.altKey = !1;
o.shiftKey = !1;
o.metaKey = !1;
o.ka = !1;
o.L = n;
o.C = function(a, b) {
  var c = this.type = a.type;
  N.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Aa) {
      try {
        La(d.nodeName)
      }catch(e) {
        d = n
      }
    }
  }else {
    if(c == "mouseover") {
      d = a.fromElement
    }else {
      if(c == "mouseout") {
        d = a.toElement
      }
    }
  }
  this.relatedTarget = d;
  this.offsetX = a.offsetX !== m ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== m ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== m ? a.clientX : a.pageX;
  this.clientY = a.clientY !== m ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.ka = Da ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.L = a;
  delete this.z;
  delete this.r
};
o.preventDefault = function() {
  O.A.preventDefault.call(this);
  var a = this.L;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, Ka) {
      try {
        if(a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
o.l = function() {
  O.A.l.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.L = n
};
// Input 28
function Ma() {
}
var Na = 0;
o = Ma.prototype;
o.key = 0;
o.s = !1;
o.R = !1;
o.C = function(a, b, c, d, e, f) {
  r(a) == "function" ? this.Z = !0 : a && a.handleEvent && r(a.handleEvent) == "function" ? this.Z = !1 : h(Error("Invalid listener argument"));
  this.w = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.N = f;
  this.R = !1;
  this.key = ++Na;
  this.s = !1
};
o.handleEvent = function(a) {
  if(this.Z) {
    return this.w.call(this.N || this.src, a)
  }
  return this.w.handleEvent.call(this.w, a)
};
// Input 29
var Oa, Pa = (Oa = "ScriptEngine" in p && p.ScriptEngine() == "JScript") ? p.ScriptEngineMajorVersion() + "." + p.ScriptEngineMinorVersion() + "." + p.ScriptEngineBuildVersion() : "0";
// Input 30
var Qa, Ra, P, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za;
(function() {
  function a() {
    return{a:0, f:0}
  }
  function b() {
    return[]
  }
  function c() {
    function a(b) {
      return g.call(a.src, a.key, b)
    }
    return a
  }
  function d() {
    return new Ma
  }
  function e() {
    return new O
  }
  var f = Oa && !(ha(Pa, "5.7") >= 0), g;
  Ua = function(a) {
    g = a
  };
  if(f) {
    Qa = function() {
      return i.getObject()
    };
    Ra = function(a) {
      F(i, a)
    };
    P = function() {
      return j.getObject()
    };
    Sa = function(a) {
      F(j, a)
    };
    Ta = function() {
      return k.getObject()
    };
    Va = function() {
      F(k, c())
    };
    Wa = function() {
      return C.getObject()
    };
    Xa = function(a) {
      F(C, a)
    };
    Ya = function() {
      return l.getObject()
    };
    Za = function(a) {
      F(l, a)
    };
    var i = new E(0, 600);
    i.n = a;
    var j = new E(0, 600);
    j.n = b;
    var k = new E(0, 600);
    k.n = c;
    var C = new E(0, 600);
    C.n = d;
    var l = new E(0, 600);
    l.n = e
  }else {
    Qa = a, Ra = q, P = b, Sa = q, Ta = c, Va = q, Wa = d, Xa = q, Ya = e, Za = q
  }
})();
// Input 31
var Q = {}, R = {}, S = {}, $a = {};
function T(a, b, c, d, e) {
  if(b) {
    if(r(b) == "array") {
      for(var f = 0;f < b.length;f++) {
        T(a, b[f], c, d, e)
      }
    }else {
      var d = !!d, g = R;
      b in g || (g[b] = Qa());
      g = g[b];
      d in g || (g[d] = Qa(), g.a++);
      var g = g[d], i = t(a), j;
      g.f++;
      if(g[i]) {
        j = g[i];
        for(f = 0;f < j.length;f++) {
          if(g = j[f], g.w == c && g.N == e) {
            if(g.s) {
              break
            }
            return
          }
        }
      }else {
        j = g[i] = P(), g.a++
      }
      f = Ta();
      f.src = a;
      g = Wa();
      g.C(c, f, a, b, d, e);
      c = g.key;
      f.key = c;
      j.push(g);
      Q[c] = g;
      S[i] || (S[i] = P());
      S[i].push(g);
      a.addEventListener ? (a == p || !a.S) && a.addEventListener(b, f, d) : a.attachEvent(ab(b), f)
    }
  }else {
    h(Error("Invalid event type"))
  }
}
function bb(a, b, c, d, e) {
  if(r(b) == "array") {
    for(var f = 0;f < b.length;f++) {
      bb(a, b[f], c, d, e)
    }
  }else {
    d = !!d;
    a: {
      f = R;
      if(b in f && (f = f[b], d in f && (f = f[d], a = t(a), f[a]))) {
        a = f[a];
        break a
      }
      a = n
    }
    if(a) {
      for(f = 0;f < a.length;f++) {
        if(a[f].w == c && a[f].capture == d && a[f].N == e) {
          cb(a[f].key);
          break
        }
      }
    }
  }
}
function cb(a) {
  if(Q[a]) {
    var b = Q[a];
    if(!b.s) {
      var c = b.src, d = b.type, e = b.proxy, f = b.capture;
      c.removeEventListener ? (c == p || !c.S) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(ab(d), e);
      c = t(c);
      e = R[d][f][c];
      if(S[c]) {
        var g = S[c], i = ja(g, b);
        i >= 0 && x.splice.call(g, i, 1);
        g.length == 0 && delete S[c]
      }
      b.s = !0;
      e.aa = !0;
      db(d, f, c, e);
      delete Q[a]
    }
  }
}
function db(a, b, c, d) {
  if(!d.F && d.aa) {
    for(var e = 0, f = 0;e < d.length;e++) {
      if(d[e].s) {
        var g = d[e].proxy;
        g.src = n;
        Va(g);
        Xa(d[e])
      }else {
        e != f && (d[f] = d[e]), f++
      }
    }
    d.length = f;
    d.aa = !1;
    f == 0 && (Sa(d), delete R[a][b][c], R[a][b].a--, R[a][b].a == 0 && (Ra(R[a][b]), delete R[a][b], R[a].a--), R[a].a == 0 && (Ra(R[a]), delete R[a]))
  }
}
function eb(a) {
  var b, c = 0, d = b == n;
  b = !!b;
  if(a == n) {
    ea(S, function(a) {
      for(var f = a.length - 1;f >= 0;f--) {
        var e = a[f];
        if(d || b == e.capture) {
          cb(e.key), c++
        }
      }
    })
  }else {
    if(a = t(a), S[a]) {
      for(var a = S[a], e = a.length - 1;e >= 0;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          cb(f.key), c++
        }
      }
    }
  }
}
function ab(a) {
  if(a in $a) {
    return $a[a]
  }
  return $a[a] = "on" + a
}
function U(a, b, c, d, e) {
  var f = 1, b = t(b);
  if(a[b]) {
    a.f--;
    a = a[b];
    a.F ? a.F++ : a.F = 1;
    try {
      for(var g = a.length, i = 0;i < g;i++) {
        var j = a[i];
        j && !j.s && (f &= fb(j, e) !== !1)
      }
    }finally {
      a.F--, db(c, d, b, a)
    }
  }
  return Boolean(f)
}
function fb(a, b) {
  var c = a.handleEvent(b);
  a.R && cb(a.key);
  return c
}
Ua(function(a, b) {
  if(!Q[a]) {
    return!0
  }
  var c = Q[a], d = c.type, e = R;
  if(!(d in e)) {
    return!0
  }
  var e = e[d], f, g;
  Ja === m && (Ja = J && !p.addEventListener);
  if(Ja) {
    var i;
    if(!(i = b)) {
      a: {
        i = "window.event".split(".");
        for(var j = p;f = i.shift();) {
          if(j[f] != n) {
            j = j[f]
          }else {
            i = n;
            break a
          }
        }
        i = j
      }
    }
    f = i;
    i = !0 in e;
    j = !1 in e;
    if(i) {
      if(f.keyCode < 0 || f.returnValue != m) {
        return!0
      }
      a: {
        var k = !1;
        if(f.keyCode == 0) {
          try {
            f.keyCode = -1;
            break a
          }catch(C) {
            k = !0
          }
        }
        if(k || f.returnValue == m) {
          f.returnValue = !0
        }
      }
    }
    k = Ya();
    k.C(f, this);
    f = !0;
    try {
      if(i) {
        for(var l = P(), u = k.currentTarget;u;u = u.parentNode) {
          l.push(u)
        }
        g = e[!0];
        g.f = g.a;
        for(var w = l.length - 1;!k.r && w >= 0 && g.f;w--) {
          k.currentTarget = l[w], f &= U(g, l[w], d, !0, k)
        }
        if(j) {
          g = e[!1];
          g.f = g.a;
          for(w = 0;!k.r && w < l.length && g.f;w++) {
            k.currentTarget = l[w], f &= U(g, l[w], d, !1, k)
          }
        }
      }else {
        f = fb(c, k)
      }
    }finally {
      if(l) {
        l.length = 0, Sa(l)
      }
      k.B();
      Za(k)
    }
    return f
  }
  d = new O(b, this);
  try {
    f = fb(c, d)
  }finally {
    d.B()
  }
  return f
});
// Input 32
new E(0, 100);
// Input 33
function V() {
  D.call(this)
}
v(V, D);
o = V.prototype;
o.S = !0;
o.O = n;
o.addEventListener = function(a, b, c, d) {
  T(this, a, b, c, d)
};
o.removeEventListener = function(a, b, c, d) {
  bb(this, a, b, c, d)
};
o.dispatchEvent = function(a) {
  var b = a.type || a, c = R;
  if(b in c) {
    if(s(a)) {
      a = new N(a, this)
    }else {
      if(a instanceof N) {
        a.target = a.target || this
      }else {
        var d = a, a = new N(b, this);
        ga(a, d)
      }
    }
    var d = 1, e, c = c[b], b = !0 in c, f;
    if(b) {
      e = [];
      for(f = this;f;f = f.O) {
        e.push(f)
      }
      f = c[!0];
      f.f = f.a;
      for(var g = e.length - 1;!a.r && g >= 0 && f.f;g--) {
        a.currentTarget = e[g], d &= U(f, e[g], a.type, !0, a) && a.z != !1
      }
    }
    if(!1 in c) {
      if(f = c[!1], f.f = f.a, b) {
        for(g = 0;!a.r && g < e.length && f.f;g++) {
          a.currentTarget = e[g], d &= U(f, e[g], a.type, !1, a) && a.z != !1
        }
      }else {
        for(e = this;!a.r && e && f.f;e = e.O) {
          a.currentTarget = e, d &= U(f, e, a.type, !1, a) && a.z != !1
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
o.l = function() {
  V.A.l.call(this);
  eb(this);
  this.O = n
};
// Input 34
function W() {
  D.call(this)
}
v(W, V);
W.prototype.dispatchEvent = function(a) {
  return W.A.dispatchEvent.call(this, a)
};
// Input 35
function gb(a) {
  D.call(this);
  this.p = a;
  this.v = this.p.length;
  this.D = 1;
  this.e = 0;
  this.i = this.e + this.D
}
v(gb, V);
function hb(a) {
  a.D = 3;
  a.i = a.e + 3
}
o = gb.prototype;
o.u = function() {
  return this.p.slice(this.e, this.i)
};
o.M = function(a) {
  var b, c = [], d = [];
  for(b = this.e;b < this.i;b++) {
    c.push(b), d.push(b + a)
  }
  return ib(this, c, d, a)
};
function ib(a, b, c, d) {
  for(var e = d > 0 ? "next" : "prev", d = Math.abs(d), f = 0, g = 0, i = [], j = [], k = a.v, b = e == "prev" ? {P:c.slice(0, d), Q:b.slice(-1 * d, b.length)} : {Q:b.slice(0, d), P:c.slice(-1 * d, c.length)}, f = 0;f < b.P.length;f++) {
    g = (b.P[f] + k) % k, i.push(a.p[g])
  }
  for(f = 0;f < b.Q.length;f++) {
    g = (b.Q[f] + k) % k, j.push(a.p[g])
  }
  return{g:i, m:j}
}
o.move = function(a, b) {
  var b = Math.abs(b || 1), c = a == "next" ? this.v - this.i : this.e, b = b <= c ? b : c, c = "next";
  a == "prev" && (b *= -1, c = "prev");
  var d = this.M(b);
  this.e += b;
  this.i += b;
  this.dispatchEvent({type:c, m:d.m, g:d.g})
};
o.next = function(a) {
  this.move("next", a)
};
o.prev = function(a) {
  this.move("prev", a)
};
// Input 36
function jb(a) {
  gb.call(this, a)
}
v(jb, gb);
jb.prototype.M = function(a) {
  var b, c = [], d = [], e = this.e + a;
  for(b = 0;b < this.i;b++) {
    c.push(b)
  }
  for(b = e;b < e + this.D;b++) {
    d.push(b)
  }
  return ib(this, c, d, a)
};
jb.prototype.move = function(a, b) {
  b = Math.abs(b || 1);
  b %= this.v;
  var c = 0, d = "next";
  if(a == "prev") {
    b *= -1, c = this.v, d = "prev"
  }
  var e = [].concat(this.p).concat(this.p), f = this.M(b);
  this.e = this.e + c + b;
  this.i = this.i + c + b;
  this.p = e.slice(this.e, this.e + this.v);
  this.e = 0;
  this.i = this.D;
  this.dispatchEvent({type:d, m:f.m, g:f.g})
};
// Input 37
function X() {
  D.call(this);
  this.h = m
}
v(X, W);
X.prototype.X = function() {
  kb(this, [{name:"one"}, {name:"two"}, {name:"three"}, {name:"four"}, {name:"five"}, {name:"six"}, {name:"seven"}])
};
function kb(a, b) {
  a.h = new jb(b);
  hb(a.h);
  T(a.h, "next", function(b) {
    b = {type:"next", m:b.m, g:b.g, newValue:a.h.u()};
    a.dispatchEvent(b)
  });
  T(a.h, "prev", function(b) {
    b = {type:"prev", m:b.m, g:b.g, newValue:a.h.u()};
    a.dispatchEvent(b)
  });
  var c = {type:"loaded", newValue:b, oldValue:b, ta:a.u()};
  a.dispatchEvent(c)
}
X.prototype.u = function() {
  return this.h.u()
};
X.prototype.next = function(a) {
  this.h.next(a)
};
X.prototype.prev = function(a) {
  this.h.prev(a)
};
// Input 38
function lb() {
  X.call(this)
}
v(lb, X);
lb.prototype.X = function() {
  kb(this, [{name:"one"}, {name:"two"}, {name:"three"}, {name:"four"}, {name:"five"}, {name:"six"}, {name:"seven"}])
};
// Input 39
function Y() {
  this.H = m;
  this.G = {}
}
Y.prototype.ca = function() {
  h(Error("Not implemneted yet"))
};
Y.prototype.get = function(a) {
  this.H || h(Error("DOM not set yet"));
  this.G[a] = this.G[a] || this.H.find(a);
  return this.G[a]
};
// Input 40
var mb = {PREV:".carouselPrev", NEXT:".carouselNext", k:".carouselItems"};
function nb(a) {
  for(var b = "", c = 0;c < a.length;c++) {
    b += "<strong>" + a[c].name + "</strong>"
  }
  return b
}
;
// Input 41
function Z() {
  Y.call(this);
  this.d = mb;
  this.ja = '<div><a class="carouselPrev">Prev</a><div class="carouselWrapper"><div class="carouselItems"></div></div><a class="carouselNext">Next</a></div>'
}
v(Z, Y);
Z.prototype.ca = function() {
  return this.ja
};
Z.prototype.move = function(a, b) {
  if(b.length > 0) {
    var c = b.length, d = this.get(this.d.k), e = 100 * c, f = this.get(this.d.k).find(">*"), g = nb(b);
    if(a == "next") {
      d.append(g);
      for(e = 0;e < c;e++) {
        f.eq(e).remove()
      }
    }else {
      d.prepend(g);
      d.css("margin-left", "-" + e + "px");
      for(e = c;e > 0;e--) {
        f.eq(-1 * e).remove()
      }
    }
    d.css("margin-left", "0px")
  }
};
// Input 42
function ob() {
  this.c = !1;
  Z.call(this)
}
v(ob, Z);
ob.prototype.move = function(a, b) {
  var c = this;
  if(b.length > 0 && !c.c) {
    c.c = !0;
    var d = b.length, e = this.get(this.d.k), f = this.get(this.d.k).find(">*"), g = nb(b), i = 100 * d;
    a == "next" ? (e.append(g), e.animate({"margin-left":"-=" + i + "px"}, 500, function() {
      for(var a = 0;a < d;a++) {
        f.eq(a).remove()
      }
      e.css("margin-left", "0px");
      c.c = !1
    })) : (e.prepend(g), e.css("margin-left", -1 * i + "px"), e.animate({"margin-left":"+=" + i + "px"}, 500, function() {
      for(var a = d;a > 0;a--) {
        f.eq(-1 * a).remove()
      }
      e.css("margin-left", "0px");
      c.c = !1
    }))
  }
};
// Input 43
function pb(a, b) {
  this.q = a || new W;
  this.view = b || new Y
}
;
// Input 44
function qb(a, b) {
  this.q = a || new X;
  this.view = b || new Z;
  this.view.H = $(this.view.ca());
  rb(this)
}
v(qb, pb);
function rb(a) {
  T(a.q, "loaded", function(b) {
    var c = a.view, b = nb(b.ta);
    c.get(c.d.k).html(b)
  });
  T(a.q, "next", function(b) {
    a.view.move("next", b.g)
  });
  T(a.q, "prev", function(b) {
    a.view.move("prev", b.g)
  });
  a.view.get(a.view.d.PREV).bind("click", function(b) {
    b.preventDefault();
    a.q.prev(1)
  });
  a.view.get(a.view.d.NEXT).bind("click", function(b) {
    b.preventDefault();
    a.q.next(1)
  })
}
;
// Input 45
function sb(a, b) {
  qb.call(this, a, b)
}
v(sb, qb);
// Input 46
describe("AnimatedCarouselWidget", function() {
  var a, b, c;
  beforeEach(function() {
    b = new lb;
    c = new ob;
    a = new sb(b, c);
    a.q.X()
  });
  it("should have 3 DOM visible items at a time", function() {
    var b = a.view.get(a.view.d.k).find(">*");
    expect(b.length).toEqual(3)
  });
  describe("prev and next buttons will navigate", function() {
    describe("trigger prev on prev button click", function() {
      var d, e;
      beforeEach(function() {
        d = a.view.get(a.view.d.PREV);
        e = a.view.get(a.view.d.k)
      });
      it("should trigger prev on previous button click", function() {
        var a = e.find(">*");
        d.trigger("click");
        waitsFor(function() {
          return c.c == !1
        }, 1E4);
        runs(function() {
          var b = e.find(">*");
          expect(a.eq(0).text() == "one" && b.eq(0).text() == "seven").toBeTruthy()
        })
      });
      it("should trigger prev on previous button click even cursor is not on inital position", function() {
        b.next();
        waitsFor(function() {
          return c.c == !1
        }, 1E4);
        runs(function() {
          var a = e.find(">*");
          d.trigger("click");
          waitsFor(function() {
            return c.c == !1
          }, 1E4);
          runs(function() {
            var b = e.find(">*");
            expect(a.eq(0).text() == "two" && b.eq(0).text() == "one").toBeTruthy()
          })
        })
      });
      it("should trigger prev on previous button click even cursor moved more than one times", function() {
        b.prev(6);
        waitsFor(function() {
          return c.c == !1
        }, 1E4);
        runs(function() {
          var a = e.find(">*");
          d.trigger("click");
          waitsFor(function() {
            return c.c == !1
          }, 1E4);
          runs(function() {
            var b = e.find(">*");
            expect(a.eq(0).text() == "two" && b.eq(0).text() == "one").toBeTruthy()
          })
        })
      })
    });
    describe("trigger next  on next button click", function() {
      var d, e;
      beforeEach(function() {
        d = a.view.get(a.view.d.NEXT);
        e = a.view.get(a.view.d.k)
      });
      it("should trigger next button click", function() {
        var a = e.find(">*");
        d.trigger("click");
        waitsFor(function() {
          return c.c == !1
        }, 1E4);
        runs(function() {
          var b = e.find(">*");
          expect(a.eq(0).text() == "one" && b.eq(0).text() == "two").toBeTruthy()
        })
      });
      it("should trigger next on button click even cursor is not on inital position", function() {
        b.next();
        waitsFor(function() {
          return c.c == !1
        }, 1E4);
        runs(function() {
          var a = e.find(">*");
          d.trigger("click");
          waitsFor(function() {
            return c.c == !1
          }, 1E4);
          runs(function() {
            var b = e.find(">*");
            expect(a.eq(0).text() == "two" && b.eq(0).text() == "three").toBeTruthy()
          })
        })
      });
      it("should trigger next button click even cursor moved more than one times", function() {
        b.next(6);
        waitsFor(function() {
          return c.c == !1
        }, 1E4);
        runs(function() {
          var a = e.find(">*");
          d.trigger("click");
          waitsFor(function() {
            return c.c == !1
          }, 1E4);
          runs(function() {
            var b = e.find(">*");
            expect(a.eq(0).text() == "seven" && b.eq(0).text() == "one").toBeTruthy()
          })
        })
      })
    })
  })
});
jasmine.getEnv().addReporter(new jasmine.TrivialReporter);
jasmine.getEnv().execute();
})()
