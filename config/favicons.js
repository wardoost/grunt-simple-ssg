module.exports = function(grunt, options){
  return {
    icons: {
      options: {
        // html: 'build/' + grunt.option("deploySubDir") + 'index.html', // Edit the pre-generated in includes/icons.jade if you make changes here
        HTMLPrefix: 'img/favicons/',
        trueColor: true,
        regular: true,

        apple: true,
        appleTouchBackgroundColor: '#FFFFFF',

        windowsTile: true,
        tileBlackWhite: true,

        coast: true,

        firefox: true,

        androidHomescreen: true,
      },
      src: 'src/img/favicon.png',
      dest: 'build/<%= grunt.option("deploySubDir") %>img/favicons'
    }
  }
};