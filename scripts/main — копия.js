jQuery(document).ready(function ($) {
    "use strict";
    var _typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                  return typeof t;
              }
            : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
              };
    !(function (t) {
        "function" == typeof define && define.amd
            ? define(["jquery"], t)
            : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports
            ? (module.exports = function (e, i) {
                  return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(i), i;
              })
            : t(jQuery);
    })(function (t) {
        return (
            (t.fn.tilt = function (e) {
                var i = function () {
                        this.ticking || (requestAnimationFrame(h.bind(this)), (this.ticking = !0));
                    },
                    s = function () {
                        var e = this;
                        void 0 !== this.timeout && clearTimeout(this.timeout),
                            t(this).css({ transition: this.settings.speed + "ms " + this.settings.easing }),
                            this.settings.glare && this.glareElement.css({ transition: "opacity " + this.settings.speed + "ms " + this.settings.easing }),
                            (this.timeout = setTimeout(function () {
                                t(e).css({ transition: "" }), e.settings.glare && e.glareElement.css({ transition: "" });
                            }, this.settings.speed));
                    },
                    n = function (e) {
                        (this.ticking = !1), t(this).css({ "will-change": "transform" }), s.call(this), t(this).trigger("tilt.mouseEnter");
                    },
                    a = function (e) {
                        return void 0 === e && (e = { pageX: t(this).offset().left + t(this).outerWidth() / 2, pageY: t(this).offset().top + t(this).outerHeight() / 2 }), { x: e.pageX, y: e.pageY };
                    },
                    o = function (t) {
                        (this.mousePositions = a(t)), i.call(this);
                    },
                    r = function () {
                        s.call(this), (this.reset = !0), i.call(this), t(this).trigger("tilt.mouseLeave");
                    },
                    l = function () {
                        var e = t(this).outerWidth(),
                            i = t(this).outerHeight(),
                            s = t(this).offset().left,
                            n = t(this).offset().top,
                            a = (this.mousePositions.x - s) / e,
                            o = (this.mousePositions.y - n) / i;
                        return {
                            tiltX: (this.settings.maxTilt / 2 - a * this.settings.maxTilt).toFixed(2),
                            tiltY: (o * this.settings.maxTilt - this.settings.maxTilt / 2).toFixed(2),
                            percentageX: 100 * a,
                            percentageY: 100 * o,
                            angle: Math.atan2(this.mousePositions.x - (s + e / 2), -(this.mousePositions.y - (n + i / 2))) * (180 / Math.PI),
                        };
                    },
                    h = function () {
                        if (((this.transforms = l.call(this)), this.reset))
                            return (
                                (this.reset = !1),
                                t(this).css("transform", "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg)"),
                                void (this.settings.glare && (this.glareElement.css("transform", "rotate(180deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "0")))
                            );
                        t(this).css(
                            "transform",
                            "perspective(" +
                                this.settings.perspective +
                                "px) rotateX(" +
                                ("x" === this.settings.disableAxis ? 0 : this.transforms.tiltY) +
                                "deg) rotateY(" +
                                ("y" === this.settings.disableAxis ? 0 : this.transforms.tiltX) +
                                "deg) scale3d(" +
                                this.settings.scale +
                                "," +
                                this.settings.scale +
                                "," +
                                this.settings.scale +
                                ")"
                        ),
                            this.settings.glare &&
                                (this.glareElement.css("transform", "rotate(" + this.transforms.angle + "deg) translate(-50%, -50%)"), this.glareElement.css("opacity", "" + (this.transforms.percentageY * this.settings.maxGlare) / 100)),
                            t(this).trigger("change", [this.transforms]),
                            (this.ticking = !1);
                    };
                return (
                    (t.fn.tilt.destroy = function () {
                        t(this).each(function () {
                            t(this).find(".js-tilt-glare").remove(), t(this).css({ "will-change": "", transform: "" }), t(this).off("mousemove mouseenter mouseleave");
                        });
                    }),
                    (t.fn.tilt.getValues = function () {
                        var e = [];
                        return (
                            t(this).each(function () {
                                (this.mousePositions = a.call(this)), e.push(l.call(this));
                            }),
                            e
                        );
                    }),
                    (t.fn.tilt.reset = function () {
                        t(this).each(function () {
                            var e = this;
                            (this.mousePositions = a.call(this)),
                                (this.settings = t(this).data("settings")),
                                r.call(this),
                                setTimeout(function () {
                                    e.reset = !1;
                                }, this.settings.transition);
                        });
                    }),
                    this.each(function () {
                        var i = this;
                        (this.settings = t.extend(
                            {
                                maxTilt: t(this).is("[data-tilt-max]") ? t(this).data("tilt-max") : 20,
                                perspective: t(this).is("[data-tilt-perspective]") ? t(this).data("tilt-perspective") : 100,
                                easing: t(this).is("[data-tilt-easing]") ? t(this).data("tilt-easing") : "cubic-bezier(.03,.98,.52,.99)",
                                scale: t(this).is("[data-tilt-scale]") ? t(this).data("tilt-scale") : "1",
                                speed: t(this).is("[data-tilt-speed]") ? t(this).data("tilt-speed") : "400",
                                transition: !t(this).is("[data-tilt-transition]") || t(this).data("tilt-transition"),
                                disableAxis: t(this).is("[data-tilt-disable-axis]") ? t(this).data("tilt-disable-axis") : null,
                                axis: t(this).is("[data-tilt-axis]") ? t(this).data("tilt-axis") : null,
                                reset: !t(this).is("[data-tilt-reset]") || t(this).data("tilt-reset"),
                                glare: !!t(this).is("[data-tilt-glare]") && t(this).data("tilt-glare"),
                                maxGlare: t(this).is("[data-tilt-maxglare]") ? t(this).data("tilt-maxglare") : 1,
                            },
                            e
                        )),
                            null !== this.settings.axis &&
                                (console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"), (this.settings.disableAxis = this.settings.axis)),
                            (this.init = function () {
                                t(i).data("settings", i.settings),
                                    i.settings.glare &&
                                        function () {
                                            var e = this.settings.glarePrerender;
                                            e || t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'),
                                                (this.glareElementWrapper = t(this).find(".js-tilt-glare")),
                                                (this.glareElement = t(this).find(".js-tilt-glare-inner")),
                                                e ||
                                                    (this.glareElementWrapper.css({ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }).css({ overflow: "hidden", "pointer-events": "none" }),
                                                    this.glareElement.css({
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "50%",
                                                        width: "" + 2 * t(this).outerWidth(),
                                                        height: "" + 2 * t(this).outerWidth(),
                                                        transform: "rotate(180deg) translate(-50%, -50%)",
                                                        "transform-origin": "0% 0%",
                                                        opacity: "0",
                                                    }));
                                        }.call(i),
                                    function () {
                                        t(this).on("mousemove", o),
                                            t(this).on("mouseenter", n),
                                            this.settings.reset && t(this).on("mouseleave", r),
                                            this.settings.glare &&
                                                t(window).on(
                                                    "resize",
                                                    function () {
                                                        this.glareElement.css({ width: "" + 2 * t(this).outerWidth(), height: "" + 2 * t(this).outerWidth() });
                                                    }.bind(this)
                                                );
                                    }.call(i);
                            }),
                            this.init();
                    })
                );
            }),
            t("[data-tilt]").tilt(),
            !0
        );
    }),
        $(function () {
            if (
                ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) ||
                    $(function () {
                        $(window).resize(function () {
                            location.reload();
                        });
                    }),
                $(window).width() < 1e3)
            )
                $(".development").removeClass("js-tilt"), $(".design").removeClass("js-tilt");
            else {
                $(".development li").addClass("js-tilt"), $(".design li").addClass("js-tilt");
                var t = $(window).innerHeight();
                $(document).ready(function () {
                    $(".chapter").height(t), $("body").height(t * $(".chapter").length);
                }),
                    window.addEventListener("resize", function (t) {
                        $(".chapter").height($(window).innerHeight());
                    }),
                    $(window).on("scroll", function () {
                        $(".chapterwrap").css("bottom", -1 * $(window).scrollTop());
                    });
            }
            $(".send-contact").click(function () {
                $(".modal-overlay, .modal").addClass("active");
            }),
                $(".close-modal").click(function () {
                    $(".modal-overlay, .modal").removeClass("active");
                }),
                $(".modal-overlay").click(function (t) {
                    t.target == t.currentTarget && $(this).removeClass("active");
                }),
                $("#chapter-5 .js-tilt").tilt({ glare: !0, maxGlare: 0.1, scale: 0.75 }),
                $("#chapter-3 .js-tilt").tilt({ glare: !0, maxGlare: 0.5, scale: 0.9 }),
                $("header .menu").click(function () {
                    $("header .drop").addClass("open");
                }),
                $("header .closemenu").click(function () {
                    $("header .drop").removeClass("open");
                }),
                $("ul.parts li").click(function () {
                    $("header .drop").removeClass("open");
                    var t = $(".chapterwrap ." + this.className.split(" ")[0]).offset();
                    return $("html, body").animate({ scrollTop: t.top }, 2e3), !1;
                }),
                particlesJS("particles-js", {
                    particles: {
                        number: { value: 355, density: { enable: !0, value_area: 789.1476416322727 } },
                        color: { value: "#ffffff" },
                        shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } },
                        opacity: { value: 0.48927153781200905, random: !1, anim: { enable: !0, speed: 0.2, opacity_min: 0, sync: !1 } },
                        size: { value: 2, random: !0, anim: { enable: !0, speed: 2, size_min: 0, sync: !1 } },
                        line_linked: { enable: !1, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                        move: { enable: !0, speed: 0.2, direction: "none", random: !0, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 600, rotateY: 1200 } },
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: { onhover: { enable: !0, mode: "bubble" }, onclick: { enable: !0, mode: "push" }, resize: !0 },
                        modes: {
                            grab: { distance: 400, line_linked: { opacity: 1 } },
                            bubble: { distance: 83.91608391608392, size: 1, duration: 3, opacity: 1, speed: 3 },
                            repulse: { distance: 200, duration: 0.4 },
                            push: { particles_nb: 4 },
                            remove: { particles_nb: 2 },
                        },
                    },
                    retina_detect: !0,
                }),
                $(".arrow_down").bind("click.smoothscroll", function () {
                    $("html, body")
                        .stop()
                        .animate({ scrollTop: $("body").offset().top }, 808, "swing");
                }),
                $(window).scroll(() => {
                    $(window).scrollTop() > 1001 ? $(".button").css({ opacity: "1", "z-index": "1" }) : $(".button").css({ opacity: "0", "z-index": "-1" });
                });
        });
});
