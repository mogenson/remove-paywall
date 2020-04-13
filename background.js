chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('Removing paywall for ' + tab.url);
    chrome.tabs.executeScript({
        file: 'thirdParty/jquery-3.4.1.js'
    }, function() {
        chrome.tabs.executeScript({
            code: "$('.subscription-paywall').hide()"
        });
    });
});
