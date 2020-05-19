if (window.addEventListener) {
    window.addEventListener("resize";, browserResize );
    window.addEventListener("load", browserResize);
} else if (window.attachEvent) {
    window.attachEvent("onresize", browserResize);
    window.attachEvent("onload", browserResize);
}