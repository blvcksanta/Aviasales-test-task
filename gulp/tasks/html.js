import pug from 'gulp-pug';
import htmlMin from 'gulp-htmlmin';

export const html = () => {
  return app.gulp.src(app.path.source.pug)
    .pipe(app.plugins.plumber())
    .pipe(pug({
      //сжатие html файла
      pretty: true,
      //Показывать в терминале какой файл обработан
      verbose: true,
    }))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(htmlMin({
      collapseWhitespace: true,
      removeComments: true,
      sortClassName: true,
    }))
    .pipe(app.plugins.rename({
      extname: '.min.html',
    }))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
}
