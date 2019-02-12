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
- MAKE SURE TO SET ID
- MAKE SURE TO SET CUSTOMER

for option look const 'rewriteFile-Object' below
==============================
*/

const testId = {
	id: 'T002',
	customer: 'gStar',
	whichPage: 'beforeCheckout'
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
	freo: {
		all: 'Scripts/FreoWebsite/polyfills.js?v=4.47.0.27977'
	},
	gStar: {
		beforeCheckout: '_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js',
		checkoutAndAbove: '_ui/g-star/js/app/base.1f42b9df26df50a299c31779358e4496.js'
	}
};

/*
==============================
GULP TASK
==============================
*/

gulp.task('BROWSER-SYNC', function () {

	bs.init({
	  proxy: {
	  	target : 'https://outlet.g-star.com/',
	  	ws: true
	  },
	  plugins: ['bs-rewrite-rules'],
	  files: ['public/'+testId.id+'/bundle.js'],
	  serveStatic: ['public/' + testId.id],
	  rewriteRules: [
	    {
	      	match: rewriteFile[testId.customer][testId.whichPage],
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
	.transform("babelify", {
			"presets": [
			    [
					"@babel/preset-env", {
					  "useBuiltIns": "entry",
					  "targets": {
					    "browsers": [
					      "last 2 versions",
					      "safari >= 7",
					      "ie >= 11"
					    ]
					  }
					}
				]
			]
	})
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
