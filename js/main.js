! function (e, i, t, a) {
    "use strict";
    var n = {
        i: function (e) {
            n.d(), n.methods()
        },
        d: function (a) {
            this._window = t(e), this._document = t(i), this._body = t("body"), this._html = t("html"), this.sideNav = t(".rbt-search-dropdown")
        },
        methods: function (e) {
            n.salActive(), n.menuCurrentLink(), n.eduSwiperActive(), n.eduBgCardHover(), n.magnigyPopup(), n.counterUp(), n.pricingPlan(), n.courseView(), n.stickyHeader(), n.masonryActivation(), n._clickDoc(), n.wowActivation(), n.radialProgress(), n.marqueImage(), n.popupMobileMenu(), n.headerSticky(), n.qtyBtn(), n.checkoutPage(), n.offCanvas(), n.onePageNav(), n.transparentHeader(), n.categoryMenuHover(), n.cartSidenav(), n.filterClickButton(), n.selectPicker(), n.headerTopActivation(), n.magnificPopupActivation(), n.showMoreBtn(), n.sidebarVideoHidden(), n.courseActionBottom(), n.topbarExpend(), n.categoryOffcanvas(), n.autoslidertab(), n.moveAnimation(), n.contactForm(), n.player(), n.quizAns(), n.lessonAccor(), n.unloadImage(), n.searchValue(), n.lessonToggle()
        },
        autoslidertab: function (e) {
            setInterval((function () {
                var e = t(".nav-tabs.splash-nav-tabs > li"),
                    i = e.find("a.active").parent("li").next("li").find("a");
                0 === i.length && (i = e.first().find("a").on("click")), i.tab("show")
            }), 5e3)
        },
        offCanvas: function (e) {
            t("#rbt-offcanvas-activation").length && (t("#rbt-offcanvas-activation").on("click", (function () {
                t(".side-menu").addClass("side-menu-active"), t("body").addClass("offcanvas-menu-active")
            })), t(".close_side_menu").on("click", (function () {
                t(".side-menu").removeClass("side-menu-active"), t("body").removeClass("offcanvas-menu-active")
            })), t(".side-menu .side-nav .navbar-nav li a").on("click", (function () {
                t(".side-menu").removeClass("side-menu-active"), t("body").removeClass("offcanvas-menu-active")
            })), t("#btn_sideNavClose").on("click", (function () {
                t(".side-menu").removeClass("side-menu-active"), t("body").removeClass("offcanvas-menu-active")
            })))
        },
        cartSidenav: function (e) {
            t(".rbt-cart-sidenav-activation").length && (t(".rbt-cart-sidenav-activation").on("click", (function () {
                t(".rbt-cart-side-menu").addClass("side-menu-active"), t("body").addClass("cart-sidenav-menu-active")
            })), t(".minicart-close-button").on("click", (function () {
                t(".rbt-cart-side-menu").removeClass("side-menu-active"), t("body").removeClass("cart-sidenav-menu-active")
            })), t(".side-menu .side-nav .navbar-nav li a").on("click", (function () {
                t(".rbt-cart-side-menu").removeClass("side-menu-active"), t("body").removeClass("cart-sidenav-menu-active")
            })), t("#btn_sideNavClose, .close_side_menu").on("click", (function () {
                t(".rbt-cart-side-menu").removeClass("side-menu-active"), t("body").removeClass("cart-sidenav-menu-active")
            })))
        },
        menuCurrentLink: function () {
            var e = location.pathname.split("/"),
                i = e[e.length - 1];
            t(".mainmenu li a, .dashboard-mainmenu li a, .for-right-content .rbt-course-main-content li a").each((function () {
                var e = t(this);
                e.attr("href") === i && (e.addClass("active"), e.parents(".has-menu-child-item").addClass("menu-item-open"))
            }))
        },
        salActive: function () {
            sal({
                threshold: .01,
                once: !0
            })
        },
        eduParalax: function () {
            var e = i.getElementById("scene");
            new Parallax(e)
        },
        eduSwiperActive: function () {
            new Swiper(".banner-swiper-active", {
                effect: "cards",
                grabCursor: !0,
                pagination: {
                    el: ".rbt-swiper-pagination",
                    clickable: !0
                }
            }), new Swiper(".team-slide-activation", {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: !0,
                pagination: {
                    el: ".rbt-swiper-pagination",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".rbt-arrow-left",
                    prevEl: ".rbt-arrow-right",
                    clickable: !0
                },
                breakpoints: {
                    575: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    }
                }
            }), new Swiper(".team-slide-activation-4", {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: !0,
                pagination: {
                    el: ".rbt-swiper-pagination",
                    clickable: !0
                },
                navigation: {
                    nextEl: ".rbt-arrow-left",
                    prevEl: ".rbt-arrow-right",
                    clickable: !0
                },
                breakpoints: {
                    575: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    }
                }
            }), new Swiper(".blog-post-gallery-activation", {
                slidesPerView: 1,
                autoHeight: !0,
                loop: !0,
                navigation: {
                    nextEl: ".rbt-arrow-left",
                    prevEl: ".rbt-arrow-right",
                    clickable: !0
                }
            }), new Swiper(".team-slide-activation-2", {
                slidesPerView: 3,
                spaceBetween: 0,
                loop: !0,
                pagination: {
                    el: ".rbt-swiper-pagination",
                    clickable: !0
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1
                    },
                    480: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    }
                }
            }), new Swiper(".service-item-3-activation", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: !1,
                navigation: {
                    nextEl: ".rbt-arrow-left",
                    prevEl: ".rbt-arrow-right",
                    clickable: !0
                },
                breakpoints: {
                    480: {
                        slidesPerView: 1
                    },
                    481: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    992: {
                        slidesPerView: 3
                    }
                }
            }), new Swiper(".viral-banner-activation", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: !1,
                navigation: {
                    nextEl: ".rbt-arrow-left",
                    prevEl: ".rbt-arrow-right",
                    clickable: !0
                }
            });
            var e = new Swiper(".rbtmySwiperThumb", {
                spaceBetween: 10,
                slidesPerView: 2,
                freeMode: !0,
                watchSlidesProgress: !0
            });
            new Swiper(".rbt-banner-activation", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: !1,
                autoHeight: !0,
                navigation: {
                    nextEl: ".rbt-arrow-right",
                    prevEl: ".rbt-arrow-left",
                    clickable: !0
                },
                thumbs: {
                    swiper: e
                }
            }), new Swiper(".rbt-gif-banner-area", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: !0,
                navigation: {
                    nextEl: ".rbt-arrow-left",
                    prevEl: ".rbt-arrow-right",
                    clickable: !0
                }
            }), new Swiper(".testimonial-item-3-activation", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: !1,
                navigation: {
                    nextEl: ".rbt-arrow-left",
                    prevEl: ".rbt-arrow-right",
                    clickable: !0
                },
                breakpoints: {
                    575: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    }
                }
            }), new Swiper(".testimonial-activation-1", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: !0,
                pagination: {
                    el: ".rbt-swiper-pagination",
                    clickable: !0
                }
            }), new Swiper(".modern-course-carousel-activation", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: !0,
                navigation: {
                    nextEl: ".rbt-arrow-left",
                    prevEl: ".rbt-arrow-right",
                    clickable: !0
                }
            }), new Swiper(".category-activation-one", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: !0,
                navigation: {
                    nextEl: ".rbt-arrow-left",
                    prevEl: ".rbt-arrow-right",
                    clickable: !0
                },
                breakpoints: {
                    481: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    }
                }
            }), new Swiper(".category-activation-two", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: !1,
                navigation: {
                    nextEl: ".rbt-arrow-left",
                    prevEl: ".rbt-arrow-right",
                    clickable: !0
                },
                scrollbar: {
                    el: ".swiper-scrollbar",
                    draggable: !0,
                    hide: !0,
                    snapOnRelease: !0
                },
                breakpoints: {
                    480: {
                        slidesPerView: 1
                    },
                    481: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 6
                    }
                }
            }), new Swiper(".category-activation-three", {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: !0,
                navigation: {
                    nextEl: ".rbt-arrow-left",
                    prevEl: ".rbt-arrow-right",
                    clickable: !0
                },
                scrollbar: {
                    el: ".swiper-scrollbar",
                    draggable: !0,
                    hide: !0,
                    snapOnRelease: !0
                },
                breakpoints: {
                    480: {
                        slidesPerView: 1
                    },
                    481: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    }
                }
            }), new Swiper(".event-activation-1", {
                slidesPerView: 1,
                slidesPerGroup: 1,
                loop: !0,
                spaceBetween: 30,
                navigation: {
                    nextEl: ".rbt-arrow-left",
                    prevEl: ".rbt-arrow-right",
                    clickable: !0
                },
                scrollbar: {
                    el: ".swiper-scrollbar",
                    draggable: !0,
                    hide: !0,
                    snapOnRelease: !0
                },
                pagination: {
                    el: ".rbt-swiper-pagination",
                    clickable: !0
                },
                breakpoints: {
                    575: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    }
                }
            }), new Swiper(".banner-splash-inner-layout-active", {
                effect: "cards",
                grabCursor: !0,
                clickable: !0,
                loop: !0,
                pagination: {
                    el: ".rbt-swiper-pagination",
                    clickable: !0,
                    type: "fraction"
                },
                navigation: {
                    nextEl: ".rbt-arrow-left",
                    prevEl: ".rbt-arrow-right",
                    clickable: !0
                }
            })
        },
        eduBgCardHover: function () {
            t(".rbt-hover-active").mouseenter((function () {
                var e = this;
                setTimeout((function () {
                    t(".rbt-hover-active.active").removeClass("active"), t(e).addClass("active")
                }), 0)
            }))
        },
        magnigyPopup: function () {
            t(i).on("ready", (function () {
                t(".popup-video").magnificPopup({
                    type: "iframe"
                })
            }))
        },
        counterUp: function () {
            t(".odometer").each((function () {
                t(".odometer").appear((function (e) {
                    var i = t(this).attr("data-count");
                    t(this).html(i)
                }))
            }))
        },
        pricingPlan: function () {
            t(".rbt-pricing-area").each((function () {
                var e = t(".yearly-plan-btn"),
                    i = t(".monthly-plan-btn"),
                    a = t(".monthly-pricing"),
                    n = t(".yearly-pricing"),
                    s = t(".pricing-checkbox");
                t(i).on("click", (function () {
                    s.prop("checked", !0), t(this).addClass("active").parent(".nav-item").siblings().children().removeClass("active"), a.css("display", "block"), n.css("display", "none")
                })), t(e).on("click", (function () {
                    s.prop("checked", !1), t(this).addClass("active").parent(".nav-item").siblings().children().removeClass("active"), a.css("display", "none"), n.css("display", "block")
                })), t(s).change((function () {
                    t('input[class="pricing-checkbox"]:checked').length > 0 ? (i.addClass("active"), e.removeClass("active"), a.css("display", "block"), n.css("display", "none")) : (e.addClass("active"), i.removeClass("active"), a.css("display", "none"), n.css("display", "block"))
                }))
            }))
        },
        courseView: function () {
            var e = t(".rbt-grid-view"),
                i = t(".rbt-list-view");
            t(e).on("click", (function () {
                t(this).addClass("active").parent(".course-switch-item").siblings().children().removeClass("active"), t(".rbt-course-grid-column").addClass("active-grid-view"), t(".rbt-course-grid-column").removeClass("active-list-view"), t(".rbt-card").removeClass("card-list-2")
            })), t(i).on("click", (function () {
                t(this).addClass("active").parent(".course-switch-item").siblings().children().removeClass("active"), t(".rbt-course-grid-column").removeClass("active-grid-view"), t(".rbt-course-grid-column").addClass("active-list-view"), t(".rbt-card").addClass("card-list-2")
            }))
        },
        stickyHeader: function () {
            t("header").hasClass("header-transparent") ? t("body").addClass("active-header-transparent") : t("body").removeClass("active-header-transparent")
        },
        masonryActivation: function (i) {
            t(e).load((function () {
                t(".masonary-wrapper-activation").imagesLoaded((function () {
                    t(".messonry-button").on("click", "button", (function () {
                        var i = t(this).attr("data-filter");
                        t(this).siblings(".is-checked").removeClass("is-checked"), t(this).addClass("is-checked"), e.isotope({
                            filter: i
                        })
                    }));
                    var e = t(".mesonry-list").isotope({
                        percentPosition: !0,
                        transitionDuration: "0.7s",
                        layoutMode: "masonry",
                        masonry: {
                            columnWidth: ".resizer"
                        }
                    })
                }))
            })), t(e).load((function () {
                t(".splash-masonary-wrapper-activation").imagesLoaded((function () {
                    t(".messonry-button").on("click", "button", (function () {
                        var i = t(this).attr("data-filter");
                        t(this).siblings(".is-checked").removeClass("is-checked"), t(this).addClass("is-checked"), e.isotope({
                            filter: i
                        })
                    }));
                    var e = t(".splash-mesonry-list").isotope({
                        percentPosition: !0,
                        transitionDuration: "0.7s",
                        layoutMode: "masonry",
                        masonry: {
                            columnWidth: ".resizer"
                        }
                    })
                }))
            }))
        },
        _clickDoc: function () {
            var e, i, a, s;
            e = function (e) {
                t(this).val() || t(this).parent(".form-group").removeClass("focused")
            }, i = function (e) {
                t(this).parents(".form-group").addClass("focused")
            }, a = function (e) {
                e.preventDefault(), n.sideNav.addClass("active"), t(".search-trigger-active").addClass("open"), n._html.addClass("side-nav-opened")
            }, s = function (e) {
                t('.rbt-search-dropdown, .rbt-search-dropdown *:not(".search-trigger-active, .search-trigger-active *")').is(e.target) || (n.sideNav.removeClass("active"), t(".search-trigger-active").removeClass("open"), n._html.removeClass("side-nav-opened"))
            }, n._document.on("blur", "input,textarea,select", e).on("focus", 'input:not([type="radio"]),input:not([type="checkbox"]),textarea,select', i).on("click", ".search-trigger-active", a).on("click", ".side-nav-opened", s)
        },
        wowActivation: function () {
            (new WOW).init()
        },
        radialProgress: function () {
            t(e).scroll((function () {
                t(".radial-progress").each((function (i) {
                    var a = t(this).offset().top + t(this).outerHeight();
                    t(e).scrollTop() + t(e).height() > a && t(".radial-progress").easyPieChart({
                        lineWidth: 10,
                        scaleLength: 0,
                        rotate: 0,
                        trackColor: !1,
                        lineCap: "round",
                        size: 180,
                        onStep: function (e, i, a) {
                            t(this.el).find(".percent").text(Math.round(a))
                        }
                    })
                }))
            }))
        },
        marqueImage: function () {
            t(".edumarque").each((function () {
                var e = 0,
                    i = t(this);
                setInterval((function () {
                    e += 1, i.css("background-position-x", -e + "px")
                }), 10)
            }))
        },
        popupMobileMenu: function (e) {
            t(".hamberger-button").on("click", (function (e) {
                t(".popup-mobile-menu").addClass("active")
            })), t(".close-button").on("click", (function (e) {
                t(".popup-mobile-menu").removeClass("active"), t(".popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a").siblings(".submenu, .rbt-megamenu").removeClass("active").slideUp("400"), t(".popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a").removeClass("open")
            })), t(".popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a").on("click", (function (e) {
                e.preventDefault(), t(this).siblings(".submenu, .rbt-megamenu").toggleClass("active").slideToggle("400"), t(this).toggleClass("open")
            })), t(".popup-mobile-menu, .popup-mobile-menu .mainmenu.onepagenav li a").on("click", (function (e) {
                e.target === this && t(".popup-mobile-menu").removeClass("active") && t(".popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a").siblings(".submenu, .rbt-megamenu").removeClass("active").slideUp("400") && t(".popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a").removeClass("open")
            }))
        },
        headerSticky: function () {
            t(e).on("scroll", (function () {
                if (t("body").hasClass("rbt-header-sticky")) {
                    var i = t(".rbt-sticky-placeholder"),
                        a = t(".rbt-header-wrapper"),
                        n = a.outerHeight(),
                        s = (t(".rbt-header-top").outerHeight() || 0) + 200;
                    t(e).scrollTop() > s ? (a.addClass("rbt-sticky"), i.height(n)) : (a.removeClass("rbt-sticky"), i.height(0))
                }
            }))
        },
        qtyBtn: function () {
            t(".pro-qty").prepend('<span class="dec qtybtn">-</span>'), t(".pro-qty").append('<span class="inc qtybtn">+</span>'), t(".qtybtn").on("click", (function () {
                var e = t(this),
                    i = e.parent().find("input").val();
                if (e.hasClass("inc")) var a = parseFloat(i) + 1;
                else if (i > 0) a = parseFloat(i) - 1;
                else a = 0;
                e.parent().find("input").val(a)
            }))
        },
        checkoutPage: function () {
            t("[data-shipping]").on("click", (function () {
                t("[data-shipping]:checked").length > 0 ? t("#shipping-form").slideDown() : t("#shipping-form").slideUp()
            })), t('[name="payment-method"]').on("click", (function () {
                var e = t(this).attr("value");
                t(".single-method p").slideUp(), t('[data-method="' + e + '"]').slideDown()
            }))
        },
        onePageNav: function () {
            t(".onepagenav").onePageNav({
                currentClass: "current",
                changeHash: !1,
                scrollSpeed: 500,
                scrollThreshold: .2,
                filter: "",
                easing: "swing"
            })
        },
        transparentHeader: function () {
            if (t(".rbt-header").hasClass("rbt-transparent-header")) {
                var e = t(".rbt-header").outerHeight();
                t("body").addClass("rbt-header-transpernt-active"), t(".header-transperent-spacer").css("padding-top", e + "px")
            }
        },
        categoryMenuHover: function () {
            t(".vertical-nav-menu li.vertical-nav-item").mouseover((function () {
                t(".rbt-vertical-inner").hide(), t(".vertical-nav-menu li.vertical-nav-item").removeClass("active"), t(this).addClass("active");
                var e = t(this).find("a").attr("href");
                return t(e).stop().fadeIn(), !1
            }))
        },
        selectPicker: function () {
            t("select").selectpicker()
        },
        filterClickButton: function () {
            t(".discover-filter-activation").on("click", (function () {
                t(this).toggleClass("open"), t(".default-exp-expand").slideToggle("400")
            })), t("#slider-range").slider({
                range: !0,
                min: 10,
                max: 500,
                values: [100, 300],
                slide: function (e, i) {
                    t("#amount").val("$" + i.values[0] + " - $" + i.values[1])
                }
            }), t("#amount").val("$" + t("#slider-range").slider("values", 0) + " - $" + t("#slider-range").slider("values", 1))
        },
        headerTopActivation: function () {
            t(".bgsection-activation").on("click", (function () {
                t(this).parents(".rbt-header-campaign").addClass("deactive")
            }))
        },
        magnificPopupActivation: function () {
            t(".parent-gallery-container").magnificPopup({
                delegate: ".child-gallery-single",
                type: "image",
                mainClass: "mfp-with-zoom",
                gallery: {
                    enabled: !0
                },
                zoom: {
                    enabled: !0,
                    duration: 300,
                    easing: "ease-in-out",
                    opener: function (e) {
                        return e.is("img") ? e : e.find("img")
                    }
                }
            })
        },
        showMoreBtn: function () {
            t.fn.hasShowMore = function () {
                return this.each((function () {
                    t(this).toggleClass("active"), t(this).text("Show Less"), t(this).parent(".has-show-more").toggleClass("active"), t(this).parent(".has-show-more").hasClass("active") ? t(this).text("Show Less") : t(this).text("Show More")
                }))
            }, t(i).on("click", ".rbt-show-more-btn", (function () {
                t(this).hasShowMore()
            }))
        },
        sidebarVideoHidden: function () {
            var i = t(".sidebar-video-hidden");
            t(e).scroll((function () {
                t(this).scrollTop() > 250 ? t(i).css("display", "none") : t(i).css("display", "block")
            }))
        },
        courseActionBottom: function () {
            var a = t(".rbt-course-action-bottom");
            t(e).scroll((function () {
                var n = t(this).scrollTop(),
                    s = .66 * t(i).height(),
                    o = (t(i).scrollTop() + e.innerHeight) / t(i).height();
                n > s && 1 != o ? t(a).addClass("rbt-course-action-active") : t(a).removeClass("rbt-course-action-active")
            }))
        },
        topbarExpend: function () {
            t(e).width() < 1199 && (t(".top-bar-expended").on("click", (function () {
                t(".top-expended-activation").hasClass("active") ? (t(".top-expended-activation").removeClass("active"), t(".top-expended-activation").find(".top-expended-wrapper").css({
                    height: "32px"
                })) : (t(".top-expended-activation").addClass("active"), t(".top-expended-activation").find(".top-expended-wrapper").css({
                    height: t(".top-expended-inner").outerHeight() + "px"
                }))
            })), t(e).on("hresize", (function () {
                t(".top-expended-activation").hasClass("active") && t(".top-expended-activation").find(".top-expended-inner").css({
                    height: t(".top-expended-inner").outerHeight() + "px"
                })
            })))
        },
        categoryOffcanvas: function () {
            t(e).width() < 1200 && (t(".rbt-side-offcanvas-activation").on("click", (function () {
                t(".rbt-offcanvas-side-menu").addClass("active-offcanvas")
            })), t(".rbt-close-offcanvas").on("click", (function () {
                t(".rbt-offcanvas-side-menu").removeClass("active-offcanvas")
            })), t(".rbt-offcanvas-side-menu").on("click", (function (e) {
                e.target === this && t(".rbt-offcanvas-side-menu").removeClass("active-offcanvas")
            })), t(".rbt-vertical-nav-list-wrapper .vertical-nav-item a").on("click", (function (e) {
                e.preventDefault(), t(this).siblings(".vartical-nav-content-menu-wrapper").toggleClass("active").slideToggle("400"), t(this).toggleClass("active")
            })))
        },
        moveAnimation: function () {
            t(".scene").each((function () {
                new Parallax(t(this)[0])
            }))
        },
        contactForm: function () {
            t(".rainbow-dynamic-form").on("submit", (function (e) {
                e.preventDefault();
                var i = t(this);
                i.closest("input,textarea");
                i.closest("div").find("input,textarea").removeAttr("style"), i.find(".error-msg").remove(), i.closest("div").find('button[type="submit"]').attr("disabled", "disabled");
                var a = t(this).serialize();
                t.ajax({
                    url: "mail.php",
                    type: "post",
                    dataType: "json",
                    data: a,
                    success: function (e) {
                        i.closest("div").find('button[type="submit"]').removeAttr("disabled"), 0 == e.code ? (i.closest("div").find('[name="' + e.field + '"]'), i.find(".rainbow-btn").after('<div class="error-msg"><p>*' + e.err + "</p></div>")) : (t(".error-msg").hide(), t(".form-group").removeClass("focused"), i.find(".rainbow-btn").after('<div class="success-msg"><p>' + e.success + "</p></div>"), i.closest("div").find("input,textarea").val(""), setTimeout((function () {
                            t(".success-msg").fadeOut("slow")
                        }), 5e3))
                    }
                })
            }))
        },
        player: function () {
            new Plyr(".rbtplayer", {
                muted: !1,
                volume: 1,
                controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "fullscreen"]
            })
        },
        quizAns: function () {
            var e = 1;

            function i(e) {
                t(".question").hide(), t("#question-" + e).show(), 1 == e ? t("#prev-btn").prop("disabled", !0) : t("#prev-btn").prop("disabled", !1), e == t(".question").length ? (t("#next-btn").hide(), t("#submit-btn").show()) : (t("#next-btn").show(), t("#submit-btn").hide())
            }
            i(e), t("#next-btn").click((function () {
                e < t(".question").length && i(++e)
            })), t("#prev-btn").click((function () {
                e > 1 && i(--e)
            })), t("#quiz-form").submit((function (e) {
                e.preventDefault()
            }))
        },
        lessonAccor: function () {
            let e = sessionStorage.getItem("selectedCollapse");
            null != e && (t(".accordion .collapse").removeClass("show"), t(".accordion-button").addClass("collapsed").attr("aria-expanded", !1), t(e).addClass("show"), t(e).siblings().find("button").removeClass("collapsed").attr("aria-expanded", !0)), t(".accordion .accordion-button").on("click", (function () {
                let e = t(this).data("bs-target");
                sessionStorage.setItem("selectedCollapse", e)
            }))
        },
        unloadImage: function () {
            t("#createfileImage").click((function (e) {
                t("#createinputfile").click()
            })), t("#createinputfile").change((function () {
                ! function () {
                    const [e] = createinputfile.files;
                    e && (createfileImage.src = URL.createObjectURL(e))
                }()
            }))
        },
        searchValue: function () {
            t(i).on("keyup", ".rbt-search-active", (function () {
                var e = t(this).val().toLowerCase();
                t(".rbt-search-activation .accordion .accordion-item").filter((function () {
                    t(this).toggle(t(this).text().toLowerCase().indexOf(e) > -1)
                }))
            }))
        },
        lessonToggle: function () {
            t(".lesson-toggle-active").on("click", (function () {
                t(this).toggleClass("sidebar-hide"), t(".rbt-lesson-leftsidebar").toggleClass("sibebar-none")
            }))
        }
    };
    n.i()
}(window, document, jQuery);