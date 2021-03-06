(this["webpackJsonpsmart-ui"] = this["webpackJsonpsmart-ui"] || []).push([
    [0], {
        29: function (e, t, c) {},
        30: function (e, t, c) {},
        36: function (e, t, c) {},
        37: function (e, t, c) {},
        38: function (e, t, c) {},
        39: function (e, t, c) {},
        40: function (e, t, c) {},
        41: function (e, t, c) {},
        44: function (e, t, c) {},
        46: function (e, t, c) {
            "use strict";
            c.r(t);
            var s = c(0),
                n = c(1),
                i = c.n(n),
                a = c(22),
                r = c.n(a),
                l = (c(29), c(15)),
                j = c(8),
                d = c(6),
                A = (c(30), c.p + "static/media/logo.77fefb91.png");
            var O = function (e) {
                var t = {
                    about: "About Us",
                    benefits: "Benefits",
                    people: "Our People",
                    join: "Join"
                };

                function c() {
                    e.n("")
                }
                var n = Object.keys(t).map((function (e) {
                    return Object(s.jsxs)("a", {
                        href: "#" + e,
                        onClick: c,
                        className: "nav-item",
                        children: [" ", t[e]]
                    }, e)
                }));
                return Object(s.jsx)("nav", {
                    className: "nav",
                    children: Object(s.jsxs)("div", {
                        className: "nav-menu",
                        children: [Object(s.jsxs)("div", {
                            className: "nav-stick-top",
                            children: [Object(s.jsx)("div", {
                                className: "nav-item hide-l nav-logo",
                                children: Object(s.jsx)("img", {
                                    src: A,
                                    alt: "logo"
                                })
                            }), n]
                        }), Object(s.jsx)("div", {
                            className: "nav-item hide-l sign-up-nav ",
                            children: Object(s.jsx)(j.b, {
                                className: "sign-up-nav-button",
                                to: "/Signup",
                                children: "Sign Up"
                            })
                        })]
                    })
                })
            };
            c(36);
            var b = Object(d.f)((function (e) {
                var t = Object(n.useState)(""),
                    c = Object(l.a)(t, 2),
                    i = c[0],
                    a = c[1],
                    r = Object(n.useState)(""),
                    d = Object(l.a)(r, 2),
                    b = d[0],
                    h = d[1],
                    u = Object(n.useState)({
                        display: "block"
                    }),
                    o = Object(l.a)(u, 2),
                    m = o[0],
                    x = o[1];
                return Object(n.useEffect)((function () {
                    "/" !== e.location.pathname ? (h(""), x({
                        display: "none"
                    })) : (h(Object(s.jsx)(O, {
                        n: a
                    })), x({
                        display: "block"
                    }))
                }), [e.location.pathname]), Object(s.jsx)("header", {
                    className: "header " + i,
                    children: Object(s.jsx)("div", {
                        className: "container ",
                        children: Object(s.jsxs)("div", {
                            className: "header-content",
                            children: [Object(s.jsxs)("div", {
                                onClick: function () {
                                    a(i ? "" : "nav-open")
                                },
                                style: m,
                                className: "btn-menu hide-l",
                                children: [Object(s.jsx)("div", {
                                    className: "btn-menu-row"
                                }), Object(s.jsx)("div", {
                                    className: "btn-menu-row"
                                }), Object(s.jsx)("div", {
                                    className: "btn-menu-row"
                                })]
                            }), Object(s.jsx)("div", {
                                className: "logo",
                                children: Object(s.jsx)(j.b, {
                                    to: "/",
                                    children: Object(s.jsx)("img", {
                                        src: A,
                                        alt: "Logo"
                                    })
                                })
                            }), b, Object(s.jsxs)("div", {
                                className: "header-login",
                                children: [Object(s.jsx)(j.b, {
                                    className: "header-login-item",
                                    to: "/login",
                                    children: "Login"
                                }), Object(s.jsx)(j.b, {
                                    className: "header-login-item",
                                    to: "/Signup",
                                    children: "SignUp"
                                })]
                            })]
                        })
                    })
                })
            }));
            c(37);
            var h = function () {
                return Object(s.jsx)("footer", {
                    className: "footer",
                    children: Object(s.jsxs)("div", {
                        className: "container footer-container",
                        children: [Object(s.jsx)(j.b, {
                            className: "footer-logo ",
                            to: "/",
                            children: Object(s.jsx)("img", {
                                src: A,
                                alt: "Logo"
                            })
                        }), Object(s.jsx)("p", {
                            className: "footer-logo ",
                            children: "Copyright \xa9 2021 SMART-UI. All Rights Reserved."
                        })]
                    })
                })
            };
            c(38);
            var u = function () {
                return Object(s.jsx)("div", {
                    className: "login-full-height",
                    children: Object(s.jsx)("div", {
                        className: "logInform",
                        children: Object(s.jsxs)("form", {
                            children: [Object(s.jsx)("label", {
                                htmlFor: "name",
                                children: "\u041b\u043e\u0433\u0438\u043d:"
                            }), Object(s.jsx)("input", {
                                type: "name"
                            }), Object(s.jsx)("label", {
                                htmlFor: "username",
                                children: "\u041f\u0430\u0440\u043e\u043b\u044c:"
                            }), Object(s.jsx)("input", {
                                type: "password"
                            }), Object(s.jsxs)("div", {
                                id: "lower",
                                children: [Object(s.jsx)("input", {
                                    type: "checkbox"
                                }), Object(s.jsx)("label", {
                                    className: "check",
                                    htmlFor: "checkbox",
                                    children: "\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"
                                }), Object(s.jsx)("input", {
                                    type: "submit",
                                    value: "\u0412\u043e\u0439\u0442\u0438"
                                })]
                            })]
                        })
                    })
                })
            };
            c(39);
            var o = function () {
                    return Object(s.jsx)("div", {
                        className: "login-full-height",
                        children: Object(s.jsxs)("div", {
                            className: "logInform",
                            children: [Object(s.jsx)("h4", {
                                children: "Sign-In"
                            }), Object(s.jsxs)("form", {
                                children: [Object(s.jsx)("label", {
                                    htmlFor: "name",
                                    children: "Login:"
                                }), Object(s.jsx)("input", {
                                    type: "name"
                                }), Object(s.jsx)("label", {
                                    htmlFor: "phone",
                                    children: "Phone :"
                                }), Object(s.jsx)("input", {
                                    type: "name"
                                }), Object(s.jsx)("label", {
                                    htmlFor: "username",
                                    children: "password:"
                                }), Object(s.jsx)("input", {
                                    type: "password"
                                }), Object(s.jsx)("div", {
                                    id: "lower",
                                    children: Object(s.jsx)("input", {
                                        type: "submit",
                                        value: "SignIn"
                                    })
                                })]
                            })]
                        })
                    })
                },
                m = (c(40), "data:image/png;base64,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");
            c(41);
            var x = function (e) {
                    return Object(s.jsxs)("div", {
                        className: "card-benefit width-1-2-m width-1-3-l",
                        children: [Object(s.jsx)("figure", {
                            className: "card-benefit-image",
                            children: Object(s.jsx)("img", {
                                src: e.i,
                                alt: "benefit"
                            })
                        }), Object(s.jsx)("p", {
                            className: "card-benefit-title",
                            children: e.t
                        }), Object(s.jsx)("p", {
                            className: "card-benefit-description",
                            children: e.d
                        })]
                    })
                },
                f = c(53),
                v = c(51),
                g = c(52),
                p = c(48),
                N = c(49),
                w = c(50),
                C = (c(42), c(43), c(44), c(45), "data:image/png;base64,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");
            g.a.use([p.a, N.a, w.a]);
            var H = function () {
                return Object(s.jsxs)(f.a, {
                    autoplay: {
                        delay: 2e3
                    },
                    loop: "true",
                    navigation: !0,
                    spaceBetween: 0,
                    slidesPerView: 3,
                    breakpoints: {
                        200: {
                            width: 200,
                            slidesPerView: 1
                        },
                        640: {
                            width: 640,
                            slidesPerView: 2
                        },
                        768: {
                            width: 768,
                            slidesPerView: 3
                        }
                    },
                    children: [Object(s.jsx)(v.a, {
                        className: "main-swiper-slide",
                        children: Object(s.jsx)("img", {
                            src: C,
                            alt: ""
                        })
                    }), Object(s.jsx)(v.a, {
                        className: "main-swiper-slide",
                        children: Object(s.jsx)("img", {
                            src: C,
                            alt: ""
                        })
                    }), Object(s.jsx)(v.a, {
                        className: "main-swiper-slide",
                        children: Object(s.jsx)("img", {
                            src: C,
                            alt: ""
                        })
                    }), Object(s.jsx)(v.a, {
                        className: "main-swiper-slide",
                        children: Object(s.jsx)("img", {
                            src: C,
                            alt: ""
                        })
                    }), Object(s.jsx)(v.a, {
                        className: "main-swiper-slide",
                        children: Object(s.jsx)("img", {
                            src: C,
                            alt: ""
                        })
                    })]
                })
            };
            var I = function () {
                var e = 0,
                    t = [];
                t[0] = ["description1", "title1", m], t[2] = ["description2", "hello 2", m], t[3] = ["degf scription2", "hellogfg  2", m], t[4] = ["degf fdf scription2", "hel dfflogfg  2", m], t[5] = ["intrestion title", "amaizing ", m];
                var c = t.map((function (t) {
                    return e++, Object(s.jsx)(x, {
                        d: t[0],
                        t: t[1],
                        i: t[2]
                    }, "cardkey" + e)
                }));
                return Object(s.jsxs)(s.Fragment, {
                    children: [Object(s.jsx)("section", {
                        className: "hero",
                        children: Object(s.jsx)("div", {
                            className: "container",
                            children: Object(s.jsxs)("div", {
                                className: "grid",
                                children: [Object(s.jsx)("div", {
                                    className: "grid-item width-1-2-m",
                                    children: Object(s.jsx)("h1", {
                                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, at quaerat similique obcaecati dolorum voluptatem nemo perspiciatis cupiditate consequatur excepturi!"
                                    })
                                }), Object(s.jsx)("div", {
                                    className: "grid-item width-1-2-m"
                                })]
                            })
                        })
                    }), Object(s.jsxs)("section", {
                        id: "about",
                        className: "section section-about",
                        children: [Object(s.jsx)("h2", {
                            className: "section-title",
                            children: "About"
                        }), Object(s.jsxs)("p", {
                            className: " .section section-description",
                            children: ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ", Object(s.jsx)("br", {}), "nihil voluptatem sapiente asperiores repellat cumque?"]
                        })]
                    }), Object(s.jsxs)("section", {
                        id: "benefits",
                        className: "section section-benefits",
                        children: [Object(s.jsx)("h2", {
                            className: "section-title",
                            children: "Our Benefits"
                        }), Object(s.jsx)("div", {
                            className: "container",
                            children: Object(s.jsx)("div", {
                                className: "grid",
                                children: c
                            })
                        })]
                    }), Object(s.jsx)("section", {
                        id: "people",
                        className: "section section-our-people",
                        children: Object(s.jsxs)("div", {
                            className: "container",
                            children: [Object(s.jsx)("h2", {
                                className: "section-title",
                                children: "Our People"
                            }), Object(s.jsx)(H, {})]
                        })
                    }), Object(s.jsxs)("section", {
                        id: "join",
                        className: "section section-join",
                        children: [Object(s.jsx)("h2", {
                            className: "section-title",
                            children: "Join Our Talent Community"
                        }), Object(s.jsx)("p", {
                            className: "section-description",
                            children: " It is amaizing team"
                        }), Object(s.jsx)(j.b, {
                            className: "button button-join",
                            to: "/Signup",
                            children: "Join Us"
                        })]
                    })]
                })
            };
            var D = function () {
                return Object(s.jsx)("main", {
                    children: Object(s.jsxs)(d.c, {
                        children: [Object(s.jsx)(d.a, {
                            exact: !0,
                            path: "/login",
                            component: u
                        }), Object(s.jsx)(d.a, {
                            exact: !0,
                            path: "/signup",
                            component: o
                        }), Object(s.jsx)(d.a, {
                            exact: !0,
                            component: I
                        })]
                    })
                })
            };
            var E = function () {
                    return Object(s.jsx)("div", {
                        className: "App",
                        children: Object(s.jsxs)(j.a, {
                            children: [Object(s.jsx)(b, {}), Object(s.jsx)(D, {}), Object(s.jsx)(h, {})]
                        })
                    })
                },
                M = function (e) {
                    e && e instanceof Function && c.e(3).then(c.bind(null, 54)).then((function (t) {
                        var c = t.getCLS,
                            s = t.getFID,
                            n = t.getFCP,
                            i = t.getLCP,
                            a = t.getTTFB;
                        c(e), s(e), n(e), i(e), a(e)
                    }))
                };
            r.a.render(Object(s.jsx)(i.a.StrictMode, {
                children: Object(s.jsx)("div", {
                    className: "wrapper",
                    children: Object(s.jsx)(E, {})
                })
            }), document.getElementById("root")), M()
        }
    },
    [
        [46, 1, 2]
    ]
]);
//# sourceMappingURL=main.351270fa.chunk.js.map