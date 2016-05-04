// generated on 2016-03-14 using generator-webapp 2.0.0
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import path from 'path';
import minimist from 'minimist';
import replace from 'gulp-replace';
import child_process from 'child_process';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

var replaceOptions = {
  string: 'old',
  string: 'new',
  default: { 
    old: '0.0.0',
    new: '0.0.1'
  }
};

var options = minimist(process.argv.slice(3), replaceOptions);
console.log(options.new);

// replace
// Update version numbers on all relevant files
// Usage:
// $ gulp replace --old 0.0.1 --new 0.0.2
gulp.task('bump', () => {
  // list of files with static version numbers
  var files = [
    'bower.json',
    'package.json',
    'README.md',
    'public/sass/pxh-chrome.scss',
    'public/js/pxh-chrome.js',
    'public/chromeless.html',
    'public/index.html',
    'test/e2e/spec/test.js'
  ];
  var regex = new RegExp('^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(\\.\\d{1,3})?$');
  if ((options.old.search(regex) !== -1) && (options.new.search(regex) !== -1)) {
    console.log(`Attempting to update version numbers from ${options.old} to ${options.new}...`);
    files.forEach(function(file) {
      console.log(`Reading (and maybe updating) ${file}...`);
      gulp.src(file)
      .pipe(replace(options.old, options.new))
      .pipe(gulp.dest(path.dirname(file)));
    })
  } else {
    console.log('');
    console.log(`The values --old ${options.old} and --new ${options.new} don't look like version numbers.`);
    console.log('');
    console.log('Please follow the format {major}.{minor}.{patch} (with an optional .{hotfix})');
    console.log('');
    console.log('Examples: 0.1.1, 0.1.2, 0.1.2.1, etc.')
    console.log('');
  }
});

gulp.task('sass', () => {
  return gulp.src('public/sass/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.', 'bower_components']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/css'))
    .pipe(reload({stream: true}));
});

gulp.task('js', () => {
  return gulp.src('public/js/**/*.js')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp/js'))
    .pipe(reload({stream: true}));
});

function lint(files, options) {
  return () => {
    return gulp.src(files)
      .pipe(reload({stream: true, once: true}))
      .pipe($.eslint(options))
      .pipe($.eslint.format())
      // .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
  };
}
const testLintOptions = {
  env: {
    mocha: true
  }
};

gulp.task('lint', lint('public/js/**/*.js'));
gulp.task('lint:test', lint('test/unit/spec/**/*.js', testLintOptions));

gulp.task('html', ['sass', 'js'], () => {
  return gulp.src('public/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'public', '.']}))
    .pipe($.if('*.js', $.uglify({
      preserveComments: 'some'
    })))
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('extras', () => {
  return gulp.src([
    'public/*.*',
    '!public/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('img', () => {
  return gulp.src(['public/img/*']).pipe(gulp.dest('dist/img'));
});

gulp.task('fonts', () => {
  return gulp.src('bower_components/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['sass', 'js', 'extras', 'img', 'fonts'], () => {
  browserSync.init({
    ui: {
      port: 4040,
    },
    port: 4000,
    notify: false,
    server: {
      baseDir: ['.tmp', 'public'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'public/*.html',
    'public/img/*'
  ]).on('change', reload);

  gulp.watch('public/sass/**/*.scss', ['sass']);
  gulp.watch('public/js/**/*.js', ['js']);
});

gulp.task('serve:dist', ['sass', 'js', 'extras', 'img', 'fonts'], () => {
  browserSync.init({
    ui: {
      port: 4040,
    },
    port: 4000,
    notify: false,
    server: {
      baseDir: ['dist']
    }
  });
  gulp.watch('public/sass/**/*.scss', ['sass', 'html']);
  gulp.watch('public/js/**/*.js', ['js', 'html']);
  gulp.watch('public/*.html', ['html']);
});

gulp.task('serve:test', ['js'], () => {
  browserSync.init({
    ui: false,
    port: 4000,
    notify: false,
    server: {
      baseDir: 'test/unit',
      routes: {
        '/js': '.tmp/js',
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('public/js/**/*.js', ['js']);
  gulp.watch('test/unit/spec/**/*.js').on('change', reload);
  gulp.watch('test/unit/spec/**/*.js', ['lint:test']);
});

function getProtractorBinary(binaryName){
    var winExt = /^win/.test(process.platform)? '.cmd' : '';
    var pkgPath = require.resolve('protractor');
    var protractorDir = path.resolve(path.join(path.dirname(pkgPath), '..', 'bin'));
    return path.join(protractorDir, '/'+binaryName+winExt);
}

gulp.task('e2e-install', function (done){
    child_process.spawn(getProtractorBinary('webdriver-manager'), ['update'], {
        stdio: 'inherit'
    }).once('close', done);
});

gulp.task('e2e', function (done) {
    // var argv = process.argv.slice(3); // forward args to protractor
    child_process.spawn(getProtractorBinary('protractor'), ['./test/e2e/conf.js'], {
        stdio: 'inherit'
    }).once('close', done);
});

gulp.task('build', ['lint', 'html', 'extras', 'img', 'fonts'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

// dist task is just a copy of the default task
gulp.task('dist', ['clean'], () => {
  gulp.start('build');
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
