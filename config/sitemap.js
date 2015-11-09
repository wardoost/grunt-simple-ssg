module.exports = function(grunt, options){
  return {
    build: {
      pattern: ['build/<%= grunt.option("deploySubDir") %>**/*.html',
                '!build/<%= grunt.option("deploySubDir") %>error/**/*.html'],
      siteRoot: 'build/<%= grunt.option("deploySubDir") %>',
      homepage: 'http://<%= grunt.option("deployURL") %>',
      changefreq: 'weekly', // always, hourly, daily, weekly, monthly, yearly, never
      extension: {
        required: false // Clean URL's
      }
    }
  }
};