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
var rigvedawikiNet, mirrorEnhaKr, mirPe;

chrome.storage.sync.get(["rigvedawikiNet", "mirrorEnhaKr", "mirPe"], function (items) {
    rigvedawikiNet = items["rigvedawikiNet"];
    mirrorEnhaKr = items["mirrorEnhaKr"];
    mirPe = items["mirPe"];
});

setInterval(function() {
    var as = document.querySelectorAll("a:not(.replaced)");
    if(!as.length) return;
    for(var i = 0; i < as.length; i ++) {
        (function(a) {
            a.className += " replaced";
               
            if (mirrorEnhaKr == "namu-wiki") {
                a.href = a.href.replace(/https?:\/\/([a-z0-9]+[.])*enha\.kr\/wiki/g, "https://namu.wiki/w");
            }
            else if (mirrorEnhaKr == "namu-mirror-wiki") {
                a.href = a.href.replace(/https?:\/\/([a-z0-9]+[.])*enha\.kr\/wiki/g, "https://namu.mirror.wiki/wiki");
            }
            else if (mirrorEnhaKr == "dark-namu-wiki") {
                a.href = a.href.replace(/https?:\/\/([a-z0-9]+[.])*enha\.kr\/wiki/g, "https://dark.namu.wiki/w");
            }
            else {
                a.href = a.href.replace(/https?:\/\/([a-z0-9]+[.])*enha\.kr\/wiki/g, "https://namu.wiki/w");
            }

            if (mirPe == "namu-wiki") {
                a.href = a.href.replace(/https?:\/\/([a-z0-9]+[.])*mir\.pe\/wiki/g, "https://namu.wiki/w");
            }
            else if (mirPe == "namu-mirror-wiki") {
                a.href = a.href.replace(/https?:\/\/([a-z0-9]+[.])*mir\.pe\/wiki/g, "https://namu.mirror.wiki/wiki");
            }
            else if (mirPe == "dark-namu-wiki") {
                a.href = a.href.replace(/https?:\/\/([a-z0-9]+[.])*mir\.pe\/wiki/g, "https://dark.namu.wiki/w");
            }
            else {
                a.href = a.href.replace(/https?:\/\/([a-z0-9]+[.])*mir\.pe\/wiki/g, "https://namu.wiki/w");
            }
            
            a.removeAttribute("onmousedown");
            var b = a.cloneNode(true);
            a.parentNode.replaceChild(b, a);
        })(as[i]);
    }
}, 500);