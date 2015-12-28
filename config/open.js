module.exports = function(grunt, options){
  return {
    deploy: {
      path: 'http://<%= grunt.option("deployURL") %>'
    }
  }
};