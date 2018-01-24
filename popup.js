window.onload = function() {
    document.getElementById('block-btn').onclick = function(){
        chrome.windows.getCurrent(function (currentWindow) {
            chrome.tabs.query({active: true, windowId: currentWindow.id},
                              function(activeTabs) {
                chrome.tabs.executeScript(
                    activeTabs[0].id, {file: 'addBlocklist.js', allFrames: true});
            });
        });
    };
};
