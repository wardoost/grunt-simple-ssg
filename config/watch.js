module.exports = {
  options: {
    livereload: true
  },
  html: {
    files: 'src/**/*.jade',
    tasks: ['jade', 'notify:refresh']
  },
  css: {
    files: ['src/css/**/*.css', 'src/less/**/*.less'],
    tasks: ['less', 'notify:refresh']
  },
  headjs: {
    files: 'src/js/head/**/*.js',
    tasks: ['uglify:head', 'notify:refresh']
  },
  bodyjs: {
    files: 'src/js/body/**/*.js',
    tasks: ['uglify:body', 'notify:refresh']
  },
  images: {
    files: ['src/img/**/*.{png,jpg,jpeg,gif}', '!src/img/favicon.png'],
    tasks: ['imagemin', 'notify:refresh']
  },
  fonts: {
    files: 'src/fonts/*.{eot,svg,ttf,woff,woff2}',
    tasks: ['copy:fonts', 'notify:refresh']
  },
  htaccess: {
    files: 'src/.htaccess',
    tasks: ['textfile:htaccess', 'notify:refresh']
  },
  php: {
    files: ['src/**/*.php'],
    tasks: ['copy:php', 'notify:refresh']
  },
  configFiles: {
    files: ['Gruntfile.js', 'config/*.js'],
    options: { reload: true }
  }
};