module.exports = function(grunt, options){
  return {
    dev: {
      options: {
        compress: false,
        //sourceMap: true,
        sourceMapFileInline: true
      },
      src: ['src/css/**/*.css', 'src/less/style.less'],
      dest: 'build/<%= grunt.option("deploySubDir") %>assets/style.css'
    },
    prod: {
      options: {
        compress: true
      },
      src: '<%= less.dev.src %>',
      dest: '<%= less.dev.dest %>'
    }
  }
};