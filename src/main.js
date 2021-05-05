"use strict";
const links = document.querySelectorAll(`.navlinks`);
const header = document.querySelector(`header`);
links.forEach(function (item) {
    item.addEventListener(`click`, event => {
        const input = document.getElementById("nav-toggle");
        input.checked = false;
    });
});
// let header=
let scrollPos = 0;
window.addEventListener('scroll', function () {
    // detects if it is scrolling up and makes it visible
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
        header.style.opacity = "1";
    }
    else {
        header.style.opacity = "0";
    }
    // detects if its scrolling down then makes it invisible
    scrollPos = (document.body.getBoundingClientRect()).top;
});
