(window.webpackJsonp = window.webpackJsonp || []).push([[8], {
    "Zn+Y": function (e, t, i) {
        "use strict";
        i.r(t), i.d(t, "Swiper", (function () {
            return D
        }));
        var s = i("mrSG"),
            a = "undefined" == typeof document ? {
                body: {},
                addEventListener: function () {},
                removeEventListener: function () {},
                activeElement: {
                    blur: function () {},
                    nodeName: ""
                },
                querySelector: function () {
                    return null
                },
                querySelectorAll: function () {
                    return []
                },
                getElementById: function () {
                    return null
                },
                createEvent: function () {
                    return {
                        initEvent: function () {}
                    }
                },
                createElement: function () {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function () {},
                        getElementsByTagName: function () {
                            return []
                        }
                    }
                },
                location: {
                    hash: ""
                }
            } : document,
            r = "undefined" == typeof window ? {
                document: a,
                navigator: {
                    userAgent: ""
                },
                location: {},
                history: {},
                CustomEvent: function () {
                    return this
                },
                addEventListener: function () {},
                removeEventListener: function () {},
                getComputedStyle: function () {
                    return {
                        getPropertyValue: function () {
                            return ""
                        }
                    }
                },
                Image: function () {},
                Date: function () {},
                screen: {},
                setTimeout: function () {},
                clearTimeout: function () {}
            } : window,
            n = function () {
                return function (e) {
                    for (var t = 0; t < e.length; t += 1) this[t] = e[t];
                    return this.length = e.length, this
                }
            }();

        function o(e, t) {
            var i = [],
                s = 0;
            if (e && !t && e instanceof n) return e;
            if (e)
                if ("string" == typeof e) {
                    var o = void 0,
                        l = void 0,
                        d = e.trim();
                    if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                        var h = "div";
                        for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = a.createElement(h)).innerHTML = d, s = 0; s < l.childNodes.length; s += 1) i.push(l.childNodes[s])
                    } else
                        for (o = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || a).querySelectorAll(e.trim()) : [a.getElementById(e.trim().split("#")[1])], s = 0; s < o.length; s += 1) o[s] && i.push(o[s])
                } else if (e.nodeType || e === r || e === a) i.push(e);
            else if (e.length > 0 && e[0].nodeType)
                for (s = 0; s < e.length; s += 1) i.push(e[s]);
            return new n(i)
        }

        function l(e) {
            for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
            return t
        }
        o.fn = n.prototype, o.Class = n, o.Dom7 = n;
        var d = {
            addClass: function (e) {
                if (void 0 === e) return this;
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
                return this
            },
            removeClass: function (e) {
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
                return this
            },
            hasClass: function (e) {
                return !!this[0] && this[0].classList.contains(e)
            },
            toggleClass: function (e) {
                for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                    for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
                return this
            },
            attr: function (e, t) {
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (var i = 0; i < this.length; i += 1)
                    if (2 === arguments.length) this[i].setAttribute(e, t);
                    else
                        for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
                return this
            },
            removeAttr: function (e) {
                for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this
            },
            data: function (e, t) {
                var i;
                if (void 0 !== t) {
                    for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                    return this
                }
                if (i = this[0]) return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[e] : i.getAttribute("data-" + e) || void 0
            },
            transform: function (e) {
                for (var t = 0; t < this.length; t += 1) {
                    var i = this[t].style;
                    i.webkitTransform = e, i.transform = e
                }
                return this
            },
            transition: function (e) {
                "string" != typeof e && (e += "ms");
                for (var t = 0; t < this.length; t += 1) {
                    var i = this[t].style;
                    i.webkitTransitionDuration = e, i.transitionDuration = e
                }
                return this
            },
            on: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var i = e[0],
                    s = e[1],
                    a = e[2],
                    r = e[3];

                function n(e) {
                    var t = e.target;
                    if (t) {
                        var i = e.target.dom7EventData || [];
                        if (i.indexOf(e) < 0 && i.unshift(e), o(t).is(s)) a.apply(t, i);
                        else
                            for (var r = o(t).parents(), n = 0; n < r.length; n += 1) o(r[n]).is(s) && a.apply(r[n], i)
                    }
                }

                function l(e) {
                    var t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t)
                }
                "function" == typeof e[1] && (i = e[0], a = e[1], r = e[2], s = void 0), r || (r = !1);
                for (var d, h = i.split(" "), u = 0; u < this.length; u += 1) {
                    var p = this[u];
                    if (s)
                        for (d = 0; d < h.length; d += 1) c = h[d], p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[c] || (p.dom7LiveListeners[c] = []), p.dom7LiveListeners[c].push({
                            listener: a,
                            proxyListener: n
                        }), p.addEventListener(c, n, r);
                    else
                        for (d = 0; d < h.length; d += 1) {
                            var c = h[d];
                            p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[c] || (p.dom7Listeners[c] = []), p.dom7Listeners[c].push({
                                listener: a,
                                proxyListener: l
                            }), p.addEventListener(c, l, r)
                        }
                }
                return this
            },
            off: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var i = e[0],
                    s = e[1],
                    a = e[2],
                    r = e[3];
                "function" == typeof e[1] && (i = e[0], a = e[1], r = e[2], s = void 0), r || (r = !1);
                for (var n = i.split(" "), o = 0; o < n.length; o += 1)
                    for (var l = n[o], d = 0; d < this.length; d += 1) {
                        var h = this[d],
                            u = void 0;
                        if (!s && h.dom7Listeners ? u = h.dom7Listeners[l] : s && h.dom7LiveListeners && (u = h.dom7LiveListeners[l]), u && u.length)
                            for (var p = u.length - 1; p >= 0; p -= 1) {
                                var c = u[p];
                                a && c.listener === a ? (h.removeEventListener(l, c.proxyListener, r), u.splice(p, 1)) : a && c.listener && c.listener.dom7proxy && c.listener.dom7proxy === a ? (h.removeEventListener(l, c.proxyListener, r), u.splice(p, 1)) : a || (h.removeEventListener(l, c.proxyListener, r), u.splice(p, 1))
                            }
                    }
                return this
            },
            trigger: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                for (var i = e[0].split(" "), s = e[1], n = 0; n < i.length; n += 1)
                    for (var o = i[n], l = 0; l < this.length; l += 1) {
                        var d = this[l],
                            h = void 0;
                        try {
                            h = new r.CustomEvent(o, {
                                detail: s,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (u) {
                            (h = a.createEvent("Event")).initEvent(o, !0, !0), h.detail = s
                        }
                        d.dom7EventData = e.filter((function (e, t) {
                            return t > 0
                        })), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData
                    }
                return this
            },
            transitionEnd: function (e) {
                var t, i = ["webkitTransitionEnd", "transitionend"],
                    s = this;

                function a(r) {
                    if (r.target === this)
                        for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a)
                }
                if (e)
                    for (t = 0; t < i.length; t += 1) s.on(i[t], a);
                return this
            },
            outerWidth: function (e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function (e) {
                if (this.length > 0) {
                    if (e) {
                        var t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            offset: function () {
                if (this.length > 0) {
                    var e = this[0],
                        t = e.getBoundingClientRect(),
                        i = a.body;
                    return {
                        top: t.top + (e === r ? r.scrollY : e.scrollTop) - (e.clientTop || i.clientTop || 0),
                        left: t.left + (e === r ? r.scrollX : e.scrollLeft) - (e.clientLeft || i.clientLeft || 0)
                    }
                }
                return null
            },
            css: function (e, t) {
                var i;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (i = 0; i < this.length; i += 1)
                            for (var s in e) this[i].style[s] = e[s];
                        return this
                    }
                    if (this[0]) return r.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                    return this
                }
                return this
            },
            each: function (e) {
                if (!e) return this;
                for (var t = 0; t < this.length; t += 1)
                    if (!1 === e.call(this[t], t, this[t])) return this;
                return this
            },
            html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this
            },
            text: function (e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this
            },
            is: function (e) {
                var t, i, s = this[0];
                if (!s || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (s.matches) return s.matches(e);
                    if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
                    if (s.msMatchesSelector) return s.msMatchesSelector(e);
                    for (t = o(e), i = 0; i < t.length; i += 1)
                        if (t[i] === s) return !0;
                    return !1
                }
                if (e === a) return s === a;
                if (e === r) return s === r;
                if (e.nodeType || e instanceof n) {
                    for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
                        if (t[i] === s) return !0;
                    return !1
                }
                return !1
            },
            index: function () {
                var e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                    return e
                }
            },
            eq: function (e) {
                if (void 0 === e) return this;
                var t, i = this.length;
                return new n(e > i - 1 ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
            },
            append: function () {
                for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                for (var s = 0; s < t.length; s += 1) {
                    e = t[s];
                    for (var r = 0; r < this.length; r += 1)
                        if ("string" == typeof e) {
                            var o = a.createElement("div");
                            for (o.innerHTML = e; o.firstChild;) this[r].appendChild(o.firstChild)
                        } else if (e instanceof n)
                        for (var l = 0; l < e.length; l += 1) this[r].appendChild(e[l]);
                    else this[r].appendChild(e)
                }
                return this
            },
            prepend: function (e) {
                var t, i;
                for (t = 0; t < this.length; t += 1)
                    if ("string" == typeof e) {
                        var s = a.createElement("div");
                        for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(s.childNodes[i], this[t].childNodes[0])
                    } else if (e instanceof n)
                    for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
                else this[t].insertBefore(e, this[t].childNodes[0]);
                return this
            },
            next: function (e) {
                return this.length > 0 ? e ? this[0].nextElementSibling && o(this[0].nextElementSibling).is(e) ? new n([this[0].nextElementSibling]) : new n([]) : new n(this[0].nextElementSibling ? [this[0].nextElementSibling] : []) : new n([])
            },
            nextAll: function (e) {
                var t = [],
                    i = this[0];
                if (!i) return new n([]);
                for (; i.nextElementSibling;) {
                    var s = i.nextElementSibling;
                    e ? o(s).is(e) && t.push(s) : t.push(s), i = s
                }
                return new n(t)
            },
            prev: function (e) {
                if (this.length > 0) {
                    var t = this[0];
                    return e ? t.previousElementSibling && o(t.previousElementSibling).is(e) ? new n([t.previousElementSibling]) : new n([]) : new n(t.previousElementSibling ? [t.previousElementSibling] : [])
                }
                return new n([])
            },
            prevAll: function (e) {
                var t = [],
                    i = this[0];
                if (!i) return new n([]);
                for (; i.previousElementSibling;) {
                    var s = i.previousElementSibling;
                    e ? o(s).is(e) && t.push(s) : t.push(s), i = s
                }
                return new n(t)
            },
            parent: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? o(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                return o(l(t))
            },
            parents: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    for (var s = this[i].parentNode; s;) e ? o(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
                return o(l(t))
            },
            closest: function (e) {
                var t = this;
                return void 0 === e ? new n([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
            },
            find: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) t.push(s[a]);
                return new n(t)
            },
            children: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1)
                    for (var s = this[i].childNodes, a = 0; a < s.length; a += 1) e ? 1 === s[a].nodeType && o(s[a]).is(e) && t.push(s[a]) : 1 === s[a].nodeType && t.push(s[a]);
                return new n(l(t))
            },
            remove: function () {
                for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            },
            add: function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var i, s;
                for (i = 0; i < e.length; i += 1) {
                    var a = o(e[i]);
                    for (s = 0; s < a.length; s += 1) this[this.length] = a[s], this.length += 1
                }
                return this
            },
            styles: function () {
                return this[0] ? r.getComputedStyle(this[0], null) : {}
            }
        };
        Object.keys(d).forEach((function (e) {
            o.fn[e] = o.fn[e] || d[e]
        }));
        var h, u, p, c = {
                deleteProps: function (e) {
                    var t = e;
                    Object.keys(t).forEach((function (e) {
                        try {
                            t[e] = null
                        } catch (i) {}
                        try {
                            delete t[e]
                        } catch (i) {}
                    }))
                },
                nextTick: function (e, t) {
                    return void 0 === t && (t = 0), setTimeout(e, t)
                },
                now: function () {
                    return Date.now()
                },
                getTranslate: function (e, t) {
                    var i, s, a;
                    void 0 === t && (t = "x");
                    var n = r.getComputedStyle(e, null);
                    return r.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map((function (e) {
                        return e.replace(",", ".")
                    })).join(", ")), a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
                },
                parseUrlQuery: function (e) {
                    var t, i, s, a, n = {},
                        o = e || r.location.href;
                    if ("string" == typeof o && o.length)
                        for (a = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter((function (e) {
                                return "" !== e
                            }))).length, t = 0; t < a; t += 1) s = i[t].replace(/#\S+/g, "").split("="), n[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
                    return n
                },
                isObject: function (e) {
                    return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
                },
                extend: function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                        var a = e[s];
                        if (null != a)
                            for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
                                var l = r[n],
                                    d = Object.getOwnPropertyDescriptor(a, l);
                                void 0 !== d && d.enumerable && (c.isObject(i[l]) && c.isObject(a[l]) ? c.extend(i[l], a[l]) : !c.isObject(i[l]) && c.isObject(a[l]) ? (i[l] = {}, c.extend(i[l], a[l])) : i[l] = a[l])
                            }
                    }
                    return i
                }
            },
            v = (u = a.createElement("div"), {
                touch: r.Modernizr && !0 === r.Modernizr.touch || !!(r.navigator.maxTouchPoints > 0 || "ontouchstart" in r || r.DocumentTouch && a instanceof r.DocumentTouch),
                pointerEvents: !!(r.navigator.pointerEnabled || r.PointerEvent || "maxTouchPoints" in r.navigator && r.navigator.maxTouchPoints > 0),
                prefixedPointerEvents: !!r.navigator.msPointerEnabled,
                transition: (h = u.style, "transition" in h || "webkitTransition" in h || "MozTransition" in h),
                transforms3d: r.Modernizr && !0 === r.Modernizr.csstransforms3d || function () {
                    var e = u.style;
                    return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
                }(),
                flexbox: function () {
                    for (var e = u.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
                        if (t[i] in e) return !0;
                    return !1
                }(),
                observer: "MutationObserver" in r || "WebkitMutationObserver" in r,
                passiveListener: function () {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function () {
                                e = !0
                            }
                        });
                        r.addEventListener("testPassiveListener", null, t)
                    } catch (i) {}
                    return e
                }(),
                gestures: "ongesturestart" in r
            }),
            m = {
                isIE: !!r.navigator.userAgent.match(/Trident/g) || !!r.navigator.userAgent.match(/MSIE/g),
                isEdge: !!r.navigator.userAgent.match(/Edge/g),
                isSafari: (p = r.navigator.userAgent.toLowerCase(), p.indexOf("safari") >= 0 && p.indexOf("chrome") < 0 && p.indexOf("android") < 0),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent)
            },
            f = function () {
                function e(e) {
                    void 0 === e && (e = {});
                    var t = this;
                    t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function (e) {
                        t.on(e, t.params.on[e])
                    }))
                }
                return e.prototype.on = function (e, t, i) {
                    var s = this;
                    if ("function" != typeof t) return s;
                    var a = i ? "unshift" : "push";
                    return e.split(" ").forEach((function (e) {
                        s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
                    })), s
                }, e.prototype.once = function (e, t, i) {
                    var s = this;
                    if ("function" != typeof t) return s;

                    function a() {
                        for (var i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r];
                        t.apply(s, i), s.off(e, a), a.f7proxy && delete a.f7proxy
                    }
                    return a.f7proxy = t, s.on(e, a, i)
                }, e.prototype.off = function (e, t) {
                    var i = this;
                    return i.eventsListeners ? (e.split(" ").forEach((function (e) {
                        void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function (s, a) {
                            (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1)
                        }))
                    })), i) : i
                }, e.prototype.emit = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var i, s, a, r = this;
                    if (!r.eventsListeners) return r;
                    "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r);
                    var n = Array.isArray(i) ? i : i.split(" ");
                    return n.forEach((function (e) {
                        if (r.eventsListeners && r.eventsListeners[e]) {
                            var t = [];
                            r.eventsListeners[e].forEach((function (e) {
                                t.push(e)
                            })), t.forEach((function (e) {
                                e.apply(a, s)
                            }))
                        }
                    })), r
                }, e.prototype.useModulesParams = function (e) {
                    var t = this;
                    t.modules && Object.keys(t.modules).forEach((function (i) {
                        var s = t.modules[i];
                        s.params && c.extend(e, s.params)
                    }))
                }, e.prototype.useModules = function (e) {
                    void 0 === e && (e = {});
                    var t = this;
                    t.modules && Object.keys(t.modules).forEach((function (i) {
                        var s = t.modules[i],
                            a = e[i] || {};
                        s.instance && Object.keys(s.instance).forEach((function (e) {
                            var i = s.instance[e];
                            t[e] = "function" == typeof i ? i.bind(t) : i
                        })), s.on && t.on && Object.keys(s.on).forEach((function (e) {
                            t.on(e, s.on[e])
                        })), s.create && s.create.bind(t)(a)
                    }))
                }, Object.defineProperty(e, "components", {
                    set: function (e) {
                        this.use && this.use(e)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.installModule = function (e) {
                    for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                    var s = this;
                    s.prototype.modules || (s.prototype.modules = {});
                    var a = e.name || Object.keys(s.prototype.modules).length + "_" + c.now();
                    return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach((function (t) {
                        s.prototype[t] = e.proto[t]
                    })), e.static && Object.keys(e.static).forEach((function (t) {
                        s[t] = e.static[t]
                    })), e.install && e.install.apply(s, t), s
                }, e.use = function (e) {
                    for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                    var a = this;
                    return Array.isArray(e) ? (e.forEach((function (e) {
                        return a.installModule(e)
                    })), a) : a.installModule.apply(a, Object(s.j)([e], t))
                }, e
            }(),
            g = {
                updateSize: function () {
                    var e, t, i = this.$el;
                    t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === (e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth) && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), c.extend(this, {
                        width: e,
                        height: t,
                        size: this.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function () {
                    var e = this.params,
                        t = this.$wrapperEl,
                        i = this.size,
                        s = this.rtlTranslate,
                        a = this.wrongRTL,
                        n = this.virtual && e.virtual.enabled,
                        o = n ? this.virtual.slides.length : this.slides.length,
                        l = t.children("." + this.params.slideClass),
                        d = n ? this.virtual.slides.length : l.length,
                        h = [],
                        u = [],
                        p = [],
                        f = e.slidesOffsetBefore;
                    "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
                    var g = e.slidesOffsetAfter;
                    "function" == typeof g && (g = e.slidesOffsetAfter.call(this));
                    var b = this.snapGrid.length,
                        w = this.snapGrid.length,
                        T = e.spaceBetween,
                        E = -f,
                        x = 0,
                        y = 0;
                    if (void 0 !== i) {
                        var S, C;
                        "string" == typeof T && T.indexOf("%") >= 0 && (T = parseFloat(T.replace("%", "")) / 100 * i), this.virtualSize = -T, l.css(s ? {
                            marginLeft: "",
                            marginTop: ""
                        } : {
                            marginRight: "",
                            marginBottom: ""
                        }), e.slidesPerColumn > 1 && (S = Math.floor(d / e.slidesPerColumn) === d / this.params.slidesPerColumn ? d : Math.ceil(d / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (S = Math.max(S, e.slidesPerView * e.slidesPerColumn)));
                        for (var M, P = e.slidesPerColumn, z = S / P, k = Math.floor(d / e.slidesPerColumn), L = 0; L < d; L += 1) {
                            C = 0;
                            var $ = l.eq(L);
                            if (e.slidesPerColumn > 1) {
                                var D = void 0,
                                    O = void 0,
                                    I = void 0;
                                if ("column" === e.slidesPerColumnFill || "row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                                    if ("column" === e.slidesPerColumnFill) I = L - (O = Math.floor(L / P)) * P, (O > k || O === k && I === P - 1) && (I += 1) >= P && (I = 0, O += 1);
                                    else {
                                        var A = Math.floor(L / e.slidesPerGroup);
                                        O = L - (I = Math.floor(L / e.slidesPerView) - A * e.slidesPerColumn) * e.slidesPerView - A * e.slidesPerView
                                    }
                                    $.css({
                                        "-webkit-box-ordinal-group": D = O + I * S / P,
                                        "-moz-box-ordinal-group": D,
                                        "-ms-flex-order": D,
                                        "-webkit-order": D,
                                        order: D
                                    })
                                } else O = L - (I = Math.floor(L / z)) * z;
                                $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== I && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", O).attr("data-swiper-row", I)
                            }
                            if ("none" !== $.css("display")) {
                                if ("auto" === e.slidesPerView) {
                                    var B = r.getComputedStyle($[0], null),
                                        X = $[0].style.transform,
                                        Y = $[0].style.webkitTransform;
                                    if (X && ($[0].style.transform = "none"), Y && ($[0].style.webkitTransform = "none"), e.roundLengths) C = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
                                    else if (this.isHorizontal()) {
                                        var G = parseFloat(B.getPropertyValue("width")),
                                            V = parseFloat(B.getPropertyValue("padding-left")),
                                            H = parseFloat(B.getPropertyValue("padding-right")),
                                            F = parseFloat(B.getPropertyValue("margin-left")),
                                            N = parseFloat(B.getPropertyValue("margin-right"));
                                        C = (W = B.getPropertyValue("box-sizing")) && "border-box" === W && !m.isIE ? G + F + N : G + V + H + F + N
                                    } else {
                                        var W, R = parseFloat(B.getPropertyValue("height")),
                                            j = parseFloat(B.getPropertyValue("padding-top")),
                                            q = parseFloat(B.getPropertyValue("padding-bottom")),
                                            U = parseFloat(B.getPropertyValue("margin-top")),
                                            _ = parseFloat(B.getPropertyValue("margin-bottom"));
                                        C = (W = B.getPropertyValue("box-sizing")) && "border-box" === W && !m.isIE ? R + U + _ : R + j + q + U + _
                                    }
                                    X && ($[0].style.transform = X), Y && ($[0].style.webkitTransform = Y), e.roundLengths && (C = Math.floor(C))
                                } else C = (i - (e.slidesPerView - 1) * T) / e.slidesPerView, e.roundLengths && (C = Math.floor(C)), l[L] && (this.isHorizontal() ? l[L].style.width = C + "px" : l[L].style.height = C + "px");
                                l[L] && (l[L].swiperSlideSize = C), p.push(C), e.centeredSlides ? (E = E + C / 2 + x / 2 + T, 0 === x && 0 !== L && (E = E - i / 2 - T), 0 === L && (E = E - i / 2 - T), Math.abs(E) < .001 && (E = 0), e.roundLengths && (E = Math.floor(E)), y % e.slidesPerGroup == 0 && h.push(E), u.push(E)) : (e.roundLengths && (E = Math.floor(E)), y % e.slidesPerGroup == 0 && h.push(E), u.push(E), E = E + C + T), this.virtualSize += C + T, x = C, y += 1
                            }
                        }
                        if (this.virtualSize = Math.max(this.virtualSize, i) + g, s && a && ("slide" === e.effect || "coverflow" === e.effect) && t.css({
                                width: this.virtualSize + e.spaceBetween + "px"
                            }), v.flexbox && !e.setWrapperSize || (this.isHorizontal() ? t.css({
                                width: this.virtualSize + e.spaceBetween + "px"
                            }) : t.css({
                                height: this.virtualSize + e.spaceBetween + "px"
                            })), e.slidesPerColumn > 1 && (this.virtualSize = (C + e.spaceBetween) * S, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({
                                width: this.virtualSize + e.spaceBetween + "px"
                            }) : t.css({
                                height: this.virtualSize + e.spaceBetween + "px"
                            }), e.centeredSlides)) {
                            for (M = [], L = 0; L < h.length; L += 1) {
                                var K = h[L];
                                e.roundLengths && (K = Math.floor(K)), h[L] < this.virtualSize + h[0] && M.push(K)
                            }
                            h = M
                        }
                        if (!e.centeredSlides) {
                            for (M = [], L = 0; L < h.length; L += 1) K = h[L], e.roundLengths && (K = Math.floor(K)), h[L] <= this.virtualSize - i && M.push(K);
                            h = M, Math.floor(this.virtualSize - i) - Math.floor(h[h.length - 1]) > 1 && h.push(this.virtualSize - i)
                        }
                        if (0 === h.length && (h = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? l.css(s ? {
                                marginLeft: T + "px"
                            } : {
                                marginRight: T + "px"
                            }) : l.css({
                                marginBottom: T + "px"
                            })), e.centerInsufficientSlides) {
                            var J = 0;
                            if (p.forEach((function (t) {
                                    J += t + (e.spaceBetween ? e.spaceBetween : 0)
                                })), (J -= e.spaceBetween) < i) {
                                var Z = (i - J) / 2;
                                h.forEach((function (e, t) {
                                    h[t] = e - Z
                                })), u.forEach((function (e, t) {
                                    u[t] = e + Z
                                }))
                            }
                        }
                        c.extend(this, {
                            slides: l,
                            snapGrid: h,
                            slidesGrid: u,
                            slidesSizesGrid: p
                        }), d !== o && this.emit("slidesLengthChange"), h.length !== b && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== w && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function (e) {
                    var t, i = [],
                        s = 0;
                    if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                        for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                            var a = this.activeIndex + t;
                            if (a > this.slides.length) break;
                            i.push(this.slides.eq(a)[0])
                        } else i.push(this.slides.eq(this.activeIndex)[0]);
                    for (t = 0; t < i.length; t += 1)
                        if (void 0 !== i[t]) {
                            var r = i[t].offsetHeight;
                            s = r > s ? r : s
                        } s && this.$wrapperEl.css("height", s + "px")
                },
                updateSlidesOffset: function () {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                },
                updateSlidesProgress: function (e) {
                    void 0 === e && (e = this && this.translate || 0);
                    var t = this.params,
                        i = this.slides,
                        s = this.rtlTranslate;
                    if (0 !== i.length) {
                        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                        var a = -e;
                        s && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                        for (var r = 0; r < i.length; r += 1) {
                            var n = i[r],
                                l = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
                            if (t.watchSlidesVisibility) {
                                var d = -(a - n.swiperSlideOffset),
                                    h = d + this.slidesSizesGrid[r];
                                (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass))
                            }
                            n.progress = s ? -l : l
                        }
                        this.visibleSlides = o(this.visibleSlides)
                    }
                },
                updateProgress: function (e) {
                    void 0 === e && (e = this && this.translate || 0);
                    var t = this.params,
                        i = this.maxTranslate() - this.minTranslate(),
                        s = this.progress,
                        a = this.isBeginning,
                        r = this.isEnd,
                        n = a,
                        o = r;
                    0 === i ? (s = 0, a = !0, r = !0) : (a = (s = (e - this.minTranslate()) / i) <= 0, r = s >= 1), c.extend(this, {
                        progress: s,
                        isBeginning: a,
                        isEnd: r
                    }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), a && !n && this.emit("reachBeginning toEdge"), r && !o && this.emit("reachEnd toEdge"), (n && !a || o && !r) && this.emit("fromEdge"), this.emit("progress", s)
                },
                updateSlidesClasses: function () {
                    var e, t = this.slides,
                        i = this.params,
                        s = this.$wrapperEl,
                        a = this.activeIndex,
                        r = this.realIndex,
                        n = this.virtual && i.virtual.enabled;
                    t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
                    var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                    i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
                    var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                    i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
                },
                updateActiveIndex: function (e) {
                    var t, i = this.rtlTranslate ? this.translate : -this.translate,
                        s = this.slidesGrid,
                        a = this.snapGrid,
                        r = this.params,
                        n = this.activeIndex,
                        o = this.realIndex,
                        l = this.snapIndex,
                        d = e;
                    if (void 0 === d) {
                        for (var h = 0; h < s.length; h += 1) void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);
                        r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                    }
                    if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(d / r.slidesPerGroup)) >= a.length && (t = a.length - 1), d !== n) {
                        var u = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                        c.extend(this, {
                            snapIndex: t,
                            realIndex: u,
                            previousIndex: n,
                            activeIndex: d
                        }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== u && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")
                    } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
                },
                updateClickedSlide: function (e) {
                    var t = this.params,
                        i = o(e.target).closest("." + t.slideClass)[0],
                        s = !1;
                    if (i)
                        for (var a = 0; a < this.slides.length; a += 1) this.slides[a] === i && (s = !0);
                    if (!i || !s) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
                    this.clickedSlide = i, this.clickedIndex = this.virtual && this.params.virtual.enabled ? parseInt(o(i).attr("data-swiper-slide-index"), 10) : o(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                }
            },
            b = {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this.rtlTranslate,
                        i = this.translate;
                    if (this.params.virtualTranslate) return t ? -i : i;
                    var s = c.getTranslate(this.$wrapperEl[0], e);
                    return t && (s = -s), s || 0
                },
                setTranslate: function (e, t) {
                    var i = this.rtlTranslate,
                        s = this.params,
                        a = this.$wrapperEl,
                        r = this.progress,
                        n = 0,
                        o = 0;
                    this.isHorizontal() ? n = i ? -e : e : o = e, s.roundLengths && (n = Math.floor(n), o = Math.floor(o)), s.virtualTranslate || a.transform(v.transforms3d ? "translate3d(" + n + "px, " + o + "px, 0px)" : "translate(" + n + "px, " + o + "px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? n : o;
                    var l = this.maxTranslate() - this.minTranslate();
                    (0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                },
                minTranslate: function () {
                    return -this.snapGrid[0]
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                }
            },
            w = {
                slideTo: function (e, t, i, s) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                    var a = this,
                        r = e;
                    r < 0 && (r = 0);
                    var n = a.params,
                        o = a.snapGrid,
                        l = a.slidesGrid,
                        d = a.previousIndex,
                        h = a.activeIndex,
                        u = a.rtlTranslate;
                    if (a.animating && n.preventInteractionOnTransition) return !1;
                    var p = Math.floor(r / n.slidesPerGroup);
                    p >= o.length && (p = o.length - 1), (h || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
                    var c, m = -o[p];
                    if (a.updateProgress(m), n.normalizeSlideIndex)
                        for (var f = 0; f < l.length; f += 1) - Math.floor(100 * m) >= Math.floor(100 * l[f]) && (r = f);
                    if (a.initialized && r !== h) {
                        if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
                        if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (h || 0) !== r) return !1
                    }
                    return c = r > h ? "next" : r < h ? "prev" : "reset", u && -m === a.translate || !u && m === a.translate ? (a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(m), "reset" !== c && (a.transitionStart(i, c), a.transitionEnd(i, c)), !1) : (0 !== t && v.transition ? (a.setTransition(t), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, c), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, c))
                    }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))) : (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, c), a.transitionEnd(i, c)), !0)
                },
                slideToLoop: function (e, t, i, s) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                    var a = e;
                    return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
                },
                slideNext: function (e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var s = this.params;
                    return s.loop ? !this.animating && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)
                },
                slidePrev: function (e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var s = this.snapGrid,
                        a = this.slidesGrid,
                        r = this.rtlTranslate;
                    if (this.params.loop) {
                        if (this.animating) return !1;
                        this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                    }

                    function n(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    var o, l = n(r ? this.translate : -this.translate),
                        d = s.map((function (e) {
                            return n(e)
                        })),
                        h = (a.map((function (e) {
                            return n(e)
                        })), d.indexOf(l), s[d.indexOf(l) - 1]);
                    return void 0 !== h && (o = a.indexOf(h)) < 0 && (o = this.activeIndex - 1), this.slideTo(o, e, t, i)
                },
                slideReset: function (e, t, i) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
                },
                slideToClosest: function (e, t, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var s = this.activeIndex,
                        a = Math.floor(s / this.params.slidesPerGroup);
                    if (a < this.snapGrid.length - 1) {
                        var r = this.snapGrid[a];
                        (this.rtlTranslate ? this.translate : -this.translate) - r > (this.snapGrid[a + 1] - r) / 2 && (s = this.params.slidesPerGroup)
                    }
                    return this.slideTo(s, e, t, i)
                },
                slideToClickedSlide: function () {
                    var e, t = this,
                        i = t.params,
                        s = t.$wrapperEl,
                        a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                        r = t.clickedIndex;
                    if (i.loop) {
                        if (t.animating) return;
                        e = parseInt(o(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), c.nextTick((function () {
                            t.slideTo(r)
                        }))) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), c.nextTick((function () {
                            t.slideTo(r)
                        }))) : t.slideTo(r)
                    } else t.slideTo(r)
                }
            },
            T = {
                loopCreate: function () {
                    var e = this,
                        t = e.params,
                        i = e.$wrapperEl;
                    i.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
                    var s = i.children("." + t.slideClass);
                    if (t.loopFillGroupWithBlank) {
                        var r = t.slidesPerGroup - s.length % t.slidesPerGroup;
                        if (r !== t.slidesPerGroup) {
                            for (var n = 0; n < r; n += 1) {
                                var l = o(a.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
                                i.append(l)
                            }
                            s = i.children("." + t.slideClass)
                        }
                    }
                    "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = s.length), e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
                    var d = [],
                        h = [];
                    for (s.each((function (t, i) {
                            var a = o(i);
                            t < e.loopedSlides && h.push(i), t < s.length && t >= s.length - e.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", t)
                        })), n = 0; n < h.length; n += 1) i.append(o(h[n].cloneNode(!0)).addClass(t.slideDuplicateClass));
                    for (n = d.length - 1; n >= 0; n -= 1) i.prepend(o(d[n].cloneNode(!0)).addClass(t.slideDuplicateClass))
                },
                loopFix: function () {
                    var e, t = this.params,
                        i = this.activeIndex,
                        s = this.slides,
                        a = this.loopedSlides,
                        r = this.allowSlidePrev,
                        n = this.allowSlideNext,
                        o = this.snapGrid,
                        l = this.rtlTranslate;
                    this.allowSlidePrev = !0, this.allowSlideNext = !0;
                    var d = -o[i] - this.getTranslate();
                    i < a ? (e = s.length - 3 * a + i, this.slideTo(e += a, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && i >= 2 * a || i >= s.length - a) && (e = -s.length + i + a, this.slideTo(e += a, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)), this.allowSlidePrev = r, this.allowSlideNext = n
                },
                loopDestroy: function () {
                    var e = this.params,
                        t = this.slides;
                    this.$wrapperEl.children("." + e.slideClass + "." + e.slideDuplicateClass + ",." + e.slideClass + "." + e.slideBlankClass).remove(), t.removeAttr("data-swiper-slide-index")
                }
            },
            E = {
                setGrabCursor: function (e) {
                    if (!(v.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                        var t = this.el;
                        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                    }
                },
                unsetGrabCursor: function () {
                    v.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
                }
            },
            x = {
                appendSlide: function (e) {
                    var t = this.$wrapperEl,
                        i = this.params;
                    if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                        for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                    else t.append(e);
                    i.loop && this.loopCreate(), i.observer && v.observer || this.update()
                },
                prependSlide: function (e) {
                    var t = this.params,
                        i = this.$wrapperEl,
                        s = this.activeIndex;
                    t.loop && this.loopDestroy();
                    var a = s + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                        a = s + e.length
                    } else i.prepend(e);
                    t.loop && this.loopCreate(), t.observer && v.observer || this.update(), this.slideTo(a, 0, !1)
                },
                addSlide: function (e, t) {
                    var i = this.$wrapperEl,
                        s = this.params,
                        a = this.activeIndex;
                    s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
                    var r = this.slides.length;
                    if (e <= 0) this.prependSlide(t);
                    else if (e >= r) this.appendSlide(t);
                    else {
                        for (var n = a > e ? a + 1 : a, o = [], l = r - 1; l >= e; l -= 1) {
                            var d = this.slides.eq(l);
                            d.remove(), o.unshift(d)
                        }
                        if ("object" == typeof t && "length" in t) {
                            for (l = 0; l < t.length; l += 1) t[l] && i.append(t[l]);
                            n = a > e ? a + t.length : a
                        } else i.append(t);
                        for (l = 0; l < o.length; l += 1) i.append(o[l]);
                        s.loop && this.loopCreate(), s.observer && v.observer || this.update(), this.slideTo(s.loop ? n + this.loopedSlides : n, 0, !1)
                    }
                },
                removeSlide: function (e) {
                    var t = this.params,
                        i = this.$wrapperEl,
                        s = this.activeIndex;
                    t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
                    var a, r = s;
                    if ("object" == typeof e && "length" in e) {
                        for (var n = 0; n < e.length; n += 1) this.slides[a = e[n]] && this.slides.eq(a).remove(), a < r && (r -= 1);
                        r = Math.max(r, 0)
                    } else this.slides[a = e] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
                    t.loop && this.loopCreate(), t.observer && v.observer || this.update(), this.slideTo(t.loop ? r + this.loopedSlides : r, 0, !1)
                },
                removeAllSlides: function () {
                    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                    this.removeSlide(e)
                }
            },
            y = function () {
                var e = r.navigator.userAgent,
                    t = {
                        ios: !1,
                        android: !1,
                        androidChrome: !1,
                        desktop: !1,
                        windows: !1,
                        iphone: !1,
                        ipod: !1,
                        ipad: !1,
                        cordova: r.cordova || r.phonegap,
                        phonegap: r.cordova || r.phonegap
                    },
                    i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                    s = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    n = e.match(/(iPad).*OS\s([\d_]+)/),
                    o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    l = !n && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), s && !i && (t.os = "android", t.osVersion = s[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (n || l || o) && (t.os = "ios", t.ios = !0), l && !o && (t.osVersion = l[2].replace(/_/g, "."), t.iphone = !0), n && (t.osVersion = n[2].replace(/_/g, "."), t.ipad = !0), o && (t.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (l || n || o) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                    var d = t.osVersion.split("."),
                        h = a.querySelector('meta[name="viewport"]');
                    t.minimalUi = !t.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0
                }
                return t.pixelRatio = r.devicePixelRatio || 1, t
            }();

        function S(e) {
            var t = this.touchEventsData,
                i = this.params,
                s = this.touches;
            if (!this.animating || !i.preventInteractionOnTransition) {
                var n = e;
                if (n.originalEvent && (n = n.originalEvent), t.isTouchEvent = "touchstart" === n.type, (t.isTouchEvent || !("which" in n) || 3 !== n.which) && !(!t.isTouchEvent && "button" in n && n.button > 0 || t.isTouched && t.isMoved))
                    if (i.noSwiping && o(n.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) this.allowClick = !0;
                    else if (!i.swipeHandler || o(n).closest(i.swipeHandler)[0]) {
                    s.currentX = "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX, s.currentY = "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY;
                    var l = s.currentX,
                        d = s.currentY,
                        h = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                    if (!i.edgeSwipeDetection && !i.iOSEdgeSwipeDetection || !(l <= h || l >= r.screen.width - h)) {
                        if (c.extend(t, {
                                isTouched: !0,
                                isMoved: !1,
                                allowTouchCallbacks: !0,
                                isScrolling: void 0,
                                startMoving: void 0
                            }), s.startX = l, s.startY = d, t.touchStartTime = c.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, i.threshold > 0 && (t.allowThresholdMove = !1), "touchstart" !== n.type) {
                            var u = !0;
                            o(n.target).is(t.formElements) && (u = !1), a.activeElement && o(a.activeElement).is(t.formElements) && a.activeElement !== n.target && a.activeElement.blur(), (i.touchStartForcePreventDefault || u && this.allowTouchMove && i.touchStartPreventDefault) && n.preventDefault()
                        }
                        this.emit("touchStart", n)
                    }
                }
            }
        }

        function C(e) {
            var t = this.touchEventsData,
                i = this.params,
                s = this.touches,
                r = this.rtlTranslate,
                n = e;
            if (n.originalEvent && (n = n.originalEvent), t.isTouched) {
                if (!t.isTouchEvent || "mousemove" !== n.type) {
                    var l = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                        d = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
                    if (n.preventedByNestedSwiper) return s.startX = l, void(s.startY = d);
                    if (!this.allowTouchMove) return this.allowClick = !1, void(t.isTouched && (c.extend(s, {
                        startX: l,
                        startY: d,
                        currentX: l,
                        currentY: d
                    }), t.touchStartTime = c.now()));
                    if (t.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                        if (this.isVertical()) {
                            if (d < s.startY && this.translate <= this.maxTranslate() || d > s.startY && this.translate >= this.minTranslate()) return t.isTouched = !1, void(t.isMoved = !1)
                        } else if (l < s.startX && this.translate <= this.maxTranslate() || l > s.startX && this.translate >= this.minTranslate()) return;
                    if (t.isTouchEvent && a.activeElement && n.target === a.activeElement && o(n.target).is(t.formElements)) return t.isMoved = !0, void(this.allowClick = !1);
                    if (t.allowTouchCallbacks && this.emit("touchMove", n), !(n.targetTouches && n.targetTouches.length > 1)) {
                        s.currentX = l, s.currentY = d;
                        var h = s.currentX - s.startX,
                            u = s.currentY - s.startY;
                        if (!(this.params.threshold && Math.sqrt(Math.pow(h, 2) + Math.pow(u, 2)) < this.params.threshold)) {
                            if (void 0 === t.isScrolling) {
                                var p = void 0;
                                this.isHorizontal() && s.currentY === s.startY || this.isVertical() && s.currentX === s.startX ? t.isScrolling = !1 : h * h + u * u >= 25 && (p = 180 * Math.atan2(Math.abs(u), Math.abs(h)) / Math.PI, t.isScrolling = this.isHorizontal() ? p > i.touchAngle : 90 - p > i.touchAngle)
                            }
                            if (t.isScrolling && this.emit("touchMoveOpposite", n), void 0 === t.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (t.startMoving = !0)), t.isScrolling) t.isTouched = !1;
                            else if (t.startMoving) {
                                this.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), t.isMoved || (i.loop && this.loopFix(), t.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), t.allowMomentumBounce = !1, !i.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", n)), this.emit("sliderMove", n), t.isMoved = !0;
                                var v = this.isHorizontal() ? h : u;
                                s.diff = v, v *= i.touchRatio, r && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", t.currentTranslate = v + t.startTranslate;
                                var m = !0,
                                    f = i.resistanceRatio;
                                if (i.touchReleaseOnEdges && (f = 0), v > 0 && t.currentTranslate > this.minTranslate() ? (m = !1, i.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + v, f))) : v < 0 && t.currentTranslate < this.maxTranslate() && (m = !1, i.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - v, f))), m && (n.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate), i.threshold > 0) {
                                    if (!(Math.abs(v) > i.threshold || t.allowThresholdMove)) return void(t.currentTranslate = t.startTranslate);
                                    if (!t.allowThresholdMove) return t.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, t.currentTranslate = t.startTranslate, void(s.diff = this.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                }
                                i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), i.freeMode && (0 === t.velocities.length && t.velocities.push({
                                    position: s[this.isHorizontal() ? "startX" : "startY"],
                                    time: t.touchStartTime
                                }), t.velocities.push({
                                    position: s[this.isHorizontal() ? "currentX" : "currentY"],
                                    time: c.now()
                                })), this.updateProgress(t.currentTranslate), this.setTranslate(t.currentTranslate))
                            }
                        }
                    }
                }
            } else t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", n)
        }

        function M(e) {
            var t = this,
                i = t.touchEventsData,
                s = t.params,
                a = t.touches,
                r = t.rtlTranslate,
                n = t.$wrapperEl,
                o = t.slidesGrid,
                l = t.snapGrid,
                d = e;
            if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
            s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            var h, u = c.now(),
                p = u - i.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), p < 300 && u - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = c.nextTick((function () {
                    t && !t.destroyed && t.emit("click", d)
                }), 300)), p < 300 && u - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", d))), i.lastClickTime = c.now(), c.nextTick((function () {
                    t.destroyed || (t.allowClick = !0)
                })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
            if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
                if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (h > -t.maxTranslate()) return void t.slideTo(t.slides.length < l.length ? l.length - 1 : t.slides.length - 1);
                if (s.freeModeMomentum) {
                    if (i.velocities.length > 1) {
                        var v = i.velocities.pop(),
                            m = i.velocities.pop(),
                            f = v.time - m.time;
                        t.velocity = (v.position - m.position) / f, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (f > 150 || c.now() - v.time > 300) && (t.velocity = 0)
                    } else t.velocity = 0;
                    t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                    var g = 1e3 * s.freeModeMomentumRatio,
                        b = t.translate + t.velocity * g;
                    r && (b = -b);
                    var w, T = !1,
                        E = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio,
                        x = void 0;
                    if (b < t.maxTranslate()) s.freeModeMomentumBounce ? (b + t.maxTranslate() < -E && (b = t.maxTranslate() - E), w = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : b = t.maxTranslate(), s.loop && s.centeredSlides && (x = !0);
                    else if (b > t.minTranslate()) s.freeModeMomentumBounce ? (b - t.minTranslate() > E && (b = t.minTranslate() + E), w = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : b = t.minTranslate(), s.loop && s.centeredSlides && (x = !0);
                    else if (s.freeModeSticky) {
                        for (var y = void 0, S = 0; S < l.length; S += 1)
                            if (l[S] > -b) {
                                y = S;
                                break
                            } b = -(b = Math.abs(l[y] - b) < Math.abs(l[y - 1] - b) || "next" === t.swipeDirection ? l[y] : l[y - 1])
                    }
                    if (x && t.once("transitionEnd", (function () {
                            t.loopFix()
                        })), 0 !== t.velocity) g = r ? Math.abs((-b - t.translate) / t.velocity) : Math.abs((b - t.translate) / t.velocity);
                    else if (s.freeModeSticky) return void t.slideToClosest();
                    s.freeModeMomentumBounce && T ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd((function () {
                        t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(w), n.transitionEnd((function () {
                            t && !t.destroyed && t.transitionEnd()
                        })))
                    }))) : t.velocity ? (t.updateProgress(b), t.setTransition(g), t.setTranslate(b), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd((function () {
                        t && !t.destroyed && t.transitionEnd()
                    })))) : t.updateProgress(b), t.updateActiveIndex(), t.updateSlidesClasses()
                } else if (s.freeModeSticky) return void t.slideToClosest();
                (!s.freeModeMomentum || p >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
            } else {
                for (var C = 0, M = t.slidesSizesGrid[0], P = 0; P < o.length; P += s.slidesPerGroup) void 0 !== o[P + s.slidesPerGroup] ? h >= o[P] && h < o[P + s.slidesPerGroup] && (C = P, M = o[P + s.slidesPerGroup] - o[P]) : h >= o[P] && (C = P, M = o[o.length - 1] - o[o.length - 2]);
                var z = (h - o[C]) / M;
                if (p > s.longSwipesMs) {
                    if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && t.slideTo(z >= s.longSwipesRatio ? C + s.slidesPerGroup : C), "prev" === t.swipeDirection && t.slideTo(z > 1 - s.longSwipesRatio ? C + s.slidesPerGroup : C)
                } else {
                    if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && t.slideTo(C + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(C)
                }
            }
        }

        function P() {
            var e = this.params,
                t = this.el;
            if (!t || 0 !== t.offsetWidth) {
                e.breakpoints && this.setBreakpoint();
                var i = this.allowSlideNext,
                    s = this.allowSlidePrev,
                    a = this.snapGrid;
                if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
                    var r = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                    this.setTranslate(r), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight()
                } else this.updateSlidesClasses(), this.slideTo(("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slides.length - 1 : this.activeIndex, 0, !1, !0);
                this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
            }
        }

        function z(e) {
            this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
        }
        var k = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                preventInteractionOnTransition: !1,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsInverse: !1,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0
            },
            L = {
                update: g,
                translate: b,
                transition: {
                    setTransition: function (e, t) {
                        this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                    },
                    transitionStart: function (e, t) {
                        void 0 === e && (e = !0);
                        var i = this.activeIndex,
                            s = this.previousIndex;
                        this.params.autoHeight && this.updateAutoHeight();
                        var a = t;
                        if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionStart"), e && i !== s) {
                            if ("reset" === a) return void this.emit("slideResetTransitionStart");
                            this.emit("slideChangeTransitionStart"), this.emit("next" === a ? "slideNextTransitionStart" : "slidePrevTransitionStart")
                        }
                    },
                    transitionEnd: function (e, t) {
                        void 0 === e && (e = !0);
                        var i = this.activeIndex,
                            s = this.previousIndex;
                        this.animating = !1, this.setTransition(0);
                        var a = t;
                        if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                            if ("reset" === a) return void this.emit("slideResetTransitionEnd");
                            this.emit("slideChangeTransitionEnd"), this.emit("next" === a ? "slideNextTransitionEnd" : "slidePrevTransitionEnd")
                        }
                    }
                },
                slide: w,
                loop: T,
                grabCursor: E,
                manipulation: x,
                events: {
                    attachEvents: function () {
                        var e = this.params,
                            t = this.touchEvents,
                            i = this.el,
                            s = this.wrapperEl;
                        this.onTouchStart = S.bind(this), this.onTouchMove = C.bind(this), this.onTouchEnd = M.bind(this), this.onClick = z.bind(this);
                        var r = "container" === e.touchEventsTarget ? i : s,
                            n = !!e.nested;
                        if (v.touch || !v.pointerEvents && !v.prefixedPointerEvents) {
                            if (v.touch) {
                                var o = !("touchstart" !== t.start || !v.passiveListener || !e.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                r.addEventListener(t.start, this.onTouchStart, o), r.addEventListener(t.move, this.onTouchMove, v.passiveListener ? {
                                    passive: !1,
                                    capture: n
                                } : n), r.addEventListener(t.end, this.onTouchEnd, o)
                            }(e.simulateTouch && !y.ios && !y.android || e.simulateTouch && !v.touch && y.ios) && (r.addEventListener("mousedown", this.onTouchStart, !1), a.addEventListener("mousemove", this.onTouchMove, n), a.addEventListener("mouseup", this.onTouchEnd, !1))
                        } else r.addEventListener(t.start, this.onTouchStart, !1), a.addEventListener(t.move, this.onTouchMove, n), a.addEventListener(t.end, this.onTouchEnd, !1);
                        (e.preventClicks || e.preventClicksPropagation) && r.addEventListener("click", this.onClick, !0), this.on(y.ios || y.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", P, !0)
                    },
                    detachEvents: function () {
                        var e = this.params,
                            t = this.touchEvents,
                            i = "container" === e.touchEventsTarget ? this.el : this.wrapperEl,
                            s = !!e.nested;
                        if (v.touch || !v.pointerEvents && !v.prefixedPointerEvents) {
                            if (v.touch) {
                                var r = !("onTouchStart" !== t.start || !v.passiveListener || !e.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                i.removeEventListener(t.start, this.onTouchStart, r), i.removeEventListener(t.move, this.onTouchMove, s), i.removeEventListener(t.end, this.onTouchEnd, r)
                            }(e.simulateTouch && !y.ios && !y.android || e.simulateTouch && !v.touch && y.ios) && (i.removeEventListener("mousedown", this.onTouchStart, !1), a.removeEventListener("mousemove", this.onTouchMove, s), a.removeEventListener("mouseup", this.onTouchEnd, !1))
                        } else i.removeEventListener(t.start, this.onTouchStart, !1), a.removeEventListener(t.move, this.onTouchMove, s), a.removeEventListener(t.end, this.onTouchEnd, !1);
                        (e.preventClicks || e.preventClicksPropagation) && i.removeEventListener("click", this.onClick, !0), this.off(y.ios || y.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", P)
                    }
                },
                breakpoints: {
                    setBreakpoint: function () {
                        var e = this.activeIndex,
                            t = this.initialized,
                            i = this.loopedSlides,
                            s = void 0 === i ? 0 : i,
                            a = this.params,
                            r = a.breakpoints;
                        if (r && (!r || 0 !== Object.keys(r).length)) {
                            var n = this.getBreakpoint(r);
                            if (n && this.currentBreakpoint !== n) {
                                var o = n in r ? r[n] : void 0;
                                o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach((function (e) {
                                    var t = o[e];
                                    void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                                }));
                                var l = o || this.originalParams,
                                    d = l.direction && l.direction !== a.direction,
                                    h = a.loop && (l.slidesPerView !== a.slidesPerView || d);
                                d && t && this.changeDirection(), c.extend(this.params, l), c.extend(this, {
                                    allowTouchMove: this.params.allowTouchMove,
                                    allowSlideNext: this.params.allowSlideNext,
                                    allowSlidePrev: this.params.allowSlidePrev
                                }), this.currentBreakpoint = n, h && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - s + this.loopedSlides, 0, !1)), this.emit("breakpoint", l)
                            }
                        }
                    },
                    getBreakpoint: function (e) {
                        if (e) {
                            var t = !1,
                                i = [];
                            Object.keys(e).forEach((function (e) {
                                i.push(e)
                            })), i.sort((function (e, t) {
                                return parseInt(e, 10) - parseInt(t, 10)
                            }));
                            for (var s = 0; s < i.length; s += 1) {
                                var a = i[s];
                                this.params.breakpointsInverse ? a <= r.innerWidth && (t = a) : a >= r.innerWidth && !t && (t = a)
                            }
                            return t || "max"
                        }
                    }
                },
                checkOverflow: {
                    checkOverflow: function () {
                        var e = this.isLocked;
                        this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                    }
                },
                classes: {
                    addClasses: function () {
                        var e = this.classNames,
                            t = this.params,
                            i = this.rtl,
                            s = this.$el,
                            a = [];
                        a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), v.flexbox || a.push("no-flexbox"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && a.push("multirow"), y.android && a.push("android"), y.ios && a.push("ios"), (m.isIE || m.isEdge) && (v.pointerEvents || v.prefixedPointerEvents) && a.push("wp8-" + t.direction), a.forEach((function (i) {
                            e.push(t.containerModifierClass + i)
                        })), s.addClass(e.join(" "))
                    },
                    removeClasses: function () {
                        this.$el.removeClass(this.classNames.join(" "))
                    }
                },
                images: {
                    loadImage: function (e, t, i, s, a, n) {
                        var o;

                        function l() {
                            n && n()
                        }
                        e.complete && a ? l() : t ? ((o = new r.Image).onload = l, o.onerror = l, s && (o.sizes = s), i && (o.srcset = i), t && (o.src = t)) : l()
                    },
                    preloadImages: function () {
                        var e = this;

                        function t() {
                            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                        }
                        e.imagesToLoad = e.$el.find("img");
                        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                            var s = e.imagesToLoad[i];
                            e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                        }
                    }
                }
            },
            $ = {},
            D = function (e) {
                function t() {
                    for (var i = [], s = 0; s < arguments.length; s++) i[s] = arguments[s];
                    var a, r, n;
                    1 === i.length && i[0].constructor && i[0].constructor === Object ? n = i[0] : (r = i[0], n = i[1]), n || (n = {}), n = c.extend({}, n), r && !n.el && (n.el = r), a = e.call(this, n) || this, Object.keys(L).forEach((function (e) {
                        Object.keys(L[e]).forEach((function (i) {
                            t.prototype[i] || (t.prototype[i] = L[e][i])
                        }))
                    }));
                    var l = a;
                    void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach((function (e) {
                        var t = l.modules[e];
                        if (t.params) {
                            var i = Object.keys(t.params)[0],
                                s = t.params[i];
                            if ("object" != typeof s || null === s) return;
                            if (!(i in n && "enabled" in s)) return;
                            !0 === n[i] && (n[i] = {
                                enabled: !0
                            }), "object" != typeof n[i] || "enabled" in n[i] || (n[i].enabled = !0), n[i] || (n[i] = {
                                enabled: !1
                            })
                        }
                    }));
                    var d = c.extend({}, k);
                    l.useModulesParams(d), l.params = c.extend({}, d, $, n), l.originalParams = c.extend({}, l.params), l.passedParams = c.extend({}, n), l.$ = o;
                    var h = o(l.params.el);
                    if (r = h[0]) {
                        if (h.length > 1) {
                            var u = [];
                            return h.each((function (e, i) {
                                var s = c.extend({}, n, {
                                    el: i
                                });
                                u.push(new t(s))
                            })), u
                        }
                        r.swiper = l, h.data("swiper", l);
                        var p, m, f = h.children("." + l.params.wrapperClass);
                        return c.extend(l, {
                            $el: h,
                            el: r,
                            $wrapperEl: f,
                            wrapperEl: f[0],
                            classNames: [],
                            slides: o(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function () {
                                return "horizontal" === l.params.direction
                            },
                            isVertical: function () {
                                return "vertical" === l.params.direction
                            },
                            rtl: "rtl" === r.dir.toLowerCase() || "rtl" === h.css("direction"),
                            rtlTranslate: "horizontal" === l.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === h.css("direction")),
                            wrongRTL: "-webkit-box" === f.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: l.params.allowSlideNext,
                            allowSlidePrev: l.params.allowSlidePrev,
                            touchEvents: (p = ["touchstart", "touchmove", "touchend"], m = ["mousedown", "mousemove", "mouseup"], v.pointerEvents ? m = ["pointerdown", "pointermove", "pointerup"] : v.prefixedPointerEvents && (m = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
                                start: p[0],
                                move: p[1],
                                end: p[2]
                            }, l.touchEventsDesktop = {
                                start: m[0],
                                move: m[1],
                                end: m[2]
                            }, v.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: c.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: l.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }), l.useModules(), l.params.init && l.init(), l
                    }
                }
                return Object(s.d)(t, e), t.prototype.slidesPerViewDynamic = function () {
                    var e = this.slides,
                        t = this.slidesGrid,
                        i = this.size,
                        s = this.activeIndex,
                        a = 1;
                    if (this.params.centeredSlides) {
                        for (var r = e[s].swiperSlideSize, n = void 0, o = s + 1; o < e.length; o += 1) e[o] && !n && (a += 1, (r += e[o].swiperSlideSize) > i && (n = !0));
                        for (o = s - 1; o >= 0; o -= 1) e[o] && !n && (a += 1, (r += e[o].swiperSlideSize) > i && (n = !0))
                    } else
                        for (o = s + 1; o < e.length; o += 1) t[o] - t[s] < i && (a += 1);
                    return a
                }, t.prototype.update = function () {
                    var e = this;
                    if (e && !e.destroyed) {
                        var t = e.snapGrid,
                            i = e.params;
                        i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : e.slideTo(("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slides.length - 1 : e.activeIndex, 0, !1, !0) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                    }

                    function s() {
                        var t = Math.min(Math.max(e.rtlTranslate ? -1 * e.translate : e.translate, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(t), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                }, t.prototype.changeDirection = function (e, t) {
                    void 0 === t && (t = !0);
                    var i = this.params.direction;
                    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e ? this : (this.$el.removeClass("" + this.params.containerModifierClass + i + " wp8-" + i).addClass("" + this.params.containerModifierClass + e), (m.isIE || m.isEdge) && (v.pointerEvents || v.prefixedPointerEvents) && this.$el.addClass(this.params.containerModifierClass + "wp8-" + e), this.params.direction = e, this.slides.each((function (t, i) {
                        "vertical" === e ? i.style.width = "" : i.style.height = ""
                    })), this.emit("changeDirection"), t && this.update(), this)
                }, t.prototype.init = function () {
                    this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.slideTo(this.params.loop ? this.params.initialSlide + this.loopedSlides : this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
                }, t.prototype.destroy = function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var i = this,
                        s = i.params,
                        a = i.$el,
                        r = i.$wrapperEl,
                        n = i.slides;
                    return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function (e) {
                        i.off(e)
                    })), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), c.deleteProps(i)), i.destroyed = !0, null)
                }, t.extendDefaults = function (e) {
                    c.extend($, e)
                }, Object.defineProperty(t, "extendedDefaults", {
                    get: function () {
                        return $
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t, "defaults", {
                    get: function () {
                        return k
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t, "Class", {
                    get: function () {
                        return f
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t, "$", {
                    get: function () {
                        return o
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(f),
            O = {
                name: "device",
                proto: {
                    device: y
                },
                static: {
                    device: y
                }
            },
            I = {
                name: "support",
                proto: {
                    support: v
                },
                static: {
                    support: v
                }
            },
            A = {
                name: "browser",
                proto: {
                    browser: m
                },
                static: {
                    browser: m
                }
            },
            B = {
                name: "resize",
                create: function () {
                    var e = this;
                    c.extend(e, {
                        resize: {
                            resizeHandler: function () {
                                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                            },
                            orientationChangeHandler: function () {
                                e && !e.destroyed && e.initialized && e.emit("orientationchange")
                            }
                        }
                    })
                },
                on: {
                    init: function () {
                        r.addEventListener("resize", this.resize.resizeHandler), r.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                    },
                    destroy: function () {
                        r.removeEventListener("resize", this.resize.resizeHandler), r.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                    }
                }
            },
            X = {
                func: r.MutationObserver || r.WebkitMutationObserver,
                attach: function (e, t) {
                    void 0 === t && (t = {});
                    var i = this,
                        s = new(0, X.func)((function (e) {
                            if (1 !== e.length) {
                                var t = function () {
                                    i.emit("observerUpdate", e[0])
                                };
                                r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0)
                            } else i.emit("observerUpdate", e[0])
                        }));
                    s.observe(e, {
                        attributes: void 0 === t.attributes || t.attributes,
                        childList: void 0 === t.childList || t.childList,
                        characterData: void 0 === t.characterData || t.characterData
                    }), i.observer.observers.push(s)
                },
                init: function () {
                    if (v.observer && this.params.observer) {
                        if (this.params.observeParents)
                            for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                        this.observer.attach(this.$el[0], {
                            childList: this.params.observeSlideChildren
                        }), this.observer.attach(this.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                },
                destroy: function () {
                    this.observer.observers.forEach((function (e) {
                        e.disconnect()
                    })), this.observer.observers = []
                }
            },
            Y = {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                },
                create: function () {
                    c.extend(this, {
                        observer: {
                            init: X.init.bind(this),
                            attach: X.attach.bind(this),
                            destroy: X.destroy.bind(this),
                            observers: []
                        }
                    })
                },
                on: {
                    init: function () {
                        this.observer.init()
                    },
                    destroy: function () {
                        this.observer.destroy()
                    }
                }
            },
            G = {
                lastScrollTime: c.now(),
                event: r.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
                    var e = "onwheel" in a;
                    if (!e) {
                        var t = a.createElement("div");
                        t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
                    }
                    return !e && a.implementation && a.implementation.hasFeature && !0 !== a.implementation.hasFeature("", "") && (e = a.implementation.hasFeature("Events.wheel", "3.0")), e
                }() ? "wheel" : "mousewheel",
                normalize: function (e) {
                    var t = 0,
                        i = 0,
                        s = 0,
                        a = 0;
                    return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: i,
                        pixelX: s,
                        pixelY: a
                    }
                },
                handleMouseEnter: function () {
                    this.mouseEntered = !0
                },
                handleMouseLeave: function () {
                    this.mouseEntered = !1
                },
                handle: function (e) {
                    var t = e,
                        i = this,
                        s = i.params.mousewheel;
                    if (!i.mouseEntered && !s.releaseOnEdges) return !0;
                    t.originalEvent && (t = t.originalEvent);
                    var a = 0,
                        n = i.rtlTranslate ? -1 : 1,
                        o = G.normalize(t);
                    if (s.forceToAxis)
                        if (i.isHorizontal()) {
                            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                            a = o.pixelX * n
                        } else {
                            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                            a = o.pixelY
                        }
                    else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
                    if (0 === a) return !0;
                    if (s.invert && (a = -a), i.params.freeMode) {
                        i.params.loop && i.loopFix();
                        var l = i.getTranslate() + a * s.sensitivity,
                            d = i.isBeginning,
                            h = i.isEnd;
                        if (l >= i.minTranslate() && (l = i.minTranslate()), l <= i.maxTranslate() && (l = i.maxTranslate()), i.setTransition(0), i.setTranslate(l), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!d && i.isBeginning || !h && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = c.nextTick((function () {
                                i.slideToClosest()
                            }), 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), l === i.minTranslate() || l === i.maxTranslate()) return !0
                    } else {
                        if (c.now() - i.mousewheel.lastScrollTime > 60)
                            if (a < 0)
                                if (i.isEnd && !i.params.loop || i.animating) {
                                    if (s.releaseOnEdges) return !0
                                } else i.slideNext(), i.emit("scroll", t);
                        else if (i.isBeginning && !i.params.loop || i.animating) {
                            if (s.releaseOnEdges) return !0
                        } else i.slidePrev(), i.emit("scroll", t);
                        i.mousewheel.lastScrollTime = (new r.Date).getTime()
                    }
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                },
                enable: function () {
                    if (!G.event) return !1;
                    if (this.mousewheel.enabled) return !1;
                    var e = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (e = o(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(G.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
                },
                disable: function () {
                    if (!G.event) return !1;
                    if (!this.mousewheel.enabled) return !1;
                    var e = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarged && (e = o(this.params.mousewheel.eventsTarged)), e.off(G.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
                }
            },
            V = {
                update: function () {
                    var e = this.rtl,
                        t = this.params.pagination;
                    if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var i, s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            a = this.pagination.$el,
                            r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                        if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                            var n, l, d = this.pagination.bullets,
                                h = void 0;
                            if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), h = ((l = (n = i - this.pagination.dynamicBulletIndex) + (Math.min(d.length, t.dynamicMainBullets) - 1)) + n) / 2), d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1) d.each((function (e, s) {
                                var a = o(s),
                                    r = a.index();
                                r === i && a.addClass(t.bulletActiveClass), t.dynamicBullets && (r >= n && r <= l && a.addClass(t.bulletActiveClass + "-main"), r === n && a.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), r === l && a.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                            }));
                            else if (d.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets) {
                                for (var u = d.eq(n), p = d.eq(l), c = n; c <= l; c += 1) d.eq(c).addClass(t.bulletActiveClass + "-main");
                                u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), p.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                            }
                            if (t.dynamicBullets) {
                                var v = Math.min(d.length, t.dynamicMainBullets + 4),
                                    m = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - h * this.pagination.bulletSize,
                                    f = e ? "right" : "left";
                                d.css(this.isHorizontal() ? f : "top", m + "px")
                            }
                        }
                        if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), a.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
                            var g;
                            g = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                            var b = (i + 1) / r,
                                w = 1,
                                T = 1;
                            "horizontal" === g ? w = b : T = b, a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + T + ")").transition(this.params.speed)
                        }
                        "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", this, a[0])) : this.emit("paginationUpdate", this, a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
                    }
                },
                render: function () {
                    var e = this.params.pagination;
                    if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var t = this.pagination.$el,
                            i = "";
                        if ("bullets" === e.type) {
                            for (var s = this.params.loop ? Math.ceil(((this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length) - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, a = 0; a < s; a += 1) i += e.renderBullet ? e.renderBullet.call(this, a, e.bulletClass) : "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                            t.html(i), this.pagination.bullets = t.find("." + e.bulletClass)
                        }
                        "fraction" === e.type && (i = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', t.html(i)), "progressbar" === e.type && (i = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', t.html(i)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                    }
                },
                init: function () {
                    var e = this,
                        t = e.params.pagination;
                    if (t.el) {
                        var i = o(t.el);
                        0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, (function (t) {
                            t.preventDefault();
                            var i = o(this).index() * e.params.slidesPerGroup;
                            e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                        })), c.extend(e.pagination, {
                            $el: i,
                            el: i[0]
                        }))
                    }
                },
                destroy: function () {
                    var e = this.params.pagination;
                    if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var t = this.pagination.$el;
                        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
                    }
                }
            },
            H = {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: function (e) {
                            return e
                        },
                        formatFractionTotal: function (e) {
                            return e
                        },
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                        clickableClass: "swiper-pagination-clickable",
                        lockClass: "swiper-pagination-lock"
                    }
                },
                create: function () {
                    c.extend(this, {
                        pagination: {
                            init: V.init.bind(this),
                            render: V.render.bind(this),
                            update: V.update.bind(this),
                            destroy: V.destroy.bind(this),
                            dynamicBulletIndex: 0
                        }
                    })
                },
                on: {
                    init: function () {
                        this.pagination.init(), this.pagination.render(), this.pagination.update()
                    },
                    activeIndexChange: function () {
                        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                    },
                    snapIndexChange: function () {
                        this.params.loop || this.pagination.update()
                    },
                    slidesLengthChange: function () {
                        this.params.loop && (this.pagination.render(), this.pagination.update())
                    },
                    snapGridLengthChange: function () {
                        this.params.loop || (this.pagination.render(), this.pagination.update())
                    },
                    destroy: function () {
                        this.pagination.destroy()
                    },
                    click: function (e) {
                        if (this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !o(e.target).hasClass(this.params.pagination.bulletClass)) {
                            var t = this.pagination.$el.hasClass(this.params.pagination.hiddenClass);
                            this.emit(!0 === t ? "paginationShow" : "paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
                        }
                    }
                }
            },
            F = {
                setTranslate: function () {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var e = this.scrollbar,
                            t = e.dragSize,
                            i = e.trackSize,
                            s = e.$dragEl,
                            a = e.$el,
                            r = this.params.scrollbar,
                            n = t,
                            o = (i - t) * this.progress;
                        this.rtlTranslate ? (o = -o) > 0 ? (n = t - o, o = 0) : -o + t > i && (n = i + o) : o < 0 ? (n = t + o, o = 0) : o + t > i && (n = i - o), this.isHorizontal() ? (s.transform(v.transforms3d ? "translate3d(" + o + "px, 0, 0)" : "translateX(" + o + "px)"), s[0].style.width = n + "px") : (s.transform(v.transforms3d ? "translate3d(0px, " + o + "px, 0)" : "translateY(" + o + "px)"), s[0].style.height = n + "px"), r.hide && (clearTimeout(this.scrollbar.timeout), a[0].style.opacity = 1, this.scrollbar.timeout = setTimeout((function () {
                            a[0].style.opacity = 0, a.transition(400)
                        }), 1e3))
                    }
                },
                setTransition: function (e) {
                    this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
                },
                updateSize: function () {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var e = this.scrollbar,
                            t = e.$dragEl,
                            i = e.$el;
                        t[0].style.width = "", t[0].style.height = "";
                        var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                            r = this.size / this.virtualSize,
                            n = r * (a / this.size);
                        s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), c.extend(e, {
                            trackSize: a,
                            divider: r,
                            moveDivider: n,
                            dragSize: s
                        }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                    }
                },
                getPointerPosition: function (e) {
                    return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
                },
                setDragPosition: function (e) {
                    var t, i = this.scrollbar,
                        s = this.rtlTranslate,
                        a = i.$el,
                        r = i.dragSize,
                        n = i.trackSize,
                        o = i.dragStartPos;
                    t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                    var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                    this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
                },
                onDragStart: function (e) {
                    var t = this.params.scrollbar,
                        i = this.scrollbar,
                        s = this.$wrapperEl,
                        a = i.$el,
                        r = i.$dragEl;
                    this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.emit("scrollbarDragStart", e)
                },
                onDragMove: function (e) {
                    var t = this.scrollbar,
                        i = this.$wrapperEl,
                        s = t.$el,
                        a = t.$dragEl;
                    this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
                },
                onDragEnd: function (e) {
                    var t = this.params.scrollbar,
                        i = this.scrollbar.$el;
                    this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = c.nextTick((function () {
                        i.css("opacity", 0), i.transition(400)
                    }), 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
                },
                enableDraggable: function () {
                    if (this.params.scrollbar.el) {
                        var e = this.touchEventsTouch,
                            t = this.touchEventsDesktop,
                            i = this.params,
                            s = this.scrollbar.$el[0],
                            r = !(!v.passiveListener || !i.passiveListeners) && {
                                passive: !1,
                                capture: !1
                            },
                            n = !(!v.passiveListener || !i.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        v.touch ? (s.addEventListener(e.start, this.scrollbar.onDragStart, r), s.addEventListener(e.move, this.scrollbar.onDragMove, r), s.addEventListener(e.end, this.scrollbar.onDragEnd, n)) : (s.addEventListener(t.start, this.scrollbar.onDragStart, r), a.addEventListener(t.move, this.scrollbar.onDragMove, r), a.addEventListener(t.end, this.scrollbar.onDragEnd, n))
                    }
                },
                disableDraggable: function () {
                    if (this.params.scrollbar.el) {
                        var e = this.touchEventsTouch,
                            t = this.touchEventsDesktop,
                            i = this.params,
                            s = this.scrollbar.$el[0],
                            r = !(!v.passiveListener || !i.passiveListeners) && {
                                passive: !1,
                                capture: !1
                            },
                            n = !(!v.passiveListener || !i.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                        v.touch ? (s.removeEventListener(e.start, this.scrollbar.onDragStart, r), s.removeEventListener(e.move, this.scrollbar.onDragMove, r), s.removeEventListener(e.end, this.scrollbar.onDragEnd, n)) : (s.removeEventListener(t.start, this.scrollbar.onDragStart, r), a.removeEventListener(t.move, this.scrollbar.onDragMove, r), a.removeEventListener(t.end, this.scrollbar.onDragEnd, n))
                    }
                },
                init: function () {
                    if (this.params.scrollbar.el) {
                        var e = this.scrollbar,
                            t = this.$el,
                            i = this.params.scrollbar,
                            s = o(i.el);
                        this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
                        var a = s.find("." + this.params.scrollbar.dragClass);
                        0 === a.length && (a = o('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(a)), c.extend(e, {
                            $el: s,
                            el: s[0],
                            $dragEl: a,
                            dragEl: a[0]
                        }), i.draggable && e.enableDraggable()
                    }
                },
                destroy: function () {
                    this.scrollbar.disableDraggable()
                }
            },
            N = {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag"
                    }
                },
                create: function () {
                    c.extend(this, {
                        scrollbar: {
                            init: F.init.bind(this),
                            destroy: F.destroy.bind(this),
                            updateSize: F.updateSize.bind(this),
                            setTranslate: F.setTranslate.bind(this),
                            setTransition: F.setTransition.bind(this),
                            enableDraggable: F.enableDraggable.bind(this),
                            disableDraggable: F.disableDraggable.bind(this),
                            setDragPosition: F.setDragPosition.bind(this),
                            getPointerPosition: F.getPointerPosition.bind(this),
                            onDragStart: F.onDragStart.bind(this),
                            onDragMove: F.onDragMove.bind(this),
                            onDragEnd: F.onDragEnd.bind(this),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null
                        }
                    })
                },
                on: {
                    init: function () {
                        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                    },
                    update: function () {
                        this.scrollbar.updateSize()
                    },
                    resize: function () {
                        this.scrollbar.updateSize()
                    },
                    observerUpdate: function () {
                        this.scrollbar.updateSize()
                    },
                    setTranslate: function () {
                        this.scrollbar.setTranslate()
                    },
                    setTransition: function (e) {
                        this.scrollbar.setTransition(e)
                    },
                    destroy: function () {
                        this.scrollbar.destroy()
                    }
                }
            },
            W = {
                getDistanceBetweenTouches: function (e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageY,
                        i = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(e.targetTouches[1].pageX - e.targetTouches[0].pageX, 2) + Math.pow(i - t, 2))
                },
                onGestureStart: function (e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        s = i.gesture;
                    if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !v.gestures) {
                        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                        i.fakeGestureTouched = !0, s.scaleStart = W.getDistanceBetweenTouches(e)
                    }
                    s.$slideEl && s.$slideEl.length || (s.$slideEl = o(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + t.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), this.zoom.isScaling = !0) : s.$imageEl = void 0
                },
                onGestureChange: function (e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        s = i.gesture;
                    if (!v.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        i.fakeGestureMoved = !0, s.scaleMove = W.getDistanceBetweenTouches(e)
                    }
                    s.$imageEl && 0 !== s.$imageEl.length && (i.scale = v.gestures ? e.scale * i.currentScale : s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                },
                onGestureEnd: function (e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        s = i.gesture;
                    if (!v.gestures) {
                        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !y.android) return;
                        i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                    }
                    s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
                },
                onTouchStart: function (e) {
                    var t = this.zoom,
                        i = t.gesture,
                        s = t.image;
                    i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (y.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                },
                onTouchMove: function (e) {
                    var t = this.zoom,
                        i = t.gesture,
                        s = t.image,
                        a = t.velocity;
                    if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = c.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = c.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                        var r = s.width * t.scale,
                            n = s.height * t.scale;
                        if (!(r < i.slideWidth && n < i.slideHeight)) {
                            if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                                if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                                if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                            }
                            e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function () {
                    var e = this.zoom,
                        t = e.gesture,
                        i = e.image,
                        s = e.velocity;
                    if (t.$imageEl && 0 !== t.$imageEl.length) {
                        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                        i.isTouched = !1, i.isMoved = !1;
                        var a = 300,
                            r = 300,
                            n = i.currentX + s.x * a,
                            o = i.currentY + s.y * r;
                        0 !== s.x && (a = Math.abs((n - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((o - i.currentY) / s.y));
                        var l = Math.max(a, r);
                        i.currentX = n, i.currentY = o;
                        var d = i.height * e.scale;
                        i.minX = Math.min(t.slideWidth / 2 - i.width * e.scale / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - d / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(l).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function () {
                    var e = this.zoom,
                        t = e.gesture;
                    t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
                },
                toggle: function (e) {
                    var t = this.zoom;
                    t.scale && 1 !== t.scale ? t.out() : t.in(e)
                },
                in: function (e) {
                    var t, i, s, a, r, n, l, d, h, u, p, c, v, m = this.zoom,
                        f = this.params.zoom,
                        g = m.gesture,
                        b = m.image;
                    g.$slideEl || (g.$slideEl = this.clickedSlide ? o(this.clickedSlide) : this.slides.eq(this.activeIndex), g.$imageEl = g.$slideEl.find("img, svg, canvas"), g.$imageWrapEl = g.$imageEl.parent("." + f.containerClass)), g.$imageEl && 0 !== g.$imageEl.length && (g.$slideEl.addClass("" + f.zoomedSlideClass), void 0 === b.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = b.touchesStart.x, i = b.touchesStart.y), m.scale = g.$imageWrapEl.attr("data-swiper-zoom") || f.maxRatio, m.currentScale = g.$imageWrapEl.attr("data-swiper-zoom") || f.maxRatio, e ? (c = g.$slideEl[0].offsetWidth, v = g.$slideEl[0].offsetHeight, s = g.$slideEl.offset().left + c / 2 - t, a = g.$slideEl.offset().top + v / 2 - i, l = g.$imageEl[0].offsetHeight * m.scale, d = Math.min(c / 2 - g.$imageEl[0].offsetWidth * m.scale / 2, 0), h = Math.min(v / 2 - l / 2, 0), (r = s * m.scale) < d && (r = d), r > (u = -d) && (r = u), (n = a * m.scale) < h && (n = h), n > (p = -h) && (n = p)) : (r = 0, n = 0), g.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), g.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + m.scale + ")"))
                },
                out: function () {
                    var e = this.zoom,
                        t = this.params.zoom,
                        i = e.gesture;
                    i.$slideEl || (i.$slideEl = this.clickedSlide ? o(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
                },
                enable: function () {
                    var e = this.zoom;
                    if (!e.enabled) {
                        e.enabled = !0;
                        var t = !("touchstart" !== this.touchEvents.start || !v.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        v.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
                    }
                },
                disable: function () {
                    var e = this.zoom;
                    if (e.enabled) {
                        this.zoom.enabled = !1;
                        var t = !("touchstart" !== this.touchEvents.start || !v.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        v.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
                    }
                }
            },
            R = {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                },
                create: function () {
                    var e = this,
                        t = {
                            enabled: !1,
                            scale: 1,
                            currentScale: 1,
                            isScaling: !1,
                            gesture: {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3
                            },
                            image: {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {}
                            },
                            velocity: {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0
                            }
                        };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function (i) {
                        t[i] = W[i].bind(e)
                    })), c.extend(e, {
                        zoom: t
                    });
                    var i = 1;
                    Object.defineProperty(e.zoom, "scale", {
                        get: function () {
                            return i
                        },
                        set: function (t) {
                            i !== t && e.emit("zoomChange", t, e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0, e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0), i = t
                        }
                    })
                },
                on: {
                    init: function () {
                        this.params.zoom.enabled && this.zoom.enable()
                    },
                    destroy: function () {
                        this.zoom.disable()
                    },
                    touchStart: function (e) {
                        this.zoom.enabled && this.zoom.onTouchStart(e)
                    },
                    touchEnd: function (e) {
                        this.zoom.enabled && this.zoom.onTouchEnd(e)
                    },
                    doubleTap: function (e) {
                        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                    },
                    transitionEnd: function () {
                        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                    }
                }
            },
            j = {
                run: function () {
                    var e = this,
                        t = e.slides.eq(e.activeIndex),
                        i = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = c.nextTick((function () {
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                    }), i)
                },
                start: function () {
                    return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
                },
                stop: function () {
                    return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
                },
                pause: function (e) {
                    this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
                }
            },
            q = {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1
                    }
                },
                create: function () {
                    var e = this;
                    c.extend(e, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: j.run.bind(e),
                            start: j.start.bind(e),
                            stop: j.stop.bind(e),
                            pause: j.pause.bind(e),
                            onTransitionEnd: function (t) {
                                e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                            }
                        }
                    })
                },
                on: {
                    init: function () {
                        this.params.autoplay.enabled && this.autoplay.start()
                    },
                    beforeTransitionStart: function (e, t) {
                        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                    },
                    sliderFirstMove: function () {
                        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                    },
                    destroy: function () {
                        this.autoplay.running && this.autoplay.stop()
                    }
                }
            },
            U = [O, I, A, B, Y];
        void 0 === D.use && (D.use = D.Class.use, D.installModule = D.Class.installModule), D.use(U), D.use([H, N, q, R])
    }
}]);
