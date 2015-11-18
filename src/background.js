function getPosition(str, m, i) {
    return str.split(m, i).join(m).length;
}

function redirect(page, setting) {
    if (setting === "namu-wiki") {
        window.location.href = "https://namu.wiki/w/" + page;
    }
    else if (setting === "namu-mirror-wiki") {
        window.location.href = "http://namu.mirror.wiki/wiki/" + page;
    }
    else if (setting === "dark-namu-wiki") {
        window.location.href = "https://dark.namu.wiki/w/" + page;
    }
    else {
        window.location.href = "https://namu.wiki/w/" + page;
    }
}

chrome.storage.sync.get(["rigvedawikiNet", "mirrorEnhaKr", "mirPe"], function (items) {
    var href, page, rigvedawikiNet, mirrorEnhaKr, mirPe;

    rigvedawikiNet = items["rigvedawikiNet"];
    mirrorEnhaKr = items["mirrorEnhaKr"];
    mirPe = items["mirPe"];

    href = window.location.href;
    if (href.indexOf("rigvedawiki") != -1) {
        if (rigvedawikiNet === "none") {
            return;
        }
        page = href.substr(getPosition(href, "/", 3) + 1);
        redirect(page, rigvedawikiNet);
    }
    else if (href.indexOf("mirror.enha") != -1) {
        if (mirrorEnhaKr === "none") {
            return;
        }
        page = href.substr(getPosition(href, "/", 4) + 1);
        redirect(page, mirrorEnhaKr);
    }
    else if (href.indexOf("mir.pe") != -1) {
        if (mirPe === "none") {
            return;
        }
        page = href.substr(getPosition(href, "/", 4) + 1);
        redirect(page, mirPe);
    }

});
