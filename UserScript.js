// ==UserScript==
// @name         Original GitHub Navigation Bar Color
// @namespace    http://jackwilsdon.me
// @version      1.0.2
// @description  Reverts the GitHub navigation bar back to it's original color.
// @author       Jack Wilsdon <jack.wilsdon@gmail.com>
// @match        *://github.com/*
// @match        *://*.github.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

const header = document.querySelector('.header-dark');
if (header) header.classList.remove('header-dark');
