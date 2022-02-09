console.log('il est dans le sw');
var cacheName = 'pwa-tp2-v1';
var filesToCache = [
    '/pwa-tp2/',
    '/pwa-tp2/index.html',
    '/pwa-tp2/index.js',
    '/pwa-tp2/bootstrap-5.1.3-dist/',
    '/pwa-tp2/bootstrap-5.1.3-dist/css/',
    '/pwa-tp2/bootstrap-5.1.3-dist/css/bootstrap.min.css',
    '/pwa-tp2/bootstrap-5.1.3-dist/js/',
    '/pwa-tp2/bootstrap-5.1.3-dist/js/bootstrap.min.js',
    '/pwa-tp2/bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js',
    '/pwa-tp2/img/',
    '/pwa-tp2/img/manoir.png',
    '/pwa-tp2/img/niagara.png',
    '/pwa-tp2/img/tesla.png',
    '/pwa-tp2/img/icon-192x192.png',
    '/pwa-tp2/img/icon-256x256.png',
    '/pwa-tp2/img/icon-384x384.png',
    '/pwa-tp2/img/icon-512x512.png',
    '/pwa-tp2/favicon.ico'
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
