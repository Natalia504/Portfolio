"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","b7c71c5b6878a773ce8a68ec6592197b"],["/static/css/main.9646a805.css","abd5942714440cb96d2b9fc25e165966"],["/static/js/main.f441c017.js","f7f7858f950238a2b1c2318572c4b361"],["/static/media/ProfilePic.8498e4f1.jpg","8498e4f1051102c89903f11968734623"],["/static/media/Screen_Shot.62ba3fd5.png","62ba3fd5cc48fab2e8764847feabe8a9"],["/static/media/all-items.6c7bd184.png","6c7bd1847e4d935a08a005df90b8f102"],["/static/media/cart-page.713c59cc.png","713c59cc88884843d516d239c20e6a7c"],["/static/media/itemDetail.ddd0b7e1.png","ddd0b7e18efc1428e48f565a6efd643a"],["/static/media/lukas-blazek.815fe0c6.jpg","815fe0c6aca721f5f3287d23ed4e13a0"],["/static/media/omnifood.f5101dc4.png","f5101dc42c0ac0d57fa2a328332007ea"],["/static/media/omnifood2.819c84bb.png","819c84bb66c4be09f87714bea2eebd5a"],["/static/media/omnifood3.a4e9a4b5.png","a4e9a4b57d5b4515677ce3cba89f9d25"],["/static/media/omnifood4.f7eb9676.png","f7eb96765ee954048f004effa5ed7ef1"],["/static/media/omnifood5.c0cfa86d.png","c0cfa86d783be31fc6e6d9eb89b6bcdc"],["/static/media/omnifood6.6b282e02.png","6b282e02f1d8fae1ac26eb5e258cd3a0"],["/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/static/media/techdecks.info10_answer.daf36a5e.png","daf36a5e95c5c8f9ed97775604f1c398"],["/static/media/techdecks.info11_favorites.856c372c.png","856c372cbdfe805644802d58d681fff3"],["/static/media/techdecks.info12_createDeck.68bd9976.png","68bd99762be3f00c68b640e4868d8558"],["/static/media/techdecks.info13_createCard.4a24b975.png","4a24b9750a3051c82d2dd53431c6b00d"],["/static/media/techdecks.info14_cardInDeck.080a24f0.png","080a24f04a510ba2b2efd21186a07277"],["/static/media/techdecks.info1_landing.85e68e63.png","85e68e63708121e1899957fdfd4adf28"],["/static/media/techdecks.info3_google_signin_.86fc70b8.png","86fc70b8b1949d3e0749308b9ea1ee97"],["/static/media/techdecks.info4_home.10291ba7.png","10291ba792fc2b80cbfdd42b138bd566"],["/static/media/techdecks.info5_menu.293bd75b.png","293bd75b461cd36792de7b44af73a4b2"],["/static/media/techdecks.info6_search.cd454fc1.png","cd454fc1d68ac5ee12ad39ce2d559de8"],["/static/media/techdecks.info7_myDecks.43be858b.png","43be858ba9d77cc842be351f5f493c8a"],["/static/media/techdecks.info8_oneDeck.d21837a1.png","d21837a1bfa12d074fb557ecc7495b43"],["/static/media/techdecks.info9_question.1b8671fa.png","1b8671facd1d7d77ce39cf517f4b7eab"],["/static/media/underConstruction.39f44bac.jpg","39f44bacb3484c456db31fb4eb7cba28"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});