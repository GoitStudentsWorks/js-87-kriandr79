!function(){function n(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},o=e.parcelRequired7c6;null==o&&((o=function(n){if(n in t)return t[n].exports;if(n in i){var e=i[n];delete i[n];var o={id:n,exports:{}};return t[n]=o,e.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,e){i[n]=e},e.parcelRequired7c6=o),o.register("iE7OH",(function(e,t){var i,o;n(e.exports,"register",(function(){return i}),(function(n){return i=n})),n(e.exports,"resolve",(function(){return o}),(function(n){return o=n}));var s={};i=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)s[e[t]]=n[e[t]]},o=function(n){var e=s[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),o.register("aNJCr",(function(e,t){var i;n(e.exports,"getBundleURL",(function(){return i}),(function(n){return i=n}));var o={};function s(n){return(""+n).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(n){var e=o[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(n)return s(n[2])}return"/"}(),o[n]=e),e}})),o("iE7OH").register(JSON.parse('{"l20mf":"shoppinglist.30f4ff18.js","1GK9w":"empty-page@2.0c63d3b6.png","4Dysf":"empty-page.e85449c5.png","aaLHb":"amazon.b8fa90cb.png","8DT1R":"applebook.5a9f17e3.png","kaCPy":"bookshop.91914384.png","eqgoj":"trash-03.4e2c396d.png","7Lh2N":"index.03beb3be.js"}')),o("lJq6c"),o("18VO4"),o("bqxOg"),o("1sliS"),o("i8Q71"),o("hb9V3"),o("9lidz"),o("4hI0Y");var s,r="my-shoppinglist";s=o("aNJCr").getBundleURL("l20mf")+o("iE7OH").resolve("1GK9w");var a,l=new URL(s);a=o("aNJCr").getBundleURL("l20mf")+o("iE7OH").resolve("4Dysf");var c,p=new URL(a);c=o("aNJCr").getBundleURL("l20mf")+o("iE7OH").resolve("aaLHb");var u,g=new URL(c);u=o("aNJCr").getBundleURL("l20mf")+o("iE7OH").resolve("8DT1R");var d,f=new URL(u);d=o("aNJCr").getBundleURL("l20mf")+o("iE7OH").resolve("kaCPy");var h,L=new URL(d);h=o("aNJCr").getBundleURL("l20mf")+o("iE7OH").resolve("eqgoj");var v=new URL(h),m=document.querySelector(".shoppingList-books"),b=localStorage.getItem(r),k=b?JSON.parse(b):null,H='<li><p class="shoppingList-text">\n  This page is empty, add some books and proceed to order.\n</p>\n<a href="./index.html">\n  <picture>\n    <source srcset="'.concat(l,' 2x" type="image/png" />\n    <img\n      class="shoppingList-img"\n      src="').concat(p,'"\n      alt="Book"\n    />\n  </picture>\n</a></li>');document.addEventListener("DOMContentLoaded",(function(){k&&k.length>0?function(n){m.innerHTML="";var e=n.map((function(n){var e,t,i;return'<li class="books-shoppingListLi">\n        <img\n          class="books-shoppingList-img"\n          src="'.concat(n.image,'"\n          alt=""\n        />\n        <div class="box-shoppingList-content">\n          <div id="cont" class="box-shoppingList">\n            <div>\n              <h2 class="text-shoppingList-title">').concat(n.title,'</h2>\n              <p class="text-shoppingList-category">').concat(n.publisher,'</p>\n            </div>\n            <button class="box-shoppingList-trash" id="').concat(n.id,'">\n              <img\n                class="box-shoppingList-trash-icon"\n                src="').concat(v,'"\n                alt="trash"\n              />       \n            </button>\n          </div>\n          <p class="text-shoppingList-content">\n            ').concat(n.description,'\n          </p>\n          <div class="box-shoppingList-link">\n            <p class="text-shoppingList-author">').concat(n.author,'</p>\n            <ul class="box-shoppingList-shop">\n              <li>\n                <a\n                  class="shop-shoppingList-link"\n                  target="_blank"\n                  href="').concat(null===(e=n.buy_links.find((function(n){return"Amazon"===n.name})))||void 0===e?void 0:e.url,'"\n                >\n                  <img\n                    class="shop-shoppingList-img1"\n                    src="').concat(g,'"\n                    alt="Amazon Link"\n                  />       \n                </a>\n              </li>\n              <li>\n                <a\n                  class="shop-shoppingList-link"\n                  target="_blank"\n                  href="').concat(null===(t=n.buy_links.find((function(n){return"Apple Books"===n.name})))||void 0===t?void 0:t.url,'"\n                >                          \n                  <img\n                    class="shop-shoppingList-img2"\n                    src="').concat(f,'"\n                    alt="Apple Books Link"\n                  />           \n                </a>\n              </li>\n              <li>\n                <a\n                  class="shop-shoppingList-link"\n                  target="_blank"\n                  href="').concat(null===(i=n.buy_links.find((function(n){return"Bookshop"===n.name})))||void 0===i?void 0:i.url,'"\n                >\n                  <img\n                    class="shop-shoppingList-img2"\n                    src="').concat(L,'"\n                    alt="Bookshop link"\n                  />       \n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>')})).join("");m.innerHTML=e}(k):m.innerHTML=H})),m.addEventListener("click",(function(n){if(n.target.closest(".box-shoppingList-trash")){var e=n.target.parentElement.attributes.id.value;if(e){var t=localStorage.getItem(r),i=(t?JSON.parse(t):[]).filter((function(n){return n.id!==e}));localStorage.setItem(r,JSON.stringify(i)),n.target.closest(".books-shoppingListLi").remove(),0===i.length&&(m.innerHTML=H)}}}))}();
//# sourceMappingURL=shoppinglist.30f4ff18.js.map
