(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    1538: function(e, t, a) {
        Promise.resolve().then(a.bind(a, 8232))
    },
    8232: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, {
            default: function() {
                return er
            }
        });
        var s = a(7437)
          , r = a(2265);
        function n(e) {
            let {currentCommand: t, setCurrentCommand: a, onEnter: r, inputRef: n} = e;
            return (0,
            s.jsxs)("div", {
                className: "flex items-center",
                children: [(0,
                s.jsx)("span", {
                    className: "text-[#EEEDF0] mr-2",
                    children: "19/Vzilla C:\\Users\\User>"
                }), (0,
                s.jsx)("input", {
                    ref: n,
                    type: "text",
                    value: t,
                    onChange: e => a(e.target.value),
                    onKeyDown: e => {
                        "Enter" === e.key && r(t)
                    }
                    ,
                    className: "bg-transparent text-[#EEEDF0] focus:outline-none flex-grow"
                })]
            })
        }
        function o(e) {
            let {content: t} = e;
            return "string" == typeof t ? t.startsWith("PSCat C:\\Users\\User>") ? (0,
            s.jsx)("div", {
                className: "mb-1 text-white",
                children: t
            }) : (0,
            s.jsx)("div", {
                className: "mb-1 pl-4 text-white",
                children: t
            }) : "link" === t.type ? (0,
            s.jsxs)("div", {
                className: "mb-1 pl-4 text-white",
                children: [t.content, ": ", (0,
                s.jsx)("a", {
                    href: t.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-blue-400 hover:underline",
                    children: t.url
                })]
            }) : null
        }
        var l = a(3145);
        a(3079);
        var i = a(2119)
          , c = (0,
        i.$)("30567cc3fb7302c75c4d0277fb3a2c5ddf3f6146")
          , d = (0,
        i.$)("6a6db8a59499cf8e7d06b784a31e95eccf4d9d1d")
          , u = (0,
        i.$)("d2efd12d01fbf1b7e3e654455e78b0b03e682124");
        function m(e) {
            return /^@?[a-zA-Z0-9_]{5,32}$/.test(e)
        }
        (0,
        a(3777).eI)("https://lxctizmehjfxkxvvahxb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4Y3Rpem1laGpmeGt4dnZhaHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0NDgzNzMsImV4cCI6MjA0ODAyNDM3M30.pdU-l4Igh_SIZWbqEXqGNV6IlvZ8-4wn7FiCzmMllqU");
        var h = a(4182)
          , f = a(1607)
          , p = a(1994)
          , b = a(3335);
        function x() {
            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
            return (0,
            b.m6)((0,
            p.W)(t))
        }
        let g = h.fC;
        h.xz;
        let y = h.h_;
        h.x8;
        let v = r.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)(h.aV, {
                ref: t,
                className: x("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", a),
                ...r
            })
        }
        );
        v.displayName = h.aV.displayName;
        let w = r.forwardRef( (e, t) => {
            let {className: a, children: r, ...n} = e;
            return (0,
            s.jsxs)(y, {
                children: [(0,
                s.jsx)(v, {}), (0,
                s.jsxs)(h.VY, {
                    ref: t,
                    className: x("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", a),
                    ...n,
                    children: [r, (0,
                    s.jsxs)(h.x8, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [(0,
                        s.jsx)(f.Z, {
                            className: "h-4 w-4"
                        }), (0,
                        s.jsx)("span", {
                            className: "sr-only",
                            children: "Close"
                        })]
                    })]
                })]
            })
        }
        );
        w.displayName = h.VY.displayName;
        let j = e => {
            let {className: t, ...a} = e;
            return (0,
            s.jsx)("div", {
                className: x("flex flex-col space-y-1.5 text-center sm:text-left", t),
                ...a
            })
        }
        ;
        j.displayName = "DialogHeader";
        let N = e => {
            let {className: t, ...a} = e;
            return (0,
            s.jsx)("div", {
                className: x("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t),
                ...a
            })
        }
        ;
        N.displayName = "DialogFooter";
        let k = r.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)(h.Dx, {
                ref: t,
                className: x("text-lg font-semibold leading-none tracking-tight", a),
                ...r
            })
        }
        );
        k.displayName = h.Dx.displayName;
        let C = r.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)(h.dk, {
                ref: t,
                className: x("text-sm text-muted-foreground", a),
                ...r
            })
        }
        );
        C.displayName = h.dk.displayName;
        var S = a(535);
        let E = (0,
        S.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline"
                },
                size: {
                    default: "h-10 px-4 py-2",
                    sm: "h-9 rounded-md px-3",
                    lg: "h-11 rounded-md px-8",
                    icon: "h-10 w-10"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        })
          , A = r.forwardRef( (e, t) => {
            let {className: a, variant: r, size: n, asChild: o=!1, ...l} = e
              , i = o ? Slot : "button";
            return (0,
            s.jsx)(i, {
                className: x(E({
                    variant: r,
                    size: n,
                    className: a
                })),
                ref: t,
                ...l
            })
        }
        );
        A.displayName = "Button";
        let M = [{
            x: 10,
            y: 10
        }]
          , T = {
            x: 5,
            y: 5
        }
          , I = {
            x: 1,
            y: 0
        };
        var D = e => {
            let {isOpen: t, onClose: a, onGameOver: n} = e
              , [o,l] = (0,
            r.useState)(M)
              , [i,c] = (0,
            r.useState)(T)
              , [d,u] = (0,
            r.useState)(I)
              , [m,h] = (0,
            r.useState)(!1)
              , [f,p] = (0,
            r.useState)(0)
              , b = (0,
            r.useRef)(null)
              , x = (0,
            r.useCallback)( () => {
                l(M),
                c(T),
                u(I),
                h(!1),
                p(0)
            }
            , [])
              , y = (0,
            r.useCallback)( () => {
                let e;
                do
                    e = {
                        x: Math.floor(20 * Math.random()),
                        y: Math.floor(20 * Math.random())
                    };
                while (o.some(t => t.x === e.x && t.y === e.y));
                c(e)
            }
            , [o])
              , v = (0,
            r.useCallback)( () => {
                l(e => {
                    let t = [...e]
                      , a = {
                        ...t[0]
                    };
                    return (a.x += d.x,
                    a.y += d.y,
                    a.x < 0 || a.x >= 20 || a.y < 0 || a.y >= 20 || t.some(e => e.x === a.x && e.y === a.y)) ? (h(!0),
                    e) : (t.unshift(a),
                    a.x === i.x && a.y === i.y ? (p(e => e + 1),
                    y()) : t.pop(),
                    t)
                }
                )
            }
            , [d, i, y])
              , N = (0,
            r.useCallback)(e => {
                if (t)
                    switch (e.preventDefault(),
                    e.key) {
                    case "ArrowUp":
                        u(e => 0 === e.y ? {
                            x: 0,
                            y: -1
                        } : e);
                        break;
                    case "ArrowDown":
                        u(e => 0 === e.y ? {
                            x: 0,
                            y: 1
                        } : e);
                        break;
                    case "ArrowLeft":
                        u(e => 0 === e.x ? {
                            x: -1,
                            y: 0
                        } : e);
                        break;
                    case "ArrowRight":
                        u(e => 0 === e.x ? {
                            x: 1,
                            y: 0
                        } : e)
                    }
            }
            , [t]);
            (0,
            r.useEffect)( () => (window.addEventListener("keydown", N),
            () => window.removeEventListener("keydown", N)), [N]),
            (0,
            r.useEffect)( () => (t && !m ? b.current = window.setInterval(v, 100) : b.current && clearInterval(b.current),
            () => {
                b.current && clearInterval(b.current)
            }
            ), [t, m, v]),
            (0,
            r.useEffect)( () => {
                m && n(f)
            }
            , [m, f, n]);
            let C = (0,
            r.useCallback)( () => {
                x(),
                a()
            }
            , [a, x]);
            return (0,
            s.jsx)(g, {
                open: t,
                onOpenChange: C,
                children: (0,
                s.jsxs)(w, {
                    className: "sm:max-w-[425px] bg-[#012456] text-white",
                    children: [(0,
                    s.jsx)(j, {
                        children: (0,
                        s.jsx)(k, {
                            children: "Snake Game"
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: "w-[300px] h-[300px] border-2 border-white relative bg-[#001234]",
                        style: {
                            width: 300,
                            height: 300
                        },
                        children: [o.map( (e, t) => (0,
                        s.jsx)("div", {
                            className: "absolute bg-green-500 rounded-sm",
                            style: {
                                left: "".concat(15 * e.x, "px"),
                                top: "".concat(15 * e.y, "px"),
                                width: "".concat(15, "px"),
                                height: "".concat(15, "px")
                            }
                        }, t)), (0,
                        s.jsx)("div", {
                            className: "absolute bg-red-500 rounded-full",
                            style: {
                                left: "".concat(15 * i.x, "px"),
                                top: "".concat(15 * i.y, "px"),
                                width: "".concat(15, "px"),
                                height: "".concat(15, "px")
                            }
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "mt-4 text-lg font-bold",
                        children: ["Score: ", f]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex justify-between mt-4",
                        children: [(0,
                        s.jsx)(A, {
                            onClick: C,
                            variant: "destructive",
                            children: "Close"
                        }), m && (0,
                        s.jsx)(A, {
                            onClick: x,
                            variant: "default",
                            children: "Restart"
                        })]
                    })]
                })
            })
        }
        ;
        let _ = 0
          , R = new Map
          , z = e => {
            if (R.has(e))
                return;
            let t = setTimeout( () => {
                R.delete(e),
                O({
                    type: "REMOVE_TOAST",
                    toastId: e
                })
            }
            , 1e6);
            R.set(e, t)
        }
          , P = (e, t) => {
            switch (t.type) {
            case "ADD_TOAST":
                return {
                    ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, 1)
                };
            case "UPDATE_TOAST":
                return {
                    ...e,
                    toasts: e.toasts.map(e => e.id === t.toast.id ? {
                        ...e,
                        ...t.toast
                    } : e)
                };
            case "DISMISS_TOAST":
                {
                    let {toastId: a} = t;
                    return a ? z(a) : e.toasts.forEach(e => {
                        z(e.id)
                    }
                    ),
                    {
                        ...e,
                        toasts: e.toasts.map(e => e.id === a || void 0 === a ? {
                            ...e,
                            open: !1
                        } : e)
                    }
                }
            case "REMOVE_TOAST":
                if (void 0 === t.toastId)
                    return {
                        ...e,
                        toasts: []
                    };
                return {
                    ...e,
                    toasts: e.toasts.filter(e => e.id !== t.toastId)
                }
            }
        }
          , U = []
          , F = {
            toasts: []
        };
        function O(e) {
            F = P(F, e),
            U.forEach(e => {
                e(F)
            }
            )
        }
        function H(e) {
            let {...t} = e
              , a = (_ = (_ + 1) % Number.MAX_SAFE_INTEGER).toString()
              , s = () => O({
                type: "DISMISS_TOAST",
                toastId: a
            });
            return O({
                type: "ADD_TOAST",
                toast: {
                    ...t,
                    id: a,
                    open: !0,
                    onOpenChange: e => {
                        e || s()
                    }
                }
            }),
            {
                id: a,
                dismiss: s,
                update: e => O({
                    type: "UPDATE_TOAST",
                    toast: {
                        ...e,
                        id: a
                    }
                })
            }
        }
        var W = a(4230);
        let V = W.zt
          , B = r.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)(W.l_, {
                ref: t,
                className: x("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", a),
                ...r
            })
        }
        );
        B.displayName = W.l_.displayName;
        let L = (0,
        S.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
            variants: {
                variant: {
                    default: "border bg-background text-foreground",
                    destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
                }
            },
            defaultVariants: {
                variant: "default"
            }
        })
          , G = r.forwardRef( (e, t) => {
            let {className: a, variant: r, ...n} = e;
            return (0,
            s.jsx)(W.fC, {
                ref: t,
                className: x(L({
                    variant: r
                }), a),
                ...n
            })
        }
        );
        G.displayName = W.fC.displayName,
        r.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)(W.aU, {
                ref: t,
                className: x("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", a),
                ...r
            })
        }
        ).displayName = W.aU.displayName;
        let Y = r.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)(W.x8, {
                ref: t,
                className: x("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", a),
                "toast-close": "",
                ...r,
                children: (0,
                s.jsx)(f.Z, {
                    className: "h-4 w-4"
                })
            })
        }
        );
        Y.displayName = W.x8.displayName;
        let q = r.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)(W.Dx, {
                ref: t,
                className: x("text-sm font-semibold", a),
                ...r
            })
        }
        );
        q.displayName = W.Dx.displayName;
        let J = r.forwardRef( (e, t) => {
            let {className: a, ...r} = e;
            return (0,
            s.jsx)(W.dk, {
                ref: t,
                className: x("text-sm opacity-90", a),
                ...r
            })
        }
        );
        function X() {
            let {toasts: e} = function() {
                let[e,t] = r.useState(F);
                return r.useEffect( () => (U.push(t),
                () => {
                    let e = U.indexOf(t);
                    e > -1 && U.splice(e, 1)
                }
                ), [e]),
                {
                    ...e,
                    toast: H,
                    dismiss: e => O({
                        type: "DISMISS_TOAST",
                        toastId: e
                    })
                }
            }();
            return (0,
            s.jsxs)(V, {
                children: [e.map(function(e) {
                    let {id: t, title: a, description: r, action: n, ...o} = e;
                    return (0,
                    s.jsxs)(G, {
                        ...o,
                        children: [(0,
                        s.jsxs)("div", {
                            className: "grid gap-1",
                            children: [a && (0,
                            s.jsx)(q, {
                                children: a
                            }), r && (0,
                            s.jsx)(J, {
                                children: r
                            })]
                        }), n, (0,
                        s.jsx)(Y, {})]
                    }, t)
                }), (0,
                s.jsx)(B, {})]
            })
        }
        J.displayName = W.dk.displayName;
        let Z = () => {
            let e = (0,
            r.useRef)(null);
            return (0,
            r.useEffect)( () => {
                let t = e.current;
                if (!t)
                    return;
                let a = t.getContext("2d");
                if (!a)
                    return;
                t.width = window.innerWidth,
                t.height = window.innerHeight;
                let s = [];
                for (let e = 0; e < 100; e++)
                    s.push({
                        x: Math.random() * t.width,
                        y: Math.random() * t.height,
                        radius: 4 * Math.random() + 1,
                        speed: 3 * Math.random() + 1
                    });
                !function e() {
                    for (let e of (a.clearRect(0, 0, t.width, t.height),
                    a.fillStyle = "white",
                    a.beginPath(),
                    s))
                        a.moveTo(e.x, e.y),
                        a.arc(e.x, e.y, e.radius, 0, 2 * Math.PI, !0);
                    a.fill(),
                    function() {
                        for (let e of s)
                            e.y += e.speed,
                            e.x += 2 * Math.sin(e.y / 30),
                            e.y > t.height && (e.y = 0,
                            e.x = Math.random() * t.width)
                    }(),
                    requestAnimationFrame(e)
                }();
                let r = () => {
                    t.width = window.innerWidth,
                    t.height = window.innerHeight
                }
                ;
                return window.addEventListener("resize", r),
                () => {
                    window.removeEventListener("resize", r)
                }
            }
            , []),
            (0,
            s.jsx)("canvas", {
                ref: e,
                className: "absolute inset-0 pointer-events-none z-50",
                "aria-hidden": "true"
            })
        }
        const Q = [
            {
            src: "1.png",
            alt: "Take All You Want Meme"
        },
            {
            src: "2.png",
            alt: "Take All You Want Meme"
        }, {
            src: "3.png",
            alt: "ats with Guns Meme"
        }, {
            src: "4.png",
            alt: "Creation of  Meme"
        }, {
            src: "5.png",
            alt: "Feed the  Meme"
        }, {
            src: "6.png",
            alt: "Distracted Boyfriend  Meme"
        }, {
            src: "7.png",
            alt: " Terminal Art"
        }, {
            src: "8.png",
            alt: "Laser Meme"
        }, {
            src: "9.png",
            alt: "Santa Meme"
        }, {
            src: "god.png",
            alt: "The Scream  Meme"
        }]
          , K = "Available commands: social, meme, feed, pet, rave, rage, stop, clear, exit, leaderboard, username, connect, zillagame, santa, ca, buy"
          , $ = e => e > 0 && e % 10 == 0
          , ee = e => 0 === e.length ? ["No entries yet. Start feeding the cat to get on the leaderboard!"] : e.map( (e, t) => "- ".concat(t + 1, " | ").concat(e.username || "Anonymous", " | ").concat(e.score));
        function et(e) {
            let {initialFeedCount: t, initialUsername: a, onConnectUsername: i} = e
              , [h,f] = (0,
            r.useState)([])
              , [p,b] = (0,
            r.useState)("")
              , [x,g] = (0,
            r.useState)(t)
              , [y,v] = (0,
            r.useState)(!1)
              , [w,j] = (0,
            r.useState)(!1)
              , [N,k] = (0,
            r.useState)("x.png")
              , [C,S] = (0,
            r.useState)(null)
              , [E,A] = (0,
            r.useState)(!1)
              , [M,T] = (0,
            r.useState)([])
              , [I,_] = (0,
            r.useState)(null)
              , [R,z] = (0,
            r.useState)(!1)
              , [P,U] = (0,
            r.useState)(!1)
              , [F,O] = (0,
            r.useState)(!1)
              , [H] = (0,
            r.useState)("CA HERE")
              , W = (0,
            r.useRef)(null)
              , V = (0,
            r.useRef)(null)
              , B = (0,
            r.useRef)(0)
              , L = (0,
            r.useRef)(Date.now())
              , G = (0,
            r.useRef)(null)
              , {toast: Y} = function() {
                let[e,t] = (0,
                r.useState)([]);
                return {
                    toast: (0,
                    r.useCallback)(e => {
                        let {title: a, description: s, variant: r="default"} = e;
                        t(e => [...e, {
                            title: a,
                            description: s,
                            variant: r
                        }]),
                        setTimeout( () => {
                            t(e => e.slice(1))
                        }
                        , 3e3)
                    }
                    , []),
                    toasts: e
                }
            }()
              , q = (0,
            r.useCallback)(async () => {
                try {
                    let e = await d();
                    console.log("Fetched leaderboard entries:", e),
                    T(e)
                } catch (e) {
                    console.error("Error fetching leaderboard:", e)
                }
            }
            , []);
            (0,
            r.useEffect)( () => {
                q()
            }
            , [q]),
            (0,
            r.useEffect)( () => {
                W.current && (W.current.scrollTop = W.current.scrollHeight)
            }
            , [h]),
            (0,
            r.useEffect)( () => {
                let e = e => {
                    V.current && !e.defaultPrevented && e.target === document.body && V.current.focus()
                }
                ;
                return window.addEventListener("keydown", e),
                () => {
                    window.removeEventListener("keydown", e)
                }
            }
            , []),
            (0,
            r.useEffect)( () => {
                I && u(I.username, x).catch(e => {
                    console.error("Failed to update score:", e)
                }
                )
            }
            , [x, I]),
            (0,
            r.useEffect)( () => {
                (async () => {
                    if (a) {
                        let e = (await d()).find(e => e.username === a);
                        e && (_({
                            id: e.username,
                            username: e.username,
                            score: e.score
                        }),
                        g(e.score))
                    }
                }
                )()
            }
            , [a]),
            (0,
            r.useEffect)( () => {
                localStorage.setItem("feedCount", x.toString())
            }
            , [x]),
            (0,
            r.useEffect)( () => {
                f([K]);
                let e = setInterval( () => {
                    U(!0),
                    setTimeout( () => U(!1), 3e3)
                }
                , 3e4);
                return () => clearInterval(e)
            }
            , []);
            let J = (0,
            r.useCallback)( () => {
                v(!0),
                f(e => [...e, "The zilla rage... The screen shakes!"]),
                W.current && (W.current.classList.add("shake-animation"),
                setTimeout( () => {
                    var e;
                    null === (e = W.current) || void 0 === e || e.classList.remove("shake-animation"),
                    v(!1)
                }
                , 1e3))
            }
            , [])
              , et = (0,
            r.useCallback)(async e => {
                J(),
                e % 100 == 0 ? (j(!0),
                f(t => [...t, "Wow! ".concat(e, " feeds! Time for a rave party!")]),
                setTimeout( () => {
                    j(!1),
                    f(e => [...e, "Rave party over. Back to normal operations."])
                }
                , 5e3)) : f(t => [...t, "Milestone reached: ".concat(e, " feeds!")]);
                try {
                    await q()
                } catch (e) {
                    console.error("Failed to update leaderboard:", e)
                }
            }
            , [J, q])
              , ea = (0,
            r.useCallback)( () => {
                let e = Date.now();
                e - L.current >= 6e4 && (B.current = 0),
                B.current < 60 ? (g(e => {
                    let t = e + 1;
                    return $(t) && et(t),
                    t
                }
                ),
                B.current++,
                L.current = e,
                k("eat.png"),
                f(e => [...e, "Feeding zilla... RAAAAH!"]),
                setTimeout( () => k("eat.png"), 3e3)) : f(e => [...e, "Rate limit reached! You can only feed the cat 60 times per minute."])
            }
            , [et])
              , es = (0,
            r.useCallback)(async e => {
                if (m(e)) {
                    let t = e.startsWith("@") ? e : "@".concat(e)
                      , a = await c(t, x);
                    a ? (_({
                        id: a.username,
                        username: a.username,
                        score: a.score
                    }),
                    g(a.score),
                    localStorage.setItem("username", a.username),
                    f(e => [...e, "Successfully connected as ".concat(a.username)])) : f(e => [...e, "Failed to connect. Please try again."])
                } else
                    f(e => [...e, "Invalid Twitter handle. Please use a valid handle (5-32 characters, letters, numbers, and underscores only)."])
            }
            , [x])
              , er = (0,
            r.useCallback)(e => {
                f(t => [...t, "PSCat C:\\Users\\".concat(I ? "".concat(I.username.slice(0, 6), "...").concat(I.username.slice(-4)) : "Anonymous", "> ").concat(e)]),
                b("");
                let[t,...a] = e.toLowerCase().split(" ");
                switch (t) {
                case "social":
                    f(e => [...e, {
                        type: "link",
                        content: "Twitter",
                        url: "https://x.com/ZILLATRONcoin"
                    }]);
                    break;
                case "meme":
                    S(Q[Math.floor(Math.random() * Q.length)]),
                    A(!0),
                    f(e => [...e, "Displaying a random meme..."]),
                    setTimeout( () => A(!1), 3e3);
                    break;
                case "feed":
                    ea();
                    break;
                case "pet":
                    v(!0),
                    f(e => [...e, "Petting the zilla... RAW!"]),
                    setTimeout( () => v(!1), 3e3);
                    break;
                case "rave":
                    j(!0),
                    f(e => [...e, 'Let the rave begin! Use "stop" to end the party.']);
                    break;
                case "rage":
                    J(),
                    G.current && G.current.play();
                    break;
                case "stop":
                    v(!1),
                    j(!1),
                    O(!1),
                    k("god.png"),
                    f(e => [...e, "All animations stopped."]);
                    break;
                case "clear":
                    f([]);
                    break;
                case "exit":
                    f(e => [...e, "Meow! This browser window will stay open."]);
                    break;
                case "leaderboard":
                    q().then( () => {
                        let e = ee(M);
                        f(t => [...t, "Current Leaderboard:", ...e])
                    }
                    );
                    break;
                case "username":
                    I ? f(e => [...e, "Your username: ".concat(I.username)]) : f(e => [...e, 'No username connected. Use the "connect" command to set your username.']);
                    break;
                case "connect":
                    I ? f(e => [...e, "Username already connected."]) : a.length > 0 ? es(a[0]) : (i(),
                    f(e => [...e, "Opening username connection modal..."]));
                    break;
                case "help":
                    f(e => [...e, K]);
                    break;
                case "zillagame":
                    z(!0),
                    f(e => [...e, "Starting Cat Game... Use arrow keys to move!"]);
                    break;
                case "santa":
                    O(!0),
                    f(e => [...e, 'Ho ho ho! Let it snow! Use "stop" to end the snow.']);
                    break;
                case "ca":
                    f(e => [...e, "CA: ".concat(H)]);
                    break;
                case "buy":
                    f(e => [...e, {
                        type: "link",
                        content: "Buy link",
                        url: "pumpfun.com"
                    }]);
                    break;
                default:
                    f(t => [...t, "'".concat(e, "' is not recognized as an internal or external command, operable program or batch file. Meow?")])
                }
            }
            , [I, ea, J, q, es, i, M, H])
              , en = (0,
            r.useCallback)( () => Q[Math.floor(Math.random() * Q.length)], [])
              , eo = (0,
            r.useCallback)( () => {
                let e = 2 * Math.random() * Math.PI
                  , t = 200 * Math.random() + 100;
                return {
                    x: Math.cos(e) * t,
                    y: Math.sin(e) * t
                }
            }
            , [])
              , el = (0,
            r.useCallback)(e => {
                let t = 10 * e;
                if (g(e => e + t),
                f(a => [...a, "Game over! Your score: ".concat(e, ". Added ").concat(t, " to your feed count.")]),
                Y({
                    title: "Game Over!",
                    description: "Your score: ".concat(e, ". Added ").concat(t, " to your feed count!")
                }),
                t > 0) {
                    for (let e = 0; e < Math.min(t, 10); e++)
                        ea();
                    J()
                }
            }
            , [ea, J, Y]);
            return (0,
            s.jsxs)("div", {
                ref: W,
                className: "relative h-full overflow-hidden ".concat(w ? "rainbow-bg" : "bg-[#012456]", " pb-40"),
                children: [(0,
                s.jsx)("div", {
                    className: "hidden",
                    children: Q.map( (e, t) => (0,
                    s.jsx)(l.default, {
                        src: e.src,
                        alt: e.alt,
                        width: 500,
                        height: 500
                    }, t))
                }), (E || P) && (0,
                s.jsx)("div", {
                    className: "fixed inset-0 pointer-events-none flex items-center justify-center z-50",
                    children: (0,
                    s.jsx)("div", {
                        className: "relative w-96 h-96",
                        style: {
                            "--start-x": "0px",
                            "--start-y": "0px",
                            "--end-x": "".concat(eo().x, "px"),
                            "--end-y": "".concat(eo().y, "px")
                        },
                        children: (0,
                        s.jsx)(l.default, {
                            src: E ? C.src : en().src,
                            alt: E ? C.alt : "Random meme",
                            fill: !0,
                            className: "fly-randomly object-contain"
                        })
                    })
                }), F && (0,
                s.jsx)(Z, {}), (0,
                s.jsxs)("div", {
                    className: "text-[#EEEDF0] font-mono text-sm h-full overflow-auto p-4",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "mb-4",
                        children: ["ZILLATRON Copyright (C) Gods Corporation. All rights reserved.", (0,
                        s.jsx)("span", {
                            className: "font-bold underline block mt-2",
                            children: "Type 'help' to see available commands."
                        }), (0,
                        s.jsxs)("span", {
                            className: "block mt-2",
                            children: ["CA: ", H]
                        })]
                    }), h.map( (e, t) => (0,
                    s.jsx)(o, {
                        content: e
                    }, "output-".concat(t))), (0,
                    s.jsx)(n, {
                        currentCommand: p,
                        setCurrentCommand: b,
                        onEnter: er,
                        inputRef: V
                    })]
                }), (0,
                s.jsx)("div", {
                    className: "absolute bottom-0 right-0 pointer-events-none",
                    children: (0,
                    s.jsxs)("div", {
                        className: "relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96",
                        children: [(0,
                        s.jsx)(l.default, {
                            src: N,
                            alt: "Black cat peeking from the side",
                            fill: !0,
                            className: "cat-image transition-all object-contain ".concat(y ? "bounce-animation" : "")
                        }), (0,
                        s.jsxs)("div", {
                            className: "absolute top-0 right-0 bg-[#012456] text-[#EEEDF0] px-2 py-1 rounded-full text-xs sm:text-sm font-mono",
                            children: ["Fed: ", x]
                        }), (0,
                        s.jsx)("div", {
                            className: "absolute top-8 right-0 bg-[#012456] text-[#EEEDF0] px-2 py-1 rounded-full text-xs sm:text-sm font-mono",
                            children: I ? "Username: ".concat(I.username) : "No username connected"
                        })]
                    })
                }), (0,
                s.jsx)(D, {
                    isOpen: R,
                    onClose: () => z(!1),
                    onGameOver: el
                }), (0,
                s.jsx)(X, {}), (0,
                s.jsx)("audio", {
                    ref: G,
                    src: "https/sui_to_launch_bitcoin_staking_=_10_sui!!-cut%20(1)-vkb1dSubnP6lCBCbmQAq9Djya172DV.wav"
                })]
            })
        }
        let ea = r.forwardRef( (e, t) => {
            let {className: a, type: r, ...n} = e;
            return (0,
            s.jsx)("input", {
                type: r,
                className: x("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", a),
                ref: t,
                ...n
            })
        }
        );
        function es(e) {
            let {onSubmit: t, onCancel: a} = e
              , [n,o] = (0,
            r.useState)("")
              , [l,i] = (0,
            r.useState)("");
            return (0,
            s.jsx)(g, {
                open: !0,
                onOpenChange: () => a(),
                children: (0,
                s.jsxs)(w, {
                    className: "sm:max-w-[425px] bg-[#012456] text-white font-mono",
                    children: [(0,
                    s.jsxs)(j, {
                        children: [(0,
                        s.jsx)(k, {
                            className: "text-2xl",
                            children: "Introduce Command Zlla"
                        }), (0,
                        s.jsx)(C, {
                            className: "text-gray-300",
                            children: "Enter your Twitter handle to join the fun and compete on our leaderboard."
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "grid gap-4 py-4",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "space-y-2",
                            children: [(0,
                            s.jsx)("h3", {
                                className: "font-semibold text-lg",
                                children: "About the Zilla"
                            }), (0,
                            s.jsx)("p", {
                                children: "Zilla is an interactive terminal experience where you can:"
                            }), (0,
                            s.jsxs)("ul", {
                                className: "list-disc list-inside space-y-1",
                                children: [(0,
                                s.jsx)("li", {
                                    children: "Feed and interact with a virtual God"
                                }), (0,
                                s.jsx)("li", {
                                    children: "Play mini-games like Snake"
                                }), (0,
                                s.jsx)("li", {
                                    children: "Explore meme commands"
                                }), (0,
                                s.jsx)("li", {
                                    children: "Compete on the global leaderboard"
                                })]
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: "space-y-2",
                            children: [(0,
                            s.jsx)("h3", {
                                className: "font-semibold text-lg",
                                children: "Leaderboard"
                            }), (0,
                            s.jsx)("p", {
                                children: "The leaderboard tracks your feeding score. The more you interact with the cat and play games, the higher your score. Compete with other users and see who can become the ultimate cat caretaker!"
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: "space-y-2",
                            children: [(0,
                            s.jsx)("label", {
                                htmlFor: "Twitter-handle",
                                className: "text-sm font-medium leading-none",
                                children: "Your Twitter Handle"
                            }), (0,
                            s.jsx)(ea, {
                                id: "Twitter-handle",
                                placeholder: "@username",
                                value: n,
                                onChange: e => o(e.target.value),
                                className: "bg-[#1E3A5F] text-white border-gray-600 font-mono"
                            }), l && (0,
                            s.jsx)("p", {
                                className: "text-red-500 text-sm",
                                children: l
                            })]
                        })]
                    }), (0,
                    s.jsxs)(N, {
                        className: "flex flex-col sm:flex-row sm:justify-between gap-2",
                        children: [(0,
                        s.jsx)(A, {
                            variant: "outline",
                            onClick: a,
                            className: "bg-[#6B1515] hover:bg-[#8B2525] text-white w-full sm:w-auto order-2 sm:order-1",
                            children: "Continue Anonymously"
                        }), (0,
                        s.jsx)(A, {
                            type: "submit",
                            onClick: e => {
                                e.preventDefault(),
                                m(n) ? t(n.startsWith("@") ? n : "@".concat(n)) : i("Invalid Twitter handle. Please enter a valid handle (5-32 characters, letters, numbers, and underscores only).")
                            }
                            ,
                            className: "bg-[#0078D7] hover:bg-[#1E8AE6] w-full sm:w-auto order-1 sm:order-2",
                            children: "Start Playing"
                        })]
                    })]
                })
            })
        }
        function er() {
            let[e,t] = (0,
            r.useState)(null)
              , [a,n] = (0,
            r.useState)(null)
              , [o,l] = (0,
            r.useState)(!1)
              , i = (0,
            r.useRef)(null);
            (0,
            r.useEffect)( () => {
                let e = localStorage.getItem("feedCount");
                t(e ? parseInt(e, 10) : 0);
                let a = localStorage.getItem("username");
                a ? n(a) : l(!0)
            }
            , []);
            let d = async a => {
                let s = await c(a, e || 0);
                s && (localStorage.setItem("username", s.username),
                n(s.username),
                t(s.score),
                l(!1),
                u())
            }
              , u = () => {
                setTimeout( () => {
                    i.current && i.current.focus()
                }
                , 0)
            }
            ;
            return null === e ? null : (0,
            s.jsxs)("main", {
                className: "h-screen flex flex-col bg-[#0078D7]",
                children: [(0,
                s.jsxs)("div", {
                    className: "flex items-center justify-between bg-[#0078D7] text-white px-4 py-1",
                    children: [(0,
                    s.jsx)("span", {
                        className: "font-semibold",
                        children: "ZILLATRON"
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex space-x-2",
                        children: [(0,
                        s.jsx)("button", {
                            className: "w-6 h-6 flex items-center justify-center bg-[#0078D7] hover:bg-[#1E8AE6] text-white border border-white",
                            "aria-label": "Minimize",
                            children: "—"
                        }), (0,
                        s.jsx)("button", {
                            className: "w-6 h-6 flex items-center justify-center bg-[#0078D7] hover:bg-[#1E8AE6] text-white border border-white",
                            "aria-label": "Maximize",
                            children: "□"
                        }), (0,
                        s.jsx)("button", {
                            className: "w-6 h-6 flex items-center justify-center bg-[#0078D7] hover:bg-[#1E8AE6] text-white border border-white",
                            "aria-label": "Close",
                            children: "✕"
                        })]
                    })]
                }), (0,
                s.jsx)("div", {
                    className: "flex-grow overflow-hidden",
                    children: (0,
                    s.jsx)(et, {
                        initialFeedCount: e,
                        initialUsername: a,
                        onConnectUsername: () => {
                            l(!0)
                        }
                        ,
                        ref: i
                    })
                }), o && (0,
                s.jsx)(es, {
                    onSubmit: d,
                    onCancel: () => {
                        l(!1),
                        u()
                    }
                })]
            })
        }
        ea.displayName = "Input"
    }
}, function(e) {
    e.O(0, [451, 971, 117, 744], function() {
        return e(e.s = 1538)
    }),
    _N_E = e.O()
}
]);
