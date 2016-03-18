function getPosition(str, m, i) {
    return str.split(m, i).join(m).length;
}

function redirect(page, setting) {
    if (setting === "namu-wiki") {
        window.location.href = "https://namu.wiki/w/" + page;
    }
    else if (setting === "namu-mirror-wiki") {
        window.location.href = "https://namu.mirror.wiki/w/" + page;
    }
    else if (setting === "dark-namu-wiki") {
        window.location.href = "https://namu.mirror.wiki/dark/" + page;
    }
}

chrome.storage.sync.get(["rigvedawikiNet", "mirrorEnhaKr", "mirPe", "namuMirrorWiki", "namuMoe", "namuWiki"], function (items) {
    var href, page, rigvedawikiNet, mirrorEnhaKr, mirPe, namuMirrorWiki, namuMoe, namuWiki;

    rigvedawikiNet = items["rigvedawikiNet"];
    mirrorEnhaKr = items["mirrorEnhaKr"];
    mirPe = items["mirPe"];
    namuMirrorWiki = items["namuMirrorWiki"];
    namuMoe = items["namuMoe"];
    namuWiki = items["namuWiki"];

    href = window.location.href;
    if (href.indexOf("rigvedawiki") !== -1) {
        if (rigvedawikiNet === "none") {
            return;
        }
        page = href.substr(getPosition(href, "/", 3) + 1);
        redirect(page, rigvedawikiNet);
    }
    else if (href.indexOf("mirror.enha") !== -1) {
        if (mirrorEnhaKr === "none") {
            return;
        }
        page = href.substr(getPosition(href, "/", 4) + 1);
        redirect(page, mirrorEnhaKr);
    }
    else if (href.indexOf("mir.pe") !== -1) {
        if (mirPe === "none") {
            return;
        }
        page = href.substr(getPosition(href, "/", 4) + 1);
        redirect(page, mirPe);
    }
    else if (href.indexOf("namu.mirror.wiki/w/") !== -1) {
        if (namuMirrorWiki === "none" || namuWiki === "namu-mirror-wiki") {
            return;
        }
        page = href.substr(getPosition(href, "/", 4) + 1);
        redirect(page, namuMirrorWiki);
    }
    else if (href.indexOf("namu.mirror.wiki/dark/") !== -1) {
        if (namuMirrorWiki === "none" || namuWiki === "dark-namu-wiki") {
            return;
        }
        page = href.substr(getPosition(href, "/", 4) + 1);
        redirect(page, namuMirrorWiki);
    }
    else if (href.indexOf("namu.moe") !== -1) {
        if (namuMoe === "none") {
            return;
        }
        page = href.substr(getPosition(href, "/", 4) + 1);
        redirect(page, namuMoe);
    }
    else if (href.indexOf("namu.wiki") !== -1) {
        if (namuWiki === "none" || namuWiki === "namu-wiki") {
            return;
        }
        page = href.substr(getPosition(href, "/", 4) + 1);
        redirect(page, namuWiki);
    }

});
