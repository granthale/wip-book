(function () {// quartz/components/scripts/quartz/components/scripts/clipboard.inline.ts
var svgCopy = '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>';
var svgCheck = '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" fill="rgb(63, 185, 80)" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>';
document.addEventListener("nav", () => {
  const els = document.getElementsByTagName("pre");
  for (let i = 0; i < els.length; i++) {
    const codeBlock = els[i].getElementsByTagName("code")[0];
    if (codeBlock) {
      const source = codeBlock.innerText.replace(/\n\n/g, "\n");
      const button = document.createElement("button");
      button.className = "clipboard-button";
      button.type = "button";
      button.innerHTML = svgCopy;
      button.ariaLabel = "Copy source";
      button.addEventListener("click", () => {
        navigator.clipboard.writeText(source).then(
          () => {
            button.blur();
            button.innerHTML = svgCheck;
            setTimeout(() => {
              button.innerHTML = svgCopy;
              button.style.borderColor = "";
            }, 2e3);
          },
          (error) => console.error(error)
        );
      });
      els[i].prepend(button);
    }
  }
});
})();
(function () {// quartz/components/scripts/quartz/components/scripts/toc.inline.ts
var observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const slug = entry.target.id;
    const tocEntryElement = document.querySelector(`a[data-for="${slug}"]`);
    const windowHeight = entry.rootBounds?.height;
    if (windowHeight && tocEntryElement) {
      if (entry.boundingClientRect.y < windowHeight) {
        tocEntryElement.classList.add("in-view");
      } else {
        tocEntryElement.classList.remove("in-view");
      }
    }
  }
});
function toggleToc() {
  this.classList.toggle("collapsed");
  const content = this.nextElementSibling;
  content.classList.toggle("collapsed");
  content.style.maxHeight = content.style.maxHeight === "0px" ? content.scrollHeight + "px" : "0px";
}
function setupToc() {
  const toc = document.getElementById("toc");
  if (toc) {
    const content = toc.nextElementSibling;
    content.style.maxHeight = content.scrollHeight + "px";
    toc.removeEventListener("click", toggleToc);
    toc.addEventListener("click", toggleToc);
  }
}
window.addEventListener("resize", setupToc);
document.addEventListener("nav", () => {
  setupToc();
  observer.disconnect();
  const headers = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]");
  headers.forEach((header) => observer.observe(header));
});
})();
(function () {var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/flexsearch/dist/flexsearch.bundle.js
var require_flexsearch_bundle = __commonJS({
  "node_modules/flexsearch/dist/flexsearch.bundle.js"(exports, module) {
    (function _f(self) {
      "use strict";
      try {
        if (module)
          self = module;
      } catch (e) {
      }
      self._factory = _f;
      var t;
      function u(a2) {
        return "undefined" !== typeof a2 ? a2 : true;
      }
      function aa(a2) {
        const b2 = Array(a2);
        for (let c2 = 0; c2 < a2; c2++)
          b2[c2] = v();
        return b2;
      }
      function v() {
        return /* @__PURE__ */ Object.create(null);
      }
      function ba(a2, b2) {
        return b2.length - a2.length;
      }
      function x(a2) {
        return "string" === typeof a2;
      }
      function C(a2) {
        return "object" === typeof a2;
      }
      function D(a2) {
        return "function" === typeof a2;
      }
      ;
      function ca(a2, b2) {
        var c2 = da;
        if (a2 && (b2 && (a2 = E(a2, b2)), this.H && (a2 = E(a2, this.H)), this.J && 1 < a2.length && (a2 = E(a2, this.J)), c2 || "" === c2)) {
          a2 = a2.split(c2);
          if (this.filter) {
            b2 = this.filter;
            c2 = a2.length;
            const d2 = [];
            for (let e = 0, f = 0; e < c2; e++) {
              const g = a2[e];
              g && !b2[g] && (d2[f++] = g);
            }
            a2 = d2;
          }
          return a2;
        }
        return a2;
      }
      const da = /[\p{Z}\p{S}\p{P}\p{C}]+/u, ea = /[\u0300-\u036f]/g;
      function fa(a2, b2) {
        const c2 = Object.keys(a2), d2 = c2.length, e = [];
        let f = "", g = 0;
        for (let h = 0, k, m; h < d2; h++)
          k = c2[h], (m = a2[k]) ? (e[g++] = F(b2 ? "(?!\\b)" + k + "(\\b|_)" : k), e[g++] = m) : f += (f ? "|" : "") + k;
        f && (e[g++] = F(b2 ? "(?!\\b)(" + f + ")(\\b|_)" : "(" + f + ")"), e[g] = "");
        return e;
      }
      function E(a2, b2) {
        for (let c2 = 0, d2 = b2.length; c2 < d2 && (a2 = a2.replace(b2[c2], b2[c2 + 1]), a2); c2 += 2)
          ;
        return a2;
      }
      function F(a2) {
        return new RegExp(a2, "g");
      }
      function ha(a2) {
        let b2 = "", c2 = "";
        for (let d2 = 0, e = a2.length, f; d2 < e; d2++)
          (f = a2[d2]) !== c2 && (b2 += c2 = f);
        return b2;
      }
      ;
      var ja = { encode: ia, F: false, G: "" };
      function ia(a2) {
        return ca.call(this, ("" + a2).toLowerCase(), false);
      }
      ;
      const ka = {}, G = {};
      function la(a2) {
        I(a2, "add");
        I(a2, "append");
        I(a2, "search");
        I(a2, "update");
        I(a2, "remove");
      }
      function I(a2, b2) {
        a2[b2 + "Async"] = function() {
          const c2 = this, d2 = arguments;
          var e = d2[d2.length - 1];
          let f;
          D(e) && (f = e, delete d2[d2.length - 1]);
          e = new Promise(function(g) {
            setTimeout(function() {
              c2.async = true;
              const h = c2[b2].apply(c2, d2);
              c2.async = false;
              g(h);
            });
          });
          return f ? (e.then(f), this) : e;
        };
      }
      ;
      function ma(a2, b2, c2, d2) {
        const e = a2.length;
        let f = [], g, h, k = 0;
        d2 && (d2 = []);
        for (let m = e - 1; 0 <= m; m--) {
          const n = a2[m], w = n.length, q = v();
          let r = !g;
          for (let l = 0; l < w; l++) {
            const p = n[l], z = p.length;
            if (z)
              for (let B = 0, A, y; B < z; B++)
                if (y = p[B], g) {
                  if (g[y]) {
                    if (!m) {
                      if (c2)
                        c2--;
                      else if (f[k++] = y, k === b2)
                        return f;
                    }
                    if (m || d2)
                      q[y] = 1;
                    r = true;
                  }
                  if (d2 && (h[y] = (A = h[y]) ? ++A : A = 1, A < e)) {
                    const H = d2[A - 2] || (d2[A - 2] = []);
                    H[H.length] = y;
                  }
                } else
                  q[y] = 1;
          }
          if (d2)
            g || (h = q);
          else if (!r)
            return [];
          g = q;
        }
        if (d2)
          for (let m = d2.length - 1, n, w; 0 <= m; m--) {
            n = d2[m];
            w = n.length;
            for (let q = 0, r; q < w; q++)
              if (r = n[q], !g[r]) {
                if (c2)
                  c2--;
                else if (f[k++] = r, k === b2)
                  return f;
                g[r] = 1;
              }
          }
        return f;
      }
      function na(a2, b2) {
        const c2 = v(), d2 = v(), e = [];
        for (let f = 0; f < a2.length; f++)
          c2[a2[f]] = 1;
        for (let f = 0, g; f < b2.length; f++) {
          g = b2[f];
          for (let h = 0, k; h < g.length; h++)
            k = g[h], c2[k] && !d2[k] && (d2[k] = 1, e[e.length] = k);
        }
        return e;
      }
      ;
      function J(a2) {
        this.l = true !== a2 && a2;
        this.cache = v();
        this.h = [];
      }
      function oa(a2, b2, c2) {
        C(a2) && (a2 = a2.query);
        let d2 = this.cache.get(a2);
        d2 || (d2 = this.search(a2, b2, c2), this.cache.set(a2, d2));
        return d2;
      }
      J.prototype.set = function(a2, b2) {
        if (!this.cache[a2]) {
          var c2 = this.h.length;
          c2 === this.l ? delete this.cache[this.h[c2 - 1]] : c2++;
          for (--c2; 0 < c2; c2--)
            this.h[c2] = this.h[c2 - 1];
          this.h[0] = a2;
        }
        this.cache[a2] = b2;
      };
      J.prototype.get = function(a2) {
        const b2 = this.cache[a2];
        if (this.l && b2 && (a2 = this.h.indexOf(a2))) {
          const c2 = this.h[a2 - 1];
          this.h[a2 - 1] = this.h[a2];
          this.h[a2] = c2;
        }
        return b2;
      };
      const qa = { memory: { charset: "latin:extra", D: 3, B: 4, m: false }, performance: { D: 3, B: 3, s: false, context: { depth: 2, D: 1 } }, match: { charset: "latin:extra", G: "reverse" }, score: { charset: "latin:advanced", D: 20, B: 3, context: { depth: 3, D: 9 } }, "default": {} };
      function ra(a2, b2, c2, d2, e, f) {
        setTimeout(function() {
          const g = a2(c2, JSON.stringify(f));
          g && g.then ? g.then(function() {
            b2.export(a2, b2, c2, d2, e + 1);
          }) : b2.export(a2, b2, c2, d2, e + 1);
        });
      }
      ;
      function K(a2, b2) {
        if (!(this instanceof K))
          return new K(a2);
        var c2;
        if (a2) {
          x(a2) ? a2 = qa[a2] : (c2 = a2.preset) && (a2 = Object.assign({}, c2[c2], a2));
          c2 = a2.charset;
          var d2 = a2.lang;
          x(c2) && (-1 === c2.indexOf(":") && (c2 += ":default"), c2 = G[c2]);
          x(d2) && (d2 = ka[d2]);
        } else
          a2 = {};
        let e, f, g = a2.context || {};
        this.encode = a2.encode || c2 && c2.encode || ia;
        this.register = b2 || v();
        this.D = e = a2.resolution || 9;
        this.G = b2 = c2 && c2.G || a2.tokenize || "strict";
        this.depth = "strict" === b2 && g.depth;
        this.l = u(g.bidirectional);
        this.s = f = u(a2.optimize);
        this.m = u(a2.fastupdate);
        this.B = a2.minlength || 1;
        this.C = a2.boost;
        this.map = f ? aa(e) : v();
        this.A = e = g.resolution || 1;
        this.h = f ? aa(e) : v();
        this.F = c2 && c2.F || a2.rtl;
        this.H = (b2 = a2.matcher || d2 && d2.H) && fa(b2, false);
        this.J = (b2 = a2.stemmer || d2 && d2.J) && fa(b2, true);
        if (c2 = b2 = a2.filter || d2 && d2.filter) {
          c2 = b2;
          d2 = v();
          for (let h = 0, k = c2.length; h < k; h++)
            d2[c2[h]] = 1;
          c2 = d2;
        }
        this.filter = c2;
        this.cache = (b2 = a2.cache) && new J(b2);
      }
      t = K.prototype;
      t.append = function(a2, b2) {
        return this.add(a2, b2, true);
      };
      t.add = function(a2, b2, c2, d2) {
        if (b2 && (a2 || 0 === a2)) {
          if (!d2 && !c2 && this.register[a2])
            return this.update(a2, b2);
          b2 = this.encode(b2);
          if (d2 = b2.length) {
            const m = v(), n = v(), w = this.depth, q = this.D;
            for (let r = 0; r < d2; r++) {
              let l = b2[this.F ? d2 - 1 - r : r];
              var e = l.length;
              if (l && e >= this.B && (w || !n[l])) {
                var f = L(q, d2, r), g = "";
                switch (this.G) {
                  case "full":
                    if (3 < e) {
                      for (f = 0; f < e; f++)
                        for (var h = e; h > f; h--)
                          if (h - f >= this.B) {
                            var k = L(q, d2, r, e, f);
                            g = l.substring(f, h);
                            M(this, n, g, k, a2, c2);
                          }
                      break;
                    }
                  case "reverse":
                    if (2 < e) {
                      for (h = e - 1; 0 < h; h--)
                        g = l[h] + g, g.length >= this.B && M(
                          this,
                          n,
                          g,
                          L(q, d2, r, e, h),
                          a2,
                          c2
                        );
                      g = "";
                    }
                  case "forward":
                    if (1 < e) {
                      for (h = 0; h < e; h++)
                        g += l[h], g.length >= this.B && M(this, n, g, f, a2, c2);
                      break;
                    }
                  default:
                    if (this.C && (f = Math.min(f / this.C(b2, l, r) | 0, q - 1)), M(this, n, l, f, a2, c2), w && 1 < d2 && r < d2 - 1) {
                      for (e = v(), g = this.A, f = l, h = Math.min(w + 1, d2 - r), e[f] = 1, k = 1; k < h; k++)
                        if ((l = b2[this.F ? d2 - 1 - r - k : r + k]) && l.length >= this.B && !e[l]) {
                          e[l] = 1;
                          const p = this.l && l > f;
                          M(this, m, p ? f : l, L(g + (d2 / 2 > g ? 0 : 1), d2, r, h - 1, k - 1), a2, c2, p ? l : f);
                        }
                    }
                }
              }
            }
            this.m || (this.register[a2] = 1);
          }
        }
        return this;
      };
      function L(a2, b2, c2, d2, e) {
        return c2 && 1 < a2 ? b2 + (d2 || 0) <= a2 ? c2 + (e || 0) : (a2 - 1) / (b2 + (d2 || 0)) * (c2 + (e || 0)) + 1 | 0 : 0;
      }
      function M(a2, b2, c2, d2, e, f, g) {
        let h = g ? a2.h : a2.map;
        if (!b2[c2] || g && !b2[c2][g])
          a2.s && (h = h[d2]), g ? (b2 = b2[c2] || (b2[c2] = v()), b2[g] = 1, h = h[g] || (h[g] = v())) : b2[c2] = 1, h = h[c2] || (h[c2] = []), a2.s || (h = h[d2] || (h[d2] = [])), f && -1 !== h.indexOf(e) || (h[h.length] = e, a2.m && (a2 = a2.register[e] || (a2.register[e] = []), a2[a2.length] = h));
      }
      t.search = function(a2, b2, c2) {
        c2 || (!b2 && C(a2) ? (c2 = a2, a2 = c2.query) : C(b2) && (c2 = b2));
        let d2 = [], e;
        let f, g = 0;
        if (c2) {
          b2 = c2.limit;
          g = c2.offset || 0;
          var h = c2.context;
          f = c2.suggest;
        }
        if (a2 && (a2 = this.encode(a2), e = a2.length, 1 < e)) {
          c2 = v();
          var k = [];
          for (let n = 0, w = 0, q; n < e; n++)
            if ((q = a2[n]) && q.length >= this.B && !c2[q])
              if (this.s || f || this.map[q])
                k[w++] = q, c2[q] = 1;
              else
                return d2;
          a2 = k;
          e = a2.length;
        }
        if (!e)
          return d2;
        b2 || (b2 = 100);
        h = this.depth && 1 < e && false !== h;
        c2 = 0;
        let m;
        h ? (m = a2[0], c2 = 1) : 1 < e && a2.sort(ba);
        for (let n, w; c2 < e; c2++) {
          w = a2[c2];
          h ? (n = sa(this, d2, f, b2, g, 2 === e, w, m), f && false === n && d2.length || (m = w)) : n = sa(this, d2, f, b2, g, 1 === e, w);
          if (n)
            return n;
          if (f && c2 === e - 1) {
            k = d2.length;
            if (!k) {
              if (h) {
                h = 0;
                c2 = -1;
                continue;
              }
              return d2;
            }
            if (1 === k)
              return ta(d2[0], b2, g);
          }
        }
        return ma(d2, b2, g, f);
      };
      function sa(a2, b2, c2, d2, e, f, g, h) {
        let k = [], m = h ? a2.h : a2.map;
        a2.s || (m = ua(m, g, h, a2.l));
        if (m) {
          let n = 0;
          const w = Math.min(m.length, h ? a2.A : a2.D);
          for (let q = 0, r = 0, l, p; q < w; q++)
            if (l = m[q]) {
              if (a2.s && (l = ua(l, g, h, a2.l)), e && l && f && (p = l.length, p <= e ? (e -= p, l = null) : (l = l.slice(e), e = 0)), l && (k[n++] = l, f && (r += l.length, r >= d2)))
                break;
            }
          if (n) {
            if (f)
              return ta(k, d2, 0);
            b2[b2.length] = k;
            return;
          }
        }
        return !c2 && k;
      }
      function ta(a2, b2, c2) {
        a2 = 1 === a2.length ? a2[0] : [].concat.apply([], a2);
        return c2 || a2.length > b2 ? a2.slice(c2, c2 + b2) : a2;
      }
      function ua(a2, b2, c2, d2) {
        c2 ? (d2 = d2 && b2 > c2, a2 = (a2 = a2[d2 ? b2 : c2]) && a2[d2 ? c2 : b2]) : a2 = a2[b2];
        return a2;
      }
      t.contain = function(a2) {
        return !!this.register[a2];
      };
      t.update = function(a2, b2) {
        return this.remove(a2).add(a2, b2);
      };
      t.remove = function(a2, b2) {
        const c2 = this.register[a2];
        if (c2) {
          if (this.m)
            for (let d2 = 0, e; d2 < c2.length; d2++)
              e = c2[d2], e.splice(e.indexOf(a2), 1);
          else
            N(this.map, a2, this.D, this.s), this.depth && N(this.h, a2, this.A, this.s);
          b2 || delete this.register[a2];
          if (this.cache) {
            b2 = this.cache;
            for (let d2 = 0, e, f; d2 < b2.h.length; d2++)
              f = b2.h[d2], e = b2.cache[f], -1 !== e.indexOf(a2) && (b2.h.splice(d2--, 1), delete b2.cache[f]);
          }
        }
        return this;
      };
      function N(a2, b2, c2, d2, e) {
        let f = 0;
        if (a2.constructor === Array)
          if (e)
            b2 = a2.indexOf(b2), -1 !== b2 ? 1 < a2.length && (a2.splice(b2, 1), f++) : f++;
          else {
            e = Math.min(a2.length, c2);
            for (let g = 0, h; g < e; g++)
              if (h = a2[g])
                f = N(h, b2, c2, d2, e), d2 || f || delete a2[g];
          }
        else
          for (let g in a2)
            (f = N(a2[g], b2, c2, d2, e)) || delete a2[g];
        return f;
      }
      t.searchCache = oa;
      t.export = function(a2, b2, c2, d2, e) {
        let f, g;
        switch (e || (e = 0)) {
          case 0:
            f = "reg";
            if (this.m) {
              g = v();
              for (let h in this.register)
                g[h] = 1;
            } else
              g = this.register;
            break;
          case 1:
            f = "cfg";
            g = { doc: 0, opt: this.s ? 1 : 0 };
            break;
          case 2:
            f = "map";
            g = this.map;
            break;
          case 3:
            f = "ctx";
            g = this.h;
            break;
          default:
            return;
        }
        ra(a2, b2 || this, c2 ? c2 + "." + f : f, d2, e, g);
        return true;
      };
      t.import = function(a2, b2) {
        if (b2)
          switch (x(b2) && (b2 = JSON.parse(b2)), a2) {
            case "cfg":
              this.s = !!b2.opt;
              break;
            case "reg":
              this.m = false;
              this.register = b2;
              break;
            case "map":
              this.map = b2;
              break;
            case "ctx":
              this.h = b2;
          }
      };
      la(K.prototype);
      function va(a2) {
        a2 = a2.data;
        var b2 = self._index;
        const c2 = a2.args;
        var d2 = a2.task;
        switch (d2) {
          case "init":
            d2 = a2.options || {};
            a2 = a2.factory;
            b2 = d2.encode;
            d2.cache = false;
            b2 && 0 === b2.indexOf("function") && (d2.encode = Function("return " + b2)());
            a2 ? (Function("return " + a2)()(self), self._index = new self.FlexSearch.Index(d2), delete self.FlexSearch) : self._index = new K(d2);
            break;
          default:
            a2 = a2.id, b2 = b2[d2].apply(b2, c2), postMessage("search" === d2 ? { id: a2, msg: b2 } : { id: a2 });
        }
      }
      ;
      let wa = 0;
      function O(a2) {
        if (!(this instanceof O))
          return new O(a2);
        var b2;
        a2 ? D(b2 = a2.encode) && (a2.encode = b2.toString()) : a2 = {};
        (b2 = (self || window)._factory) && (b2 = b2.toString());
        const c2 = self.exports, d2 = this;
        this.o = xa(b2, c2, a2.worker);
        this.h = v();
        if (this.o) {
          if (c2)
            this.o.on("message", function(e) {
              d2.h[e.id](e.msg);
              delete d2.h[e.id];
            });
          else
            this.o.onmessage = function(e) {
              e = e.data;
              d2.h[e.id](e.msg);
              delete d2.h[e.id];
            };
          this.o.postMessage({ task: "init", factory: b2, options: a2 });
        }
      }
      P("add");
      P("append");
      P("search");
      P("update");
      P("remove");
      function P(a2) {
        O.prototype[a2] = O.prototype[a2 + "Async"] = function() {
          const b2 = this, c2 = [].slice.call(arguments);
          var d2 = c2[c2.length - 1];
          let e;
          D(d2) && (e = d2, c2.splice(c2.length - 1, 1));
          d2 = new Promise(function(f) {
            setTimeout(function() {
              b2.h[++wa] = f;
              b2.o.postMessage({ task: a2, id: wa, args: c2 });
            });
          });
          return e ? (d2.then(e), this) : d2;
        };
      }
      function xa(a, b, c) {
        let d;
        try {
          d = b ? eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")') : a ? new Worker(URL.createObjectURL(new Blob(["onmessage=" + va.toString()], { type: "text/javascript" }))) : new Worker(x(c) ? c : "worker/worker.js", { type: "module" });
        } catch (e) {
        }
        return d;
      }
      ;
      function Q(a2) {
        if (!(this instanceof Q))
          return new Q(a2);
        var b2 = a2.document || a2.doc || a2, c2;
        this.K = [];
        this.h = [];
        this.A = [];
        this.register = v();
        this.key = (c2 = b2.key || b2.id) && S(c2, this.A) || "id";
        this.m = u(a2.fastupdate);
        this.C = (c2 = b2.store) && true !== c2 && [];
        this.store = c2 && v();
        this.I = (c2 = b2.tag) && S(c2, this.A);
        this.l = c2 && v();
        this.cache = (c2 = a2.cache) && new J(c2);
        a2.cache = false;
        this.o = a2.worker;
        this.async = false;
        c2 = v();
        let d2 = b2.index || b2.field || b2;
        x(d2) && (d2 = [d2]);
        for (let e = 0, f, g; e < d2.length; e++)
          f = d2[e], x(f) || (g = f, f = f.field), g = C(g) ? Object.assign({}, a2, g) : a2, this.o && (c2[f] = new O(g), c2[f].o || (this.o = false)), this.o || (c2[f] = new K(g, this.register)), this.K[e] = S(f, this.A), this.h[e] = f;
        if (this.C)
          for (a2 = b2.store, x(a2) && (a2 = [a2]), b2 = 0; b2 < a2.length; b2++)
            this.C[b2] = S(a2[b2], this.A);
        this.index = c2;
      }
      function S(a2, b2) {
        const c2 = a2.split(":");
        let d2 = 0;
        for (let e = 0; e < c2.length; e++)
          a2 = c2[e], 0 <= a2.indexOf("[]") && (a2 = a2.substring(0, a2.length - 2)) && (b2[d2] = true), a2 && (c2[d2++] = a2);
        d2 < c2.length && (c2.length = d2);
        return 1 < d2 ? c2 : c2[0];
      }
      function T(a2, b2) {
        if (x(b2))
          a2 = a2[b2];
        else
          for (let c2 = 0; a2 && c2 < b2.length; c2++)
            a2 = a2[b2[c2]];
        return a2;
      }
      function U(a2, b2, c2, d2, e) {
        a2 = a2[e];
        if (d2 === c2.length - 1)
          b2[e] = a2;
        else if (a2)
          if (a2.constructor === Array)
            for (b2 = b2[e] = Array(a2.length), e = 0; e < a2.length; e++)
              U(a2, b2, c2, d2, e);
          else
            b2 = b2[e] || (b2[e] = v()), e = c2[++d2], U(a2, b2, c2, d2, e);
      }
      function V(a2, b2, c2, d2, e, f, g, h) {
        if (a2 = a2[g])
          if (d2 === b2.length - 1) {
            if (a2.constructor === Array) {
              if (c2[d2]) {
                for (b2 = 0; b2 < a2.length; b2++)
                  e.add(f, a2[b2], true, true);
                return;
              }
              a2 = a2.join(" ");
            }
            e.add(f, a2, h, true);
          } else if (a2.constructor === Array)
            for (g = 0; g < a2.length; g++)
              V(a2, b2, c2, d2, e, f, g, h);
          else
            g = b2[++d2], V(a2, b2, c2, d2, e, f, g, h);
      }
      t = Q.prototype;
      t.add = function(a2, b2, c2) {
        C(a2) && (b2 = a2, a2 = T(b2, this.key));
        if (b2 && (a2 || 0 === a2)) {
          if (!c2 && this.register[a2])
            return this.update(a2, b2);
          for (let d2 = 0, e, f; d2 < this.h.length; d2++)
            f = this.h[d2], e = this.K[d2], x(e) && (e = [e]), V(b2, e, this.A, 0, this.index[f], a2, e[0], c2);
          if (this.I) {
            let d2 = T(b2, this.I), e = v();
            x(d2) && (d2 = [d2]);
            for (let f = 0, g, h; f < d2.length; f++)
              if (g = d2[f], !e[g] && (e[g] = 1, h = this.l[g] || (this.l[g] = []), !c2 || -1 === h.indexOf(a2))) {
                if (h[h.length] = a2, this.m) {
                  const k = this.register[a2] || (this.register[a2] = []);
                  k[k.length] = h;
                }
              }
          }
          if (this.store && (!c2 || !this.store[a2])) {
            let d2;
            if (this.C) {
              d2 = v();
              for (let e = 0, f; e < this.C.length; e++)
                f = this.C[e], x(f) ? d2[f] = b2[f] : U(b2, d2, f, 0, f[0]);
            }
            this.store[a2] = d2 || b2;
          }
        }
        return this;
      };
      t.append = function(a2, b2) {
        return this.add(a2, b2, true);
      };
      t.update = function(a2, b2) {
        return this.remove(a2).add(a2, b2);
      };
      t.remove = function(a2) {
        C(a2) && (a2 = T(a2, this.key));
        if (this.register[a2]) {
          for (var b2 = 0; b2 < this.h.length && (this.index[this.h[b2]].remove(a2, !this.o), !this.m); b2++)
            ;
          if (this.I && !this.m)
            for (let c2 in this.l) {
              b2 = this.l[c2];
              const d2 = b2.indexOf(a2);
              -1 !== d2 && (1 < b2.length ? b2.splice(d2, 1) : delete this.l[c2]);
            }
          this.store && delete this.store[a2];
          delete this.register[a2];
        }
        return this;
      };
      t.search = function(a2, b2, c2, d2) {
        c2 || (!b2 && C(a2) ? (c2 = a2, a2 = c2.query) : C(b2) && (c2 = b2, b2 = 0));
        let e = [], f = [], g, h, k, m, n, w, q = 0;
        if (c2)
          if (c2.constructor === Array)
            k = c2, c2 = null;
          else {
            k = (g = c2.pluck) || c2.index || c2.field;
            m = c2.tag;
            h = this.store && c2.enrich;
            n = "and" === c2.bool;
            b2 = c2.limit || 100;
            w = c2.offset || 0;
            if (m && (x(m) && (m = [m]), !a2)) {
              for (let l = 0, p; l < m.length; l++)
                if (p = ya.call(this, m[l], b2, w, h))
                  e[e.length] = p, q++;
              return q ? e : [];
            }
            x(k) && (k = [k]);
          }
        k || (k = this.h);
        n = n && (1 < k.length || m && 1 < m.length);
        const r = !d2 && (this.o || this.async) && [];
        for (let l = 0, p, z, B; l < k.length; l++) {
          let A;
          z = k[l];
          x(z) || (A = z, z = z.field);
          if (r)
            r[l] = this.index[z].searchAsync(a2, b2, A || c2);
          else {
            d2 ? p = d2[l] : p = this.index[z].search(a2, b2, A || c2);
            B = p && p.length;
            if (m && B) {
              const y = [];
              let H = 0;
              n && (y[0] = [p]);
              for (let X = 0, pa, R; X < m.length; X++)
                if (pa = m[X], B = (R = this.l[pa]) && R.length)
                  H++, y[y.length] = n ? [R] : R;
              H && (p = n ? ma(y, b2 || 100, w || 0) : na(p, y), B = p.length);
            }
            if (B)
              f[q] = z, e[q++] = p;
            else if (n)
              return [];
          }
        }
        if (r) {
          const l = this;
          return new Promise(function(p) {
            Promise.all(r).then(function(z) {
              p(l.search(a2, b2, c2, z));
            });
          });
        }
        if (!q)
          return [];
        if (g && (!h || !this.store))
          return e[0];
        for (let l = 0, p; l < f.length; l++) {
          p = e[l];
          p.length && h && (p = za.call(this, p));
          if (g)
            return p;
          e[l] = { field: f[l], result: p };
        }
        return e;
      };
      function ya(a2, b2, c2, d2) {
        let e = this.l[a2], f = e && e.length - c2;
        if (f && 0 < f) {
          if (f > b2 || c2)
            e = e.slice(c2, c2 + b2);
          d2 && (e = za.call(this, e));
          return { tag: a2, result: e };
        }
      }
      function za(a2) {
        const b2 = Array(a2.length);
        for (let c2 = 0, d2; c2 < a2.length; c2++)
          d2 = a2[c2], b2[c2] = { id: d2, doc: this.store[d2] };
        return b2;
      }
      t.contain = function(a2) {
        return !!this.register[a2];
      };
      t.get = function(a2) {
        return this.store[a2];
      };
      t.set = function(a2, b2) {
        this.store[a2] = b2;
        return this;
      };
      t.searchCache = oa;
      t.export = function(a2, b2, c2, d2, e) {
        e || (e = 0);
        d2 || (d2 = 0);
        if (d2 < this.h.length) {
          const f = this.h[d2], g = this.index[f];
          b2 = this;
          setTimeout(function() {
            g.export(a2, b2, e ? f.replace(":", "-") : "", d2, e++) || (d2++, e = 1, b2.export(a2, b2, f, d2, e));
          });
        } else {
          let f;
          switch (e) {
            case 1:
              c2 = "tag";
              f = this.l;
              break;
            case 2:
              c2 = "store";
              f = this.store;
              break;
            default:
              return;
          }
          ra(a2, this, c2, d2, e, f);
        }
      };
      t.import = function(a2, b2) {
        if (b2)
          switch (x(b2) && (b2 = JSON.parse(b2)), a2) {
            case "tag":
              this.l = b2;
              break;
            case "reg":
              this.m = false;
              this.register = b2;
              for (let d2 = 0, e; d2 < this.h.length; d2++)
                e = this.index[this.h[d2]], e.register = b2, e.m = false;
              break;
            case "store":
              this.store = b2;
              break;
            default:
              a2 = a2.split(".");
              const c2 = a2[0];
              a2 = a2[1];
              c2 && a2 && this.index[c2].import(a2, b2);
          }
      };
      la(Q.prototype);
      var Ba = { encode: Aa, F: false, G: "" };
      const Ca = [F("[\xE0\xE1\xE2\xE3\xE4\xE5]"), "a", F("[\xE8\xE9\xEA\xEB]"), "e", F("[\xEC\xED\xEE\xEF]"), "i", F("[\xF2\xF3\xF4\xF5\xF6\u0151]"), "o", F("[\xF9\xFA\xFB\xFC\u0171]"), "u", F("[\xFD\u0177\xFF]"), "y", F("\xF1"), "n", F("[\xE7c]"), "k", F("\xDF"), "s", F(" & "), " and "];
      function Aa(a2) {
        var b2 = a2;
        b2.normalize && (b2 = b2.normalize("NFD").replace(ea, ""));
        return ca.call(this, b2.toLowerCase(), !a2.normalize && Ca);
      }
      ;
      var Ea = { encode: Da, F: false, G: "strict" };
      const Fa = /[^a-z0-9]+/, Ga = { b: "p", v: "f", w: "f", z: "s", x: "s", "\xDF": "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
      function Da(a2) {
        a2 = Aa.call(this, a2).join(" ");
        const b2 = [];
        if (a2) {
          const c2 = a2.split(Fa), d2 = c2.length;
          for (let e = 0, f, g = 0; e < d2; e++)
            if ((a2 = c2[e]) && (!this.filter || !this.filter[a2])) {
              f = a2[0];
              let h = Ga[f] || f, k = h;
              for (let m = 1; m < a2.length; m++) {
                f = a2[m];
                const n = Ga[f] || f;
                n && n !== k && (h += n, k = n);
              }
              b2[g++] = h;
            }
        }
        return b2;
      }
      ;
      var Ia = { encode: Ha, F: false, G: "" };
      const Ja = [F("ae"), "a", F("oe"), "o", F("sh"), "s", F("th"), "t", F("ph"), "f", F("pf"), "f", F("(?![aeo])h(?![aeo])"), "", F("(?!^[aeo])h(?!^[aeo])"), ""];
      function Ha(a2, b2) {
        a2 && (a2 = Da.call(this, a2).join(" "), 2 < a2.length && (a2 = E(a2, Ja)), b2 || (1 < a2.length && (a2 = ha(a2)), a2 && (a2 = a2.split(" "))));
        return a2;
      }
      ;
      var La = { encode: Ka, F: false, G: "" };
      const Ma = F("(?!\\b)[aeo]");
      function Ka(a2) {
        a2 && (a2 = Ha.call(this, a2, true), 1 < a2.length && (a2 = a2.replace(Ma, "")), 1 < a2.length && (a2 = ha(a2)), a2 && (a2 = a2.split(" ")));
        return a2;
      }
      ;
      G["latin:default"] = ja;
      G["latin:simple"] = Ba;
      G["latin:balance"] = Ea;
      G["latin:advanced"] = Ia;
      G["latin:extra"] = La;
      const W = self;
      let Y;
      const Z = { Index: K, Document: Q, Worker: O, registerCharset: function(a2, b2) {
        G[a2] = b2;
      }, registerLanguage: function(a2, b2) {
        ka[a2] = b2;
      } };
      (Y = W.define) && Y.amd ? Y([], function() {
        return Z;
      }) : W.exports ? W.exports = Z : W.FlexSearch = Z;
    })(exports);
  }
});

// quartz/components/scripts/quartz/components/scripts/search.inline.ts
var import_flexsearch = __toESM(require_flexsearch_bundle());

// quartz/components/scripts/util.ts
function registerEscapeHandler(outsideContainer, cb) {
  if (!outsideContainer)
    return;
  function click(e) {
    if (e.target !== this)
      return;
    e.preventDefault();
    cb();
  }
  function esc(e) {
    if (!e.key.startsWith("Esc"))
      return;
    e.preventDefault();
    cb();
  }
  outsideContainer?.removeEventListener("click", click);
  outsideContainer?.addEventListener("click", click);
  document.removeEventListener("keydown", esc);
  document.addEventListener("keydown", esc);
}
function removeAllChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

// node_modules/github-slugger/index.js
var own = Object.hasOwnProperty;

// quartz/util/path.ts
function simplifySlug(fp) {
  return _stripSlashes(_trimSuffix(fp, "index"), true);
}
function pathToRoot(slug2) {
  let rootPath = slug2.split("/").filter((x2) => x2 !== "").slice(0, -1).map((_) => "..").join("/");
  if (rootPath.length === 0) {
    rootPath = ".";
  }
  return rootPath;
}
function resolveRelative(current, target) {
  const res = joinSegments(pathToRoot(current), simplifySlug(target));
  return res;
}
function joinSegments(...args) {
  return args.filter((segment) => segment !== "").join("/").replace(/\/\/+/g, "/");
}
function _endsWith(s, suffix) {
  return s === suffix || s.endsWith("/" + suffix);
}
function _trimSuffix(s, suffix) {
  if (_endsWith(s, suffix)) {
    s = s.slice(0, -suffix.length);
  }
  return s;
}
function _stripSlashes(s, onlyStripPrefix) {
  if (s.startsWith("/")) {
    s = s.substring(1);
  }
  if (!onlyStripPrefix && s.endsWith("/")) {
    s = s.slice(0, -1);
  }
  return s;
}

// quartz/components/scripts/quartz/components/scripts/search.inline.ts
var index = void 0;
var searchType = "basic";
var contextWindowWords = 30;
var numSearchResults = 5;
var numTagResults = 3;
function highlight(searchTerm, text, trim) {
  const tokenizedTerms = searchTerm.split(/\s+/).filter((t2) => t2 !== "").sort((a2, b2) => b2.length - a2.length);
  let tokenizedText = text.split(/\s+/).filter((t2) => t2 !== "");
  let startIndex = 0;
  let endIndex = tokenizedText.length - 1;
  if (trim) {
    const includesCheck = (tok) => tokenizedTerms.some((term) => tok.toLowerCase().startsWith(term.toLowerCase()));
    const occurencesIndices = tokenizedText.map(includesCheck);
    let bestSum = 0;
    let bestIndex = 0;
    for (let i = 0; i < Math.max(tokenizedText.length - contextWindowWords, 0); i++) {
      const window2 = occurencesIndices.slice(i, i + contextWindowWords);
      const windowSum = window2.reduce((total, cur) => total + (cur ? 1 : 0), 0);
      if (windowSum >= bestSum) {
        bestSum = windowSum;
        bestIndex = i;
      }
    }
    startIndex = Math.max(bestIndex - contextWindowWords, 0);
    endIndex = Math.min(startIndex + 2 * contextWindowWords, tokenizedText.length - 1);
    tokenizedText = tokenizedText.slice(startIndex, endIndex);
  }
  const slice = tokenizedText.map((tok) => {
    for (const searchTok of tokenizedTerms) {
      if (tok.toLowerCase().includes(searchTok.toLowerCase())) {
        const regex2 = new RegExp(searchTok.toLowerCase(), "gi");
        return tok.replace(regex2, `<span class="highlight">$&</span>`);
      }
    }
    return tok;
  }).join(" ");
  return `${startIndex === 0 ? "" : "..."}${slice}${endIndex === tokenizedText.length - 1 ? "" : "..."}`;
}
var encoder = (str) => str.toLowerCase().split(/([^a-z]|[^\x00-\x7F])/);
var prevShortcutHandler = void 0;
document.addEventListener("nav", async (e) => {
  const currentSlug = e.detail.url;
  const data = await fetchData;
  const container = document.getElementById("search-container");
  const sidebar = container?.closest(".sidebar");
  const searchIcon = document.getElementById("search-icon");
  const searchBar = document.getElementById("search-bar");
  const results = document.getElementById("results-container");
  const resultCards = document.getElementsByClassName("result-card");
  const idDataMap = Object.keys(data);
  function hideSearch() {
    container?.classList.remove("active");
    if (searchBar) {
      searchBar.value = "";
    }
    if (sidebar) {
      sidebar.style.zIndex = "unset";
    }
    if (results) {
      removeAllChildren(results);
    }
    searchType = "basic";
  }
  function showSearch(searchTypeNew) {
    searchType = searchTypeNew;
    if (sidebar) {
      sidebar.style.zIndex = "1";
    }
    container?.classList.add("active");
    searchBar?.focus();
  }
  function shortcutHandler(e2) {
    if (e2.key === "k" && (e2.ctrlKey || e2.metaKey) && !e2.shiftKey) {
      e2.preventDefault();
      const searchBarOpen = container?.classList.contains("active");
      searchBarOpen ? hideSearch() : showSearch("basic");
    } else if (e2.shiftKey && (e2.ctrlKey || e2.metaKey) && e2.key.toLowerCase() === "k") {
      e2.preventDefault();
      const searchBarOpen = container?.classList.contains("active");
      searchBarOpen ? hideSearch() : showSearch("tags");
      if (searchBar)
        searchBar.value = "#";
    } else if (e2.key === "Enter") {
      if (results?.contains(document.activeElement)) {
        const active = document.activeElement;
        active.click();
      } else {
        const anchor = document.getElementsByClassName("result-card")[0];
        anchor?.click();
      }
    } else if (e2.key === "ArrowDown") {
      e2.preventDefault();
      if (!results?.contains(document.activeElement)) {
        const firstResult = resultCards[0];
        firstResult?.focus();
      } else {
        const nextResult = document.activeElement?.nextElementSibling;
        nextResult?.focus();
      }
    } else if (e2.key === "ArrowUp") {
      e2.preventDefault();
      if (results?.contains(document.activeElement)) {
        const prevResult = document.activeElement?.previousElementSibling;
        prevResult?.focus();
      }
    }
  }
  function trimContent(content) {
    const sentences = content.replace(/\s+/g, " ").split(".");
    let finalDesc = "";
    let sentenceIdx = 0;
    const len = contextWindowWords * 5;
    while (finalDesc.length < len) {
      const sentence = sentences[sentenceIdx];
      if (!sentence)
        break;
      finalDesc += sentence + ".";
      sentenceIdx++;
    }
    if (finalDesc.length < content.length) {
      finalDesc += "..";
    }
    return finalDesc;
  }
  const formatForDisplay = (term, id) => {
    const slug2 = idDataMap[id];
    return {
      id,
      slug: slug2,
      title: searchType === "tags" ? data[slug2].title : highlight(term, data[slug2].title ?? ""),
      // if searchType is tag, display context from start of file and trim, otherwise use regular highlight
      content: searchType === "tags" ? trimContent(data[slug2].content) : highlight(term, data[slug2].content ?? "", true),
      tags: highlightTags(term, data[slug2].tags)
    };
  };
  function highlightTags(term, tags) {
    if (tags && searchType === "tags") {
      const termLower = term.toLowerCase();
      let matching = tags.filter((str) => str.includes(termLower));
      if (matching.length > 0) {
        let difference = tags.filter((x2) => !matching.includes(x2));
        matching = matching.map((tag) => `<li><p class="match-tag">#${tag}</p></li>`);
        difference = difference.map((tag) => `<li><p>#${tag}</p></li>`);
        matching.push(...difference);
      }
      if (tags.length > numTagResults) {
        matching.splice(numTagResults);
      }
      return matching;
    } else {
      return [];
    }
  }
  const resultToHTML = ({ slug: slug2, title, content, tags }) => {
    const htmlTags = tags.length > 0 ? `<ul>${tags.join("")}</ul>` : ``;
    const button = document.createElement("button");
    button.classList.add("result-card");
    button.id = slug2;
    button.innerHTML = `<h3>${title}</h3>${htmlTags}<p>${content}</p>`;
    button.addEventListener("click", () => {
      const targ = resolveRelative(currentSlug, slug2);
      window.spaNavigate(new URL(targ, window.location.toString()));
      hideSearch();
    });
    return button;
  };
  function displayResults(finalResults) {
    if (!results)
      return;
    removeAllChildren(results);
    if (finalResults.length === 0) {
      results.innerHTML = `<button class="result-card">
                    <h3>No results.</h3>
                    <p>Try another search term?</p>
                </button>`;
    } else {
      results.append(...finalResults.map(resultToHTML));
    }
  }
  async function onType(e2) {
    let term = e2.target.value;
    let searchResults;
    if (term.toLowerCase().startsWith("#")) {
      searchType = "tags";
    } else {
      searchType = "basic";
    }
    switch (searchType) {
      case "tags": {
        term = term.substring(1);
        searchResults = await index?.searchAsync({ query: term, limit: numSearchResults, index: ["tags"] }) ?? [];
        break;
      }
      case "basic":
      default: {
        searchResults = await index?.searchAsync({
          query: term,
          limit: numSearchResults,
          index: ["title", "content"]
        }) ?? [];
      }
    }
    const getByField = (field) => {
      const results2 = searchResults.filter((x2) => x2.field === field);
      return results2.length === 0 ? [] : [...results2[0].result];
    };
    const allIds = /* @__PURE__ */ new Set([
      ...getByField("title"),
      ...getByField("content"),
      ...getByField("tags")
    ]);
    const finalResults = [...allIds].map((id) => formatForDisplay(term, id));
    displayResults(finalResults);
  }
  if (prevShortcutHandler) {
    document.removeEventListener("keydown", prevShortcutHandler);
  }
  document.addEventListener("keydown", shortcutHandler);
  prevShortcutHandler = shortcutHandler;
  searchIcon?.removeEventListener("click", () => showSearch("basic"));
  searchIcon?.addEventListener("click", () => showSearch("basic"));
  searchBar?.removeEventListener("input", onType);
  searchBar?.addEventListener("input", onType);
  if (!index) {
    index = new import_flexsearch.Document({
      charset: "latin:extra",
      optimize: true,
      encode: encoder,
      document: {
        id: "id",
        index: [
          {
            field: "title",
            tokenize: "reverse"
          },
          {
            field: "content",
            tokenize: "reverse"
          },
          {
            field: "tags",
            tokenize: "reverse"
          }
        ]
      }
    });
    fillDocument(index, data);
  }
  registerEscapeHandler(container, hideSearch);
});
async function fillDocument(index2, data) {
  let id = 0;
  for (const [slug2, fileData] of Object.entries(data)) {
    await index2.addAsync(id, {
      id,
      slug: slug2,
      title: fileData.title,
      content: fileData.content,
      tags: fileData.tags
    });
    id++;
  }
}
})();
(function () {// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var min = Math.min;
var max = Math.max;
var round = Math.round;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getBoundingRect(rects) {
  const minX = min(...rects.map((rect) => rect.left));
  const minY = min(...rects.map((rect) => rect.top));
  const maxX = max(...rects.map((rect) => rect.right));
  const maxY = max(...rects.map((rect) => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map((rect) => rectToClientRect(getBoundingRect(rect)));
}
var inline = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "inline",
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform: platform2,
        strategy
      } = state;
      const {
        padding = 2,
        x,
        y
      } = evaluate(options, state);
      const nativeClientRects = Array.from(await (platform2.getClientRects == null ? void 0 : platform2.getClientRects(elements.reference)) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
      const paddingObject = getPaddingObject(padding);
      function getBoundingClientRect2() {
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          return clientRects.find((rect) => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }
        if (clientRects.length >= 2) {
          if (getSideAxis(placement) === "y") {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getSide(placement) === "top";
            const top2 = firstRect.top;
            const bottom2 = lastRect.bottom;
            const left2 = isTop ? firstRect.left : lastRect.left;
            const right2 = isTop ? firstRect.right : lastRect.right;
            const width2 = right2 - left2;
            const height2 = bottom2 - top2;
            return {
              top: top2,
              bottom: bottom2,
              left: left2,
              right: right2,
              width: width2,
              height: height2,
              x: left2,
              y: top2
            };
          }
          const isLeftSide = getSide(placement) === "left";
          const maxRight = max(...clientRects.map((rect) => rect.right));
          const minLeft = min(...clientRects.map((rect) => rect.left));
          const measureRects = clientRects.filter((rect) => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform2.getElementRects({
        reference: {
          getBoundingClientRect: getBoundingClientRect2
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};

// node_modules/@floating-ui/utils/dom/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null ? void 0 : (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  return getCssDimensions(element);
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var getElementRects = async function(_ref) {
  let {
    reference,
    floating,
    strategy
  } = _ref;
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
    floating: {
      x: 0,
      y: 0,
      ...await getDimensionsFn(floating)
    }
  };
};
function isRTL(element) {
  return getComputedStyle(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// quartz/components/scripts/quartz/components/scripts/popover.inline.ts
function normalizeRelativeURLs(el, base) {
  const update = (el2, attr, base2) => {
    el2.setAttribute(attr, new URL(el2.getAttribute(attr), base2).pathname);
  };
  el.querySelectorAll('[href^="./"], [href^="../"]').forEach((item) => update(item, "href", base));
  el.querySelectorAll('[src^="./"], [src^="../"]').forEach((item) => update(item, "src", base));
}
var p = new DOMParser();
async function mouseEnterHandler({ clientX, clientY }) {
  const link = this;
  if (link.dataset.noPopover === "true") {
    return;
  }
  async function setPosition(popoverElement2) {
    const { x, y } = await computePosition2(link, popoverElement2, {
      middleware: [inline({ x: clientX, y: clientY }), shift(), flip()]
    });
    Object.assign(popoverElement2.style, {
      left: `${x}px`,
      top: `${y}px`
    });
  }
  if ([...link.children].some((child) => child.classList.contains("popover"))) {
    return setPosition(link.lastChild);
  }
  const thisUrl = new URL(document.location.href);
  thisUrl.hash = "";
  thisUrl.search = "";
  const targetUrl = new URL(link.href);
  const hash = targetUrl.hash;
  targetUrl.hash = "";
  targetUrl.search = "";
  const contents = await fetch(`${targetUrl}`).then((res) => res.text()).catch((err) => {
    console.error(err);
  });
  if (!contents)
    return;
  const html = p.parseFromString(contents, "text/html");
  normalizeRelativeURLs(html, targetUrl);
  const elts = [...html.getElementsByClassName("popover-hint")];
  if (elts.length === 0)
    return;
  const popoverElement = document.createElement("div");
  popoverElement.classList.add("popover");
  const popoverInner = document.createElement("div");
  popoverInner.classList.add("popover-inner");
  popoverElement.appendChild(popoverInner);
  elts.forEach((elt) => popoverInner.appendChild(elt));
  setPosition(popoverElement);
  link.appendChild(popoverElement);
  if (hash !== "") {
    const heading = popoverInner.querySelector(hash);
    if (heading) {
      popoverInner.scroll({ top: heading.offsetTop - 12, behavior: "instant" });
    }
  }
}
document.addEventListener("nav", () => {
  const links = [...document.getElementsByClassName("internal")];
  for (const link of links) {
    link.removeEventListener("mouseenter", mouseEnterHandler);
    link.addEventListener("mouseenter", mouseEnterHandler);
  }
});
})();
(function () {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag(`js`, new Date());
      gtag(`config`, `G-PBC0Y59ZMD`, { send_page_view: false });
  
      document.addEventListener(`nav`, () => {
        gtag(`event`, `page_view`, {
          page_title: document.title,
          page_location: location.href,
        });
      });})();
(function () {// node_modules/micromorph/dist/index.js
var T = (e) => (t, r) => t[`node${e}`] === r[`node${e}`];
var b = T("Name");
var C = T("Type");
var g = T("Value");
function M(e, t) {
  if (e.attributes.length === 0 && t.attributes.length === 0)
    return [];
  let r = [], n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  for (let s of e.attributes)
    n.set(s.name, s.value);
  for (let s of t.attributes) {
    let a = n.get(s.name);
    s.value === a ? n.delete(s.name) : (typeof a < "u" && n.delete(s.name), o.set(s.name, s.value));
  }
  for (let s of n.keys())
    r.push({ type: 5, name: s });
  for (let [s, a] of o.entries())
    r.push({ type: 4, name: s, value: a });
  return r;
}
function N(e, t = true) {
  let r = `${e.localName}`;
  for (let { name: n, value: o } of e.attributes)
    t && n.startsWith("data-") || (r += `[${n}=${o}]`);
  return r += e.innerHTML, r;
}
function h(e) {
  switch (e.tagName) {
    case "BASE":
    case "TITLE":
      return e.localName;
    case "META": {
      if (e.hasAttribute("name"))
        return `meta[name="${e.getAttribute("name")}"]`;
      if (e.hasAttribute("property"))
        return `meta[name="${e.getAttribute("property")}"]`;
      break;
    }
    case "LINK": {
      if (e.hasAttribute("rel") && e.hasAttribute("href"))
        return `link[rel="${e.getAttribute("rel")}"][href="${e.getAttribute("href")}"]`;
      if (e.hasAttribute("href"))
        return `link[href="${e.getAttribute("href")}"]`;
      break;
    }
  }
  return N(e);
}
function x(e) {
  let [t, r = ""] = e.split("?");
  return `${t}?t=${Date.now()}&${r.replace(/t=\d+/g, "")}`;
}
function c(e) {
  if (e.nodeType === 1 && e.hasAttribute("data-persist"))
    return e;
  if (e.nodeType === 1 && e.localName === "script") {
    let t = document.createElement("script");
    for (let { name: r, value: n } of e.attributes)
      r === "src" && (n = x(n)), t.setAttribute(r, n);
    return t.innerHTML = e.innerHTML, t;
  }
  return e.cloneNode(true);
}
function R(e, t) {
  if (e.children.length === 0 && t.children.length === 0)
    return [];
  let r = [], n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  for (let a of e.children)
    n.set(h(a), a);
  for (let a of t.children) {
    let i = h(a), u = n.get(i);
    u ? N(a, false) !== N(u, false) && o.set(i, c(a)) : s.set(i, c(a)), n.delete(i);
  }
  for (let a of e.childNodes) {
    if (a.nodeType === 1) {
      let i = h(a);
      if (n.has(i)) {
        r.push({ type: 1 });
        continue;
      } else if (o.has(i)) {
        let u = o.get(i);
        r.push({ type: 3, attributes: M(a, u), children: I(a, u) });
        continue;
      }
    }
    r.push(void 0);
  }
  for (let a of s.values())
    r.push({ type: 0, node: c(a) });
  return r;
}
function I(e, t) {
  let r = [], n = Math.max(e.childNodes.length, t.childNodes.length);
  for (let o = 0; o < n; o++) {
    let s = e.childNodes.item(o), a = t.childNodes.item(o);
    r[o] = p(s, a);
  }
  return r;
}
function p(e, t) {
  if (!e)
    return { type: 0, node: c(t) };
  if (!t)
    return { type: 1 };
  if (C(e, t)) {
    if (e.nodeType === 3) {
      let r = e.nodeValue, n = t.nodeValue;
      if (r.trim().length === 0 && n.trim().length === 0)
        return;
    }
    if (e.nodeType === 1) {
      if (b(e, t)) {
        let r = e.tagName === "HEAD" ? R : I;
        return { type: 3, attributes: M(e, t), children: r(e, t) };
      }
      return { type: 2, node: c(t) };
    } else
      return e.nodeType === 9 ? p(e.documentElement, t.documentElement) : g(e, t) ? void 0 : { type: 2, value: t.nodeValue };
  }
  return { type: 2, node: c(t) };
}
function $(e, t) {
  if (t.length !== 0)
    for (let { type: r, name: n, value: o } of t)
      r === 5 ? e.removeAttribute(n) : r === 4 && e.setAttribute(n, o);
}
async function O(e, t, r) {
  if (!t)
    return;
  let n;
  switch (e.nodeType === 9 ? (e = e.documentElement, n = e) : r ? n = r : n = e, t.type) {
    case 0: {
      let { node: o } = t;
      e.appendChild(o);
      return;
    }
    case 1: {
      if (!n)
        return;
      e.removeChild(n);
      return;
    }
    case 2: {
      if (!n)
        return;
      let { node: o, value: s } = t;
      if (typeof s == "string") {
        n.nodeValue = s;
        return;
      }
      n.replaceWith(o);
      return;
    }
    case 3: {
      if (!n)
        return;
      let { attributes: o, children: s } = t;
      $(n, o);
      let a = Array.from(n.childNodes);
      await Promise.all(s.map((i, u) => O(n, i, a[u])));
      return;
    }
  }
}
function P(e, t) {
  let r = p(e, t);
  return O(e, r);
}

// node_modules/github-slugger/index.js
var own = Object.hasOwnProperty;

// quartz/util/path.ts
function getFullSlug(window2) {
  const res = window2.document.body.dataset.slug;
  return res;
}

// quartz/components/scripts/quartz/components/scripts/spa.inline.ts
var NODE_TYPE_ELEMENT = 1;
var announcer = document.createElement("route-announcer");
var isElement = (target) => target?.nodeType === NODE_TYPE_ELEMENT;
var isLocalUrl = (href) => {
  try {
    const url = new URL(href);
    if (window.location.origin === url.origin) {
      return true;
    }
  } catch (e) {
  }
  return false;
};
var getOpts = ({ target }) => {
  if (!isElement(target))
    return;
  if (target.attributes.getNamedItem("target")?.value === "_blank")
    return;
  const a = target.closest("a");
  if (!a)
    return;
  if ("routerIgnore" in a.dataset)
    return;
  const { href } = a;
  if (!isLocalUrl(href))
    return;
  return { url: new URL(href), scroll: "routerNoscroll" in a.dataset ? false : void 0 };
};
function notifyNav(url) {
  const event = new CustomEvent("nav", { detail: { url } });
  document.dispatchEvent(event);
}
var p2;
async function navigate(url, isBack = false) {
  p2 = p2 || new DOMParser();
  const contents = await fetch(`${url}`).then((res) => res.text()).catch(() => {
    window.location.assign(url);
  });
  if (!contents)
    return;
  const html = p2.parseFromString(contents, "text/html");
  let title = html.querySelector("title")?.textContent;
  if (title) {
    document.title = title;
  } else {
    const h1 = document.querySelector("h1");
    title = h1?.innerText ?? h1?.textContent ?? url.pathname;
  }
  if (announcer.textContent !== title) {
    announcer.textContent = title;
  }
  announcer.dataset.persist = "";
  html.body.appendChild(announcer);
  P(document.body, html.body);
  if (!isBack) {
    if (url.hash) {
      const el = document.getElementById(decodeURIComponent(url.hash.substring(1)));
      el?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0 });
    }
  }
  const elementsToRemove = document.head.querySelectorAll(":not([spa-preserve])");
  elementsToRemove.forEach((el) => el.remove());
  const elementsToAdd = html.head.querySelectorAll(":not([spa-preserve])");
  elementsToAdd.forEach((el) => document.head.appendChild(el));
  if (!isBack) {
    history.pushState({}, "", url);
  }
  notifyNav(getFullSlug(window));
  delete announcer.dataset.persist;
}
window.spaNavigate = navigate;
function createRouter() {
  if (typeof window !== "undefined") {
    window.addEventListener("click", async (event) => {
      const { url } = getOpts(event) ?? {};
      if (!url || event.ctrlKey || event.metaKey)
        return;
      event.preventDefault();
      try {
        navigate(url, false);
      } catch (e) {
        window.location.assign(url);
      }
    });
    window.addEventListener("popstate", (event) => {
      const { url } = getOpts(event) ?? {};
      if (window.location.hash && window.location.pathname === url?.pathname)
        return;
      try {
        navigate(new URL(window.location.toString()), true);
      } catch (e) {
        window.location.reload();
      }
      return;
    });
  }
  return new class Router {
    go(pathname) {
      const url = new URL(pathname, window.location.toString());
      return navigate(url, false);
    }
    back() {
      return window.history.back();
    }
    forward() {
      return window.history.forward();
    }
  }();
}
createRouter();
notifyNav(getFullSlug(window));
if (!customElements.get("route-announcer")) {
  const attrs = {
    "aria-live": "assertive",
    "aria-atomic": "true",
    style: "position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"
  };
  customElements.define(
    "route-announcer",
    class RouteAnnouncer extends HTMLElement {
      constructor() {
        super();
      }
      connectedCallback() {
        for (const [key, value] of Object.entries(attrs)) {
          this.setAttribute(key, value);
        }
      }
    }
  );
}
})();