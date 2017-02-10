new MutationObserver(mutations => mutations
  .filter(mutation => [ ...mutation.addedNodes ].some(node => node.tagName === 'HEAD'))
  .forEach(mutation => {
    const header = document.getElementsByClassName('header-dark');

    if (header.length) {
      header[0].classList.remove('header-dark');
      observer.disconnect();
    }
  })).observe(document.documentElement, { childList: true });

