jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, a, c, b, d) {
        return jQuery.easing[jQuery.easing.def](e, a, c, b, d)
    },
    easeInQuad: function(e, a, c, b, d) {
        return b * (a /= d) * a + c
    },
    easeOutQuad: function(e, a, c, b, d) {
        return -b * (a /= d) * (a - 2) + c
    },
    easeInOutQuad: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a + c;
        return -b / 2 * (--a * (a - 2) - 1) + c
    },
    easeInCubic: function(e, a, c, b, d) {
        return b * (a /= d) * a * a + c
    },
    easeOutCubic: function(e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a + 1) + c
    },
    easeInOutCubic: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a * a + c;
        return b / 2 * ((a -= 2) * a * a + 2) + c
    },
    easeInQuart: function(e, a, c, b, d) {
        return b * (a /= d) * a * a * a + c
    },
    easeOutQuart: function(e, a, c, b, d) {
        return -b * ((a = a / d - 1) * a * a * a - 1) + c
    },
    easeInOutQuart: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a * a * a + c;
        return -b / 2 * ((a -= 2) * a * a * a - 2) + c
    },
    easeInQuint: function(e, a, c, b, d) {
        return b * (a /= d) * a * a * a * a + c
    },
    easeOutQuint: function(e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a * a * a + 1) + c
    },
    easeInOutQuint: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a * a * a * a + c;
        return b / 2 * ((a -= 2) * a * a * a * a + 2) + c
    },
    easeInSine: function(e, a, c, b, d) {
        return -b * Math.cos(a / d * (Math.PI / 2)) + b + c
    },
    easeOutSine: function(e, a, c, b, d) {
        return b * Math.sin(a / d * (Math.PI / 2)) + c
    },
    easeInOutSine: function(e, a, c, b, d) {
        return -b / 2 * (Math.cos(Math.PI * a / d) - 1) + c
    },
    easeInExpo: function(e, a, c, b, d) {
        return a == 0 ? c : b * Math.pow(2, 10 * (a / d - 1)) + c
    },
    easeOutExpo: function(e, a, c, b, d) {
        return a == d ? c + b : b * (-Math.pow(2, -10 * a / d) + 1) + c
    },
    easeInOutExpo: function(e, a, c, b, d) {
        if (a == 0) return c;
        if (a == d) return c + b;
        if ((a /= d / 2) < 1) return b / 2 * Math.pow(2, 10 * (a - 1)) + c;
        return b / 2 * (-Math.pow(2, -10 * --a) + 2) + c
    },
    easeInCirc: function(e, a, c, b, d) {
        return -b * (Math.sqrt(1 - (a /= d) * a) - 1) + c
    },
    easeOutCirc: function(e, a, c, b, d) {
        return b * Math.sqrt(1 - (a = a / d - 1) * a) + c
    },
    easeInOutCirc: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return -b / 2 * (Math.sqrt(1 - a * a) - 1) + c;
        return b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
    },
    easeInElastic: function(e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
            g = b;
        if (a == 0) return c;
        if ((a /= d) == 1) return c + b;
        f || (f = d * 0.3);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g);
        return -(g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f)) + c
    },
    easeOutElastic: function(e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
            g = b;
        if (a == 0) return c;
        if ((a /= d) == 1) return c + b;
        f || (f = d * 0.3);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g);
        return g * Math.pow(2, -10 * a) * Math.sin((a * d - e) * 2 * Math.PI / f) + b + c
    },
    easeInOutElastic: function(e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
            g = b;
        if (a == 0) return c;
        if ((a /= d / 2) == 2) return c + b;
        f || (f = d * 0.3 * 1.5);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g);
        if (a < 1) return -0.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) + c;
        return g * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) * 0.5 + b + c
    },
    easeInBack: function(e, a, c, b, d, f) {
        if (f == undefined) f = 1.70158;
        return b * (a /= d) * a * ((f + 1) * a - f) + c
    },
    easeOutBack: function(e, a, c, b, d, f) {
        if (f == undefined) f = 1.70158;
        return b * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + c
    },
    easeInOutBack: function(e, a, c, b, d, f) {
        if (f == undefined) f = 1.70158;
        if ((a /= d / 2) < 1) return b / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c;
        return b / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c
    },
    easeInBounce: function(e, a, c, b, d) {
        return b - jQuery.easing.easeOutBounce(e, d - a, 0, b, d) + c
    },
    easeOutBounce: function(e, a, c, b, d) {
        return (a /= d) < 1 / 2.75 ? b * 7.5625 * a * a + c : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + c : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + c : b * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + c
    },
    easeInOutBounce: function(e, a, c, b, d) {
        if (a < d / 2) return jQuery.easing.easeInBounce(e, a * 2, 0, b, d) * 0.5 + c;
        return jQuery.easing.easeOutBounce(e, a * 2 - d, 0, b, d) * 0.5 + b * 0.5 + c
    }
});
(function($) {
    function RoyalSlider(f, g) {
        this.slider = $(f);
        this._az = "";
        this._by = "";
        this._cx = "";
        var h = this;
        this.settings = $.extend({}, $.fn.royalSlider.defaults, g);
        this.isSlideshowRunning = false;
        this._dw = false;
        this._ev = this.slider.find(".royalSlidesContainer");
        this._fu = this._ev.wrap('<div class="royalWrapper"/>').parent();
        this.slides = this._ev.find(".royalSlide");
        this._gt = "<p class='royalPreloader'></p>";
        this._hs = false;
        this._ir = false;
        if ("ontouchstart" in window) {
            if (!this.settings.disableTranslate3d) {
                if (('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix())) {
                    this._ev.css({
                        "-webkit-transform-origin": "0 0",
                        "-webkit-transform": "translateZ(0)"
                    });
                    this._ir = true
                }
            }
            this.hasTouch = true;
            this._az = "touchstart.rs";
            this._by = "touchmove.rs";
            this._cx = "touchend.rs"
        } else {
            this.hasTouch = false;
            if (this.settings.dragUsingMouse) {
                this._az = "mousedown.rs";
                this._by = "mousemove.rs";
                this._cx = "mouseup.rs"
            } else {
                this._ev.addClass('auto-cursor')
            }
        }
        if (this.hasTouch) {
            this.settings.directionNavAutoHide = false;
            this.settings.hideArrowOnLastSlide = true
        }
        if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {
            this._jq = true
        } else {
            this._jq = false
        }
        this.slidesArr = [];
        var i, jqSlide, dataSRC, slideImg;
        this.slides.each(function() {
            jqSlide = $(this);
            i = {};
            i.slide = jqSlide;
            if (h.settings.blockLinksOnDrag) {
                if (!this.hasTouch) {
                    jqSlide.find('a').bind('click.rs', function(e) {
                        if (h._hs) {
                            e.preventDefault();
                            return false
                        }
                    })
                } else {
                    var c = jqSlide.find('a');
                    var d;
                    c.each(function() {
                        d = $(this);
                        d.data('royalhref', d.attr('href'));
                        d.data('royaltarget', d.attr('target'));
                        d.attr('href', '#');
                        d.bind('click', function(e) {
                            e.preventDefault();
                            if (h._hs) {
                                return false
                            } else {
                                var a = $(this).data('royalhref');
                                var b = $(this).data('royaltarget');
                                if (!b || b.toLowerCase() === '_kp') {
                                    window.location.href = a
                                } else {
                                    window.open(a)
                                }
                            }
                        })
                    })
                }
            }
            if (h.settings.nonDraggableClassEnabled) {
                jqSlide.find('.non-draggable').bind(h._az, function(e) {
                    h._hs = false;
                    e.stopImmediatePropagation()
                })
            }
            dataSRC = jqSlide.attr("data-src");
            if (dataSRC == undefined || dataSRC == "" || dataSRC == "none") {
                i.preload = false
            } else {
                i.preload = true;
                i.preloadURL = dataSRC
            }
            if (h.settings.captionAnimationEnabled) {
                i.caption = jqSlide.find(".royalCaption").css("display", "none")
            }
            h.slidesArr.push(i)
        });
        this._lo = false;
        if (this.settings.removeCaptionsOpacityInIE8) {
            if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {
                this._lo = true
            }
        }
        if (this.settings.autoScaleSlider) {
            this.sliderScaleRatio = this.settings.autoScaleSliderHeight / this.settings.autoScaleSliderWidth
        }
        this.slider.css("overflow", "visible");
        this.slideWidth = 0;
        this.slideshowTimer = '';
        this.mn = false;
        this.numSlides = this.slides.length;
        this.currentSlideId = this.settings.startSlideIndex;
        this.lastSlideId = -1;
        this.isAnimating = true;
        this.wasSlideshowPlaying = false;
        this._az1 = 0;
        this._by1 = 0;
        this._cx1 = false;
        this._dw1 = [];
        this._ev1 = [];
        this._fu1 = false;
        this._gt1 = false;
        this._hs1 = 0;
        this._ir1 = 0;
        this._jq1 = 0;
        this._kp1 = 0;
        this._lo1 = 0;
        this._mn1 = 0;
        this._az2 = false;
        this._by2 = false;
        if (this.settings.slideTransitionType === "fade") {
            if (this._ir || ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix())) {
                this._cx2 = true
            } else {
                this._cx2 = false
            }
            this._dw2 = $("<div class='fade-container'></div>").appendTo(this._fu)
        }
        if (this.settings.slideshowEnabled && this.settings.slideshowDelay > 0) {
            if (!this.hasTouch && this.settings.slideshowPauseOnHover) {
                this.slider.hover(function() {
                    h._by2 = true;
                    h._ev2(true)
                }, function() {
                    h._by2 = false;
                    h._fu2(true)
                })
            }
            this.slideshowEnabled = true
        } else {
            this.slideshowEnabled = false
        }
        this._gt2();
        if (this.settings.controlNavEnabled) {
            var j;
            this._hs2Container = '';
            var k;
            if (!h.settings.controlNavThumbs) {
                this._hs2Container = $('<div class="royalControlNavOverflow"><div class="royalControlNavContainer"><div class="royalControlNavCenterer"></div></div></div>');
                j = this._hs2Container.find('.royalControlNavCenterer')
            } else {
                this.slider.addClass('with-thumbs');
                if (h.settings.controlNavThumbsNavigation) {
                    k = $('<div class="thumbsAndArrowsContainer"></div>');
                    this.thumbsArrowLeft = $("<a href='#' class='thumbsArrow left'></a>");
                    this.thumbsArrowRight = $("<a href='#' class='thumbsArrow right'></a>");
                    k.append(this.thumbsArrowLeft);
                    k.append(this.thumbsArrowRight);
                    var l = parseInt(this.thumbsArrowLeft.outerWidth(), 10);
                    this._hs2Container = $('<div class="royalControlNavOverflow royalThumbs"><div class="royalControlNavThumbsContainer"></div></div>');
                    j = this._hs2Container.find('.royalControlNavThumbsContainer')
                } else {
                    this._hs2Container = $('<div class="royalControlNavOverflow royalThumbs"><div class="royalControlNavContainer"><div class="royalControlNavCenterer"></div></div></div>');
                    j = this._hs2Container.find(".royalControlNavCenterer")
                }
            }
            var m = 0;
            numero = 1;
            this.slides.each(function(a) {
                if (h.settings.controlNavThumbs) {
                    j.append('<a href="#" class="royalThumb" style="background-image:url(' + $(this).attr("data-thumb") + ')">' + (a + 1) + '</a>')
                } else {
                    j.append('<a id="numero' + numero + '"  href="#">' + (a + 1) + '</a>')
                }
                m++;
                numero++
            });
            this.navItems = j.children();
            if (k) {
                k.append(this._hs2Container);
                this._fu.after(k)
            } else {
                this._fu.after(this._hs2Container)
            }
            if (h.settings.controlNavThumbs && h.settings.controlNavThumbsNavigation) {
                this._kp2 = true;
                this._lo2 = false;
                this._mn2 = j;
                if (this._ir) {
                    this._mn2.css({
                        '-webkit-transition-duration': this.settings.controlNavThumbsSpeed + "ms",
                        '-webkit-transition-property': '-webkit-transform',
                        '-webkit-transition-timing-function': "ease-in-out"
                    })
                }
                this._az3 = m;
                var n = this.navItems.eq(0);
                this._by3 = n.outerWidth(true);
                this._cx3 = this._by3 * this._az3;
                this._mn2.css("width", this._cx3);
                this._dw3 = parseInt(n.css("marginRight"), 10);
                this._cx3 -= this._dw3;
                this._ev3 = 0;
                this._fu3();
                this.thumbsArrowLeft.click(function(e) {
                    e.preventDefault();
                    if (!h._kp2) {
                        h._gt3(h._ev3 + h._hs3 + h._dw3)
                    }
                });
                this.thumbsArrowRight.click(function(e) {
                    e.preventDefault();
                    if (!h._lo2) {
                        h._gt3(h._ev3 - h._hs3 - h._dw3)
                    }
                })
            }
            this._ir3()
        }
        if (this.settings.directionNavEnabled) {
            this._fu.after("<a href='#' class='arrow left'/>");
            this._fu.after("<a href='#' class='arrow right'/>");
            this.arrowLeft = this.slider.find("a.arrow.left");
            this.arrowRight = this.slider.find("a.arrow.right");
            if (this.arrowLeft.length < 1 || this.arrowRight.length < 1) {
                this.settings.directionNavEnabled = false
            } else if (this.settings.directionNavAutoHide) {
                this.arrowLeft.hide();
                this.arrowRight.hide();
                this.slider.one("mousemove.arrowshover", function() {
                    h.arrowLeft.fadeIn("fast");
                    h.arrowRight.fadeIn("fast")
                });
                this.slider.hover(function() {
                    h.arrowLeft.fadeIn("fast");
                    h.arrowRight.fadeIn("fast")
                }, function() {
                    h.arrowLeft.fadeOut("fast");
                    h.arrowRight.fadeOut("fast")
                })
            }
            this._jq3()
        }
        this.sliderWidth = 0;
        this.sliderHeight = 0;
        var o;
        this._kp3 = 'onorientationchange' in window ? 'orientationchange.royalslider' : 'resize.royalslider';
        $(window).bind(this._kp3, function() {
            if (o) {
                clearTimeout(o)
            }
            o = setTimeout(function() {
                h.updateSliderSize()
            }, 100)
        });
        this.updateSliderSize();
        this.settings.beforeLoadStart.call(this);
        var p = this.slidesArr[this.currentSlideId];
        if (this.currentSlideId != 0) {
            if (!this._ir) {
                this._ev.css({
                    'left': -this.currentSlideId * this.slideWidth
                })
            } else {
                this._ev.css({
                    '-webkit-transition-duration': '0',
                    '-webkit-transition-property': 'none'
                });
                this._ev.css({
                    '-webkit-transform': 'translate3d(' + -this.currentSlideId * this.slideWidth + 'px, 0, 0)'
                })
            }
        }
        if (this.settings.welcomeScreenEnabled) {
            function hideWelcomeScreen(a) {
                h.settings.loadingComplete.call(h);
                if (a && h.settings.preloadNearbyImages) {
                    h._lo3(h.currentSlideId)
                }
                h.slider.find('.royalLoadingScreen').fadeOut(h.settings.welcomeScreenShowSpeed);
                setTimeout(function() {
                    h._mn3()
                }, h.settings.welcomeScreenShowSpeed + 100)
            }
            if (p.preload) {
                this._lo3(this.currentSlideId, function() {
                    hideWelcomeScreen(false)
                })
            } else {
                slideImg = p.slide.find('img.royalImage')[0];
                if (slideImg) {
                    if (this._az4(slideImg)) {
                        hideWelcomeScreen(true);
                        $(slideImg).css('opacity', 0);
                        $(slideImg).animate({
                            "opacity": 1
                        }, "fast")
                    } else {
                        $(slideImg).css('opacity', 0);
                        $('<img />').load(function() {
                            hideWelcomeScreen(true);
                            $(slideImg).animate({
                                "opacity": 1
                            }, "fast")
                        }).attr('src', slideImg.src)
                    }
                } else {
                    hideWelcomeScreen(true)
                }
            }
        } else {
            if (p.preload) {
                this._by4(p, function() {
                    h.settings.loadingComplete.call(h);
                    if (h.settings.preloadNearbyImages) {
                        h._lo3(h.currentSlideId)
                    }
                })
            } else {
                slideImg = p.slide.find('img.royalImage')[0];
                if (slideImg) {
                    if (this._az4(slideImg)) {
                        $(slideImg).css('opacity', 0).animate({
                            "opacity": 1
                        }, "fast")
                    } else {
                        $(slideImg).css('opacity', 0);
                        $('<img />').load(function() {
                            $(slideImg).animate({
                                "opacity": 1
                            }, "fast")
                        }).attr('src', slideImg.src)
                    }
                }
                this.settings.loadingComplete.call(this)
            }
            setTimeout(function() {
                h._mn3()
            }, 100)
        }
    }
    RoyalSlider.prototype = {
        goTo: function(a, b, c, d, f) {
            if (!this.isAnimating) {
                this.isAnimating = true;
                var g = this;
                this.lastSlideId = this.currentSlideId;
                this.currentSlideId = a;
                this._gt1 = true;
                this._fu1 = true;
                if (this.lastSlideId != a) {
                    this._ir3(c);
                    this._lo3(a)
                }
                this._jq3();
                this.settings.beforeSlideChange.call(this);
                if (this.slideshowEnabled && this.slideshowTimer) {
                    this.wasSlideshowPlaying = true;
                    this._ev2()
                }
                var h = !b ? this.settings.slideTransitionSpeed : 0;
                if (d || b || this.settings.slideTransitionType === "move") {
                    var i;
                    if (f > 0) {
                        h = f
                    } else {
                        i = this.settings.slideTransitionEasing
                    }
                    if (!this._ir) {
                        if (parseInt(this._ev.css("left"), 10) !== -this.currentSlideId * this.slideWidth) {
                            this._ev.animate({
                                left: -this.currentSlideId * this.slideWidth
                            }, h, (f > 0 ? "easeOutSine" : this.settings.slideTransitionEasing), function() {
                                g._cx4()
                            })
                        } else {
                            this._cx4()
                        }
                    } else {
                        if (this._dw4() !== -this.currentSlideId * this.slideWidth) {
                            this._ev.bind("webkitTransitionEnd.rs", function(e) {
                                if (e.target == g._ev.get(0)) {
                                    g._ev.unbind("webkitTransitionEnd.rs");
                                    g._cx4()
                                }
                            });
                            this._ev.css({
                                '-webkit-transition-duration': h + "ms",
                                '-webkit-transition-property': '-webkit-transform',
                                '-webkit-transition-timing-function': (f > 0 ? "ease-out" : "ease-in-out"),
                                '-webkit-transform': 'translate3d(' + -this.currentSlideId * this.slideWidth + 'px, 0, 0)'
                            })
                        } else {
                            this._cx4()
                        }
                    }
                } else {
                    var j = this.slidesArr[this.lastSlideId].slide;
                    var k = j.clone().appendTo(this._dw2);
                    if (!this._cx2) {
                        this._ev.css({
                            left: -this.currentSlideId * this.slideWidth
                        });
                        k.animate({
                            opacity: 0
                        }, h, this.settings.slideTransitionEasing, function() {
                            k.remove();
                            g._cx4()
                        })
                    } else {
                        if (!this._ir) {
                            this._ev.css({
                                left: -this.currentSlideId * this.slideWidth
                            })
                        } else {
                            this._ev.css({
                                '-webkit-transition-duration': '0',
                                '-webkit-transform': 'translate3d(' + -this.currentSlideId * this.slideWidth + 'px, 0, 0)',
                                'opacity': '1'
                            })
                        }
                        setTimeout(function() {
                            k.bind("webkitTransitionEnd.rs", function(e) {
                                if (e.target == k.get(0)) {
                                    k.unbind("webkitTransitionEnd.rs");
                                    k.remove();
                                    g._cx4()
                                }
                            });
                            k.css({
                                '-webkit-transition-duration': h + "ms",
                                '-webkit-transition-property': 'opacity',
                                '-webkit-transition-timing-function': "ease-in-out"
                            });
                            k.css('opacity', 0)
                        }, 100)
                    }
                }
            }
        },
        goToSilent: function(a) {
            this.goTo(a, true)
        },
        prev: function() {
            if (this.currentSlideId <= 0) {
                this.goTo(this.numSlides - 1)
            } else {
                this._ev4()
            }
        },
        next: function() {
            if (this.currentSlideId >= this.numSlides - 1) {
                this.goTo(0)
            } else {
                this._fu4()
            }
        },
        updateSliderSize: function() {
            var a = this;
            var b;
            var c;
            if (this.settings.autoScaleSlider) {
                b = this.slider.width();
                if (b != this.sliderWidth) {
                    this.slider.css("height", b * this.sliderScaleRatio)
                }
            }
            b = this.slider.width();
            c = this.slider.height();
            if (b != this.sliderWidth || c != this.sliderHeight) {
                this.sliderWidth = b;
                this.sliderHeight = c;
                this.slideWidth = this.sliderWidth + this.settings.slideSpacing;
                var d = this.slidesArr.length;
                var e, _hs4;
                for (var i = 0, len = d; i < len; ++i) {
                    e = this.slidesArr[i];
                    _hs4 = e.slide.find("img.royalImage").eq(0);
                    if (_hs4 && e.preload == false) {
                        this._ir4(_hs4, this.sliderWidth, this.sliderHeight)
                    }
                    if (this.settings.slideSpacing > 0 && i < d - 1) {
                        e.slide.css("cssText", "margin-right:" + this.settings.slideSpacing + "px !important;")
                    }
                    e.slide.css({
                        height: a.sliderHeight,
                        width: a.sliderWidth
                    })
                }
                if (!this._ir) {
                    this._ev.css({
                        "left": -this.currentSlideId * this.slideWidth,
                        width: this.slideWidth * this.numSlides
                    })
                } else {
                    if (!this._gt1) {
                        this._ev.css({
                            '-webkit-transition-duration': '0',
                            '-webkit-transition-property': 'none'
                        });
                        this._ev.css({
                            '-webkit-transform': 'translate3d(' + -this.currentSlideId * this.slideWidth + 'px, 0, 0)',
                            width: this.slideWidth * this.numSlides
                        })
                    }
                }
                if (this.settings.controlNavThumbs && this.settings.controlNavThumbsNavigation) {
                    this._fu3()
                }
            }
        },
        stopSlideshow: function() {
            this._ev2();
            this.slideshowEnabled = false;
            this.wasSlideshowPlaying = false
        },
        resumeSlideshow: function() {
            this.slideshowEnabled = true;
            if (!this.wasSlideshowPlaying) {
                this._fu2()
            }
        },
        destroy: function() {
            this._ev2();
            this._ev.unbind(this._az);
            $(document).unbind(this._by).unbind(this._cx);
            $(window).unbind(this._kp3);
            if (this.settings.keyboardNavEnabled) {
                $(document).unbind("keydown.rs")
            }
            this.slider.remove();
            delete this.slider
        },
        _lo3: function(a, b) {
            if (this.settings.preloadNearbyImages) {
                var c = this;
                this._by4(this.slidesArr[a], function() {
                    if (b) {
                        b.call()
                    }
                    c._by4(c.slidesArr[a + 1], function() {
                        c._by4(c.slidesArr[a - 1])
                    })
                })
            } else {
                this._by4(this.slidesArr[a], b)
            }
        },
        _ir3: function(a) {
            if (this.settings.controlNavEnabled) {
                this.navItems.eq(this.lastSlideId).removeClass('current');
                this.navItems.eq(this.currentSlideId).addClass("current");
                if (this.settings.controlNavThumbs && this.settings.controlNavThumbsNavigation) {
                    var b = this.navItems.eq(this.currentSlideId).position().left;
                    var c = b - Math.abs(this._ev3);
                    if (c > this._hs3 - this._by3 * 2 - 1 - this._dw3) {
                        if (!a) {
                            this._gt3(-b + this._by3)
                        } else {
                            this._gt3(-b - this._by3 * 2 + this._hs3 + this._dw3)
                        }
                    } else if (c < this._by3 * 2 - 1) {
                        if (!a) {
                            this._gt3(-b - this._by3 * 2 + this._hs3 + this._dw3)
                        } else {
                            this._gt3(-b + this._by3)
                        }
                    }
                }
            }
        },
        _jq3: function() {
            if (this.settings.directionNavEnabled) {
                if (this.settings.hideArrowOnLastSlide) {
                    if (this.currentSlideId == 0) {
                        this._lo4 = true;
                        this.arrowLeft.addClass("disabled");
                        if (this._mn4) {
                            this._mn4 = false;
                            this.arrowRight.removeClass("disabled")
                        }
                    } else if (this.currentSlideId == this.numSlides - 1) {
                        this._mn4 = true;
                        this.arrowRight.addClass("disabled");
                        if (this._lo4) {
                            this._lo4 = false;
                            this.arrowLeft.removeClass("disabled")
                        }
                    } else {
                        if (this._lo4) {
                            this._lo4 = false;
                            this.arrowLeft.removeClass("disabled")
                        } else if (this._mn4) {
                            this._mn4 = false;
                            this.arrowRight.removeClass("disabled")
                        }
                    }
                }
            }
        },
        _fu2: function(a) {
            if (this.slideshowEnabled) {
                var b = this;
                if (!this.slideshowTimer) {
                    this.slideshowTimer = setInterval(function() {
                        b.next()
                    }, this.settings.slideshowDelay)
                }
            }
        },
        _ev2: function(a) {
            if (this.slideshowTimer) {
                clearInterval(this.slideshowTimer);
                this.slideshowTimer = ''
            }
        },
        _by4: function(a, b) {
            if (a) {
                if (a.preload) {
                    var c = this;
                    var d = new Image();
                    var e = $(d);
                    e.css("opacity", 0);
                    e.addClass("royalImage");
                    a.slide.prepend(e);
                    a.slide.prepend(this._gt);
                    a.preload = false;
                    e.load(function() {
                        c._ir4(e, c.sliderWidth, c.sliderHeight);
                        e.animate({
                            "opacity": 1
                        }, 300, function() {
                            a.slide.find(".royalPreloader").remove()
                        });
                        if (b) {
                            b.call()
                        }
                    }).attr('src', a.preloadURL)
                } else {
                    if (b) {
                        b.call()
                    }
                }
            } else {
                if (b) {
                    b.call()
                }
            }
        },
        _fu3: function() {
            this._hs3 = parseInt(this._hs2Container.width(), 10);
            this._az5 = -(this._cx3 - this._hs3);
            if (this._hs3 >= this._cx3) {
                this._lo2 = true;
                this._kp2 = true;
                this.thumbsArrowRight.addClass("disabled");
                this.thumbsArrowLeft.addClass("disabled");
                this._cx1 = true;
                this._by5(0)
            } else {
                this._cx1 = false;
                var a = this.navItems.eq(this.currentSlideId).position().left;
                this._gt3(-a + this._by3)
            }
        },
        _gt3: function(a) {
            if (!this._cx1 && a != this._ev3) {
                if (a <= this._az5) {
                    a = this._az5;
                    this._kp2 = false;
                    this._lo2 = true;
                    this.thumbsArrowRight.addClass("disabled");
                    this.thumbsArrowLeft.removeClass("disabled")
                } else if (a >= 0) {
                    a = 0;
                    this._kp2 = true;
                    this._lo2 = false;
                    this.thumbsArrowLeft.addClass("disabled");
                    this.thumbsArrowRight.removeClass("disabled")
                } else {
                    if (this._kp2) {
                        this._kp2 = false;
                        this.thumbsArrowLeft.removeClass("disabled")
                    }
                    if (this._lo2) {
                        this._lo2 = false;
                        this.thumbsArrowRight.removeClass("disabled")
                    }
                }
                this._by5(a);
                this._ev3 = a
            }
        },
        _by5: function(a) {
            if (!this._ir) {
                this._mn2.animate({
                    left: a
                }, this.settings.controlNavThumbsSpeed, this.settings.controlNavThumbsEasing)
            } else {
                this._mn2.css({
                    '-webkit-transform': 'translate3d(' + a + 'px, 0, 0)'
                })
            }
        },
        _mn3: function() {
            var a = this;
            this.slider.find(".royalLoadingScreen").remove();
            if (this.settings.controlNavEnabled) {
                this.navItems.bind("click", function(e) {
                    e.preventDefault();
                    if (!a._fu1) {
                        a._cx5(e)
                    }
                })
            }
            if (this.settings.directionNavEnabled) {
                this.arrowRight.click(function(e) {
                    e.preventDefault();
                    if (!a._mn4 && !a._fu1) {
                        a.next()
                    }
                });
                this.arrowLeft.click(function(e) {
                    e.preventDefault();
                    if (!a._lo4 && !a._fu1) {
                        a.prev()
                    }
                })
            }
            if (this.settings.keyboardNavEnabled) {
                $(document).bind("keydown.rs", function(e) {
                    if (!a._fu1) {
                        if (e.keyCode === 37) {
                            a.prev()
                        } else if (e.keyCode === 39) {
                            a.next()
                        }
                    }
                })
            }
            this.wasSlideshowPlaying = true;
            this._cx4();
            this._ev.bind(this._az, function(e) {
                if (!a._gt1) {
                    a._dw5(e)
                } else if (!a.hasTouch) {
                    e.preventDefault()
                }
            });
            if (this.slideshowEnabled && !this.settings.slideshowAutoStart) {
                this._ev2()
            }
            this.settings.allComplete.call(this)
        },
        _gt2: function() {
            this._ev.removeClass('grabbing-cursor');
            this._ev.addClass('grab-cursor')
        },
        _ev5: function() {
            this._ev.removeClass('grab-cursor');
            this._ev.addClass('grabbing-cursor')
        },
        _fu4: function(a, b) {
            if (this.currentSlideId < this.numSlides - 1) {
                this.goTo(this.currentSlideId + 1, false, false, a, b)
            } else {
                this.goTo(this.currentSlideId, false, false, a, b)
            }
        },
        _ev4: function(a, b) {
            if (this.currentSlideId > 0) {
                this.goTo(this.currentSlideId - 1, false, false, a, b)
            } else {
                this.goTo(this.currentSlideId, false, false, a, b)
            }
        },
        _cx5: function(e) {
            this.goTo($(e.currentTarget).index(), false, true)
        },
        _dw4: function() {
            var a = window.getComputedStyle(this._ev.get(0), null).getPropertyValue("-webkit-transform");
            var b = a.replace(/^matrix\(/i, '').split(/, |\)$/g);
            return parseInt(b[4], 10)
        },
        _dw5: function(e) {
            if (!this._az2) {
                var a;
                if (this.hasTouch) {
                    this._fu5 = false;
                    var b = e.originalEvent.touches;
                    if (b && b.length > 0) {
                        a = b[0]
                    } else {
                        return false
                    }
                } else {
                    a = e;
                    e.preventDefault()
                }
                if (this.slideshowEnabled) {
                    if (this.slideshowTimer) {
                        this.wasSlideshowPlaying = true;
                        this._ev2()
                    } else {
                        this.wasSlideshowPlaying = false
                    }
                }
                this._ev5();
                this._az2 = true;
                var c = this;
                if (this._ir) {
                    c._ev.css({
                        '-webkit-transition-duration': '0',
                        '-webkit-transition-property': 'none'
                    })
                }
                $(document).bind(this._by, function(e) {
                    c._gt5(e)
                });
                $(document).bind(this._cx, function(e) {
                    c._hs5(e)
                });
                if (!this._ir) {
                    this._mn1 = this._jq1 = parseInt(this._ev.css("left"), 10)
                } else {
                    this._mn1 = this._jq1 = this._dw4()
                }
                this._hs = false;
                this._ir1 = this._jq1;
                this._hs1 = (e.timeStamp || new Date().getTime());
                this._kp1 = a.clientX;
                this._lo1 = a.clientY
            }
            return false
        },
        _gt5: function(e) {
            var a;
            if (this.hasTouch) {
                if (this._fu5) {
                    return false
                }
                var b = e.originalEvent.touches;
                if (b.length > 1) {
                    return false
                }
                a = b[0];
                if (Math.abs(a.clientY - this._lo1) > Math.abs(a.clientX - this._kp1) + 3) {
                    if (this.settings.lockAxis) {
                        this._fu5 = true
                    }
                    return false
                }
                e.preventDefault()
            } else {
                a = e;
                e.preventDefault()
            }
            this._by1 = this._az1;
            var c = a.clientX - this._kp1;
            if (this._by1 != c) {
                this._az1 = c
            }
            if (c != 0) {
                if (this.currentSlideId == 0) {
                    if (c > 0) {
                        c = Math.sqrt(c) * 5
                    }
                } else if (this.currentSlideId == (this.numSlides - 1)) {
                    if (c < 0) {
                        c = -Math.sqrt(-c) * 5
                    }
                }
                if (!this._ir) {
                    this._ev.css("left", this._jq1 + c)
                } else {
                    this._ev.css({
                        '-webkit-transform': 'translate3d(' + (this._jq1 + c) + 'px, 0, 0)'
                    })
                }
            }
            var d = (e.timeStamp || new Date().getTime());
            if (d - this._hs1 > 350) {
                this._hs1 = d;
                this._ir1 = this._jq1 + c
            }
            return false
        },
        _hs5: function(e) {
            if (this._az2) {
                var a = this;
                this._az2 = false;
                this._gt2();
                if (!this._ir) {
                    this.endPos = parseInt(this._ev.css("left"), 10)
                } else {
                    this.endPos = this._dw4()
                }
                this.isdrag = false;
                $(document).unbind(this._by).unbind(this._cx);
                if (this.slideshowEnabled) {
                    if (this.wasSlideshowPlaying) {
                        if (!this._by2) {
                            this._fu2()
                        }
                        this.wasSlideshowPlaying = false
                    }
                }
                if (this.endPos == this._mn1) {
                    this._hs = false;
                    return
                } else {
                    this._hs = true
                }
                var b = (this._ir1 - this.endPos);
                var c = Math.max(40, (e.timeStamp || new Date().getTime()) - this._hs1);
                var d = Math.abs(b) / c;
                var f = this.slideWidth - Math.abs(this._mn1 - this.endPos);
                var g = Math.max((f * 1.08) / d, 200);
                g = Math.min(g, 600);

                function returnToCurrent() {
                    f = Math.abs(a._mn1 - a.endPos);
                    g = Math.max((f * 1.08) / d, 200);
                    g = Math.min(g, 500);
                    a.goTo(a.currentSlideId, false, false, true, g)
                }
                if (this._mn1 - this.settings.minSlideOffset > this.endPos) {
                    if (this._by1 < this._az1) {
                        returnToCurrent();
                        return false
                    }
                    this._fu4(true, g)
                } else if (this._mn1 + this.settings.minSlideOffset < this.endPos) {
                    if (this._by1 > this._az1) {
                        returnToCurrent();
                        return false
                    }
                    this._ev4(true, g)
                } else {
                    returnToCurrent()
                }
            }
            return false
        },
        _cx4: function() {
            var a = this;
            if (this.slideshowEnabled) {
                if (this.wasSlideshowPlaying) {
                    if (!this._by2) {
                        this._fu2()
                    }
                    this.wasSlideshowPlaying = false
                }
            }
            this._fu1 = false;
            this._gt1 = false;
            if (this.settings.captionAnimationEnabled && this.lastSlideId != this.currentSlideId) {
                if (this.lastSlideId != -1) {
                    this.slidesArr[this.lastSlideId].caption.css("display", "none")
                }
                a._ir5(a.currentSlideId)
            }
            this.isAnimating = false;
            this.settings.afterSlideChange.call(this)
        },
        _ir5: function(h) {
            var j = this.slidesArr[h].caption;
            if (j && j.length > 0) {
                j.css("display", "block");
                var l = this;
                var m, fadeEnabled, moveEnabled, effectName, effectsObject, moveEffectProperty, currEffects, newEffectObj, moveOffset, delay, speed, easing, moveProp;
                var n = j.children();
                if (this._dw1.length > 0) {
                    for (var a = this._dw1.length - 1; a > -1; a--) {
                        clearTimeout(this._dw1.splice(a, 1))
                    }
                }
                if (this._ev1.length > 0) {
                    var o;
                    for (var k = this._ev1.length - 1; k > -1; k--) {
                        o = this._ev1[k];
                        if (o) {
                            if (!this._ir) {
                                if (o.running) {
                                    o.captionItem.stop(true, true)
                                } else {
                                    o.captionItem.css(o.css)
                                }
                            }
                        }
                        this._ev1.splice(k, 1)
                    }
                }
                for (var i = 0; i < n.length; i++) {
                    m = $(n[i]);
                    effectsObject = {};
                    fadeEnabled = false;
                    moveEnabled = false;
                    moveEffectProperty = "";
                    if (m.attr("data-show-effect") == undefined) {
                        currEffects = this.settings.captionShowEffects
                    } else {
                        currEffects = m.attr("data-show-effect").split(" ")
                    }
                    for (var q = 0; q < currEffects.length; q++) {
                        if (fadeEnabled && moveEnabled) {
                            break
                        }
                        effectName = currEffects[q].toLowerCase();
                        if (!fadeEnabled && effectName == "fade") {
                            fadeEnabled = true;
                            effectsObject['opacity'] = 1
                        } else if (moveEnabled) {
                            break
                        } else if (effectName == "movetop") {
                            moveEffectProperty = "margin-top"
                        } else if (effectName == "moveleft") {
                            moveEffectProperty = "margin-left"
                        } else if (effectName == "movebottom") {
                            moveEffectProperty = "margin-bottom"
                        } else if (effectName == "moveright") {
                            moveEffectProperty = "margin-right"
                        }
                        if (moveEffectProperty != "") {
                            effectsObject['moveProp'] = moveEffectProperty;
                            if (!l._ir) {
                                effectsObject['moveStartPos'] = parseInt(m.css(moveEffectProperty), 10)
                            } else {
                                effectsObject['moveStartPos'] = 0
                            }
                            moveEnabled = true
                        }
                    }
                    moveOffset = parseInt(m.attr("data-move-offset"), 10);
                    if (isNaN(moveOffset)) {
                        moveOffset = this.settings.captionMoveOffset
                    }
                    delay = parseInt(m.attr("data-delay"), 10);
                    if (isNaN(delay)) {
                        delay = l.settings.captionShowDelay * i
                    }
                    speed = parseInt(m.attr("data-speed"), 10);
                    if (isNaN(speed)) {
                        speed = l.settings.captionShowSpeed
                    }
                    easing = m.attr("data-easing");
                    if (!easing) {
                        easing = l.settings.captionShowEasing
                    }
                    newEffectObj = {};
                    if (moveEnabled) {
                        moveProp = effectsObject.moveProp;
                        if (moveProp == "margin-right") {
                            moveProp = "margin-left";
                            newEffectObj[moveProp] = effectsObject.moveStartPos + moveOffset
                        } else if (moveProp == "margin-bottom") {
                            moveProp = "margin-top";
                            newEffectObj[moveProp] = effectsObject.moveStartPos + moveOffset
                        } else {
                            newEffectObj[moveProp] = effectsObject.moveStartPos - moveOffset
                        }
                    }
                    if (!l._lo && fadeEnabled) {
                        m.css("opacity", 0)
                    }
                    if (!l._ir) {
                        m.css("visibility", "hidden");
                        m.css(newEffectObj);
                        if (moveEnabled) {
                            newEffectObj[moveProp] = effectsObject.moveStartPos
                        }
                        if (!l._lo && fadeEnabled) {
                            newEffectObj.opacity = 1
                        }
                    } else {
                        var p = {};
                        if (moveEnabled) {
                            p['-webkit-transition-duration'] = "0";
                            p['-webkit-transition-property'] = "none";
                            p["-webkit-transform"] = "translate3d(" + (isNaN(newEffectObj["margin-left"]) ? 0 : (newEffectObj["margin-left"] + "px")) + ", " + (isNaN(newEffectObj["margin-top"]) ? 0 : (newEffectObj["margin-top"] + "px")) + ",0)";
                            delete newEffectObj["margin-left"];
                            delete newEffectObj["margin-top"];
                            newEffectObj["-webkit-transform"] = "translate3d(0,0,0)"
                        }
                        newEffectObj.visibility = "visible";
                        newEffectObj.opacity = 1;
                        if (!l._lo && fadeEnabled) {
                            p["opacity"] = 0
                        }
                        p["visibility"] = "hidden";
                        m.css(p)
                    }
                    this._ev1.push({
                        captionItem: m,
                        css: newEffectObj,
                        running: false
                    });
                    this._dw1.push(setTimeout((function(a, b, c, d, e, f, g) {
                        return function() {
                            l._ev1[e].running = true;
                            if (!l._ir) {
                                a.css("visibility", "visible").animate(b, c, d, function() {
                                    if (l._jq && f) {
                                        a.get(0).style.removeAttribute('filter')
                                    }
                                    delete l._ev1[e]
                                })
                            } else {
                                a.css({
                                    '-webkit-transition-duration': (c + "ms"),
                                    '-webkit-transition-property': 'opacity' + (g ? ', -webkit-transform' : ''),
                                    '-webkit-transition-timing-function': 'ease-out'
                                });
                                a.css(b)
                            }
                        }
                    })(m, newEffectObj, speed, easing, i, fadeEnabled, moveEnabled), delay))
                }
            }
        },
        _ir4: function(f, g, h) {
            var i = this.settings.imageScaleMode;
            var j = this.settings.imageAlignCenter;
            if (j || i == "fill" || i == "fit") {
                var k = false;

                function scaleImg() {
                    var d, vRatio, ratio, nWidth, nHeight;
                    var e = new Image();
                    e.onload = function() {
                        var a = this.width;
                        var b = this.height;
                        var c = parseInt(f.css("borderWidth"), 10);
                        c = isNaN(c) ? 0 : c;
                        if (i == "fill" || i == "fit") {
                            d = g / a;
                            vRatio = h / b;
                            if (i == "fill") {
                                ratio = d > vRatio ? d : vRatio
                            } else if (i == "fit") {
                                ratio = d < vRatio ? d : vRatio
                            } else {
                                ratio = 1
                            }
                            nWidth = parseInt(a * ratio, 10) - c;
                            nHeight = parseInt(b * ratio, 10) - c;
                            f.attr({
                                "width": nWidth,
                                "height": nHeight
                            }).css({
                                "width": nWidth,
                                "height": nHeight
                            })
                        } else {
                            nWidth = a - c;
                            nHeight = b - c;
                            f.attr("width", nWidth).attr("height", nHeight)
                        }
                        if (j) {
                            f.css({
                                "margin-left": Math.floor((g - nWidth) / 2),
                                "margin-top": Math.floor((h - nHeight) / 2)
                            })
                        }
                    };
                    e.src = f.attr("src")
                };
                f.removeAttr('height').removeAttr('width');
                if (!this._az4(f.get(0))) {
                    $('<img />').load(function() {
                        scaleImg()
                    }).attr('src', f.attr("src"))
                } else {
                    scaleImg()
                }
            }
        },
        _az4: function(a) {
            if (a) {
                if (!a.complete) {
                    return false
                }
                if (typeof a.naturalWidth != "undefined" && a.naturalWidth == 0) {
                    return false
                }
            } else {
                return false
            }
            return true
        }
    };
    $.fn.royalSlider = function(b) {
        return this.each(function() {
            var a = new RoyalSlider($(this), b);
            $(this).data("royalSlider", a)
        })
    };
    $.fn.royalSlider.defaults = {
        lockAxis: true,
        preloadNearbyImages: true,
        imageScaleMode: "none",
        imageAlignCenter: false,
        keyboardNavEnabled: false,
        directionNavEnabled: true,
        directionNavAutoHide: false,
        hideArrowOnLastSlide: true,
        slideTransitionType: "move",
        slideTransitionSpeed: 400,
        slideTransitionEasing: "easeInOutSine",
        captionAnimationEnabled: true,
        captionShowEffects: ["fade", "moveleft"],
        captionMoveOffset: 20,
        captionShowSpeed: 400,
        captionShowEasing: "easeOutCubic",
        captionShowDelay: 200,
        controlNavEnabled: true,
        controlNavThumbs: false,
        controlNavThumbsNavigation: true,
        controlNavThumbsSpeed: 400,
        controlNavThumbsEasing: "easeInOutSine",
        slideshowEnabled: false,
        slideshowDelay: 5000,
        slideshowPauseOnHover: true,
        slideshowAutoStart: true,
        welcomeScreenEnabled: false,
        welcomeScreenShowSpeed: 500,
        minSlideOffset: 20,
        disableTranslate3d: false,
        removeCaptionsOpacityInIE8: false,
        startSlideIndex: 0,
        slideSpacing: 0,
        blockLinksOnDrag: true,
        nonDraggableClassEnabled: true,
        dragUsingMouse: true,
        autoScaleSlider: false,
        autoScaleSliderWidth: 960,
        autoScaleSliderHeight: 400,
        beforeSlideChange: function() {},
        afterSlideChange: function() {},
        beforeLoadStart: function() {},
        loadingComplete: function() {},
        allComplete: function() {}
    };
    $.fn.royalSlider.settings = {}
})(jQuery);

(function(g) {
    var q = {
            vertical: !1,
            rtl: !1,
            start: 1,
            offset: 1,
            size: null,
            scroll: 3,
            visible: null,
            animation: "normal",
            easing: "swing",
            auto: 0,
            wrap: null,
            initCallback: null,
            setupCallback: null,
            reloadCallback: null,
            itemLoadCallback: null,
            itemFirstInCallback: null,
            itemFirstOutCallback: null,
            itemLastInCallback: null,
            itemLastOutCallback: null,
            itemVisibleInCallback: null,
            itemVisibleOutCallback: null,
            animationStepCallback: null,
            buttonNextHTML: "<div></div>",
            buttonPrevHTML: "<div></div>",
            buttonNextEvent: "click",
            buttonPrevEvent: "click",
            buttonNextCallback: null,
            buttonPrevCallback: null,
            itemFallbackDimension: null
        },
        m = !1;
    g(window).bind("load.jcarousel", function() {
        m = !0
    });
    g.jcarousel = function(a, c) {
        this.options = g.extend({}, q, c || {});
        this.autoStopped = this.locked = !1;
        this.buttonPrevState = this.buttonNextState = this.buttonPrev = this.buttonNext = this.list = this.clip = this.container = null;
        if (!c || c.rtl === void 0) this.options.rtl = (g(a).attr("dir") || g("html").attr("dir") || "").toLowerCase() == "rtl";
        this.wh = !this.options.vertical ? "width" : "height";
        this.lt = !this.options.vertical ? this.options.rtl ? "right" : "left" : "top";
        for (var b = "", d = a.className.split(" "), f = 0; f < d.length; f++)
            if (d[f].indexOf("jcarousel-skin") != -1) {
                g(a).removeClass(d[f]);
                b = d[f];
                break
            }
        a.nodeName.toUpperCase() == "UL" || a.nodeName.toUpperCase() == "OL" ? (this.list = g(a), this.clip = this.list.parents(".jcarousel-clip"), this.container = this.list.parents(".jcarousel-container")) : (this.container = g(a), this.list = this.container.find("ul,ol").eq(0), this.clip = this.container.find(".jcarousel-clip"));
        if (this.clip.size() === 0) this.clip = this.list.wrap("<div></div>").parent();
        if (this.container.size() === 0) this.container = this.clip.wrap("<div></div>").parent();
        b !== "" && this.container.parent()[0].className.indexOf("jcarousel-skin") == -1 && this.container.wrap('<div class=" ' + b + '"></div>');
        this.buttonPrev = g(".jcarousel-prev", this.container);
        if (this.buttonPrev.size() === 0 && this.options.buttonPrevHTML !== null) this.buttonPrev = g(this.options.buttonPrevHTML).appendTo(this.container);
        this.buttonPrev.addClass(this.className("jcarousel-prev"));
        this.buttonNext = g(".jcarousel-next", this.container);
        if (this.buttonNext.size() === 0 && this.options.buttonNextHTML !== null) this.buttonNext = g(this.options.buttonNextHTML).appendTo(this.container);
        this.buttonNext.addClass(this.className("jcarousel-next"));
        this.clip.addClass(this.className("jcarousel-clip")).css({
            position: "relative"
        });
        this.list.addClass(this.className("jcarousel-list")).css({
            overflow: "hidden",
            position: "relative",
            top: 0,
            margin: 0,
            padding: 0
        }).css(this.options.rtl ? "right" : "left", 0);
        this.container.addClass(this.className("jcarousel-container")).css({
            position: "relative"
        });
        !this.options.vertical && this.options.rtl && this.container.addClass("jcarousel-direction-rtl").attr("dir", "rtl");
        var j = this.options.visible !== null ? Math.ceil(this.clipping() / this.options.visible) : null,
            b = this.list.children("li"),
            e = this;
        if (b.size() > 0) {
            var h = 0,
                i = this.options.offset;
            b.each(function() {
                e.format(this, i++);
                h += e.dimension(this, j)
            });
            this.list.css(this.wh, h + 100 + "px");
            if (!c || c.size === void 0) this.options.size = b.size()
        }
        this.container.css("display", "block");
        this.buttonNext.css("display", "block");
        this.buttonPrev.css("display", "block");
        this.funcNext = function() {
            e.next()
        };
        this.funcPrev = function() {
            e.prev()
        };
        this.funcResize = function() {
            e.resizeTimer && clearTimeout(e.resizeTimer);
            e.resizeTimer = setTimeout(function() {
                e.reload()
            }, 100)
        };
        this.options.initCallback !== null && this.options.initCallback(this, "init");
        !m && g.browser.safari ? (this.buttons(!1, !1), g(window).bind("load.jcarousel", function() {
            e.setup()
        })) : this.setup()
    };
    var f = g.jcarousel;
    f.fn = f.prototype = {
        jcarousel: "0.2.8"
    };
    f.fn.extend = f.extend = g.extend;
    f.fn.extend({
        setup: function() {
            this.prevLast = this.prevFirst = this.last = this.first = null;
            this.animating = !1;
            this.tail = this.resizeTimer = this.timer = null;
            this.inTail = !1;
            if (!this.locked) {
                this.list.css(this.lt, this.pos(this.options.offset) + "px");
                var a = this.pos(this.options.start, !0);
                this.prevFirst = this.prevLast = null;
                this.animate(a, !1);
                g(window).unbind("resize.jcarousel", this.funcResize).bind("resize.jcarousel", this.funcResize);
                this.options.setupCallback !== null && this.options.setupCallback(this)
            }
        },
        reset: function() {
            this.list.empty();
            this.list.css(this.lt, "0px");
            this.list.css(this.wh, "10px");
            this.options.initCallback !== null && this.options.initCallback(this, "reset");
            this.setup()
        },
        reload: function() {
            this.tail !== null && this.inTail && this.list.css(this.lt, f.intval(this.list.css(this.lt)) + this.tail);
            this.tail = null;
            this.inTail = !1;
            this.options.reloadCallback !== null && this.options.reloadCallback(this);
            if (this.options.visible !== null) {
                var a = this,
                    c = Math.ceil(this.clipping() / this.options.visible),
                    b = 0,
                    d = 0;
                this.list.children("li").each(function(f) {
                    b += a.dimension(this, c);
                    f + 1 < a.first && (d = b)
                });
                this.list.css(this.wh, b + "px");
                this.list.css(this.lt, -d + "px")
            }
            this.scroll(this.first, !1)
        },
        lock: function() {
            this.locked = !0;
            this.buttons()
        },
        unlock: function() {
            this.locked = !1;
            this.buttons()
        },
        size: function(a) {
            if (a !== void 0) this.options.size = a, this.locked || this.buttons();
            return this.options.size
        },
        has: function(a, c) {
            if (c === void 0 || !c) c = a;
            if (this.options.size !== null && c > this.options.size) c = this.options.size;
            for (var b = a; b <= c; b++) {
                var d = this.get(b);
                if (!d.length || d.hasClass("jcarousel-item-placeholder")) return !1
            }
            return !0
        },
        get: function(a) {
            return g(">.jcarousel-item-" + a, this.list)
        },
        add: function(a, c) {
            var b = this.get(a),
                d = 0,
                p = g(c);
            if (b.length === 0)
                for (var j, e = f.intval(a), b = this.create(a);;) {
                    if (j = this.get(--e), e <= 0 || j.length) {
                        e <= 0 ? this.list.prepend(b) : j.after(b);
                        break
                    }
                } else d = this.dimension(b);
            p.get(0).nodeName.toUpperCase() == "LI" ? (b.replaceWith(p), b = p) : b.empty().append(c);
            this.format(b.removeClass(this.className("jcarousel-item-placeholder")), a);
            p = this.options.visible !== null ? Math.ceil(this.clipping() / this.options.visible) : null;
            d = this.dimension(b, p) - d;
            a > 0 && a < this.first && this.list.css(this.lt, f.intval(this.list.css(this.lt)) - d + "px");
            this.list.css(this.wh, f.intval(this.list.css(this.wh)) + d + "px");
            return b
        },
        remove: function(a) {
            var c = this.get(a);
            if (c.length && !(a >= this.first && a <= this.last)) {
                var b = this.dimension(c);
                a < this.first && this.list.css(this.lt, f.intval(this.list.css(this.lt)) + b + "px");
                c.remove();
                this.list.css(this.wh, f.intval(this.list.css(this.wh)) - b + "px")
            }
        },
        next: function() {
            this.tail !== null && !this.inTail ? this.scrollTail(!1) : this.scroll((this.options.wrap == "both" || this.options.wrap == "last") && this.options.size !== null && this.last == this.options.size ? 1 : this.first + this.options.scroll)
        },
        prev: function() {
            this.tail !== null && this.inTail ? this.scrollTail(!0) : this.scroll((this.options.wrap == "both" || this.options.wrap == "first") && this.options.size !== null && this.first == 1 ? this.options.size : this.first - this.options.scroll)
        },
        scrollTail: function(a) {
            if (!this.locked && !this.animating && this.tail) {
                this.pauseAuto();
                var c = f.intval(this.list.css(this.lt)),
                    c = !a ? c - this.tail : c + this.tail;
                this.inTail = !a;
                this.prevFirst = this.first;
                this.prevLast = this.last;
                this.animate(c)
            }
        },
        scroll: function(a, c) {
            !this.locked && !this.animating && (this.pauseAuto(), this.animate(this.pos(a), c))
        },
        pos: function(a, c) {
            var b = f.intval(this.list.css(this.lt));
            if (this.locked || this.animating) return b;
            this.options.wrap != "circular" && (a = a < 1 ? 1 : this.options.size && a > this.options.size ? this.options.size : a);
            for (var d = this.first > a, g = this.options.wrap != "circular" && this.first <= 1 ? 1 : this.first, j = d ? this.get(g) : this.get(this.last), e = d ? g : g - 1, h = null, i = 0, k = !1, l = 0; d ? --e >= a : ++e < a;) {
                h = this.get(e);
                k = !h.length;
                if (h.length === 0 && (h = this.create(e).addClass(this.className("jcarousel-item-placeholder")), j[d ? "before" : "after"](h), this.first !== null && this.options.wrap == "circular" && this.options.size !== null && (e <= 0 || e > this.options.size))) j = this.get(this.index(e)), j.length && (h = this.add(e, j.clone(!0)));
                j = h;
                l = this.dimension(h);
                k && (i += l);
                if (this.first !== null && (this.options.wrap == "circular" || e >= 1 && (this.options.size === null || e <= this.options.size))) b = d ? b + l : b - l
            }
            for (var g = this.clipping(), m = [], o = 0, n = 0, j = this.get(a - 1), e = a; ++o;) {
                h = this.get(e);
                k = !h.length;
                if (h.length === 0) {
                    h = this.create(e).addClass(this.className("jcarousel-item-placeholder"));
                    if (j.length === 0) this.list.prepend(h);
                    else j[d ? "before" : "after"](h);
                    if (this.first !== null && this.options.wrap == "circular" && this.options.size !== null && (e <= 0 || e > this.options.size)) j = this.get(this.index(e)), j.length && (h = this.add(e, j.clone(!0)))
                }
                j = h;
                l = this.dimension(h);
                if (l === 0) throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...");
                this.options.wrap != "circular" && this.options.size !== null && e > this.options.size ? m.push(h) : k && (i += l);
                n += l;
                if (n >= g) break;
                e++
            }
            for (h = 0; h < m.length; h++) m[h].remove();
            i > 0 && (this.list.css(this.wh, this.dimension(this.list) + i + "px"), d && (b -= i, this.list.css(this.lt, f.intval(this.list.css(this.lt)) - i + "px")));
            i = a + o - 1;
            if (this.options.wrap != "circular" && this.options.size && i > this.options.size) i = this.options.size;
            if (e > i) {
                o = 0;
                e = i;
                for (n = 0; ++o;) {
                    h = this.get(e--);
                    if (!h.length) break;
                    n += this.dimension(h);
                    if (n >= g) break
                }
            }
            e = i - o + 1;
            this.options.wrap != "circular" && e < 1 && (e = 1);
            if (this.inTail && d) b += this.tail, this.inTail = !1;
            this.tail = null;
            if (this.options.wrap != "circular" && i == this.options.size && i - o + 1 >= 1 && (d = f.intval(this.get(i).css(!this.options.vertical ? "marginRight" : "marginBottom")), n - d > g)) this.tail = n - g - d;
            if (c && a === this.options.size && this.tail) b -= this.tail, this.inTail = !0;
            for (; a-- > e;) b += this.dimension(this.get(a));
            this.prevFirst = this.first;
            this.prevLast = this.last;
            this.first = e;
            this.last = i;
            return b
        },
        animate: function(a, c) {
            if (!this.locked && !this.animating) {
                this.animating = !0;
                var b = this,
                    d = function() {
                        b.animating = !1;
                        a === 0 && b.list.css(b.lt, 0);
                        !b.autoStopped && (b.options.wrap == "circular" || b.options.wrap == "both" || b.options.wrap == "last" || b.options.size === null || b.last < b.options.size || b.last == b.options.size && b.tail !== null && !b.inTail) && b.startAuto();
                        b.buttons();
                        b.notify("onAfterAnimation");
                        if (b.options.wrap == "circular" && b.options.size !== null)
                            for (var c = b.prevFirst; c <= b.prevLast; c++) c !== null && !(c >= b.first && c <= b.last) && (c < 1 || c > b.options.size) && b.remove(c)
                    };
                this.notify("onBeforeAnimation");
                if (!this.options.animation || c === !1) this.list.css(this.lt, a + "px"), d();
                else {
                    var f = !this.options.vertical ? this.options.rtl ? {
                            right: a
                        } : {
                            left: a
                        } : {
                            top: a
                        },
                        d = {
                            duration: this.options.animation,
                            easing: this.options.easing,
                            complete: d
                        };
                    if (g.isFunction(this.options.animationStepCallback)) d.step = this.options.animationStepCallback;
                    this.list.animate(f, d)
                }
            }
        },
        startAuto: function(a) {
            if (a !== void 0) this.options.auto = a;
            if (this.options.auto === 0) return this.stopAuto();
            if (this.timer === null) {
                this.autoStopped = !1;
                var c = this;
                this.timer = window.setTimeout(function() {
                    c.next()
                }, this.options.auto * 1E3)
            }
        },
        stopAuto: function() {
            this.pauseAuto();
            this.autoStopped = !0
        },
        pauseAuto: function() {
            if (this.timer !== null) window.clearTimeout(this.timer), this.timer = null
        },
        buttons: function(a, c) {
            if (a == null && (a = !this.locked && this.options.size !== 0 && (this.options.wrap && this.options.wrap != "first" || this.options.size === null || this.last < this.options.size), !this.locked && (!this.options.wrap || this.options.wrap == "first") && this.options.size !== null && this.last >= this.options.size)) a = this.tail !== null && !this.inTail;
            if (c == null && (c = !this.locked && this.options.size !== 0 && (this.options.wrap && this.options.wrap != "last" || this.first > 1), !this.locked && (!this.options.wrap || this.options.wrap == "last") && this.options.size !== null && this.first == 1)) c = this.tail !== null && this.inTail;
            var b = this;
            this.buttonNext.size() > 0 ? (this.buttonNext.unbind(this.options.buttonNextEvent + ".jcarousel", this.funcNext), a && this.buttonNext.bind(this.options.buttonNextEvent + ".jcarousel", this.funcNext), this.buttonNext[a ? "removeClass" : "addClass"](this.className("jcarousel-next-disabled")).attr("disabled", a ? !1 : !0), this.options.buttonNextCallback !== null && this.buttonNext.data("jcarouselstate") != a && this.buttonNext.each(function() {
                b.options.buttonNextCallback(b, this, a)
            }).data("jcarouselstate", a)) : this.options.buttonNextCallback !== null && this.buttonNextState != a && this.options.buttonNextCallback(b, null, a);
            this.buttonPrev.size() > 0 ? (this.buttonPrev.unbind(this.options.buttonPrevEvent + ".jcarousel", this.funcPrev), c && this.buttonPrev.bind(this.options.buttonPrevEvent + ".jcarousel", this.funcPrev), this.buttonPrev[c ? "removeClass" : "addClass"](this.className("jcarousel-prev-disabled")).attr("disabled", c ? !1 : !0), this.options.buttonPrevCallback !== null && this.buttonPrev.data("jcarouselstate") != c && this.buttonPrev.each(function() {
                b.options.buttonPrevCallback(b, this, c)
            }).data("jcarouselstate", c)) : this.options.buttonPrevCallback !== null && this.buttonPrevState != c && this.options.buttonPrevCallback(b, null, c);
            this.buttonNextState = a;
            this.buttonPrevState = c
        },
        notify: function(a) {
            var c = this.prevFirst === null ? "init" : this.prevFirst < this.first ? "next" : "prev";
            this.callback("itemLoadCallback", a, c);
            this.prevFirst !== this.first && (this.callback("itemFirstInCallback", a, c, this.first), this.callback("itemFirstOutCallback", a, c, this.prevFirst));
            this.prevLast !== this.last && (this.callback("itemLastInCallback", a, c, this.last), this.callback("itemLastOutCallback", a, c, this.prevLast));
            this.callback("itemVisibleInCallback", a, c, this.first, this.last, this.prevFirst, this.prevLast);
            this.callback("itemVisibleOutCallback", a, c, this.prevFirst, this.prevLast, this.first, this.last)
        },
        callback: function(a, c, b, d, f, j, e) {
            if (!(this.options[a] == null || typeof this.options[a] != "object" && c != "onAfterAnimation")) {
                var h = typeof this.options[a] == "object" ? this.options[a][c] : this.options[a];
                if (g.isFunction(h)) {
                    var i = this;
                    if (d === void 0) h(i, b, c);
                    else if (f === void 0) this.get(d).each(function() {
                        h(i, this, d, b, c)
                    });
                    else
                        for (var a = function(a) {
                                i.get(a).each(function() {
                                    h(i, this, a, b, c)
                                })
                            }, k = d; k <= f; k++) k !== null && !(k >= j && k <= e) && a(k)
                }
            }
        },
        create: function(a) {
            return this.format("<li></li>", a)
        },
        format: function(a, c) {
            for (var a = g(a), b = a.get(0).className.split(" "), d = 0; d < b.length; d++) b[d].indexOf("jcarousel-") != -1 && a.removeClass(b[d]);
            a.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-" + c)).css({
                "float": this.options.rtl ? "right" : "left",
                "list-style": "none"
            }).attr("jcarouselindex", c);
            return a
        },
        className: function(a) {
            return a + " " + a + (!this.options.vertical ? "-horizontal" : "-vertical")
        },
        dimension: function(a, c) {
            var b = g(a);
            if (c == null) return !this.options.vertical ? b.outerWidth(!0) || f.intval(this.options.itemFallbackDimension) : b.outerHeight(!0) || f.intval(this.options.itemFallbackDimension);
            else {
                var d = !this.options.vertical ? c - f.intval(b.css("marginLeft")) - f.intval(b.css("marginRight")) : c - f.intval(b.css("marginTop")) - f.intval(b.css("marginBottom"));
                g(b).css(this.wh, d + "px");
                return this.dimension(b)
            }
        },
        clipping: function() {
            return !this.options.vertical ? this.clip[0].offsetWidth - f.intval(this.clip.css("borderLeftWidth")) - f.intval(this.clip.css("borderRightWidth")) : this.clip[0].offsetHeight - f.intval(this.clip.css("borderTopWidth")) - f.intval(this.clip.css("borderBottomWidth"))
        },
        index: function(a, c) {
            if (c == null) c = this.options.size;
            return Math.round(((a - 1) / c - Math.floor((a - 1) / c)) * c) + 1
        }
    });
    f.extend({
        defaults: function(a) {
            return g.extend(q, a || {})
        },
        intval: function(a) {
            a = parseInt(a, 10);
            return isNaN(a) ? 0 : a
        },
        windowLoaded: function() {
            m = !0
        }
    });
    g.fn.jcarousel = function(a) {
        if (typeof a == "string") {
            var c = g(this).data("jcarousel"),
                b = Array.prototype.slice.call(arguments, 1);
            return c[a].apply(c, b)
        } else return this.each(function() {
            var b = g(this).data("jcarousel");
            b ? (a && g.extend(b.options, a), b.reload()) : g(this).data("jcarousel", new f(this, a))
        })
    }
})(jQuery);

// Remover banners vazios

$('.royalSlidesContainer li').filter(function() {
    return $(this).html() === ''
}).remove();

var slider = $('.royalSlidesContainer li');


$(document).ready(function() {

    $('.search-multiple-navigator fieldset').each(function() {
        $(this).find('div').hide();

        $(this).addClass('active').find('div').slideDown();
        $(this).click(function() {
            $(this).toggleClass('active').find('div').slideToggle();
        });

    });

    $('.x-opentab').click(function() {
        $(this).toggleClass('active');
        $('.x-tab').toggleClass('open');
    });
    var cont = slider.size();
    slider.each(function(index) {
        if (cont == 1) {
            $('.royalControlNavCenterer a').hide();
        }
    });
// SHOW / HIDE  QUICK LOOK DE PRATELEIRA


    $("[dimension=Cor]").each(function(i, obj) {
        var nomeArquivo = $(obj).attr("data-value").toLowerCase();

        while (nomeArquivo.indexOf(" ") != -1) {
            nomeArquivo = nomeArquivo.replace(" ", "_");
        }

        $(obj).next().css("background-image", "url(/arquivos/" + nomeArquivo + ".jpg)");
        $(obj).next().css("background-size", "34px 28px");

    });


    $('.prateleira li').each(function() {

        if ($(this).html() == "") {
            $(this).remove();
        }

    });

    $('#globalMenu h3').each(function() {
        var conteudo = $(this).next('ul');
        $(this).append(conteudo);
    });

    if ($('body.testeLayout').length > 0) {

        $(".maisVendidos ul").jcarousel({
            scroll: 1,
            wrap: 'circular'
        });
    }

    if ($('body.home').length > 0) {

        $('#banner-rotator').royalSlider({
            slideshowEnabled: true,
            slideshowDelay: 6000,
            slideTransitionSpeed: 1000,
            imageScaleMode: "fill",
            hideArrowOnLastSlide: true,
            slideSpacing: 20
        });

        $(".maisVendidos ul").jcarousel({
            scroll: 1,
            wrap: 'circular'
        });

        $("#look").jcarousel({
            scroll: 1,
            wrap: 'circular'
        });


        $('.jcarousel-clip').wrap('<div class="envolveJC"></div>');


        $('.prateleira h2').each(function() {

            var palavras = $(this).text().split(' ');
            qtdPalavras = palavras.length;

            if (qtdPalavras == 2) {
                $(this).html('<span>' + palavras[0] + '</span><span>' + palavras[1] + '</span>');
            }

            if (qtdPalavras == 3) {
                $(this).html('<span>' + palavras[0] + '</span><span>' + palavras[1] + ' ' + palavras[2] + '</span>');
            }

        });

        $('.newsletterClientName').val('cliente');

    } /*if home*/


    if ($('body.departamento').length > 0) {

        $('#banner-rotator').royalSlider({
            slideshowEnabled: true,
            slideshowDelay: 6000,
            slideTransitionSpeed: 1000,
            imageScaleMode: "fill",
            hideArrowOnLastSlide: true,
            slideSpacing: 20
        });

        $('#sidebar a').each(function() {
            var texto = $(this).html();
            var sliced = texto.split('(');
            $(this).html(sliced[0]);
        });

    } /*if departamento */



    if ($('body.resultado-busca').length > 0) {

        $('#sidebar a').each(function() {
            var texto = $(this).html();
            var sliced = texto.split('(');
            $(this).html(sliced[0]);
        });

        $('.searchResultsTime:eq(1) , .sub:eq(1)').hide();

    } /* if resultado de busca/categoria */


    if ($('body.produto').length > 0) {

        $('.Cor .skuList label').each(function() {
            var colorname = $(this).text();
            $(this).attr('data-content', colorname);
        });

        $('ul.Tamanho').append('<span>Selecione o seu</span><a class="media" href="#img1">guia de medida</a>');


        $('#divTitulo').each(function() {

            var palavras = $(this).text().split(' ');
            qtdPalavras = palavras.length;

            $(this).html('<span>' + palavras[0] + '</span><span>' + palavras[1] + '</span>');

        });


        $('.prateleira h2').each(function() {

            var palavras = $(this).text().split(' ');
            qtdPalavras = palavras.length;

            if (qtdPalavras == 2) {
                $(this).html('<span>' + palavras[0] + '</span><span>' + palavras[1] + '</span>');
            }

            if (qtdPalavras == 3) {
                $(this).html('<span>' + palavras[0] + '</span><span>' + palavras[1] + ' ' + palavras[2] + '</span>');
            }

            if (qtdPalavras == 4) {
                $(this).html('<span>' + palavras[0] + ' ' + palavras[1] + '</span><span>' + palavras[2] + ' ' + palavras[3] + '</span>');
            }

        });

        $(".maisVendidos ul").jcarousel({
            scroll: 1,
            wrap: 'circular'
        })

        $('.jcarousel-clip').wrap('<div class="envolveJC"></div>');


        $('.maisVendidos, #acessorios').each(function() {

            if ($(this).html() == "") {
                $(this).hide();
            }

        });

        $("#avalie-topo a").click(function() {
            $('html, body').animate({
                scrollTop: $("#resenha").offset().top
            }, 800);
        });


        $('.showInformacao').click(function() {
            $('#informacoes-interna .recebe-informacao').hide();
            $('.showInformacao').removeClass('ativo');
            $(this).next('.recebe-informacao').show();
            $(this).addClass('ativo');
            return false;
        });



        var larguraPagina = $(window).width();
        var alturaPagina = $(document).height();
        $('#blackout').css({
            height: alturaPagina + 'px',
            width: larguraPagina + 'px'
        });

        $('.specification a').click(function() {
            $('#blackout, #tabelaTamanhos').fadeIn();
        });
        $('#blackout, #tabelaTamanhos .close').click(function() {
            $('#blackout, #tabelaTamanhos').fadeOut();
        });

        $('.productReference').prepend('REF: ');
        if ($(".topic.Cor").length > 0)
            $(".topic.Cor").detach().insertBefore(".topic.Tamanho");

    } /* if produto */


});


$(window).load(function() {
    if ($(".welcome a[href='/no-cache/user/logout']").length > 0) { // estÃ¡ logado
        $(".welcome em a").text("| Sign out");
        $(".welcome em a").css("color", "white");
    } else {
        $(".welcome em").html("JÃ¡ Ã© cadastrado?").append("<a id='login' href='/Site/Login.aspx'>clique aqui</a>");
    }

    $("#produto #lnkPubliqueResenha").html("VER TODOS OS COMENTÃRIOS");

    $('#addFavoritos').click(function() {
        var bookmarkurl = "http://www.marciamello.com.br"
        var bookmarktitle = "Marcia Mello"
        addbookmark();
    });
});

function addbookmark() {

    // internet explorer
    if ($.browser.msie == true) {
        alert('Pressione as teclas ALT + C para adicionar aos favoritos.');
        return false;
        // outros navegadores
    } else {
        alert('Pressione as teclas CTRL + D para adicionar aos favoritos.');
    }

    // if (document.all){
    // 	window.external.AddFavorite(bookmarkurl,bookmarktitle);
    // }
}

sendAllIn = function(email, nome) {
    __blc['id'] = "6794";
    try {
        lc.sendData({
            evento: "Novo Cadastro",
            nm_email: email,
            lista: {
                nm_lista: "Cadastros_VTEX",
                nome: nome
            }
        });
    } catch (e) {}
}

newsFooter = function() {
    $(document).on('click', '#newsletterButtonOK', function(e) {
        var email = $('.newsletter-footer #newsletterClientEmail').val();
        var nome = "Cadastro Footer"
        sendAllIn(email, nome);
    });
}

newsPopup = function() {
    $(document).on('click', '.newsletter-button-ok', function() {
        var email = $('.popup-news #newsletterClientEmail').val();
        var nome = $('.popup-news #newsletterClientName').val();
        sendAllIn(email, nome);
    });
}
$(document).ready(function() {

    newsFooter();
    newsPopup();

    if ($("#login .loginmsg").length > 0) {
        $("#login .acompanhe").hide();
    }

});

$(document).ajaxStop(function() {
    $('.filtro_cor label').each(function(i, obj) {

        var nomeArquivo = $(obj).attr("title").toLowerCase();

        while (nomeArquivo.indexOf(" ") != -1) {
            nomeArquivo = nomeArquivo.replace(" ", "_");
        }

        $(obj).css("background-image", "url(/arquivos/" + nomeArquivo + ".jpg)");
        $(obj).css("background-size", "100%");

    });

    $('.x-shelf .nomeproduto').each(function() {
        var lowercase = $(this).text().toLowerCase();
        $(this).text(lowercase);
    });

    $(".percent-highlight").length && $(".percent-highlight").each(function() {
        var e = $(this).text().replace(",", ".");
        e = e.replace(" %", ""), e = parseFloat(e), e = Math.ceil(e), "0" == e || 0 == e ? $(this).hide() : ($(this).show(), $(this).html('<div class="wrap-highlight">' + e + "%<span>OFF</span></div>"))
    })
    $(".resultado-busca-termo span").hide();

    // div login aparece apenas quando estiver logado
    if ($(".welcome em a").attr("id") == "login") {
        $(".welcome").hide();
    } else {
        $(".welcome").show();
    }
});


$(document).ready(function() {
    var check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    console.log(check);

    if (check == true) {
        // console.log('mobile')
        if ($('body.home').length > 0) {
            var height_img = $('.swiper-slide img:visible').height();
            // console.log(height_img);
            $('.swiper-container,.swiper-slide').css({
                height: height_img
            });

            var height_blogHome = $('.blogHome img:visible').height();
            $('.blogHome').css({
                height: height_blogHome
            });

            var height_look = $('.lookBookHome img:visible').height();
            $('.lookBookHome').css({
                height: height_look
            });
        };

        if ($('body.departamento').length > 0) {
            var height_banner2 = $('.banner2 img:visible').height();
            // console.log(height_img);
            $('.banner2 #banner2, .banner2 #banner2-rotator, .banner2 #content-slider, .banner2 #banner2-rotator, .banner2 #image-gallery, .banner2 #content-slider, .banner2 .royalWrapper, .banner2 .royalSlider, .banner2 #slider-ajax-container').css({
                height: height_banner2
            });
        };

        $('.ajusta_menu>ul>li>a').click(function() {
            $('.ajusta_menu>ul>li>a').removeClass('ativo');
            $(this).addClass('ativo');
        })
    } else {
        console.log('nÃ£o mobile')
    }
});
$(window).load(function() {

    var width = $(window).width();
    var height = $(window).height();
    var height_img = $('.slider .box-banner a img').height();
    var menu_button = 65;
    var menu_width = (width) - (menu_button);
    var menu_topo = 0;
    var filtro = 0;
    var seta_desc = 0;

    //$('.slider').css('height', height_img );

    // console.log(menu_width);
    // MENU MOBILE
    $('.sprite-ico_menu_mobile').click(function() {
        if (menu_topo == 1) {
            $('.menu').removeClass('ativo');
            $('.sprite-ico_menu_mobile').removeClass('ativo');
            $('body').css('position', 'relative');
            $('.fundo_black').remove();
            menu_topo--;
        } else {
            $('.menu').addClass('ativo');
            $('.sprite-ico_menu_mobile').addClass('ativo');
            $('body').css('position', 'fixed');
            $('body').append('<div class="fundo_black"></div>');
            menu_topo++;
        }
    });

    $('.fechar_menu').click(function(event) {
        $('.menu').removeClass('ativo');
        $('.sprite-ico_menu_mobile').removeClass('ativo');
        $('body').css('position', 'relative');
        $('.menu ul').css('width', "0");
        $('.fundo_black').remove();
        menu_topo--;
    });
    // MENU MOBILE

    $(window).resize(function() {
        var height_img = $('.swiper-slide img:visible').height();
        $('.swiper-container,.swiper-slide').css({
            height: height_img
        });

        var height_blogHome = $('.blogHome img:visible').height();
        $('.blogHome').css({
            height: height_blogHome
        });

        var height_look = $('.lookBookHome img:visible').height();
        $('.lookBookHome').css({
            height: height_look
        });

        var height_banner2 = $('.banner2 img:visible').height();
        $('.banner2 #banner2, .banner2 #banner2-rotator, .banner2 #content-slider, .banner2 #banner2-rotator, .banner2 #image-gallery, .banner2 #content-slider, .banner2 .royalWrapper, .banner2 .royalSlider, .banner2 #slider-ajax-container').css({
            height: height_banner2
        });
    });
    /* Act on the event */



    // FILTRO MOBILE - LOJAS
    if ($('body.Lojas').length > 0) {
        $('.container .container-center .x-menu').css('height', height - 122);

        $('.abre-filtro').click(function() {
            if (filtro == 1) {
                $('.container .container-center .x-menu').css('display', 'block');
                $('body').css('position', 'relative');
                $('.abre-filtro').removeClass('ativo');
                filtro--;
            } else {
                $('.container .container-center .x-menu').css('display', 'block');
                $('body').css('position', 'fixed');
                $('.abre-filtro').addClass('ativo');
                filtro++;
            }
        });

        $('.container .container-center .x-menu ul li').click(function() {
            if (filtro == 1) {
                $('.container .container-center .x-menu').css('display', 'block');
                $('body').css('position', 'relative');
                $('.abre-filtro').removeClass('ativo');
                filtro--;
            } else {
                $('.container .container-center .x-menu').css('display', 'block');
                $('body').css('position', 'fixed');
                $('.abre-filtro').addClass('ativo');
                filtro++;
            }
        });
    };
    // FILTRO MOBILE - LOJAS

    // FILTRO MOBILE - INSTITUCIONAIS
    if ($('body.central').length > 0) {
        $('#sidebar').css('height', height - 122);

        $('.abre-filtro').click(function() {
            if (filtro == 1) {
                $('#sidebar').css('display', 'none');
                $('body').css('position', 'relative');
                $('.abre-filtro').removeClass('ativo');
                filtro--;
            } else {
                $('#sidebar').css('display', 'block');
                $('body').css('position', 'fixed');
                $('.abre-filtro').addClass('ativo');
                filtro++;
            }
        });
    };
    // FILTRO MOBILE - INSTITUCIONAIS

    // FILTRO MOBILE - DEPARTAMENTO
    if ($('body.departamento').length > 0) {
        $('#sidebar').css('height', height - 122);
        $('.abre-filtro').click(function() {
            if (filtro == 1) {
                $('#sidebar').css('display', 'none');
                $('body').css('position', 'relative');
                filtro--;
            } else {
                $('#sidebar').css('display', 'block');
                $('body').css('position', 'fixed');
                filtro++;
            }
        });
    };
    // FILTRO MOBILE - DEPARTAMENTO

});
