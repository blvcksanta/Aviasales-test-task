import gulpSvgSprite from 'gulp-svg-sprite';

export const svgSprite = () => {
  return app.gulp.src(app.path.source.svgSprite, {})
    .pipe(app.plugins.plumber())
    .pipe(gulpSvgSprite({
      mode: {
        symbol: {
          sprite: '../sprite.svg',
        },
      },
      shape: {
        transform: [{
          svgo: {
            plugins: [
              {removeXMLNS: true},
              {removeXMLProcInst: true},
              {
                removeAttrs: {
                  attrs: ['class', 'data-name', 'fill', 'stroke.*']
                }
              },
            ]
          }
        }]
      },
    }))
    .pipe(app.gulp.dest(app.path.build.svgSprite))
}
