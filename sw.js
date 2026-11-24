'use strict';
const CACHE='nobody-wallet-shell-v1';
const SHELL=['./','./index.html','./manifest.webmanifest','./assets/style.css','./assets/app.js','./assets/vendor/qr.js','./assets/icons/vault.svg','./assets/icons/vault-180.png','./assets/icons/vault-192.png','./assets/icons/vault-512.png','./assets/icons/vault-maskable-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('nobody-wallet-shell-')&&k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{let u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==self.location.origin||!u.href.startsWith(self.registration.scope))return;if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.match(new URL('./index.html',self.registration.scope).href)));return}if(!SHELL.map(p=>new URL(p,self.registration.scope).href).includes(u.href))return;e.respondWith(fetch(e.request).then(r=>{if(r.ok){let copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{})}return r}).catch(()=>caches.match(e.request)))});
