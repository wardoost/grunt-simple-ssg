module.exports = function(grunt, options){
  return {
    fonts: {
      expand: true,
      cwd: 'src',
      src: ['fonts/*.{eot,svg,ttf,woff}'],
      dest: 'build/<%= grunt.option("deploySubDir") %>assets'
    },
    php: {
      expand: true,
      cwd: 'src',
      src: ['**/*.php'],
      dest: 'build/<%= grunt.option("deploySubDir") %>'
    }
  }
};