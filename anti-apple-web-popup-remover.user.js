// ==UserScript==
// @name        anti-apple-web-popup-remover
// @description Entirely removes eepyfemboi's "anti-apple-web-popup"
// @match       *://*/*
// ==/UserScript==
// I don't know who you think you are, but you aren't going to lecture me over my choice of devices.
// Easiest thing in my life, btw.

(function() {
    'use strict';

    Object.defineProperty(window, 'do_anti_apple_popup', {
        value: function() {},
        writable: false,
        configurable: false
    });

    Object.defineProperty(window, 'anti_apple_popup_main', {
        value: function() {},
        writable: false,
        configurable: false
    });
})();