// ==UserScript==
// @name        remove-youtube-shorts
// @description deletes a youtube video from the DOM if it contains the text "SHORTS"
// @match       *://*.youtube.com/*
// ==/UserScript==

function rmShorts() {
    setInterval(()=>{
        for (let i of document.querySelectorAll('#contents > ytd-item-section-renderer')) { 
            if (i.innerText.includes("SHORTS")) {
                console.log("deleting"); console.log(i); i.remove(); 
            }
        } 
    }, 500);
}

window.onload = rmShorts;
