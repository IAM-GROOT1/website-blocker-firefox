const blockedHosts = ["facebook.com"];  // replace "example.com" with the site you want to block

function blockRequest(requestDetails) {
  for (let host of blockedHosts) {
    if (requestDetails.url.indexOf(host) != -1) {
      return {cancel: true};
    }
  }
}

browser.webRequest.onBeforeRequest.addListener(
  blockRequest,
  {urls: ["<all_urls>"], types: ["main_frame"]},
  ["blocking"]
);
