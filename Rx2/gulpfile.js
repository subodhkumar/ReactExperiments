const gulp = require('gulp');
const babel = require('gulp-babel');



gulp.task('testTask',function(){
	return gulp.src('./src/*.js').pipe(babel({
		presets:['es2015','react']
	})).pipe(gulp.dest('dist'));
});

gulp.task('es6',function(){
	return gulp.src('./src/app.js').pipe(babel({
		presets:['es2015','react']
	})).pipe(gulp.dest('dist'));
});

gulp.task('default',['testTask','es6'],function(){
	//gulp.watch('src/app.js',['es6']);
	gulp.watch('src/*.js',['testTask']);
	console.log(' Gulp Running');
});