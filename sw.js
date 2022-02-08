var cacheName = 'pwa-tp2-v1';
var filesToCache = [
    '/',
    '/index.html',
    '/index.js',
    '/bootstrap-5.1.3-dist/',
    '/bootstrap-5.1.3-dist/css/',
    '/bootstrap-5.1.3-dist/css/bootstrap.min.css',
    '/bootstrap-5.1.3-dist/js/',
    '/bootstrap-5.1.3-dist/js/bootstrap.min.js',
    '/bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js',
    '/img/',
    '/img/manoir.png',
    '/img/niagara.png',
    '/img/tesla.png',
    '/img/icon-192x192.png',
    '/img/icon-256x256.png',
    '/img/icon-384x384.png',
    '/img/icon-512x512.png',
    '/favicon.ico'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installation');

    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Mise en cache.');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Activation');
});

// self.addEventListener('fetch', function(e) {
//     e.respondWith(
//         caches.match(e.request)
//         .then(function(response) {
//             return response || fetch(e.request);
//         })
//     );
// });

self.addEventListener('fetch', function(e) {
    e.respondWith(
        fetch(e.request).catch(function() {
            return caches.match(e.request);
        })
    );
});

// onmessage = function(e) {
//     console.log('[Service Worker] On Message: ', e);
// }