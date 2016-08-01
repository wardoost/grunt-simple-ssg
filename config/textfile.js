module.exports = function(grunt, options){
  return {
    htaccess: {
      options: {
        template: 'htaccess.tpl',
        templateDir: 'src',
        dest: 'build/<%= grunt.option("deploySubDir") %>',
        urlFormat: '.htaccess',
        customVars: {
          pathRelativeRoot: '/<%= grunt.option("deploySubDir") %>'
        }
      }
    }
  }
};
