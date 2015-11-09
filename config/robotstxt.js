module.exports = function(grunt, options){
  return {
    build: {
      dest: 'build/<%= grunt.option("deploySubDir") %>',
      policy: [
      {
        ua: '*',
        disallow: ['/assets/', '/img/', '/error/']
      },
      { sitemap: ['http://<%= grunt.option("deployURL") %>sitemap.xml'] },
      { crawldelay: 100 },
      { host: '<%= grunt.option("deployURL") %>' }
      ]
    }
  }
};