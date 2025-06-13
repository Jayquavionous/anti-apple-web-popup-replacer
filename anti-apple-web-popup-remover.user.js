// ==UserScript==
// @name        anti-apple-web-popup-replacer
// @description Replaces eepyfemboi's "anti-apple-web-popup" with a different message.
// @match       *://*/*
// @version     0.9.41
// @run-at      document-start
// ==/UserScript==
// I don't know who you think you are, but you aren't going to lecture me over my choice of devices.
// Easiest thing in my life, btw.
// I'm keeping the original comment since it's basically the same thought I have lol.

(function() {
    'use strict';

    // Original script that removes the original pop-up (Injected directly at runtime to ensure no double pop-ups)
    const script = document.createElement('script');
    script.textContent = `
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
    `;
    document.documentElement.appendChild(script);

    // biscuit haha bri'ish
    function biscuit(name) {
        return document.cookie.split('; ').some(c => c.startsWith(name + '='));
    }

    // basically the same code as the original pop-up but ofc i changed the message
    function appleCheck() {
    return (/Mac|iPhone|iPod|iPad/i.test(navigator.userAgent) ||
            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 0)
    );
    };
    function useWhateverYouWant() {
    const popup=document.createElement('div');
    popup.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background: #fff; box-shadow: 0px 0px 10px rgba(0,0,0,0.3); border-radius: 10px; z-index: 1000; text-align: center;">
            <h2>Hello! You are seeing this because it appears that this website has the infamous 'anti-apple-web-popup' script in place.</h2>
            <p>Even tho I personally agree with what the original script says about Apple, it does not justify lecturing and attacking people who visit this website on an Apple device. That's just petty in my opinion.<br>
            It's okay if you are using Apple products and I am tired of people shaming on others for making personal decisions that doesn't affect them in any way.<br>
            Use whatever you prefer, it's yours after all! Your choice of devices should not be dictated by random people on the internet.<br>
            Have a lovely day and stay safe! :)</p>
            <button id="apple-popup-dismiss-btn" style="margin-right: 10px;">OK</button>
            <button id="apple-popup-dont-show-again-btn">Don't show again</button>
        </div>
     `;
    document.body.appendChild(popup);
    document.getElementById('apple-popup-dismiss-btn').addEventListener('click',()=>{popup.remove();});

    document.getElementById('apple-popup-dont-show-again-btn').addEventListener('click',()=>{
        const date=new Date();
        date.setTime(date.getTime()+(7*24*60*60*1000));
        document.cookie="hideApplePopup=true; expires=${date.toUTCString()}; path=/";
        popup.remove();
    });
    };

    // check if the script was even there at all before showing the modified pop-up
    window.addEventListener('DOMContentLoaded', () => {
        const pettyCheck = Array.from(document.scripts).some(script =>
        script.src.includes('sleepie.dev/anti-apple-alert.js')
        );

        if (pettyCheck && appleCheck() && !biscuit('hideApplePopup')) {
        useWhateverYouWant();
        }
    });
})();