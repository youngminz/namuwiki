// ==UserScript==
// @name         enha to namu
// @namespace    http://xenosi.de/
// @version      0.2
// @description  fixit
// @author       Song Hyo Jin (shj at xenosi.de)
// @match        https://www.google.com/*
// @match        https://www.google.co.kr/*
// @match        http://www.google.com/*
// @match        http://www.google.co.kr/*
// @grant        none
// ==/UserScript==

setInterval(function() {
    var as = document.querySelectorAll('a:not(.replaced)');
    if(!as.length) return;
    for(var i = 0; i < as.length; i ++) {
        (function(a) {
            a.className += ' replaced';
            var href = a.href.replace(/mirror\.enha\.kr\/wiki/g, 'namu.wiki/w');
            if(href != a.href) {
                a.href = href;
                a.removeAttribute('onmousedown');
                var b = a.cloneNode(true);
                a.parentNode.replaceChild(b, a);
            }
        })(as[i]);
    }
}, 500);