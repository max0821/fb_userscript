// ==UserScript==
// @name         Fb Remove Feed Ads
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  去除為你推薦及贊助文章
// @author       You
// @require      http://code.jquery.com/jquery-1.12.4.min.js
// @match        https://www.facebook.com/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`.removeAD {background-color:white}`);
var timer = 1000;
(function() {
    'use strict';
    check_feed();
})();


function check_feed(){
    $('div[data-pagelet^="FeedUnit"]').not('.removeAD').each(function(){
        if(/為你推薦/.test($(this).html()))
        {
            console.log('remove 為你推薦');
            $(this).remove();

        }
        if($(this).find('a[aria-label="贊助"]').size() >= 1)
        {
            console.log('remove 贊助');
            $(this).remove();
        }
        $(this).addClass('removeAD');
    });
    setTimeout(check_feed,timer);
}
