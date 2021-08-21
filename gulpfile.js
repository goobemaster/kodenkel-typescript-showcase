var gulp = require('gulp');
var ts = require('gulp-typescript');
 
var tsSourceOptions = {
    removeComments: true,
    preserveConstEnums: true,
    lib: ['es5', 'dom', 'esnext'],
    module: 'amd',
    target: 'es5',
    noImplicitAny: true,
    moduleResolution: 'node'
}

gulp.task('app', function () {
    tsSourceOptions.outFile = 'application.js';

    return gulp.src('app/**/*.ts')
        .pipe(ts(tsSourceOptions))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function () {
    (gulp.series("app")());
});