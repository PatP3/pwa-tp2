var cacheName = 'cache-tp2-v1';
var filesToCache = [
    '/',
    '/index.html',
    '/index.js',
    '/bootstarp-5.1.3-dist/',
    '/bootstarp-5.1.3-dist/css/',
    '/bootstrap-5.1.3-dist/css/bootstrap.min.css',
    '/bootstarp-5.1.3-dist/js/',
    '/bootstrap-5.1.3-dist/js/bootstrap.min.js',
    '/img/',
    '/img/manoir.png',
    '/img/niagara.png',
    '/img/tesla.png',
    '/favicon.ico'
]

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installation');

    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        }).then(function() {
            return self.skipWaiting();
        })
    );
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Activation');
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request)
        .then(function(response) {
            return response || fetch(e.request);
        })
    );
});

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