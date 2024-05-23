// ==UserScript==
// @name         高科大教學平台PDF下載
// @namespace    https://facaikotei.github.io/
// @version      1.1
// @description  強制啟用PDF下載功能
// @author       facaikotei
// @match        https://elearning.nkust.edu.tw/*
// @icon         https://elearning.nkust.edu.tw/base/10001/door/tpl/icon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById("download").style.display="inline-block";
    document.getElementById("download").onclick=function(){window.open(DEFAULT_URL.replaceAll("%2F","/"))};
})();
