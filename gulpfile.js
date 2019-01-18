/*requered*/
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	plumber = require('gulp-plumber'),
	ts = require('gulp-typescript');

var testCode = 'AFM_test_2';
/*task*/
gulp.task("type", function () {
	console.log('type')
    var tsResult = gulp.src("src/"+testCode+"/*.ts")
    	.pipe(plumber())
        .pipe(ts({
              noImplicitAny: true,
              out: "output.js"
        }))
    return tsResult.js
    /*.pipe(uglify())*/
    .pipe(gulp.dest("public/"+testCode+""));
});

/*browser-sync*/
gulp.task('browser-sync', function () {
	console.log('browser-sync work!');
	browserSync({
		server: {
			baseDir: 'public',
			proxy: "grqbge-nwx7013:3000"
		}
	});
});

/*watch*/
gulp.task('watch', function() {
	console.log('watch');
	gulp.watch('src/'+testCode+'/*.ts', ['type']);
});

/*default*/
gulp.task('default',['type', 'browser-sync', 'watch']);