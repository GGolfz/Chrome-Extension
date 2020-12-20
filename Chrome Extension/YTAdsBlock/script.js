chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    { urls: ["*://*.doubleclick.net/*","https://www.youtube.com/ad_companion?*"] },
    ["blocking"]
);