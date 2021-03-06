/**
 *	Pesquisa Inteligente
 *	@description Execurar buscas sem recarregar a página
 *	@author Carlos Vinicius
 *	@author Edson Domingos Júnior
 *	@version 3.8
 *	@date 2012-10-01
 */
"function" !== typeof String.prototype.replaceSpecialChars && (String.prototype.replaceSpecialChars = function() {
    var r = {
        "\u00e7": "c",
        "\u00e6": "ae",
        "\u0153": "oe",
        "\u00e1": "a",
        "\u00e9": "e",
        "\u00ed": "i",
        "\u00f3": "o",
        "\u00fa": "u",
        "\u00e0": "a",
        "\u00e8": "e",
        "\u00ec": "i",
        "\u00f2": "o",
        "\u00f9": "u",
        "\u00e4": "a",
        "\u00eb": "e",
        "\u00ef": "i",
        "\u00f6": "o",
        "\u00fc": "u",
        "\u00ff": "y",
        "\u00e2": "a",
        "\u00ea": "e",
        "\u00ee": "i",
        "\u00f4": "o",
        "\u00fb": "u",
        "\u00e5": "a",
        "\u00e3": "a",
        "\u00f8": "o",
        "\u00f5": "o",
        u: "u",
        "\u00c1": "A",
        "\u00c9": "E",
        "\u00cd": "I",
        "\u00d3": "O",
        "\u00da": "U",
        "\u00ca": "E",
        "\u00d4": "O",
        "\u00dc": "U",
        "\u00c3": "A",
        "\u00d5": "O",
        "\u00c0": "A",
        "\u00c7": "C"
    };
    return this.replace(/[\u00e0-\u00fa]/g, function(e) {
        return "undefined" != typeof r[e] ? r[e] : e
    })
});
"function" !== typeof String.prototype.trim && (String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
});
jQuery.fn.vtexSmartResearch = function(r) {
    $this = jQuery(this);
    var e = function(a, b) {
            "object" == typeof console && console.log("[Smart Research - " + (b || "Erro") + "] " + a)
        },
        B = {
            pageLimit: null,
            loadContent: ".prateleira[id^=ResultItems]",
            shelfClass: ".prateleira",
            filtersMenu: ".search-multiple-navigator",
            linksMenu: ".search-single-navigator",
            menuDepartament: ".navigation .menu-departamento",
            insertMenuAfter: ".search-multiple-navigator h3:first",
            emptySearchElem: jQuery('<div class="vtexsr-emptySearch"></div>'),
            elemLoading: '<div id="scrollLoading">Carregando ... </div>',
            returnTopText: '<span class="text">voltar ao</span><span class="text2">TOPO</span>',
            emptySearchMsg: "<h3>Esta combina\u00e7\u00e3o de filtros n\u00e3o retornou nenhum resultado!</h3>",
            filterErrorMsg: "Houve um erro ao tentar filtrar a p\u00e1gina!",
            searchUrl: null,
            mergeMenu: !0,
            usePopup: !1,
            showLinks: !0,
            popupAutoCloseSeconds: 3,
            filterScrollTop: function(a) {
                return a.top - 20
            },
            callback: function() {},
            getShelfHeight: function(a) {
                return a.scrollTop() + a.height()
            },
            shelfCallback: function() {},
            ajaxCallback: function() {},
            emptySearchCallback: function() {},
            authorizeScroll: function() {
                return !0
            },
            authorizeUpdate: function() {
                return !0
            },
            labelCallback: function() {}
        },
        b = jQuery.extend(B, r),
        C = jQuery(""),
        x = jQuery(b.elemLoading),
        p = 2,
        t = !0,
        m = jQuery(window);
    jQuery(document);
    var y = jQuery("html,body"),
        j = jQuery("body"),
        n = "",
        d = "",
        u = "",
        v = !1,
        h = jQuery(b.loadContent),
        k = jQuery(b.filtersMenu),
        f = {
            requests: 0,
            filters: 0,
            isEmpty: !1
        },
        l = {},
        i = {
            getUrl: function(a) {
                return a ? n.replace(/PageNumber=[0-9]*/, "PageNumber=" + p) : (u + d).replace(/PageNumber=[0-9]*/, "PageNumber=" +
                    D)
            },
            getSearchUrl: function() {
                var a, b, c;
                jQuery("script:not([src])").each(function() {
                    b = jQuery(this)[0].innerHTML;
                    c = /\/buscapagina\?.+&PageNumber=/i;
                    if (-1 < b.search(/\/buscapagina\?/i)) return a = c.exec(b), !1
                });
                if ("undefined" !== typeof a && "undefined" !== typeof a[0]) return a[0];
                e("N\u00e3o foi poss\u00edvel localizar a url de busca da p\u00e1gina.\n Tente adicionar o .js ao final da p\u00e1gina. \n[M\u00e9todo: getSearchUrl]");
                return ""
            },
            scrollToTop: function() {
                var a = j.find("#returnToTop");
                1 > a.length && (a = jQuery('<div id="returnToTop"><a href="#">' +
                    b.returnTopText + '<span class="arrowToTop"></span></a></div>'), j.append(a));
                var g = m.height();
                m.bind("resize", function() {
                    g = m.height()
                });
                m.bind("scroll", function() {
                    m.scrollTop() > g ? a.stop(!0).fadeTo(300, 1, function() {
                        a.show()
                    }) : a.stop(!0).fadeTo(300, 0, function() {
                        a.hide()
                    })
                });
                a.bind("click", function() {
                    y.animate({
                        scrollTop: 0
                    }, "slow");
                    return !1
                })
            },
            infinitScroll: function() {
                var a, g, c;
                c = (j.find(".pager:first").attr("id") || "").split("_").pop();
                a = null !== b.pageLimit ? b.pageLimit : window["pagecount_" + c];
                g = !0;
                "undefined" ===
                typeof a && (a = 99999999);
                m.bind("scroll", function() {
                    var c = jQuery(this);
                    if (!v && p <= a && t && b.authorizeScroll(f)) {
                        if (c.scrollTop() + c.height() >= b.getShelfHeight(h) && g) {
                            var d = h.find(b.shelfClass).filter(":last");
                            d.after(x);
                            g = !1;
                            w = jQuery.ajax({
                                url: i.getUrl(!0),
                                success: function(a) {
                                    1 > a.trim().length ? (t = !1, e("N\u00e3o existem mais resultados a partir da p\u00e1gina: " + (p - 1), "Aviso")) : d.after(a);
                                    g = !0;
                                    x.remove();
                                    f.requests++;
                                    b.ajaxCallback(f)
                                }
                            });
                            p++
                        }
                    } else return !1
                })
            }
        },
        n = null !== b.searchUrl ? u = b.searchUrl : u = i.getSearchUrl();
    if (1 > $this.length) return e("Nenhuma op\u00e7\u00e3o de filtro encontrada", "Aviso"), b.showLinks && jQuery(b.linksMenu).css("visibility", "visible").show(), i.infinitScroll(), i.scrollToTop(), $this;
    if (1 > h.length) return e("Elemento para destino da requisi\u00e7\u00e3o n\u00e3o foi encontrado \n (" + h.selector + ")"), !1;
    1 > k.length && e("O menu de filtros n\u00e3o foi encontrado \n (" + k.selector + ")");
    var z = jQuery(b.linksMenu),
        q = jQuery('<div class="vtexSr-overlay"></div>'),
        A = jQuery(b.menuDepartament),
        E = h.offset(),
        D = 1,
        s = null,
        w = null;
    b.emptySearchElem.append(b.emptySearchMsg);
    h.before(q);
    var c = {
        exec: function() {
            c.setFilterMenu();
            c.fieldsetFormat();
            $this.each(function() {
                var a = jQuery(this),
                    b = a.parent();
                a.is(":checked") && (d += "&" + (a.attr("rel") || ""), b.addClass("sr_selected"));
                c.adjustText(a);
                b.append('<span class="sr_box"></span><span class="sr_box2"></span>');
                a.bind("change", function() {
                    c.inputAction();
                    a.is(":checked") ? c.addFilter(a) : c.removeFilter(a);
                    f.filters = $this.filter(":checked").length
                })
            });
            "" !== d && c.addFilter(C)
        },
        mergeMenu: function() {
            if (!b.mergeMenu) return !1;
            A.insertAfter(b.insertMenuAfter);
            c.departamentMenuFormat(A)
        },
        mergeMenuList: function() {
            var a = 0;
            k.find("h3,h4").each(function() {
                var b = z.find("h3,h4").eq(a).next("ul");
                b.insertAfter(jQuery(this));
                c.departamentMenuFormat(b);
                a++
            })
        },
        departamentMenuFormat: function(a) {
            a.find("a").each(function() {
                var a = jQuery(this);
                a.text(c.removeCounter(a.text()))
            })
        },
        fieldsetFormat: function() {
            l.fieldsetCount = 0;
            l.tmpCurrentLabel = {};
            k.find("fieldset").each(function() {
                var a = jQuery(this),
                    c = a.find("label"),
                    d = "filtro_" + (a.find("h5:first").text() || "").toLowerCase().replaceSpecialChars().replace(/\s/g, "-");
                l[d] = {};
                1 > c.length ? a.hide() : (a.addClass(d), c.each(function(c) {
                    var g = jQuery(this),
                        e = g.find("input").val() || "",
                        f = "sr_" + e.toLowerCase().replaceSpecialChars().replace(/\s/g, "-");
                    l.tmpCurrentLabel = {
                        fieldsetParent: [a, d],
                        elem: g
                    };
                    l[d][c.toString()] = {
                        className: f,
                        title: e
                    };
                    g.addClass(f).attr({
                        title: e,
                        index: c
                    });
                    b.labelCallback(l)
                }), l.fieldsetCount++)
            })
        },
        inputAction: function() {
            null !== w && w.abort();
            null !== s && s.abort();
            p = 2;
            t = !0
        },
        addFilter: function(a) {
            d += "&" + (a.attr("rel") || "");
            q.fadeTo(300, 0.6);
            n = i.getUrl();
            s = jQuery.ajax({
                url: n,
                success: c.filterAjaxSuccess,
                error: c.filterAjaxError
            });
            a.parent().addClass("sr_selected")
        },
        removeFilter: function(a) {
            var b = a.attr("rel") || "";
            q.fadeTo(300, 0.6);
            "" !== b && (d = d.replace("&" + b, ""));
            n = i.getUrl();
            s = jQuery.ajax({
                url: n,
                success: c.filterAjaxSuccess,
                error: c.filterAjaxError
            });
            a.parent().removeClass("sr_selected")
        },
        filterAjaxSuccess: function(a) {
            a = jQuery(a);
            q.fadeTo(300,
                0,
                function() {
                    jQuery(this).hide()
                });
            c.updateContent(a);
            f.requests++;
            b.ajaxCallback(f);
            y.animate({
                scrollTop: b.filterScrollTop(E || {
                    top: 0,
                    left: 0
                })
            }, 600)
        },
        filterAjaxError: function() {
            q.fadeTo(300, 0, function() {
                jQuery(this).hide()
            });
            alert(b.filterErrorMsg);
            e("Houve um erro ao tentar fazer a requisi\u00e7\u00e3o da p\u00e1gina com filtros.")
        },
        updateContent: function(a) {
            v = !0;
            if (!b.authorizeUpdate(f)) return !1;
            var c = a.filter(b.shelfClass),
                a = h.find(b.shelfClass);
            (0 < a.length ? a : b.emptySearchElem).slideUp(600, function() {
                jQuery(this).remove();
                b.usePopup ? j.find(".boxPopUp2").vtexPopUp2() : b.emptySearchElem.remove();
                0 < c.length ? (c.hide(), h.append(c), b.shelfCallback(), c.slideDown(600, function() {
                    v = !1
                }), f.isEmpty = !1) : (f.isEmpty = !0, b.usePopup ? b.emptySearchElem.addClass("freeContent autoClose ac_" + b.popupAutoCloseSeconds).vtexPopUp2().stop(!0).show() : (h.append(b.emptySearchElem), b.emptySearchElem.show().css("height", "auto").fadeTo(300, 0.2, function() {
                    b.emptySearchElem.fadeTo(300, 1)
                })), b.emptySearchCallback(f))
            })
        },
        adjustText: function(a) {
            var b = a.parent(),
                d = b.text();
            qtt = "";
            d = c.removeCounter(d);
            b.text(d).prepend(a)
        },
        removeCounter: function(a) {
            return a.replace(/\([0-9]+\)/ig, function(a) {
                qtt = a.replace(/\(|\)/, "");
                return ""
            })
        },
        setFilterMenu: function() {
            0 < k.length && (z.hide(), k.show())
        }
    };
    j.hasClass("departamento") ? c.mergeMenu() : (j.hasClass("categoria") || j.hasClass("resultado-busca")) && c.mergeMenuList();
    c.exec();
    i.infinitScroll();
    i.scrollToTop();
    b.callback();
    k.css("visibility", "visible")
};
