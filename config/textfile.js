module.exports = function(grunt, options){
  return {
    htaccess: {
      options: {
        template: 'htaccess.tpl',
        templateDir: 'src',
        dest: 'build/<%= grunt.option("deploySubDir") %>',
        urlFormat: '.htaccess',
        customVars: {
          domain: '<%= grunt.option("deployDomain") %>',
          pathRelativeRoot: '/<%= grunt.option("deploySubDir") %>'
        }
      }
    }
  }
};
