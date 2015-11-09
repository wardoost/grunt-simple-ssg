module.exports = function(grunt, options){
  return {
    htaccess: {
      options: {
        template: 'htaccess.tpl',
        templateDir: 'src',
        dest: 'build/<%= grunt.option("deploySubDir") %>',
        urlFormat: '.htaccess',
        customVars: {
          url: '<%= grunt.option("deployURL") %>',
          pathRelativeRoot: '/<%= grunt.option("deploySubDir") %>'
        }
      }
    }
  }
};