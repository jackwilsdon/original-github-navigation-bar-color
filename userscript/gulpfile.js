const gulp = require('gulp'),
      fs = require('fs'),
      { version } = require('./package.json'),
      cssmin = require('gulp-cssmin'),
      css2js = require('gulp-css2js'),
      rename = require('gulp-rename');

gulp.task('build', () => {
  const header = fs
    .readFileSync('./header.js', 'utf8')
    .replace(/^(\/\/\s*@version\s*) .*$/m, `$1 ${version}`)

  return gulp.src('../extension/fix-navigation-color.css')
      .pipe(cssmin())
      .pipe(css2js({
          prefix: header + 'GM_addStyle("',
          suffix: '");'
      }))
      .pipe(rename(`OriginalGithubNavigationBarColor${version}.user.js`))
      .pipe(gulp.dest('.'))
});

gulp.task('default', [ 'build' ])
