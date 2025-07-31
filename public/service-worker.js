self.addEventListener('install', (e) => {
    // skip waiting so new SW activates quickly
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    const req = e.request;
    if (req.mode === 'navigate') {
        e.respondWith(
            fetch(req).catch(() => caches.match('/offline.html') || fetch('/offline.html'))
        );
    }
    // otherwise let network handle it (no other caching)
});
