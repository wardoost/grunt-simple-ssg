module.exports = function(grunt, options){
  return {
    options: {
      livereload: true
    },
    html: {
      files: 'src/**/*.jade',
      tasks: ['jade', 'notify:refresh']
    },
    cssDev: {
      files: ['src/css/**/*.css', 'src/less/**/*.less'],
      tasks: ['less:dev', 'notify:refresh']
    },
    cssProd: {
      files: ['src/css/**/*.css', 'src/less/**/*.less'],
      tasks: ['less:prod', 'notify:refresh']
    },
    headJsDev: {
      files: 'src/js/head/**/*.js',
      tasks: ['uglify:devHead', 'notify:refresh']
    },
    headJsProd: {
      files: 'src/js/head/**/*.js',
      tasks: ['uglify:prodHead', 'notify:refresh']
    },
    bodyJsDev: {
      files: 'src/js/body/**/*.js',
      tasks: ['uglify:devBody', 'notify:refresh']
    },
    bodyJsProd: {
      files: 'src/js/body/**/*.js',
      tasks: ['uglify:prodBody', 'notify:refresh']
    },
    imagesDev: {
      files: ['src/img/**/*.{png,jpg,jpeg,gif}', '!src/img/favicon.png'],
      tasks: ['copy:images', 'notify:refresh']
    },
    imagesProd: {
      files: ['src/img/**/*.{png,jpg,jpeg,gif}', '!src/img/favicon.png'],
      tasks: ['imagemin', 'notify:refresh']
    },
    favicons: {
      files: ['src/img/favicon.png'],
      tasks: ['favicons', 'notify:refresh']
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
      options: {
        reload: true
      }
    }
  }
};