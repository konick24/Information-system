import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import prefixer from 'gulp-autoprefixer';
import clean from 'gulp-clean-css';
import concat from 'gulp-concat';
import map from 'gulp-sourcemaps';
import browser from 'browser-sync';

const sass = gulpSass(dartSass);

export const style = () => {
  return gulp.src('source/styles/styles.scss', { sourcemaps: true })
  .pipe(map.init())
  .pipe(sass({
      outputStyle: 'compressed'
  }).on('error', sass.logError))
  .pipe(prefixer({
    overrideBrowserslist: ['last 8 versions'],
    browsers: [
      'Android >= 4',
      'Chrome >= 20',
      'Firefox >= 24',
      'Explorer >= 11',
      'iOS >= 6',
      'Opera >= 12',
      'Safari >= 6',
    ],
  }))
  .pipe(clean({
    level: 2
  }))
  .pipe(concat('style.min.css'))
  .pipe(map.write('../sourcemaps/'))
  .pipe(gulp.dest('build/css/'))
  .pipe(browser.stream())
}

export const copy = (done) => {
  return gulp.src([
    "source/*.html",
    "source/images/**/*.svg",
    "source/js/**/*.js",
    "source/vendor/**/*.*"
  ], {base: "source"})
  .pipe(gulp.dest("build"))
}

export const server = () => {
  browser.init({
    server: {
      baseDir: 'build/',
      host: '192.168.0.9',
    },
    callback: {
      ready: (err, browser) => {
        browser.addMiddleware("*", (req, res) => {
          res.writeHead(302, {
            location: "404.html"
          });
          req.end("Reditecting!");
        });
      }
    },
    browser: 'chrome',
	  logPrefix: 'BS-HTML:',
	  logLevel: 'info',
	  logConnections: true,
	  logFileChanges: true,
	  open: true
  })
}

export const watching = () => {
  gulp.watch('source/styles/**/*.scss', gulp.parallel('style'));
}

export default gulp.series(
  copy,
  gulp.parallel(
    server,
    watching
  )
)
