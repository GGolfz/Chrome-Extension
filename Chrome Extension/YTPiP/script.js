var button = chrome.browserAction.onClicked.addListener((tab) => {
  pip()
})
const pip = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code:
        "document.getElementsByTagName('video')[0].requestPictureInPicture()",
    })
  })
}
