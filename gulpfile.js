/*requiered*/
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	bs = require('browser-sync').create(),
	reload = bs.reload,
	plumber = require('gulp-plumber'),
	ts = require('gulp-typescript');

var testCode = 'AFM_test_2';
/*task*/
gulp.task("type", function () {
	console.log('type')
    var tsResult = gulp.src("src/"+testCode+"/*.ts")
    	.pipe(plumber())
        .pipe(ts({
              noImplicitAny: false,
              out: "output.js"
        }))
    return tsResult.js
    /*.pipe(uglify())*/
    .pipe(gulp.dest("public/"+testCode+""))
    .pipe(reload({stream:true}));
});

/*browser-sync*/
gulp.task('browser-sync', ['type'], function () {
	console.log('browser-sync work!');
	bs.init({
	  proxy: 'https://www.freo.nl/leningen/offerte-aanvragen/',
	  plugins: ['bs-rewrite-rules'],
	  files: ['public/'+testCode+'/output.js'],
	  serveStatic: ['public/' + testCode],
	  rewriteRules: [
	    {
	      	match: 'Scripts/FreoWebsite/polyfills.js?v=4.42.0.24204',
	      	replace: 'output.js'
	    }
	  ]
	});
});

/*watch*/
gulp.task('watch', function() {
	console.log('watch');
	gulp.watch('src/'+testCode+'/*.ts', ['type']);
});

/*default*/
gulp.task('default',['browser-sync', 'watch']);


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
