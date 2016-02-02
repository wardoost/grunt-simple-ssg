module.exports = function(grunt, options){
  return {
    options: {
      title: '<%= grunt.option("projectDir") %>'
    },
    prodBuild: {
      options: {
        message: 'Production build complete'
      }
    },
    devBuild: {
      options: {
        message: 'Development build complete'
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