import libsquoosh from 'gulp-libsquoosh';
import svgMin from 'gulp-svgmin';

export const img = () => {
  return app.gulp.src(app.path.source.img)
    .pipe(app.plugins.plumber())
    .pipe(libsquoosh({
      webp: {},
    }))
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.gulp.src(app.path.source.img))
    .pipe(libsquoosh())
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.plugins.browserSync.stream());
}

export const svg = () => {
  return app.gulp.src(app.path.source.svgIcon)
  .pipe(svgMin({
    multipass: true,
    js2svg: {
      pretty: false,
      indent: 0,
    },
    full: true,
    plugins: [
      'sortAttrs',
      'removeDimensions',
      'removeTitle',
      'removeMetadata',
      'convertPathData',
      {
        name: 'removeViewBox',
        active: false,
      },
      {
        name: 'cleanupIDs',
        params: {
          minify: true,
        }
      },
    ],
  }))
    .pipe(app.gulp.dest(app.path.build.svgIcon))
    .pipe(app.plugins.browserSync.stream());
}
