if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),u={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>u[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0e762574-4f02366c72509c8c.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/138-b7f642608f2d5499.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/172-a5253e5ca09eaaea.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/190-b629f7bebad16aca.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/445-2cf5e5aa9188584d.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/595-8992bd6694465006.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/8e1d74a4-bebd92db0a570707.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/946-c0dc5a86c63ac732.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/app/_not-found/page-d085fa9dac780494.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/app/app/customers/page-796e21818fc9ba2b.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/app/app/dashboard/page-c343e1bd13ec4b19.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/app/app/employees/page-5fac6a3f5ddb5319.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/app/app/layout-6ce6bac2e6b47a45.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/app/app/projects/page-bf3d355f4adcbe63.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/app/app/reports/page-290bf363f9afb3b0.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/app/app/timecard/page-64b2fcc77782399a.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/app/auth/layout-5fbfd9116b01310f.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/app/auth/login/page-186aa97c84db1382.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/app/auth/register/page-6201a41b678b60d9.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/app/layout-1f8dd163e4a5a76e.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/app/page-a811e05d9624615f.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/fc2f6fa8-c4c3fa46e63befc6.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/fd9d1056-07cd6af263596092.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/main-846ba52888fd0dcc.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/main-app-523d30004da946b2.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-571478b098fa74a0.js",revision:"sWrjOw3bC2uN9cn6QNXhW"},{url:"/_next/static/css/b26f3cb99e3cf977.css",revision:"b26f3cb99e3cf977"},{url:"/_next/static/css/c0b6f8fca0a96f1f.css",revision:"c0b6f8fca0a96f1f"},{url:"/_next/static/media/0484562807a97172-s.p.woff2",revision:"b550bca8934bd86812d1f5e28c9cc1de"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/0a03a6d30c07af2e-s.woff2",revision:"79da53ebaf3308c806394df4882b343d"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/sWrjOw3bC2uN9cn6QNXhW/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/sWrjOw3bC2uN9cn6QNXhW/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/customers.png",revision:"ef050a4ddde0e6f9245df18a67c2fd98"},{url:"/dashboard.png",revision:"6e16968e206dc333adda80e40e71cd34"},{url:"/employee.png",revision:"56bcc19f83a1dc2cbcb2e94b596f59f6"},{url:"/manifest.json",revision:"845760e0b6d44b4dec3f0432dc5c49c2"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/owl.png",revision:"f667a01bacb62c337dd7efe4e6c970e6"},{url:"/profile.png",revision:"92af80faf495a255f9757b4e2a94e8fb"},{url:"/projects.png",revision:"48d93e2ffef2dfc98cd2f875c616dccb"},{url:"/reports.png",revision:"14bb77dce8db16584e9e72de2064c24e"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/timecard.png",revision:"63a50aa937ceb8a5c03a232ae595933c"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
