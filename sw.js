// Install Service Worker
self.addEventListener('install', evt => {
  console.log('Service Worker has been installed');
});

// Activate Service Worker
self.addEventListener('activate', evt => {
  console.log('Service Worker has been Activated');
});