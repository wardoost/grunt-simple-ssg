module.exports = function(grunt, options){
  return {
    options: {
      title: '<%= grunt.option("projectDir") %>'
    },
    build: {
      options: {
        message: 'Build complete'
      }
    },
    server: {
      options: {
        message: 'Server is ready. Watch tasks starting up...'
      }
    },
    deploy: {
      options: {
        message: 'Site deployed to <%= grunt.option("deployURL") %>'
      }
    }
  }
};