function setDark(dark) {
  const header = document.getElementsByClassName('header');

  if (header.length) {
    header[0].classList[dark ? 'add' : 'remove']('header-dark');
  }
}

chrome.storage.sync.get('dark', ({ dark }) => setDark(dark));
chrome.storage.onChanged.addListener(({ dark }) => setDark(dark.newValue));
chrome.runtime.sendMessage('hello :)');
