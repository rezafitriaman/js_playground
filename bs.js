var browserSync = require('browser-sync');

browserSync({
  proxy: 'https://www.wikipedia.org/',
  files: ['public/js/*.js'],
  serveStatic: ['public/js'],
  rewriteRules: [
      {
        match: new RegExp('portal/wikipedia.org/assets/js/index-309cc1c97b.js'),
        fn: function() {
          return 'index.js';
        }
      }
  ]
});

/*https://localhost:3000/portal/wikipedia.org/assets/js/index-309cc1c97b.js
https://www.wikipedia.org/portal/wikipedia.org/assets/js/index-309cc1c97b.js*/