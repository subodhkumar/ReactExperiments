var gulp = require('gulp');
var gulp = require('gulp-babel');

var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('buildReact',function(){
    gulp.src('./scripts/*.js').pipe(babel({
        presets:["env","react"]
    })).pipe(gulp.dest('./dist'));
});

gulp.task('default',['buildReact'],function(){
    gulp.watch('./scripts/*.js',['buildReact']);
});
