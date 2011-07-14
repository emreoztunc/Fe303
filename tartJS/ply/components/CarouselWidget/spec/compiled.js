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
  a.z = b.prototype;
  a.prototype = new c
}
;
// Input 1
function x() {
  this.G = m;
  this.F = {}
}
x.prototype.aa = function() {
  h(Error("Not implemneted yet"))
};
x.prototype.get = function(a) {
  this.G || h(Error("DOM not set yet"));
  this.F[a] = this.F[a] || this.G.find(a);
  return this.F[a]
};
// Input 2
var ea = {PREV:".carouselPrev", NEXT:".carouselNext", p:".carouselItems"};
function fa(a) {
  for(var b = "", c = 0;c < a.length;c++) {
    b += "<strong>" + a[c].name + "</strong>"
  }
  return b
}
;
// Input 3
function y() {
  x.call(this);
  this.e = ea;
  this.ha = '<div><a class="carouselPrev">Prev</a><div class="carouselWrapper"><div class="carouselItems"></div></div><a class="carouselNext">Next</a></div>'
}
v(y, x);
y.prototype.aa = function() {
  return this.ha
};
y.prototype.move = function(a, b) {
  if(b.length > 0) {
    var c = b.length, d = this.get(this.e.p), e = 100 * c, f = this.get(this.e.p).find(">*"), g = fa(b);
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
// Input 4
function ga(a, b) {
  for(var c in a) {
    b.call(m, a[c], c, a)
  }
}
var ha = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
function ia(a) {
  for(var b, c, d = 1;d < arguments.length;d++) {
    c = arguments[d];
    for(b in c) {
      a[b] = c[b]
    }
    for(var e = 0;e < ha.length;e++) {
      b = ha[e], Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
    }
  }
}
;
// Input 5
// Input 6
function ja(a, b) {
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(d.length, e.length), g = 0;c == 0 && g < f;g++) {
    var i = d[g] || "", j = e[g] || "", k = RegExp("(\\d*)(\\D*)", "g"), B = RegExp("(\\d*)(\\D*)", "g");
    do {
      var l = k.exec(i) || ["", "", ""], u = B.exec(j) || ["", "", ""];
      if(l[0].length == 0 && u[0].length == 0) {
        break
      }
      c = ka(l[1].length == 0 ? 0 : parseInt(l[1], 10), u[1].length == 0 ? 0 : parseInt(u[1], 10)) || ka(l[2].length == 0, u[2].length == 0) || ka(l[2], u[2])
    }while(c == 0)
  }
  return c
}
function ka(a, b) {
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
// Input 7
var z, la, A, ma;
function na() {
  return p.navigator ? p.navigator.userAgent : n
}
ma = A = la = z = !1;
var C;
if(C = na()) {
  var oa = p.navigator;
  z = C.indexOf("Opera") == 0;
  la = !z && C.indexOf("MSIE") != -1;
  A = !z && C.indexOf("WebKit") != -1;
  ma = !z && !A && oa.product == "Gecko"
}
var D = la, pa = ma, qa = A, ra = p.navigator, sa = (ra && ra.platform || "").indexOf("Mac") != -1, E;
a: {
  var F = "", G;
  if(z && p.opera) {
    var ta = p.opera.version, F = typeof ta == "function" ? ta() : ta
  }else {
    if(pa ? G = /rv\:([^\);]+)(\)|;)/ : D ? G = /MSIE\s+([^\);]+)(\)|;)/ : qa && (G = /WebKit\/(\S+)/), G) {
      var ua = G.exec(na()), F = ua ? ua[1] : ""
    }
  }
  if(D) {
    var va, wa = p.document;
    va = wa ? wa.documentMode : m;
    if(va > parseFloat(F)) {
      E = String(va);
      break a
    }
  }
  E = F
}
var H = {};
// Input 8
// Input 9
// Input 10
var I = Array.prototype, xa = I.indexOf ? function(a, b, c) {
  return I.indexOf.call(a, b, c)
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
}, ya = I.forEach ? function(a, b, c) {
  I.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = s(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
};
// Input 11
// Input 12
var za;
// Input 13
// Input 14
!D || H["9"] || (H["9"] = ja(E, "9") >= 0);
var Aa = D && !(H["8"] || (H["8"] = ja(E, "8") >= 0));
// Input 15
// Input 16
function J() {
  Ba && (Ca[t(this)] = this)
}
var Ba = !1, Ca = {};
J.prototype.T = !1;
J.prototype.A = function() {
  if(!this.T && (this.T = !0, this.j(), Ba)) {
    var a = t(this);
    Ca.hasOwnProperty(a) || h(Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call"));
    delete Ca[a]
  }
};
J.prototype.j = function() {
};
// Input 17
function K(a, b) {
  J.call(this);
  this.type = a;
  this.currentTarget = this.target = b
}
v(K, J);
K.prototype.j = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
K.prototype.q = !1;
K.prototype.w = !0;
K.prototype.preventDefault = function() {
  this.w = !1
};
// Input 18
var Da = new Function("a", "return a");
// Input 19
function L(a, b) {
  a && this.B(a, b)
}
v(L, K);
o = L.prototype;
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
o.ia = !1;
o.K = n;
o.B = function(a, b) {
  var c = this.type = a.type;
  K.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(pa) {
      try {
        Da(d.nodeName)
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
  this.ia = sa ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.K = a;
  delete this.w;
  delete this.q
};
o.preventDefault = function() {
  L.z.preventDefault.call(this);
  var a = this.K;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, Aa) {
      try {
        if(a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
o.j = function() {
  L.z.j.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.K = n
};
// Input 20
function Ea() {
}
var Fa = 0;
o = Ea.prototype;
o.key = 0;
o.r = !1;
o.Q = !1;
o.B = function(a, b, c, d, e, f) {
  r(a) == "function" ? this.X = !0 : a && a.handleEvent && r(a.handleEvent) == "function" ? this.X = !1 : h(Error("Invalid listener argument"));
  this.v = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.M = f;
  this.Q = !1;
  this.key = ++Fa;
  this.r = !1
};
o.handleEvent = function(a) {
  if(this.X) {
    return this.v.call(this.M || this.src, a)
  }
  return this.v.handleEvent.call(this.v, a)
};
// Input 21
var Ga, Ha = (Ga = "ScriptEngine" in p && p.ScriptEngine() == "JScript") ? p.ScriptEngineMajorVersion() + "." + p.ScriptEngineMinorVersion() + "." + p.ScriptEngineBuildVersion() : "0";
// Input 22
function M(a, b) {
  J.call(this);
  this.Y = b;
  this.m = [];
  a > this.Y && h(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.m.push(this.s())
  }
}
v(M, J);
o = M.prototype;
o.l = n;
o.S = n;
o.getObject = function() {
  if(this.m.length) {
    return this.m.pop()
  }
  return this.s()
};
function N(a, b) {
  a.m.length < a.Y ? a.m.push(b) : a.I(b)
}
o.s = function() {
  return this.l ? this.l() : {}
};
o.I = function(a) {
  if(this.S) {
    this.S(a)
  }else {
    var b = r(a);
    if(b == "object" || b == "array" || b == "function") {
      if(r(a.A) == "function") {
        a.A()
      }else {
        for(var c in a) {
          delete a[c]
        }
      }
    }
  }
};
o.j = function() {
  M.z.j.call(this);
  for(var a = this.m;a.length;) {
    this.I(a.pop())
  }
  delete this.m
};
// Input 23
var O, Ia, P, Ja, Ka, La, Ma, Na, Oa, Pa, Qa;
(function() {
  function a() {
    return{a:0, d:0}
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
    return new Ea
  }
  function e() {
    return new L
  }
  var f = Ga && !(ja(Ha, "5.7") >= 0), g;
  La = function(a) {
    g = a
  };
  if(f) {
    O = function() {
      return i.getObject()
    };
    Ia = function(a) {
      N(i, a)
    };
    P = function() {
      return j.getObject()
    };
    Ja = function(a) {
      N(j, a)
    };
    Ka = function() {
      return k.getObject()
    };
    Ma = function() {
      N(k, c())
    };
    Na = function() {
      return B.getObject()
    };
    Oa = function(a) {
      N(B, a)
    };
    Pa = function() {
      return l.getObject()
    };
    Qa = function(a) {
      N(l, a)
    };
    var i = new M(0, 600);
    i.l = a;
    var j = new M(0, 600);
    j.l = b;
    var k = new M(0, 600);
    k.l = c;
    var B = new M(0, 600);
    B.l = d;
    var l = new M(0, 600);
    l.l = e
  }else {
    O = a, Ia = q, P = b, Ja = q, Ka = c, Ma = q, Na = d, Oa = q, Pa = e, Qa = q
  }
})();
// Input 24
var Q = {}, R = {}, S = {}, Ra = {};
function T(a, b, c, d, e) {
  if(b) {
    if(r(b) == "array") {
      for(var f = 0;f < b.length;f++) {
        T(a, b[f], c, d, e)
      }
    }else {
      var d = !!d, g = R;
      b in g || (g[b] = O());
      g = g[b];
      d in g || (g[d] = O(), g.a++);
      var g = g[d], i = t(a), j;
      g.d++;
      if(g[i]) {
        j = g[i];
        for(f = 0;f < j.length;f++) {
          if(g = j[f], g.v == c && g.M == e) {
            if(g.r) {
              break
            }
            return
          }
        }
      }else {
        j = g[i] = P(), g.a++
      }
      f = Ka();
      f.src = a;
      g = Na();
      g.B(c, f, a, b, d, e);
      c = g.key;
      f.key = c;
      j.push(g);
      Q[c] = g;
      S[i] || (S[i] = P());
      S[i].push(g);
      a.addEventListener ? (a == p || !a.R) && a.addEventListener(b, f, d) : a.attachEvent(Sa(b), f)
    }
  }else {
    h(Error("Invalid event type"))
  }
}
function Ta(a, b, c, d, e) {
  if(r(b) == "array") {
    for(var f = 0;f < b.length;f++) {
      Ta(a, b[f], c, d, e)
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
        if(a[f].v == c && a[f].capture == d && a[f].M == e) {
          Ua(a[f].key);
          break
        }
      }
    }
  }
}
function Ua(a) {
  if(Q[a]) {
    var b = Q[a];
    if(!b.r) {
      var c = b.src, d = b.type, e = b.proxy, f = b.capture;
      c.removeEventListener ? (c == p || !c.R) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(Sa(d), e);
      c = t(c);
      e = R[d][f][c];
      if(S[c]) {
        var g = S[c], i = xa(g, b);
        i >= 0 && I.splice.call(g, i, 1);
        g.length == 0 && delete S[c]
      }
      b.r = !0;
      e.Z = !0;
      Va(d, f, c, e);
      delete Q[a]
    }
  }
}
function Va(a, b, c, d) {
  if(!d.D && d.Z) {
    for(var e = 0, f = 0;e < d.length;e++) {
      if(d[e].r) {
        var g = d[e].proxy;
        g.src = n;
        Ma(g);
        Oa(d[e])
      }else {
        e != f && (d[f] = d[e]), f++
      }
    }
    d.length = f;
    d.Z = !1;
    f == 0 && (Ja(d), delete R[a][b][c], R[a][b].a--, R[a][b].a == 0 && (Ia(R[a][b]), delete R[a][b], R[a].a--), R[a].a == 0 && (Ia(R[a]), delete R[a]))
  }
}
function Wa(a) {
  var b, c = 0, d = b == n;
  b = !!b;
  if(a == n) {
    ga(S, function(a) {
      for(var f = a.length - 1;f >= 0;f--) {
        var e = a[f];
        if(d || b == e.capture) {
          Ua(e.key), c++
        }
      }
    })
  }else {
    if(a = t(a), S[a]) {
      for(var a = S[a], e = a.length - 1;e >= 0;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          Ua(f.key), c++
        }
      }
    }
  }
}
function Sa(a) {
  if(a in Ra) {
    return Ra[a]
  }
  return Ra[a] = "on" + a
}
function U(a, b, c, d, e) {
  var f = 1, b = t(b);
  if(a[b]) {
    a.d--;
    a = a[b];
    a.D ? a.D++ : a.D = 1;
    try {
      for(var g = a.length, i = 0;i < g;i++) {
        var j = a[i];
        j && !j.r && (f &= Xa(j, e) !== !1)
      }
    }finally {
      a.D--, Va(c, d, b, a)
    }
  }
  return Boolean(f)
}
function Xa(a, b) {
  var c = a.handleEvent(b);
  a.Q && Ua(a.key);
  return c
}
La(function(a, b) {
  if(!Q[a]) {
    return!0
  }
  var c = Q[a], d = c.type, e = R;
  if(!(d in e)) {
    return!0
  }
  var e = e[d], f, g;
  za === m && (za = D && !p.addEventListener);
  if(za) {
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
          }catch(B) {
            k = !0
          }
        }
        if(k || f.returnValue == m) {
          f.returnValue = !0
        }
      }
    }
    k = Pa();
    k.B(f, this);
    f = !0;
    try {
      if(i) {
        for(var l = P(), u = k.currentTarget;u;u = u.parentNode) {
          l.push(u)
        }
        g = e[!0];
        g.d = g.a;
        for(var w = l.length - 1;!k.q && w >= 0 && g.d;w--) {
          k.currentTarget = l[w], f &= U(g, l[w], d, !0, k)
        }
        if(j) {
          g = e[!1];
          g.d = g.a;
          for(w = 0;!k.q && w < l.length && g.d;w++) {
            k.currentTarget = l[w], f &= U(g, l[w], d, !1, k)
          }
        }
      }else {
        f = Xa(c, k)
      }
    }finally {
      if(l) {
        l.length = 0, Ja(l)
      }
      k.A();
      Qa(k)
    }
    return f
  }
  d = new L(b, this);
  try {
    f = Xa(c, d)
  }finally {
    d.A()
  }
  return f
});
// Input 25
new M(0, 100);
// Input 26
var V = "StopIteration" in p ? p.StopIteration : Error("StopIteration");
function W() {
}
W.prototype.next = function() {
  h(V)
};
W.prototype.H = function() {
  return this
};
function Ya(a) {
  if(a instanceof W) {
    return a
  }
  if(typeof a.H == "function") {
    return a.H(!1)
  }
  if(aa(a)) {
    var b = 0, c = new W;
    c.next = function() {
      for(;;) {
        if(b >= a.length && h(V), b in a) {
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
function Za(a, b) {
  if(aa(a)) {
    try {
      ya(a, b, m)
    }catch(c) {
      c !== V && h(c)
    }
  }else {
    a = Ya(a);
    try {
      for(;;) {
        b.call(m, a.next(), m, a)
      }
    }catch(d) {
      d !== V && h(d)
    }
  }
}
;
// Input 27
// Input 28
function $a(a) {
  this.i = {};
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
      if(a instanceof $a) {
        c = ab(a);
        bb(a);
        d = [];
        for(b = 0;b < a.b.length;b++) {
          d.push(a.i[a.b[b]])
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
o = $a.prototype;
o.a = 0;
o.version_ = 0;
function ab(a) {
  bb(a);
  return a.b.concat()
}
o.remove = function(a) {
  if(Object.prototype.hasOwnProperty.call(this.i, a)) {
    return delete this.i[a], this.a--, this.version_++, this.b.length > 2 * this.a && bb(this), !0
  }
  return!1
};
function bb(a) {
  if(a.a != a.b.length) {
    for(var b = 0, c = 0;b < a.b.length;) {
      var d = a.b[b];
      Object.prototype.hasOwnProperty.call(a.i, d) && (a.b[c++] = d);
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
  if(Object.prototype.hasOwnProperty.call(this.i, a)) {
    return this.i[a]
  }
  return b
};
o.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.i, a) || (this.a++, this.b.push(a), this.version_++);
  this.i[a] = b
};
o.H = function(a) {
  bb(this);
  var b = 0, c = this.b, d = this.i, e = this.version_, f = this, g = new W;
  g.next = function() {
    for(;;) {
      e != f.version_ && h(Error("The map has changed since the iterator was created"));
      b >= c.length && h(V);
      var g = c[b++];
      return a ? g : d[g]
    }
  };
  return g
};
// Input 29
// Input 30
// Input 31
// Input 32
// Input 33
// Input 34
function cb() {
  this.V = [];
  this.$ = new $a;
  this.oa = this.pa = this.qa = this.ja = 0;
  this.ba = new $a;
  this.ea = this.na = 0;
  this.ga = 1;
  this.fa = new M(0, 4E3);
  this.fa.s = function() {
    return new db
  };
  this.ka = new M(0, 50);
  this.ka.s = function() {
    return new eb
  };
  var a = this;
  this.W = new M(0, 2E3);
  this.W.s = function() {
    return String(a.ga++)
  };
  this.W.I = function() {
  };
  this.sa = 3
}
function eb() {
  this.ca = this.la = this.count = 0
}
eb.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.count, " (", Math.round(this.la * 10) / 10, " ms)");
  this.ca && a.push(" [VarAlloc = ", this.ca, "]");
  return a.join("")
};
function db() {
}
function fb(a, b, c, d) {
  var e = [];
  c == -1 ? e.push("    ") : e.push(gb(a.U - c));
  e.push(" ", hb(a.U - b));
  a.J == 0 ? e.push(" Start        ") : a.J == 1 ? (e.push(" Done "), e.push(gb(a.ta - a.startTime), " ms ")) : e.push(" Comment      ");
  e.push(d, a);
  a.ma > 0 && e.push("[VarAlloc ", a.ma, "] ");
  return e.join("")
}
db.prototype.toString = function() {
  return this.type == n ? this.da : "[" + this.type + "] " + this.da
};
cb.prototype.toString = function() {
  for(var a = [], b = -1, c = [], d = 0;d < this.V.length;d++) {
    var e = this.V[d];
    e.J == 1 && c.pop();
    a.push(" ", fb(e, this.ja, b, c.join("")));
    b = e.U;
    a.push("\n");
    e.J == 0 && c.push("|  ")
  }
  if(this.$.a != 0) {
    var f = da();
    a.push(" Unstopped timers:\n");
    Za(this.$, function(b) {
      a.push("  ", b, " (", f - b.startTime, " ms, started at ", hb(b.startTime), ")\n")
    })
  }
  b = ab(this.ba);
  for(d = 0;d < b.length;d++) {
    c = this.ba.get(b[d]), c.count > 1 && a.push(" TOTAL ", c, "\n")
  }
  a.push("Total tracers created ", this.na, "\n", "Total comments created ", this.ea, "\n", "Overhead start: ", this.qa, " ms\n", "Overhead end: ", this.pa, " ms\n", "Overhead comment: ", this.oa, " ms\n");
  return a.join("")
};
function gb(a) {
  var a = Math.round(a), b = "";
  a < 1E3 && (b = " ");
  a < 100 && (b = "  ");
  a < 10 && (b = "   ");
  return b + a
}
function hb(a) {
  a = Math.round(a);
  return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
}
new cb;
// Input 35
// Input 36
function X() {
  J.call(this)
}
v(X, J);
o = X.prototype;
o.R = !0;
o.N = n;
o.addEventListener = function(a, b, c, d) {
  T(this, a, b, c, d)
};
o.removeEventListener = function(a, b, c, d) {
  Ta(this, a, b, c, d)
};
o.dispatchEvent = function(a) {
  var b = a.type || a, c = R;
  if(b in c) {
    if(s(a)) {
      a = new K(a, this)
    }else {
      if(a instanceof K) {
        a.target = a.target || this
      }else {
        var d = a, a = new K(b, this);
        ia(a, d)
      }
    }
    var d = 1, e, c = c[b], b = !0 in c, f;
    if(b) {
      e = [];
      for(f = this;f;f = f.N) {
        e.push(f)
      }
      f = c[!0];
      f.d = f.a;
      for(var g = e.length - 1;!a.q && g >= 0 && f.d;g--) {
        a.currentTarget = e[g], d &= U(f, e[g], a.type, !0, a) && a.w != !1
      }
    }
    if(!1 in c) {
      if(f = c[!1], f.d = f.a, b) {
        for(g = 0;!a.q && g < e.length && f.d;g++) {
          a.currentTarget = e[g], d &= U(f, e[g], a.type, !1, a) && a.w != !1
        }
      }else {
        for(e = this;!a.q && e && f.d;e = e.N) {
          a.currentTarget = e, d &= U(f, e, a.type, !1, a) && a.w != !1
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
o.j = function() {
  X.z.j.call(this);
  Wa(this);
  this.N = n
};
// Input 37
function Y() {
  J.call(this)
}
v(Y, X);
Y.prototype.dispatchEvent = function(a) {
  return Y.z.dispatchEvent.call(this, a)
};
// Input 38
function ib(a, b) {
  this.o = a || new Y;
  this.view = b || new x
}
;
// Input 39
function jb(a) {
  J.call(this);
  this.n = a;
  this.u = this.n.length;
  this.C = 1;
  this.c = 0;
  this.h = this.c + this.C
}
v(jb, X);
function kb(a) {
  a.C = 3;
  a.h = a.c + 3
}
o = jb.prototype;
o.t = function() {
  return this.n.slice(this.c, this.h)
};
o.L = function(a) {
  var b, c = [], d = [];
  for(b = this.c;b < this.h;b++) {
    c.push(b), d.push(b + a)
  }
  return lb(this, c, d, a)
};
function lb(a, b, c, d) {
  for(var e = d > 0 ? "next" : "prev", d = Math.abs(d), f = 0, g = 0, i = [], j = [], k = a.u, b = e == "prev" ? {O:c.slice(0, d), P:b.slice(-1 * d, b.length)} : {P:b.slice(0, d), O:c.slice(-1 * d, c.length)}, f = 0;f < b.O.length;f++) {
    g = (b.O[f] + k) % k, i.push(a.n[g])
  }
  for(f = 0;f < b.P.length;f++) {
    g = (b.P[f] + k) % k, j.push(a.n[g])
  }
  return{f:i, k:j}
}
o.move = function(a, b) {
  var b = Math.abs(b || 1), c = a == "next" ? this.u - this.h : this.c, b = b <= c ? b : c, c = "next";
  a == "prev" && (b *= -1, c = "prev");
  var d = this.L(b);
  this.c += b;
  this.h += b;
  this.dispatchEvent({type:c, k:d.k, f:d.f})
};
o.next = function(a) {
  this.move("next", a)
};
o.prev = function(a) {
  this.move("prev", a)
};
// Input 40
function mb(a) {
  jb.call(this, a)
}
v(mb, jb);
mb.prototype.L = function(a) {
  var b, c = [], d = [], e = this.c + a;
  for(b = 0;b < this.h;b++) {
    c.push(b)
  }
  for(b = e;b < e + this.C;b++) {
    d.push(b)
  }
  return lb(this, c, d, a)
};
mb.prototype.move = function(a, b) {
  b = Math.abs(b || 1);
  b %= this.u;
  var c = 0, d = "next";
  if(a == "prev") {
    b *= -1, c = this.u, d = "prev"
  }
  var e = [].concat(this.n).concat(this.n), f = this.L(b);
  this.c = this.c + c + b;
  this.h = this.h + c + b;
  this.n = e.slice(this.c, this.c + this.u);
  this.c = 0;
  this.h = this.C;
  this.dispatchEvent({type:d, k:f.k, f:f.f})
};
// Input 41
function Z() {
  J.call(this);
  this.g = m
}
v(Z, Y);
function nb(a) {
  var b = [{name:"one"}, {name:"two"}, {name:"three"}, {name:"four"}, {name:"five"}, {name:"six"}, {name:"seven"}];
  a.g = new mb(b);
  kb(a.g);
  T(a.g, "next", function(b) {
    b = {type:"next", k:b.k, f:b.f, newValue:a.g.t()};
    a.dispatchEvent(b)
  });
  T(a.g, "prev", function(b) {
    b = {type:"prev", k:b.k, f:b.f, newValue:a.g.t()};
    a.dispatchEvent(b)
  });
  b = {type:"loaded", newValue:b, oldValue:b, ra:a.t()};
  a.dispatchEvent(b)
}
Z.prototype.t = function() {
  return this.g.t()
};
Z.prototype.next = function(a) {
  this.g.next(a)
};
Z.prototype.prev = function(a) {
  this.g.prev(a)
};
// Input 42
function ob(a, b) {
  this.o = a || new Z;
  this.view = b || new y;
  this.view.G = $(this.view.aa());
  pb(this)
}
v(ob, ib);
function pb(a) {
  T(a.o, "loaded", function(b) {
    var c = a.view, b = fa(b.ra);
    c.get(c.e.p).html(b)
  });
  T(a.o, "next", function(b) {
    a.view.move("next", b.f)
  });
  T(a.o, "prev", function(b) {
    a.view.move("prev", b.f)
  });
  a.view.get(a.view.e.PREV).bind("click", function(b) {
    b.preventDefault();
    a.o.prev(1)
  });
  a.view.get(a.view.e.NEXT).bind("click", function(b) {
    b.preventDefault();
    a.o.next(1)
  })
}
;
// Input 43
describe("CarouselWidget", function() {
  var a, b, c;
  beforeEach(function() {
    b = new Z;
    c = new y;
    a = new ob(b, c);
    nb(a.o)
  });
  it("should have 3 DOM visible items at a time", function() {
    var b = a.view.get(a.view.e.p).find(">*");
    expect(b.length).toEqual(3)
  });
  describe("prev and next buttons will navigate", function() {
    describe("trigger prev on prev button click", function() {
      var c, e;
      beforeEach(function() {
        c = a.view.get(a.view.e.PREV);
        e = a.view.get(a.view.e.p)
      });
      it("should trigger prev on previous button click", function() {
        var a = e.find(">*");
        c.trigger("click");
        var b = e.find(">*");
        expect(a.eq(0).text() == "one" && b.eq(0).text() == "seven").toBeTruthy()
      });
      it("should trigger prev on previous button click even cursor is not on inital position", function() {
        b.next();
        var a = e.find(">*");
        c.trigger("click");
        var g = e.find(">*");
        expect(a.eq(0).text() == "two" && g.eq(0).text() == "one").toBeTruthy()
      });
      it("should trigger prev on previous button click even cursor moved more than one times", function() {
        b.prev(6);
        var a = e.find(">*");
        c.trigger("click");
        var g = e.find(">*");
        expect(a.eq(0).text() == "two" && g.eq(0).text() == "one").toBeTruthy()
      })
    });
    describe("trigger next  on next button click", function() {
      var c, e;
      beforeEach(function() {
        c = a.view.get(a.view.e.NEXT);
        e = a.view.get(a.view.e.p)
      });
      it("should trigger next button click", function() {
        var a = e.find(">*");
        c.trigger("click");
        var b = e.find(">*");
        expect(a.eq(0).text() == "one" && b.eq(0).text() == "two").toBeTruthy()
      });
      it("should trigger next on button click even cursor is not on inital position", function() {
        b.next();
        var a = e.find(">*");
        c.trigger("click");
        var g = e.find(">*");
        expect(a.eq(0).text() == "two" && g.eq(0).text() == "three").toBeTruthy()
      });
      it("should trigger next button click even cursor moved more than one times", function() {
        b.next(6);
        var a = e.find(">*");
        c.trigger("click");
        var g = e.find(">*");
        expect(a.eq(0).text() == "seven" && g.eq(0).text() == "one").toBeTruthy()
      })
    })
  })
});
jasmine.getEnv().addReporter(new jasmine.TrivialReporter);
jasmine.getEnv().execute();
})()
