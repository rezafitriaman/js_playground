/*
==============================
REQUIRED
==============================
*/

const gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	bs = require('browser-sync').create(),
	reload = bs.reload,
	plumber = require('gulp-plumber'),
	ts = require('gulp-typescript'),
	tsProject = ts.createProject("tsconfig.json"),
	browserify = require("browserify"),
	source = require('vinyl-source-stream'),
	tsify = require("tsify"),
	watchify = require("watchify")
	sourcemaps = require('gulp-sourcemaps'),
	buffer = require('vinyl-buffer');

/*
==============================
TEST ID
==============================
*/

const testId = {
	id: 'tutorial_ts',
	customer: 'freo'
};

/*
==============================
PATHS - REWRITEFILE
==============================
*/

const paths = {
	    main_tsFile: ['src/'+testId.id+'/main.ts']
	};
const rewriteFile = {
	freo: ['Scripts/FreoWebsite/polyfills.js?v=4.42.0.24204'],
	gStar:['_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js']
}

/*
==============================
GULP TASK
==============================
*/

gulp.task('BROWSER-SYNC', function () {

	bs.init({
	  proxy: {
	  	target : 'https://www.freo.nl/leningen/offerte-aanvragen/',
	  	ws: true
	  },
	  plugins: ['bs-rewrite-rules'],
	  files: ['public/'+testId.id+'/bundle.js'],
	  serveStatic: ['public/' + testId.id],
	  rewriteRules: [
	    {
	      	match: rewriteFile[testId.customer][0],
	      	replace: 'bundle.js'
	    }
	  ]
	});
});

const watchedBrowserify = watchify(browserify({
    basedir: '.',
	debug: true,
	entries: paths.main_tsFile,
	cache: {},
	packageCache: {}
	})
	.plugin(tsify, {
		"files": [
	        "src/"+testId.id+"/*.ts"
	    ],
	    "compilerOptions": {
	        "noImplicitAny": true,
	        "target": "es5"
	    },
	     "removeComments": true
	})
	.transform("babelify", 
		{presets: ["@babel/preset-env", {
	       "targets": "> 0.25%, not dead"
	    }]})
);

const bundle = () => {
	console.log('------------PREPARING TEST ID: ', testId.id, '------------')
	console.log('------------PREPARING TEST CUSTOMER: ', testId.customer, '------------')

    return watchedBrowserify
        .bundle()
    	.pipe(source('bundle.js'))
    	.pipe(buffer())
	    .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("public/"+testId.id+""))
        .pipe(reload({stream:true}));
}

/*
==============================
WATCH TASK
==============================
*/

watchedBrowserify.on("update", bundle);

/*
==============================
DEFAULT TASK
==============================
*/

gulp.task('default',['BROWSER-SYNC'], bundle);