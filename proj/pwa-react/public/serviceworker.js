// make req once, take from cache
const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html', 'offline.html'];
const self = this;

// Install a service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache) => {
      console.log('Opened Cache');
      return cache.addAll(urlsToCache);
    })
  )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    // match for all the requests that
    // our page is receiving
    caches.match(event.request)
    .then(() => {
      // we again fetch the requests
      return fetch(event.request)
        // if we cannot fetch, we return the offline page
        .catch(() => caches.match('offline.html'))
    })
  )
});

// Activate the service worker
self.addEventListener('activate', (event) => {
  // Remove all previous caches
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (!cacheWhiteList.includes(cacheName)) {
          return caches.delete(cacheName);
        }
      })
    ))
  )
});