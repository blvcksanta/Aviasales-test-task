import terser from 'gulp-terser';

export const js = () => {
  return app.gulp.src(app.path.source.js, {sourcemaps: true})
    .pipe(app.plugins.plumber())
    .pipe(terser())
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
}
