import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

if (!self.define) {
    let e,
        a = {};
    const s = (s, i) => (
        (s = new URL(s + ".js", i).href),
        a[s] ||
            new Promise((a) => {
                if ("document" in self) {
                    const e = document.createElement("script");
                    (e.src = s), (e.onload = a), document.head.appendChild(e);
                } else (e = s), importScripts(s), a();
            }).then(() => {
                let e = a[s];
                if (!e) throw new Error(`Module ${s} didn’t register its module`);
                return e;
            })
    );
    self.define = (i, c) => {
        const d = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (a[d]) return;
        let f = {};
        const r = (e) => s(e, d),
            n = { module: { uri: d }, exports: f, require: r };
        a[d] = Promise.all(i.map((e) => n[e] || r(e))).then((e) => (c(...e), f));
    };
}
define(["./workbox-a482575e"], function (e) {
    "use strict";
    self.addEventListener("message", (e) => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
    }),
        e.precacheAndRoute(self.__WB_MANIFEST);
});

// Ensure that our service worker takes control of the page as soon as possible.
addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting());
  });
  addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});
  
// Cache CSS and JavaScript Files
registerRoute(
    /\.(?:js|css)$/,
    new CacheFirst({
        cacheName: 'static-resources',
        plugins: [
        new ExpirationPlugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
        ],
    }),
);

// Cache images
registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    new CacheFirst({
        cacheName: 'images',
        plugins: [
        new ExpirationPlugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
        ],
    }),
);

//# sourceMappingURL=service-worker.js.map
