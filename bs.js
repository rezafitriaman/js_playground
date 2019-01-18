var browserSync = require('browser-sync');

browserSync({
  proxy: 'https://www.g-star.com/',
  files: ['public/js/*.js'],
  serveStatic: ['public/js'],
  rewriteRules: [
      {
        match: new RegExp('_ui/g-star/js/app/base.495e357e608e7d2d4de7355c1ca84f48.js'),
        fn: function() {
          return 'index.js';
        }
      }
  ]
});

/*https://localhost:3000/portal/wikipedia.org/assets/js/index-309cc1c97b.js
https://www.wikipedia.org/portal/wikipedia.org/assets/js/index-309cc1c97b.js*/
/*
 match: new RegExp('portal/wikipedia.org/assets/js/index-309cc1c97b.js'),

 var reg = /portal\/wikipedia\.org\/assets\/js\/index-309cc1c97b.js/g*/