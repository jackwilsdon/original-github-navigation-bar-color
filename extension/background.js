chrome.browserAction.disable();

function updateActionButton(tab, dark) {
  chrome.browserAction.enable(tab);
  chrome.browserAction.setIcon({
    path: dark ? 'icon64-inverted.png' : 'icon64.png',
    tabId: tab,
  });
}

chrome.browserAction.onClicked.addListener((src) =>
  chrome.storage.sync.get('dark', ({ dark }) =>
    chrome.storage.sync.set({ dark: !dark }, () =>
      updateActionButton(src.id, !dark))));

chrome.runtime.onMessage.addListener((_req, src, send) =>
  chrome.storage.sync.get('dark', ({ dark }) =>
    updateActionButton(src.tab.id, dark)));
