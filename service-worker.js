"use strict";var precacheConfig=[["/portfolio/index.html","19e4c005dfda46d1268de66b57d4f8ea"],["/portfolio/static/css/main.b2c0581f.css","cd88640dfd460f7b2805ad13a28f6c0f"],["/portfolio/static/js/main.f63bd65b.js","6f54b47543ecb82cd5b6f82c854ce78e"],["/portfolio/static/media/10_1.e92e9347.png","e92e934789c34746899e09e3537acbb8"],["/portfolio/static/media/10_s.4189b168.png","4189b16837442b667aaec94ab7916fae"],["/portfolio/static/media/11_1.3dccb4c9.png","3dccb4c99b616445760e2092cb70acf1"],["/portfolio/static/media/11_s.2ea238ac.png","2ea238ac8a0bdbb5952c24aa88ec6f80"],["/portfolio/static/media/12_1.95f202ad.jpeg","95f202ade8630e08005a7bfcfaa44529"],["/portfolio/static/media/12_2.70b89ede.png","70b89ede1d5fa8c2e7f5bd539db63cdf"],["/portfolio/static/media/12_3.c1e3b491.png","c1e3b491858cb9c1e0869fe35e62e34f"],["/portfolio/static/media/12_s.28b95d1d.png","28b95d1dc473a54b1eb6f3207b1daa1d"],["/portfolio/static/media/13_1.1ed78807.png","1ed78807779fc0008e2aafe4a46a04ff"],["/portfolio/static/media/13_s.bb898d7f.png","bb898d7f3cbfdaf942af2af9b0c4f2f0"],["/portfolio/static/media/1_1.3d037a3b.png","3d037a3b079986063779f4be9801a090"],["/portfolio/static/media/1_2.90627211.png","906272114664b48f6062ee5b2e8911fc"],["/portfolio/static/media/1_3.4ad82df5.png","4ad82df578411012f376be5d3868807d"],["/portfolio/static/media/1_s.a129713a.png","a129713ae34ab99fa85f89de82f95d16"],["/portfolio/static/media/2_1.fe49fb0e.png","fe49fb0e0bcd6fc9490f182c42cb0f88"],["/portfolio/static/media/2_2.0178dafe.png","0178dafe3c9455fd05394fe762df2f90"],["/portfolio/static/media/2_3.914e6f52.png","914e6f52a15ec90d21477588f686134c"],["/portfolio/static/media/2_s.fc811ee8.png","fc811ee80b4f0930512ebc56f3f923be"],["/portfolio/static/media/3_1.04e41770.png","04e41770627b3c7a1700a7c2950ab059"],["/portfolio/static/media/3_2.ed169e5a.png","ed169e5afd792416950a814c59cff4d5"],["/portfolio/static/media/3_3.b0b3abce.png","b0b3abceed845a9475f42ba777243fb3"],["/portfolio/static/media/3_s.e53e1fee.png","e53e1feed955c88f3d314fce03cd35bc"],["/portfolio/static/media/4_1.4e0c950d.png","4e0c950dde0f7c6101c27a71fb1fad76"],["/portfolio/static/media/4_s.4e0c950d.png","4e0c950dde0f7c6101c27a71fb1fad76"],["/portfolio/static/media/5.067f2a57.mp4","067f2a577e90c3df15612a235877d73a"],["/portfolio/static/media/5_1.72b08022.png","72b080222ac0532408f14b686746c629"],["/portfolio/static/media/5_2.4263bafe.png","4263bafed4e474eaca8a0c363488030f"],["/portfolio/static/media/5_s.ad796e85.png","ad796e8506fefd73f68b2e5c8bb32eb5"],["/portfolio/static/media/6.09c8b0a6.mp4","09c8b0a6e49c98e9bc2c7dc38f0cc83f"],["/portfolio/static/media/6_1.f4a49ed6.png","f4a49ed6aba151c4b67aaeac4a38c822"],["/portfolio/static/media/6_s.f4a49ed6.png","f4a49ed6aba151c4b67aaeac4a38c822"],["/portfolio/static/media/7_1.9400608c.png","9400608cf8db006d20d12767b1c2ba11"],["/portfolio/static/media/7_2.409c5812.png","409c5812c1ad4a3f80684d67a70826ae"],["/portfolio/static/media/7_3.464ac899.png","464ac899cd57bf6ef97b92fdd2f76164"],["/portfolio/static/media/7_s.abbdb579.png","abbdb579229255727accd349ffbdd888"],["/portfolio/static/media/9_1.f7b26060.png","f7b26060de0dfcb4926803dc35b204b4"],["/portfolio/static/media/9_2.d133de02.png","d133de0224b813255b0f3931d781de63"],["/portfolio/static/media/9_3.86722e1a.png","86722e1ad229585288176712caa23611"],["/portfolio/static/media/9_s.bfcbe26e.png","bfcbe26e1082ad0a2eeb1129a1f8a09c"],["/portfolio/static/media/Coves Bold.2673b4f6.otf","2673b4f6918327fbfa96a1869a980706"],["/portfolio/static/media/Coves Light.62a84258.otf","62a8425826d8c50b5b4784779e20114b"],["/portfolio/static/media/SIMPLIFICA Typeface.22dd36f6.ttf","22dd36f616c2ece8a4b1cc2217095003"],["/portfolio/static/media/munich.30d31c6e.otf","30d31c6e1c75147d528c4145f784b625"],["/portfolio/static/media/photo2.06cbfd7a.jpeg","06cbfd7aa94985e1149dd0d189d7f39b"],["/portfolio/static/media/resume.11ffa7a8.pdf","11ffa7a8257ccf7b7b319cfddc101c47"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var o=new URL(e);return c&&o.pathname.match(c)||(o.search+=(o.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),o.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),o=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var o="/portfolio/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(o,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});