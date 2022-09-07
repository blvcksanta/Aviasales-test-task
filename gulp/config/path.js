const buildFolder = `./build`;
const sourceFolder = `./source`;

export const path = {
  build: {
    fonts: `${buildFolder}/fonts/`,
    img: `${buildFolder}/img/`,
    svgIcon: `${buildFolder}/img/svg/icon/`,
    svgSprite: `${buildFolder}/img/svg/sprite/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
  },
  source: {
    fonts: `${sourceFolder}/fonts/*.{otf,ttf,woff}`,
    img: `${sourceFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svgIcon: `${sourceFolder}/img/svg/icon/*.svg`,
    svgSprite: `${sourceFolder}/img/svg/sprite/*.svg`,
    pug: `${sourceFolder}/*.pug`,
    scss: `${sourceFolder}/scss/style.scss`,
    js: `${sourceFolder}/js/**/*.js`
  },
  watch: {
    img: `${sourceFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
    svgIcon: `${sourceFolder}/img/svg/icon/*.svg`,
    svgSprite: `${sourceFolder}/img/svg/sprite/*.svg`,
    pug: `${sourceFolder}/**/*.pug`,
    scss: `${sourceFolder}/scss/**/*.scss`,
    js: `${sourceFolder}/js/**/*.js`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  sourceFolder: sourceFolder,
}
