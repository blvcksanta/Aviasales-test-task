//Основной модуль
import gulp from 'gulp';
//Импорт путей
import {path} from './gulp/config/path.js';

import {plugins} from './gulp/config/plugins.js'

//Передаем значения в главную переменную
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

//Импорт задач
import {html} from './gulp/tasks/html.js';
import {reset} from './gulp/tasks/reset.js';
import {server} from './gulp/tasks/server.js';
import {scss} from './gulp/tasks/scss.js';
import {js} from './gulp/tasks/js.js';
import {img, svg} from './gulp/tasks/img.js';
import {svgSprite} from './gulp/tasks/svgSprite.js';
import {otfToTtf, ttfToWoff, copyWoff} from './gulp/tasks/fonts.js';


import jsonServer from 'json-server';

function test () {
  const server = jsonServer.create()
  const router = jsonServer.router('db.json')
  const middlewares = jsonServer.defaults()

  server.use(middlewares)
  server.use(router)
  server.listen(3000, () => {
    console.log('JSON Server is running')
  })
}

//Наблюдатель
function watcher () {
  gulp.watch(path.watch.pug, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.img, img);
  gulp.watch(path.watch.svgIcon, svg);
};

//Построение сценариев выполнения задач

const fonts = gulp.series(otfToTtf, ttfToWoff, copyWoff);

const dev = gulp.series(
  reset,
  fonts,
  gulp.parallel(
    html,
    scss,
    js,
    svg,
    img,
    svgSprite
  ),
  gulp.parallel(
    watcher,
    server,
    test
  ),
);

//Выполнения сценария по умолчанию
gulp.task('default', dev);

//Пользовательские задачи
gulp.task('del', reset);
