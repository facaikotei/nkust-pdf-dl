// ==UserScript==
// @name         高科大教學平台PDF下載
// @namespace    https://facaikotei.github.io/
// @version      2.0.1
// @description  強制啟用PDF下載功能
// @author       (c)2024 facaikotei
// @match        https://elearning.nkust.edu.tw/learn/path/viewPDF.php?*
// @icon         https://www.nkust.edu.tw/var/file/0/1000/img/513/491347347.jpg
// @license      MIT
// @homepageURL  https://greasyfork.org/scripts/496114
// @supportURL   https://github.com/facaikotei/nkust-pdf-dl
// @downloadURL  https://update.greasyfork.org/scripts/496114/%E9%AB%98%E7%A7%91%E5%A4%A7%E6%95%99%E5%AD%B8%E5%B9%B3%E5%8F%B0PDF%E4%B8%8B%E8%BC%89.user.js
// @updateURL    https://update.greasyfork.org/scripts/496114/%E9%AB%98%E7%A7%91%E5%A4%A7%E6%95%99%E5%AD%B8%E5%B9%B3%E5%8F%B0PDF%E4%B8%8B%E8%BC%89.meta.js
// ==/UserScript==

(function() {
    'use strict';

    if (document.getElementById("download").style.display == "none") {
        document.getElementById("download").style.display = "block";
        document.getElementById("download").onclick = function() {
            window.open(DEFAULT_URL.replaceAll("%2F", "/"));
        };
    }
})();
