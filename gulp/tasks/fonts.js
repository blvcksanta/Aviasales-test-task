import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
  return app.gulp.src(`${app.path.sourceFolder}/fonts/*.otf`, {})
    .pipe(app.plugins.plumber())
    .pipe(fonter({
      formats: ['ttf'],
    }))
    .pipe(app.gulp.dest(`${app.path.sourceFolder}/fonts/`));
};

export const copyWoff = () => {
  return app.gulp.src(`${app.path.sourceFolder}/fonts/*.{woff,woff2}`)
    .pipe(app.gulp.dest(app.path.build.fonts));
}

export const ttfToWoff = () => {
  return app.gulp.src(`${app.path.sourceFolder}/fonts/*.ttf`, {})
    .pipe(app.plugins.plumber())
    .pipe(fonter({
      formats: ['woff'],
    }))
    .pipe(app.gulp.dest(app.path.build.fonts))
    .pipe(app.gulp.src(`${app.path.sourceFolder}/fonts/*.ttf`, {}))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.build.fonts));
};
