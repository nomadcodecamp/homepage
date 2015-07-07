var gulp   = require('gulp')
var rsync  = require('gulp-rsync')

var config = require('../config').build;



gulp.task('deploy',['build'], function() {
  gulp.src(config.dest)
    .pipe(rsync({
      root: config.dest,
      ssh: true,
      recursive: true,
      username: 'user',
      hostname: '104.167.118.192',
      destination: '/usr/share/nginx/html'
    }));
});
