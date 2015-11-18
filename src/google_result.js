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
    for(var i = 0; i < as.length; i++) {
        (function(a) {
            var rigvedawikiKrNetRegexOld = new RegExp("https?:\/\/([a-z0-9]+[.])*rigvedawiki\.net\/r1\/wiki.php");
            var rigvedawikiKrNetRegexNew = new RegExp("https?:\/\/([a-z0-9]+[.])*rigvedawiki\.net");
            var mirrorEnhaKrRegex = new RegExp("https?:\/\/([a-z0-9]+[.])*enha\.kr\/wiki");
            var mirPeRegex = new RegExp("https?:\/\/([a-z0-9]+[.])*mir\.pe\/wiki");
            if (rigvedawikiKrNetRegexNew.test(a.href) || mirrorEnhaKrRegex.test(a.href) || mirPeRegex.test(a.href)) {
                a.className += " replaced";

                // 예전의 URL 형식인지 먼저 확인한다. 이를 통과하게 되면 최신 갱신된 URL 형식의 테스트를 통과할 수 없다.
                if (rigvedawikiKrNetRegexOld.test(a.href)) {
                    switch (rigvedawikiNet) {
                        case "namu-wiki":
                            a.href = a.href.replace(rigvedawikiKrNetRegexOld, "https://namu.wiki/w");
                            break;

                        case "namu-mirror-wiki":
                            a.href = a.href.replace(rigvedawikiKrNetRegexOld, "https://namu.mirror.wiki/wiki");
                            break;

                        case "dark-namu-wiki":
                            a.href = a.href.replace(rigvedawikiKrNetRegexOld, "https://namu.mirror.wiki/wiki");
                            break;

                        default:
                            a.href = a.href.replace(rigvedawikiKrNetRegexOld, "https://namu.wiki/w");
                            break;
                    }
                }

                // 최근 갱신된 URL 형식일 때 통과된다.
                if (rigvedawikiKrNetRegexNew.test(a.href)) {
                    switch (rigvedawikiNet) {
                        case "namu-wiki":
                            a.href = a.href.replace(rigvedawikiKrNetRegexNew, "https://namu.wiki/w");
                            break;

                        case "namu-mirror-wiki":
                            a.href = a.href.replace(rigvedawikiKrNetRegexNew, "https://namu.mirror.wiki/wiki");
                            break;

                        case "dark-namu-wiki":
                            a.href = a.href.replace(rigvedawikiKrNetRegexNew, "https://namu.mirror.wiki/wiki");
                            break;

                        default:
                            a.href = a.href.replace(rigvedawikiKrNetRegexNew, "https://namu.wiki/w");
                            break;
                    }
                }

                if (mirrorEnhaKrRegex.test(a.href)) {
                    switch (mirrorEnhaKr) {
                        case "namu-wiki":
                            a.href = a.href.replace(mirrorEnhaKrRegex, "https://namu.wiki/w");
                            break;

                        case "namu-mirror-wiki":
                            a.href = a.href.replace(mirrorEnhaKrRegex, "https://namu.mirror.wiki/wiki");
                            break;

                        case "dark-namu-wiki":
                            a.href = a.href.replace(mirrorEnhaKrRegex, "https://namu.mirror.wiki/wiki");
                            break;

                        default:
                            a.href = a.href.replace(mirrorEnhaKrRegex, "https://namu.wiki/w");
                            break;
                    }
                }

                if (mirrorEnhaKrRegex.test(a.href)) {
                    switch (mirrorEnhaKr) {
                        case "namu-wiki":
                            a.href = a.href.replace(mirrorEnhaKrRegex, "https://namu.wiki/w");
                            break;

                        case "namu-mirror-wiki":
                            a.href = a.href.replace(mirrorEnhaKrRegex, "https://namu.mirror.wiki/wiki");
                            break;

                        case "dark-namu-wiki":
                            a.href = a.href.replace(mirrorEnhaKrRegex, "https://namu.mirror.wiki/wiki");
                            break;

                        default:
                            a.href = a.href.replace(mirrorEnhaKrRegex, "https://namu.wiki/w");
                            break;
                    }
                }

                if (mirPeRegex.test(a.href)) {
                    switch (mirrorEnhaKr) {
                        case "namu-wiki":
                            a.href = a.href.replace(mirPeRegex, "https://namu.wiki/w");
                            break;

                        case "namu-mirror-wiki":
                            a.href = a.href.replace(mirPeRegex, "https://namu.mirror.wiki/wiki");
                            break;

                        case "dark-namu-wiki":
                            a.href = a.href.replace(mirPeRegex, "https://namu.mirror.wiki/wiki");
                            break;

                        default:
                            a.href = a.href.replace(mirPeRegex, "https://namu.wiki/w");
                            break;
                    }
                }

                a.removeAttribute("onmousedown");
                var b = a.cloneNode(true);
                a.parentNode.replaceChild(b, a);
            }
        })(as[i]);
    }
}, 500);
