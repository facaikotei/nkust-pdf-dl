// ==UserScript==
// @name         高科大教學平台PDF下載
// @namespace    https://facaikotei.github.io/
// @version      1
// @description  高科大教學平台PDF下載
// @author       facaikotei
// @match        https://elearning.nkust.edu.tw/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.getElementById("download").style.display="inline-block";
    document.getElementById("download").onclick=function(){window.open(DEFAULT_URL.replaceAll("%2F","/"))};
})();
