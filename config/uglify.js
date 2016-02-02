module.exports = function(grunt, options){
  return {
    devHead: {
      options: {
        compress: false,
        beautify: true,
        mangle: false
      },
      src: [
        // Libraries and main.js
        'src/js/head/libs/*.js',
        'src/js/head/main.js'
      ],
      dest: 'build/<%= grunt.option("deploySubDir") %>assets/head.js'
    },
    devBody: {
      options: '<%= uglify.devHead.options %>',
      src: [
        // jQuery complete library
        'src/js/body/libs/jquery/jquery*.js',

        // Bootstrap library in the correct order
        //'src/js/body/libs/bootstrap/transition.js', 
        //'src/js/body/libs/bootstrap/alert.js',
        //'src/js/body/libs/bootstrap/button.js',
        //'src/js/body/libs/bootstrap/carousel.js',
        //'src/js/body/libs/bootstrap/collapse.js',
        //'src/js/body/libs/bootstrap/dropdown.js',
        //'src/js/body/libs/bootstrap/modal.js',
        //'src/js/body/libs/bootstrap/tooltip.js',
        //'src/js/body/libs/bootstrap/popover.js',
        //'src/js/body/libs/bootstrap/scrollspy.js',
        //'src/js/body/libs/bootstrap/tab.js',
        //'src/js/body/libs/bootstrap/affix.js',

        // -------------------------------------------------------
        // Libraries and main.js
        // -------------------------------------------------------
        //'src/js/body/libs/*.js',
        'src/js/body/main.js'
      ],
      dest: 'build/<%= grunt.option("deploySubDir") %>assets/body.js'
    },
    prodHead: {
      options: {
        compress: true,
        beautify: false,
        mangle: true
      },
      src: '<%= uglify.devHead.src %>',
      dest: '<%= uglify.devHead.dest %>'
    },
    prodBody: {
      options: '<%= uglify.prodHead.options %>',
      src: '<%= uglify.devBody.src %>',
      dest: '<%= uglify.devBody.dest %>'
    }
  }
};