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
        message: 'Server is ready. Watch task starting up...'
      }
    },
    deploy: {
      options: {
        message: 'Site deployed to <%= grunt.option("deployURL") %>'
      }
    },
    refresh: {
      options: {
        message: 'Watch task refreshed your page'
      }
    }
  }
};