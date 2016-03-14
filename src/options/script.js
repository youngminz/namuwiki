/* global chrome */
function save_options () {
    var rigvedawikiNet = document.getElementById("rigvedawiki-net").value;
    var mirrorEnhaKr = document.getElementById("mirror-enha-kr").value;
    var mirPe = document.getElementById("mir-pe").value;
    var namuMirrorWiki = document.getElementById("namu-mirror-wiki").value;
    var namuMoe = document.getElementById("namu-moe").value;
    var namuWiki = document.getElementById("namu-wiki").value;
    chrome.storage.sync.set({
        rigvedawikiNet: rigvedawikiNet,
        mirrorEnhaKr: mirrorEnhaKr,
        mirPe: mirPe,
        namuMirrorWiki: namuMirrorWiki,
        namuMoe: namuMoe,
        namuWiki: namuWiki
    }, function() {
        var status = document.getElementById("status");
        status.textContent = "저장되었습니다.";
        setTimeout(function() {
            status.textContent = "";
        }, 3000);
    });
}

function restore_options () {
    chrome.storage.sync.get({
        rigvedawikiNet: "namu-wiki",
        mirrorEnhaKr: "namu-wiki",
        mirPe: "namu-wiki",
        namuMirrorWiki: "namu-mirror-wiki",
        namuMoe: "namu-wiki",
        namuWiki: "namu-wiki"
    }, function (items) {
        document.getElementById("rigvedawiki-net").value = items.rigvedawikiNet;
        document.getElementById("mirror-enha-kr").value = items.mirrorEnhaKr;
        document.getElementById("mir-pe").value = items.mirPe;
        document.getElementById("namu-mirror-wiki").value = items.namuMirrorWiki;
        document.getElementById("namu-moe").value = items.namuMoe;
        document.getElementById("namu-wiki").value = items.namuWiki;
    });
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
