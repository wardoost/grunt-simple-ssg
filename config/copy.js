module.exports = function(grunt, options){
  return {
    images: {
      expand: true,
      cwd: 'src',
      src: ['img/**/*.{png,jpg,jpeg,gif,svg}', '!img/favicon.png'],
      dest: 'build/<%= grunt.option("deploySubDir") %>'
    },
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