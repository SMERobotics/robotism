_header_title = "WE INNOVATE THE FUTURE";
_content_title = "And we're doing it our way.";
_i = 0;
_j = 0;
_k = 0;

function $(id) {
    return document.getElementById(id);
}

function headerTypewriter() {
    if (_i < _header_title.length) {
        $("header-text").innerHTML += _header_title.charAt(_i);
    }
    _i++;
}

function headerCursor() {
    $("header-cursor").innerHTML = _i >= _header_title.length && Math.round(_i / 10) % 2 === 1 ? "&nbsp;" : "_";
}

function contentTypewriter() {
    $("content-text").innerHTML += _content_title.charAt(_j - _content_title.length);
    _j++;
    setTimeout(contentTypewriter, 50);
}

function contentScroll() {
    document.querySelectorAll(".content-middle-scroll")[_k].classList.add("active");
    _k++;
    setTimeout(contentScroll, 250);
}

setInterval(headerTypewriter, 100);
setInterval(headerCursor, 1000);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        if (_j === 0 && window.scrollY > window.innerHeight * 0.1) {
            contentTypewriter();
        }

        if (_k === 0 && window.scrollY > window.innerHeight * 0.3) {
            contentScroll();
        }
    });
});