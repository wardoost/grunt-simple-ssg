module.exports = {
  options: {
    livereload: true
  },
  html: {
    files: 'src/**/*.jade',
    tasks: ['jade']
  },
  css: {
    files: ['src/css/**/*.css', 'src/less/**/*.less'],
    tasks: ['less']
  },
  headjs: {
    files: 'src/js/head/**/*.js',
    tasks: ['uglify:head']
  },
  bodyjs: {
    files: 'src/js/body/**/*.js',
    tasks: ['uglify:body']
  },
  images: {
    files: ['src/img/**/*.{png,jpg,jpeg,gif}', '!src/img/favicon.png'],
    tasks: ['imagemin']
  },
  fonts: {
    files: 'src/fonts/*.{eot,svg,ttf,woff,woff2}',
    tasks: ['copy:fonts']
  },
  htaccess: {
    files: 'src/.htaccess',
    tasks: ['textfile:htaccess']
  },
  php: {
    files: ['src/**/*.php'],
    tasks: ['copy:php']
  },
  configFiles: {
    files: ['Gruntfile.js', 'config/*.js'],
    options: { reload: true }
  }
};