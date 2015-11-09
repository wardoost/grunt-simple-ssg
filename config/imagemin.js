var jpegRecompress = require('imagemin-jpeg-recompress');

module.exports = function(grunt, options){
  return {
    options: {
      progressive: true,
      use: [jpegRecompress({
        quality: 'veryhigh',
        loops: 4
      })]
    },
    images: {
      files: [{
        expand: true,
        cwd: 'src',
        src: ['img/**/*.{png,jpg,jpeg,gif}', '!img/favicon.png'],
        dest: 'build/<%= grunt.option("deploySubDir") %>'
      }]
    }
  }
};