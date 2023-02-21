// Registrando o Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(function(registration) {
        console.log('Service worker registrado com sucesso:', registration.scope);
      })
      .catch(function(error) {
        console.log('Falha ao registrar o Service Worker:', error);
      });
  }
  
  // Configuração do cache
  const cacheName = 'my-app-cache';
  const cacheFiles = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/main.js',
    '/imagens/honda.ico',
  ];
  
  // Instalando o Service Worker
  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(cacheName)
        .then(function(cache) {
          console.log('Cache aberto');
          return cache.addAll(cacheFiles);
        })
    );
  });
  
  // Recuperando recursos do cache
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            console.log('Recuperando do cache:', event.request.url);
            return response;
          }
          console.log('Recuperando do servidor:', event.request.url);
          return fetch(event.request);
        })
    );
  });
  
  // Removendo caches antigos
  self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {
            return cacheName !== cacheName;
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
  });
  