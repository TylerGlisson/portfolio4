const staticCacheName = 'site-static';
const assets = [
  '/',
  '/index.html',
  'app.js',
  '/js/stylish-portfolio.js',
  '/js/stylish-portfolio.min.js',
  '/css/stylish-portfolio.css',
  '/css/stylish-portfolio.min.css',
  '/img/Calculator.png',
  '/img/markdown.png',
  '/img/pomodoro.png',
  '/img/Portfolio Screen.png',
  '/img/weather.png',
  '/img/twitch.png',
  '/img/wikipedia.png',
  '/img/profilePortait.png',
  '/img/profilepic1.jpg',
  '/img/portraitprofile2.png',
  '/img/portraitProfile3.png',
  'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic'
];

// Install Service Worker
self.addEventListener('install', evt => {
  // console.log('Service Worker has been installed');
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('Caching assets');
      cache.addAll(assets);
    })
  );
});

// Activate Service Worker
self.addEventListener('activate', evt => {
  // console.log('Service Worker has been Activated');
});

// Fetch listener
self.addEventListener('fetch', evt => {
  // console.log('fetch evnt', evt);
});

// 