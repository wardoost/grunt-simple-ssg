module.exports = function(grunt, options){
  return {
    less: {
      options: {
        compress: true,
        //sourceMap: true,
        //sourceMapFileInline: true
      },
      files: {
        'build/<%= grunt.option("deploySubDir") %>assets/style.min.css': ['src/css/**/*.css', 'src/less/style.less']
      }
    }
  }
};