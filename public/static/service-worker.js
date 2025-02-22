!function(){"use strict";var e={998:function(){try{self["workbox:core:6.5.4"]&&_()}catch(e){}},418:function(){try{self["workbox:precaching:6.5.4"]&&_()}catch(e){}},858:function(){try{self["workbox:routing:6.5.4"]&&_()}catch(e){}},156:function(){try{self["workbox:strategies:6.5.4"]&&_()}catch(e){}}},t={};function s(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}},n=!0;try{e[a](i,i.exports,s),n=!1}finally{n&&delete t[a]}return i.exports}!function(){var e,t;let a,r,i;s(998);let n=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class l extends Error{constructor(e,t){super(n(e,t)),this.name=e,this.details=t}}let c={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},o=e=>[c.prefix,e,c.suffix].filter(e=>e&&e.length>0).join("-"),h=e=>e||o(c.precache),u=e=>e||o(c.runtime);function f(e,t){let s=t();return e.waitUntil(s),s}s(418);class d{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){let e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class p{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{let s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}async function g(e,t){let s=null;if(e.url&&(s=new URL(e.url).origin),s!==self.location.origin)throw new l("cross-origin-copy-response",{origin:s});let r=e.clone(),i={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},n=t?t(i):i,c=!function(){if(void 0===a){let e=new Response("");if("body"in e)try{new Response(e.body),a=!0}catch(e){a=!1}a=!1}return a}()?await r.blob():r.body;return new Response(c,n)}let y=e=>new URL(String(e),location.href).href.replace(RegExp(`^${location.origin}`),"");function w(e,t){let s=new URL(e);for(let e of t)s.searchParams.delete(e);return s.href}async function m(e,t,s,a){let r=w(t.url,s);if(t.url===r)return e.match(t,a);let i=Object.assign(Object.assign({},a),{ignoreSearch:!0});for(let n of(await e.keys(t,i)))if(r===w(n.url,s))return e.match(n,a)}class R{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}let C=new Set;async function v(){for(let e of C)await e()}function b(e){return"string"==typeof e?new Request(e):e}s(156);class L{constructor(e,t){for(let s of(this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new R,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map,this._plugins))this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){let{event:t}=this,s=b(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){let e=await t.preloadResponse;if(e)return e}let a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(let e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new l("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}let r=s.clone();try{let e;for(let a of(e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions),this.iterateCallbacks("fetchDidSucceed")))e=await a({event:t,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){let t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){let t;let s=b(e),{cacheName:a,matchOptions:r}=this._strategy,i=await this.getCacheKey(s,"read"),n=Object.assign(Object.assign({},r),{cacheName:a});for(let e of(t=await caches.match(i,n),this.iterateCallbacks("cachedResponseWillBeUsed")))t=await e({cacheName:a,matchOptions:r,cachedResponse:t,request:i,event:this.event})||void 0;return t}async cachePut(e,t){let s=b(e);await new Promise(e=>setTimeout(e,0));let a=await this.getCacheKey(s,"write");if(!t)throw new l("cache-put-with-no-response",{url:y(a.url)});let r=await this._ensureResponseSafeToCache(t);if(!r)return!1;let{cacheName:i,matchOptions:n}=this._strategy,c=await self.caches.open(i),o=this.hasCallback("cacheDidUpdate"),h=o?await m(c,a.clone(),["__WB_REVISION__"],n):null;try{await c.put(a,o?r.clone():r)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await v(),e}for(let e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:i,oldResponse:h,newResponse:r.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){let s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(let e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=b(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(let t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(let s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(let t of this._strategy.plugins)if("function"==typeof t[e]){let s=this._pluginStateMap.get(t),a=a=>{let r=Object.assign(Object.assign({},a),{state:s});return t[e](r)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(let e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return!s&&t&&200!==t.status&&(t=void 0),t}}class U{constructor(e={}){this.cacheName=u(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){let[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});let t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a=new L(this,{event:t,request:s,params:"params"in e?e.params:void 0}),r=this._getResponse(a,s,t),i=this._awaitComplete(r,a,s,t);return[r,i]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(!(a=await this._handle(t,e))||"error"===a.type)throw new l("no-response",{url:t.url})}catch(r){if(r instanceof Error){for(let i of e.iterateCallbacks("handlerDidError"))if(a=await i({error:r,event:s,request:t}))break}if(a);else throw r}for(let r of e.iterateCallbacks("handlerWillRespond"))a=await r({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let r,i;try{r=await e}catch(e){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:r}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:r,error:i}),t.destroy(),i)throw i}}class k extends U{constructor(e={}){e.cacheName=h(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(k.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;let a=t.params||{};if(this._fallbackToNetwork){let r=a.integrity,i=e.integrity,n=!i||i===r;s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||r:void 0})),r&&n&&"no-cors"!==e.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}else throw new l("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();let s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new l("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(let[s,a]of this.plugins.entries())a!==k.copyRedirectedCacheableResponsesPlugin&&(a===k.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(k.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}k.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},k.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await g(e):e};class T{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new k({cacheName:h(e),plugins:[...t,new p({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){let t=[];for(let s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);let{cacheKey:e,url:a}=function(e){if(!e)throw new l("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){let t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}let{revision:t,url:s}=e;if(!s)throw new l("add-to-cache-list-unexpected-type",{entry:e});if(!t){let e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}let a=new URL(s,location.href),r=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:r.href}}(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new l("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new l("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),t.length>0&&console.warn(`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`)}}install(e){return f(e,async()=>{let t=new d;for(let[s,a]of(this.strategy.plugins.push(t),this._urlsToCacheKeys)){let t=this._cacheKeysToIntegrities.get(a),r=this._urlsToCacheModes.get(s),i=new Request(s,{integrity:t,cache:r,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:a},request:i,event:e}))}let{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}})}activate(e){return f(e,async()=>{let e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(let r of t)s.has(r.url)||(await e.delete(r),a.push(r.url));return{deletedURLs:a}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){let t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){let t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){let t=this.getCacheKeyForURL(e);if(!t)throw new l("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let K=()=>(r||(r=new T),r);s(858);let q=e=>e&&"object"==typeof e?e:{handle:e};class x{constructor(e,t,s="GET"){this.handler=q(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=q(e)}}class P extends x{constructor(e,t,s){super(({url:t})=>{let s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}class E{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{let{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){let{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(t=>{"string"==typeof t&&(t=[t]);let s=new Request(...t);return this.handleRequest({request:s,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){let s;let a=new URL(e.url,location.href);if(!a.protocol.startsWith("http"))return;let r=a.origin===location.origin,{params:i,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:a}),l=n&&n.handler,c=e.method;if(!l&&this._defaultHandlerMap.has(c)&&(l=this._defaultHandlerMap.get(c)),!l)return;try{s=l.handle({url:a,request:e,event:t,params:i})}catch(e){s=Promise.reject(e)}let o=n&&n.catchHandler;return s instanceof Promise&&(this._catchHandler||o)&&(s=s.catch(async s=>{if(o)try{return await o.handle({url:a,request:e,event:t,params:i})}catch(e){e instanceof Error&&(s=e)}if(this._catchHandler)return this._catchHandler.handle({url:a,request:e,event:t});throw s})),s}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){for(let r of this._routes.get(s.method)||[]){let i;let n=r.match({url:e,sameOrigin:t,request:s,event:a});if(n)return Array.isArray(i=n)&&0===i.length?i=void 0:n.constructor===Object&&0===Object.keys(n).length?i=void 0:"boolean"==typeof n&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,q(e))}setCatchHandler(e){this._catchHandler=q(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new l("unregister-route-but-not-found-with-method",{method:e.method});let t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new l("unregister-route-route-not-registered")}}let M=()=>(i||((i=new E).addFetchListener(),i.addCacheListener()),i);class N extends x{constructor(e,t){super(({request:s})=>{let a=e.getURLsToCacheKeys();for(let r of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:r}={}){let i=new URL(e,location.href);i.hash="",yield i.href;let n=function(e,t=[]){for(let s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(i,t);if(yield n.href,s&&n.pathname.endsWith("/")){let e=new URL(n.href);e.pathname+=s,yield e.href}if(a){let e=new URL(n.href);e.pathname+=".html",yield e.href}if(r)for(let e of r({url:i}))yield e.href}(s.url,t)){let t=a.get(r);if(t){let s=e.getIntegrityForCacheKey(t);return{cacheKey:t,integrity:s}}}},e.strategy)}}e=[{'revision':'d45cfb5a0d00d812b886b638bb0fc7fa','url':'/_next/app-build-manifest.json'},{'revision':'2edba7f4c4be4c8211be52fe69a004c9','url':'/_next/server/app/_not-found/page_client-reference-manifest.js'},{'revision':'2a97e403d8508707519a493e06deb938','url':'/_next/server/app/about/page_client-reference-manifest.js'},{'revision':'452a0bb39f8cbd2370b52e15384377c7','url':'/_next/server/app/contact/page_client-reference-manifest.js'},{'revision':'8b863000a295e444d9cf8ab531e36be6','url':'/_next/server/app/features/background-checks/page_client-reference-manifest.js'},{'revision':'a73c3445bb3ed0d36770f0d60e9a0515','url':'/_next/server/app/features/compliance/page_client-reference-manifest.js'},{'revision':'d864cab3a90d0b0173cb371b0c8abd17','url':'/_next/server/app/features/identity-verification/page_client-reference-manifest.js'},{'revision':'12d7096f6bb2e7e892daf2ecc793b483','url':'/_next/server/app/page_client-reference-manifest.js'},{'revision':'d54af36ac4a78c4ee8a91ea923aac583','url':'/_next/server/middleware-build-manifest.js'},{'revision':'49318b1fadb2d705059a2e0d8df88bb6','url':'/_next/server/middleware-react-loadable-manifest.js'},{'revision':'26ff7e02e08bec4da5cb19094dffd779','url':'/_next/server/next-font-manifest.js'},{'revision':'743d228fa587344b0aa65d4bcd13b107','url':'/_next/server/next-font-manifest.json'},{'revision':null,'url':'/_next/static/chunks/282-e4e48e46496e90ff.js'},{'revision':null,'url':'/_next/static/chunks/477-477b6f20c709f85d.js'},{'revision':null,'url':'/_next/static/chunks/557-4908f0346426f7bf.js'},{'revision':null,'url':'/_next/static/chunks/573-749b457893a141f5.js'},{'revision':null,'url':'/_next/static/chunks/82-06e733606bbb9d7d.js'},{'revision':null,'url':'/_next/static/chunks/9107b45d-ac34e4171b1d24ff.js'},{'revision':null,'url':'/_next/static/chunks/app/_not-found/page-51dd9b7ab6490cae.js'},{'revision':null,'url':'/_next/static/chunks/app/about/page-061228830ccccc24.js'},{'revision':null,'url':'/_next/static/chunks/app/contact/page-5a639e3fa56d6128.js'},{'revision':null,'url':'/_next/static/chunks/app/features/background-checks/page-fb3663aa9e87f93d.js'},{'revision':null,'url':'/_next/static/chunks/app/features/compliance/page-a87d1dd803b8935c.js'},{'revision':null,'url':'/_next/static/chunks/app/features/identity-verification/page-e8a6ad138d0c6166.js'},{'revision':null,'url':'/_next/static/chunks/app/layout-869f7bf4edf2b970.js'},{'revision':null,'url':'/_next/static/chunks/app/page-6d77f707579cef13.js'},{'revision':null,'url':'/_next/static/chunks/framework-6e06c675866dc992.js'},{'revision':null,'url':'/_next/static/chunks/main-5c8edea09d3ff222.js'},{'revision':null,'url':'/_next/static/chunks/main-app-e137e16096e552f8.js'},{'revision':null,'url':'/_next/static/chunks/pages/_app-9e88b6e119607a3a.js'},{'revision':null,'url':'/_next/static/chunks/pages/_error-dc27139067f65ea5.js'},{'revision':null,'url':'/_next/static/chunks/polyfills-42372ed130431b0a.js'},{'revision':null,'url':'/_next/static/chunks/webpack-8b6cb11622c9da23.js'},{'revision':null,'url':'/_next/static/css/c0dde9dd39141f39.css'},{'revision':null,'url':'/_next/static/media/26a46d62cd723877-s.woff2'},{'revision':null,'url':'/_next/static/media/55c55f0601d81cf3-s.woff2'},{'revision':null,'url':'/_next/static/media/581909926a08bbc8-s.woff2'},{'revision':null,'url':'/_next/static/media/6d93bde91c0c2823-s.woff2'},{'revision':null,'url':'/_next/static/media/97e0cb1ae144a2a9-s.woff2'},{'revision':null,'url':'/_next/static/media/a34f9d1faa5f3315-s.p.woff2'},{'revision':null,'url':'/_next/static/media/df0a9ae256c0569c-s.woff2'},{'revision':null,'url':'/_next/static/sxtJStkSSrnDbw772KOP4/_buildManifest.js'},{'revision':null,'url':'/_next/static/sxtJStkSSrnDbw772KOP4/_ssgManifest.js'},{'revision':'35e881f7c10d3566ae37e58f9885720c','url':'/placeholder-logo.png'},{'revision':'6610ee8aa03c05aed831d90e07e5cde8','url':'/placeholder-logo.svg'},{'revision':'54ffabe799d8feae10b6ce019629b5bc','url':'/placeholder-user.jpg'},{'revision':'f0635bf2cc623956ba02872a98213a1d','url':'/placeholder.jpg'},{'revision':'be626a945f9ceca23b99e7f99b60195c','url':'/placeholder.svg'}],K().precache(e),t=void 0,function(e,t,s){let a;if("string"==typeof e){let t=new URL(e,location.href);a=new x(({url:e})=>e.href===t.href,void 0,void 0)}else if(e instanceof RegExp)a=new P(e,void 0,void 0);else if("function"==typeof e)a=new x(e,void 0,void 0);else if(e instanceof x)a=e;else throw new l("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});M().registerRoute(a)}(new N(K(),t)),self.addEventListener("install",e=>{console.log("Service worker installed")}),self.addEventListener("activate",e=>{console.log("Service worker activated")}),self.addEventListener("fetch",e=>{console.log("Fetch intercepted for:",e.request.url)})}()}();