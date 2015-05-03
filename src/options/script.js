/* global chrome */
function save_options() {
    var rigvedawikiNet = document.getElementById('rigvedawiki-net').value;
    var mirrorEnhaKr = document.getElementById('mirror-enha-kr').value;
    chrome.storage.sync.set({
        rigvedawikiNet: rigvedawikiNet,
        mirrorEnhaKr: mirrorEnhaKr
    }, function() {
        var status = document.getElementById('status');
        status.textContent = '저장되었습니다.';
        setTimeout(function() {
            status.textContent = '';
        }, 3000);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        rigvedawikiNet: 'namu-wiki',
        mirrorEnhaKr: 'namu-wiki'
    }, function(items) {
        document.getElementById('rigvedawiki-net').value = items.rigvedawikiNet;
        document.getElementById('mirror-enha-kr').value = items.mirrorEnhaKr;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
