var bs = require('browser-sync').create();;

bs.init({
  proxy: 'https://www.freo.nl',
  plugins: ['bs-rewrite-rules'],
  files: ['public/js/index.js'],
  serveStatic: ['public/js'],
  rewriteRules: [
      {
        match: 'https://cdn.ravenjs.com/3.24.2/raven.min.js',
        replace: 'index.js'
      }
  ]
});

//G-star 
/*rewriteRules: [
    {
      match: '_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js',
      replace: 'index.js'
    }
]*/

//Freo
/*rewriteRules: [
    {
      match: 'https://cdn.ravenjs.com/3.24.2/raven.min.js',
      replace: 'index.js'
    }
]*/
