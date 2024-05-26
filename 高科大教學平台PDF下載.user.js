// ==UserScript==
// @name:en		nkust elearning PDF download
// @name		高科大教學平台PDF下載
// @name:zh-CN		高科大教学平台PDF下载
// @namespace		https://facaikotei.github.io/
// @version		2
// @description:en	Force enable PDF downloading feature
// @description		強制啟用PDF下載功能
// @description:zh-CN	强制启用PDF下载功能
// @match		https://elearning.nkust.edu.tw/learn/path/viewPDF.php
// @icon		https://elearning.nkust.edu.tw/base/10001/door/tpl/icon.ico
// @grant		none
// @license		MIT
// @homepageURL		https://facaikotei.github.io/
// @downloadURL		https://github.com/facaikotei/nkust-pdf-dl/raw/main/%E9%AB%98%E7%A7%91%E5%A4%A7%E6%95%99%E5%AD%B8%E5%B9%B3%E5%8F%B0PDF%E4%B8%8B%E8%BC%89.user.js
// @supportURL		https://github.com/facaikotei/nkust-pdf-dl/issues
// ==/UserScript==

(function() {
    'use strict';

    if(document.getElementById("download").style.display=="none")
    {
        document.getElementById("download").style.display="block";
        document.getElementById("download").onclick=function(){window.open(DEFAULT_URL.replaceAll("%2F","/"))};
    }
})();
