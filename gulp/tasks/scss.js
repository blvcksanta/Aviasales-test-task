import dartSass from 'sass';
import gulpSass from 'gulp-sass';

// import webpCss from 'gulp-webpcss'; мб потом пригодиться
import postcss from 'gulp-postcss';
import csso from 'postcss-csso';
import autoprefixer from 'autoprefixer';
import mediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.source.scss, {sourcemap: true})
    .pipe(app.plugins.plumber())
    .pipe(sass({
      outputStyle: 'expanded',
    }))
    .pipe(mediaQueries())
    .pipe(postcss([
      autoprefixer(),
      csso(),
    ]))
    .pipe(app.plugins.rename({
      extname: '.min.css',
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
}
