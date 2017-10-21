// ==UserScript==
// @name         Fix Avanza v2
// @namespace    http://labs.leven.se/
// @version      0.3
// @downloadURL  https://raw.githubusercontent.com/mikaelleven/fix-avanza-v2/master/fix-avanza.tampermonkey.js
// @description  Fix what the Avanza developers should never have changed...
// @description  >> Download Tampermonkey to your favourite browser to enable this script: https://tampermonkey.net/ <<
// @author       Mikael Levén
// @match        https://www.avanza.se/mina-sidor/kontooversikt*.html
// @match        https://www.avanza.se/mina-sidor/min-borsskarm*.html
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
	GM_addStyle('.actionButtons > li > a, .actionButtons > li > span { border: 1px solid silver; }');
	GM_addStyle('.buySellButtons li.first > a, .buySellButtons li.first > span { color: #6a8da1; background-color: rgba(100, 140, 160, 0.1);  }');
	GM_addStyle('.buySellButtons li.sell > a, .buySellButtons li.sell > span { color: #ed7467; background-color: rgba(210, 150, 125, 0.1);  }');
	GM_addStyle('.buySellButtons li.trade > a, .buySellButtons li.trade > span { color: #777; background-color: rgba(99, 99, 99, 0.1); }');
	GM_addStyle('.buySellButtons li.first > a:hover { background-color: rgba(100, 140, 160, 0.3) }');
	GM_addStyle('.buySellButtons li.sell > a:hover { background-color: rgba(210, 150, 125, 0.3) }');
	GM_addStyle('.buySellButtons li.trade > a:hover { background-color: rgba(99, 99, 99, 0.3) }');
	GM_addStyle('.tableV2 tbody tr td { padding:2px; }');
	GM_addStyle('.tableV2 tbody tr:nth-child(even) { background-color: #fafafa }');
	GM_addStyle('td .actionButtons > .sell, .actionButtons > .trade { margin:0px 0px 0px 3px; }');
	GM_addStyle('td .actionButtons > .first { margin:0px; }');
})();